---
schema: wang-person/v1
id: p_mmCMTHXKoM3sDTwtCUF3kb
status: active
merged_into: null
display_name: 王克敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wWX5UZe1VogePknTH8U8vn
        subject_person_id: p_mmCMTHXKoM3sDTwtCUF3kb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e529TqjbMvpEiYESrsTWEg
          claim_id: c_wWX5UZe1VogePknTH8U8vn
          source_id: s_QRfNg7XqnZWEFxZT224FKc
          stance: supports
          locator: CBDB:101197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101197）
          source: &a1
            id: s_QRfNg7XqnZWEFxZT224FKc
            source_type: api_record
            title: 中国历代人物传记资料库：王克敬（CBDB 101197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101197&o=json
            external_identifier: CBDB:101197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A6wKCM77pNmHfv43SMyi5v
        subject_person_id: p_mmCMTHXKoM3sDTwtCUF3kb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5d9CSQHJQ4pNbJCztPJ2yj
          claim_id: c_A6wKCM77pNmHfv43SMyi5v
          source_id: s_QRfNg7XqnZWEFxZT224FKc
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
        id: c_zugfWt2zHqufPrJq3wtPvR
        subject_person_id: p_mmCMTHXKoM3sDTwtCUF3kb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1335年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SUpFCjJ11A2r8NyzfNFrnf
          claim_id: c_zugfWt2zHqufPrJq3wtPvR
          source_id: s_QRfNg7XqnZWEFxZT224FKc
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
        id: c_4qAPTcDwqKVb5Pz5Nn3Mo9
        subject_person_id: p_mmCMTHXKoM3sDTwtCUF3kb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克敬（1275年—1335年），元人物。籍贯大寧路，曾任海漕萬戶、吏部尚書、肅政廉訪司副使。（中国历代人物传记资料库 CBDB 101197）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SZLlu3rsaLFlvul2FenELa
          claim_id: c_4qAPTcDwqKVb5Pz5Nn3Mo9
          source_id: s_QRfNg7XqnZWEFxZT224FKc
          stance: supports
          locator: CBDB:101197
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ccsJK-g1ESyNGbOpgWjcDM
        subject_person_id: p_mmCMTHXKoM3sDTwtCUF3kb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wgKPBhuEbXUHScNeA5UKwJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rhf5cL8Rsy9OJc2zVKDil7
          claim_id: c_ccsJK-g1ESyNGbOpgWjcDM
          source_id: s_QRfNg7XqnZWEFxZT224FKc
          stance: supports
          locator: 元人傳記資料索引，572：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wgKPBhuEbXUHScNeA5UKwJ
        status: active
        display_name: 王時
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克敬 | accepted |
| birth.date | 1275年 | accepted |
| death.date | 1335年 | accepted |
| bio.summary | 王克敬（1275年—1335年），元人物。籍贯大寧路，曾任海漕萬戶、吏部尚書、肅政廉訪司副使。（中国历代人物传记资料库 CBDB 101197） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wgKPBhuEbXUHScNeA5UKwJ | 王時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克敬（CBDB 101197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101197&o=json)
