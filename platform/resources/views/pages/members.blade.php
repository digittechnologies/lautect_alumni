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

    <!--== Directory Page Content Start ==-->
    <section id="page-content-wrap">
        <div class="directory-page-content-warp section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="directory-text-wrap">
                            <h2>Now  we have <strong class="funfact-count">{{$countU}}</strong> member </h2>
                            <div class="table-search-area">
                                <form action="index.html">
                                    <input type="search" placeholder="Type Your Keyword">
                                    <select name="dept">
                                        <option selected>Dept</option>
                                        <option value="cmt">Computer</option>
                                        <option value="cmt">Computer</option>
                                        <option value="cmt">Computer</option>
                                        <option value="cmt">Computer</option>
                                        <option value="cmt">Computer</option>
                                    </select>
                                    <button class="btn btn-brand">Search</button>
                                </form>
                            </div>

                            <div class="directory-table table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Depertment</th>
                                            <th scope="col">Batch</th>
                                            <th scope="col">Campus</th>
                                            <th scope="col">Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($users as $user)
                                        <tr>
                                            <td><img src="http://{{$settings->url}}/{{$user->user_image}}" alt="table">{{$user->name}}</td>
                                            <td>{{$user->dept}}</td>
                                            <td>{{$user->year_of_g}}</td>
                                            <td>Lautech</td>
                                            <td>{{$user->cat_name}}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <p class="show-memeber text-right">
                                Show <span>{{$countU}}</span> of <span>{{$countU}} Member</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="pagination-wrap text-center">
                            <nav>
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--== Directory Page Content End ==-->
        
    <!-- End Main Body -->

@endsection

@section('script')
	
@endsection