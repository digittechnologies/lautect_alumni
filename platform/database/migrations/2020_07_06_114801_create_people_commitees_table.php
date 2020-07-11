<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePeopleCommiteesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people_commitees', function (Blueprint $table) {
            $table->increments('id');
            $table->string('p_name');
            $table->longText('p_about');
            $table->string('p_position');
            $table->string('p_image');
            $table->string('link_id')->nullable();
            $table->string('category_id');
            $table->string('status')->default('Y');
            $table->string('created_by');
            $table->string('updated_by');
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
        Schema::dropIfExists('people_commitees');
    }
}
