---
schema: wang-person/v1
id: p_F8SHg1jghtRVYuUPgXkEsb
status: active
merged_into: null
display_name: 王一夔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JK3gD3nDttQk5CJA22MJt6
        subject_person_id: p_F8SHg1jghtRVYuUPgXkEsb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xoKsGFCTCsr39LJJha9fhR
          claim_id: c_JK3gD3nDttQk5CJA22MJt6
          source_id: s_mYFdB2AZEiw9KW11gdLcFC
          stance: supports
          locator: CBDB:67326
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67326）
          source: &a1
            id: s_mYFdB2AZEiw9KW11gdLcFC
            source_type: api_record
            title: 中国历代人物传记资料库：王一夔（CBDB 67326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67326&o=json
            external_identifier: CBDB:67326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hsAJamKV8MrkGM3JCG8A4C
        subject_person_id: p_F8SHg1jghtRVYuUPgXkEsb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iits97KtWwuQEaV9jPHrkF
          claim_id: c_hsAJamKV8MrkGM3JCG8A4C
          source_id: s_mYFdB2AZEiw9KW11gdLcFC
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
        id: c_qVV4vNGkLw5PZLNQ2CX8zT
        subject_person_id: p_F8SHg1jghtRVYuUPgXkEsb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4m6fXS9GwaJfPaSb2zcX8
          claim_id: c_qVV4vNGkLw5PZLNQ2CX8zT
          source_id: s_mYFdB2AZEiw9KW11gdLcFC
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
        id: c_1Me94UNM7v4AuNp9r81Hj1
        subject_person_id: p_F8SHg1jghtRVYuUPgXkEsb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHF2zibr7QznMZC6DvFLgF
          claim_id: c_1Me94UNM7v4AuNp9r81Hj1
          source_id: s_mYFdB2AZEiw9KW11gdLcFC
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
        id: c_SAlnyBCP197RIYMgzH9y-o
        subject_person_id: p_UdfLEMsJyH99khtJRw2xU3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F8SHg1jghtRVYuUPgXkEsb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qswjlk4BbKtDlKz5wRvmW4
          claim_id: c_SAlnyBCP197RIYMgzH9y-o
          source_id: s_mYFdB2AZEiw9KW11gdLcFC
          stance: supports
          locator: 南昌府志，Igid=1202886：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UdfLEMsJyH99khtJRw2xU3
        status: active
        display_name: 王仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一夔 | accepted |
| birth.date | 1425年 | accepted |
| death.date | 1487年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UdfLEMsJyH99khtJRw2xU3 | 王仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一夔（CBDB 67326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67326&o=json)
