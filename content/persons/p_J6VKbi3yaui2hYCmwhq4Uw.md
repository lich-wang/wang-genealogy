---
schema: wang-person/v1
id: p_J6VKbi3yaui2hYCmwhq4Uw
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GAC1FinRMNBYfJb3jrEjY8
        subject_person_id: p_J6VKbi3yaui2hYCmwhq4Uw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oJjjRqyDrjeecCxnn2s6r6
          claim_id: c_GAC1FinRMNBYfJb3jrEjY8
          source_id: s_MVNjoEH3DcrgyhFuDrnZzd
          stance: supports
          locator: CBDB:100887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100887）
          source: &a1
            id: s_MVNjoEH3DcrgyhFuDrnZzd
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 100887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100887&o=json
            external_identifier: CBDB:100887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2msdMY176iKyLPcoDyWBaN
        subject_person_id: p_J6VKbi3yaui2hYCmwhq4Uw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1227年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UkrkJLDCAEMD6KfZGKmNh
          claim_id: c_2msdMY176iKyLPcoDyWBaN
          source_id: s_MVNjoEH3DcrgyhFuDrnZzd
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
        id: c_wQ4fA8bM76Ls9QfJC6WC7B
        subject_person_id: p_J6VKbi3yaui2hYCmwhq4Uw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1296年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kw3rhB4gDReYpEdiVtu3es
          claim_id: c_wQ4fA8bM76Ls9QfJC6WC7B
          source_id: s_MVNjoEH3DcrgyhFuDrnZzd
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
        id: c_3FHq7uAjpafr92k46ssDgr
        subject_person_id: p_J6VKbi3yaui2hYCmwhq4Uw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_miiLvj2A38nT5ju8tM4MNy
          claim_id: c_3FHq7uAjpafr92k46ssDgr
          source_id: s_MVNjoEH3DcrgyhFuDrnZzd
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

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| birth.date | 1227年 | accepted |
| death.date | 1296年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 100887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100887&o=json)
