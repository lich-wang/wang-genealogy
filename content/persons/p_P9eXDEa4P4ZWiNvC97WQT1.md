---
schema: wang-person/v1
id: p_P9eXDEa4P4ZWiNvC97WQT1
status: active
merged_into: null
display_name: 王澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EWGMW8oWY5i9LPV567LRD7
        subject_person_id: p_P9eXDEa4P4ZWiNvC97WQT1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rAkmG1yqVEMvHNAdVBP44y
          claim_id: c_EWGMW8oWY5i9LPV567LRD7
          source_id: s_3SJ68CTJpWCBBM4PmgEr3w
          stance: supports
          locator: CBDB:329589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329589）
          source: &a1
            id: s_3SJ68CTJpWCBBM4PmgEr3w
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 329589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329589&o=json
            external_identifier: CBDB:329589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WJ16RsUDr2ZbJNNQMypQRZ
        subject_person_id: p_P9eXDEa4P4ZWiNvC97WQT1
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
        - id: cs_Q6ZsYSJq4Njk8dHv3qDg2p
          claim_id: c_WJ16RsUDr2ZbJNNQMypQRZ
          source_id: s_3SJ68CTJpWCBBM4PmgEr3w
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

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 329589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329589&o=json)
