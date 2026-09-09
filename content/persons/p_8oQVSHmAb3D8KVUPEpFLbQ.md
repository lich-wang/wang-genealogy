---
schema: wang-person/v1
id: p_8oQVSHmAb3D8KVUPEpFLbQ
status: active
merged_into: null
display_name: 王勖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rh2EQByBVCPZV6nvEHc8yc
        subject_person_id: p_8oQVSHmAb3D8KVUPEpFLbQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h4JounLV9zt3yncUqFBrea
          claim_id: c_rh2EQByBVCPZV6nvEHc8yc
          source_id: s_tBjiNR81jdnp5BES3XmqsT
          stance: supports
          locator: CBDB:169733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169733）
          source: &a1
            id: s_tBjiNR81jdnp5BES3XmqsT
            source_type: api_record
            title: 中国历代人物传记资料库：王勖（CBDB 169733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169733&o=json
            external_identifier: CBDB:169733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rQRwCSJUrRfGJspsD9mDGt
        subject_person_id: p_8oQVSHmAb3D8KVUPEpFLbQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 780年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iRvKfiLWbofXfwJ2rHwzDK
          claim_id: c_rQRwCSJUrRfGJspsD9mDGt
          source_id: s_tBjiNR81jdnp5BES3XmqsT
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
        id: c_zWWsXxzdA3825kVXb4uxSi
        subject_person_id: p_8oQVSHmAb3D8KVUPEpFLbQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bnFDD1NGPmQ98PpWNeV2k7
          claim_id: c_zWWsXxzdA3825kVXb4uxSi
          source_id: s_tBjiNR81jdnp5BES3XmqsT
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

# 王勖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勖 | accepted |
| death.date | 780年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勖（CBDB 169733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169733&o=json)
