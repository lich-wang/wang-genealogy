---
schema: wang-person/v1
id: p_QA6XK7u53FjQXLT6NH8BCe
status: active
merged_into: null
display_name: 王大年
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rPxd62iGZ2QUoGU7pPz3bk
        subject_person_id: p_QA6XK7u53FjQXLT6NH8BCe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TiY923YkPtaB9wMXMQe5zw
          claim_id: c_rPxd62iGZ2QUoGU7pPz3bk
          source_id: s_dNLbpj1x389WGFUFNTTnZJ
          stance: supports
          locator: CBDB:293433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293433）
          source: &a1
            id: s_dNLbpj1x389WGFUFNTTnZJ
            source_type: api_record
            title: 中国历代人物传记资料库：王大年（CBDB 293433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293433&o=json
            external_identifier: CBDB:293433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9s7bf4CXWBJUCGEFv9TMRJ
        subject_person_id: p_QA6XK7u53FjQXLT6NH8BCe
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
        - id: cs_1LVzjfD485b1aX5tkWYPDk
          claim_id: c_9s7bf4CXWBJUCGEFv9TMRJ
          source_id: s_dNLbpj1x389WGFUFNTTnZJ
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
        id: c_2bSgZj0QwFroEZ-kDbyGKY
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QA6XK7u53FjQXLT6NH8BCe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bpYj9DWtKUuMmh1qpSaGig
          claim_id: c_2bSgZj0QwFroEZ-kDbyGKY
          source_id: s_dNLbpj1x389WGFUFNTTnZJ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g1ZQp25f7TDHH92Q6ePC8K
        status: active
        display_name: 王應詔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g1ZQp25f7TDHH92Q6ePC8K | 王應詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大年（CBDB 293433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293433&o=json)
