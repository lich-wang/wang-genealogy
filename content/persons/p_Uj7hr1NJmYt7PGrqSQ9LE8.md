---
schema: wang-person/v1
id: p_Uj7hr1NJmYt7PGrqSQ9LE8
status: active
merged_into: null
display_name: 王忠植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vH17sWF9FAXWCd221tnPUP
        subject_person_id: p_Uj7hr1NJmYt7PGrqSQ9LE8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j4sMNH61yqDsYiDkjYRPDu
          claim_id: c_vH17sWF9FAXWCd221tnPUP
          source_id: s_TZbDGqSJmbrQcQV5WfDha9
          stance: supports
          locator: CBDB:37658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37658）
          source: &a1
            id: s_TZbDGqSJmbrQcQV5WfDha9
            source_type: api_record
            title: 中国历代人物传记资料库：王忠植（CBDB 37658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37658&o=json
            external_identifier: CBDB:37658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5QG2Boq8JurSp8kHrZZHB7
        subject_person_id: p_Uj7hr1NJmYt7PGrqSQ9LE8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1139年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HSgvuW1s566BuHftd3uHNj
          claim_id: c_5QG2Boq8JurSp8kHrZZHB7
          source_id: s_TZbDGqSJmbrQcQV5WfDha9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Av4iJYP5HE38V4XXxamR9M
        subject_person_id: p_Uj7hr1NJmYt7PGrqSQ9LE8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YHTwnvNfG8vm1pKkGgy84o
          claim_id: c_Av4iJYP5HE38V4XXxamR9M
          source_id: s_TZbDGqSJmbrQcQV5WfDha9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王忠植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠植 | accepted |
| death.date | 1139年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠植（CBDB 37658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37658&o=json)
