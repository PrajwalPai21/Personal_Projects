package com.chat.application.chat_app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker //tells spring this uses web sockets for connection messaging
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/chat").setAllowedOrigins("http://localhost:8080").withSockJS();
//    This is basically to allow for communication between to different endpoints
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
//        setting the message broker
//        expect message with /app/sendmessage
        registry.enableSimpleBroker("/topic"); //message broker that can handle , so who ever is subscribed
                                                                // to /toopic only they can access
        registry.setApplicationDestinationPrefixes("/app");
//        process any messages with /app
    }
}
