---
schema: wang-person/v1
id: p_2GmJDKe94vMiSnM8XxeiCs
status: active
merged_into: null
display_name: 王剁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dxa1HuUZEXFZfYjGbph7aj
        subject_person_id: p_2GmJDKe94vMiSnM8XxeiCs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LFTUNdNpZ51hy3LhDFRVmX
          claim_id: c_Dxa1HuUZEXFZfYjGbph7aj
          source_id: s_4pDnGcw27t6txJV1LVNrW7
          stance: supports
          locator: CBDB:145249
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145249）
          source: &a1
            id: s_4pDnGcw27t6txJV1LVNrW7
            source_type: api_record
            title: 中国历代人物传记资料库：王剁（CBDB 145249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145249&o=json
            external_identifier: CBDB:145249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1nh5xcogWUt2ZgK8Zr8YD1
        subject_person_id: p_2GmJDKe94vMiSnM8XxeiCs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 795年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nu7r8MA9oRG9VKpCTRMBs6
          claim_id: c_1nh5xcogWUt2ZgK8Zr8YD1
          source_id: s_4pDnGcw27t6txJV1LVNrW7
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
        id: c_wtmo4jnKZgZbpox5EPCBo9
        subject_person_id: p_2GmJDKe94vMiSnM8XxeiCs
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
        - id: cs_5vURBr6SbaxT5E67i7tiJQ
          claim_id: c_wtmo4jnKZgZbpox5EPCBo9
          source_id: s_4pDnGcw27t6txJV1LVNrW7
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
        id: c_a2r6irF9WuZ3kDyTfd65wH
        subject_person_id: p_2GmJDKe94vMiSnM8XxeiCs
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
        - id: cs_4ER2TuqecVaFf78o5HAeAh
          claim_id: c_a2r6irF9WuZ3kDyTfd65wH
          source_id: s_4pDnGcw27t6txJV1LVNrW7
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
        id: c_bO2tMLjo-AoqTy5VJjH2cK
        subject_person_id: p_nxBAZr28DeuBqx5PPMgaj5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2GmJDKe94vMiSnM8XxeiCs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TeoDivGVIhDMp-ELoQajUF
          claim_id: c_bO2tMLjo-AoqTy5VJjH2cK
          source_id: s_4pDnGcw27t6txJV1LVNrW7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nxBAZr28DeuBqx5PPMgaj5
        status: active
        display_name: 王汭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王剁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剁 | accepted |
| birth.date | 795年 | accepted |
| death.date | 816年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nxBAZr28DeuBqx5PPMgaj5 | 王汭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剁（CBDB 145249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145249&o=json)
