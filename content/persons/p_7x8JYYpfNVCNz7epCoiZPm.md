---
schema: wang-person/v1
id: p_7x8JYYpfNVCNz7epCoiZPm
status: active
merged_into: null
display_name: 王廷輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x5KfgeLkC5PWABECEFC6BE
        subject_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EMrpkwiHv1vcp3GNB9DRDQ
          claim_id: c_x5KfgeLkC5PWABECEFC6BE
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
          stance: supports
          locator: CBDB:204965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204965）
          source: &a1
            id: s_3p6BBfq8bjfMZEGQHAGUKU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷輔（CBDB 204965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204965&o=json
            external_identifier: CBDB:204965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zrHMkvAWbP7PTGbF2kymcS
        subject_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S5iFPSvTJ6CF94kDSwTuwW
          claim_id: c_zrHMkvAWbP7PTGbF2kymcS
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
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
        id: c_Ar8ZqxTQ9S1Ggcmf21uj8F
        subject_person_id: p_7x8JYYpfNVCNz7epCoiZPm
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
        - id: cs_ofY8U5xAH2CHBGTi3Log1p
          claim_id: c_Ar8ZqxTQ9S1Ggcmf21uj8F
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
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

# 王廷輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷輔 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷輔（CBDB 204965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204965&o=json)
