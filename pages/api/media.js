const {connectToDatabase} = require('../../lib/mongodb')
const ObjectId = require('mongodb').ObjectId


export default async function handler(req, res){
    switch(req.method){
        case 'GET': {
            return getMedia(req, res)
        }
        case 'PUT':{
            return updateMedia(req,res)
        }
    }
}

async function getMedia(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let media = await db
            .collection('media')
            .find({})
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(media)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}








async function updateMedia(req, res){
    try{
        //connect to database
        let {db} = await connectToDatabase();

        //update the bookmark status
        await db.collection('media').findOneAndUpdate(
            {
                _id: new ObjectId(req.body)
            },

            [
                { $set: { isBookmarked: { $not: "$isBookmarked" } } }
            ]

        );

        return res.json({
            message: "Bookmark State Changed!",
            success: true
        });

    } catch (error){
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}