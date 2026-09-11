---
schema: wang-person/v1
id: p_s6y4se8DCW4eukcpENqdMJ
status: active
merged_into: null
display_name: 王鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2BW6T3H82YhqAFTz8Gc7S5
        subject_person_id: p_s6y4se8DCW4eukcpENqdMJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KqSmk3oJLzg2XE2DYnUnYo
          claim_id: c_2BW6T3H82YhqAFTz8Gc7S5
          source_id: s_Y3yZAQfGritNDUmC5Cxd4J
          stance: supports
          locator: CBDB:271839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271839）
          source: &a1
            id: s_Y3yZAQfGritNDUmC5Cxd4J
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 271839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json
            external_identifier: CBDB:271839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_35nY6CR4LH2EKyJRM3oLWJ
        subject_person_id: p_s6y4se8DCW4eukcpENqdMJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qoRWIiqy_YsJIy8SgT5KWf
          claim_id: c_35nY6CR4LH2EKyJRM3oLWJ
          source_id: s_Y3yZAQfGritNDUmC5Cxd4J
          stance: supports
          locator: CBDB:271839
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

# 王鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳 | accepted |
| bio.summary | 王鳳，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳（CBDB 271839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json)
