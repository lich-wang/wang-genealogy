---
schema: wang-person/v1
id: p_JEzwWCs65gk35spfBQyt2t
status: active
merged_into: null
display_name: 王沐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nu3mm9nnpnLKJF7PvBxJhQ
        subject_person_id: p_JEzwWCs65gk35spfBQyt2t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_59T6FaLTaW265PGfNkfeRm
          claim_id: c_nu3mm9nnpnLKJF7PvBxJhQ
          source_id: s_RJGq19zsKdoWVP4bsGg53F
          stance: supports
          locator: CBDB:639050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639050）
          source: &a1
            id: s_RJGq19zsKdoWVP4bsGg53F
            source_type: api_record
            title: 中国历代人物传记资料库：王沐（CBDB 639050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639050&o=json
            external_identifier: CBDB:639050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZT4ajXsygYggcSEhJCgYxB
        subject_person_id: p_JEzwWCs65gk35spfBQyt2t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沐，清人物。籍贯金谿，曾任教授、學正。（中国历代人物传记资料库 CBDB 639050）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cDklU3UCc7-V3JRMOLVKtB
          claim_id: c_ZT4ajXsygYggcSEhJCgYxB
          source_id: s_RJGq19zsKdoWVP4bsGg53F
          stance: supports
          locator: CBDB:639050
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

# 王沐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沐 | accepted |
| bio.summary | 王沐，清人物。籍贯金谿，曾任教授、學正。（中国历代人物传记资料库 CBDB 639050） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沐（CBDB 639050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639050&o=json)
