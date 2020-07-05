<!doctype html>
<html class="no-js" lang="{{ app()->getLocale() }}">
    <head>
       
    <title>Lautech Alumni</title>
    
        @include('layouts.head')
    </head>
    <body>
        <div class="flex-center position-ref full-height"> 
    @include('layouts.header')
   
      @yield('content')

    </div>  
    @include('layouts.footer')    
    @include('layouts.footer-script')    
    </body>
</html>