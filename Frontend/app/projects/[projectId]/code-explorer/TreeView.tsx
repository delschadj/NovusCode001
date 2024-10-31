import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaFolder,
  FaHtml5,
  FaCss3Alt,
  FaMarkdown,
  FaJsSquare,
  FaTypewriter,
  FaJson,
  FaFileAlt
} from 'react-icons/fa';
import { TFiles } from './types';
import convertJsonToTFiles from './convertJsonToTFiles';
import { useProjectData } from '@/context/ProjectDataContext';
import { TailSpin } from 'react-loader-spinner'; // Import TailSpin loader

// Sort entries (directories and files) alphabetically, with directories first
const sortEntries = (entries: TFiles[]): TFiles[] => {
  return entries.sort((a, b) => {
    if ((a.children && b.children) || (!a.children && !b.children)) {
      return a.name.localeCompare(b.name);
    }
    return a.children ? -1 : 1;
  });
};

// Get file icons based on the file type
const getFileIcon = (type?: string) => {
  const iconSize = 'text-lg'; // Set icon size using Tailwind classes

  switch (type) {
    case 'html':
      return <FaHtml5 className={`${iconSize} text-black dark:text-white`} />;
    case 'css':
      return <FaCss3Alt className={`${iconSize} text-black dark:text-white`} />;
    case 'md':
      return <FaMarkdown className={`${iconSize} text-black dark:text-white`} />;
    case 'js':
      return <FaJsSquare className={`${iconSize} text-black dark:text-white`} />;
    case 'ts':
      return <FaTypewriter className={`${iconSize} text-black dark:text-white`} />;
    case 'json':
      return <FaJson className={`${iconSize} text-black dark:text-white`} />;
    default:
      return <FaFileAlt className={`${iconSize} text-black dark:text-white`} />;
  }
};

// Component to render each directory or file entry
type EntryProps = {
  entry: TFiles;
  depth: number;
  onFileClick: (filePath: string) => void;
  selectedFile: string;
  onSelect: (filePath: string) => void;
  parentPath: string;
};

const Entry: React.FC<EntryProps> = ({
  entry,
  depth,
  onFileClick,
  selectedFile,
  onSelect,
  parentPath
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const currentPath = `${parentPath}/${entry.name}`;

  const handleClick = () => {
    if (entry.children && entry.children.length > 0) {
      setIsExpanded((prev) => !prev);
    } else {
      onFileClick(currentPath);
      onSelect(currentPath);
    }
  };

  const isSelected = currentPath === selectedFile;
  const isFolder = entry.children && entry.children.length > 0;

  return (
    <div className={`flex flex-col ${depth > 2 ? 'ml-2' : ''}`}>
      <div
        className={`flex items-center space-x-2 ${
          isSelected ? 'bg-gray-200 dark:bg-gray-800' : ''
        }`}
      >
        {isFolder ? (
          <FaFolder className={`text-black dark:text-white text-lg`} />
        ) : (
          getFileIcon(entry.type)
        )}
        <span
          onClick={handleClick}
          className={`ml-2 cursor-pointer text-gray-800 hover:underline dark:text-gray-200 ${
            isSelected ? 'font-bold' : ''
          }`}
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {entry.name}
        </span>
      </div>
      {isExpanded && isFolder && (
        <div className="ml-2 flex flex-col">
          {sortEntries(entry.children).map((child) => (
            <Entry
              key={child.name}
              entry={child}
              depth={depth + 1}
              onFileClick={onFileClick}
              selectedFile={selectedFile}
              onSelect={onSelect}
              parentPath={currentPath}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main TreeView component that renders the file explorer
type TreeViewProps = {
  onFileClick: (fileName: string) => void;
};

const TreeView: React.FC<TreeViewProps> = ({ onFileClick }) => {
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [filesData, setFilesData] = useState<TFiles[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { projectData } = useProjectData();
  const [loading, setLoading] = useState(true); // Loading state

  const handleSelect = (filePath: string) => {
    setSelectedFile(filePath);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(
          `https://novuscode-backend1-83223007958.us-central1.run.app/file/${projectData.id}/codebaseFileExplorer.json`
        );
        const convertedData = convertJsonToTFiles(response.data);
        setFilesData(sortEntries(convertedData));
      } catch (error) {
        console.log('Error fetching directory structure:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (projectData.id) {
      fetchData();
    }
  }, [projectData.id]);

  // Filter files based on the search query, recursively
  const filterFiles = (files: TFiles[], query: string): TFiles[] => {
    const filtered = files.reduce((acc: TFiles[], file) => {
      if (file.type === 'file' && file.name.toLowerCase().includes(query)) {
        acc.push(file);
      } else if (file.type === 'directory') {
        const filteredChildren = filterFiles(file.children || [], query);
        if (
          filteredChildren.length > 0 ||
          file.name.toLowerCase().includes(query)
        ) {
          acc.push({
            ...file,
            children: filteredChildren
          });
        }
      }
      return acc;
    }, []);

    return filtered;
  };

  // Combined loading logic
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin
          visible={true}
          height="50" // Smaller size
          width="50"  // Smaller size
          color="#000000" // Black color
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="scrollable-container p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search files..."
          className="w-full rounded border border-gray-300 p-2"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {filesData.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-600 dark:text-gray-300">No files available</p>
        </div>
      ) : (
        filterFiles(filesData, searchQuery).map((entry) => (
          <Entry
            key={entry.name}
            entry={entry}
            depth={0}
            onFileClick={onFileClick}
            selectedFile={selectedFile}
            onSelect={handleSelect}
            parentPath=""
          />
        ))
      )}
    </div>
  );
};

export default TreeView;