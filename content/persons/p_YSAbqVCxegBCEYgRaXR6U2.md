---
schema: wang-person/v1
id: p_YSAbqVCxegBCEYgRaXR6U2
status: active
merged_into: null
display_name: 王淑旦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J8iA1oyyY1qZSfgeLeeewG
        subject_person_id: p_YSAbqVCxegBCEYgRaXR6U2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_54CxEHTg3qdLeEXWuFqnBa
          claim_id: c_J8iA1oyyY1qZSfgeLeeewG
          source_id: s_bQ2WnqCSKoxr9UNdFBsXdn
          stance: supports
          locator: CBDB:331194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331194）
          source: &a1
            id: s_bQ2WnqCSKoxr9UNdFBsXdn
            source_type: api_record
            title: 中国历代人物传记资料库：王淑旦（CBDB 331194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331194&o=json
            external_identifier: CBDB:331194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4YJrP5rhXi9uRoeDKAqU3Z
        subject_person_id: p_YSAbqVCxegBCEYgRaXR6U2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑旦，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331194）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XDsaQOZqNV37JXwqiQIS1U
          claim_id: c_4YJrP5rhXi9uRoeDKAqU3Z
          source_id: s_bQ2WnqCSKoxr9UNdFBsXdn
          stance: supports
          locator: CBDB:331194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QdgeFAM-q4uc4wZYxaYeJX
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YSAbqVCxegBCEYgRaXR6U2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rmav4-2IVfnY19mRWkNBXO
          claim_id: c_QdgeFAM-q4uc4wZYxaYeJX
          source_id: s_82kHmowwEA6C7r11MFryH6
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑旦 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑旦 之父／母。
          source:
            id: s_82kHmowwEA6C7r11MFryH6
            source_type: api_record
            title: 中国历代人物传记资料库：王淑旦（CBDB 331194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331194&o=json
            external_identifier: CBDB:331194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vQ7CxFfVeDD5gVP5SnofRA
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_olyfFpy-xl726hUeO0rCmI
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YSAbqVCxegBCEYgRaXR6U2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FL2Pu4MT1lJfwF3pIStNS_
          claim_id: c_olyfFpy-xl726hUeO0rCmI
          source_id: s_82kHmowwEA6C7r11MFryH6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_82kHmowwEA6C7r11MFryH6
            source_type: api_record
            title: 中国历代人物传记资料库：王淑旦（CBDB 331194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331194&o=json
            external_identifier: CBDB:331194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
---

# 王淑旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑旦 | accepted |
| bio.summary | 王淑旦，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331194） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vQ7CxFfVeDD5gVP5SnofRA | 王言 | accepted |
| other | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑旦（CBDB 331194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331194&o=json)
