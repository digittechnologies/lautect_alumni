<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventTbsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_tbs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('event_name');
            $table->longText('subject');
            $table->longText('content');
            $table->longText('address');
            $table->string('start_time');
            $table->string('start_date');
            $table->string('created_by')->nullable();
            $table->string('end_time');
            $table->string('end_date')->nullable();
            $table->string('event_image')->dafault('lau_image.jpg');
            $table->string('status')->default('Y');
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
        Schema::dropIfExists('event_tbs');
    }
}
