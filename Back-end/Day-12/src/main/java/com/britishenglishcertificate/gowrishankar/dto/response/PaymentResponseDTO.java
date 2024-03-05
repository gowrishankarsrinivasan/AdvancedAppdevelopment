package com.britishenglishcertificate.gowrishankar.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PaymentResponseDTO {
    private String id;
    private String card_holder_name;
    private String card_number;
    private String date;
    private String email_address;
    private String ccv_code;
    private String expiry_date;
}