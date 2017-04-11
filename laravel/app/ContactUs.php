<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    protected $table = 'contact';
    protected $primaryKey = 'request_ID'; // if primary key have another name not the Id - we set it

    protected  $fillable = ['Name','Category', 'Question', 'Answer'];

    public $timestamps = false;
}
