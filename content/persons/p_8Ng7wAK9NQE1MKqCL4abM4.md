---
schema: wang-person/v1
id: p_8Ng7wAK9NQE1MKqCL4abM4
status: active
merged_into: null
display_name: 王信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FUEX4uTTiv1NB8JGi3Gexz
        subject_person_id: p_8Ng7wAK9NQE1MKqCL4abM4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T2WQQokPhHYKvShZ1jggyG
          claim_id: c_FUEX4uTTiv1NB8JGi3Gexz
          source_id: s_YHMAARhP9Ds3c5YaTdmivt
          stance: supports
          locator: CBDB:239501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239501）
          source: &a1
            id: s_YHMAARhP9Ds3c5YaTdmivt
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 239501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239501&o=json
            external_identifier: CBDB:239501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_thXBC4NCvksqv7bsPyy9T7
        subject_person_id: p_8Ng7wAK9NQE1MKqCL4abM4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。正统十年進士，籍贯歷城。（中国历代人物传记资料库 CBDB 239501）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gwl0W-2uzwYdgKwfMBT8UX
          claim_id: c_thXBC4NCvksqv7bsPyy9T7
          source_id: s_YHMAARhP9Ds3c5YaTdmivt
          stance: supports
          locator: CBDB:239501
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

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。正统十年進士，籍贯歷城。（中国历代人物传记资料库 CBDB 239501） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 239501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239501&o=json)
