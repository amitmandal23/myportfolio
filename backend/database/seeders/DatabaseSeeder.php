<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // Create Admin User
        User::updateOrCreate(
            ['email' => 'admin'],
            [
                'name' => 'Admin',
                'password' => bcrypt('admin@321'),
            ]
        );

        // Create New User: amit
        User::updateOrCreate(
            ['email' => 'amit'],
            [
                'name' => 'Amit',
                'password' => bcrypt('amit@321'),
            ]
        );
    }
}