<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    protected $table = 'user';
    protected $primaryKey = 'ID_user'; // if primary key have another name not the Id - we set it

    protected  $fillable = ['Name', 'Surname', 'Rights', 'Password', 'Username', 'Email', 'Phone'];

    public $timestamps = false;
}
