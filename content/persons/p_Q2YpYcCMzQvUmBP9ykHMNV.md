---
schema: wang-person/v1
id: p_Q2YpYcCMzQvUmBP9ykHMNV
status: active
merged_into: null
display_name: 王濚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AS2CB6mFG5sC3Bw1a52zpm
        subject_person_id: p_Q2YpYcCMzQvUmBP9ykHMNV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fqj8EJvnXAePWH3c2HfTDy
          claim_id: c_AS2CB6mFG5sC3Bw1a52zpm
          source_id: s_s96V6HKwzNJhD23UJsb8VD
          stance: supports
          locator: CBDB:342886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342886）
          source: &a1
            id: s_s96V6HKwzNJhD23UJsb8VD
            source_type: api_record
            title: 中国历代人物传记资料库：王濚（CBDB 342886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342886&o=json
            external_identifier: CBDB:342886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hNMEUMJ73TL4TTnUVidgjd
        subject_person_id: p_Q2YpYcCMzQvUmBP9ykHMNV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濚，明人物。明清進士進士，籍贯益都，入仕進士。（中国历代人物传记资料库 CBDB 342886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rxur55t9FR0pOQZahCV8m1
          claim_id: c_hNMEUMJ73TL4TTnUVidgjd
          source_id: s_s96V6HKwzNJhD23UJsb8VD
          stance: supports
          locator: CBDB:342886
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

# 王濚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濚 | accepted |
| bio.summary | 王濚，明人物。明清進士進士，籍贯益都，入仕進士。（中国历代人物传记资料库 CBDB 342886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濚（CBDB 342886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342886&o=json)
