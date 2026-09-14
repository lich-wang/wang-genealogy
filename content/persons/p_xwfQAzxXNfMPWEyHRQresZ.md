---
schema: wang-person/v1
id: p_xwfQAzxXNfMPWEyHRQresZ
status: active
merged_into: null
display_name: 王瀛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XnfHcWuHhdybnACXgUQexK
        subject_person_id: p_xwfQAzxXNfMPWEyHRQresZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wfb9Q6NgLCJ1C7Pg1XLmxx
          claim_id: c_XnfHcWuHhdybnACXgUQexK
          source_id: s_USny3LQj5w8jZFsVV7WUHh
          stance: supports
          locator: CBDB:282005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282005）
          source: &a1
            id: s_USny3LQj5w8jZFsVV7WUHh
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 282005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282005&o=json
            external_identifier: CBDB:282005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3T2T7YHhjcnVjL1RvRv24h
        subject_person_id: p_xwfQAzxXNfMPWEyHRQresZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀛，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282005）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cY0G3eFCQ-F6m16lO3dp2k
          claim_id: c_3T2T7YHhjcnVjL1RvRv24h
          source_id: s_USny3LQj5w8jZFsVV7WUHh
          stance: supports
          locator: CBDB:282005
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_frEgjXBB631OhbkzD782nG
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xwfQAzxXNfMPWEyHRQresZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pD_vkZGwXTmUJq2B-NrQnG
          claim_id: c_frEgjXBB631OhbkzD782nG
          source_id: s_8a4vGVuqbkAioad1lt5oIy
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀛 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王瀛 之父／母。
          source:
            id: s_8a4vGVuqbkAioad1lt5oIy
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 282005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282005&o=json
            external_identifier: CBDB:282005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jk84ENYUVyTz1ayR9hKQUA
        status: active
        display_name: 王鋀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YvtSw3HrffJw5BvleaudY0
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xwfQAzxXNfMPWEyHRQresZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbQ9M7opf0tl2JlORThATR
          claim_id: c_YvtSw3HrffJw5BvleaudY0
          source_id: s_8a4vGVuqbkAioad1lt5oIy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8a4vGVuqbkAioad1lt5oIy
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 282005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282005&o=json
            external_identifier: CBDB:282005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_STyrVbhawRK5QNwptzbque
        status: active
        display_name: 王泮
        merged_into_person_id: null
---

# 王瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀛 | accepted |
| bio.summary | 王瀛，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282005） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jk84ENYUVyTz1ayR9hKQUA | 王鋀 | accepted |
| other | p_STyrVbhawRK5QNwptzbque | 王泮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀛（CBDB 282005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282005&o=json)
