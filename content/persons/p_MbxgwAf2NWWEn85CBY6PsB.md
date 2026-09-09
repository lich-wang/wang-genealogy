---
schema: wang-person/v1
id: p_MbxgwAf2NWWEn85CBY6PsB
status: active
merged_into: null
display_name: 王叔寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CsaSLZSKVFupUXeKtEpe7F
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r2AkwCTA41ytW84QZ74x6T
          claim_id: c_CsaSLZSKVFupUXeKtEpe7F
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
          stance: supports
          locator: CBDB:145015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145015）
          source: &a1
            id: s_Q1iPSuwmWyCAdnQoNLNRij
            source_type: api_record
            title: 中国历代人物传记资料库：王叔寧（CBDB 145015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145015&o=json
            external_identifier: CBDB:145015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YiftPt5KueVB2wkZhMrHCq
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZp9BtAqu3ZDHxL6WB1jJ1
          claim_id: c_YiftPt5KueVB2wkZhMrHCq
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
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
        id: c_Gz2v2iWWCMeeERKEV33jvb
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zx3QDX3Z8SKrqgMVuuSbyZ
          claim_id: c_Gz2v2iWWCMeeERKEV33jvb
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
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
        id: c_Qj5B7UhWV6e5c85qXv4HQ7
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
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
        - id: cs_bnA1SE69G9uP1ky5C4pss9
          claim_id: c_Qj5B7UhWV6e5c85qXv4HQ7
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
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

# 王叔寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔寧 | accepted |
| birth.date | 770年 | accepted |
| death.date | 848年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔寧（CBDB 145015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145015&o=json)
