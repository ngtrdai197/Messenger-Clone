import React, { useState } from 'react';

import { useStore } from '@app/app/stores';

const ChatInput: React.FC = () => {
  const { chatList } = useStore();
  const [message, setMessage] = useState('');

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      chatList.pushMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center pr-4 py-3">
      <div className="flex p-3">
        <svg height="28px" width="28px" viewBox="0 0 36 36">
          <path
            d="M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-1-16a1 1 0 112 0v3.75c0 .138.112.25.25.25H23a1 1 0 110 2h-3.75a.25.25 0 00-.25.25V23a1 1 0 11-2 0v-3.75a.25.25 0 00-.25-.25H13a1 1 0 110-2h3.75a.25.25 0 00.25-.25V13z"
            fill="#0099FF"
          ></path>
        </svg>
        <svg height="28px" width="28px" viewBox="0 0 36 36">
          <path d="M13.5 16.5a2 2 0 100-4 2 2 0 000 4z" fill="#0099FF"></path>
          <path
            d="M7 12v12a4 4 0 004 4h14a4 4 0 004-4V12a4 4 0 00-4-4H11a4 4 0 00-4 4zm18-1.5H11A1.5 1.5 0 009.5 12v9.546a.25.25 0 00.375.217L15 18.803a6 6 0 016 0l5.125 2.96a.25.25 0 00.375-.217V12a1.5 1.5 0 00-1.5-1.5z"
            fill="#0099FF"
          ></path>
        </svg>
        <svg height="28px" width="28px" viewBox="0 0 36 36">
          <path
            d="M8 12a4 4 0 014-4h12a4 4 0 014 4v5a1 1 0 01-1 1h-3a6 6 0 00-6 6v3a1 1 0 01-1 1h-5a4 4 0 01-4-4V12z"
            fill="#0099FF"
          ></path>
          <path
            d="M20 27c0 .89 1.077 1.33 1.707.7l5.993-5.993c.63-.63.19-1.707-.7-1.707h-3a4 4 0 00-4 4v3z"
            fill="#0099FF"
          ></path>
        </svg>
      </div>
      <div className="flex-1 pr-4">
        <input
          type="text"
          className="rounded-2xl bg-gray-100 p-4 w-full outline-none"
          placeholder="Enter some text ..."
          onKeyDown={handleKeyDown}
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
      </div>
      <svg height="20" width="20" viewBox="0 0 22 23">
        <path
          d="M10.987 0c1.104 0 3.67.726 3.67 5.149 0 1.232-.123 2.001-.209 2.534a16.11 16.11 0 00-.048.314l-.001.005a.36.36 0 00.362.406c4.399 0 6.748 1.164 6.748 2.353 0 .533-.2 1.02-.527 1.395a.11.11 0 00.023.163 2.13 2.13 0 01.992 1.79c0 .86-.477 1.598-1.215 1.943a.11.11 0 00-.046.157c.207.328.329.713.329 1.128 0 .946-.547 1.741-1.406 2.029a.109.109 0 00-.068.137c.061.184.098.38.098.584 0 1.056-1.776 1.913-5.95 1.913-3.05 0-5.154-.545-5.963-.936-.595-.288-1.276-.81-1.276-2.34v-6.086c0-1.72.958-2.87 1.911-4.014C9.357 7.49 10.3 6.36 10.3 4.681c0-1.34-.091-2.19-.159-2.817-.039-.368-.07-.66-.07-.928 0-.527.385-.934.917-.936zM3.5 11h-2C.5 11 0 13.686 0 17s.5 6 1.5 6h2a1 1 0 001-1V12a1 1 0 00-1-1z"
          fill="#0099FF"
        ></path>
      </svg>
    </div>
  );
};

export default ChatInput;
