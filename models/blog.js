import mongoose from "mongoose";


const blogSchema = new mongoose.Schema ({
    title: {
        type: String
    },
    content: {
        type: String
    },
    tag: {
        type: String,
        required:true
    },
    createdBy: {
        type: String
    }

},{timestamps:true});

const Blogs = mongoose.model('blog', blogSchema);

export{Blogs};