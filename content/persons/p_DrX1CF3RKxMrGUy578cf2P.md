---
schema: wang-person/v1
id: p_DrX1CF3RKxMrGUy578cf2P
status: active
merged_into: null
display_name: 王選
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_opM1auqGJ7iaAbSfFtQKnk
        subject_person_id: p_DrX1CF3RKxMrGUy578cf2P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZA4Lkb9z5tAFoxD2CmicG9
          claim_id: c_opM1auqGJ7iaAbSfFtQKnk
          source_id: s_AqeiWb4vN8uB4CxjVWRF1t
          stance: supports
          locator: CBDB:251788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251788）
          source: &a1
            id: s_AqeiWb4vN8uB4CxjVWRF1t
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 251788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251788&o=json
            external_identifier: CBDB:251788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9wF1ERAc5VkUWrqZFEgJJQ
        subject_person_id: p_DrX1CF3RKxMrGUy578cf2P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選，明人物。成化十四年進士，籍贯進賢。（中国历代人物传记资料库 CBDB 251788）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8ogPpanYeUuHCOWoH_pM8j
          claim_id: c_9wF1ERAc5VkUWrqZFEgJJQ
          source_id: s_AqeiWb4vN8uB4CxjVWRF1t
          stance: supports
          locator: CBDB:251788
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ausqArftW6c4RyBpIg1F3L
        subject_person_id: p_RuSLTh9boFqmMpRBv7wnJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DrX1CF3RKxMrGUy578cf2P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uMuucNSe_gNkh7aWGz7Pe1
          claim_id: c_ausqArftW6c4RyBpIg1F3L
          source_id: s_VRBpNSHzKIHTVT1oCb8PNs
          stance: supports
          locator: CBDB：兄弟 王建（199946）之父／母 王子謨
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王建 为同胞（CBDB 记「弟」），王建 之父／母即 王選 之父／母。
          source:
            id: s_VRBpNSHzKIHTVT1oCb8PNs
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 251788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251788&o=json
            external_identifier: CBDB:251788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RuSLTh9boFqmMpRBv7wnJ1
        status: active
        display_name: 王子謨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cFc32_a2trOeh5vevBhbq5
        subject_person_id: p_DrX1CF3RKxMrGUy578cf2P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z9KinS8qcI4vr5Ei7WJmJz
          claim_id: c_cFc32_a2trOeh5vevBhbq5
          source_id: s_VRBpNSHzKIHTVT1oCb8PNs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199946 王建）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VRBpNSHzKIHTVT1oCb8PNs
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 251788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251788&o=json
            external_identifier: CBDB:251788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kBqE6QprrhgLRYUsgfWdoz
        status: active
        display_name: 王建
        merged_into_person_id: null
---

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | 王選，明人物。成化十四年進士，籍贯進賢。（中国历代人物传记资料库 CBDB 251788） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RuSLTh9boFqmMpRBv7wnJ1 | 王子謨 | accepted |
| other | p_kBqE6QprrhgLRYUsgfWdoz | 王建 | accepted |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 251788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251788&o=json)
