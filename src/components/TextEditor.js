
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({values,setValues}) => {
  const handleEditorChange = (e) => {
    // console.log(
    //   'Content was updated:',
    //   e.target.getContent()
    // );
    setValues({...values, text: e.target.getContent()})
  }
    return (
      <Editor
        initialValue="<p>Your text goes here ...</p>"
        apiKey="657krse2cm2jjfgbifzt8a8zzae6ls5p6wlwbraznp9nx7u5"
        init={{
          height: 300,
          menubar: true,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={handleEditorChange}
      />
    );
  }

export default TextEditor;