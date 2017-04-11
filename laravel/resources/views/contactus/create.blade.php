
    @if($errors->any())
        @foreach($errors->all() as $error)
            <li>{{$error}}</li>
        @endforeach
    @endif


    <h2>Contact US!</h2>

    <form method="post" action="{{ url('contact') }}" role="form">
        {{csrf_field()}} <!-- prevents hackers attacks -->
        <div class="form-group">
            <label>Name:</label>
            <input class="form-control" type="text" name="Name" value="{{ Request::old('Name') }}"/>
        </div>
        <div class="form-group">
            <label>Email: </label>
            <input  class="form-control" type="text" name="Email" value="{{ Request::old('Email') }}"/>
        </div>

        <div class="form-group">
            <label>Text: </label>
            <input  class="form-control" type="text" name="Text" value="{{ Request::old('Text') }}"/>
        </div>


            <input class="form-control" type="hidden" name="Date" value="2016-06-14 00:00:00" />

        <input type="submit" name="submit" value="Create" class="btn btn-success"/><br/>
    </form>