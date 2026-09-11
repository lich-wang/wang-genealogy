---
schema: wang-person/v1
id: p_b3o7c4w4d14TEvcZM5orX7
status: active
merged_into: null
display_name: 王迹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3G4pAauggqfwHhekgerTHX
        subject_person_id: p_b3o7c4w4d14TEvcZM5orX7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uEg4F2oufYbjjkA9CM6fV9
          claim_id: c_3G4pAauggqfwHhekgerTHX
          source_id: s_Gp7TH42csgNyFMLe3DcKBL
          stance: supports
          locator: CBDB:270329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270329）
          source: &a1
            id: s_Gp7TH42csgNyFMLe3DcKBL
            source_type: api_record
            title: 中国历代人物传记资料库：王迹（CBDB 270329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270329&o=json
            external_identifier: CBDB:270329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JFbhgeagpgt6Das871GRd9
        subject_person_id: p_b3o7c4w4d14TEvcZM5orX7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迹，明人物。弘治十五年進士，籍贯臨穎。（中国历代人物传记资料库 CBDB 270329）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X59O90IguN0FLlNuVt9gQ6
          claim_id: c_JFbhgeagpgt6Das871GRd9
          source_id: s_Gp7TH42csgNyFMLe3DcKBL
          stance: supports
          locator: CBDB:270329
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

# 王迹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迹 | accepted |
| bio.summary | 王迹，明人物。弘治十五年進士，籍贯臨穎。（中国历代人物传记资料库 CBDB 270329） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迹（CBDB 270329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270329&o=json)
