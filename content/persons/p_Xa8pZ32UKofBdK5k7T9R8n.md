---
schema: wang-person/v1
id: p_Xa8pZ32UKofBdK5k7T9R8n
status: active
merged_into: null
display_name: 王瑞之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BnK2tMTkaPwLYTWmZaPqdj
        subject_person_id: p_Xa8pZ32UKofBdK5k7T9R8n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fcecsdNiZ21RJaEGB3fCHB
          claim_id: c_BnK2tMTkaPwLYTWmZaPqdj
          source_id: s_yJ5m8gX85Xk28KCjHVjNgr
          stance: supports
          locator: CBDB:72100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72100）
          source: &a1
            id: s_yJ5m8gX85Xk28KCjHVjNgr
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞之（CBDB 72100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72100&o=json
            external_identifier: CBDB:72100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7nH5VDKd8FMmV6QuMC3vnM
        subject_person_id: p_Xa8pZ32UKofBdK5k7T9R8n
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1698年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MYRLQ8az5dX1QGCBL9DRLN
          claim_id: c_7nH5VDKd8FMmV6QuMC3vnM
          source_id: s_yJ5m8gX85Xk28KCjHVjNgr
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
        id: c_nrP3RxdfGxRk7qrex1DH97
        subject_person_id: p_Xa8pZ32UKofBdK5k7T9R8n
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1746年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bddv31DUrVgXPAHH6GbY41
          claim_id: c_nrP3RxdfGxRk7qrex1DH97
          source_id: s_yJ5m8gX85Xk28KCjHVjNgr
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
        id: c_pqCYye9CRGibVRJUMXdFCU
        subject_person_id: p_Xa8pZ32UKofBdK5k7T9R8n
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
        - id: cs_Q7UpkzMbxryxVPyhBgLQNn
          claim_id: c_pqCYye9CRGibVRJUMXdFCU
          source_id: s_yJ5m8gX85Xk28KCjHVjNgr
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

# 王瑞之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞之 | accepted |
| birth.date | 1698年 | accepted |
| death.date | 1746年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞之（CBDB 72100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72100&o=json)
