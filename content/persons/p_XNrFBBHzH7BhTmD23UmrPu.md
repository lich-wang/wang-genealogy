---
schema: wang-person/v1
id: p_XNrFBBHzH7BhTmD23UmrPu
status: active
merged_into: null
display_name: 王珣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7DxM11bhpySabHpbsMMLSa
        subject_person_id: p_XNrFBBHzH7BhTmD23UmrPu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PxK9EGvTEYsQVAMGRD2CVR
          claim_id: c_7DxM11bhpySabHpbsMMLSa
          source_id: s_fJppYCYycdbDhA5JtD6a2y
          stance: supports
          locator: CBDB:477001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477001）
          source: &a1
            id: s_fJppYCYycdbDhA5JtD6a2y
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 477001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477001&o=json
            external_identifier: CBDB:477001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QvEX4hSwFLN7YX8V3dHpf7
        subject_person_id: p_XNrFBBHzH7BhTmD23UmrPu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣，明人物。曾任吏目。（中国历代人物传记资料库 CBDB 477001）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vGD3Og1w8yWZq2NKGSifUk
          claim_id: c_QvEX4hSwFLN7YX8V3dHpf7
          source_id: s_fJppYCYycdbDhA5JtD6a2y
          stance: supports
          locator: CBDB:477001
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

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| bio.summary | 王珣，明人物。曾任吏目。（中国历代人物传记资料库 CBDB 477001） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珣（CBDB 477001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477001&o=json)
