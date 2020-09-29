<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model {

    public function post() {
        //return $this->hasOne(Post::class);
        
        // связь многие к одному
        return $this->belongsTo(Post::class);
    }

    public function author() {
        //return $this->hasOne(User::class);
        
        // связь многие к одному
        return $this->belongsTo(User::class, 'user_id');
    }

    public function allow() {
        $this->status = 1;
        $this->save();
    }

    public function disAllow() {
        $this->status = 0;
        $this->save();
    }

    public function toggleStatus() {
        if ($this->status == 0) {
            return $this->allow();
        }

        $this->disAllow();
    }

    public function remove() {
        $this->delete();
    }

}
