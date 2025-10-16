(function () {
  var states = [
    'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
    'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland',
    'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
    'New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
    'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
  ];

  // Simple mocked topics per state; in a real app this would come from an API
  function getTopicsForState(state) {
    var seed = state.charCodeAt(0) + state.length;
    var buckets = [
      {
        title: 'Funding Equity and Resources',
        summary: 'Address disparities in per-student funding and access to learning tools.'
      },
      {
        title: 'Teacher Retention and Support',
        summary: 'Invest in pay, mentoring, and pipelines to keep great teachers.'
      },
      {
        title: 'Early Literacy and Numeracy',
        summary: 'Expand K-3 evidence-based reading and math interventions.'
      },
      {
        title: 'College and Career Readiness',
        summary: 'Strengthen dual-enrollment, CTE, and advising for all students.'
      },
      {
        title: 'Safe and Healthy Schools',
        summary: 'Support mental health services and positive school climates.'
      }
    ];
    var start = seed % 2;
    return [buckets[start], buckets[(start + 1) % buckets.length], buckets[(start + 2) % buckets.length]];
  }

  function populateStates(selectEl) {
    var frag = document.createDocumentFragment();
    var defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = 'Choose a state';
    frag.appendChild(defaultOpt);
    states.forEach(function (s) {
      var opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      frag.appendChild(opt);
    });
    selectEl.appendChild(frag);
  }

  function createActionButton(label, href) {
    var a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'btn';
    a.textContent = label;
    return a;
  }

  function renderTopics(container, state) {
    container.innerHTML = '';
    if (!state) return;
    var topics = getTopicsForState(state);

    topics.forEach(function (t) {
      var div = document.createElement('div');
      div.className = 'topic';

      var h4 = document.createElement('h4');
      h4.textContent = t.title + ' — ' + state;
      var p = document.createElement('p');
      p.textContent = t.summary;

      var actions = document.createElement('div');
      actions.className = 'actions';

      // Example resources
      actions.appendChild(createActionButton('Donate to a local classroom', 'https://www.donorschoose.org/'));
      actions.appendChild(createActionButton('Contact your state senators', 'https://www.senate.gov/senators/senators-contact.htm'));
      actions.appendChild(createActionButton('Find local advocacy events', 'https://www.eventbrite.com/d/online/education-advocacy/'));
      actions.appendChild(createActionButton('State Dept. of Education', 'https://www2.ed.gov/about/contacts/state/index.html'));

      div.appendChild(h4);
      div.appendChild(p);
      div.appendChild(actions);
      container.appendChild(div);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('state');
    var topics = document.getElementById('topics');
    if (!select || !topics) return;

    populateStates(select);
    select.addEventListener('change', function () {
      renderTopics(topics, select.value);
    });
  });
})();
