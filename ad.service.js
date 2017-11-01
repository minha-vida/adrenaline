export function loadAdSlots() {

  var elements = document.querySelectorAll('[data-ad]');
  var slots = {};

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    slots[element.id].element = element;
    var ds = element.dataset;
    var size = eval(ds['adSize']);

    slots[element.id].adUnit = ds['adAdunit'];
    slots[element.id].name = element.id;
    slots[element.id].size = size;
    slots[element.id].isOutOfPage = Boolean(ds['adOutOfPage']);
    slots[element.id].autoRefreshTime = Number(ds['adAutoRefreshInSeconds']) || 0;
    slots[element.id].autoRefreshLimit = Number(ds['adAutoRefreshLimit']) || 0;
    slots[element.id].lazyloadOffset = Number(ds['adLazyloadOffset']);
    slots[element.id].autoRefreshEnabled = slots[element.id].autoRefreshTime > 0;

    if (slots[element.id].lazyloadOffset) {
      slots[element.id].lazyloadOffset = slots[element.id].lazyloadOffset || 0;
      slots[element.id].lazyloadEnabled = true;
    }
  }
  return slots[element.id];
}
