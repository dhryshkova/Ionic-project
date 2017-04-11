<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $table = 'page';
    protected $primaryKey = 'ID_page'; // if primary key have another name not the Id - we set it

    protected  $fillable = ['Title', 'ID_user', 'Status', 'Content', 'Rank', 'Tags', 'Menu'];

    public $timestamps = false;
}
