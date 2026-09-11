---
schema: wang-person/v1
id: p_CL9HUjsUd6CR3iNxN7PDor
status: active
merged_into: null
display_name: 王石弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qnGYfBm11HLaZ7y2pMFZ4F
        subject_person_id: p_CL9HUjsUd6CR3iNxN7PDor
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王石弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5hFsKpw7rF6E4UgJYMCbT6
          claim_id: c_qnGYfBm11HLaZ7y2pMFZ4F
          source_id: s_LDykRNJQGwDYYZN41sNVDG
          stance: supports
          locator: CBDB:639555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639555）
          source: &a1
            id: s_LDykRNJQGwDYYZN41sNVDG
            source_type: api_record
            title: 中国历代人物传记资料库：王石弼（CBDB 639555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639555&o=json
            external_identifier: CBDB:639555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ukjKK6C1xsKew7gM1QAzd
        subject_person_id: p_CL9HUjsUd6CR3iNxN7PDor
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王石弼，清人物。籍贯齊東，曾任知府。（中国历代人物传记资料库 CBDB 639555）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ce3DLh_uwjG-f_Ud4Fk4sW
          claim_id: c_8ukjKK6C1xsKew7gM1QAzd
          source_id: s_LDykRNJQGwDYYZN41sNVDG
          stance: supports
          locator: CBDB:639555
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

# 王石弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王石弼 | accepted |
| bio.summary | 王石弼，清人物。籍贯齊東，曾任知府。（中国历代人物传记资料库 CBDB 639555） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王石弼（CBDB 639555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639555&o=json)
