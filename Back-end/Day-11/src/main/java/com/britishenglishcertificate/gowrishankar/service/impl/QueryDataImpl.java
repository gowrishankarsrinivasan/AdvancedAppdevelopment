package com.britishenglishcertificate.gowrishankar.service.impl;

import org.springframework.stereotype.Service;

import com.britishenglishcertificate.gowrishankar.dto.request.QueryDataRequest;
import com.britishenglishcertificate.gowrishankar.dto.response.QueryDataResponse;
import com.britishenglishcertificate.gowrishankar.model.QueryData;
import com.britishenglishcertificate.gowrishankar.repository.QueryDataRepo;
import com.britishenglishcertificate.gowrishankar.service.QueryDataService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QueryDataImpl implements QueryDataService {

    private final QueryDataRepo repo;

    @Override
    public QueryDataResponse saveQuery(QueryDataRequest request) {
        // return repo.save(data);
        var query = QueryData.builder()
                .course_name(request.getCourse_name())
                .email(request.getEmail())
                .enquiry_type(request.getEnquiry_type())
                .message(request.getMessage()).build();
        repo.save(query);

        return QueryDataResponse.builder().message("saved").build();
    }

}
