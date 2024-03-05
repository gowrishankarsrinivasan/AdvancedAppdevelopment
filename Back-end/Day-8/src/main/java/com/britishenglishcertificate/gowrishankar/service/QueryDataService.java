package com.britishenglishcertificate.gowrishankar.service;

import com.britishenglishcertificate.gowrishankar.dto.request.QueryDataRequest;
import com.britishenglishcertificate.gowrishankar.dto.response.QueryDataResponse;

public interface QueryDataService {
    QueryDataResponse saveQuery(QueryDataRequest data);
}
