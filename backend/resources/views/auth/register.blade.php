@extends('layouts.master')

@section('content')
<section id="page-title-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto text-center">
                <div class="page-title-content">
                    <h1 class="h2">Membership Form</h1>
                    <p>Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need</p>
                    <a href="#page-content-wrap" class="btn btn-brand smooth-scroll">Let&apos;s See</a>
                </div>
            </div>
        </div>
    </div>
</section>


    <!--== Register Page Content Start ==-->
    <section id="page-content-wrap">
        <div class="register-page-wrapper section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="register-page-inner">
                            <div class="col-lg-10 m-auto">
                                <div class="register-form-content">
                                    <div class="contain">
                                        @include('includes.messages')
                                      </div>
                                    <div class="row">
                                        
                                        <!-- Signin Area Content Start -->
                                        <div class="col-lg-4 col-md-6 text-center">
                                            <div class="display-table">
                                                <div class="display-table-cell">
                                                    <div class="signin-area-wrap">
                                                        <h4>Already a Member?</h4>
                                                        <div class="sign-form">
                                                            <form  method="POST" action="{{ route('login') }}">
                                                                @csrf
                                                                <input type="text" placeholder="Enter your ID">
                                                                <input type="password" placeholder="Password">
                                                                <button type="submit" class="btn btn-reg">Login</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Signin Area Content End -->

                                        <!-- Regsiter Form Area Start -->
                                        <div class="col-lg-7 col-md-6 ml-auto">
                                            <div class="register-form-wrap">
                                                <h3>registration Form</h3>
                                                <div class="register-form">
                                                    <form  method="POST" action="{{ route('register') }}">
                                                        @csrf
                                                        <div class="row">
                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_year">Matric Number </label>
                                                                    <input type="text" class="form-control" id="register_year" name="matric_no" required>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_deptno">Department</label>
                                                                    <input type="text" class="form-control" id="register_deptno" name="dept" required>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        <input type="hidden" class="form-control" id="register_deptno" name="user_cat_id" value="1">

                                                        <div class="row">
                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_name">Full Name</label>
                                                                    <input type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" id="register_name" name="name" value="{{ old('name') }}" placeholder="surname, firstname lastname" autofocus>
                                                                    @if ($errors->has('name'))
                                                                    <span class="invalid-feedback">
                                                                        <strong>{{ $errors->first('name') }}</strong>
                                                                    </span>
                                                                @endif
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_email">Email</label>
                                                                    <input  type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" id="register_email" name="email" value="{{ old('email') }}" required>

                                                                    @if ($errors->has('email'))
                                                                        <span class="invalid-feedback">
                                                                            <strong>{{ $errors->first('email') }}</strong>
                                                                        </span>
                                                                    @endif
                                                                </div>
                                                            </div>

                               
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_password">Password</label>
                                                                    <input id="register_password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                                                    @if ($errors->has('password'))
                                                                        <span class="invalid-feedback">
                                                                            <strong>{{ $errors->first('password') }}</strong>
                                                                        </span>
                                                                    @endif
                                                                </div>
                                                                </div>

                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_stuid">Password Confirmation</label>
                                                                    <input type="password" class="form-control" id="register_stuid" name="password_confirmation">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_password">Faculty</label>
                                                                    <input id="register_password" type="text" class="form-control{{ $errors->has('faculty') ? ' is-invalid' : '' }}" name="faculty" required>
                           
                                                                </div>
                                                                </div>

                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_stuid">Date of Birth</label>
                                                                    <input type="date" class="form-control" id="register_stuid" name="dob" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                       
                                                        <div class="row">
                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_year">Passing Month and Year </label>
                                                                    <input type="month" class="form-control" id="register_year" name="year_of_g" required>
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="register_deptno">Address</label>
                                                                    <input type="text" class="form-control" id="register_deptno" name="address" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {{-- <div class="form-group file-input">
                                                            <input type="file" name="file" id="customfile" class="d-none">
                                                            <label class="custom-file" for="customfile"><i class="fa fa-upload"></i>Upload Your Photo</label>
                                                        </div> --}}

                                                        <div class="gender form-group">
                                                            <label class="g-name d-block">Gender</label>
                                                            <div class="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" id="register_gender_male" name="gender" value="male" class="custom-control-input" >
                                                                <label class="custom-control-label" for="register_gender_male">Male</label>
                                                            </div>
                                                            <div class="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" id="register_gender_female" name="gender" value="female" class="custom-control-input" >
                                                                <label class="custom-control-label" for="register_gender_female">Female</label>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="custom-control custom-checkbox float-lg-right">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                <label class="custom-control-label" for="customCheck1"> I have read and agree to the <a href="#">Alumni</a> Terms of Service</label>
                                                            </div>
                                                            <input type="submit" class="btn btn-reg" value="Register">
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Regsiter Form Area End -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--== Register Page Content End ==-->

{{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required >

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}
@endsection
