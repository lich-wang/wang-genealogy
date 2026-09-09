---
schema: wang-person/v1
id: p_netpjn2vvpbP4gRNZK5nnW
status: active
merged_into: null
display_name: 王畿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uuRzf7VVNGMcg8FD4j2o8W
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pk1ncixo6xBcTDJAsP5WdD
          claim_id: c_uuRzf7VVNGMcg8FD4j2o8W
          source_id: s_TrML3YJ2G39dZdxXUabmPv
          stance: supports
          locator: CBDB:126814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126814）
          source: &a1
            id: s_TrML3YJ2G39dZdxXUabmPv
            source_type: api_record
            title: 中国历代人物传记资料库：王畿（CBDB 126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4uu6CNkMtdrM2Si6AohU45
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQwexVy4eiFyZ4UJaMj8qL
          claim_id: c_4uu6CNkMtdrM2Si6AohU45
          source_id: s_TrML3YJ2G39dZdxXUabmPv
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
        id: c_jrDBorkCnxfvmsCxQihCCQ
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1583年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FP6xQp756wwzGFDPnAssyW
          claim_id: c_jrDBorkCnxfvmsCxQihCCQ
          source_id: s_TrML3YJ2G39dZdxXUabmPv
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
        id: c_2JQhJpRoyaCkaUNyTQVNNc
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
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
        - id: cs_nCbmdJafsdnCeECi4QD7dc
          claim_id: c_2JQhJpRoyaCkaUNyTQVNNc
          source_id: s_TrML3YJ2G39dZdxXUabmPv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王畿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王畿 | accepted |
| birth.date | 1498年 | accepted |
| death.date | 1583年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王畿（CBDB 126814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json)
