---
schema: wang-person/v1
id: p_LWLQAAygWaEY7KTdrANM9W
status: active
merged_into: null
display_name: 王世耀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJy4BAdeLCDLDGATitb1mH
        subject_person_id: p_LWLQAAygWaEY7KTdrANM9W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yq5FGezF2n53WxBduS66NE
          claim_id: c_AJy4BAdeLCDLDGATitb1mH
          source_id: s_HnX7StBDEQNZE4sZezSTDD
          stance: supports
          locator: CBDB:71478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71478）
          source: &a1
            id: s_HnX7StBDEQNZE4sZezSTDD
            source_type: api_record
            title: 中国历代人物传记资料库：王世耀（CBDB 71478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71478&o=json
            external_identifier: CBDB:71478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bGHy6rFr7gYG2y8igmLaYg
        subject_person_id: p_LWLQAAygWaEY7KTdrANM9W
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kKawex6kj3be868JiAKUq1
          claim_id: c_bGHy6rFr7gYG2y8igmLaYg
          source_id: s_HnX7StBDEQNZE4sZezSTDD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GCy8NV4yFb6ZoRz4P8Pvjg
        subject_person_id: p_LWLQAAygWaEY7KTdrANM9W
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DWXEprYikjev9SpLjwN4tF
          claim_id: c_GCy8NV4yFb6ZoRz4P8Pvjg
          source_id: s_HnX7StBDEQNZE4sZezSTDD
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
        id: c_3PGUPFYubCnXyYj6LsvqqY
        subject_person_id: p_LWLQAAygWaEY7KTdrANM9W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FkSLwGoYNh9d8oCC5Uiic9
          claim_id: c_3PGUPFYubCnXyYj6LsvqqY
          source_id: s_HnX7StBDEQNZE4sZezSTDD
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

# 王世耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世耀 | accepted |
| birth.date | 1781年 | accepted |
| death.date | 1859年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世耀（CBDB 71478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71478&o=json)
