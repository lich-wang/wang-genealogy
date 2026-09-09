---
schema: wang-person/v1
id: p_gdNRdstsWqGb9H7fsu9HoT
status: active
merged_into: null
display_name: 王溶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_98geUhAgx2DeBthUbQ2vjL
        subject_person_id: p_gdNRdstsWqGb9H7fsu9HoT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PjkUn9icnNQxi9nPrEqshE
          claim_id: c_98geUhAgx2DeBthUbQ2vjL
          source_id: s_7rLXdnPqTxgFb2L3JVKQ8t
          stance: supports
          locator: CBDB:692426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692426）
          source: &a1
            id: s_7rLXdnPqTxgFb2L3JVKQ8t
            source_type: api_record
            title: 中国历代人物传记资料库：王溶（CBDB 692426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692426&o=json
            external_identifier: CBDB:692426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cDbAN835A8CLn6RZC3EP3s
        subject_person_id: p_gdNRdstsWqGb9H7fsu9HoT
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
        - id: cs_Z69gxF832dBHVfetQVSMXM
          claim_id: c_cDbAN835A8CLn6RZC3EP3s
          source_id: s_7rLXdnPqTxgFb2L3JVKQ8t
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

# 王溶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溶 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溶（CBDB 692426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692426&o=json)
