(function () {
	var myForm = document.getElementById('myForm');

	var rules = {
		title: {
			require: '标题必填',
			minLength: {
				rule: 2,
			},
			maxLength: {
				rule: 20,
			},
		},
		category: {
			require: '',
		},
		author: {
			require: '',
			chsAlpha: ''
		},
		views: {
			require: '',
			integer: ''
		},
		price: {
			require: '',
			float: ''
		},
		age: {
			require: '',
			integer: '',
			between: {
				min: 18,
				max: 35
			}
		},
		url: {
			url: ''
		},
		tag: {
			array: '',
			require: '',
		},
		email: {
			require: '',
			email: ''
		},
		date: {
			require: '',
			date: ''
		},
		custom: {
			require: '',
			myRule: {
				rule: function (value) {
					return value === 'smohan'
				},
				msg: '必须输入 smohan'
			}
		}

	}

	var forms = document.forms.myForm.elements
	var $singleStep = document.getElementById('singleStep')
	var $result = document.getElementById('result')

	var elements = {
		title: forms.title,
		category: forms.category,
		author: forms.author,
		views: forms.views,
		age: forms.age,
		price: forms.price,
		url: forms.url,
		tag: forms.tag,
		email: forms.email,
		date: forms.date,
		custom: forms.custom
	}

	var $tags = document.getElementsByName('tag')


	myForm.addEventListener('submit', function (e) {
		e.preventDefault();
		var data = Object.create(null)
		//console.log(data)
		for (var f in elements) {
			if (f === 'views' || f === 'price' || f === 'age') {
				data[f] = elements[f].value ? Number(elements[f].value) : ''
			} else if (f === 'tag') {
				data.tag = []
				$tags.forEach(function (tag) {
					if (tag.checked) {
						data.tag.push(tag.value)
					}
				})

			} else {
				data[f] = elements[f].value
			}
		}
		var isSingleStep = !!$singleStep.checked


		var validate = Validator.check(rules, data, isSingleStep)

		if (!validate.status) {
			$result.style.cssText += 'color:red';
			$result.innerHTML = ''
			if (isSingleStep) {
				$result.innerHTML = validate.msg
			} else {
				for (let r in validate.fields) {
					$result.innerHTML += `<p><code>${validate.fields[r]}</code></p>`
				}
			}
		} else {
			$result.style.cssText += 'color:green';
			$result.innerHTML = 'passed'
		}
	})
})()