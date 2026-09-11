---
schema: wang-person/v1
id: p_z9FBywTdJBCc1gj3uex89P
status: active
merged_into: null
display_name: 王顯榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WBheGqFw6bsPikG7A9hQCW
        subject_person_id: p_z9FBywTdJBCc1gj3uex89P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_84siu3LN1BRWTJGa95bjDu
          claim_id: c_WBheGqFw6bsPikG7A9hQCW
          source_id: s_p6nEBfNWm6cTz34SGwGHWD
          stance: supports
          locator: CBDB:640878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640878）
          source: &a1
            id: s_p6nEBfNWm6cTz34SGwGHWD
            source_type: api_record
            title: 中国历代人物传记资料库：王顯榮（CBDB 640878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640878&o=json
            external_identifier: CBDB:640878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_He2F9gEJFC8uM1dbRnGDcm
        subject_person_id: p_z9FBywTdJBCc1gj3uex89P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯榮，清人物。籍贯貴州省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 640878）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I9nICrn0LrV2BhtouO2t6Z
          claim_id: c_He2F9gEJFC8uM1dbRnGDcm
          source_id: s_p6nEBfNWm6cTz34SGwGHWD
          stance: supports
          locator: CBDB:640878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王顯榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯榮 | accepted |
| bio.summary | 王顯榮，清人物。籍贯貴州省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 640878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯榮（CBDB 640878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640878&o=json)
