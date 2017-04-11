    <a href="{{ url('/contact/create') }}"><button class="btn btn-info"> Add </button></a>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Recipe name</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>

        @foreach($recipe as $c)
            <tr>
                <td><a href="{{url('/db',$c->request_ID)}}">{{ $c->Name }}</a> </td>

                <td>
                    {{ Form::open(array('url' => '/admin/' . $c->request_ID, 'class' => 'pull-right')) }}
                    {{ Form::hidden('_method', 'DELETE') }}
                    {{ Form::submit('Delete', array('class' => 'btn btn-info')) }}
                    {{ Form::close() }}
                </td>


                <td>
                    <a href="{{url('/admin',$c->request_ID)}}/edit"><button class="btn btn-info pull-right"> Update </button></a>
                </td>
            </tr>
            <!-- url function passes id to the next view-->
        @endforeach



        </tbody>
    </table>