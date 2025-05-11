<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    $notes=Test::query()->orderBy('created_at','desc')->paginate(10);
     return view('note.index',['notes'=>$notes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
     return view('note.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
     return view('note.store');
    }

    /**
     * Display the specified resource.
     */
    public function show(Test $test)
    {
     return view('note.show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Test $test)
    {
     return view('note.edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Test $test)
    {
     return view('note.update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Test $test)
    {
     return view('note.destroy');
    }
}
