---
schema: wang-person/v1
id: p_a9S5fBakXya92n8LQvcA3E
status: active
merged_into: null
display_name: 王履仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EnKfEx2E2KeXpDgBCGh9Rn
        subject_person_id: p_a9S5fBakXya92n8LQvcA3E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S5TnUhRJMAv6KBpN6d8F1g
          claim_id: c_EnKfEx2E2KeXpDgBCGh9Rn
          source_id: s_vboDUKe5Bmot8LGHAXPFDL
          stance: supports
          locator: CBDB:175759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175759）
          source: &a1
            id: s_vboDUKe5Bmot8LGHAXPFDL
            source_type: api_record
            title: 中国历代人物传记资料库：王履仁（CBDB 175759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175759&o=json
            external_identifier: CBDB:175759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mK8qnKMSJRDKhQbgdDuzDG
        subject_person_id: p_a9S5fBakXya92n8LQvcA3E
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 706年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PfDnJGAJErFChdR5cBS5JB
          claim_id: c_mK8qnKMSJRDKhQbgdDuzDG
          source_id: s_vboDUKe5Bmot8LGHAXPFDL
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
        id: c_kQFSN3wFQUTf7QPPKrMyae
        subject_person_id: p_a9S5fBakXya92n8LQvcA3E
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
        - id: cs_LuU1dTMJJFDPVoCL7vxBbT
          claim_id: c_kQFSN3wFQUTf7QPPKrMyae
          source_id: s_vboDUKe5Bmot8LGHAXPFDL
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
        id: c_XlPdy3d23d9rOTODmW7Z0P
        subject_person_id: p_XLytFyo2bEJHH5N4cVSyQc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a9S5fBakXya92n8LQvcA3E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ar1h5CxmyKThCChBFqxFFq
          claim_id: c_XlPdy3d23d9rOTODmW7Z0P
          source_id: s_vboDUKe5Bmot8LGHAXPFDL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XLytFyo2bEJHH5N4cVSyQc
        status: active
        display_name: 王約
        merged_into_person_id: null
  children:
    - claim:
        id: c_6h1IwfS8Hxpm3swBeY7a9O
        subject_person_id: p_a9S5fBakXya92n8LQvcA3E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ah2M8P7hdEnYgAQ2Tp5XS1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7vKL664_7HQa6QXGHTA02P
          claim_id: c_6h1IwfS8Hxpm3swBeY7a9O
          source_id: s_vboDUKe5Bmot8LGHAXPFDL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ah2M8P7hdEnYgAQ2Tp5XS1
        status: active
        display_name: 王省躬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王履仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履仁 | accepted |
| death.date | 706年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLytFyo2bEJHH5N4cVSyQc | 王約 | accepted |
| children | p_ah2M8P7hdEnYgAQ2Tp5XS1 | 王省躬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王履仁（CBDB 175759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175759&o=json)
