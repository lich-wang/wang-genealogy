---
schema: wang-person/v1
id: p_qsqNNxC6SQb2oA7yPxzojc
status: active
merged_into: null
display_name: 王相
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_coeUuE1L13ZRNz4E79jBpe
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SNLzfJ3KK8VQCWLk7ruQjw
          claim_id: c_coeUuE1L13ZRNz4E79jBpe
          source_id: s_GYs3JvJ7e3R4XSB5TUuNUD
          stance: supports
          locator: CBDB:311389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311389）
          source: &a1
            id: s_GYs3JvJ7e3R4XSB5TUuNUD
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 311389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311389&o=json
            external_identifier: CBDB:311389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bsUGFg25nPRHW2voqYbS3D
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。嘉靖二十六年進士，籍贯洪洞，曾任知縣、戶部分司。（中国历代人物传记资料库 CBDB 311389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3ljzYmvQKPr_-VzZIHsab5
          claim_id: c_bsUGFg25nPRHW2voqYbS3D
          source_id: s_GYs3JvJ7e3R4XSB5TUuNUD
          stance: supports
          locator: CBDB:311389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_H5DHtcKk4sjfxvrDq0QfUq
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsGwaKQVPhoBZJfFDmuuvw
          claim_id: c_H5DHtcKk4sjfxvrDq0QfUq
          source_id: s_GYs3JvJ7e3R4XSB5TUuNUD
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百八十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vc9c3mkQxRy6aUfxzv3hqq
        status: active
        display_name: 王三接
        merged_into_person_id: null
    - claim:
        id: c_zJ8wpTxeTXEwBUDGHsjSGG
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4qbcftqg5nJTBRCpr65zcA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KxNbWBHFqGyPA5vxmxe4aQ
          claim_id: c_zJ8wpTxeTXEwBUDGHsjSGG
          source_id: s_bcdt-OeaRGRhJsvrPh41W_
          stance: supports
          locator: CBDB：兄弟 王三接（203882）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王三德 与 王三接 为同胞（CBDB 记「弟」），王三接 之父／母即 王三德 之父／母。
          source:
            id: s_bcdt-OeaRGRhJsvrPh41W_
            source_type: api_record
            title: 中国历代人物传记资料库：王三德（CBDB 311394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311394&o=json
            external_identifier: CBDB:311394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4qbcftqg5nJTBRCpr65zcA
        status: active
        display_name: 王三德
        merged_into_person_id: null
    - claim:
        id: c_NKa9DLZDke5Bg8eN6RD-a2
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9XbcKSHkWoiKfdXHS1vmSN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YmRi0yKqkqEalscPxN7g6P
          claim_id: c_NKa9DLZDke5Bg8eN6RD-a2
          source_id: s_6PKUY1yvb-Uz6UxxZIm629
          stance: supports
          locator: CBDB：兄弟 王三接（203882）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王三槐 与 王三接 为同胞（CBDB 记「弟」），王三接 之父／母即 王三槐 之父／母。
          source:
            id: s_6PKUY1yvb-Uz6UxxZIm629
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 311396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311396&o=json
            external_identifier: CBDB:311396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9XbcKSHkWoiKfdXHS1vmSN
        status: active
        display_name: 王三槐
        merged_into_person_id: null
    - claim:
        id: c_Tw1S5PjuHY4gTryyrOqhYo
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LBNLcSyeGkhZ18tJMVzLgu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rx3Ym54yD4tWWCq5rDVxDf
          claim_id: c_Tw1S5PjuHY4gTryyrOqhYo
          source_id: s_kIMEbeLl110Jel8D7_h72o
          stance: supports
          locator: CBDB：兄弟 王三接（203882）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王三省 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三省 之父／母。
          source:
            id: s_kIMEbeLl110Jel8D7_h72o
            source_type: api_record
            title: 中国历代人物传记资料库：王三省（CBDB 311398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311398&o=json
            external_identifier: CBDB:311398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LBNLcSyeGkhZ18tJMVzLgu
        status: active
        display_name: 王三省
        merged_into_person_id: null
    - claim:
        id: c_OG-9E-BEG3hB36yxV-8Mau
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N2mo9RCkWRu3nTPvjhL9zT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QMjZMe-CdbTh9f-r02dL2r
          claim_id: c_OG-9E-BEG3hB36yxV-8Mau
          source_id: s_C_3FfwDpe9oi2cWFc5Amjq
          stance: supports
          locator: CBDB：兄弟 王三接（203882）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王三聘 与 王三接 为同胞（CBDB 记「弟」），王三接 之父／母即 王三聘 之父／母。
          source:
            id: s_C_3FfwDpe9oi2cWFc5Amjq
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 311397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311397&o=json
            external_identifier: CBDB:311397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N2mo9RCkWRu3nTPvjhL9zT
        status: active
        display_name: 王三聘
        merged_into_person_id: null
    - claim:
        id: c_kr9H50SIjAM5_orhd6f_Bj
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w6zLo9trTY22THztLK6BRA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_apEjrtx4PpJAns1PTdNctq
          claim_id: c_kr9H50SIjAM5_orhd6f_Bj
          source_id: s_E1L92XiDYNZsGPCY7y2Gsm
          stance: supports
          locator: CBDB：兄弟 王三接（203882）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王三益 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三益 之父／母。
          source:
            id: s_E1L92XiDYNZsGPCY7y2Gsm
            source_type: api_record
            title: 中国历代人物传记资料库：王三益（CBDB 311399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311399&o=json
            external_identifier: CBDB:311399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w6zLo9trTY22THztLK6BRA
        status: active
        display_name: 王三益
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。嘉靖二十六年進士，籍贯洪洞，曾任知縣、戶部分司。（中国历代人物传记资料库 CBDB 311389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vc9c3mkQxRy6aUfxzv3hqq | 王三接 | accepted |
| children | p_4qbcftqg5nJTBRCpr65zcA | 王三德 | accepted |
| children | p_9XbcKSHkWoiKfdXHS1vmSN | 王三槐 | accepted |
| children | p_LBNLcSyeGkhZ18tJMVzLgu | 王三省 | accepted |
| children | p_N2mo9RCkWRu3nTPvjhL9zT | 王三聘 | accepted |
| children | p_w6zLo9trTY22THztLK6BRA | 王三益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三德（CBDB 311394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311394&o=json)
- [中国历代人物传记资料库：王三槐（CBDB 311396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311396&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 311397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311397&o=json)
- [中国历代人物传记资料库：王三省（CBDB 311398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311398&o=json)
- [中国历代人物传记资料库：王三益（CBDB 311399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311399&o=json)
- [中国历代人物传记资料库：王相（CBDB 311389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311389&o=json)
