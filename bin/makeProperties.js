// A utility script for getting properties from element prototypes
elements = [
    'Video',
    'Source',
    'Media',
    'Audio',
    'UL',
    'Track',
    'Title',
    'TextArea',
    'Template',
    'TBody',
    'THead',
    'TFoot',
    'TR',
    'Table',
    'Col',
    'ColGroup',
    'TH',
    'TD',
    'Caption',
    'Style',
    'Span',
    'Shadow',
    'Select',
    'Script',
    'Quote',
    'Progress',
    'Pre',
    'Picture',
    'Param',
    'P',
    'Output',
    'Option',
    'Optgroup',
    'Object',
    'OL',
    'Ins',
    'Del',
    'Meter',
    'Meta',
    'Menu',
    'Map',
    'Link',
    'Legend',
    'Label',
    'LI',
    'KeyGen',
    'Input',
    'Image',
    'IFrame',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'Hr',
    'FrameSet',
    'Frame',
    'Form',
    'Font',
    'Embed',
    'Article',
    'Aside',
    'Footer',
    'Figure',
    'FigCaption',
    'Header',
    'Main',
    'Mark',
    'MenuItem',
    'Nav',
    'Section',
    'Summary',
    'WBr',
    'Div',
    'Dialog',
    'Details',
    'DataList',
    'DL',
    'Canvas',
    'Button',
    'Base',
    'Br',
    'Area',
    'A']
for (var i = 0, l = elements.length; i < l; i++) {
  var name = elements[i]
  var element = document.createElement(name)
  var keys = []
  for (key in element) {
    if (element.__proto__.hasOwnProperty(key)) {
      var value = element[key]
      if (typeof value === 'string' || typeof value === 'number' || value === 'boolean') {
        keys.push(key)
      }
    }
  }
  console.log(name, keys)
}
