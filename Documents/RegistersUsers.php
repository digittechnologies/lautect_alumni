<?php

namespace Illuminate\Foundation\Auth;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\association;
use App\authentication;
trait RegistersUsers
{
    use RedirectsUsers;

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\View\View
     */
    public function showRegistrationForm()
    {
        return view('auth.register');
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
      public function register(Request $request)
    {
    // return $request;
    $matric_no=$request->matric_no;
    $dept=$request->dept;
    $fullname=$request->name;
    $auth=authentication::where(['matric_no' => $matric_no,'dept' =>$dept,'fullname' =>$fullname])->first();
    //    return $auth;
    if ($auth != '') {
        $request->merge(['auth_id' => $auth->id]);
        // return $request;
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));
        return redirect('login');
        $this->guard()->login($user);

        return $this->registered($request, $user)
                        ?: redirect($this->redirectPath());
    }
   return redirect('register')->with('success','Not Register. Please, check your Fullname, Matric No or Department if there is not error  ');
    
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard();
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        //
    }
}
