const fs = require('fs')

createComponent()

function createComponent() {
    /* Utility functions */

    const createDir = (dirPath) => {
        fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
            if (error) {
                console.error(
                    "Error! Your base folder has not been created. It may be a duplicate ; try naming it differently."
                );
            } else {
                console.log('New directory for component: ' + dirPath)
            }
        })
    }

    const createFile = (filePath, fileContent) => {
        fs.writeFile(filePath, fileContent, error => {
            if (error) {
                console.error(
                    "Error! File was not created."
                );
            } else {
                console.log(`File ${filePath} has been successfully created.`);
            }
        });
    }

    const componentName = process.argv[2]

    if (componentName === undefined) {
        console.error(
            "Error! Name of the component has not been provided. \n Run 'npm run create componentname' to provide a name."
        );
        return;
    }   
    
    const componentNameUpper = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const baseDir = '/src/components/'
    const fullProjectPath = process.cwd() + '/src/components/'

    const configurationFiles = [
        {
            ext: 'js',
            content: `import "./${componentNameUpper}.scss" \n \nfunction ${componentNameUpper}() {\n \n  return (\n    <div className="${componentNameUpper}"> \n \n    </div> \n  ); \n} \nexport default ${componentNameUpper};`
        },
        {
            ext: 'scss',
            content: `/*! ${componentNameUpper} component */ \n.${componentNameUpper} {\n \n}`
        }
    ]

    createDir(baseDir + componentNameUpper)

    // Create files from configuration array
    configurationFiles.forEach(file => {
        createFile(fullProjectPath + `${componentNameUpper}/` + componentNameUpper + '.' + file.ext, file.content)
    });
}