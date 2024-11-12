package com.mt.mootruyen.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "chapters")
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Lob
    private String content;
    private int chapterNumber;

    @ManyToOne
    @JoinColumn(name = "story_id")
    private Story story;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
