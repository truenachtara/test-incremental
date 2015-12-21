var x = 0, dx = 1, current_action='add';
var actions = {
'add': function( ) { x += dx; },
'subtract': function( ) { x -= dx; }
};
var lev = -1

onmessage = function( evt ) {
   if ( evt.data && evt.data.action && evt.data.action in actions)
   {
     lev = evt.data.level
     if ( true === evt.data.once )
     {
         // store current state
         var prev_action = current_action, prev_dx = dx;
         current_action = evt.data.action;
         if ( null != evt.data.amount ) { dx = evt.data.amount; }
         // do action once,
         // optionally, you can also stop the "doAction timer"
         // and restart it after finishing this action, ie below
         // but left it as is for now
         actions[current_action]( );
         // restore state
         current_action = prev_action;
         dx = prev_dx;
     }
     else
     {
         current_action = evt.data.action;
         if ( null != evt.data.amount ) { dx = evt.data.amount; }
     }
   }
};

function doAction( )
{
   actions[current_action]( );
   postMessage(money: x, level: lev);   
   lev = -1
   setTimeout(doAction,1000);
}

doAction( );
