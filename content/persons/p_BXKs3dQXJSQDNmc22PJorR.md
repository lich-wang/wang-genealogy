---
schema: wang-person/v1
id: p_BXKs3dQXJSQDNmc22PJorR
status: active
merged_into: null
display_name: 王說
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S1QJBBJf2YpANDJREiheV7
        subject_person_id: p_BXKs3dQXJSQDNmc22PJorR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王說
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2irYSTz1Uu7mu3sj4kiYmb
          claim_id: c_S1QJBBJf2YpANDJREiheV7
          source_id: s_yuqTKAkbW5EBk5a5LJPT8H
          stance: supports
          locator: CBDB:193394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193394）
          source: &a1
            id: s_yuqTKAkbW5EBk5a5LJPT8H
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 193394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193394&o=json
            external_identifier: CBDB:193394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_R6yQikuJVAZg3a4LsqnfB8
        subject_person_id: p_BXKs3dQXJSQDNmc22PJorR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 788年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Chr148DneQXTU3iiVF5Ctc
          claim_id: c_R6yQikuJVAZg3a4LsqnfB8
          source_id: s_yuqTKAkbW5EBk5a5LJPT8H
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
        id: c_UpaeJNbnR4o2gH5GbTzBrt
        subject_person_id: p_BXKs3dQXJSQDNmc22PJorR
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
        - id: cs_gLx2amAxFJHkusdBr9CTy8
          claim_id: c_UpaeJNbnR4o2gH5GbTzBrt
          source_id: s_yuqTKAkbW5EBk5a5LJPT8H
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
        id: c_0SOsYqglj8_ihQuhSerecB
        subject_person_id: p_4AQB7B6yE1sFykYmmaZuh8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BXKs3dQXJSQDNmc22PJorR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ir2kG4Ztf8DCqQtwpCjXx5
          claim_id: c_0SOsYqglj8_ihQuhSerecB
          source_id: s_wEoYHAq7oQPpjnuMCPqcSE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wEoYHAq7oQPpjnuMCPqcSE
            source_type: api_record
            title: 中国历代人物传记资料库：王道光（CBDB 193395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193395&o=json
            external_identifier: CBDB:193395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4AQB7B6yE1sFykYmmaZuh8
        status: active
        display_name: 王道光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王說

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王說 | accepted |
| death.date | 788年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4AQB7B6yE1sFykYmmaZuh8 | 王道光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道光（CBDB 193395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193395&o=json)
- [中国历代人物传记资料库：王說（CBDB 193394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193394&o=json)
