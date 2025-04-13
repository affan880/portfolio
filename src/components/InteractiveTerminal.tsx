'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FiTerminal, FiArrowRight } from 'react-icons/fi'
import styled from 'styled-components'

// Define prop types for styled components
interface TerminalContainerProps {
  $expanded: boolean;
}

// Styled Components
const TerminalContainer = styled.div<TerminalContainerProps>`
  background-color: ${({ theme }) => theme.colors?.body || '#0d1117'};
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  max-width: ${props => props.$expanded ? '900px' : '600px'};
  height: ${props => props.$expanded ? '500px' : '300px'};
  transform: ${props => props.$expanded ? 'scale(1)' : 'scale(0.95)'};
  margin: 2rem auto;
  position: relative;
`

const TerminalHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const TerminalTitle = styled.div`
  color: ${({ theme }) => theme.colors?.text?.[100] || '#fff'};
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const TerminalBody = styled.div`
  padding: 16px;
  height: calc(100% - 48px);
  overflow-y: auto;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  color: ${({ theme }) => theme.colors?.text?.[100] || '#fff'};
  font-size: 14px;
  line-height: 1.6;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
`

const TerminalLine = styled.div`
  margin-bottom: 8px;
  display: flex;
`

const Prompt = styled.span`
  color: ${({ theme }) => theme.colors?.primary || '#3b82f6'};
  margin-right: 8px;
`

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors?.primary || '#3b82f6'};
  margin-left: 4px;
  animation: blink 1s infinite;
  vertical-align: middle;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors?.text?.[200] || '#aaa'};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors?.text?.[100] || '#fff'};
  }
`

interface TerminalCommand {
  command: string;
  response: string[];
}

const InteractiveTerminal: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentResponse, setCurrentResponse] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  
  const commands: TerminalCommand[] = [
    {
      command: "whoami",
      response: ["Syed Affan - Full Stack Developer"]
    },
    {
      command: "ls -la skills/",
      response: [
        "drwxr-xr-x  frontend/",
        "drwxr-xr-x  backend/",
        "drwxr-xr-x  mobile/",
        "drwxr-xr-x  devops/"
      ]
    },
    {
      command: "ls -la skills/frontend/",
      response: [
        "-rw-r--r--  React.js",
        "-rw-r--r--  Next.js",
        "-rw-r--r--  TypeScript",
        "-rw-r--r--  CSS/SCSS",
        "-rw-r--r--  Styled Components"
      ]
    },
    {
      command: "cat contact.txt",
      response: [
        "Email: syed.affan@example.com",
        "GitHub: github.com/affan880",
        "LinkedIn: linkedin.com/in/syed-affan"
      ]
    }
  ];

  // Auto-typing effect
  useEffect(() => {
    if (commandIndex < commands.length) {
      if (charIndex < commands[commandIndex].command.length) {
        setTyping(true);
        const timer = setTimeout(() => {
          setCurrentCommand(commands[commandIndex].command.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100 + Math.random() * 50); // Random typing speed for more realism
        
        return () => clearTimeout(timer);
      } else {
        setTyping(false);
        const timer = setTimeout(() => {
          setHistory(prev => [
            ...prev, 
            { 
              command: commands[commandIndex].command, 
              response: commands[commandIndex].response
            }
          ]);
          setCurrentCommand("");
          setCurrentResponse(commands[commandIndex].response);
          setCommandIndex(commandIndex + 1);
          setCharIndex(0);
        }, 500);
        
        return () => clearTimeout(timer);
      }
    }
  }, [commandIndex, charIndex, commands]);
  
  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, currentCommand]);

  return (
    <TerminalContainer $expanded={expanded}>
      <TerminalHeader>
        <TerminalTitle>
          <FiTerminal />
          <span>saffan@portfolio:~</span>
        </TerminalTitle>
        <ExpandButton onClick={() => setExpanded(!expanded)}>
          {expanded ? "Minimize" : "Expand"}
        </ExpandButton>
      </TerminalHeader>
      <TerminalBody ref={terminalBodyRef}>
        {/* Welcome message */}
        <TerminalLine>Welcome to Syed Affan's interactive portfolio terminal. Type or watch commands execute.</TerminalLine>
        <TerminalLine>Type 'help' for available commands.</TerminalLine>
        <TerminalLine>&nbsp;</TerminalLine>
        
        {/* Command history */}
        {history.map((item, i) => (
          <React.Fragment key={i}>
            <TerminalLine>
              <Prompt>$</Prompt>
              {item.command}
            </TerminalLine>
            {item.response.map((line, j) => (
              <TerminalLine key={`resp-${i}-${j}`}>{line}</TerminalLine>
            ))}
            <TerminalLine>&nbsp;</TerminalLine>
          </React.Fragment>
        ))}
        
        {/* Current command being typed */}
        <TerminalLine>
          <Prompt>$</Prompt>
          {currentCommand}
          {typing && <Cursor />}
        </TerminalLine>
        
        {/* Current response */}
        {!typing && currentResponse.length > 0 && (
          <>
            {currentResponse.map((line, i) => (
              <TerminalLine key={`current-${i}`}>{line}</TerminalLine>
            ))}
            <TerminalLine>&nbsp;</TerminalLine>
          </>
        )}
      </TerminalBody>
    </TerminalContainer>
  );
};

export default InteractiveTerminal; 