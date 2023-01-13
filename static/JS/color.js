let link = document.querySelectorAll(".colorLink")

for (let i=0; i<link.length; i++) {
	let l = link[i]

	l.addEventListener("click", function(e) {
		e.preventDefault()

		let el = e.currentTarget

		let body = document.querySelector("body")
		body.style.backgroundColor = el.dataset.bgcolor

		let titolo = document.querySelector(".titolo")
		let sottotitolo = document.querySelector(".sottotitolo")
		switch(el.dataset.bgcolor) {

			case '#FE0202':
				titolo.style.color = 'white'
				sottotitolo.style.color = 'white'
				break;

			case '#59BC98':
				titolo.style.color = 'white'
				sottotitolo.style.color = 'white'
				break;

			case '#2594D2':
				titolo.style.color = 'white'
				sottotitolo.style.color = 'white'
				break;

			case '#72BC59':
				titolo.style.color = 'white'
				sottotitolo.style.color = 'white'
				break;

			case '#BC59A0':
				titolo.style.color = 'white'
				sottotitolo.style.color = 'white'
				break;

			case '#DCF63C':
				titolo.style.color = 'white'
				sottotitolo.style.color = 'white'
				break;	
		}
	})
}
