---
schema: wang-person/v1
id: p_1KMWKxmzHZFsefKQXxCmAg
status: active
merged_into: null
display_name: 王希禹
cbdb_id: 312978
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D35t2DjQwKAK8E3wK9KihR
        subject_person_id: p_1KMWKxmzHZFsefKQXxCmAg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希禹，明人物。嘉靖二十九年進士，籍贯安化。（中国历代人物传记资料库 CBDB 312978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_4C_o3jRAZQ6ltAxSFSuN8p
          claim_id: c_D35t2DjQwKAK8E3wK9KihR
          source_id: s_C4cA5qWKpoP6f7sAa8m3Gp
          stance: supports
          locator: CBDB:312978
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C4cA5qWKpoP6f7sAa8m3Gp
            source_type: api_record
            title: 中国历代人物传记资料库：王希禹（CBDB 312978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312978&o=json
            external_identifier: CBDB:312978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_x4wGWgAw5gsRzBcp924bRz
        subject_person_id: p_1KMWKxmzHZFsefKQXxCmAg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希禹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C5AV5WhJ6x4dH2hTLWoqiM
          claim_id: c_x4wGWgAw5gsRzBcp924bRz
          source_id: s_C4cA5qWKpoP6f7sAa8m3Gp
          stance: supports
          locator: CBDB:312978
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iCAtkPGZELhI55qDUdik2t
        subject_person_id: p_Fn3VWmbwHWaLfGAks8JyJ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1KMWKxmzHZFsefKQXxCmAg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2BjiMDNAjgEoleRQRucrZz
          claim_id: c_iCAtkPGZELhI55qDUdik2t
          source_id: s_uHV7DYMsI1MAyTGc7RRe-2
          stance: supports
          locator: CBDB：兄弟 王希堯（203993）之父／母 王守正
          quotation: null
          interpretation_note: 由兄弟关系推断：王希禹 与 王希堯 为同胞（CBDB 记「兄」），王希堯 之父／母即 王希禹 之父／母。
          source:
            id: s_uHV7DYMsI1MAyTGc7RRe-2
            source_type: api_record
            title: 中国历代人物传记资料库：王希禹（CBDB 312978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312978&o=json
            external_identifier: CBDB:312978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fn3VWmbwHWaLfGAks8JyJ5
        status: active
        display_name: 王守正
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_b-SOS7XLrnTwEF3QEiw6TX
        subject_person_id: p_1KMWKxmzHZFsefKQXxCmAg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ra_2fef7gPqIg1fUOKGosP
          claim_id: c_b-SOS7XLrnTwEF3QEiw6TX
          source_id: s_uHV7DYMsI1MAyTGc7RRe-2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203993 王希堯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uHV7DYMsI1MAyTGc7RRe-2
            source_type: api_record
            title: 中国历代人物传记资料库：王希禹（CBDB 312978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312978&o=json
            external_identifier: CBDB:312978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQT1Hm7LSS63rTgZwvcsM7
        status: active
        display_name: 王希堯
        merged_into_person_id: null
---

# 王希禹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希禹，明人物。嘉靖二十九年進士，籍贯安化。（中国历代人物传记资料库 CBDB 312978） | accepted |
| name.primary | 王希禹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fn3VWmbwHWaLfGAks8JyJ5 | 王守正 | accepted |
| other | p_WQT1Hm7LSS63rTgZwvcsM7 | 王希堯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希禹（CBDB 312978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312978&o=json)
