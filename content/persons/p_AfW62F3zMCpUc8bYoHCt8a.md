---
schema: wang-person/v1
id: p_AfW62F3zMCpUc8bYoHCt8a
status: active
merged_into: null
display_name: 王仁行
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YX6Taoh7KyeQHVQss6aB6J
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hrt3tm8RYmuqYDBehNbzaR
          claim_id: c_YX6Taoh7KyeQHVQss6aB6J
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
          stance: supports
          locator: CBDB:142968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142968）
          source: &a1
            id: s_Q6AK9A4LpZZRFBraMQXXtb
            source_type: api_record
            title: 中国历代人物传记资料库：王仁行（CBDB 142968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142968&o=json
            external_identifier: CBDB:142968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kZ9Uk5Tppu6aKE7sGecGTG
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 647年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cqCqzQmu51MkazrxEQe4fC
          claim_id: c_kZ9Uk5Tppu6aKE7sGecGTG
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
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
        id: c_7vveVTLZduyDJavfyVUGEM
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 729年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCPMtt8kGA3FFNqQkxWMTQ
          claim_id: c_7vveVTLZduyDJavfyVUGEM
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
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
        id: c_Hdr7C9mA8dEDQi71sSzaV1
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
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
        - id: cs_1oG3T1H7i1e2Nho7NAt2qH
          claim_id: c_Hdr7C9mA8dEDQi71sSzaV1
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
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

# 王仁行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁行 | accepted |
| birth.date | 647年 | accepted |
| death.date | 729年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁行（CBDB 142968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142968&o=json)
