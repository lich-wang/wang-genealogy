---
schema: wang-person/v1
id: p_iYGpqxDN2u7r5p3m4PctY2
status: active
merged_into: null
display_name: 王偵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDKQaPEGuahwyMqyC4Fz1C
        subject_person_id: p_iYGpqxDN2u7r5p3m4PctY2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZnQkjDoDVhcCuALy7zCKuT
          claim_id: c_SDKQaPEGuahwyMqyC4Fz1C
          source_id: s_Dxo897xi6Lv9E7eRMmU3sM
          stance: supports
          locator: CBDB:192979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192979）
          source: &a1
            id: s_Dxo897xi6Lv9E7eRMmU3sM
            source_type: api_record
            title: 中国历代人物传记资料库：王偵（CBDB 192979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192979&o=json
            external_identifier: CBDB:192979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1P6umyFpacja3LxX9n6nZX
        subject_person_id: p_iYGpqxDN2u7r5p3m4PctY2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 838年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2iAMhAepoTVhpSBgJbf2mF
          claim_id: c_1P6umyFpacja3LxX9n6nZX
          source_id: s_Dxo897xi6Lv9E7eRMmU3sM
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
        id: c_yDKXi2CXm3QiMhWZ1FTv62
        subject_person_id: p_iYGpqxDN2u7r5p3m4PctY2
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
        - id: cs_E6mKPYBR64ATFZYtdsmUyo
          claim_id: c_yDKXi2CXm3QiMhWZ1FTv62
          source_id: s_Dxo897xi6Lv9E7eRMmU3sM
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

# 王偵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偵 | accepted |
| death.date | 838年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偵（CBDB 192979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192979&o=json)
