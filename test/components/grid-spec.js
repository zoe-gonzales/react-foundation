import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Row, Column, RowHorizontalAlignments, RowVerticalAlignments } from 'components/grid';

describe('Row component', () => {

  it('sets tag name', () => {
    const component = render(<Row/>);
    expect(component).to.have.tagName('div');
  });

  it('sets class name', () => {
    const component = render(<Row/>);
    expect(component).to.have.className('row');
  });

  it('sets custom class name', () => {
    const component = render(<Row className="my-row"/>);
    expect(component).to.have.className('my-row');
    expect(component).to.not.have.className('row');
  });

  it('sets horizontal alignment', () => {
    const component = render(<Row horizontalAlignment={RowHorizontalAlignments.RIGHT}/>);
    expect(component).to.have.className('align-right');
    expect(component).to.not.have.attr('horizontalAlignment');
  });

  it('sets vertical alignment', () => {
    const component = render(<Row verticalAlignment={RowVerticalAlignments.TOP}/>);
    expect(component).to.have.className('align-top');
    expect(component).to.not.have.attr('verticalAlignment');
  });

  it('sets unstack on small', () => {
    const component = render(<Row unstackOnSmall/>);
    expect(component).to.have.className('small-unstack');
    expect(component).to.not.have.attr('unstackOnSmall');
  });

  it('sets unstack on medium', () => {
    const component = render(<Row unstackOnMedium/>);
    expect(component).to.have.className('medium-unstack');
    expect(component).to.not.have.attr('unstackOnMedium');
  });

  it('sets unstack on large', () => {
    const component = render(<Row unstackOnLarge/>);
    expect(component).to.have.className('large-unstack');
    expect(component).to.not.have.attr('unstackOnLarge');
  });
  
  it('sets column', () => {
    const component = render(<Row isColumn/>);
    expect(component).to.have.className('column');
    expect(component).to.not.have.attr('isColumn');
  });

  it('sets expanded', () => {
    const component = render(<Row isExpanded/>);
    expect(component).to.have.className('expanded');
    expect(component).to.not.have.attr('isExpanded');
  });
  
});

