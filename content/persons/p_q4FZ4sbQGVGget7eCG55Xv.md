---
schema: wang-person/v1
id: p_q4FZ4sbQGVGget7eCG55Xv
status: active
merged_into: null
display_name: 王顯宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L82E63Puvc2XRDCzAUMZDC
        subject_person_id: p_q4FZ4sbQGVGget7eCG55Xv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pW6CDM4mmPJgJqTFix32yc
          claim_id: c_L82E63Puvc2XRDCzAUMZDC
          source_id: s_LvvzTWoWzgsYSmF31dw8nT
          stance: supports
          locator: CBDB:487596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487596）
          source: &a1
            id: s_LvvzTWoWzgsYSmF31dw8nT
            source_type: api_record
            title: 中国历代人物传记资料库：王顯宗（CBDB 487596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487596&o=json
            external_identifier: CBDB:487596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zCZzY4NYatFyZGoa8naGkF
        subject_person_id: p_q4FZ4sbQGVGget7eCG55Xv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯宗，明人物。曾任遊擊將軍。（中国历代人物传记资料库 CBDB 487596）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-5hhKhsaz2WVidc-L0XUcL
          claim_id: c_zCZzY4NYatFyZGoa8naGkF
          source_id: s_LvvzTWoWzgsYSmF31dw8nT
          stance: supports
          locator: CBDB:487596
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

# 王顯宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯宗 | accepted |
| bio.summary | 王顯宗，明人物。曾任遊擊將軍。（中国历代人物传记资料库 CBDB 487596） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯宗（CBDB 487596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487596&o=json)
