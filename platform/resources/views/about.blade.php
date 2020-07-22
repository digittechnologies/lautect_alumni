@extends('layouts.master')

<!-- @section('css')

@endsection

@section('breadcrumb')
             
							
@endsection -->

@section('content')
              
   
<!--== Page Title Area Start ==-->
<section id="page-title-area" style="background-image: url('http://{{$settings->url}}/{{$header->image}}');">
    <div class="container">
        <div class="row" > 
            <div class="col-lg-8 m-auto text-center">           
                <div class="page-title-content">
                    <h1 class="h2">{{$header->title}}</h1>
                    <p>{{$header->content}}</p>
                    <a href="#page-content-wrap" class="btn btn-brand smooth-scroll">Let&apos;s See</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!--== Page Title Area End ==-->

<!--== Committee Page Content Start ==-->
<section id="page-content-wrap">
    <div class="about-page-content-wrap section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-11 m-auto">
                    <!-- Single about text start -->
           
                    <div class="single-about-text">
                        <span class="year">2020</span>
                        <img src="http://{{$settings->url}}/{{$about[0]->images}}" alt="About" class="img-fluid img-left">
                        <h2 class="h3">{{$about[0]->title}}</h2>
                        <p style="white-space: pre-line">{{$about[0]->content}}</p>
                    </div>   
            
                    <!-- Single about text End -->

                    <!-- Single about text start -->
                    <div class="single-about-text">
                        <span class="year">2009</span>
                        <img src="http://{{$settings->url}}/{{$about[1]->images}}" alt="About" class="img-fluid img-right">
                        <h2 class="h3">{{$about[1]->title}}</h2>
                        <p style="white-space: pre-line">{{$about[1]->content}}</p>
                    </div>
                    <!-- Single about text End -->

                    <!-- Single about text start -->
                    <div class="single-about-text">
                        <span class="year">2001</span>
                        <img src="http://{{$settings->url}}/{{$about[2]->images}}" alt="About" class="img-fluid img-left">
                        <h2 class="h3">{{$about[2]->title}}</h2>
                        <p style="white-space: pre-line">{{$about[2]->content}}</p>
                    </div>
                    <!-- Single about text End -->
                </div>
            </div>
        </div>
    </div>

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

    <div class="our-honorable-commitee section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="about-page-area-title">
                        <h2>Our Honorable Committe</h2>
                    </div>
                </div>
            </div>

            <div class="honorable-committee-list">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-committee-member">
                            <div class="commitee-thumb">
                                <img src="http://placehold.it/500x700" class="img-fluid" alt="Committee">
                            </div>
                            <h3>BRYAN WATSHON<span class="committee-deg">President</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-committee-member">
                            <div class="commitee-thumb">
                                <img src="http://placehold.it/500x700" class="img-fluid" alt="Committee">
                            </div>
                            <h3>CARLOS HELU<span class="committee-deg">Vice President</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-committee-member">
                            <div class="commitee-thumb">
                                <img src="http://placehold.it/500x700" class="img-fluid" alt="Committee">
                            </div>
                            <h3>ANGLE TUNI<span class="committee-deg">Secretary</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-committee-member">
                            <div class="commitee-thumb">
                                <img src="http://placehold.it/500x700" class="img-fluid" alt="Committee">
                            </div>
                            <h3>ALEX KALIFA<span class="committee-deg">Asst Secretary</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-committee-member">
                            <div class="commitee-thumb">
                                <img src="http://placehold.it/500x700" class="img-fluid" alt="Committee">
                            </div>
                            <h3>ALEX Tuntuni<span class="committee-deg">Office Secretary</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-committee-member">
                            <div class="commitee-thumb">
                                <img src="http://placehold.it/500x700" class="img-fluid" alt="Committee">
                            </div>
                            <h3>MAL MUHIT<span class="committee-deg">Finance Member</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-committee-member">
                            <div class="commitee-thumb">
                                <img src="http://placehold.it/500x700" class="img-fluid" alt="Committee">
                            </div>
                            <h3>PRINCE RIMON<span class="committee-deg">Committee Member</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-committee-member">
                            <div class="commitee-thumb">
                                <img src="http://placehold.it/500x700" class="img-fluid" alt="Committee">
                            </div>
                            <h3>PRINCE KAMLA<span class="committee-deg">Committee Member</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="people-to-say section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="about-page-area-title">
                        <h2>Some Speech About Us</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="people-to-say-wrapper owl-carousel">
                        <!-- Single People Testimonial -->
                        <div class="single-testimonial-wrap">
                            <div class="people-thumb">
                                <img src="http://placehold.it/500x500" alt="Alumni" class="img-fluid">
                            </div>
                            <i class="quote-icon"></i>
                            <p>Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing elit, sed do eimod tempor
                                inciidunt ut
                                labore et dolorgna aliqua. Ut enim ad minim ostrud. </p>
                            <h4>Robert Albert <span class="people-deg">Founder at Boxr</span></h4>
                        </div>
                        <!-- Single People Testimonial -->

                        <!-- Single People Testimonial -->
                        <div class="single-testimonial-wrap">
                            <div class="people-thumb">
                                <img src="http://placehold.it/500x500" alt="" class="img-fluid">
                            </div>
                            <i class="quote-icon"></i>
                            <p>Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing elit, sed do eimod tempor
                                inciidunt ut
                                labore et dolorgna aliqua. Ut enim ad minim ostrud. </p>
                            <h4>Akamla Albert <span class="people-deg">Founder at Kamlakana</span></h4>
                        </div>
                        <!-- Single People Testimonial -->

                        <!-- Single People Testimonial -->
                        <div class="single-testimonial-wrap">
                            <div class="people-thumb">
                                <img src="http://placehold.it/500x500" alt="" class="img-fluid">
                            </div>
                            <i class="quote-icon"></i>
                            <p>Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing elit, sed do eimod tempor
                                inciidunt ut
                                labore et dolorgna aliqua. Ut enim ad minim ostrud. </p>
                            <h4>Taklo Nahid <span class="people-deg">Minister at Nara</span></h4>
                        </div>
                        <!-- Single People Testimonial -->

                        <!-- Single People Testimonial -->
                        <div class="single-testimonial-wrap">
                            <div class="people-thumb">
                                <img src="http://placehold.it/500x500" alt="" class="img-fluid">
                            </div>
                            <i class="quote-icon"></i>
                            <p>Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing elit, sed do eimod tempor
                                inciidunt ut
                                labore et dolorgna aliqua. Ut enim ad minim ostrud. </p>
                            <h4>Mal Muhit<span class="people-deg">Founder at Kamlagiri</span></h4>
                        </div>
                        <!-- Single People Testimonial -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--== Committee Page Content End ==-->
        
    <!-- End Main Body -->

@endsection

@section('script')
	
@endsection