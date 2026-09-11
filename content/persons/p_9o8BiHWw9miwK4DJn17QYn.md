---
schema: wang-person/v1
id: p_9o8BiHWw9miwK4DJn17QYn
status: active
merged_into: null
display_name: 王遵道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_geALDZN4aUxNpTsyqtEY2Q
        subject_person_id: p_9o8BiHWw9miwK4DJn17QYn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_123NuzjNSNwU8sfskrrt6s
          claim_id: c_geALDZN4aUxNpTsyqtEY2Q
          source_id: s_L6xSGBKi8tfsjmVup3yGu1
          stance: supports
          locator: CBDB:685322
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685322）
          source: &a1
            id: s_L6xSGBKi8tfsjmVup3yGu1
            source_type: api_record
            title: 中国历代人物传记资料库：王遵道（CBDB 685322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685322&o=json
            external_identifier: CBDB:685322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RVMgG8ZLDJftHyGAqCDeD8
        subject_person_id: p_9o8BiHWw9miwK4DJn17QYn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵道，宋人物。籍贯長興，入仕進士。（中国历代人物传记资料库 CBDB 685322）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IAknjM2nHZnFCqj1Wzgf2S
          claim_id: c_RVMgG8ZLDJftHyGAqCDeD8
          source_id: s_L6xSGBKi8tfsjmVup3yGu1
          stance: supports
          locator: CBDB:685322
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

# 王遵道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵道 | accepted |
| bio.summary | 王遵道，宋人物。籍贯長興，入仕進士。（中国历代人物传记资料库 CBDB 685322） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遵道（CBDB 685322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685322&o=json)
