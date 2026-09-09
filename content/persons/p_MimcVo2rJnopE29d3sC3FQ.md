---
schema: wang-person/v1
id: p_MimcVo2rJnopE29d3sC3FQ
status: active
merged_into: null
display_name: 王倫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3URVWEq7KX9hTKj2KPKGEX
        subject_person_id: p_MimcVo2rJnopE29d3sC3FQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rf5aCMEr5jNxeGHU9cVeWy
          claim_id: c_3URVWEq7KX9hTKj2KPKGEX
          source_id: s_P8GRQjxT2X2j8VEvLJF9Fp
          stance: supports
          locator: CBDB:482861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482861）
          source: &a1
            id: s_P8GRQjxT2X2j8VEvLJF9Fp
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 482861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482861&o=json
            external_identifier: CBDB:482861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cLfRHJ6rMGX5Ey6KwMpVHS
        subject_person_id: p_MimcVo2rJnopE29d3sC3FQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mf67ibpHWg1hRaLheugWKe
          claim_id: c_cLfRHJ6rMGX5Ey6KwMpVHS
          source_id: s_P8GRQjxT2X2j8VEvLJF9Fp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 482861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482861&o=json)
