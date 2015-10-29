var mongoose=require('mongoose');

//Create the movie schema

var MovieSchema=new mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	url:{
		type:String,
		required:true
	}
});

//Export the model

module.exports=MovieSchema;