---
schema: wang-person/v1
id: p_yUCWxdZ3S4LebXfQQb2QCQ
status: active
merged_into: null
display_name: 王汝謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cqsK4viJgQcJxKRNYD2zYo
        subject_person_id: p_yUCWxdZ3S4LebXfQQb2QCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cVsEVWjhY7Fe2dnm5hqe9N
          claim_id: c_cqsK4viJgQcJxKRNYD2zYo
          source_id: s_8RwarUd2aR4GZtW5UqJg1e
          stance: supports
          locator: CBDB:314226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314226）
          source: &a1
            id: s_8RwarUd2aR4GZtW5UqJg1e
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謙（CBDB 314226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314226&o=json
            external_identifier: CBDB:314226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qihX4293ZN38w9qe32GtE6
        subject_person_id: p_yUCWxdZ3S4LebXfQQb2QCQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝謙，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f0Yd8sqElt3R5EzJSdtga9
          claim_id: c_qihX4293ZN38w9qe32GtE6
          source_id: s_8RwarUd2aR4GZtW5UqJg1e
          stance: supports
          locator: CBDB:314226
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

# 王汝謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝謙 | accepted |
| bio.summary | 王汝謙，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314226） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝謙（CBDB 314226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314226&o=json)
