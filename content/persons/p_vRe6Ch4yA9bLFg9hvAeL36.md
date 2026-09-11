---
schema: wang-person/v1
id: p_vRe6Ch4yA9bLFg9hvAeL36
status: active
merged_into: null
display_name: 王濂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S9yHT4Z4WPQDXVYYTMCm45
        subject_person_id: p_vRe6Ch4yA9bLFg9hvAeL36
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RJd8QZ4fEUW1HPRrvmrntV
          claim_id: c_S9yHT4Z4WPQDXVYYTMCm45
          source_id: s_4CNBparAYncS2Cb9A4bWKL
          stance: supports
          locator: CBDB:464908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（464908）
          source: &a1
            id: s_4CNBparAYncS2Cb9A4bWKL
            source_type: api_record
            title: 中国历代人物传记资料库：王濂（CBDB 464908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464908&o=json
            external_identifier: CBDB:464908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iJPH8BVU1MqwC1Sxgc9qcq
        subject_person_id: p_vRe6Ch4yA9bLFg9hvAeL36
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濂，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 464908）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_319l23UHRNeGB5Aqf8zIUS
          claim_id: c_iJPH8BVU1MqwC1Sxgc9qcq
          source_id: s_4CNBparAYncS2Cb9A4bWKL
          stance: supports
          locator: CBDB:464908
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

# 王濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濂 | accepted |
| bio.summary | 王濂，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 464908） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濂（CBDB 464908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464908&o=json)
