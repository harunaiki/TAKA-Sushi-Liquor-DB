
        function filterWines(category) {
            var tabs = document.querySelectorAll('.tab');
            tabs.forEach(function(tab) {
                tab.classList.remove('tab-active');
                if (tab.innerText === category) {
                    tab.classList.add('tab-active');
                }
            });
            var cards = document.querySelectorAll('.wine-card');
            cards.forEach(function(card) {
                if (card.querySelector('.wine-card-category').innerText === category || category === 'ALL') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        // Add event listeners for the tabs to ensure the active tab class is applied correctly
        document.querySelectorAll('.tab').forEach(function(tab) {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.tab').forEach(function(innerTab) {
                    innerTab.classList.remove('tab-active');
                });
                tab.classList.add('tab-active');
            });
        });

        function filterWines(category) {
            var tabs = document.querySelectorAll('.tab');
            tabs.forEach(function(tab) {
                tab.classList.remove('tab-active');
                if (tab.innerText === category) {
                    tab.classList.add('tab-active');
                }
            });
            var cards = document.querySelectorAll('.wine-card');
            cards.forEach(function(card) {
                if (card.querySelector('.wine-card-category').innerText === category || category === 'ALL') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function showModal(modalId) {
            document.getElementById(modalId).style.display = 'flex';
        }
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
        function filterWines(category) {
            var cards = document.querySelectorAll('.wine-card');
            cards.forEach(function(card) {
                if (card.querySelector('.wine-card-category').innerText === category || category === 'All') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    