---
schema: wang-person/v1
id: p_VLF3SvmkHbLwxz8BmnrXUQ
status: active
merged_into: null
display_name: 王晭
cbdb_id: 343537
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vGpXtDxEN77u4ttVj8CWZS
        subject_person_id: p_VLF3SvmkHbLwxz8BmnrXUQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晭，清人物。明清進士進士，籍贯高密，入仕進士。（中国历代人物传记资料库 CBDB 343537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ValrX1GkBGY9Qh4xOJft-k
          claim_id: c_vGpXtDxEN77u4ttVj8CWZS
          source_id: s_prMy4aazY4xNrEN61oXJjY
          stance: supports
          locator: CBDB:343537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_prMy4aazY4xNrEN61oXJjY
            source_type: api_record
            title: 中国历代人物传记资料库：王晭（CBDB 343537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343537&o=json
            external_identifier: CBDB:343537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:17.973Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vvBNb9j3Eb9DDC6B3Kom62
        subject_person_id: p_VLF3SvmkHbLwxz8BmnrXUQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E1aE4WYZqhQbMCJwn7QK9i
          claim_id: c_vvBNb9j3Eb9DDC6B3Kom62
          source_id: s_prMy4aazY4xNrEN61oXJjY
          stance: supports
          locator: CBDB:343537
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4601-4700）｜历史性依据：CBDB 朝代 = 清
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

# 王晭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晭，清人物。明清進士進士，籍贯高密，入仕進士。（中国历代人物传记资料库 CBDB 343537） | accepted |
| name.primary | 王晭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晭（CBDB 343537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343537&o=json)
