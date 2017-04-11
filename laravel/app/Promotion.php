<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $table = 'promotions';
    protected $primaryKey = 'id'; // if primary key have another name not the Id - we set it

    protected  $fillable = ['title','pKey', 'image', 'dateValid', 'datePublished'];

    public $timestamps = false;
}
