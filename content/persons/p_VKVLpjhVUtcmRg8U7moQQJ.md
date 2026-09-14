---
schema: wang-person/v1
id: p_VKVLpjhVUtcmRg8U7moQQJ
status: active
merged_into: null
display_name: 王弘謨
cbdb_id: 331180
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_esEy5f4mFS3gip8eF6EGYK
        subject_person_id: p_VKVLpjhVUtcmRg8U7moQQJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘謨，明人物。嘉靖四十四年進士，籍贯定安。（中国历代人物传记资料库 CBDB 331180）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GLGhy_qJYiJKc28-B-xO0_
          claim_id: c_esEy5f4mFS3gip8eF6EGYK
          source_id: s_BhBUx3AYn5Eb8WkPVdzzGb
          stance: supports
          locator: CBDB:331180
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BhBUx3AYn5Eb8WkPVdzzGb
            source_type: api_record
            title: 中国历代人物传记资料库：王弘謨（CBDB 331180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331180&o=json
            external_identifier: CBDB:331180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t747KkT8GgUJo8Fw93r9cd
        subject_person_id: p_VKVLpjhVUtcmRg8U7moQQJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XLL7m3CnNjGdYoyp5kkt9j
          claim_id: c_t747KkT8GgUJo8Fw93r9cd
          source_id: s_BhBUx3AYn5Eb8WkPVdzzGb
          stance: supports
          locator: CBDB:331180
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k5hrV1QPbDcVRLjXMfPa47
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VKVLpjhVUtcmRg8U7moQQJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q7z8HV9K4hw9HL2wBFZ4hd
          claim_id: c_k5hrV1QPbDcVRLjXMfPa47
          source_id: s_nFWGXOZ3k5OgSgghGusA27
          stance: supports
          locator: CBDB：兄弟 王弘誨（126486）之父／母 王允升
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘謨 与 王弘誨 为同胞（CBDB 记「弟」），王弘誨 之父／母即 王弘謨 之父／母。
          source:
            id: s_nFWGXOZ3k5OgSgghGusA27
            source_type: api_record
            title: 中国历代人物传记资料库：王弘謨（CBDB 331180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331180&o=json
            external_identifier: CBDB:331180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cCJhqBHpoSnrc87c6Zt2oi
        status: active
        display_name: 王允升
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fypxQk8ss80S5z6WwG9Ab8
        subject_person_id: p_VKVLpjhVUtcmRg8U7moQQJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sZEnnJm6tMYD9G3rVKEL7w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a5Dzu0-y_hfI6rOMNaEA3Z
          claim_id: c_fypxQk8ss80S5z6WwG9Ab8
          source_id: s_nFWGXOZ3k5OgSgghGusA27
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126486 王弘誨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nFWGXOZ3k5OgSgghGusA27
            source_type: api_record
            title: 中国历代人物传记资料库：王弘謨（CBDB 331180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331180&o=json
            external_identifier: CBDB:331180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sZEnnJm6tMYD9G3rVKEL7w
        status: active
        display_name: 王弘誨
        merged_into_person_id: null
---

# 王弘謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘謨，明人物。嘉靖四十四年進士，籍贯定安。（中国历代人物传记资料库 CBDB 331180） | accepted |
| name.primary | 王弘謨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cCJhqBHpoSnrc87c6Zt2oi | 王允升 | accepted |
| other | p_sZEnnJm6tMYD9G3rVKEL7w | 王弘誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘謨（CBDB 331180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331180&o=json)
