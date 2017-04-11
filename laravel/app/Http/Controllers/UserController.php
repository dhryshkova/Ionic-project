<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;


use App\Login;
use Illuminate\Support\Facades\Redirect;
use View;
use File;
use Response;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('cors');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Login::all('Username', 'Password');
        //var_dump($user);

        return Response::json($user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // INSERTING TO THE TABLE
        $inputs = $request->json()->all();
        Login::create($inputs);
        //ATTENTION ALL fields of the form must match table!


        $headers = [
            'Access-Control-Allow-Origin'      => 'http://domain.dev',
        ];

        return Response::json([
            'message' => 'User Created Succesfully',
            'data' => $inputs
        ], 400, $headers);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $joke = Login::find($id);

        if(!$joke){
            return Response::json([
                'error' => [
                    'message' => 'There is no info here'
                ]
            ], 404);
        }

        return Response::json($joke, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
