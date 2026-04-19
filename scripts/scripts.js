(function () {
    var filters = document.querySelectorAll('.tag-filter');
    var items = document.querySelectorAll('.topics-list .topic-item');
    var emptyState = document.getElementById('cards-empty');

    function applyFilter(tag) {
        var visibleCount = 0;

        items.forEach(function (card) {  // ← Mude 'cards' para 'items'
            var matches = tag === 'all' || card.getAttribute('data-tag') === tag;  // ← Mude 'items' para 'card'
            card.classList.toggle('is-hidden', !matches);
            if (matches) {
                visibleCount += 1;
            }
        });

        if (emptyState) {
            emptyState.hidden = visibleCount !== 0;
        }
    }

    filters.forEach(function (button) {
        button.addEventListener('click', function () {
            var selectedTag = button.getAttribute('data-filter');

            filters.forEach(function (item) {
                var active = item === button;
                item.classList.toggle('is-active', active);
                item.setAttribute('aria-pressed', active ? 'true' : 'false');
            });

            applyFilter(selectedTag);
        });
    });

    applyFilter('all');
})();
