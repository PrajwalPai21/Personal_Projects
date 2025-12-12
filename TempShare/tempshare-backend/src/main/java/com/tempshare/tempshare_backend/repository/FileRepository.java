package com.tempshare.tempshare_backend.repository;

import com.tempshare.tempshare_backend.model.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
//gives CRUD automatically
public interface FileRepository extends JpaRepository<FileEntity,Long> {
}
