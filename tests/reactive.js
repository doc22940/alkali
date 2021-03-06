define(function(require) {
	var reactive = require('../reactive')
	suite('reactive', function() {

		test('primitive types', function() {
			var numVar = reactive(3)
			assert.equal(numVar.valueOf(), 3)
			assert.equal(numVar.to(function(num) { return num * 2 }).valueOf(), 6)
			var strVar = reactive('hello')
			assert.equal(strVar.valueOf(), 'hello')
			assert.equal(strVar.toUpperCase().valueOf(), 'HELLO')
			var boolVar = reactive(false)
			assert.strictEqual(boolVar.valueOf(), false)
			assert.strictEqual(boolVar.to(function(bool) { return !bool }).valueOf(), true)
		})
		test('native types', function() {
			if (typeof Map === 'undefined') {
				return
			}
			var setVar = reactive(new Set())
			setVar.add(4)
			assert.equal(setVar.valueOf().size, 1)
		})
		test('complex data', function() {
			var circular = { flag: true }
			circular.circular = circular
			var objVar = reactive({
				num: 3,
				obj: {
					foo: 4,
					subObj: {
						str: 'hi'
					}
				},
				circular: circular
			})
			assert.equal(objVar.num.valueOf(), 3)
			assert.equal(objVar.obj.foo.valueOf(), 4)
			assert.equal(objVar.obj.subObj.str.valueOf(), 'hi')
			assert.equal(objVar.circular.circular.flag.valueOf(), true)
		})
		test('change original data', function() {
			var obj = {
				foo: 3
			}
			reactive(obj).foo.put(3)
			assert.equal(obj.foo, 3)
		})
		test('with arrays', function() {
			var array = reactive([{ name: 'first' }, { name: 'second' }])
			var asString = array.to(function(array) {
				return array.map(function(item) {
					return item.name
				}).join(', ')
			})
			assert.equal(asString.valueOf(), 'first, second')
			array.property(0).set('name', 'changed')
			assert.equal(asString.valueOf(), 'changed, second')
		})
	})
})
