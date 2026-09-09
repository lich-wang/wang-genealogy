---
schema: wang-person/v1
id: p_ZUmNFhhSJpUDa9NJ5u3omi
status: active
merged_into: null
display_name: 王士禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A8rCJskBCgp9VHQqRjxgjH
        subject_person_id: p_ZUmNFhhSJpUDa9NJ5u3omi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CTLE5idB57gc368LycYjxF
          claim_id: c_A8rCJskBCgp9VHQqRjxgjH
          source_id: s_Drwnm2Ehkjs55NEuD1BBxJ
          stance: supports
          locator: CBDB:35063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35063）
          source: &a1
            id: s_Drwnm2Ehkjs55NEuD1BBxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王士禎（CBDB 35063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35063&o=json
            external_identifier: CBDB:35063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9GxYNHCg2wG9bLN6z1zk1F
        subject_person_id: p_ZUmNFhhSJpUDa9NJ5u3omi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1634年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g3mGU2DTxQL59KhoDPQdsM
          claim_id: c_9GxYNHCg2wG9bLN6z1zk1F
          source_id: s_Drwnm2Ehkjs55NEuD1BBxJ
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
        id: c_W2b86JvvEsHboUgSKL6YoA
        subject_person_id: p_ZUmNFhhSJpUDa9NJ5u3omi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1711年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NdAvRXp331XJBBkJDFfBqz
          claim_id: c_W2b86JvvEsHboUgSKL6YoA
          source_id: s_Drwnm2Ehkjs55NEuD1BBxJ
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
        id: c_PFKHMcMEKMFvXqvAet3HW9
        subject_person_id: p_ZUmNFhhSJpUDa9NJ5u3omi
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
        - id: cs_X77UAgSduWjX6Cr7mmmsFp
          claim_id: c_PFKHMcMEKMFvXqvAet3HW9
          source_id: s_Drwnm2Ehkjs55NEuD1BBxJ
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

# 王士禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士禎 | accepted |
| birth.date | 1634年 | accepted |
| death.date | 1711年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士禎（CBDB 35063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35063&o=json)
