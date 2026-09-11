---
schema: wang-person/v1
id: p_8SA24u6HVRMSXrrhAKGK6o
status: active
merged_into: null
display_name: 王松年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k92Pn9Sm3kDSJFZE5i3ARc
        subject_person_id: p_8SA24u6HVRMSXrrhAKGK6o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VcBxNZQh3uCbUuW3m6Ex94
          claim_id: c_k92Pn9Sm3kDSJFZE5i3ARc
          source_id: s_CVEasmMfstoSTbzHRtjrcV
          stance: supports
          locator: CBDB:37674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37674）
          source: &a1
            id: s_CVEasmMfstoSTbzHRtjrcV
            source_type: api_record
            title: 中国历代人物传记资料库：王松年（CBDB 37674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37674&o=json
            external_identifier: CBDB:37674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5JoVnEFHEW5b2fzzuQPYbo
        subject_person_id: p_8SA24u6HVRMSXrrhAKGK6o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年，宋人物。籍贯臨川。（中国历代人物传记资料库 CBDB 37674）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aN0uIzJQ66fldbptCBmcSa
          claim_id: c_5JoVnEFHEW5b2fzzuQPYbo
          source_id: s_CVEasmMfstoSTbzHRtjrcV
          stance: supports
          locator: CBDB:37674
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

# 王松年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松年 | accepted |
| bio.summary | 王松年，宋人物。籍贯臨川。（中国历代人物传记资料库 CBDB 37674） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松年（CBDB 37674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37674&o=json)
