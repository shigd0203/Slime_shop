<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product'; // 明確指定資料表名稱

    protected $fillable = [
        'name',
        'image',
        'price',
        'description',
        'stock',
    ];

}
