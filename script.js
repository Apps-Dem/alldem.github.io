(function () {
  var list = document.getElementById('projects');
  fetch('projects.json')
    .then(function (r) { return r.json(); })
    .then(function (projects) {
      list.textContent = '';
      projects.forEach(function (p) {
        var li = document.createElement('li');
        li.className = 'card';
        var a = document.createElement('a');
        a.href = p.url;
        var h = document.createElement('h2');
        h.textContent = p.name;
        var d = document.createElement('p');
        d.textContent = p.description || '';
        var host = document.createElement('small');
        try { host.textContent = new URL(p.url).hostname; } catch (e) {}
        a.append(h, d, host);
        li.appendChild(a);
        list.appendChild(li);
      });
    })
    .catch(function () { /* keep static fallback */ });
})();
