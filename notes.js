const fs = require('fs')
const chalk = require('chalk')
const getIndex = (arr,title)=>{for(let i = 0;i<arr.length;i++){if (arr[i].title === title){return i}}}
const getNotes = ()=>{return 'Your Notes...'}
const saveNote = (notes)=>{fs.writeFileSync('notes.json',JSON.stringify(notes))}
const loadNotes =()=>
{
    try{return JSON.parse(fs.readFileSync('notes.json').toString())}
    catch(e){return []}
}

 
const addNote = (title,body)=>
{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>{return note.title === title})
    
    if (duplicateNotes.length === 0)
    {
        notes.push({title:title,body:body})
        saveNote(notes)
        console.log(chalk.green.inverse('Bingo!! Note Added'))
    }
    else
    {
        console.log(chalk.red.inverse('Title is already occupied.Try another.'))
    }
    
}


const removeNote = (title)=>
{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>{return note.title !== title})
    if(duplicateNotes.length<notes.length)
    {
    saveNote(duplicateNotes)
    console.log(chalk.green.inverse('Bingo!! Note Removed'))
    }
    else{console.log(chalk.red.inverse('No note found!'))}
}


const listNote = ()=>
{
    const notes = loadNotes()
    if(notes.length>0)
    {
        notes.forEach((note)=>{console.log(note.title +' --> '+note.body)})
    }
    else{console.log(chalk.red('List is empty'))}
}   


const readNote = (title)=>
{   let body = false
    const notes = loadNotes()
    notes.forEach((note)=>{if(note.title === title){console.log(note.body);body = true}})
    // if (body!=false){console.log(body)}
    // else{console.log(chalk.red.inverse('Note not found'))}
    if (!body){console.log(chalk.red.inverse('Note not found.'))}
}


module.exports = 
{
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote,
}