---
schema: wang-person/v1
id: p_PLqe9fsYqLzDbymYdd5qT9
status: active
merged_into: null
display_name: 王濟宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_28D7f8HHjKEddsH2NfbfPz
        subject_person_id: p_PLqe9fsYqLzDbymYdd5qT9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pxx8PMs48sjJBA74m6PoL3
          claim_id: c_28D7f8HHjKEddsH2NfbfPz
          source_id: s_Mog6oUPxRXAA3fNW9gwrbF
          stance: supports
          locator: CBDB:639242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639242）
          source: &a1
            id: s_Mog6oUPxRXAA3fNW9gwrbF
            source_type: api_record
            title: 中国历代人物传记资料库：王濟宏（CBDB 639242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639242&o=json
            external_identifier: CBDB:639242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9QCGB6aibVcAGwrGMXkfAv
        subject_person_id: p_PLqe9fsYqLzDbymYdd5qT9
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
        - id: cs_XkbfAWHFkGut45iAJS1bpD
          claim_id: c_9QCGB6aibVcAGwrGMXkfAv
          source_id: s_Mog6oUPxRXAA3fNW9gwrbF
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

# 王濟宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟宏 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟宏（CBDB 639242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639242&o=json)
