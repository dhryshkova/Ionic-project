<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsLetter extends Model
{
    protected $table = 'signups';
    protected $primaryKey = 'id'; // if primary key have another name not the Id - we set it

    protected  $fillable = ['signup_email_address','signup_date'];

    public $timestamps = false;
}
