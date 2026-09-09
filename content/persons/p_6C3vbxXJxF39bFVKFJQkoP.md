---
schema: wang-person/v1
id: p_6C3vbxXJxF39bFVKFJQkoP
status: active
merged_into: null
display_name: 王承慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sQFqdq77kSCNuTSuUNtbTW
        subject_person_id: p_6C3vbxXJxF39bFVKFJQkoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4PXjF1oMLcm817aK1RgcLB
          claim_id: c_sQFqdq77kSCNuTSuUNtbTW
          source_id: s_K8AkFvjundSsmv52GBKQmw
          stance: supports
          locator: CBDB:175682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175682）
          source: &a1
            id: s_K8AkFvjundSsmv52GBKQmw
            source_type: api_record
            title: 中国历代人物传记资料库：王承慶（CBDB 175682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175682&o=json
            external_identifier: CBDB:175682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xm1L1Hmejdi24D92mteion
        subject_person_id: p_6C3vbxXJxF39bFVKFJQkoP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 700年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iw68cHwjdMCDMvnCwbEeZR
          claim_id: c_xm1L1Hmejdi24D92mteion
          source_id: s_K8AkFvjundSsmv52GBKQmw
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
        id: c_6oQTZC1T6GxvCALiB9W6MA
        subject_person_id: p_6C3vbxXJxF39bFVKFJQkoP
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
        - id: cs_w9rgwdE3RHRQQEX5VNP2br
          claim_id: c_6oQTZC1T6GxvCALiB9W6MA
          source_id: s_K8AkFvjundSsmv52GBKQmw
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

# 王承慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承慶 | accepted |
| death.date | 700年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承慶（CBDB 175682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175682&o=json)
