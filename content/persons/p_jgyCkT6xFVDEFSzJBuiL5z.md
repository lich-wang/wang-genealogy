---
schema: wang-person/v1
id: p_jgyCkT6xFVDEFSzJBuiL5z
status: active
merged_into: null
display_name: 王元默
cbdb_id: 314304
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gVj4P5h4DTbMy12ZLj3K7Q
        subject_person_id: p_jgyCkT6xFVDEFSzJBuiL5z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元默，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iLnKYDkeayqhlvIek5c9re
          claim_id: c_gVj4P5h4DTbMy12ZLj3K7Q
          source_id: s_naxRUmuuFj9tRpNEoM6GGv
          stance: supports
          locator: CBDB:314304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_naxRUmuuFj9tRpNEoM6GGv
            source_type: api_record
            title: 中国历代人物传记资料库：王元默（CBDB 314304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314304&o=json
            external_identifier: CBDB:314304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DpsKzkLKATprkmHLGcH8dg
        subject_person_id: p_jgyCkT6xFVDEFSzJBuiL5z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KJFKZ52V8TKjd2pjazHnBJ
          claim_id: c_DpsKzkLKATprkmHLGcH8dg
          source_id: s_naxRUmuuFj9tRpNEoM6GGv
          stance: supports
          locator: CBDB:314304
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EmD8nNidopHbCSCkCxIYx1
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jgyCkT6xFVDEFSzJBuiL5z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__gbWGT7Lvlqtm6Qbg_-Fnx
          claim_id: c_EmD8nNidopHbCSCkCxIYx1
          source_id: s_1M9rH_vnQXrtmySM5Tq39Z
          stance: supports
          locator: CBDB：兄弟 王元春（126470）之父／母 王滋
          quotation: null
          interpretation_note: 由兄弟关系推断：王元默 与 王元春 为同胞（CBDB 记「兄」），王元春 之父／母即 王元默 之父／母。
          source:
            id: s_1M9rH_vnQXrtmySM5Tq39Z
            source_type: api_record
            title: 中国历代人物传记资料库：王元默（CBDB 314304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314304&o=json
            external_identifier: CBDB:314304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        status: active
        display_name: 王滋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IklKuBKQY-C8PbNWaIYqs4
        subject_person_id: p_jgyCkT6xFVDEFSzJBuiL5z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qb7zDu2gwfuaD8yT1H3cXc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AWllnMtZCWXoifxntMhdar
          claim_id: c_IklKuBKQY-C8PbNWaIYqs4
          source_id: s_1M9rH_vnQXrtmySM5Tq39Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126470 王元春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1M9rH_vnQXrtmySM5Tq39Z
            source_type: api_record
            title: 中国历代人物传记资料库：王元默（CBDB 314304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314304&o=json
            external_identifier: CBDB:314304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qb7zDu2gwfuaD8yT1H3cXc
        status: active
        display_name: 王元春
        merged_into_person_id: null
---

# 王元默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元默，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314304） | accepted |
| name.primary | 王元默 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zRQ8vX2mq2ef6gtHZ8hFkm | 王滋 | accepted |
| other | p_qb7zDu2gwfuaD8yT1H3cXc | 王元春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元默（CBDB 314304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314304&o=json)
