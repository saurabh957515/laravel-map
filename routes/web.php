    <?php

    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\test;
    use App\Http\Controllers\NoteController;
    use Inertia\Inertia;

    Route::get('/', function () {
    return Inertia::render('Welcome/Index');
    })->name('home');



    // Route::get('/note',[NoteController::class,'index'])->name('note.index');
    // Route::get('/note/create',[NoteController::class,'create'])->name('note.create');
    // Route::post('/note',[NoteController::class,'store'])->name('note.store');
    // Route::get('/note/${id}',[NoteController::class,'show'])->name('note.show');
    // Route::get('/note/${id}/edit',[NoteController::class,'edit'])->name('note.edit');
    // Route::put('/note/${id}',[NoteController::class,'update'])->name('note.update');
    // Route::delete('/note/${id}',[NoteController::class,'destroy'])->name('note.destory');

    Route::resource('note',NoteController::class);