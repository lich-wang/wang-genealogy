---
schema: wang-person/v1
id: p_QgAKGJMuGM4ng3rJwQxmzL
status: active
merged_into: null
display_name: 王好賢
cbdb_id: 285849
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTH9myrAJh2k9zCy8ycCEA
        subject_person_id: p_QgAKGJMuGM4ng3rJwQxmzL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好賢，明人物。正德十六年進士，籍贯交河，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 285849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kM2y2iAwVBq7yDLDy_Uhw0
          claim_id: c_PTH9myrAJh2k9zCy8ycCEA
          source_id: s_BCQzSXMcqab6wKhJ1bvjkh
          stance: supports
          locator: CBDB:285849
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BCQzSXMcqab6wKhJ1bvjkh
            source_type: api_record
            title: 中国历代人物传记资料库：王好賢（CBDB 285849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285849&o=json
            external_identifier: CBDB:285849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDxrgdPzLtrmYyxbpBzLU3
        subject_person_id: p_QgAKGJMuGM4ng3rJwQxmzL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LDqmQ5v3y3CimdnFdKHp9Z
          claim_id: c_uDxrgdPzLtrmYyxbpBzLU3
          source_id: s_BCQzSXMcqab6wKhJ1bvjkh
          stance: supports
          locator: CBDB:285849
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pm4in22cU5k9KMnrnrSz7M
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QgAKGJMuGM4ng3rJwQxmzL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SkF05fdE2MF1AoBqGLEgZD
          claim_id: c_pm4in22cU5k9KMnrnrSz7M
          source_id: s_fh6v8fGNibODYcRG-29GsO
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王好賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王好賢 之父／母。
          source:
            id: s_fh6v8fGNibODYcRG-29GsO
            source_type: api_record
            title: 中国历代人物传记资料库：王好賢（CBDB 285849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285849&o=json
            external_identifier: CBDB:285849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yeJtEcC7cBaU9sVyVGy7xj
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0PTZBMNyM1IDJJdrPmW85b
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QgAKGJMuGM4ng3rJwQxmzL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xUI7j7uUFfjLb9tEgatdxp
          claim_id: c_0PTZBMNyM1IDJJdrPmW85b
          source_id: s_fh6v8fGNibODYcRG-29GsO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fh6v8fGNibODYcRG-29GsO
            source_type: api_record
            title: 中国历代人物传记资料库：王好賢（CBDB 285849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285849&o=json
            external_identifier: CBDB:285849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HgaWqM5nscyN4tzrPQd5UX
        status: active
        display_name: 王重賢
        merged_into_person_id: null
---

# 王好賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王好賢，明人物。正德十六年進士，籍贯交河，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 285849） | accepted |
| name.primary | 王好賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yeJtEcC7cBaU9sVyVGy7xj | 王鉞 | accepted |
| other | p_HgaWqM5nscyN4tzrPQd5UX | 王重賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王好賢（CBDB 285849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285849&o=json)
