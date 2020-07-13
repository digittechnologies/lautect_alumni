<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_schedules', function (Blueprint $table) {
            $table->increments('id');
            $table->string('schedule_name');
            $table->string('title');
            $table->longText('content')->nullable();
            $table->string('speaker');
            $table->string('start_time');
            $table->string('start_date');
            $table->string('created_by');
            $table->string('end_time');
            $table->string('end_date')->nullable();
            $table->string('event_id');
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
        Schema::dropIfExists('event_schedules');
    }
}
