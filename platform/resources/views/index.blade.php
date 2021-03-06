@extends('layouts.master')

<!-- @section('css')
@endsection

@section('breadcrumb')
             
							
@endsection -->

@section('content')
              
    <!--== Slider Area Start ==-->
    <section id="slider-area">
    <div class="slider-active-wrap owl-carousel text-center text-md-left">
        <!-- Single Slide Item Start -->
        @foreach ($home as $h)
        <div class="single-slide-wrap slide-bg-{{$h->id}}" style="background-image: url('http://{{$settings->url}}/{{$h->home_image}}');">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                   
                        <div class="slider-content">
                            <h2>{{$h->component1}}</h2>
                            <h3>{{$h->component2}} <span>LAUTECH</span></h3>
                            <p>{{$h->component3}}</p>
                            <div class="slider-btn">
                                <a href="#about-area" class="btn btn-brand smooth-scroll">our mission</a>
                                <a href="about.html" class="btn btn-brand-rev">our story</a>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <!-- Social Icons Area Start -->
    <div class="social-networks-icon">
        <ul>
            <li><a href="#"><i class="fa fa-facebook"></i> <span>7.2k Likes</span></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i> <span>3.2m Followers</span></a></li>
            <li><a href="#"><i class="fa fa-pinterest"></i> <span>7.2k Likes</span></a></li>
            <li><a href="#"><i class="fa fa-youtube"></i> <span>2.2k Subscribers</span></a></li>
        </ul>
    </div>
    <!-- Social Icons Area End -->
</section>
<!--== Slider Area End ==-->

    <!--== Upcoming Event Area Start ==-->
<section id="upcoming-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="upcoming-event-wrap">
                    <div class="up-event-titile">
                        <h3>Upcoming event</h3>
                    </div>
                    <div class="upcoming-event-content owl-carousel">
                        <!-- No 1 Event -->
                        @foreach ($event as $e)
                        <div class="single-upcoming-event">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="up-event-thumb">
                                        <img src="http://{{$settings->url}}/{{$e->event_image}}" class="img-fluid" alt="Upcoming Event">
                                        <h4 class="up-event-date">It&#x2019;s {{$e->start_date}}</h4>
                                    </div>
                                </div>

                                <div class="col-lg-7">
                                    <div class="display-table">
                                        <div class="display-table-cell">
                                            <div class="up-event-text">
                                                <div class="event-countdown">
                                                    <div class="event-countdown-counter" data-date="2018/9/10"></div>
                                                    <p>Remaining</p>
                                                </div>
                                                <h3><a href="single-event.html">{{$e->subject}}!</a></h3>
                                                <p>{{$e->content}}</p>
                                                <a href="single-event.html" class="btn btn-brand btn-brand-dark">join with us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                        <!-- partial -->                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--== Upcoming Event Area End ==-->

    <!--== About Area Start ==-->
<section id="about-area" class="section-padding">
    <div class="about-area-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 ml-auto">
                    <div class="about-content-wrap">
                        <div class="section-title text-center text-lg-left">
                            <h2>President Welcome Address</h2>
                        </div>

                        <div class="about-thumb">
                            <img src="http://{{$settings->url}}/{{$president->images}}" alt="" class="img-fluid">
                        </div>

                        <p style="white-space: pre-line">{{$president->content}}</p>
                        <!-- <p>{{$president->paragraph_2}}</p>
                        <p>{{$president->paragraph_3}}</p> -->
                        <div class="section-title text-center text-lg-left">
                        <br>
                        <h6>{{$president->content2}}</h6>
                        <h5>{{$president->content3}}</h5>
                        </div>
                        
                        <a href="{{url('about/')}}" class="btn btn-brand about-btn">More About Us</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--== About Area End ==-->

    <!--== Our Responsibility Area Start ==-->
<section id="responsibility-area" class="section-padding">
    <div class="container">
        <!--== Section Title Start ==-->
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="section-title">
                    <h2>Our Responsibility</h2>
                </div>
            </div>
        </div>
        <!--== Section Title End ==-->

        <!--== Responsibility Content Wrapper ==-->
        <div class="row text-center text-sm-left">
            <!--== Single Responsibility Start ==-->
            @foreach ($responsibilities as $res)
            <div class="col-lg-3 col-sm-6">
                <div class="single-responsibility">
                    <img src="http://{{$settings->url}}/{{$res->image}}" alt="Responsibility">
                    <h4>{{$res->title}}</h4>
                    <p>{{$res->content}}</p>
                </div>
            </div>
            @endforeach
            <!--== Single Responsibility End ==-->
        </div>
        <!--== Responsibility Content Wrapper ==-->
    </div>
</section>
<!--== Our Responsibility Area End ==-->

    <!--== FunFact Area Start ==-->
