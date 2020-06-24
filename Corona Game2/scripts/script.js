
const Scene = require('Scene');
const Patches= require('Patches');

const Counter= Scene.root.find('Fscore');
const time = Scene.root.find('Timer');
const EndCounter= Scene.root.find('EndScore');
const ScoreString= Patches.getScalarValue('Score');
const TimeString= Patches.getScalarValue('TimeCount');
Counter.text= ScoreString.toString();
time.text = TimeString.toString();
EndCounter.text=ScoreString.toString();

