---
schema: wang-person/v1
id: p_tPUgnCgcYEK9UQZb7LHz1J
status: active
merged_into: null
display_name: 王紘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7jVP5D6HcsU1UcbByfJFCP
        subject_person_id: p_tPUgnCgcYEK9UQZb7LHz1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VfjNJ4vMSP8DjYR1qGqs8J
          claim_id: c_7jVP5D6HcsU1UcbByfJFCP
          source_id: s_TFJMdohDc8tQKimi9pQd42
          stance: supports
          locator: CBDB:56866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56866）
          source: &a1
            id: s_TFJMdohDc8tQKimi9pQd42
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 56866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56866&o=json
            external_identifier: CBDB:56866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K1hX93oZDgHEnTV3NZsXGT
        subject_person_id: p_tPUgnCgcYEK9UQZb7LHz1J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1670年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_43PDo2WrBgKZM7J8nQfpDL
          claim_id: c_K1hX93oZDgHEnTV3NZsXGT
          source_id: s_TFJMdohDc8tQKimi9pQd42
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kNpA9S4TMvsKbzyhNf4Ljo
        subject_person_id: p_tPUgnCgcYEK9UQZb7LHz1J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘（生于1670年），清人物。明清進士進士，籍贯膠州，入仕進士，曾任文選司員外郎。（中国历代人物传记资料库 CBDB 56866）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dEWdK8rIQxSSgZhRa5ZI1T
          claim_id: c_kNpA9S4TMvsKbzyhNf4Ljo
          source_id: s_TFJMdohDc8tQKimi9pQd42
          stance: supports
          locator: CBDB:56866
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

# 王紘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紘 | accepted |
| birth.date | 1670年 | accepted |
| bio.summary | 王紘（生于1670年），清人物。明清進士進士，籍贯膠州，入仕進士，曾任文選司員外郎。（中国历代人物传记资料库 CBDB 56866） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紘（CBDB 56866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56866&o=json)