<section id="funfact-area">
    <div class="container-fluid">
        <div class="row text-center">
            <!--== Single FunFact Start ==-->
            <div class="col-lg-3 col-sm-6">
                <div class="single-funfact-wrap">
                    <div class="funfact-icon">
                        <img src="assets/img/fun-fact/user.svg" alt="Funfact">
                    </div>
                    <div class="funfact-info">
                        <h5 class="funfact-count">4025</h5>
                        <p>Members</p>
                    </div>
                </div>
            </div>
            <!--== Single FunFact End ==-->

            <!--== Single FunFact Start ==-->
            <div class="col-lg-3 col-sm-6">
                <div class="single-funfact-wrap">
                    <div class="funfact-icon">
                        <img src="assets/img/fun-fact/picture.svg" alt="Funfact">
                    </div>
                    <div class="funfact-info">
                        <h5 class="funfact-count">8725</h5>
                        <p>Photos</p>
                    </div>
                </div>
            </div>
            <!--== Single FunFact End ==-->

            <!--== Single FunFact Start ==-->
            <div class="col-lg-3 col-sm-6">
                <div class="single-funfact-wrap">
                    <div class="funfact-icon">
                        <img src="assets/img/fun-fact/event.svg" alt="Funfact">
                    </div>
                    <div class="funfact-info">
                        <h5><span class="funfact-count">231</span>+</h5>
                        <p>Events</p>
                    </div>
                </div>
            </div>
            <!--== Single FunFact End ==-->

            <!--== Single FunFact Start ==-->
            <div class="col-lg-3 col-sm-6">
                <div class="single-funfact-wrap">
                    <div class="funfact-icon">
                        <img src="assets/img/fun-fact/medal.svg" alt="Funfact">
                    </div>
                    <div class="funfact-info">
                        <h5><span class="funfact-count">32</span>+</h5>
                        <p>Awards</p>
                    </div>
                </div>
            </div>
            <!--== Single FunFact End ==-->
        </div>
    </div>
</section>
<!--== FunFact Area End ==-->

    <!--== Job Opportunity Area Start ==-->
<section id="job-opportunity" class="section-padding">
    <div class="container">
        <!--== Section Title Start ==-->
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="section-title">
                    <h2>Recent Jobs</h2>
                </div>
            </div>
        </div>
        <!--== Section Title End ==-->

        <!--== Job opportunity Wrapper ==-->
        <div class="job-opportunity-wrapper">
            <div class="row">
                <!--== Single Job opportunity Start ==-->
                @foreach ($career as $cr)
                <div class="col-lg-4 col-sm-6 text-center">
                    <div class="single-job-opportunity">
                        <div class="job-opportunity-text">
                            <div class="job-oppor-logo">
                                <div class="display-table">
                                    <div class="display-table-cell">
                                        <img src="http://{{$settings->url}}/{{$cr->car_image}}" alt="Job">
                                    </div>
                                </div>
                            </div>
                            <h3><a href="#">{{$cr->title}}</a></h3>
                            <p>{{$cr->content}}<a href="#">[...]</a></p>
                        </div>
                        <a href="#" class="btn btn-job">Apply now</a>
                    </div>
                </div>
            @endforeach
                <!--== Single Job opportunity End ==-->               

            </div>

            <div class="row">
                <div class="col-lg-12 text-center">
                    <a href="{{url('job/')}}" class="btn btn-brand btn-loadmore">All job list</a>
                </div>
            </div>
        </div>
        <!--== Job opportunity Wrapper ==-->
    </div>
</section>
<!--== Job Opportunity Area End ==-->

    <!--== Gallery Area Start ==-->
