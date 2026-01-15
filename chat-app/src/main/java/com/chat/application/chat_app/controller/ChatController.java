package com.chat.application.chat_app.controller;

import com.chat.application.chat_app.model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ChatController {
//    /app/sendMessage
    @MessageMapping("/sendMessage") //endpoint
    @SendTo("/topic/messages")  //Chat Room , return message is sent to this chat room
//    model
    public ChatMessage sendMessage(ChatMessage message){
        return message;
    }

//    Thymeleaf
    @GetMapping("chat")
    public String chat(){
        return "chat"; //This is Thymeleaf template, templates/chat.html
    }
}
