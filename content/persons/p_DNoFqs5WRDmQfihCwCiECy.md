---
schema: wang-person/v1
id: p_DNoFqs5WRDmQfihCwCiECy
status: active
merged_into: null
display_name: 王憲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uS1CK5W5jjgUsLmEeQVNh1
        subject_person_id: p_DNoFqs5WRDmQfihCwCiECy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NLUy6EQaAdxuNYEB92PGWp
          claim_id: c_uS1CK5W5jjgUsLmEeQVNh1
          source_id: s_PWkfRGPXkBhVTJGRfB49hm
          stance: supports
          locator: CBDB:191817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191817）
          source: &a1
            id: s_PWkfRGPXkBhVTJGRfB49hm
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 191817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191817&o=json
            external_identifier: CBDB:191817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gyBQrnkDCCdLtuQXNNXcG5
        subject_person_id: p_DNoFqs5WRDmQfihCwCiECy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 749年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_js5KQoKRXkZVjjHnFe8uCy
          claim_id: c_gyBQrnkDCCdLtuQXNNXcG5
          source_id: s_PWkfRGPXkBhVTJGRfB49hm
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
        id: c_thuUjUg7DerehxH46foapJ
        subject_person_id: p_DNoFqs5WRDmQfihCwCiECy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲（卒于749年），唐人物。籍贯興平，曾任縣令。（中国历代人物传记资料库 CBDB 191817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IWFEmGDkUTKWpK0IpUUnNC
          claim_id: c_thuUjUg7DerehxH46foapJ
          source_id: s_PWkfRGPXkBhVTJGRfB49hm
          stance: supports
          locator: CBDB:191817
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QYtMgRJ3n28jmWeKuLg-tC
        subject_person_id: p_DE8d8ednEw92f8RvF3Wp1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DNoFqs5WRDmQfihCwCiECy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tnhrxXP6gz1QfiawOzDgGD
          claim_id: c_QYtMgRJ3n28jmWeKuLg-tC
          source_id: s_PWkfRGPXkBhVTJGRfB49hm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DE8d8ednEw92f8RvF3Wp1b
        status: active
        display_name: 王無擇
        merged_into_person_id: null
  children:
    - claim:
        id: c_uE-8q4A6KL4zpO68ZNtG9G
        subject_person_id: p_DNoFqs5WRDmQfihCwCiECy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RQWy44B8Szn7GTHLiqzPzY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qFvisM14mIZyJVqxDDMNw4
          claim_id: c_uE-8q4A6KL4zpO68ZNtG9G
          source_id: s_PWkfRGPXkBhVTJGRfB49hm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RQWy44B8Szn7GTHLiqzPzY
        status: active
        display_name: 王自勉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| death.date | 749年 | accepted |
| bio.summary | 王憲（卒于749年），唐人物。籍贯興平，曾任縣令。（中国历代人物传记资料库 CBDB 191817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DE8d8ednEw92f8RvF3Wp1b | 王無擇 | accepted |
| children | p_RQWy44B8Szn7GTHLiqzPzY | 王自勉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 191817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191817&o=json)
