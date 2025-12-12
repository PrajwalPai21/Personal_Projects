package com.tempshare.tempshare_backend.controller;


import com.tempshare.tempshare_backend.model.FileEntity;
import com.tempshare.tempshare_backend.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/files")
@CrossOrigin(origins = "http://localhost:5173")
public class FileController {
    private final FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) {
        try {
            FileEntity saved = fileService.uploadFile(file);
            return ResponseEntity.ok().body(saved);
            //return JSON metadata
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body("Upload Failed" + e.getMessage());
        }
    }
}
