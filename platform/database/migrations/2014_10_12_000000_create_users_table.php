<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            //date of birth
            $table->string('dob')->nullable();
            $table->string('address')->nullable();
            $table->string('dept')->nullable();
            $table->string('faculty')->nullable();
            $table->string('biograph')->nullable();
            $table->string('about')->nullable();
            $table->string('user_image')->default('male.png');
            $table->string('document1')->nullable();
            $table->string('document2')->nullable();
            $table->string('docution3')->nullable();
            $table->string('user_cat_id')->nullable();
            $table->string('member_id')->nullable();
            $table->string('asso_id')->nullable();
            $table->string('auth_id')->nullable();
            //year_of_graduation
            $table->string('year_of_g')->nullable();
            $table->string('facebook')->nullable();
            $table->string('instagram')->nullable();
            $table->string('youtube')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('twitter')->nullable();
            $table->string('status')->default('Y');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
