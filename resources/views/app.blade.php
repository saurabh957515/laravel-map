<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="w-full h-full bg-gray-100">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Larvel') }}</title>

    @routes
    @viteReactRefresh
     @vite('resources/css/app.css')
    @vite(['resources/js/app.jsx'])
    @inertiaHead
</head>

<body class="w-full h-full antialiased font-poppins">
    @inertia
</body>

</html>