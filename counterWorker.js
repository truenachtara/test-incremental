var x = 0, dx = 1, current_action='add';
var actions = {
'add' : function incrementMoney() { x += dx; },
'subtract': function decrementMoney() { x -= dx; }
};

onmessage = function( evt ) {
   if ( evt.data && evt.data.action && evt.data.action in actions)
   {
     current_action = evt.data.action;
     if ( evt.data.amount ) dx = evt.data.amount;
   }
};

function doAction( )
{
   actions[current_action]( );
   postMessage( x );   
   setTimeout(doAction,1000);
}

doAction( );
