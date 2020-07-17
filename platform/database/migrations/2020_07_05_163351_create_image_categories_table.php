<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImageCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('image_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image_cate_name');
            $table->longText('about');
            $table->string('updated_by')->nullable();
            $table->string('app_cat_id')->nullable();
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
        Schema::dropIfExists('image_categories');
    }
}
