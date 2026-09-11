---
schema: wang-person/v1
id: p_ah2M8P7hdEnYgAQ2Tp5XS1
status: active
merged_into: null
display_name: 王省躬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fq585AR5VZx4xzUqaGX8Gz
        subject_person_id: p_ah2M8P7hdEnYgAQ2Tp5XS1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王省躬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MHht5ishj5qHkxxtJXkTGB
          claim_id: c_fq585AR5VZx4xzUqaGX8Gz
          source_id: s_R67E4aihtX5ECdSMQ7KjgA
          stance: supports
          locator: CBDB:175760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175760）
          source: &a1
            id: s_R67E4aihtX5ECdSMQ7KjgA
            source_type: api_record
            title: 中国历代人物传记资料库：王省躬（CBDB 175760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175760&o=json
            external_identifier: CBDB:175760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.109Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_x4TSHf2Fyzy1XSReETDUhP
        subject_person_id: p_ah2M8P7hdEnYgAQ2Tp5XS1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 743年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y6pQirt3ehD2uvSZHpHAs5
          claim_id: c_x4TSHf2Fyzy1XSReETDUhP
          source_id: s_R67E4aihtX5ECdSMQ7KjgA
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
        id: c_qneLfs45fCszAH2L7JH4Zg
        subject_person_id: p_ah2M8P7hdEnYgAQ2Tp5XS1
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
        - id: cs_CyVh7YYUMrHDgw5xfyPpKw
          claim_id: c_qneLfs45fCszAH2L7JH4Zg
          source_id: s_R67E4aihtX5ECdSMQ7KjgA
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
          source:
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
      object_person:
        id: p_a9S5fBakXya92n8LQvcA3E
        status: active
        display_name: 王履仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王省躬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王省躬 | accepted |
| death.date | 743年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_a9S5fBakXya92n8LQvcA3E | 王履仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王履仁（CBDB 175759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175759&o=json)
- [中国历代人物传记资料库：王省躬（CBDB 175760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175760&o=json)
