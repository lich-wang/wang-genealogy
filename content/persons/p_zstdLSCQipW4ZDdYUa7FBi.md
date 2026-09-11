---
schema: wang-person/v1
id: p_zstdLSCQipW4ZDdYUa7FBi
status: active
merged_into: null
display_name: 王汝明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dJmRQJKDeQMH8pyphViU5z
        subject_person_id: p_zstdLSCQipW4ZDdYUa7FBi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3cGqJxL7GQzkHB7SZs77jW
          claim_id: c_dJmRQJKDeQMH8pyphViU5z
          source_id: s_J3pUmA7cuUMj6KCCGGEAFt
          stance: supports
          locator: CBDB:290262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290262）
          source: &a1
            id: s_J3pUmA7cuUMj6KCCGGEAFt
            source_type: api_record
            title: 中国历代人物传记资料库：王汝明（CBDB 290262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290262&o=json
            external_identifier: CBDB:290262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QUGyEL4ZCtmcgmGdHoUryL
        subject_person_id: p_zstdLSCQipW4ZDdYUa7FBi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝明，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290262）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uw1BsLb4eAs2whdrLa27Me
          claim_id: c_QUGyEL4ZCtmcgmGdHoUryL
          source_id: s_J3pUmA7cuUMj6KCCGGEAFt
          stance: supports
          locator: CBDB:290262
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

# 王汝明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝明 | accepted |
| bio.summary | 王汝明，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290262） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝明（CBDB 290262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290262&o=json)
