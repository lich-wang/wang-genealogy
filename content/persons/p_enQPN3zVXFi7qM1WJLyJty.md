---
schema: wang-person/v1
id: p_enQPN3zVXFi7qM1WJLyJty
status: active
merged_into: null
display_name: 王汝楫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1EYHDmrdsETtACzw5KJqVL
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f6T9EDAjYCVXbpDzvKjxxf
          claim_id: c_1EYHDmrdsETtACzw5KJqVL
          source_id: s_g7XW5CaMVygR9LNxD68Hvg
          stance: supports
          locator: CBDB:288211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288211）
          source: &a1
            id: s_g7XW5CaMVygR9LNxD68Hvg
            source_type: api_record
            title: 中国历代人物传记资料库：王汝楫（CBDB 288211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288211&o=json
            external_identifier: CBDB:288211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bh5iSQJGsNCHMcr8xLNtvT
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
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
        - id: cs_BqrR3j8zQhnJE7x5NTdfpC
          claim_id: c_Bh5iSQJGsNCHMcr8xLNtvT
          source_id: s_g7XW5CaMVygR9LNxD68Hvg
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
        id: c_SItaAQDQCEo-vRa5EB8LZb
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TTntK269568eA9RALQmA43
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E65I1rEbSwWRvIxr4jXfET
          claim_id: c_SItaAQDQCEo-vRa5EB8LZb
          source_id: s_g7XW5CaMVygR9LNxD68Hvg
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TTntK269568eA9RALQmA43
        status: active
        display_name: 王納言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝楫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TTntK269568eA9RALQmA43 | 王納言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝楫（CBDB 288211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288211&o=json)
