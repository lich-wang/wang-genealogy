---
schema: wang-person/v1
id: p_QekMNcgGqmPdfnigDWL4MC
status: active
merged_into: null
display_name: 王翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GrtQiiYKggZAY3x89Xebvx
        subject_person_id: p_QekMNcgGqmPdfnigDWL4MC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4dr8pRAPA3sdbSRHPFVrk2
          claim_id: c_GrtQiiYKggZAY3x89Xebvx
          source_id: s_nF9Gm2T8HCNVR6nhXHE9aN
          stance: supports
          locator: CBDB:35495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35495）
          source: &a1
            id: s_nF9Gm2T8HCNVR6nhXHE9aN
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 35495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35495&o=json
            external_identifier: CBDB:35495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1gH4BvzH5EjbGgRoEDgn6n
        subject_person_id: p_QekMNcgGqmPdfnigDWL4MC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1333年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HPCCuKs9uCkezw2x26u1XJ
          claim_id: c_1gH4BvzH5EjbGgRoEDgn6n
          source_id: s_nF9Gm2T8HCNVR6nhXHE9aN
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
        id: c_4uQcE7bzHnKQf5cYx2obq5
        subject_person_id: p_QekMNcgGqmPdfnigDWL4MC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1378年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gP4fnLHwHAiDXoFGBdZGPk
          claim_id: c_4uQcE7bzHnKQf5cYx2obq5
          source_id: s_nF9Gm2T8HCNVR6nhXHE9aN
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
        id: c_spv1M53UF4tDbxP2XDEihx
        subject_person_id: p_QekMNcgGqmPdfnigDWL4MC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vg12P9HmHyDUJJCgc9hFJP
          claim_id: c_spv1M53UF4tDbxP2XDEihx
          source_id: s_nF9Gm2T8HCNVR6nhXHE9aN
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

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| birth.date | 1333年 | accepted |
| death.date | 1378年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 35495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35495&o=json)
