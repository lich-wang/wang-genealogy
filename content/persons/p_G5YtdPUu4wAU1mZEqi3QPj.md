---
schema: wang-person/v1
id: p_G5YtdPUu4wAU1mZEqi3QPj
status: active
merged_into: null
display_name: 王汝安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nuFXRSHRh36Dqp6c5FDvY9
        subject_person_id: p_G5YtdPUu4wAU1mZEqi3QPj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tGBiEZddLBEBubFcE3n5oA
          claim_id: c_nuFXRSHRh36Dqp6c5FDvY9
          source_id: s_bGwVJ176xgywNMHNMzZHfK
          stance: supports
          locator: CBDB:494728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494728）
          source: &a1
            id: s_bGwVJ176xgywNMHNMzZHfK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝安（CBDB 494728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494728&o=json
            external_identifier: CBDB:494728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G9C2gMkPETUDHrBwtt37wW
        subject_person_id: p_G5YtdPUu4wAU1mZEqi3QPj
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
        - id: cs_iKFPF4N4fJTuWUpHHCN5tm
          claim_id: c_G9C2gMkPETUDHrBwtt37wW
          source_id: s_bGwVJ176xgywNMHNMzZHfK
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

# 王汝安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝安 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝安（CBDB 494728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494728&o=json)
