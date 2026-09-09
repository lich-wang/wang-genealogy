---
schema: wang-person/v1
id: p_rBztAkiR3V9xrbhY6GWBAB
status: active
merged_into: null
display_name: 王仕儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92kcQdg4tUTJJo8A15QXVg
        subject_person_id: p_rBztAkiR3V9xrbhY6GWBAB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sJsynVPp1xHQKoqQ5nv7fH
          claim_id: c_92kcQdg4tUTJJo8A15QXVg
          source_id: s_F9MjuUm5eMq7AifLUBWFe7
          stance: supports
          locator: CBDB:692464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692464）
          source: &a1
            id: s_F9MjuUm5eMq7AifLUBWFe7
            source_type: api_record
            title: 中国历代人物传记资料库：王仕儀（CBDB 692464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692464&o=json
            external_identifier: CBDB:692464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V6Km5E2LL6EBD4pQ8mMuEc
        subject_person_id: p_rBztAkiR3V9xrbhY6GWBAB
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
        - id: cs_JFsxtjs4fwr4BXDhhbMfKs
          claim_id: c_V6Km5E2LL6EBD4pQ8mMuEc
          source_id: s_F9MjuUm5eMq7AifLUBWFe7
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
  descendants: []
  other: []
---

# 王仕儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕儀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕儀（CBDB 692464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692464&o=json)
