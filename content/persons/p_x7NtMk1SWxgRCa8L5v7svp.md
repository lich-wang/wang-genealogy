---
schema: wang-person/v1
id: p_x7NtMk1SWxgRCa8L5v7svp
status: active
merged_into: null
display_name: 王廷選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7UbDtEFZ8eR3y7R4kQ78Hv
        subject_person_id: p_x7NtMk1SWxgRCa8L5v7svp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6gYd8ocwUc6P2TeuGrfQsF
          claim_id: c_7UbDtEFZ8eR3y7R4kQ78Hv
          source_id: s_YoGM8tsQUyKaNKNNmD8TzX
          stance: supports
          locator: CBDB:466639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466639）
          source: &a1
            id: s_YoGM8tsQUyKaNKNNmD8TzX
            source_type: api_record
            title: 中国历代人物传记资料库：王廷選（CBDB 466639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466639&o=json
            external_identifier: CBDB:466639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rGdrfsHJFNRYtYQoktaaTv
        subject_person_id: p_x7NtMk1SWxgRCa8L5v7svp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷選，清人物。曾任知州。（中国历代人物传记资料库 CBDB 466639）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hzwmOYQHWxlCj2hPcOPrH6
          claim_id: c_rGdrfsHJFNRYtYQoktaaTv
          source_id: s_YoGM8tsQUyKaNKNNmD8TzX
          stance: supports
          locator: CBDB:466639
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

# 王廷選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷選 | accepted |
| bio.summary | 王廷選，清人物。曾任知州。（中国历代人物传记资料库 CBDB 466639） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷選（CBDB 466639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466639&o=json)
