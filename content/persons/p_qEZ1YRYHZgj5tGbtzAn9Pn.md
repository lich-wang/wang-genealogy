---
schema: wang-person/v1
id: p_qEZ1YRYHZgj5tGbtzAn9Pn
status: active
merged_into: null
display_name: 王琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wUCf9DndA8KKdPqC1mi3PW
        subject_person_id: p_qEZ1YRYHZgj5tGbtzAn9Pn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WPSPoNujo5joPp2p2e8wJE
          claim_id: c_wUCf9DndA8KKdPqC1mi3PW
          source_id: s_7sE63r8MQCvNrRNGSYnfL1
          stance: supports
          locator: CBDB:453588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453588）
          source: &a1
            id: s_7sE63r8MQCvNrRNGSYnfL1
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 453588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453588&o=json
            external_identifier: CBDB:453588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Za1wzHd56bZ9HoNhCEf52
        subject_person_id: p_qEZ1YRYHZgj5tGbtzAn9Pn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王琦，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任縣丞。（中国历代人物传记资料库 CBDB 453588）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q2moQdA-iNxHCwyJkNVfSi
          claim_id: c_4Za1wzHd56bZ9HoNhCEf52
          source_id: s_7sE63r8MQCvNrRNGSYnfL1
          stance: supports
          locator: CBDB:453588
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

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | 王琦，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任縣丞。（中国历代人物传记资料库 CBDB 453588） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 453588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453588&o=json)
