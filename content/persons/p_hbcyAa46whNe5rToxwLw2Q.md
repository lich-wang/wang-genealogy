---
schema: wang-person/v1
id: p_hbcyAa46whNe5rToxwLw2Q
status: active
merged_into: null
display_name: 王子章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8msiQ3kgDQ2vSQJ5tN1U99
        subject_person_id: p_hbcyAa46whNe5rToxwLw2Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uTrK2SxFR5fbc48HLw7njq
          claim_id: c_8msiQ3kgDQ2vSQJ5tN1U99
          source_id: s_miFptGEmMe18wkpVsELYzr
          stance: supports
          locator: CBDB:636991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636991）
          source: &a1
            id: s_miFptGEmMe18wkpVsELYzr
            source_type: api_record
            title: 中国历代人物传记资料库：王子章（CBDB 636991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636991&o=json
            external_identifier: CBDB:636991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5TUELiyHhYjNQf6dDB49NE
        subject_person_id: p_hbcyAa46whNe5rToxwLw2Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子章，清人物。籍贯揚州府，曾任訓導。（中国历代人物传记资料库 CBDB 636991）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_14o-noVEueVmC4GUFT2CVB
          claim_id: c_5TUELiyHhYjNQf6dDB49NE
          source_id: s_miFptGEmMe18wkpVsELYzr
          stance: supports
          locator: CBDB:636991
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

# 王子章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子章 | accepted |
| bio.summary | 王子章，清人物。籍贯揚州府，曾任訓導。（中国历代人物传记资料库 CBDB 636991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子章（CBDB 636991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636991&o=json)
