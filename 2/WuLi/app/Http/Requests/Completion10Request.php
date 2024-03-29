<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class Completion10Request extends FormRequest
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
            'ig' => 'required',
            'rg' => 'required',
            'i' => 'required',
            'rs' => 'required',
            'ix' => 'required',
            'vm' => 'required',
            'rf' => 'required',
            'vx' => 'required',
            'xz1' => 'required',
            'xz2' => 'required',
            'xz3' => 'required',
            'xz4' => 'required',
            'student_id' => 'required',

        ];
    }
    protected function failedValidation(Validator $validator)
    {
        throw (new HttpResponseException(json_fail('参数错误!',$validator->errors()->all(),422)));
    }
}
