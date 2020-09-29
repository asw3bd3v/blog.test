<?php

namespace App;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Carbon\Carbon;

class Post extends Model {

    const IS_PUBLIC = 1;
    const IS_DRAFT = 0;

    protected $fillable = ['title', 'content', 'date', 'description'];

    use Sluggable;

    public function category() {
        // связь один к одному
        //return $this->hasOne(Category::class);
        // связь многие к одному
        return $this->belongsTo(Category::class); // второй параметр будет по умолчанию category_id
    }

    public function author() {
        //return $this->hasOne(User::class);
        return $this->belongsTo(User::class, 'user_id'); // если бы метод был бы назван user, то в этом случае второй параметр можно опустить
    }

    public function tags() {
// связь многие ко многим
        return $this->belongsToMany(
                        Tag::class, // 
                        'post_tags', // связующая таблица
                        'post_id',
                        'tag_id'
        );
    }

    public function comments() {
        return $this->hasMany(Comment::class);
    }


    public function sluggable() {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public static function add($fields) {
        $post = new static;
        $post->fill($fields);
        $post->user_id = 1;
        $post->save();

        return $post;
    }

    public function edit($fields) {
        $this->fill($fields);
        $this->save();
    }

    public function remove() {
        $this->removeImage();
        $this->delete();
    }

    public function uploadImage($image) {
        if ($image == null) {
            return;
        }

        $this->removeImage();
        $filename = str_random(10) . '.' . $image->extension();
        $image->storeAs('uploads', $filename);
        $this->image = $filename;
        $this->save();
    }

    public function setCategory($id) {
        if ($id == null) {
            return;
        }

        $this->category_id = $id;
        $this->save();
    }

    public function setTags($ids) {
        if ($ids == null) {
            return;
        }

        $this->tags()->sync($ids); // причем предыдущие id будут удалены
    }

    public function setDraft() {
        $this->status = self::IS_DRAFT;
        $this->save();
    }

    public function setPublic() {
        $this->status = self::IS_PUBLIC;
        $this->save();
    }

    public function toggleStatus($value) {
        if ($value == null) {
            return $this->setDraft();
        }
        return $this->setPublic();
    }

    public function setFeatured() {
        $this->is_featured = 1;
        $this->save();
    }

    public function setStandart() {
        $this->is_featured = 0;
        $this->save();
    }

    public function toggleFeatured($value) {
        if ($value == null) {
            return $this->setFeatured();
        }
        return $this->setStandart();
    }

    public function getImage() {
        if ($this->image == null) {
            return '/img/no-image.png';
        }
        return '/uploads/' . $this->image;
    }

    public function setDateAttribute($value) {
        $date = Carbon::createFromFormat('d/m/y', $value)->format('Y-m-d');

        $this->attributes['date'] = $date;
    }

    public function getDateAttribute($value) {
        $date = Carbon::createFromFormat('Y-m-d', $value)->format('d/m/y');

        return $date;
    }

    public function removeImage() {
        if ($this->image) {
            Storage::delete('uploads/' . $this->image);
        }
    }

    public function getCategoryTitle() {
        return $this->category ? $this->category->title : 'Нет категории';
    }

    public function getTagsTitles() {
        $isEmpty = $this->tags->isEmpty();

        $tags = $this->tags->pluck('title')->all();

        return !$isEmpty ? implode(', ', $tags) : 'Нет тегов';
    }

    public function getCategoryID() {
        return $this->category ? $this->category->id : null;
    }

    public function getDate() {
        return Carbon::createFromFormat('d/m/y', $this->date)->format('F d, Y');
    }

    public function hasPrevious() {
        return self::where('id', '<', $this->id)->max('id');
    }

    public function hasNext() {
        return self::where('id', '>', $this->id)->min('id');
    }

    public function getPrevious() {
        $postID = $this->hasPrevious(); // ID
        return self::find($postID);
    }

    public function getNext() {
        $postID = $this->hasNext(); // ID
        return self::find($postID);
    }
    
    public function related() {
        return self::all()->except($this->id);
    }
    
    public function hasCategory() {
        return $this->category != null ? true : false;
    }

    public function getComments() {
        return $this->comments()->where('status', 1)->get();
    }
}
