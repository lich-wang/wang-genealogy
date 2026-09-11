---
schema: wang-person/v1
id: p_UHQ83RNHQcEz6ALsbjLwK3
status: active
merged_into: null
display_name: 王甫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lp3xFKQHqUe4BBhkBqKt1r
        subject_person_id: p_UHQ83RNHQcEz6ALsbjLwK3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6dFEtP8ozUgjmGkBAsFB4b
          claim_id: c_Lp3xFKQHqUe4BBhkBqKt1r
          source_id: s_2bxjWFGcq5nZYvUm5oz3zb
          stance: supports
          locator: CBDB:145335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145335）
          source: &a1
            id: s_2bxjWFGcq5nZYvUm5oz3zb
            source_type: api_record
            title: 中国历代人物传记资料库：王甫（CBDB 145335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145335&o=json
            external_identifier: CBDB:145335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c2G9Y5atUjGjM7F6zah2Yg
        subject_person_id: p_UHQ83RNHQcEz6ALsbjLwK3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 751年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E3y6kKNNRvimX7rXxzMVK4
          claim_id: c_c2G9Y5atUjGjM7F6zah2Yg
          source_id: s_2bxjWFGcq5nZYvUm5oz3zb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KmE5yVFyhC2QXFcGDE8mCj
        subject_person_id: p_UHQ83RNHQcEz6ALsbjLwK3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 811年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tnq7nEPJ1hauwV3hjkEGGS
          claim_id: c_KmE5yVFyhC2QXFcGDE8mCj
          source_id: s_2bxjWFGcq5nZYvUm5oz3zb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dTw6HCADm8kD6Z28wmqj6V
        subject_person_id: p_UHQ83RNHQcEz6ALsbjLwK3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫（751年—811年），唐人物。籍贯河南，曾任縣尉。（中国历代人物传记资料库 CBDB 145335）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LUTsCau8npjaB8wUzaWBV5
          claim_id: c_dTw6HCADm8kD6Z28wmqj6V
          source_id: s_2bxjWFGcq5nZYvUm5oz3zb
          stance: supports
          locator: CBDB:145335
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c-CiajuFfUZcE2GV6JC4f4
        subject_person_id: p_k8MteqzSymg42KC6JQak6W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UHQ83RNHQcEz6ALsbjLwK3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O_RSvqHiqdsia1rpIvGMX1
          claim_id: c_c-CiajuFfUZcE2GV6JC4f4
          source_id: s_BU6G7Wp9iyMTBEBLFLxaoD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BU6G7Wp9iyMTBEBLFLxaoD
            source_type: api_record
            title: 中国历代人物传记资料库：王宙（CBDB 169232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169232&o=json
            external_identifier: CBDB:169232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_k8MteqzSymg42KC6JQak6W
        status: active
        display_name: 王宙
        merged_into_person_id: null
  children:
    - claim:
        id: c_xY_7dFcKIsJOUNjgvzCSCc
        subject_person_id: p_UHQ83RNHQcEz6ALsbjLwK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r3Dq9mpAQb1qJo3FSkUuFi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ra8kP9QYNZayE74U2p8d3W
          claim_id: c_xY_7dFcKIsJOUNjgvzCSCc
          source_id: s_fAnQR1pckGbgkLZAtVsHon
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fAnQR1pckGbgkLZAtVsHon
            source_type: api_record
            title: 中国历代人物传记资料库：王勸（CBDB 185512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185512&o=json
            external_identifier: CBDB:185512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r3Dq9mpAQb1qJo3FSkUuFi
        status: active
        display_name: 王勸
        merged_into_person_id: null
    - claim:
        id: c_AGja4nRT1rZTmzmVJTDOR5
        subject_person_id: p_UHQ83RNHQcEz6ALsbjLwK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SaixwPorE5a8xAaqdNG31K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUR6tdb_mV0xcQaaojna5V
          claim_id: c_AGja4nRT1rZTmzmVJTDOR5
          source_id: s_XejjsHh11jxSpCT2voKg3P
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XejjsHh11jxSpCT2voKg3P
            source_type: api_record
            title: 中国历代人物传记资料库：王陟（CBDB 185511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185511&o=json
            external_identifier: CBDB:185511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SaixwPorE5a8xAaqdNG31K
        status: active
        display_name: 王陟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王甫 | accepted |
| birth.date | 751年 | accepted |
| death.date | 811年 | accepted |
| bio.summary | 王甫（751年—811年），唐人物。籍贯河南，曾任縣尉。（中国历代人物传记资料库 CBDB 145335） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_k8MteqzSymg42KC6JQak6W | 王宙 | accepted |
| children | p_r3Dq9mpAQb1qJo3FSkUuFi | 王勸 | accepted |
| children | p_SaixwPorE5a8xAaqdNG31K | 王陟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王甫（CBDB 145335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145335&o=json)
- [中国历代人物传记资料库：王勸（CBDB 185512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185512&o=json)
- [中国历代人物传记资料库：王陟（CBDB 185511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185511&o=json)
- [中国历代人物传记资料库：王宙（CBDB 169232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169232&o=json)
