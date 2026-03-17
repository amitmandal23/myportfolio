<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ContentController extends Controller
{
    // Get content for a specific page
    public function index(Request $request)
    {
        $page = $request->query('page');
        if ($page) {
            $contents = Content::where('page', $page)->get();
            // Group by section for easier frontend consumption
            $grouped = [];
            foreach ($contents as $content) {
                if (!isset($grouped[$content->section])) {
                    $grouped[$content->section] = [];
                }
                $grouped[$content->section][$content->key] = $content;
            }
            return response()->json($grouped);
        }
        
        // If no page specified, return all (or list of pages, but usually we fetch by page)
        return response()->json(Content::all());
    }

    // Update or Create content
    public function update(Request $request)
    {
        $request->validate([
            'page' => 'required|string',
            'section' => 'required|string',
            'key' => 'required|string',
            'value' => 'nullable', // Can be string or file
            'type' => 'required|in:text,image,rich_text',
        ]);

        $value = $request->input('value');

        // Handle Image Upload
        if ($request->hasFile('value') && $request->input('type') === 'image') {
            $path = $request->file('value')->store('uploads', 'public');
            $value = asset('storage/' . $path);
        }

        $content = Content::updateOrCreate(
            [
                'page' => $request->input('page'),
                'section' => $request->input('section'),
                'key' => $request->input('key'),
            ],
            [
                'value' => $value,
                'type' => $request->input('type'),
            ]
        );

        return response()->json($content);
    }
    
    // Bulk Update for a page (useful for saving a whole form)
    public function bulkUpdate(Request $request)
    {
        $data = $request->all(); // Expecting array of content objects
        $updated = [];
        
        foreach ($data as $item) {
             // Basic validation manually
             if (!isset($item['page']) || !isset($item['section']) || !isset($item['key'])) continue;
             
             $content = Content::updateOrCreate(
                [
                    'page' => $item['page'],
                    'section' => $item['section'],
                    'key' => $item['key'],
                ],
                [
                    'value' => $item['value'],
                    'type' => $item['type'] ?? 'text',
                ]
            );
            $updated[] = $content;
        }
        
        return response()->json($updated);
    }
}