<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 17 Apr 2018 03:13:28 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class MUserType
 * 
 * @property int $user_type_id
 * @property string $user_type_name
 * @property int $flg_delete
 *
 * @package App\Models
 */
class MUserType extends Eloquent
{
	protected $table = 'm_user_type';
	protected $primaryKey = 'user_type_id';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'user_type_id' => 'int',
		'flg_delete' => 'int'
	];

	protected $fillable = [
		'user_type_name',
		'flg_delete'
	];
}
