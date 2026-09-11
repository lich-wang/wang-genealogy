---
schema: wang-person/v1
id: p_hDFMREoAKsPR8PPP7pBSx3
status: active
merged_into: null
display_name: 王用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uMv9U1BXKjsMZhTCNpysVE
        subject_person_id: p_hDFMREoAKsPR8PPP7pBSx3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yv72EQ6A7r1SfQZ2BB5cVi
          claim_id: c_uMv9U1BXKjsMZhTCNpysVE
          source_id: s_41kqBR2WDkg74A9agBsVJw
          stance: supports
          locator: CBDB:145498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145498）
          source: &a1
            id: s_41kqBR2WDkg74A9agBsVJw
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 145498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145498&o=json
            external_identifier: CBDB:145498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1joUjH62YQH3dYB7t957N5
        subject_person_id: p_hDFMREoAKsPR8PPP7pBSx3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_voqZU7Jp93gCj4PM4xnfqd
          claim_id: c_1joUjH62YQH3dYB7t957N5
          source_id: s_41kqBR2WDkg74A9agBsVJw
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
        id: c_W4JGNGFQpxevXcp1MRYGLU
        subject_person_id: p_hDFMREoAKsPR8PPP7pBSx3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 816年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EnuK9322jBoo615283JfFf
          claim_id: c_W4JGNGFQpxevXcp1MRYGLU
          source_id: s_41kqBR2WDkg74A9agBsVJw
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
        id: c_bbqLiJVeujNSiK5DUoaQ8T
        subject_person_id: p_hDFMREoAKsPR8PPP7pBSx3
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
        - id: cs_fRsnuJcEE9WDJ7ezTvUH5Z
          claim_id: c_bbqLiJVeujNSiK5DUoaQ8T
          source_id: s_41kqBR2WDkg74A9agBsVJw
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
        id: c_s03Gb9DzWwo7OuitccsOYZ
        subject_person_id: p_3cTtbkopLwtNgxN8eSzosJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hDFMREoAKsPR8PPP7pBSx3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7rqSuDy3y_k9dx7WurRkF8
          claim_id: c_s03Gb9DzWwo7OuitccsOYZ
          source_id: s_41kqBR2WDkg74A9agBsVJw
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3cTtbkopLwtNgxN8eSzosJ
        status: active
        display_name: 王子顏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| birth.date | 770年 | accepted |
| death.date | 816年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3cTtbkopLwtNgxN8eSzosJ | 王子顏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 145498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145498&o=json)
