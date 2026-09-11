---
schema: wang-person/v1
id: p_aGpmco9tD9XrB5EjuLVL4K
status: active
merged_into: null
display_name: 王應超
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AbJP9v8JjFStQEV1fCgJM7
        subject_person_id: p_aGpmco9tD9XrB5EjuLVL4K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應超
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RLoetB61pmZ55ibz1S9nRh
          claim_id: c_AbJP9v8JjFStQEV1fCgJM7
          source_id: s_CC2c73hX6AX4uA8SRL17Hj
          stance: supports
          locator: CBDB:692157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692157）
          source: &a1
            id: s_CC2c73hX6AX4uA8SRL17Hj
            source_type: api_record
            title: 中国历代人物传记资料库：王應超（CBDB 692157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692157&o=json
            external_identifier: CBDB:692157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aNEPMi8kNkYEBq2kYD6736
        subject_person_id: p_aGpmco9tD9XrB5EjuLVL4K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vAYPP9ECuPnU64xCNGvuLD
          claim_id: c_aNEPMi8kNkYEBq2kYD6736
          source_id: s_CC2c73hX6AX4uA8SRL17Hj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LsNqCJ-hCcKdZyhYEu4b63
        subject_person_id: p_aGpmco9tD9XrB5EjuLVL4K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HqEb5G5mJVQvgYHn75BY3m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yf7uthN6V8WPiz3cd-olU6
          claim_id: c_LsNqCJ-hCcKdZyhYEu4b63
          source_id: s_CC2c73hX6AX4uA8SRL17Hj
          stance: supports
          locator: 嘉慶黟縣志，lgid=1166320：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HqEb5G5mJVQvgYHn75BY3m
        status: active
        display_name: 王廷柱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_1DwOKv5SzigWzgNL7rByyC
        subject_person_id: p_aGpmco9tD9XrB5EjuLVL4K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nEvAuS6nNAmykLigsKKciq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6oambvFtrHyvOsw9x7L3C
          claim_id: c_1DwOKv5SzigWzgNL7rByyC
          source_id: s_CC2c73hX6AX4uA8SRL17Hj
          stance: supports
          locator: 嘉慶黟縣志，lgid=1166320：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nEvAuS6nNAmykLigsKKciq
        status: active
        display_name: 王嘉猷
        merged_into_person_id: null
  other: []
---

# 王應超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應超 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HqEb5G5mJVQvgYHn75BY3m | 王廷柱 | accepted |
| descendants | p_nEvAuS6nNAmykLigsKKciq | 王嘉猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應超（CBDB 692157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692157&o=json)