<section id="gallery-area" class="section-padding">
    <div class="container">
        <!--== Section Title Start ==-->
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="section-title">
                    <h2>Our gallery</h2>
                </div>
            </div>
        </div>
        <!--== Section Title End ==-->

        <!--== Gallery Container Warpper ==-->
        <div class="gallery-content-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Gallery Menu Start -->
                 
                    <div class="gallery-menu text-center">
                        <span class="active" data-filter="*">All</span>
                        @foreach ($image_cat as $img)
                        <span data-filter=".{{$img->about}}">{{$img->image_cate_name}}</span>  
                        @endforeach                      
                        <!-- <span class="d-none d-sm-inline-block" data-filter=".recent">Recent</span> -->
                    </div>
                 
                    <!-- Gallery Menu End -->

                    <!-- Gallery Item content Start -->
                        <div class="row gallery-gird">
    <!-- Single Gallery Start -->
    @foreach ($galleries as $g)
    <div class="col-lg-3  col-sm-6 {{$g->about}}">
        <div class="single-gallery-item gallery-bg-1">
        <img src="http://{{$settings->url}}/{{$g->file}}" alt="a">
            <div class="gallery-hvr-wrap">
                <div class="gallery-hvr-text">
                    <h4>{{$g->image_name}}</h4>
                    <p class="gallery-event-date">28 Oct, 2018</p>
                </div>
                <a href="http://{{$settings->url}}/{{$g->file}}" class="btn-zoom image-popup">
                    <img src="http://{{$settings->url}}/{{$g->file}}" alt="a">
                </a>
            </div>
        </div>
    </div>
    @endforeach
    <!-- Single Gallery End -->

    <!-- Single Gallery Start -->
    <!-- <div class="col-lg-3  col-sm-6 old event pic">
        <div class="single-gallery-item video gallery-bg-2">
            <a href="https://player.vimeo.com/video/140182080?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;loop=1" class="btn btn-video-play video-popup"><i class="fa fa-play"></i></a>
        </div>
    </div> -->
    <!-- Single Gallery End -->

    <!-- Single Gallery Start -->
    <!-- <div class="col-lg-3  col-sm-6 recent pic">
        <div class="single-gallery-item gallery-bg-3">
            <div class="gallery-hvr-wrap">
                <div class="gallery-hvr-text">
                    <h4>University Cumpus</h4>
                    <p class="gallery-event-date">28 Oct, 2018</p>
                </div>
                <a href="assets/img/gallery/gellary-img-3.jpg" class="btn-zoom image-popup">
                    <img src="assets/img/zoom-icon.png" alt="a">
                </a>
            </div>
        </div>
    </div> -->
    <!-- Single Gallery End -->

    <!-- Single Gallery Start -->
    <!-- <div class="col-lg-3  col-sm-6 old">
        <div class="single-gallery-item gallery-bg-4">
            <div class="gallery-hvr-wrap">
                <div class="gallery-hvr-text">
                    <h4>University Cumpus</h4>
                    <p class="gallery-event-date">28 Oct, 2018</p>
                </div>
                <a href="assets/img/gallery/gellary-img-4.jpg" class="btn-zoom image-popup">
                    <img src="assets/img/zoom-icon.png" alt="a">
                </a>
            </div>
        </div>
    </div> -->
    <!-- Single Gallery End -->

    <!-- Single Gallery Start -->
    <!-- <div class="col-lg-3  col-sm-6 pic event">
        <div class="single-gallery-item gallery-bg-5">
            <div class="gallery-hvr-wrap">
                <div class="gallery-hvr-text">
                    <h4>University Cumpus</h4>
                    <p class="gallery-event-date">28 Oct, 2018</p>
                </div>
                <a href="assets/img/gallery/gellary-img-5.jpg" class="btn-zoom image-popup">
                    <img src="assets/img/zoom-icon.png" alt="a">
                </a>
            </div>
        </div>
    </div> -->
    <!-- Single Gallery End -->

    <!-- Single Gallery Start -->
    <!-- <div class="col-lg-3  col-sm-6 old recent">
        <div class="single-gallery-item gallery-bg-6">
            <div class="gallery-hvr-wrap">
                <div class="gallery-hvr-text">
                    <h4>University Cumpus</h4>
                    <p class="gallery-event-date">28 Oct, 2018</p>
                </div>
                <a href="assets/img/gallery/gellary-img-6.jpg" class="btn-zoom image-popup">
                    <img src="assets/img/zoom-icon.png" alt="a">
                </a>
            </div>
        </div>
    </div> -->
    <!-- Single Gallery End -->

    <!-- Single Gallery Start -->
    <!-- <div class="col-lg-3  col-sm-6 pic">
        <div class="single-gallery-item video gallery-bg-7">
            <a href="https://player.vimeo.com/video/181545195?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;loop=1" class="btn btn-video-play video-popup"><i class="fa fa-play"></i></a>
        </div>
    </div> -->
    <!-- Single Gallery End -->

    <!-- Single Gallery Start -->
    <!-- <div class="col-lg-3  col-sm-6 pic recent old">
        <div class="single-gallery-item gallery-bg-8">
            <div class="gallery-hvr-wrap">
                <div class="gallery-hvr-text">
                    <h4>University Cumpus</h4>
                    <p class="gallery-event-date">28 Oct, 2018</p>
                </div>
                <a href="assets/img/gallery/gellary-img-8.jpg" class="btn-zoom image-popup">
                    <img src="assets/img/zoom-icon.png" alt="a">
                </a>
            </div>
        </div>
    </div> -->
    <!-- Single Gallery End -->
</div>
                    <!-- Gallery Item content End -->
                </div>
            </div>
        </div>
        <!--== Gallery Container Warpper==-->
    </div>
</section>
<!--== Gallery Area Start ==-->

    <!--== Scholership Promo Area Start ==-->
