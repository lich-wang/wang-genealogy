---
schema: wang-person/v1
id: p_pgLBGCwwfvD5o1ggdN92mm
status: active
merged_into: null
display_name: 王偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PagD1r9bvyfyNFabmyxq9p
        subject_person_id: p_pgLBGCwwfvD5o1ggdN92mm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8C8CKLf2MbSXJTHAqiN8H6
          claim_id: c_PagD1r9bvyfyNFabmyxq9p
          source_id: s_7F5u5MuPn7CGbVW1345cqe
          stance: supports
          locator: CBDB:244029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244029）
          source: &a1
            id: s_7F5u5MuPn7CGbVW1345cqe
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 244029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244029&o=json
            external_identifier: CBDB:244029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RDBbCGj8YGmpNKPoYXg36V
        subject_person_id: p_pgLBGCwwfvD5o1ggdN92mm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉，明人物。成化五年進士，籍贯華容。（中国历代人物传记资料库 CBDB 244029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xUjN5iLfBj-S1UcqhSz4ME
          claim_id: c_RDBbCGj8YGmpNKPoYXg36V
          source_id: s_7F5u5MuPn7CGbVW1345cqe
          stance: supports
          locator: CBDB:244029
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| bio.summary | 王偉，明人物。成化五年進士，籍贯華容。（中国历代人物传记资料库 CBDB 244029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偉（CBDB 244029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244029&o=json)
