function errorMessage(pythonProcess) {
    pythonProcess.stderr.on('data', (data) => {
        console.error(data);
    });
}
const { spawn } = require('child_process');

function getData(link) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['./node_modules/babytube/src/getData.py', link]);
        let jsonData = '';
        pythonProcess.stdout.on('data', (data) => {
            jsonData += data.toString();
        });
        pythonProcess.stdout.on('end', () => {
            try {
                const parsedData = JSON.parse(jsonData);
                resolve(parsedData);
            } catch (error) {
                reject(error);
            }
        });
        errorMessage(pythonProcess);
    });
}

function videoDownload(link, file) {
    const pythonProcess = spawn('python', ['./node_modules/babytube/src/videoDownload.py', link, file]);

    pythonProcess.stdout.on('end', (data) => {
        console.log("download finished!");
    });
    errorMessage(pythonProcess);
}

function musicDownload(link, file) {
    const pythonProcess = spawn('python', ['./node_modules/babytube/src/musicDownload.py', link, file]);

    pythonProcess.stdout.on('end', (data) => {
        console.log("download finished!");
    });
    errorMessage(pythonProcess);
}

module.exports = { musicDownload, videoDownload, getData };
