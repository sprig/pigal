class FlickrRss
  def initialize(url)
    @url = url
  end

  def items
    content = open(@url).read
    doc = Nokogiri.parse(content)
    doc.remove_namespaces!
    output = []
    doc.xpath('//content').each do|node|
      output << { img_url: node['url'] }
    end
    output
  end

end
