    <!--== Header Area Start ==-->
    <header id="header-area">
    <div class="preheader-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-7 col-7">
                    <div class="preheader-left">
                        <a href="mailto:info@construc.com"><strong>Email:</strong> {{ \App\App_setting::select('email1')->first()->email1 }} </a>
                        <a href="mailto:info@construc.com"><strong>Hotline:</strong> {{ \App\App_setting::select('phone_number')->first()->phone_number }} </a>
                    </div>
                </div>

                <div class="col-lg-6 col-sm-5 col-5 text-right">
                @if (Route::has('login'))
                <div class="preheader-right">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a title="Login" class="btn-auth btn-auth-rev" href="http://localhost:4200/" target="_blank">Already A Member</a>
                        <a title="Register" class="btn-auth btn-auth" href="{{ route('register') }}">Be a Member</a>
                    @endauth
                </div>
            @endif
                    <!-- <div class="preheader-right">
                        <a title="Login" class="btn-auth btn-auth-rev" href="{{ route('login') }}">Login</a>
                        <a title="Register" class="btn-auth btn-auth" href="{{ route('register') }}">Signup</a>
                    </div> -->
                </div>
            </div>
        </div>
    </div>

    <div class="header-bottom-area" id="fixheader">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="main-menu navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="{{url('/')}}">
                            {{-- <img src="assets/img/logo.png" alt="Logo"> --}}
                            <img src="http://{{\App\App_setting::select('url')->first()->url}}/{{\App\App_setting::select('logo')->first()->logo}}" alt="Logo" style=" height:120px;width:250px ">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menucontent" aria-controls="menucontent" aria-expanded="false">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="menucontent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active"><a class="nav-link" href="{{url('/')}}">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="{{url('about/')}}">About</a></li>
                                <li class="nav-item"><a class="nav-link" href="{{url('members/')}}">Member</a></li>
                                <li class="nav-item"><a class="nav-link" href="{{url('events/')}}">Event</a></li>
                                <li class="nav-item"><a class="nav-link" href="{{url('gallery/')}}">Gallery</a></li>                              
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button">More</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link" href="{{url('job/')}}" role="button">Career</a></li>
                                        <li class="nav-item"><a class="nav-link" href="{{url('commitee/')}}">Committee</a></li>
                                        <li class="nav-item"><a class="nav-link" href="{{url('news/')}}">News</a></li>                                   
                                        <li class="nav-item"><a class="nav-link" href="index-offcanvas.html">Constitution</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="{{url('contactus/')}}">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
<!--== Header Area End ==-->