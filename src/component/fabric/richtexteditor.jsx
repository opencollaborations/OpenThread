import { Input, Textarea } from '@material-tailwind/react';
import React, { useState, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange }) => {
  const [editorHtml, setEditorHtml] = useState(value);

  const handleChange = useCallback(
    (html) => {
      setEditorHtml(html);
      if (onChange) {
        onChange(html);
      }
    },
    [setEditorHtml, onChange]
  );

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
  ];

  return (
    <div className='bound max-h-60 w-full'>
      <ReactQuill
        theme='snow'
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        // bound={'.bound'}
        style={{height:'14rem'}}
      />
    </div>
  );
};

export default RichTextEditor;
