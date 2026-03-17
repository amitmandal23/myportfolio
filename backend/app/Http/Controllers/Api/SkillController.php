<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index()
    {
        return Skill::orderBy('sort_order')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'proficiency' => 'required|integer|min:0|max:100',
            'category' => 'nullable|string',
            'icon' => 'nullable|string',
        ]);

        $skill = Skill::create($validated);

        return response()->json($skill, 201);
    }

    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'proficiency' => 'sometimes|required|integer|min:0|max:100',
            'category' => 'nullable|string',
            'icon' => 'nullable|string',
        ]);

        $skill->update($validated);

        return response()->json($skill);
    }

    public function destroy(Skill $skill)
    {
        $skill->delete();
        return response()->json(null, 204);
    }
}
