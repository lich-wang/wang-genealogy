---
schema: wang-person/v1
id: p_iEHAUDfuL7tSdPpuW3tGoM
status: active
merged_into: null
display_name: 王密
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tMAqm6JYX2mrabDx3nqspo
        subject_person_id: p_iEHAUDfuL7tSdPpuW3tGoM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KSynXuhAaNxd3DNEeDLJJg
          claim_id: c_tMAqm6JYX2mrabDx3nqspo
          source_id: s_7jFNBMWfg9xzsKu5NFC8SZ
          stance: supports
          locator: CBDB:175944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175944）
          source: &a1
            id: s_7jFNBMWfg9xzsKu5NFC8SZ
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 175944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175944&o=json
            external_identifier: CBDB:175944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.213Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_48C7Ej4s194vC2pDL9UMV7
        subject_person_id: p_iEHAUDfuL7tSdPpuW3tGoM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y8f241WZSXPUPxuKRd9BHG
          claim_id: c_48C7Ej4s194vC2pDL9UMV7
          source_id: s_7jFNBMWfg9xzsKu5NFC8SZ
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
        id: c_D3iufduCMBLC49orcBExDa
        subject_person_id: p_iEHAUDfuL7tSdPpuW3tGoM
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
        - id: cs_8oDqHpwAi9Bao6uw11AtKJ
          claim_id: c_D3iufduCMBLC49orcBExDa
          source_id: s_7jFNBMWfg9xzsKu5NFC8SZ
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

# 王密

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王密 | accepted |
| death.date | 763年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王密（CBDB 175944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175944&o=json)
