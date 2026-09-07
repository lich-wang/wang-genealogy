---
schema: wang-person/v1
id: p_dbMVR14eSfvq4n2oNDbSMq
status: active
merged_into: null
display_name: 王彪之
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tftS7PKWTkBH5CkV2TUqF1
        subject_person_id: p_dbMVR14eSfvq4n2oNDbSMq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彪之（305年—377年），字叔虎，小字虎犢，琅邪臨沂人，東晉重要官員，官至尚書令，曾與謝安等人共同掌政。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nzykDWP95GgtdP6tGeptch
          claim_id: c_tftS7PKWTkBH5CkV2TUqF1
          source_id: s_pKW5MGpdJnroNuDgtk43z1
          stance: supports
          locator: 导言
          quotation: 東晉重要官員，官至尚書令
          interpretation_note: 据人物条目导言概括生卒、籍贯与身份。
          source:
            id: s_pKW5MGpdJnroNuDgtk43z1
            source_type: website
            title: 中文维基百科：王彪之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AA%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T13:35:26.936Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pxU3Wj1JA4TDkYzMXNF6cK
        subject_person_id: p_dbMVR14eSfvq4n2oNDbSMq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 305年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0305-01-01
            latest: 0305-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DQ3rJCjtFrdfdE4GSqaj7X
          claim_id: c_pxU3Wj1JA4TDkYzMXNF6cK
          source_id: s_VaQN1gL5BjbuH7CyA7r2TJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_VaQN1gL5BjbuH7CyA7r2TJ
            source_type: api_record
            title: 维基数据：王彪之（Q15904931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904931
            external_identifier: Q15904931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:49.009Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AA%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NUQSPyJG2PtVuWLvAJrzZC
        subject_person_id: p_dbMVR14eSfvq4n2oNDbSMq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彪之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CTfW9vsekyre5rfXw3LNV1
          claim_id: c_NUQSPyJG2PtVuWLvAJrzZC
          source_id: s_VaQN1gL5BjbuH7CyA7r2TJ
          stance: supports
          locator: Q15904931
          quotation: null
          interpretation_note: null
          source:
            id: s_VaQN1gL5BjbuH7CyA7r2TJ
            source_type: api_record
            title: 维基数据：王彪之（Q15904931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904931
            external_identifier: Q15904931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:49.009Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AA%E4%B9%8B
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uMGtLqyJqw2JF6DZfB7Pcz
        subject_person_id: p_R5y82s3r8Ph6RksxdRRR99
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dbMVR14eSfvq4n2oNDbSMq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uLqHbWdcRJAvKy4JCCF9ZU
          claim_id: c_uMGtLqyJqw2JF6DZfB7Pcz
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
        - id: cs_qMF1pnvvNY7YDz4GoQbpvY
          claim_id: c_uMGtLqyJqw2JF6DZfB7Pcz
          source_id: s_VaQN1gL5BjbuH7CyA7r2TJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VaQN1gL5BjbuH7CyA7r2TJ
            source_type: api_record
            title: 维基数据：王彪之（Q15904931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904931
            external_identifier: Q15904931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:49.009Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AA%E4%B9%8B
        - id: cs_7b6zaV6EKZhnQwkdnzu5BK
          claim_id: c_uMGtLqyJqw2JF6DZfB7Pcz
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王彪之（305年-377年），王彬第三子，字叔虎，小字虎犊，知名，东晋尚书令。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_YM1QRUffUKMUGXrGPsaVCx
          claim_id: c_uMGtLqyJqw2JF6DZfB7Pcz
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（二子）
          quotation: 二子：彭之、彪之
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_R5y82s3r8Ph6RksxdRRR99
        status: active
        display_name: 王彬
        merged_into_person_id: null
  children:
    - claim:
        id: c_rk4kjJGBX8SFNMyJT4wK6k
        subject_person_id: p_dbMVR14eSfvq4n2oNDbSMq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_drs7REjpfL8z6ucNkRh6YL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9NENxX94QHRxGy955pXW5R
          claim_id: c_rk4kjJGBX8SFNMyJT4wK6k
          source_id: s_VaQN1gL5BjbuH7CyA7r2TJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VaQN1gL5BjbuH7CyA7r2TJ
            source_type: api_record
            title: 维基数据：王彪之（Q15904931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904931
            external_identifier: Q15904931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:49.009Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AA%E4%B9%8B
        - id: cs_wwr1iYjgGS86dx4q9TVMTj
          claim_id: c_rk4kjJGBX8SFNMyJT4wK6k
          source_id: s_CF7UNiwhigb3vKhDREmAi8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CF7UNiwhigb3vKhDREmAi8
            source_type: api_record
            title: 维基数据：王临之（Q22814804）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814804
            external_identifier: Q22814804
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
        - id: cs_JvAv5T2qwd6yVtzqtcW7gs
          claim_id: c_rk4kjJGBX8SFNMyJT4wK6k
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（二子）
          quotation: 二子：越之、臨之
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_drs7REjpfL8z6ucNkRh6YL
        status: active
        display_name: 王临之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彪之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彪之（305年—377年），字叔虎，小字虎犢，琅邪臨沂人，東晉重要官員，官至尚書令，曾與謝安等人共同掌政。 | accepted |
| birth.date | 305年 | accepted |
| name.primary | 王彪之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R5y82s3r8Ph6RksxdRRR99 | 王彬 | accepted |
| children | p_drs7REjpfL8z6ucNkRh6YL | 王临之 | accepted |

## 外部来源

- [维基数据：王彪之（Q15904931）](https://www.wikidata.org/wiki/Q15904931)
- [维基数据：王彬（Q15909509）](https://www.wikidata.org/wiki/Q15909509)
- [维基数据：王临之（Q22814804）](https://www.wikidata.org/wiki/Q22814804)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：王彪之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AA%E4%B9%8B)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
