const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes.js')


yargs.version('1.1.0')
yargs.command({
    command:"add",
    describe:'add a node',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'String'
        },
        body:{
            describe:'Content of the note.',
            demandOption:true,
            type:'String'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    } 
})

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{title:{describe:'Note Title',demandOption:true,type:'String'}},
    handler:function(argv){notes.removeNote(argv.title)}
})

yargs.command({
    command:'list',
    describe:'Lists all the notes.',
    handler(){
        notes.listNote()
    }
})
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{title:{describe:'Note Title',demandOption:true,type:'String'}},
    handler(argv){
        notes.readNote(argv.title)
    }
})
//add,remove,read,list
yargs.parse()
