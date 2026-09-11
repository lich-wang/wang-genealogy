---
schema: wang-person/v1
id: p_KktrLnnAeMZU1TbvAiJFf7
status: active
merged_into: null
display_name: 王鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPG75f9c1qPuu8ipbuT86N
        subject_person_id: p_KktrLnnAeMZU1TbvAiJFf7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tJDKUxXwpdeAx9tiwrkGNa
          claim_id: c_wPG75f9c1qPuu8ipbuT86N
          source_id: s_ndzUJf7cBs9cteuWgaHSVY
          stance: supports
          locator: CBDB:467189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467189）
          source: &a1
            id: s_ndzUJf7cBs9cteuWgaHSVY
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 467189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467189&o=json
            external_identifier: CBDB:467189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1MgLNwPSiLYoBEP22oL2Lc
        subject_person_id: p_KktrLnnAeMZU1TbvAiJFf7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 467189）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RG1GadBqsKyPLDm3R2GeIT
          claim_id: c_1MgLNwPSiLYoBEP22oL2Lc
          source_id: s_ndzUJf7cBs9cteuWgaHSVY
          stance: supports
          locator: CBDB:467189
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

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| bio.summary | 王鑾，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 467189） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 467189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467189&o=json)
