<x-layout>
   @foreach ($notes as $note)
       <div>
             {{$note->note}}
<button>
    edit</button>
    </div>
   @endforeach
</x-layout>
