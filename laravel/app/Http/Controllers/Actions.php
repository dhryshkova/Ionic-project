<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Page;
use Illuminate\Support\Facades\Redirect;
use View;
use File;
use Response;
class Actions extends Controller
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
        $page = Page::all(); // selects everything from table
        //var_dump($page);
        $json = json_encode($page);

        return Response::json($page);
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
        $inputs = $request->all();

        Page::create($inputs);
        //ATTENTION ALL fields of the form must match table!

        return Redirect('db');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $page = Page::find($id);
        //$json = json_encode($page);
       // $file = 'C:\xampp\htdocs\Life-Advisor-\middle-files\page.json';
       // $bytes_written = File::put($file, $json);
        //if ($bytes_written === false)
        //{
         //   die("Error writing to file");
        //}
        return $page->toJson();
           // View::make('pages.show', compact('page', 'json'));
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
        $inputs = $request->all();
        $page = Page::find($id);
        $page->update($inputs);
        return Redirect::to('admin');
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



    public function menu($menu)
    {
        echo $menu;
        $page = Page::where('Menu','=',$menu)->get();

        $json = json_encode($page);
        $file = 'C:\xampp\htdocs\Life-Advisor-\middle-files\menu.json';
        $bytes_written = File::put($file, $json);

        if ($bytes_written === false)
        {
            die("Error writing to file");
        }

        $contents = File::size($file);
        var_dump($contents);
        $contents = File::size('C:\xampp\htdocs\Life-Advisor-\middle-files\page.json');
        var_dump($contents);

        return View::make('pages.show', compact('page', 'json'));
    }



}
