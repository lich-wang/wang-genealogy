---
schema: wang-person/v1
id: p_z6N7vWd7R775SMLRQS7Wdq
status: active
merged_into: null
display_name: 王文貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_29mGd972mh58CXgoq1rCLg
        subject_person_id: p_z6N7vWd7R775SMLRQS7Wdq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RxUnUpeNcfMBnj1AbbDdi7
          claim_id: c_29mGd972mh58CXgoq1rCLg
          source_id: s_PkT5d2DTJ9AF6eomLYvf9a
          stance: supports
          locator: CBDB:322769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322769）
          source: &a1
            id: s_PkT5d2DTJ9AF6eomLYvf9a
            source_type: api_record
            title: 中国历代人物传记资料库：王文貴（CBDB 322769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322769&o=json
            external_identifier: CBDB:322769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JErgCP7HJ3bXfjp99g8JMj
        subject_person_id: p_z6N7vWd7R775SMLRQS7Wdq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文貴，明人物。宣德五年進士，籍贯山陽。（中国历代人物传记资料库 CBDB 322769）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bvzThL2WF1wmgJlSmDeD3T
          claim_id: c_JErgCP7HJ3bXfjp99g8JMj
          source_id: s_PkT5d2DTJ9AF6eomLYvf9a
          stance: supports
          locator: CBDB:322769
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

# 王文貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文貴 | accepted |
| bio.summary | 王文貴，明人物。宣德五年進士，籍贯山陽。（中国历代人物传记资料库 CBDB 322769） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文貴（CBDB 322769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322769&o=json)
