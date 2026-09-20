// Citation counts are optional: the page remains complete if the feed is unavailable.
const citationScript = document.currentScript;
const citationElements = document.querySelectorAll('.show_paper_citations');
if (citationElements.length && citationScript.dataset.citationsUrl) {
  fetch(citationScript.dataset.citationsUrl)
    .then(response => {
      if (!response.ok) throw new Error('Citation feed unavailable');
      return response.json();
    })
    .then(data => {
      citationElements.forEach(element => {
        const paper = data.publications?.[element.getAttribute('data')];
        if (paper && Number.isFinite(paper.num_citations)) {
          element.textContent = ` | Citations: ${paper.num_citations}`;
        }
      });
    })
    .catch(() => {});
}
