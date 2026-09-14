---
schema: wang-person/v1
id: p_bDFgBZLmWhHrk46Gz9idH4
status: active
merged_into: null
display_name: 王桓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ETH3h3tgp9NSPbjMCja5tv
        subject_person_id: p_bDFgBZLmWhHrk46Gz9idH4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Qo5B3kd8CSLQfJU7Wnbj9
          claim_id: c_ETH3h3tgp9NSPbjMCja5tv
          source_id: s_bwgW7UeWjx4QLdrY6AHEBB
          stance: supports
          locator: CBDB:271111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271111）
          source: &a1
            id: s_bwgW7UeWjx4QLdrY6AHEBB
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 271111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271111&o=json
            external_identifier: CBDB:271111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_carAmqKLHHcyBAZY4pYREN
        subject_person_id: p_bDFgBZLmWhHrk46Gz9idH4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271111）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JrfxbB9Z9SalIELIPIyXwa
          claim_id: c_carAmqKLHHcyBAZY4pYREN
          source_id: s_bwgW7UeWjx4QLdrY6AHEBB
          stance: supports
          locator: CBDB:271111
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JFPqWTsQm7eghF5W1Y6iUm
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDFgBZLmWhHrk46Gz9idH4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8AgIVZUcStjzTzhZXi_9nO
          claim_id: c_JFPqWTsQm7eghF5W1Y6iUm
          source_id: s_SkTvPbRiptsjKQB0guxbRD
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王桓 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王桓 之父／母。
          source:
            id: s_SkTvPbRiptsjKQB0guxbRD
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 271111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271111&o=json
            external_identifier: CBDB:271111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JJVNEEM87Q9sBUqrYf9DpQ
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ss4jKgQHMGX8fTEc9Cu9Lu
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bDFgBZLmWhHrk46Gz9idH4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q7nJNst1lbH3LCkbFbDto2
          claim_id: c_ss4jKgQHMGX8fTEc9Cu9Lu
          source_id: s_SkTvPbRiptsjKQB0guxbRD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SkTvPbRiptsjKQB0guxbRD
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 271111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271111&o=json
            external_identifier: CBDB:271111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5dqAK3hD6kewBU4JbJcy31
        status: active
        display_name: 王材
        merged_into_person_id: null
---

# 王桓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桓 | accepted |
| bio.summary | 王桓，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JJVNEEM87Q9sBUqrYf9DpQ | 王瓊 | accepted |
| other | p_5dqAK3hD6kewBU4JbJcy31 | 王材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桓（CBDB 271111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271111&o=json)
