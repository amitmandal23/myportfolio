<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\SettingController;
use App\Http\Controllers\Api\ContentController;

Route::post('/login', [AuthController::class, 'login']);

// Public Routes
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{project}', [ProjectController::class, 'show']);
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/settings', [SettingController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
Route::get('/content', [ContentController::class, 'index']); // Public access to fetch content

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Content Management
    Route::post('/content', [ContentController::class, 'update']);
    Route::post('/content/bulk', [ContentController::class, 'bulkUpdate']);

    // Admin CRUD for Projects (Index and Show are public, but we might want admin variants if needed, for now reuse)
    // Actually apiResource creates all routes. We want to protect store, update, destroy.
    // So we can list them explicitly or use apiResource and excluding what we defined publicly?
    // Route::resource overlap can be tricky.
    // Let's keep it simple: Public routes are defined above.
    // We can define "admin" routes for creation/update/delete.
    
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::put('/projects/{project}', [ProjectController::class, 'update']);
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);

    Route::post('/services', [ServiceController::class, 'store']);
    Route::put('/services/{service}', [ServiceController::class, 'update']);
    Route::delete('/services/{service}', [ServiceController::class, 'destroy']);

    Route::post('/skills', [SkillController::class, 'store']);
    Route::put('/skills/{skill}', [SkillController::class, 'update']);
    Route::delete('/skills/{skill}', [SkillController::class, 'destroy']);
    
    Route::get('/contacts', [ContactController::class, 'index']);
    Route::get('/contacts/{contact}', [ContactController::class, 'show']);
    Route::delete('/contacts/{contact}', [ContactController::class, 'destroy']);
    
    Route::post('/settings', [SettingController::class, 'update']);
});
