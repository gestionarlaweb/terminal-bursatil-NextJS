package com.simplecraft.bursatil.service;

import com.simplecraft.bursatil.model.NewsItem;
import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class RssService {

    private static final String NVIDIA_RSS = "https://news.google.com/rss/search?q=NVIDIA&hl=es&gl=ES&ceid=ES:es";
    private static final String AMD_RSS = "https://news.google.com/rss/search?q=AMD&hl=es&gl=ES&ceid=ES:es";

    public List<NewsItem> getAllNews() {
        List<NewsItem> allNews = new ArrayList<>();
        allNews.addAll(fetchFeed(NVIDIA_RSS, "NVIDIA"));
        allNews.addAll(fetchFeed(AMD_RSS, "AMD"));

        // Opcional: ordenar per data més recent si està disponible
        return allNews;
    }

    public List<NewsItem> getNewsByCompany(String company) {
        if ("NVIDIA".equalsIgnoreCase(company)) {
            return fetchFeed(NVIDIA_RSS, "NVIDIA");
        } else if ("AMD".equalsIgnoreCase(company)) {
            return fetchFeed(AMD_RSS, "AMD");
        }
        return Collections.emptyList();
    }

    private List<NewsItem> fetchFeed(String rssUrl, String company) {
        List<NewsItem> items = new ArrayList<>();
        try {
            URI uri = URI.create(rssUrl);
            SyndFeedInput input = new SyndFeedInput();
            SyndFeed feed = input.build(new XmlReader(uri.toURL()));

            for (SyndEntry entry : feed.getEntries()) {
                String title = entry.getTitle();
                String url = entry.getLink();
                String source = entry.getSource() != null ? entry.getSource().getTitle() : "Google News";

                String publishedAt = "";
                if (entry.getPublishedDate() != null) {
                    publishedAt = entry.getPublishedDate()
                            .toInstant()
                            .atZone(ZoneId.systemDefault())
                            .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
                }

                String description = entry.getDescription() != null ? entry.getDescription().getValue() : "";

                items.add(new NewsItem(title, description, url, publishedAt, company, source));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return items;
    }
}
