---
schema: wang-person/v1
id: p_BEHRDKgG9F9BMM1znHVqbq
status: active
merged_into: null
display_name: 王表
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_82quw8d1crQG3RsVkZP7Ci
        subject_person_id: p_BEHRDKgG9F9BMM1znHVqbq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pup5S32RpQr12rxiwbS3Ci
          claim_id: c_82quw8d1crQG3RsVkZP7Ci
          source_id: s_NJqMf86SidS7tgqLTWGeZ3
          stance: supports
          locator: CBDB:499768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499768）
          source: &a1
            id: s_NJqMf86SidS7tgqLTWGeZ3
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 499768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499768&o=json
            external_identifier: CBDB:499768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mche1Git71qmBfBZ7kXM36
        subject_person_id: p_BEHRDKgG9F9BMM1znHVqbq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 499768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YnXB-q1sjNYzR_28giFH2-
          claim_id: c_mche1Git71qmBfBZ7kXM36
          source_id: s_NJqMf86SidS7tgqLTWGeZ3
          stance: supports
          locator: CBDB:499768
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

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王表 | accepted |
| bio.summary | 王表，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 499768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 499768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499768&o=json)
