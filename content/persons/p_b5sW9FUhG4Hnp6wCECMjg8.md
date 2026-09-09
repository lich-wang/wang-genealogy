---
schema: wang-person/v1
id: p_b5sW9FUhG4Hnp6wCECMjg8
status: active
merged_into: null
display_name: 王仁睿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vc39iZoMEZqL5iQWEWLAFr
        subject_person_id: p_b5sW9FUhG4Hnp6wCECMjg8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uGPdDF4KZuwMgPhHRWTMc2
          claim_id: c_vc39iZoMEZqL5iQWEWLAFr
          source_id: s_EsbD9rgfNxnxUSST7nty3S
          stance: supports
          locator: CBDB:38323
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38323）
          source: &a1
            id: s_EsbD9rgfNxnxUSST7nty3S
            source_type: api_record
            title: 中国历代人物传记资料库：王仁睿（CBDB 38323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38323&o=json
            external_identifier: CBDB:38323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EmFPkZ68L1ZaJ8gSWU5dy4
        subject_person_id: p_b5sW9FUhG4Hnp6wCECMjg8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 947年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4s6DzVtREtSNDfcHFrSkyc
          claim_id: c_EmFPkZ68L1ZaJ8gSWU5dy4
          source_id: s_EsbD9rgfNxnxUSST7nty3S
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
        id: c_z6DBrujPH2vThZBKdjZ7Ev
        subject_person_id: p_b5sW9FUhG4Hnp6wCECMjg8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 987年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xx7HU4NMMXD7ebueMNeJcW
          claim_id: c_z6DBrujPH2vThZBKdjZ7Ev
          source_id: s_EsbD9rgfNxnxUSST7nty3S
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
        id: c_QmUV4nBpcH9Mw1fNCFycw4
        subject_person_id: p_b5sW9FUhG4Hnp6wCECMjg8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ktPr1QXgMQJ14R5M7Cf67c
          claim_id: c_QmUV4nBpcH9Mw1fNCFycw4
          source_id: s_EsbD9rgfNxnxUSST7nty3S
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

# 王仁睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁睿 | accepted |
| birth.date | 947年 | accepted |
| death.date | 987年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁睿（CBDB 38323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38323&o=json)
