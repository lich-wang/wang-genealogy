---
schema: wang-person/v1
id: p_9st3vp7RQQDmU7evKyY6MH
status: active
merged_into: null
display_name: 王楹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eWNgbDAQHVfDpj5ABoaJCx
        subject_person_id: p_9st3vp7RQQDmU7evKyY6MH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_836WE1rZABsJh1UyTcJyF4
          claim_id: c_eWNgbDAQHVfDpj5ABoaJCx
          source_id: s_DGghSbggoVMH4BmX4TzgxW
          stance: supports
          locator: CBDB:329700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329700）
          source: &a1
            id: s_DGghSbggoVMH4BmX4TzgxW
            source_type: api_record
            title: 中国历代人物传记资料库：王楹（CBDB 329700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329700&o=json
            external_identifier: CBDB:329700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wV1MdUqH1okG2KoqXZ8wsq
        subject_person_id: p_9st3vp7RQQDmU7evKyY6MH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楹，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WWLt6d1Mrko5SE-A53JbMc
          claim_id: c_wV1MdUqH1okG2KoqXZ8wsq
          source_id: s_DGghSbggoVMH4BmX4TzgxW
          stance: supports
          locator: CBDB:329700
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

# 王楹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楹 | accepted |
| bio.summary | 王楹，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楹（CBDB 329700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329700&o=json)
