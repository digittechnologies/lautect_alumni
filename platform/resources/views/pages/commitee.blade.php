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
    </div>
</section>
<!--== Committee Page Content End ==-->
    <!-- End Main Body -->

@endsection

@section('script')
	
@endsection