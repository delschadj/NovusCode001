import { TFiles } from './types';

function convertJsonToTFiles(json: Record<string, any>): TFiles[] {
  // Function to convert a directory object to TFiles
  const convertDirectory = (content: Record<string, any>): TFiles => {
    const children: TFiles[] = [];

    // Extract 'files' from the current content
    const files = content.files || [];
    const directories = content.directories || {};

    // Add files directly to children
    for (const file of files) {
      if (typeof file === 'string' && file) {  // Ensure file is a non-empty string
        children.push({
          name: file,
          type: 'file',
          children: [] // Files do not have children
        });
      }
    }

    // Recursively process directories
    for (const [dirName, dirContent] of Object.entries(directories)) {
      // Check if there are files in the current directory
      const dirFiles = dirContent.files || [];
      for (const dirFile of dirFiles) {
        if (typeof dirFile === 'string' && dirFile) {
          // Add each file in this directory directly to the children array
          children.push({
            name: dirFile,
            type: 'file',
            children: [] // Files do not have children
          });
        }
      }

      // Recursively convert the directory contents
      const directoryChildren = convertDirectory(dirContent).children;

      // Add the directory itself with its children if it has any
      children.push({
        name: dirName,
        type: 'directory',
        children: directoryChildren.length > 0 ? directoryChildren : [],
      });
    }

    return {
      name: '',  // Name is not used for the root folder
      type: 'directory',
      children: children.sort((a, b) => {
        if (a.type === 'directory' && b.type !== 'directory') return -1;
        if (a.type !== 'directory' && b.type === 'directory') return 1;
        return a.name.localeCompare(b.name);
      }),
    };
  };

  const result: TFiles[] = [];

  // Process the root directory's contents and skip the root folder itself
  const rootKeys = Object.keys(json);
  if (rootKeys.length > 0) {
    const rootContent = json[rootKeys[0]];
    result.push(...convertDirectory(rootContent).children);
  }

  console.log (result)
  return result;
}

export default convertJsonToTFiles;
