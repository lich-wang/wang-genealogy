---
schema: wang-person/v1
id: p_nM4qfbcaYVkmZPA3x1iCHz
status: active
merged_into: null
display_name: 王英
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f5w2r5XdrHHcCGHq5KFrEc
        subject_person_id: p_nM4qfbcaYVkmZPA3x1iCHz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dsuKDzuXmeRKnr6geMPCgD
          claim_id: c_f5w2r5XdrHHcCGHq5KFrEc
          source_id: s_1199fXDUpPEcQ5vutpJ6RW
          stance: supports
          locator: CBDB:256339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256339）
          source: &a1
            id: s_1199fXDUpPEcQ5vutpJ6RW
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 256339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256339&o=json
            external_identifier: CBDB:256339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uA5X8q3Ceh3d5Na54a3FyN
        subject_person_id: p_nM4qfbcaYVkmZPA3x1iCHz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，明人物。成化十七年進士，籍贯陽曲。（中国历代人物传记资料库 CBDB 256339）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aVPrzxxIVjiqjFDKMKw6dh
          claim_id: c_uA5X8q3Ceh3d5Na54a3FyN
          source_id: s_1199fXDUpPEcQ5vutpJ6RW
          stance: supports
          locator: CBDB:256339
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DGV8Op-hxo0rVD93NwopR5
        subject_person_id: p_nM4qfbcaYVkmZPA3x1iCHz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_umuS1ImsTlQMZk0MmCfc8P
          claim_id: c_DGV8Op-hxo0rVD93NwopR5
          source_id: s_1199fXDUpPEcQ5vutpJ6RW
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4vr7bkbajYb5aZb5N7UFqC
        status: active
        display_name: 王槐
        merged_into_person_id: null
    - claim:
        id: c_ZmOBfNKuEuoMfhYVClqEOS
        subject_person_id: p_nM4qfbcaYVkmZPA3x1iCHz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b32W2sLe2MoVvGfKAYhgfT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ABYNnSgVdCBfJC1jM3V_wc
          claim_id: c_ZmOBfNKuEuoMfhYVClqEOS
          source_id: s_CKZguHscoKVoJqd9hzq-t-
          stance: supports
          locator: CBDB：兄弟 王槐（200324）之父／母 王英
          quotation: null
          interpretation_note: 由兄弟关系推断：王懷玉 与 王槐 为同胞（CBDB 记「弟」），王槐 之父／母即 王懷玉 之父／母。
          source:
            id: s_CKZguHscoKVoJqd9hzq-t-
            source_type: api_record
            title: 中国历代人物传记资料库：王懷玉（CBDB 256344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256344&o=json
            external_identifier: CBDB:256344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b32W2sLe2MoVvGfKAYhgfT
        status: active
        display_name: 王懷玉
        merged_into_person_id: null
    - claim:
        id: c_b9U0DGTyMTMsXQFIuUsFhK
        subject_person_id: p_nM4qfbcaYVkmZPA3x1iCHz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eb1X6Pc72zAV4ipT7go8w4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5pgwFvh71xxd7O7I3mHaiR
          claim_id: c_b9U0DGTyMTMsXQFIuUsFhK
          source_id: s_SXrXspL_42x-Q-YzHYAH7m
          stance: supports
          locator: CBDB：兄弟 王槐（200324）之父／母 王英
          quotation: null
          interpretation_note: 由兄弟关系推断：王懷珍 与 王槐 为同胞（CBDB 记「弟」），王槐 之父／母即 王懷珍 之父／母。
          source:
            id: s_SXrXspL_42x-Q-YzHYAH7m
            source_type: api_record
            title: 中国历代人物传记资料库：王懷珍（CBDB 256343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json
            external_identifier: CBDB:256343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eb1X6Pc72zAV4ipT7go8w4
        status: active
        display_name: 王懷珍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，明人物。成化十七年進士，籍贯陽曲。（中国历代人物传记资料库 CBDB 256339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4vr7bkbajYb5aZb5N7UFqC | 王槐 | accepted |
| children | p_b32W2sLe2MoVvGfKAYhgfT | 王懷玉 | accepted |
| children | p_eb1X6Pc72zAV4ipT7go8w4 | 王懷珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷玉（CBDB 256344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256344&o=json)
- [中国历代人物传记资料库：王懷珍（CBDB 256343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json)
- [中国历代人物传记资料库：王英（CBDB 256339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256339&o=json)
