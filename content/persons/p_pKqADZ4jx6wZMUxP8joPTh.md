---
schema: wang-person/v1
id: p_pKqADZ4jx6wZMUxP8joPTh
status: active
merged_into: null
display_name: 王壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iAZDXFV1ZxL1L8qsKJyai4
        subject_person_id: p_pKqADZ4jx6wZMUxP8joPTh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8FeSGNE1VFFKz4sTt2jmcT
          claim_id: c_iAZDXFV1ZxL1L8qsKJyai4
          source_id: s_JPNFmszFkaojMsxNBudfjs
          stance: supports
          locator: CBDB:242558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242558）
          source: &a1
            id: s_JPNFmszFkaojMsxNBudfjs
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 242558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242558&o=json
            external_identifier: CBDB:242558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sjbsnBvniGa1MSnr4N961c
        subject_person_id: p_pKqADZ4jx6wZMUxP8joPTh
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
        - id: cs_KErA4sLjbNcNWzjzRL7st9
          claim_id: c_sjbsnBvniGa1MSnr4N961c
          source_id: s_JPNFmszFkaojMsxNBudfjs
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

# 王壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽（CBDB 242558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242558&o=json)
