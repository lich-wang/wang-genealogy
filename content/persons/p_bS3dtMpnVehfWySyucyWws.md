---
schema: wang-person/v1
id: p_bS3dtMpnVehfWySyucyWws
status: active
merged_into: null
display_name: 王挺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Ew7dW2484fLEwaABRVUEx
        subject_person_id: p_bS3dtMpnVehfWySyucyWws
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z43nfCxzgbQ8s63AuBMeeQ
          claim_id: c_4Ew7dW2484fLEwaABRVUEx
          source_id: s_vu8ahQKErAMsr76Qpmm1AL
          stance: supports
          locator: CBDB:470645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470645）
          source: &a1
            id: s_vu8ahQKErAMsr76Qpmm1AL
            source_type: api_record
            title: 中国历代人物传记资料库：王挺（CBDB 470645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470645&o=json
            external_identifier: CBDB:470645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4FkVmCT78HdZZLtCDmX5bc
        subject_person_id: p_bS3dtMpnVehfWySyucyWws
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挺，明人物。曾任兵備道。（中国历代人物传记资料库 CBDB 470645）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2_NdWyLLcW5qGpXjdZhz_t
          claim_id: c_4FkVmCT78HdZZLtCDmX5bc
          source_id: s_vu8ahQKErAMsr76Qpmm1AL
          stance: supports
          locator: CBDB:470645
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

# 王挺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王挺 | accepted |
| bio.summary | 王挺，明人物。曾任兵備道。（中国历代人物传记资料库 CBDB 470645） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王挺（CBDB 470645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470645&o=json)