<section id="scholership-promo">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="scholership-promo-text">
                    <h2>Demo University Provide <span>Scholarship</span> For Talented Student!</h2>
                    <p>Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need academic, relocation, career, projects, mentorship, etc you can ask the community and get </p>
                    <a href="#" class="btn btn-brand">Apply Now</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!--== Scholership Promo Area End ==-->

    <!--== Blog Area Start ==-->
<section id="blog-area" class="section-padding">
    <div class="container">
        <!--== Section Title Start ==-->
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="section-title">
                    <h2>Recent News</h2>
                </div>
            </div>
        </div>
        <!--== Section Title End ==-->

        <!--== Blog Content Wrapper ==-->
        <div class="row">
            <!--== Single Blog Post start ==-->
            <div class="col-lg-4 col-md-6">
                <article class="single-blog-post">
                    <figure class="blog-thumb">
                        <div class="blog-thumbnail">
                            <img src="http://placehold.it/700x353" alt="Blog" class="img-fluid">
                        </div>
                        <figcaption class="blog-meta clearfix">
                            <a href="single-blog.html" class="author">
                                <div class="author-pic">
                                    <img src="http://placehold.it/200x200" alt="Author">
                                </div>
                                <div class="author-info">
                                    <h5>Daney williams</h5>
                                    <p>2 hours Ago</p>
                                </div>
                            </a>
                            <div class="like-comm pull-right">
                                <a href="#"><i class="fa fa-comment-o"></i>77</a>
                                <a href="#"><i class="fa fa-heart-o"></i>12</a>
                            </div>
                        </figcaption>
                    </figure>

                    <div class="blog-content">
                        <h3><a href="single-blog.html">Recently we create a maassive project that</a></h3>
                        <p>This is a big project of our company, we are happy to completed this type projec which are
                            get world famous award</p>
                        <a href="single-blog.html" class="btn btn-brand">More</a>
                    </div>
                </article>
            </div>
            <!--== Single Blog Post End ==-->

            <!--== Single Blog Post start ==-->
            <div class="col-lg-4 col-md-6">
                <article class="single-blog-post">
                    <figure class="blog-thumb">
                        <div class="blog-thumbnail">
                            <img src="http://placehold.it/700x352" alt="Blog" class="img-fluid">
                        </div>
                        <figcaption class="blog-meta clearfix">
                            <a href="single-blog.html" class="author">
                                <div class="author-pic">
                                    <img src="http://placehold.it/200x200" alt="Author">
                                </div>
                                <div class="author-info">
                                    <h5>Myra Hindley</h5>
                                    <p>1 Day Ago</p>
                                </div>
                            </a>
                            <div class="like-comm pull-right">
                                <a href="#"><i class="fa fa-comment-o"></i>77</a>
                                <a href="#"><i class="fa fa-heart-o"></i>12</a>
                            </div>
                        </figcaption>
                    </figure>

                    <div class="blog-content">
                        <h3><a href="single-blog.html">Myra Hindley and her lover, Ian Brady, plotted and</a></h3>
                        <p>This is a big project of our company, we are happy to completed this type projec which are
                            get world famous award</p>
                        <a href="single-blog.html" class="btn btn-brand">More</a>
                    </div>
                </article>
            </div>
            <!--== Single Blog Post End ==-->

            <!--== Single Blog Post start ==-->
            <div class="col-lg-4 col-md-6">
                <article class="single-blog-post">
                    <figure class="blog-thumb">
                        <div class="blog-thumbnail">
                            <img src="http://placehold.it/700x352" alt="Blog" class="img-fluid">
                        </div>
                        <figcaption class="blog-meta clearfix">
                            <a href="single-blog.html" class="author">
                                <div class="author-pic">
                                    <img src="http://placehold.it/200x200" alt="Author">
                                </div>
                                <div class="author-info">
                                    <h5>Aileen Wuornos</h5>
                                    <p>3 mins Ago</p>
                                </div>
                            </a>
                            <div class="like-comm pull-right">
                                <a href="#"><i class="fa fa-comment-o"></i>77</a>
                                <a href="#"><i class="fa fa-heart-o"></i>12</a>
                            </div>
                        </figcaption>
                    </figure>

                    <div class="blog-content">
                        <h3><a href="single-blog.html">Nurse with a private practice, racked up dozens of victims</a></h3>
                        <p>This is a big project of our company, we are happy to completed this type projec which are
                            get world famous award</p>
                        <a href="single-blog.html" class="btn btn-brand">More</a>
                    </div>
                </article>
            </div>
            <!--== Single Blog Post End ==-->
        </div>
        <!--== Blog Content Wrapper ==-->
    </div>
</section>
<!--== Blog Area EndBlog ==-->
        
    <!-- End Main Body -->

@endsection

@section('script')
	
@endsection