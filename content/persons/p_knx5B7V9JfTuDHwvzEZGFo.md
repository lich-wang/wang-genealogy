---
schema: wang-person/v1
id: p_knx5B7V9JfTuDHwvzEZGFo
status: active
merged_into: null
display_name: 王伸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yvPt6fZh4fzmS7gBeUsVcR
        subject_person_id: p_knx5B7V9JfTuDHwvzEZGFo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AFAh4Y6tQfBSxAN8hBKB9x
          claim_id: c_yvPt6fZh4fzmS7gBeUsVcR
          source_id: s_1J6FL4P9sJAHPiKg6iUtB6
          stance: supports
          locator: CBDB:456411
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456411）
          source: &a1
            id: s_1J6FL4P9sJAHPiKg6iUtB6
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 456411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456411&o=json
            external_identifier: CBDB:456411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jKLwSenz4xD7MVtJHy1vmX
        subject_person_id: p_knx5B7V9JfTuDHwvzEZGFo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸，清人物。曾任同知。（中国历代人物传记资料库 CBDB 456411）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hv61fn_9wrD7hf5mOIEaom
          claim_id: c_jKLwSenz4xD7MVtJHy1vmX
          source_id: s_1J6FL4P9sJAHPiKg6iUtB6
          stance: supports
          locator: CBDB:456411
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

# 王伸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伸 | accepted |
| bio.summary | 王伸，清人物。曾任同知。（中国历代人物传记资料库 CBDB 456411） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伸（CBDB 456411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456411&o=json)
