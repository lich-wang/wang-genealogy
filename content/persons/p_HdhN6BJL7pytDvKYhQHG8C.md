---
schema: wang-person/v1
id: p_HdhN6BJL7pytDvKYhQHG8C
status: active
merged_into: null
display_name: 王景
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2MbYqSWYRfmKiHWxoCaCrQ
        subject_person_id: p_HdhN6BJL7pytDvKYhQHG8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hWMDEPZTpGETwnKgvR67Xy
          claim_id: c_2MbYqSWYRfmKiHWxoCaCrQ
          source_id: s_5fuT73951QFNDfeWZ6Fwd1
          stance: supports
          locator: CBDB:463797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（463797）
          source: &a1
            id: s_5fuT73951QFNDfeWZ6Fwd1
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 463797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463797&o=json
            external_identifier: CBDB:463797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3dFLD42YwpqaapEorik3nT
        subject_person_id: p_HdhN6BJL7pytDvKYhQHG8C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景，宋人物。曾任節度使。（中国历代人物传记资料库 CBDB 463797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_99hTRsCFGHJRH4akw6mBDV
          claim_id: c_3dFLD42YwpqaapEorik3nT
          source_id: s_5fuT73951QFNDfeWZ6Fwd1
          stance: supports
          locator: CBDB:463797
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

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| bio.summary | 王景，宋人物。曾任節度使。（中国历代人物传记资料库 CBDB 463797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 463797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463797&o=json)
