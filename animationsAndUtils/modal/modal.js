export const initModal = () => {
	const modal = document.querySelector('.modal');

	if (!modal) {
		return;
	}

	const modalTrigger = document.querySelector('');

	const closeModal = () => {
		modal.classList.remove('show');
		document.removeEventListener('keyup', handleKeyUp);
	};

	const showModal = () => {
		modal.classList.add('show');
		document.addEventListener('keyup', handleKeyUp);
	};

	modal.addEventListener('click', e => {
		if (e.target === modal || e.target.classList.contains('modal__close')) {
			closeModal();
		}
	});

	const handleKeyUp = e => {
		if (e.key === 'Escape') {
			closeModal();
		}
	};

	modalTrigger.addEventListener('click', () => {
		showModal();
	});
};

initModal();
