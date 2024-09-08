export default function initAnimacaoScroll() {
	const sections = document.querySelectorAll('[data-anime="scroll"]');
	if (sections.length) {
		const windowMetade = window.innerHeight * 0.6;

		function animaScroll() {
			for (const section of sections) {
				const sectionTop = section.getBoundingClientRect().top;
				const isSectionVisible = sectionTop - windowMetade < 0;
				if (isSectionVisible) section.classList.add("ativo");
				else if (section.classList.contains("ativo")) {
					section.classList.remove("ativo");
				}
			}
		}

		animaScroll();

		window.addEventListener("scroll", animaScroll);
	}
}
