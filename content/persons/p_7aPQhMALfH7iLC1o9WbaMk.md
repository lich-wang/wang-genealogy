---
schema: wang-person/v1
id: p_7aPQhMALfH7iLC1o9WbaMk
status: active
merged_into: null
display_name: 王觀光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8EsFAyvm8CEztrUm9Nooat
        subject_person_id: p_7aPQhMALfH7iLC1o9WbaMk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HHbvvToceBECAosEFctfin
          claim_id: c_8EsFAyvm8CEztrUm9Nooat
          source_id: s_HEfi3usTpB6Ld9dE6CKYAD
          stance: supports
          locator: CBDB:640242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640242）
          source: &a1
            id: s_HEfi3usTpB6Ld9dE6CKYAD
            source_type: api_record
            title: 中国历代人物传记资料库：王觀光（CBDB 640242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640242&o=json
            external_identifier: CBDB:640242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RJYpXLPBiPAGfMkJoX7xXr
        subject_person_id: p_7aPQhMALfH7iLC1o9WbaMk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀光，清人物。籍贯鄞縣，曾任典史。（中国历代人物传记资料库 CBDB 640242）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QfQ8iKFjNgTW_4MKZxiQWe
          claim_id: c_RJYpXLPBiPAGfMkJoX7xXr
          source_id: s_HEfi3usTpB6Ld9dE6CKYAD
          stance: supports
          locator: CBDB:640242
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

# 王觀光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀光 | accepted |
| bio.summary | 王觀光，清人物。籍贯鄞縣，曾任典史。（中国历代人物传记资料库 CBDB 640242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀光（CBDB 640242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640242&o=json)
