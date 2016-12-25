describe('Protractor Demo App', function() {
  it('should have a title', function() {
// Angular app이 아닌 경우 이걸 넣어주야 한다.
	browser.ignoreSynchronization = true;

    browser.get('http://localhost:3000');
    var list = element.all(by.xpath("//h1"));
    expect(list.first().getText()).toEqual('Hello world!');
  });
});
