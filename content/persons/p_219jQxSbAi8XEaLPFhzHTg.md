---
schema: wang-person/v1
id: p_219jQxSbAi8XEaLPFhzHTg
status: active
merged_into: null
display_name: 王信
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yp9WY6u3R24Z2axrgo5eoL
        subject_person_id: p_219jQxSbAi8XEaLPFhzHTg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9QNmSkxMSoxCWvfpzEimh1
          claim_id: c_yp9WY6u3R24Z2axrgo5eoL
          source_id: s_tzQ5bPUqEZShE4ZB7CELGM
          stance: supports
          locator: CBDB:249817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249817）
          source: &a1
            id: s_tzQ5bPUqEZShE4ZB7CELGM
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 249817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249817&o=json
            external_identifier: CBDB:249817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rg31nsLiGcDR5sgzr33JPh
        subject_person_id: p_219jQxSbAi8XEaLPFhzHTg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。成化十一年進士，籍贯汲縣，曾任通判。（中国历代人物传记资料库 CBDB 249817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LqUwMZXcgDCFP5juuebrPa
          claim_id: c_Rg31nsLiGcDR5sgzr33JPh
          source_id: s_tzQ5bPUqEZShE4ZB7CELGM
          stance: supports
          locator: CBDB:249817
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1bfwQ2wiGJ2_flac6-rFvq
        subject_person_id: p_219jQxSbAi8XEaLPFhzHTg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3QDnXJ1yrE5aSbLLXiVLND
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTx8ZTGV2HuyBYZUC_jU_h
          claim_id: c_1bfwQ2wiGJ2_flac6-rFvq
          source_id: s_tzQ5bPUqEZShE4ZB7CELGM
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百一十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3QDnXJ1yrE5aSbLLXiVLND
        status: active
        display_name: 王嵩
        merged_into_person_id: null
    - claim:
        id: c_eYpqk6QJ2WXrCJAp7PX4TS
        subject_person_id: p_219jQxSbAi8XEaLPFhzHTg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B2inFXzoQGSyJ7aKhbAuCA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I5l7UFofwpMT4asl0ZpwSy
          claim_id: c_eYpqk6QJ2WXrCJAp7PX4TS
          source_id: s_DTRyTsREOObH7vRtvqCydX
          stance: supports
          locator: CBDB：兄弟 王嵩（126762）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王福 与 王嵩 为同胞（CBDB 记「弟」），王嵩 之父／母即 王福 之父／母。
          source:
            id: s_DTRyTsREOObH7vRtvqCydX
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 249823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249823&o=json
            external_identifier: CBDB:249823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B2inFXzoQGSyJ7aKhbAuCA
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_H-IqrU4U9stokdMknsxH6c
        subject_person_id: p_219jQxSbAi8XEaLPFhzHTg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZLbtvRZbm7sAMbjurg6W9G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJo14-AlDTcepJ1njvkWNi
          claim_id: c_H-IqrU4U9stokdMknsxH6c
          source_id: s_D9K-ePPQ9et846E2TYQHRr
          stance: supports
          locator: CBDB：兄弟 王嵩（126762）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰 与 王嵩 为同胞（CBDB 记「弟」），王嵩 之父／母即 王泰 之父／母。
          source:
            id: s_D9K-ePPQ9et846E2TYQHRr
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 249822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249822&o=json
            external_identifier: CBDB:249822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZLbtvRZbm7sAMbjurg6W9G
        status: active
        display_name: 王泰
        merged_into_person_id: null
    - claim:
        id: c_we1VcwfV2KACLUKrAIKpnb
        subject_person_id: p_219jQxSbAi8XEaLPFhzHTg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mzBo2x37huH7NUFrM2LB8v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O3poONKsWn8vpBG5JMyIB3
          claim_id: c_we1VcwfV2KACLUKrAIKpnb
          source_id: s_x4AXeL5H1T9QcTQs60s1Rb
          stance: supports
          locator: CBDB：兄弟 王嵩（126762）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王安 与 王嵩 为同胞（CBDB 记「弟」），王嵩 之父／母即 王安 之父／母。
          source:
            id: s_x4AXeL5H1T9QcTQs60s1Rb
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 249821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249821&o=json
            external_identifier: CBDB:249821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mzBo2x37huH7NUFrM2LB8v
        status: active
        display_name: 王安
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。成化十一年進士，籍贯汲縣，曾任通判。（中国历代人物传记资料库 CBDB 249817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3QDnXJ1yrE5aSbLLXiVLND | 王嵩 | accepted |
| children | p_B2inFXzoQGSyJ7aKhbAuCA | 王福 | accepted |
| children | p_ZLbtvRZbm7sAMbjurg6W9G | 王泰 | accepted |
| children | p_mzBo2x37huH7NUFrM2LB8v | 王安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 249821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249821&o=json)
- [中国历代人物传记资料库：王福（CBDB 249823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249823&o=json)
- [中国历代人物传记资料库：王泰（CBDB 249822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249822&o=json)
- [中国历代人物传记资料库：王信（CBDB 249817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249817&o=json)
