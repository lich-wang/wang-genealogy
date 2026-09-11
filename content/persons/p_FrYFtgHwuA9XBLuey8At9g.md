---
schema: wang-person/v1
id: p_FrYFtgHwuA9XBLuey8At9g
status: active
merged_into: null
display_name: 王捷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8J3Yt9rtr3h2D8v7Nx65jJ
        subject_person_id: p_FrYFtgHwuA9XBLuey8At9g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王捷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37Xotp8wWdCD2FpAcXyKH7
          claim_id: c_8J3Yt9rtr3h2D8v7Nx65jJ
          source_id: s_pzXxnTDbH2dv7RZP9unzXw
          stance: supports
          locator: CBDB:460738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460738）
          source: &a1
            id: s_pzXxnTDbH2dv7RZP9unzXw
            source_type: api_record
            title: 中国历代人物传记资料库：王捷（CBDB 460738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460738&o=json
            external_identifier: CBDB:460738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Jo1Zs3vEpqDX2Qzo1xj5d
        subject_person_id: p_FrYFtgHwuA9XBLuey8At9g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王捷，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 460738）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xnvM8C-WEx-6hTD86c2__T
          claim_id: c_9Jo1Zs3vEpqDX2Qzo1xj5d
          source_id: s_pzXxnTDbH2dv7RZP9unzXw
          stance: supports
          locator: CBDB:460738
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

# 王捷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王捷 | accepted |
| bio.summary | 王捷，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 460738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王捷（CBDB 460738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460738&o=json)
