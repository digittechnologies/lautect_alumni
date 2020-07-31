@extends('layouts.master')

<!-- @section('css')

@endsection

@section('breadcrumb')
             
							
@endsection -->

@section('content')

<!--== Committee Page Content Start ==-->
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
    <div class="committee-content-wrap section-padding">
        <div class="committee-member-list">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="about-page-area-title">
                            <h2>Our Executives and their Designations</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    @foreach ($committee1 as $com1)
                    <div class="col-lg-4 col-sm-10 col-md-7 m-auto">
                        <div class="single-committee-member">
                            <img src="http://{{$settings->url}}/{{$com1->p_image}}" class="img-fluid" alt="Committee">
                            <h3>{{$com1->p_name}} <span class="committee-deg">{{$com1->p_position}}</span></h3>
                        </div>
                    </div>
                @endforeach                      
                </div>

                <div class="row">
                    @foreach ($committee2 as $com2)
                    <div class="col-lg-4 col-sm-6">
                        <div class="single-committee-member">
                            <img src="http://{{$settings->url}}/{{$com2->p_image}}" class="img-fluid" alt="Committee">
                            <h3>{{$com2->p_name}} <span class="committee-deg">{{$com2->p_position}}</span></h3>
                        </div>
                    </div>
                @endforeach           

            <div class="row">
                @foreach ($committee3 as $com3)
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-committee-member">
                            <img src="http://{{$settings->url}}/{{$com3->p_image}}" class="img-fluid" alt="Committee">
                            <h3>{{$com3->p_name}} <span class="committee-deg">{{$com3->p_position}}</span></h3>
                        </div>
                    </div>
                @endforeach             
                </div>
            </div>
        </div>

        <div class="people-to-say section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="about-page-area-title">
                            <h2>Chairmen and Secretaries of Chapters</h2>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-12">
                    <div class="committee-member-list">
                            <!-- Single People Testimonial -->
                            <div class="row">
                            @foreach ($com_cat as $com4)
                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-committee-member">
                                        <img src="http://{{$settings->url}}/{{$com4->p_image}}" class="img-fluid" alt="Committee">
                                        <h3>{{$com4->p_name}} <span class="committee-deg">{{$com4->p_position}}</span></h3>
                                    </div>
                                </div>
                            @endforeach             
                            </div>
                            <!-- Single People Testimonial -->                        
                        </div>
                    </div>
                </div>
            </div>
            <br>

            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="about-page-area-title">
                            <h2>Capacity Building</h2>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-12">
                    <div class="committee-member-list">
                            <!-- Single People Testimonial -->
                            <div class="row">
                            @foreach ($capacity as $com5)
                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-committee-member">
                                        <img src="http://{{$settings->url}}/{{$com5->p_image}}" class="img-fluid" alt="Committee">
                                        <h3>{{$com5->p_name}} <span class="committee-deg">{{$com5->p_position}}</span></h3>
                                    </div>
                                </div>
                            @endforeach             
                            </div>
                            <!-- Single People Testimonial -->                        
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>
<!--== Committee Page Content End ==-->



    </div>
</section>
<!--== Committee Page Content End ==-->
    <!-- End Main Body -->

@endsection

@section('script')
	
@endsection