---
schema: wang-person/v1
id: p_QdMZcHh5PUCoyP261s1q4H
status: active
merged_into: null
display_name: 王聖時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1rmFRAQ5e89vBcJZAkbnV7
        subject_person_id: p_QdMZcHh5PUCoyP261s1q4H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聖時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J2Xc5s6FuuXVKfesqhTLKQ
          claim_id: c_1rmFRAQ5e89vBcJZAkbnV7
          source_id: s_d6ch1kGq6VJeMAcMiVHASb
          stance: supports
          locator: CBDB:71515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71515）
          source: &a1
            id: s_d6ch1kGq6VJeMAcMiVHASb
            source_type: api_record
            title: 中国历代人物传记资料库：王聖時（CBDB 71515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71515&o=json
            external_identifier: CBDB:71515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7TSguEWerf6AJ7GoEod6HZ
        subject_person_id: p_QdMZcHh5PUCoyP261s1q4H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1638年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8uMpJEQztmtsPu39BxGvvf
          claim_id: c_7TSguEWerf6AJ7GoEod6HZ
          source_id: s_d6ch1kGq6VJeMAcMiVHASb
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
        id: c_QdFHrm6XNZGN6YdiPFJLF8
        subject_person_id: p_QdMZcHh5PUCoyP261s1q4H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聖時（生于1638年），清人物。籍贯南靖。（中国历代人物传记资料库 CBDB 71515）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qW-uGXoHy8bNHYRh5YadcS
          claim_id: c_QdFHrm6XNZGN6YdiPFJLF8
          source_id: s_d6ch1kGq6VJeMAcMiVHASb
          stance: supports
          locator: CBDB:71515
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

# 王聖時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聖時 | accepted |
| birth.date | 1638年 | accepted |
| bio.summary | 王聖時（生于1638年），清人物。籍贯南靖。（中国历代人物传记资料库 CBDB 71515） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聖時（CBDB 71515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71515&o=json)
