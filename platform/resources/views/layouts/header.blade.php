    <!--== Header Area Start ==-->
    <header id="header-area">
    <div class="preheader-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-7 col-7">
                    <div class="preheader-left">
                        <a href="mailto:info@construc.com"><strong>Email:</strong> lautechalumni@gmail.com</a>
                        <a href="mailto:info@construc.com"><strong>Hotline:</strong> +234 701 234 5678</a>
                    </div>
                </div>

                <div class="col-lg-6 col-sm-5 col-5 text-right">
                @if (Route::has('login'))
                <div class="preheader-right">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a title="Login" class="btn-auth btn-auth-rev" href="{{ route('login') }}">Already A Member</a>
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
                            <img src="assets/img/logo.png" alt="Logo">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menucontent" aria-controls="menucontent" aria-expanded="false">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="menucontent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active"><a class="nav-link" href="{{url('/')}}">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="{{url('about/')}}">About</a></li>
                                <li class="nav-item"><a class="nav-link" href="gallery.html">Member</a></li>
                                <li class="nav-item"><a class="nav-link" href="event.html">Event</a></li>
                                <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
                                <!-- <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="blog.html" data-toggle="dropdown" role="button">More</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link" href="blog.html">Ca</a></li>
                                        <li class="nav-item"><a class="nav-link" href="single-blog.html">Single Blog Right Sidebar</a></li>
                                        <li class="nav-item"><a class="nav-link" href="single-blog-leftsidebar.html">Single Blog left Sidebar</a></li>
                                        <li class="nav-item"><a class="nav-link" href="single-blog-withoutsidebar.html">Single Blog No Sidebar</a></li>
                                    </ul>
                                </li> -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button">More</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link dropdown-toggle" href="gallery.html" role="button">Career</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item"><a class="nav-link" href="gallery.html">Job Opportunities</a></li>
                                                <li class="nav-item"><a class="nav-link" href="single-album.html">Scholarship</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item"><a class="nav-link" href="committee.html">Committee</a></li>
                                        <li class="nav-item"><a class="nav-link" href="directory.html">News</a></li>                                   
                                        <li class="nav-item"><a class="nav-link" href="index-offcanvas.html">Constitution</a></li>
                                        <li class="nav-item"><a class="nav-link" href="typography.html">Capacity Building</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
<!--== Header Area End ==-->