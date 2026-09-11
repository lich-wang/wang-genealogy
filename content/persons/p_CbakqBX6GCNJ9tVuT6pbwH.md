---
schema: wang-person/v1
id: p_CbakqBX6GCNJ9tVuT6pbwH
status: active
merged_into: null
display_name: 王真
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kjE1gCqb9xtULnyPqrUAPY
        subject_person_id: p_CbakqBX6GCNJ9tVuT6pbwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_13jVnLhGfpyT8JaUW6kHW3
          claim_id: c_kjE1gCqb9xtULnyPqrUAPY
          source_id: s_JsPxnBGq7YLEcGCEdij1Bt
          stance: supports
          locator: CBDB:66710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66710）
          source: &a1
            id: s_JsPxnBGq7YLEcGCEdij1Bt
            source_type: api_record
            title: 中国历代人物传记资料库：王真（CBDB 66710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66710&o=json
            external_identifier: CBDB:66710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CSK75DTsF5vRkKyfCCSiwv
        subject_person_id: p_CbakqBX6GCNJ9tVuT6pbwH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1402年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_54GH8dQQb1cfHcaGpY6YGd
          claim_id: c_CSK75DTsF5vRkKyfCCSiwv
          source_id: s_JsPxnBGq7YLEcGCEdij1Bt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qa8dXu7ZbPqyFQJDBtLF37
        subject_person_id: p_CbakqBX6GCNJ9tVuT6pbwH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真（卒于1402年），明人物。籍贯咸寧，入仕募入軍伍，曾任都指揮使、衛百戶、指揮使。（中国历代人物传记资料库 CBDB 66710）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gamHjTL2aJV9Qz6Z1MKL4B
          claim_id: c_Qa8dXu7ZbPqyFQJDBtLF37
          source_id: s_JsPxnBGq7YLEcGCEdij1Bt
          stance: supports
          locator: CBDB:66710
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

# 王真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王真 | accepted |
| death.date | 1402年 | accepted |
| bio.summary | 王真（卒于1402年），明人物。籍贯咸寧，入仕募入軍伍，曾任都指揮使、衛百戶、指揮使。（中国历代人物传记资料库 CBDB 66710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王真（CBDB 66710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66710&o=json)
