---
schema: wang-person/v1
id: p_pAGNzZk71qnXQmm9C9NxeD
status: active
merged_into: null
display_name: 王楫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gLp2jab7UDKn9To5Jeb7yQ
        subject_person_id: p_pAGNzZk71qnXQmm9C9NxeD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U3xvSdy9TAF328Mfnvn9cm
          claim_id: c_gLp2jab7UDKn9To5Jeb7yQ
          source_id: s_Cw8cNv8AJuAFaFhw5K9keg
          stance: supports
          locator: CBDB:694042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694042）
          source: &a1
            id: s_Cw8cNv8AJuAFaFhw5K9keg
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 694042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694042&o=json
            external_identifier: CBDB:694042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.667Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lcoqc77J5TaTdPqmHiPTfE
        subject_person_id: p_pAGNzZk71qnXQmm9C9NxeD
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
        - id: cs_pnmYfBfSbP6ErYbJzBobva
          claim_id: c_Lcoqc77J5TaTdPqmHiPTfE
          source_id: s_Cw8cNv8AJuAFaFhw5K9keg
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
  ancestors:
    - claim:
        id: c_-_lheUaKX1Ppoy4fKYSm3Y
        subject_person_id: p_attXpVUNq5Leu9LSRnM6z8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pAGNzZk71qnXQmm9C9NxeD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wokB2HqmXb8MZq8TMQ2bfb
          claim_id: c_-_lheUaKX1Ppoy4fKYSm3Y
          source_id: s_Cw8cNv8AJuAFaFhw5K9keg
          stance: supports
          locator: 鄞縣志，lgid=243600：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_attXpVUNq5Leu9LSRnM6z8
        status: active
        display_name: 王本梧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_attXpVUNq5Leu9LSRnM6z8 | 王本梧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 694042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694042&o=json)
