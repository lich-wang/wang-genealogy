---
schema: wang-person/v1
id: p_JhEDDi9wLv7DzErniU4ZVB
status: active
merged_into: null
display_name: 王卿雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FTp8DTA79QZUevdQ8zMTh3
        subject_person_id: p_JhEDDi9wLv7DzErniU4ZVB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_huAHqQ67w5uXze2NaXBt9Z
          claim_id: c_FTp8DTA79QZUevdQ8zMTh3
          source_id: s_nrxqPfZ9cEiU2BrYAUDo6n
          stance: supports
          locator: CBDB:543649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543649）
          source: &a1
            id: s_nrxqPfZ9cEiU2BrYAUDo6n
            source_type: api_record
            title: 中国历代人物传记资料库：王卿雲（CBDB 543649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543649&o=json
            external_identifier: CBDB:543649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GejFyLMw8NdEmLT2gYnRmH
        subject_person_id: p_JhEDDi9wLv7DzErniU4ZVB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿雲，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 543649）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TjyqaNmDLtqgDyq5KjvXpi
          claim_id: c_GejFyLMw8NdEmLT2gYnRmH
          source_id: s_nrxqPfZ9cEiU2BrYAUDo6n
          stance: supports
          locator: CBDB:543649
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

# 王卿雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卿雲 | accepted |
| bio.summary | 王卿雲，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 543649） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卿雲（CBDB 543649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543649&o=json)
