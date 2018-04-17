<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 17 Apr 2018 03:13:28 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * Class MUser
 * 
 * @property int $user_id
 * @property string $user_name
 * @property string $password
 * @property string $token
 * @property string $full_name
 * @property string $avata
 * @property int $user_type_id
 * @property string $app_id
 * @property int $flg_active
 * @property int $flg_delete
 * @property int $create_user_id
 * @property \Carbon\Carbon $create_date
 * @property int $update_user_id
 * @property \Carbon\Carbon $update_date
 *
 * @package App\Models
 */
class MUser extends Authenticatable implements JWTSubject
{
	use Notifiable;
	protected $table = 'm_user';
	protected $primaryKey = 'user_id';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'user_id' => 'int',
		'user_type_id' => 'int',
		'flg_active' => 'int',
		'flg_delete' => 'int',
		'create_user_id' => 'int',
		'update_user_id' => 'int'
	];

	protected $dates = [
		'create_date',
		'update_date'
	];

	protected $hidden = [
		'password',
		'token'
	];

	protected $fillable = [
		'user_name',
		'password',
		'token',
		'full_name',
		'avata',
		'user_type_id',
		'app_id',
		'flg_active',
		'flg_delete',
		'create_user_id',
		'create_date',
		'update_user_id',
		'update_date'
	];

	// Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
