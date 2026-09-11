---
schema: wang-person/v1
id: p_dsvNgQDFVWqqs9SGFq9k5p
status: active
merged_into: null
display_name: 王文幹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rQmUB8JsW84VcCv4QuEEVg
        subject_person_id: p_dsvNgQDFVWqqs9SGFq9k5p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YYEjRnGVATAVxchCdcgCUf
          claim_id: c_rQmUB8JsW84VcCv4QuEEVg
          source_id: s_4BAJxoiAyuMveQqoydEvN3
          stance: supports
          locator: CBDB:101101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101101）
          source: &a1
            id: s_4BAJxoiAyuMveQqoydEvN3
            source_type: api_record
            title: 中国历代人物传记资料库：王文幹（CBDB 101101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101101&o=json
            external_identifier: CBDB:101101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4sVGoL3uwFaHkZuq793uhi
        subject_person_id: p_dsvNgQDFVWqqs9SGFq9k5p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_snkyzxjvvBqiLBHgAE9B2A
          claim_id: c_4sVGoL3uwFaHkZuq793uhi
          source_id: s_4BAJxoiAyuMveQqoydEvN3
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
        id: c_wXda1wAOnFjdTJj9C5tHyL
        subject_person_id: p_SthZvH6P3bJPbtHmDGY3Sq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dsvNgQDFVWqqs9SGFq9k5p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ep27uU8SQ710-bJtZ3Q1Tn
          claim_id: c_wXda1wAOnFjdTJj9C5tHyL
          source_id: s_4BAJxoiAyuMveQqoydEvN3
          stance: supports
          locator: 元人傳記資料索引，935：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SthZvH6P3bJPbtHmDGY3Sq
        status: active
        display_name: 王珍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文幹 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SthZvH6P3bJPbtHmDGY3Sq | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文幹（CBDB 101101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101101&o=json)
