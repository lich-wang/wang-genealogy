---
schema: wang-person/v1
id: p_91KX92EWmcE3p6ZFgBViDL
status: active
merged_into: null
display_name: 王鎭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KZtgXukt8nsQ43pJfftLfx
        subject_person_id: p_91KX92EWmcE3p6ZFgBViDL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qab6ovta5kNcK28xBEHZit
          claim_id: c_KZtgXukt8nsQ43pJfftLfx
          source_id: s_RsnqDo3vtkW99jjgV6hFmQ
          stance: supports
          locator: CBDB:452660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452660）
          source: &a1
            id: s_RsnqDo3vtkW99jjgV6hFmQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鎭（CBDB 452660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452660&o=json
            external_identifier: CBDB:452660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s9h1gF7b1nPH73cUtT3L4A
        subject_person_id: p_91KX92EWmcE3p6ZFgBViDL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎭，元人物。曾任判官。（中国历代人物传记资料库 CBDB 452660）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rGASQc8_Y-CCukht0HS4fe
          claim_id: c_s9h1gF7b1nPH73cUtT3L4A
          source_id: s_RsnqDo3vtkW99jjgV6hFmQ
          stance: supports
          locator: CBDB:452660
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

# 王鎭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎭 | accepted |
| bio.summary | 王鎭，元人物。曾任判官。（中国历代人物传记资料库 CBDB 452660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎭（CBDB 452660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452660&o=json)
