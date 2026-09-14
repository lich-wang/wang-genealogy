---
schema: wang-person/v1
id: p_TcEgoCK92NB84dZ85NVqLx
status: active
merged_into: null
display_name: 王學歐
cbdb_id: 303180
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8TeJC5K2hb9TAaMngJCXBA
        subject_person_id: p_TcEgoCK92NB84dZ85NVqLx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學歐，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303180）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jVZN4DdahJ-ze8lZIfw4Wr
          claim_id: c_8TeJC5K2hb9TAaMngJCXBA
          source_id: s_g9JjSN6gqbLJ3yc3RzuB7o
          stance: supports
          locator: CBDB:303180
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g9JjSN6gqbLJ3yc3RzuB7o
            source_type: api_record
            title: 中国历代人物传记资料库：王學歐（CBDB 303180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303180&o=json
            external_identifier: CBDB:303180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A9eGjQ6qX6KrZ7EnJQKLQa
        subject_person_id: p_TcEgoCK92NB84dZ85NVqLx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學歐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fpyBGyz3uqu3cLRKzV6Kq6
          claim_id: c_A9eGjQ6qX6KrZ7EnJQKLQa
          source_id: s_g9JjSN6gqbLJ3yc3RzuB7o
          stance: supports
          locator: CBDB:303180
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jNbywiLhHdXiMSkAANa1ta
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TcEgoCK92NB84dZ85NVqLx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8NVInj-6lNPlpyzLZGJSc
          claim_id: c_jNbywiLhHdXiMSkAANa1ta
          source_id: s_im7g2HnV-UHUt7S6IguDX3
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學歐 与 王學柳 为同胞（CBDB 记「兄」），王學柳 之父／母即 王學歐 之父／母。
          source:
            id: s_im7g2HnV-UHUt7S6IguDX3
            source_type: api_record
            title: 中国历代人物传记资料库：王學歐（CBDB 303180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303180&o=json
            external_identifier: CBDB:303180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xnVNk7Yn6e863HGsnbGHpw
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_f-3Py1jpzZJjqjEXr2a2yQ
        subject_person_id: p_TcEgoCK92NB84dZ85NVqLx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9veLsvUX6E_FF9fxqKWhMi
          claim_id: c_f-3Py1jpzZJjqjEXr2a2yQ
          source_id: s_im7g2HnV-UHUt7S6IguDX3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_im7g2HnV-UHUt7S6IguDX3
            source_type: api_record
            title: 中国历代人物传记资料库：王學歐（CBDB 303180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303180&o=json
            external_identifier: CBDB:303180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U7JNj2nXJh2KN7f9tg3Czd
        status: active
        display_name: 王學柳
        merged_into_person_id: null
---

# 王學歐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學歐，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303180） | accepted |
| name.primary | 王學歐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xnVNk7Yn6e863HGsnbGHpw | 王相 | accepted |
| other | p_U7JNj2nXJh2KN7f9tg3Czd | 王學柳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學歐（CBDB 303180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303180&o=json)
