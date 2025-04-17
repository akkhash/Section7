import React, { useState, useEffect, useRef } from 'react';
import "../Components/ChatBox.css";
import EmojiPicker from 'emoji-picker-react';

function Sec7GChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [gifUrl, setGifUrl] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [nickname, setNickname] = useState('Guest');
  const [ipAddress, setIpAddress] = useState('Fetching...');
  const messagesEndRef = useRef(null);

  const API_URL = 'https://67cfa7d6823da0212a82ea48.mockapi.io/myapi/users';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error('Error fetching messages:', err));
  }, []);

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => setIpAddress(data.ip))
      .catch(() => setIpAddress('Unknown'));
  }, []);

  const sendMessage = (type, content) => {
    if (content.trim() !== '') {
      const newMessage = {
        name: `${nickname} (${ipAddress})`,
        type,
        content,
      };

      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessage),
      })
        .then((res) => res.json())
        .then((data) => {
          setMessages((prevMessages) => [...prevMessages, data]);
          if (type === 'text') setInput('');
          if (type === 'image') setImageUrl('');
          if (type === 'video') setVideoUrl('');
          if (type === 'gif') setGifUrl('');
        })
        .catch((err) => console.error('Error sending message:', err));
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbox-page">
      <center>
        <h2 className="chatbox-heading">Section-7 Chat Box - SSCB</h2>
        <div className="nickname-container">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter your nickname"
            className="nickname-input"
          />
        </div>
        <div className="chatbox-wrapper">
          <div className="chatbox-container">
            <div className="chatbox-messages">
              {messages.map((msg, index) => (
                <div key={index} className="chatbox-message">
                  <strong>{msg.name}:</strong>
                  {msg.type === 'text' && <span> {msg.content}</span>}
                  {msg.type === 'image' && <img src={msg.content} alt="Shared" className="chatbox-img" width="150px" />}
                  {msg.type === 'video' && (
                    <video width="200" controls>
                      <source src={msg.content} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {msg.type === 'gif' && <img src={msg.content} alt="GIF" className="chatbox-img" width="150px" />}
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            <div className="chatbox-input-container">
              <input
                type="text"
                placeholder="Paste image URL..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <button onClick={() => sendMessage('image', imageUrl)}>Send Image</button>

              <input
                type="text"
                placeholder="Paste video URL..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
              <button onClick={() => sendMessage('video', videoUrl)}>Send Video</button>

              <input
                type="text"
                placeholder="Paste GIF URL..."
                value={gifUrl}
                onChange={(e) => setGifUrl(e.target.value)}
              />
              <button onClick={() => sendMessage('gif', gifUrl)}>Send GIF</button>

              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={() => sendMessage('text', input)}>Send</button>
              <button className="emoji-btn" onClick={() => setShowEmojiPicker((prev) => !prev)}>😊</button>
            </div>

            {showEmojiPicker && <EmojiPicker onEmojiClick={(emojiData) => setInput((prev) => prev + emojiData.emoji)} />}
          </div>
        </div>
      </center>
    </div>
  );
}

export default Sec7GChat;