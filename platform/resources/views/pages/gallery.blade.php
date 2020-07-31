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
                            <div class="gallery-page-wrap section-padding">
                                <!-- Gallery Menu Start -->
                            
                                <div class="gallery-menu text-center">
                                    <a href="#" class="active">All</a>
                                    @foreach ($image_cat as $img)                
                                    <a href="#" >{{$img->image_cate_name}}</a>                
                                    @endforeach 
                                </div>
                                
                                <!-- Gallery Menu End -->

                                <!--= Gallery Page Content Wrap Start =-->
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="full-album-content">
                                                <!-- Single Album Start -->
                                                @foreach ($image_cat as $img)                
                                                
                                                <div class="single-album-wraper">
                                                    <div class="album-heading">
                                                        <h2><a href="single-album.html">{{$img->image_cate_name}}</a></h2>
                                                        <p>{{$img->about}}.</p>
                                                        <a href="single-album.html" class="btn btn-brand">View Album</a>
                                                    </div>

                                                    <div class="album-gallery-item">
                                                        <div class="row gallery-gird">
                        <!-- Single Gallery Start -->
                        @foreach ($image_cat as $item)
                        {{-- @if ($item->image_cat_id == $img->id) --}}
                        <div class="col-lg-3  col-sm-6 recent event">
                            <div class="single-gallery-item gallery-bg-1">
                                <div class="gallery-hvr-wrap">
                                    <div class="gallery-hvr-text">
                                    <h4>{{$item->image_name}}</h4>
                                        <p class="gallery-event-date">{{$item->created_at}}</p>
                                    </div>
                                    <a href="assets/img/gallery/gellary-img-1.jpg" class="btn-zoom image-popup">
                                        <img src="http://{{$settings->url}}/{{$item->file}}" alt="a">
                                    </a>
                                </div>
                            </div>
                        </div>
                        {{-- @endif     --}}
                        @endforeach
                    
                    </div>
                                </div>
                            </div>
                            <!-- Single Album End -->

                    @endforeach     
                          
                        </div>
                        <div class="pagination-wrap text-center">
                            <nav>
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
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
            </div>
            <!--= Gallery Page Content Wrap End =-->
        </div>
    </section>
    <!--== Gallery Page Content End ==-->

        
    <!-- End Main Body -->

@endsection

@section('script')
	
@endsection