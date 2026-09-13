---
schema: wang-person/v1
id: p_9DrqnnodTPufAGYJk9k477
status: active
merged_into: null
display_name: 王任汝
cbdb_id: 413847
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uu6uiX9hF54q3Fz92dX7Ap
        subject_person_id: p_9DrqnnodTPufAGYJk9k477
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任汝，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 413847）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uJcmzS11QK-1_03yIdswSv
          claim_id: c_uu6uiX9hF54q3Fz92dX7Ap
          source_id: s_RbNdHvK14owh4kjpy3YPdN
          stance: supports
          locator: CBDB:413847
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RbNdHvK14owh4kjpy3YPdN
            source_type: api_record
            title: 中国历代人物传记资料库：王任汝（CBDB 413847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413847&o=json
            external_identifier: CBDB:413847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:25.646Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gKmJ6NcffvtMFtmCvqg1Pr
        subject_person_id: p_9DrqnnodTPufAGYJk9k477
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任汝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8UCeNH86BMLr72LDcQdcTC
          claim_id: c_gKmJ6NcffvtMFtmCvqg1Pr
          source_id: s_RbNdHvK14owh4kjpy3YPdN
          stance: supports
          locator: CBDB:413847
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5001-5100）｜历史性依据：CBDB 朝代 = 清
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

# 王任汝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王任汝，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 413847） | accepted |
| name.primary | 王任汝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王任汝（CBDB 413847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413847&o=json)
