const assert = require('chai').assert
const app = require('../app.js')


let echoHelloResult = app.echoHello()
let addNumbersResult = app.addNumbers(5, 5)

describe('App.js', function(){

  describe('echoHello()', function() {
    it( 'echoHello() should return \"Hello\"',
    ()=>{
      // let result = app.echoHello()
      assert.equal(echoHelloResult, 'Hello')
    }
  )

    it( 'echoHello() should return type <string>',
    ()=>{
      // let result = app.echoHello()
      assert.typeOf(echoHelloResult, 'string')
    }
  )
  });

  describe('addNumbers()', function() {
    it( 'addNumbers() should return value above 5',
    ()=>{
      // let result = app.addNumbers(1, 2)
      assert.isAbove(addNumbersResult, 5) //This should fail
    }
  )

    it( 'addNumbers() should return type <number>',
    ()=>{
      // let result = app.addNumbers(5, 5)
      assert.typeOf(addNumbersResult, 'number')
    }
  )
  });

})
