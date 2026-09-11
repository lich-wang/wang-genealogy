---
schema: wang-person/v1
id: p_jhEZERf87Yu1gr8MbYEspe
status: active
merged_into: null
display_name: 吴氏
cbdb_id: 247603
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MehFmmm65R_R1sUIq5trtP
        subject_person_id: p_jhEZERf87Yu1gr8MbYEspe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏，王鏊妻。维基数据以独立条目 Q65851495 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rHLPgeu1fh2IQ5990NbI5p
          claim_id: c_MehFmmm65R_R1sUIq5trtP
          source_id: s_Wb5X9mFnMq7YQtBQz8EwNi
          stance: supports
          locator: Q65851495
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_Wb5X9mFnMq7YQtBQz8EwNi
            source_type: api_record
            title: 维基数据：吴氏（Q65851495）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65851495
            external_identifier: Q65851495
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:37.417Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HiJeHBBYqMK8624ES9fcHR
        subject_person_id: p_jhEZERf87Yu1gr8MbYEspe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Bb6h5EwNCQ82dgWkF6EWeg
          claim_id: c_HiJeHBBYqMK8624ES9fcHR
          source_id: s_Wb5X9mFnMq7YQtBQz8EwNi
          stance: supports
          locator: Q65851495
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_yzVAQ4qgMDEiV3jcVWWzwG
          claim_id: c_HiJeHBBYqMK8624ES9fcHR
          source_id: s_8LJ3igvN9bwCZ6MhQ5dYnS
          stance: supports
          locator: Q65851495
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_8LJ3igvN9bwCZ6MhQ5dYnS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（247603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247603&o=json
            external_identifier: CBDB:247603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:37.600Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_n7HsELAQP9zpARSuKXQDRJ
        subject_person_id: p_Wp6B6oFJWureDLbUWC4XTo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jhEZERf87Yu1gr8MbYEspe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dBuWc1ssFcWpMraYBBxrGn
          claim_id: c_n7HsELAQP9zpARSuKXQDRJ
          source_id: s_5F5Mp5wNXSLuYE7mo8tsT9
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化十一年進士登科錄:一卷
          source:
            id: s_5F5Mp5wNXSLuYE7mo8tsT9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鏊（34579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json
            external_identifier: CBDB:34579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:08.975Z
            metadata_json: null
        - id: cs_gkSQBxzfz3SYXKNPvX6rWM
          claim_id: c_n7HsELAQP9zpARSuKXQDRJ
          source_id: s_dWRCcR6daat23BeqA6jHUm
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_dWRCcR6daat23BeqA6jHUm
            source_type: api_record
            title: 维基数据：王鏊（Q15904946）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904946
            external_identifier: Q15904946
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:35.973Z
            metadata_json: null
        - id: cs_n9PT5X7ZUjAGc4qSqK69RX
          claim_id: c_n7HsELAQP9zpARSuKXQDRJ
          source_id: s_Wb5X9mFnMq7YQtBQz8EwNi
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Wb5X9mFnMq7YQtBQz8EwNi
            source_type: api_record
            title: 维基数据：吴氏（Q65851495）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65851495
            external_identifier: Q65851495
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:37.417Z
            metadata_json: null
      object_person:
        id: p_Wp6B6oFJWureDLbUWC4XTo
        status: active
        display_name: 王鏊
        merged_into_person_id: null
    - claim:
        id: c_DJPatZ_RgjSidiWQrrAIhn
        subject_person_id: p_jhEZERf87Yu1gr8MbYEspe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_D4z9mWRZWdetNdzRfwASCL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0fvUk7QURF3TuHy85XKeYG
          claim_id: c_DJPatZ_RgjSidiWQrrAIhn
          source_id: s_8LJ3igvN9bwCZ6MhQ5dYnS
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第一甲第三名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_D4z9mWRZWdetNdzRfwASCL
        status: active
        display_name: 王鏊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吴氏，王鏊妻。维基数据以独立条目 Q65851495 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 吴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Wp6B6oFJWureDLbUWC4XTo | 王鏊 | accepted |
| spouses | p_D4z9mWRZWdetNdzRfwASCL | 王鏊 | accepted |

## 外部来源

- [维基数据：王鏊（Q15904946）](https://www.wikidata.org/wiki/Q15904946)
- [维基数据：吴氏（Q65851495）](https://www.wikidata.org/wiki/Q65851495)
- [CBDB 中国历代人物传记资料库：王鏊（34579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json)
- [CBDB 中国历代人物传记资料库：吳氏（247603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247603&o=json)