describe('Column component', () => {

  it('sets tag name', () => {
    const component = render(<Column/>);
    expect(component).to.have.tagName('div');
  });

  it('sets class name', () => {
    const component = render(<Column/>);
    expect(component).to.have.className('columns');
  });

  it('sets custom class name', () => {
    const component = render(<Column className="my-column"/>);
    expect(component).to.have.className('my-column');
    expect(component).to.not.have.className('columns');
  });

  it('sets small', () => {
    const component = render(<Column small={12}/>);
    expect(component).to.have.className('small-12');
    expect(component).to.not.have.attr('small');
  });

  it('sets medium', () => {
    const component = render(<Column medium={6}/>);
    expect(component).to.have.className('medium-6');
    expect(component).to.not.have.attr('medium');
  });

  it('sets large', () => {
    const component = render(<Column large={4}/>);
    expect(component).to.have.className('large-4');
    expect(component).to.not.have.attr('large');
  });

  it('sets offset', () => {
    const component = render(<Column offset={{ small: 1, medium: 2, large: 3 }}/>);
    expect(component).to.have.className('small-offset-1');
    expect(component).to.have.className('medium-offset-2');
    expect(component).to.have.className('large-offset-3');
    expect(component).to.not.have.attr('offset');
  });

  it('sets push', () => {
    const component = render(<Column push={{ small: 1, medium: 2, large: 3 }}/>);
    expect(component).to.have.className('small-push-1');
    expect(component).to.have.className('medium-push-2');
    expect(component).to.have.className('large-push-3');
    expect(component).to.not.have.attr('push');
  });

  it('sets pull', () => {
    const component = render(<Column pull={{ small: 1, medium: 2, large: 3 }}/>);
    expect(component).to.have.className('small-pull-1');
    expect(component).to.have.className('medium-pull-2');
    expect(component).to.have.className('large-pull-3');
    expect(component).to.not.have.attr('pull');
  });

  it('sets up', () => {
    const component = render(<Column up={{ small: 1, medium: 2, large: 3 }}/>);
    expect(component).to.have.className('small-up-1');
    expect(component).to.have.className('medium-up-2');
    expect(component).to.have.className('large-up-3');
    expect(component).to.not.have.className('up');
  });

  it('sets order', () => {
    const component = render(<Column order={{ small: 1, medium: 2, large: 3 }}/>);
    expect(component).to.have.className('small-order-1');
    expect(component).to.have.className('medium-order-2');
    expect(component).to.have.className('large-order-3');
    expect(component).to.not.have.className('order');
  });

  it('sets collapse on small', () => {
    const component = render(<Column collapseOnSmall/>);
    expect(component).to.have.className('collapse-small');
    expect(component).to.not.have.attr('collapseOnSmall');
  });

  it('sets collapse on medium', () => {
    const component = render(<Column collapseOnMedium/>);
    expect(component).to.have.className('collapse-medium');
    expect(component).to.not.have.attr('collapseOnMedium');
  });

  it('sets collapse on large', () => {
    const component = render(<Column collapseOnLarge/>);
    expect(component).to.have.className('collapse-large');
    expect(component).to.not.have.attr('collapseOnLarge');
  });

  it('sets uncollapse on small', () => {
    const component = render(<Column uncollapseOnSmall/>);
    expect(component).to.have.className('uncollapse-small');
    expect(component).to.not.have.attr('uncollapseOnSmall');
  });

  it('sets uncollapse on medium', () => {
    const component = render(<Column uncollapseOnMedium/>);
    expect(component).to.have.className('uncollapse-medium');
    expect(component).to.not.have.attr('uncollapseOnMedium');
  });

  it('sets uncollapse on large', () => {
    const component = render(<Column uncollapseOnLarge/>);
    expect(component).to.have.className('uncollapse-large');
    expect(component).to.not.have.attr('uncollapseOnLarge');
  });

  it('sets center on small', () => {
    const component = render(<Column centerOnSmall/>);
    expect(component).to.have.className('small-centered');
    expect(component).to.not.have.attr('centerOnSmall');
  });

  it('sets center on medium', () => {
    const component = render(<Column centerOnMedium/>);
    expect(component).to.have.className('medium-centered');
    expect(component).to.not.have.attr('centerOnMedium');
  });

  it('sets center on large', () => {
    const component = render(<Column centerOnLarge/>);
    expect(component).to.have.className('large-centered');
    expect(component).to.not.have.attr('centerOnLarge');
  });

  it('sets uncenter on small', () => {
    const component = render(<Column uncenterOnSmall/>);
    expect(component).to.have.className('small-uncentered');
    expect(component).to.not.have.attr('uncenterOnSmall');
  });

  it('sets uncenter on medium', () => {
    const component = render(<Column uncenterOnMedium/>);
    expect(component).to.have.className('medium-uncentered');
    expect(component).to.not.have.attr('uncenterOnMedium');
  });

  it('sets uncenter on large', () => {
    const component = render(<Column uncenterOnLarge/>);
    expect(component).to.have.className('large-uncentered');
    expect(component).to.not.have.attr('uncenterOnLarge');
  });

  it('sets expand on small', () => {
    const component = render(<Column expandOnSmall/>);
    expect(component).to.have.className('small-expand');
    expect(component).to.not.have.attr('expandOnSmall');
  });

  it('sets expand on medium', () => {
    const component = render(<Column expandOnMedium/>);
    expect(component).to.have.className('medium-expand');
    expect(component).to.not.have.attr('expandOnMedium');
  });

  it('sets expand on large', () => {
    const component = render(<Column expandOnLarge/>);
    expect(component).to.have.className('large-expand');
    expect(component).to.not.have.attr('expandOnLarge');
  });

  it('sets shrink', () => {
    const component = render(<Column shrink/>);
    expect(component).to.have.className('shrink');
    expect(component).to.not.have.attr('shrink');
  });

  it('sets last', () => {
    const component = render(<Column isLast/>);
    expect(component).to.have.className('end');
    expect(component).to.not.have.attr('isLast');
  });

});