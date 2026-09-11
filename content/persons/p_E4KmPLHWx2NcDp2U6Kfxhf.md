---
schema: wang-person/v1
id: p_E4KmPLHWx2NcDp2U6Kfxhf
status: active
merged_into: null
display_name: 王橚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eG4UB1MRmJhW1Xepsw9Jpt
        subject_person_id: p_E4KmPLHWx2NcDp2U6Kfxhf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SJGDkmJfGLrSWi7jyJJ3sp
          claim_id: c_eG4UB1MRmJhW1Xepsw9Jpt
          source_id: s_Ay3JbMz6mrQy1uNgzc4qtp
          stance: supports
          locator: CBDB:16063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16063）
          source: &a1
            id: s_Ay3JbMz6mrQy1uNgzc4qtp
            source_type: api_record
            title: 中国历代人物传记资料库：王橚（CBDB 16063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16063&o=json
            external_identifier: CBDB:16063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UXTsXRPUBpfcW28YFiJPNy
        subject_person_id: p_E4KmPLHWx2NcDp2U6Kfxhf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橚，宋人物。籍贯都昌。（中国历代人物传记资料库 CBDB 16063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xob1-FQqiv8sUc9XxAIU9R
          claim_id: c_UXTsXRPUBpfcW28YFiJPNy
          source_id: s_Ay3JbMz6mrQy1uNgzc4qtp
          stance: supports
          locator: CBDB:16063
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

# 王橚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王橚 | accepted |
| bio.summary | 王橚，宋人物。籍贯都昌。（中国历代人物传记资料库 CBDB 16063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王橚（CBDB 16063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16063&o=json)
