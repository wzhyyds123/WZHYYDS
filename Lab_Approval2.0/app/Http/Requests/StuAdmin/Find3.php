<?php

namespace App\Http\Requests\StuAdmin;

use Illuminate\Foundation\Http\FormRequest;

class Find3 extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "inventory_name"=> 'required',
        ];
    }
}
