<?php
namespace App\traits;


trait HttpResponse {
    protected function success($data , $message = null , $code = 200) {
        return response()->json([
            'status' => 'Request is successful',
            'message' => $message,
            'data' => $data
        ], $code);
    }


    protected function error($data , $message = null , $code = 400) {
        return response()->json([
            'status' => 'Request is unsucessful',
            'message' => $message,
            'data' => $data
        ], $code);
    }
}

?>
