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

<!--== Gallery Page Content Start ==-->
<section id="page-content-wrap">
    <div class="event-page-content-wrap section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="event-filter-area">
                        <form action="index.html" class="form-inline">
                            <select name="year" id="year">
                                <option selected>Year</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                            </select>

                            <select name="place" id="place">
                                <option selected>Place</option>
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>Arizona</option>
                                <option>Colorado</option>
                                <option>Delaware</option>
                            </select>

                            <select name="type" id="type">
                                <option selected>Type</option>
                                <option>Meetup</option>
                                <option>Seminar</option>
                                <option>Get Together</option>
                            </select>

                            <button class="btn btn-brand">Filter</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="all-event-list">
                        <!-- Single Event Start -->

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
                                                <a href="{{url('eventsDetails/')}}/{{$e->id}}" class="btn btn-brand btn-brand-dark">join with us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach

                      
                    </div>
                </div>
            </div>

            <!-- Pagination Start -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="pagination-wrap text-center">
                        <nav>
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">...</a></li>
                                <li class="page-item"><a class="page-link" href="#">50</a></li>
                                <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Pagination End -->
        </div>
    </div>
</section>
<!--== Gallery Page Content End ==-->
        
    <!-- End Main Body -->

@endsection

@section('script')
	
@endsection