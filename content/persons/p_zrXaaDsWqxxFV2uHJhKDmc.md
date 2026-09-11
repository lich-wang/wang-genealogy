---
schema: wang-person/v1
id: p_zrXaaDsWqxxFV2uHJhKDmc
status: active
merged_into: null
display_name: 王海澄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8J92oWe58qg6AndJG6RJ6f
        subject_person_id: p_zrXaaDsWqxxFV2uHJhKDmc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Vg5A3M1oTqJ864QKsgCfw
          claim_id: c_8J92oWe58qg6AndJG6RJ6f
          source_id: s_wXGhTWmb6HDfh6GdEWtMjq
          stance: supports
          locator: CBDB:575363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575363）
          source: &a1
            id: s_wXGhTWmb6HDfh6GdEWtMjq
            source_type: api_record
            title: 中国历代人物传记资料库：王海澄（CBDB 575363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575363&o=json
            external_identifier: CBDB:575363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FNvGemFkQtbc2xPMB1iXPR
        subject_person_id: p_zrXaaDsWqxxFV2uHJhKDmc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u4KM8xKR16yUz7N9QPiyrQ
          claim_id: c_FNvGemFkQtbc2xPMB1iXPR
          source_id: s_wXGhTWmb6HDfh6GdEWtMjq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_avCmS_DuBHmwdNo3MoqLhV
        subject_person_id: p_zrXaaDsWqxxFV2uHJhKDmc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3D3zeA5mZtd9W6iunSH3Sv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P1dsOcHLa9ZmiJkShoVa8b
          claim_id: c_avCmS_DuBHmwdNo3MoqLhV
          source_id: s_1msSvG2MAD8yK29YECS9eJ
          stance: supports
          locator: 雲和縣志，lgid=369323：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1msSvG2MAD8yK29YECS9eJ
            source_type: api_record
            title: 中国历代人物传记资料库：王良晟（CBDB 575370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575370&o=json
            external_identifier: CBDB:575370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3D3zeA5mZtd9W6iunSH3Sv
        status: active
        display_name: 王良晟
        merged_into_person_id: null
  other: []
---

# 王海澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王海澄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3D3zeA5mZtd9W6iunSH3Sv | 王良晟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王海澄（CBDB 575363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575363&o=json)
- [中国历代人物传记资料库：王良晟（CBDB 575370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575370&o=json)
