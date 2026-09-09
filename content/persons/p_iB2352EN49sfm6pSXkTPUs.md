---
schema: wang-person/v1
id: p_iB2352EN49sfm6pSXkTPUs
status: active
merged_into: null
display_name: 王申伯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H7jeLW195CDCZ3E3s4Xa2m
        subject_person_id: p_iB2352EN49sfm6pSXkTPUs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王申伯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCW9VwaHpZ6GfWoDy4dKQt
          claim_id: c_H7jeLW195CDCZ3E3s4Xa2m
          source_id: s_f7Ld4QKHJzWMqxYyMh2MrQ
          stance: supports
          locator: CBDB:175690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175690）
          source: &a1
            id: s_f7Ld4QKHJzWMqxYyMh2MrQ
            source_type: api_record
            title: 中国历代人物传记资料库：王申伯（CBDB 175690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175690&o=json
            external_identifier: CBDB:175690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_krmzbX7tE35y1Ds83A198y
        subject_person_id: p_iB2352EN49sfm6pSXkTPUs
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
        - id: cs_soGpe6v7YmxSKKf5UE2jdR
          claim_id: c_krmzbX7tE35y1Ds83A198y
          source_id: s_f7Ld4QKHJzWMqxYyMh2MrQ
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
        id: c_edjx4EZ76W6ENYT1eMUmPR
        subject_person_id: p_iB2352EN49sfm6pSXkTPUs
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
        - id: cs_iFJNEUjov5TAo5qPZ8Nyn2
          claim_id: c_edjx4EZ76W6ENYT1eMUmPR
          source_id: s_f7Ld4QKHJzWMqxYyMh2MrQ
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

# 王申伯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王申伯 | accepted |
| death.date | 848年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王申伯（CBDB 175690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175690&o=json)
