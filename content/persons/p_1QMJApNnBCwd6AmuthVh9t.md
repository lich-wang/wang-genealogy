---
schema: wang-person/v1
id: p_1QMJApNnBCwd6AmuthVh9t
status: active
merged_into: null
display_name: 王大臨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wydvqt2Rkg5YJW9xa33Cjp
        subject_person_id: p_1QMJApNnBCwd6AmuthVh9t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大臨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3PsMdTec95FFNjExd9Li9Z
          claim_id: c_Wydvqt2Rkg5YJW9xa33Cjp
          source_id: s_WJeWLEa1EZKaqA1RjeHZsZ
          stance: supports
          locator: CBDB:27281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27281）
          source: &a1
            id: s_WJeWLEa1EZKaqA1RjeHZsZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大臨（CBDB 27281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27281&o=json
            external_identifier: CBDB:27281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_U37DxCHmGPi9Mus7P5ufAF
        subject_person_id: p_1QMJApNnBCwd6AmuthVh9t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1117年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ar3bo42mD18zT9A6ZMzbUE
          claim_id: c_U37DxCHmGPi9Mus7P5ufAF
          source_id: s_WJeWLEa1EZKaqA1RjeHZsZ
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
        id: c_PUQs1iCEs4YvEVaaB8CPUa
        subject_person_id: p_1QMJApNnBCwd6AmuthVh9t
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1186年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xMW9MKLGkHqEtCSHXFNDUv
          claim_id: c_PUQs1iCEs4YvEVaaB8CPUa
          source_id: s_WJeWLEa1EZKaqA1RjeHZsZ
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
        id: c_2Kr4z6UK1wV6njLQQ8G2Q9
        subject_person_id: p_1QMJApNnBCwd6AmuthVh9t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7WyqcBAwtmiMCj6HFJqKY
          claim_id: c_2Kr4z6UK1wV6njLQQ8G2Q9
          source_id: s_WJeWLEa1EZKaqA1RjeHZsZ
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

# 王大臨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大臨 | accepted |
| birth.date | 1117年 | accepted |
| death.date | 1186年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大臨（CBDB 27281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27281&o=json)
