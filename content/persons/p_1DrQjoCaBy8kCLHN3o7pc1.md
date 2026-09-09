---
schema: wang-person/v1
id: p_1DrQjoCaBy8kCLHN3o7pc1
status: active
merged_into: null
display_name: 王頊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TMADyxeXfTcG2zNHAeBnHX
        subject_person_id: p_1DrQjoCaBy8kCLHN3o7pc1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7T35EM4tBkJ8734epS8w1f
          claim_id: c_TMADyxeXfTcG2zNHAeBnHX
          source_id: s_euKJkUcKyKvg5zCCtgzZRF
          stance: supports
          locator: CBDB:175804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175804）
          source: &a1
            id: s_euKJkUcKyKvg5zCCtgzZRF
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 175804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175804&o=json
            external_identifier: CBDB:175804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rm2LgBmKmZLfBRxS8cJcWm
        subject_person_id: p_1DrQjoCaBy8kCLHN3o7pc1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 711年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_577mpyKtcN1MqHMy253LY8
          claim_id: c_rm2LgBmKmZLfBRxS8cJcWm
          source_id: s_euKJkUcKyKvg5zCCtgzZRF
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
        id: c_f4z37CKZuemjWJUnc9jd4V
        subject_person_id: p_1DrQjoCaBy8kCLHN3o7pc1
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
        - id: cs_Coip4ftjE3MHWGZtG3nHu8
          claim_id: c_f4z37CKZuemjWJUnc9jd4V
          source_id: s_euKJkUcKyKvg5zCCtgzZRF
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

# 王頊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊 | accepted |
| death.date | 711年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頊（CBDB 175804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175804&o=json)
