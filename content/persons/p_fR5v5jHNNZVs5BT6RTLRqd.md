---
schema: wang-person/v1
id: p_fR5v5jHNNZVs5BT6RTLRqd
status: active
merged_into: null
display_name: 王宴
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cYWM9hGABdC8VgSeK3Z1uD
        subject_person_id: p_fR5v5jHNNZVs5BT6RTLRqd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d8DoC5uxxiQq8RLW9TtPnJ
          claim_id: c_cYWM9hGABdC8VgSeK3Z1uD
          source_id: s_ce84hQc5q5ejG7p33eodfk
          stance: supports
          locator: CBDB:250016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250016）
          source: &a1
            id: s_ce84hQc5q5ejG7p33eodfk
            source_type: api_record
            title: 中国历代人物传记资料库：王宴（CBDB 250016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250016&o=json
            external_identifier: CBDB:250016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U7pL6x3GpiyFQQgGdJd3iq
        subject_person_id: p_fR5v5jHNNZVs5BT6RTLRqd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宴，明人物。成化十一年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 250016）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_55jn-g1U2Ca4wIRX5lJEjv
          claim_id: c_U7pL6x3GpiyFQQgGdJd3iq
          source_id: s_ce84hQc5q5ejG7p33eodfk
          stance: supports
          locator: CBDB:250016
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bJpILXz3uLD2-3og29_pKw
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fR5v5jHNNZVs5BT6RTLRqd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__BXPjA5vBe5pA1Mk70VzyS
          claim_id: c_bJpILXz3uLD2-3og29_pKw
          source_id: s_qy1_zxa85qyEmOgGZL53Zh
          stance: supports
          locator: CBDB：兄弟 王宬（199813）之父／母 王孟瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王宴 与 王宬 为同胞（CBDB 记「兄」），王宬 之父／母即 王宴 之父／母。
          source:
            id: s_qy1_zxa85qyEmOgGZL53Zh
            source_type: api_record
            title: 中国历代人物传记资料库：王宴（CBDB 250016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250016&o=json
            external_identifier: CBDB:250016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oYefTot2EGCYoXmKyUe9cv
        status: active
        display_name: 王孟瓛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qZ1svvkLHE3WQfwD3B1C-W
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fR5v5jHNNZVs5BT6RTLRqd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z2WNntYu6pcbbw9kRP0Tji
          claim_id: c_qZ1svvkLHE3WQfwD3B1C-W
          source_id: s_qy1_zxa85qyEmOgGZL53Zh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199813 王宬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qy1_zxa85qyEmOgGZL53Zh
            source_type: api_record
            title: 中国历代人物传记资料库：王宴（CBDB 250016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250016&o=json
            external_identifier: CBDB:250016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XU2HBZFhmiBGAyoKHD4B6w
        status: active
        display_name: 王宬
        merged_into_person_id: null
---

# 王宴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宴 | accepted |
| bio.summary | 王宴，明人物。成化十一年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 250016） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oYefTot2EGCYoXmKyUe9cv | 王孟瓛 | accepted |
| other | p_XU2HBZFhmiBGAyoKHD4B6w | 王宬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宴（CBDB 250016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250016&o=json)
