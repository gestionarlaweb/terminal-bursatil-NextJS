package com.simplecraft.bursatil.controller;

import com.simplecraft.bursatil.model.NewsItem;
import com.simplecraft.bursatil.service.RssService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Permet la connexió amb el frontend de Next.js en desenvolupament
public class NewsController {

    private final RssService rssService;

    public NewsController(RssService rssService) {
        this.rssService = rssService;
    }

    @GetMapping("/news")
    public List<NewsItem> getNews(@RequestParam(required = false) String company) {
        if (company != null && !company.isBlank()) {
            return rssService.getNewsByCompany(company);
        }
        return rssService.getAllNews();
    }
}