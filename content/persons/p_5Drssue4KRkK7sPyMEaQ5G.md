---
schema: wang-person/v1
id: p_5Drssue4KRkK7sPyMEaQ5G
status: active
merged_into: null
display_name: 王晏皋
cbdb_id: 184942
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3NTgV6cpGpgBjVFJHFR275
        subject_person_id: p_5Drssue4KRkK7sPyMEaQ5G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏皋（卒于854年），唐人物。CBDB 记录其曾任左威衛。中国历代人物传记资料库（CBDB）以人物编号 184942 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vZhv9TPUpdKA4aT5Stiwxj
          claim_id: c_3NTgV6cpGpgBjVFJHFR275
          source_id: s_PxZ6xSiD3QFbbKsp31BkGr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_PxZ6xSiD3QFbbKsp31BkGr
            source_type: api_record
            title: 维基数据：王晏皋（Q45603470）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603470
            external_identifier: Q45603470
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
        - id: cs_w6HALrt9sHauTmdXg6cS_f
          claim_id: c_3NTgV6cpGpgBjVFJHFR275
          source_id: s_4ffXZKo2rsDFCKcVzmJdjv
          stance: supports
          locator: CBDB:184942
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4ffXZKo2rsDFCKcVzmJdjv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏臯（184942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184942&o=json
            external_identifier: CBDB:184942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:40.713Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GNsBJ6ycsfRRfqHBwXehEM
        subject_person_id: p_5Drssue4KRkK7sPyMEaQ5G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 854年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0854-01-01
            latest: 0854-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fPFmp6QxpDfCS3o6AvKYve
          claim_id: c_GNsBJ6ycsfRRfqHBwXehEM
          source_id: s_PxZ6xSiD3QFbbKsp31BkGr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PxZ6xSiD3QFbbKsp31BkGr
            source_type: api_record
            title: 维基数据：王晏皋（Q45603470）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603470
            external_identifier: Q45603470
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DA3k775is6wM3jiJmm6peD
        subject_person_id: p_5Drssue4KRkK7sPyMEaQ5G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏皋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8MR1ek9LfzdAHKT6up6k6a
          claim_id: c_DA3k775is6wM3jiJmm6peD
          source_id: s_4ffXZKo2rsDFCKcVzmJdjv
          stance: supports
          locator: Q45603470
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_b7RMjKsaLe28ia674yjTHo
          claim_id: c_DA3k775is6wM3jiJmm6peD
          source_id: s_PxZ6xSiD3QFbbKsp31BkGr
          stance: supports
          locator: Q45603470
          quotation: null
          interpretation_note: null
          source:
            id: s_PxZ6xSiD3QFbbKsp31BkGr
            source_type: api_record
            title: 维基数据：王晏皋（Q45603470）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603470
            external_identifier: Q45603470
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wJe1Ms67ndSnbsHv3bJwT8
        subject_person_id: p_6BymFd7sw6j7GAmg7erqPj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Drssue4KRkK7sPyMEaQ5G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5LLkBE7LUQ5q8wSLNsqCSE
          claim_id: c_wJe1Ms67ndSnbsHv3bJwT8
          source_id: s_YtiuJ4x6oyDJbCvjY9nQK7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YtiuJ4x6oyDJbCvjY9nQK7
            source_type: api_record
            title: 维基数据：王智兴（Q7967776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967776
            external_identifier: Q7967776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.494Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA%E8%88%88
        - id: cs_p21rmv4TCgCVQoGqS2oA5B
          claim_id: c_wJe1Ms67ndSnbsHv3bJwT8
          source_id: s_PxZ6xSiD3QFbbKsp31BkGr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_6BymFd7sw6j7GAmg7erqPj
        status: active
        display_name: 王智兴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晏皋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晏皋（卒于854年），唐人物。CBDB 记录其曾任左威衛。中国历代人物传记资料库（CBDB）以人物编号 184942 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 854年 | accepted |
| name.primary | 王晏皋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6BymFd7sw6j7GAmg7erqPj | 王智兴 | accepted |

## 外部来源

- [维基数据：王晏皋（Q45603470）](https://www.wikidata.org/wiki/Q45603470)
- [维基数据：王智兴（Q7967776）](https://www.wikidata.org/wiki/Q7967776)
- [CBDB 中国历代人物传记资料库：王晏臯（184942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184942&o=json)
