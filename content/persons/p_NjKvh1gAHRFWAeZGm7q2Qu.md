---
schema: wang-person/v1
id: p_NjKvh1gAHRFWAeZGm7q2Qu
status: active
merged_into: null
display_name: 王翃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ajmQHi4LYg95xZxfJVpP61
        subject_person_id: p_NjKvh1gAHRFWAeZGm7q2Qu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4yGRVMDBmWhh2JMYgVDDGC
          claim_id: c_ajmQHi4LYg95xZxfJVpP61
          source_id: s_fUujAAtWZQ1QCa8QZ22CgX
          stance: supports
          locator: CBDB:190098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190098）
          source: &a1
            id: s_fUujAAtWZQ1QCa8QZ22CgX
            source_type: api_record
            title: 中国历代人物传记资料库：王翃（CBDB 190098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190098&o=json
            external_identifier: CBDB:190098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uUDYsA5KgwtbixiVGfQw8p
        subject_person_id: p_NjKvh1gAHRFWAeZGm7q2Qu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 905年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MP29ovd94YzNDRf7UXJnMX
          claim_id: c_uUDYsA5KgwtbixiVGfQw8p
          source_id: s_fUujAAtWZQ1QCa8QZ22CgX
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
        id: c_r5MyKBcDkZN1spNzqv8H2u
        subject_person_id: p_NjKvh1gAHRFWAeZGm7q2Qu
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
        - id: cs_pYeU7QEd3LABUHPLsVL5Ad
          claim_id: c_r5MyKBcDkZN1spNzqv8H2u
          source_id: s_fUujAAtWZQ1QCa8QZ22CgX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Yl7U0XM3QapUu9tWTkR15O
        subject_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NjKvh1gAHRFWAeZGm7q2Qu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ByD3BhmFI1_jmYSm27Xvce
          claim_id: c_Yl7U0XM3QapUu9tWTkR15O
          source_id: s_4S8Kd5TDMrbhTNCMBEsEfc
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4S8Kd5TDMrbhTNCMBEsEfc
            source_type: api_record
            title: 中国历代人物传记资料库：王融（CBDB 145104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145104&o=json
            external_identifier: CBDB:145104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        status: active
        display_name: 王融
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翃 | accepted |
| death.date | 905年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B4g9ZTU3Y9aTiDR5uH3rn2 | 王融 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翃（CBDB 190098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190098&o=json)
- [中国历代人物传记资料库：王融（CBDB 145104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145104&o=json)
