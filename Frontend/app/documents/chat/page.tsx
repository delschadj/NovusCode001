// page.tsx

"use client";

import React, { useState } from 'react';
import PageContainer from '@/components/layout/page-container';
import ChatDocument from '@/components/ChatDocuments';

const Chat = () => {
  const [showHeading, setShowHeading] = useState(true);

  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-col h-[95%]">
        {showHeading && <h1 className="text-2xl font-bold mb-4">Chat</h1>}
        
        <div className="flex-grow flex overflow-hidden">
          <ChatDocument onMessageSent={() => setShowHeading(false)} />
        </div>
      </div>
    </PageContainer>
  );
};

export default Chat;
