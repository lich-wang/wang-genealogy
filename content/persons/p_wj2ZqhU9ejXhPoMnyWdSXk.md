---
schema: wang-person/v1
id: p_wj2ZqhU9ejXhPoMnyWdSXk
status: active
merged_into: null
display_name: 王墫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3r48UvhFPvjSCCLpSThQE7
        subject_person_id: p_wj2ZqhU9ejXhPoMnyWdSXk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zkdgXcGsXwLCkgR6r7Y7Ki
          claim_id: c_3r48UvhFPvjSCCLpSThQE7
          source_id: s_FvnpJ7N917nAe3AMgWkDEb
          stance: supports
          locator: CBDB:636783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636783）
          source: &a1
            id: s_FvnpJ7N917nAe3AMgWkDEb
            source_type: api_record
            title: 中国历代人物传记资料库：王墫（CBDB 636783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636783&o=json
            external_identifier: CBDB:636783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FEgqxBVa9aM43Xka8WB8pX
        subject_person_id: p_wj2ZqhU9ejXhPoMnyWdSXk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墫，清人物。籍贯清苑，入仕監生，曾任典史、縣丞。（中国历代人物传记资料库 CBDB 636783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PpcWmo9UycrDRpGowh9kl1
          claim_id: c_FEgqxBVa9aM43Xka8WB8pX
          source_id: s_FvnpJ7N917nAe3AMgWkDEb
          stance: supports
          locator: CBDB:636783
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

# 王墫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王墫 | accepted |
| bio.summary | 王墫，清人物。籍贯清苑，入仕監生，曾任典史、縣丞。（中国历代人物传记资料库 CBDB 636783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王墫（CBDB 636783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636783&o=json)
