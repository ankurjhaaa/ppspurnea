<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('public/Home');
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('public/AboutUs');
})->name('about');

Route::get('/academics', function () {
    return Inertia::render('public/Academics');
})->name('academics');

Route::get('/admissions', function () {
    return Inertia::render('public/Admissions');
})->name('admissions');

Route::get('/facilities', function () {
    return Inertia::render('public/Facilities');
})->name('facilities');

Route::get('/gallery', function () {
    return Inertia::render('public/Gallery');
})->name('gallery');

Route::get('/contact-us', function () {
    return Inertia::render('public/ContactUs');
})->name('contact');
