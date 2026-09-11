---
schema: wang-person/v1
id: p_Mxydf7taFTFTWKymG4eY9S
status: active
merged_into: null
display_name: 王遼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3q9H8GHVaBv7DyQCGsaya8
        subject_person_id: p_Mxydf7taFTFTWKymG4eY9S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PJQBJXF8kRzqMxemi2MHDb
          claim_id: c_3q9H8GHVaBv7DyQCGsaya8
          source_id: s_5zuE5uqW3ht64LfASHvt35
          stance: supports
          locator: CBDB:535949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535949）
          source: &a1
            id: s_5zuE5uqW3ht64LfASHvt35
            source_type: api_record
            title: 中国历代人物传记资料库：王遼（CBDB 535949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535949&o=json
            external_identifier: CBDB:535949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GCy4nnA2RgVHGMYV2vG6vL
        subject_person_id: p_Mxydf7taFTFTWKymG4eY9S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遼，宋人物。籍贯六合，入仕進士。（中国历代人物传记资料库 CBDB 535949）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hujce0c0O3jM31TTUqtdnU
          claim_id: c_GCy4nnA2RgVHGMYV2vG6vL
          source_id: s_5zuE5uqW3ht64LfASHvt35
          stance: supports
          locator: CBDB:535949
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

# 王遼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遼 | accepted |
| bio.summary | 王遼，宋人物。籍贯六合，入仕進士。（中国历代人物传记资料库 CBDB 535949） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遼（CBDB 535949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535949&o=json)
