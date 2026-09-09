---
schema: wang-person/v1
id: p_YJU1x78rm8f7i4LfU3HvqS
status: active
merged_into: null
display_name: 王畹香
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GGYbh8P9QQGDFHtxMffLo6
        subject_person_id: p_YJU1x78rm8f7i4LfU3HvqS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畹香
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mC3GUU9VfH911pQ1rbHGVJ
          claim_id: c_GGYbh8P9QQGDFHtxMffLo6
          source_id: s_kC1h3fBL5B2PGfGmdyhxBL
          stance: supports
          locator: CBDB:568783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568783）
          source: &a1
            id: s_kC1h3fBL5B2PGfGmdyhxBL
            source_type: api_record
            title: 中国历代人物传记资料库：王畹香（CBDB 568783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568783&o=json
            external_identifier: CBDB:568783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TzP8ajmhtTLsxBve7dKDLb
        subject_person_id: p_YJU1x78rm8f7i4LfU3HvqS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XGkxCeFqWQYxRLpHshC3p5
          claim_id: c_TzP8ajmhtTLsxBve7dKDLb
          source_id: s_kC1h3fBL5B2PGfGmdyhxBL
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

# 王畹香

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王畹香 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王畹香（CBDB 568783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568783&o=json)
