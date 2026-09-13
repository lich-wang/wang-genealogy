---
schema: wang-person/v1
id: p_596s4A8i6r9PRN7rPGV3NA
status: active
merged_into: null
display_name: 王演
cbdb_id: 3992
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pc6ZLhXyb5wL7iNnJY9fcn
        subject_person_id: p_596s4A8i6r9PRN7rPGV3NA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演，宋人物。籍贯虞城。（中国历代人物传记资料库 CBDB 3992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_V19KL9ULZVLknC8SeisyJ4
          claim_id: c_pc6ZLhXyb5wL7iNnJY9fcn
          source_id: s_aKFCcrAdwRKYro8X2TNC6a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_aKFCcrAdwRKYro8X2TNC6a
            source_type: api_record
            title: 维基数据：王演（Q45363055）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363055
            external_identifier: Q45363055
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_U8IlFPOEA_EUcc0s19Ovy8
          claim_id: c_pc6ZLhXyb5wL7iNnJY9fcn
          source_id: s_VFLHX54LQR2i7SHd7okZxx
          stance: supports
          locator: CBDB:3992
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VFLHX54LQR2i7SHd7okZxx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王演（3992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3992&o=json
            external_identifier: CBDB:3992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:14.262Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_s2F7dkwjp4dLrWaq9Tcvf5
        subject_person_id: p_596s4A8i6r9PRN7rPGV3NA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GHuFBTyr5EWEBXPSYCgax7
          claim_id: c_s2F7dkwjp4dLrWaq9Tcvf5
          source_id: s_aKFCcrAdwRKYro8X2TNC6a
          stance: supports
          locator: Q45363055
          quotation: null
          interpretation_note: null
          source:
            id: s_aKFCcrAdwRKYro8X2TNC6a
            source_type: api_record
            title: 维基数据：王演（Q45363055）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363055
            external_identifier: Q45363055
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_iNYzaXBKaSbxerQaJjseWi
          claim_id: c_s2F7dkwjp4dLrWaq9Tcvf5
          source_id: s_VFLHX54LQR2i7SHd7okZxx
          stance: supports
          locator: Q45363055
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gBfHB6ZfygAvHWcA3Mn1Lf
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_596s4A8i6r9PRN7rPGV3NA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MVetjREmA8Kd9TbLH7f238
          claim_id: c_gBfHB6ZfygAvHWcA3Mn1Lf
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_cEzQFMJKfXkebXkBavgjxf
            source_type: api_record
            title: 维基数据：王砺（Q45381094）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381094
            external_identifier: Q45381094
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
        - id: cs_T2Edg7QJ2drW2PaXB8SEF1
          claim_id: c_gBfHB6ZfygAvHWcA3Mn1Lf
          source_id: s_aKFCcrAdwRKYro8X2TNC6a
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_CmR9MFHX3wUBQYZYGFekN7
          claim_id: c_gBfHB6ZfygAvHWcA3Mn1Lf
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_k4sFmeLJCYGtEaPGKsQ95C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王礪（15706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15706&o=json
            external_identifier: CBDB:15706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:00.404Z
            metadata_json: null
      object_person:
        id: p_VKst8B2d5tWwdYZpMbjXpF
        status: active
        display_name: 王砺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王演，宋人物。籍贯虞城。（中国历代人物传记资料库 CBDB 3992） | accepted |
| name.primary | 王演 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VKst8B2d5tWwdYZpMbjXpF | 王砺 | accepted |

## 外部来源

- [维基数据：王砺（Q45381094）](https://www.wikidata.org/wiki/Q45381094)
- [维基数据：王演（Q45363055）](https://www.wikidata.org/wiki/Q45363055)
- [CBDB 中国历代人物传记资料库：王礪（15706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15706&o=json)
- [CBDB 中国历代人物传记资料库：王演（3992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3992&o=json)
