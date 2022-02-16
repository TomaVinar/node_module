const fs = require('fs').promises;
const path = require('path');

fs.writeFile(path.join(__dirname, 'main_folder', 'text.txt'), 'SOME DATA - NEW DATA', (err) => {
    if (err) {
        console.log(err);
    }
})
//
// function replaceText() {
//     fs.readFile(path.join(__dirname, 'main_folder', 'text.txt'), 'utf8', (error, data) => {
//         if (error) return console.log(error);
//
//         fs.writeFile(path.join(__dirname, 'main_folder', 'newText.txt'), data, (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//     });
// }
//
// replaceText();

// async function replaceText() {
//     try {
//         const data = await fs.readFile(path.join(__dirname, 'main_folder', 'text.txt'), 'utf8');
//         if (!data) return console.log('error');
//
//         await fs.writeFile(path.join(__dirname, 'main_folder', 'newText.txt'), data);
//     } catch (e) {
//         console.log(e);
//     }
//
// }
//
// replaceText();
//

// fs.writeFile(path.join(__dirname, 'main_folder', 'file.txt'), 'New ONE', (err)=>{
//     if (err) {
//         console.log(err);
//     }
// })

// async function secondTask() {
//     try {
//         const data = await fs.readFile(path.join(__dirname, 'main_folder', 'file.txt'), 'utf8')
//         if (!data) {
//             console.log('error message')
//         }
//
//         await fs.mkdir(path.join(__dirname, 'main_folder', 'newFolder'))
//
//         await fs.writeFile(path.join(__dirname, 'main_folder', 'newFolder', 'newFile.txt'), data)
//
//         await fs.unlink(path.join(__dirname, 'main_folder', 'file.txt'))
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
//
// secondTask();

async function createNew() {
    try {
        await fs.mkdir(path.join(__dirname, 'main_folder', 'files', 'file1'), {recursive: true})

        await fs.writeFile(path.join(__dirname, 'main_folder', 'files', 'file1', 'file1.txt'), 'HELLO WORLD')

        await fs.writeFile(path.join(__dirname, 'main_folder', 'files', 'files.txt'), 'LETS DO IT')

        for (let file of await fs.readdir(path.join(__dirname, 'main_folder', 'files'), {withFileTypes: true})) {
            if (file.isDirectory()) {
                await fs.rename(path.join(__dirname, 'main_folder', 'files', file.name),
                    path.join(__dirname, 'main_folder', 'files', `new_${file.name}`))
            } else if (file.isFile()) {
                fs.truncate(path.join(__dirname, 'main_folder', 'files', file.name))
            }
        }

    }catch (err) {
        console.log(err);
    }
}

createNew();