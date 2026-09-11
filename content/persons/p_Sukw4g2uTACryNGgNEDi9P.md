---
schema: wang-person/v1
id: p_Sukw4g2uTACryNGgNEDi9P
status: active
merged_into: null
display_name: 王仁恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fhNPU37K5Bke5DP3MmAH72
        subject_person_id: p_Sukw4g2uTACryNGgNEDi9P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GWH6WHUVFFCzjkKXK7RVbn
          claim_id: c_fhNPU37K5Bke5DP3MmAH72
          source_id: s_hYkMjAZKfNdfqPK3aVYapg
          stance: supports
          locator: CBDB:444901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（444901）
          source: &a1
            id: s_hYkMjAZKfNdfqPK3aVYapg
            source_type: api_record
            title: 中国历代人物传记资料库：王仁恭（CBDB 444901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444901&o=json
            external_identifier: CBDB:444901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JXpvFG7ZrXxGUN5pHBorC9
        subject_person_id: p_Sukw4g2uTACryNGgNEDi9P
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 557年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zA9Nw8853UGeJuZ6ES3pJ1
          claim_id: c_JXpvFG7ZrXxGUN5pHBorC9
          source_id: s_hYkMjAZKfNdfqPK3aVYapg
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
        id: c_sXQmHQGKPkajWEQ8sA62dA
        subject_person_id: p_Sukw4g2uTACryNGgNEDi9P
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 617年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9K1z5ok7B3WG5WCzbEHed3
          claim_id: c_sXQmHQGKPkajWEQ8sA62dA
          source_id: s_hYkMjAZKfNdfqPK3aVYapg
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
        id: c_6D3fqBts5tqADRQfKeBo9y
        subject_person_id: p_Sukw4g2uTACryNGgNEDi9P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁恭（557年—617年），隋人物。籍贯馬邑，曾任太守。（中国历代人物传记资料库 CBDB 444901）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jWhR1OfaJObiDGOGLfPwwG
          claim_id: c_6D3fqBts5tqADRQfKeBo9y
          source_id: s_hYkMjAZKfNdfqPK3aVYapg
          stance: supports
          locator: CBDB:444901
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

# 王仁恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁恭 | accepted |
| birth.date | 557年 | accepted |
| death.date | 617年 | accepted |
| bio.summary | 王仁恭（557年—617年），隋人物。籍贯馬邑，曾任太守。（中国历代人物传记资料库 CBDB 444901） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁恭（CBDB 444901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444901&o=json)
