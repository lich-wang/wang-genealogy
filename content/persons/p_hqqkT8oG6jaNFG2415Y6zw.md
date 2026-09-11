---
schema: wang-person/v1
id: p_hqqkT8oG6jaNFG2415Y6zw
status: active
merged_into: null
display_name: 王世卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jJyf8krTokGGuQ6eLYMVpS
        subject_person_id: p_hqqkT8oG6jaNFG2415Y6zw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1QFEks2JrbXLz7MyJfKmRa
          claim_id: c_jJyf8krTokGGuQ6eLYMVpS
          source_id: s_fcPUKx6fw8Aq8Jth3y1gWa
          stance: supports
          locator: CBDB:243247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243247）
          source: &a1
            id: s_fcPUKx6fw8Aq8Jth3y1gWa
            source_type: api_record
            title: 中国历代人物传记资料库：王世卿（CBDB 243247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243247&o=json
            external_identifier: CBDB:243247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NrEwspPPyY2Zhn3ZURt7Ke
        subject_person_id: p_hqqkT8oG6jaNFG2415Y6zw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世卿，明人物。成化五年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 243247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EBbOjqTu9va9-QeQF6hA-k
          claim_id: c_NrEwspPPyY2Zhn3ZURt7Ke
          source_id: s_fcPUKx6fw8Aq8Jth3y1gWa
          stance: supports
          locator: CBDB:243247
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

# 王世卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世卿 | accepted |
| bio.summary | 王世卿，明人物。成化五年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 243247） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世卿（CBDB 243247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243247&o=json)
