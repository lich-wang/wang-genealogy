---
schema: wang-person/v1
id: p_DaZmVSxcHscCPPmgy5iJxb
status: active
merged_into: null
display_name: 王俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bFP69a26QaaTw35YjyuLTA
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zzQkNmoK4xoee4SehEXwiF
          claim_id: c_bFP69a26QaaTw35YjyuLTA
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
          stance: supports
          locator: CBDB:143262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143262）
          source: &a1
            id: s_dh4zjkmv1XJFeJpicRWdiq
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 143262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143262&o=json
            external_identifier: CBDB:143262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E6PYNoQD1FxuANhBGBuKGS
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 729年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BZe2iCTz9HaAz8HQg8rxZe
          claim_id: c_E6PYNoQD1FxuANhBGBuKGS
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
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
        id: c_AjSTcmBnrTfvdDaMmmRCqQ
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 811年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nUggDh3xZqAnmgJkbBV77g
          claim_id: c_AjSTcmBnrTfvdDaMmmRCqQ
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
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
        id: c_3wFgsTaTQntrW8rpzJKeBu
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
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
        - id: cs_76cFQLECtSkYrs1nP2RaF2
          claim_id: c_3wFgsTaTQntrW8rpzJKeBu
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
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

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| birth.date | 729年 | accepted |
| death.date | 811年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 143262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143262&o=json)
