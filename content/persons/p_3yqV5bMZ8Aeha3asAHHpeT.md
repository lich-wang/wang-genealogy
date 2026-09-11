---
schema: wang-person/v1
id: p_3yqV5bMZ8Aeha3asAHHpeT
status: active
merged_into: null
display_name: 王紹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1gsAdeQfR6X9HtEFpJ6nzV
        subject_person_id: p_3yqV5bMZ8Aeha3asAHHpeT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z5MJiiy9R3GNA7H89TmY39
          claim_id: c_1gsAdeQfR6X9HtEFpJ6nzV
          source_id: s_ezbnw4uqhVWfpv5omhHyr5
          stance: supports
          locator: CBDB:342423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342423）
          source: &a1
            id: s_ezbnw4uqhVWfpv5omhHyr5
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 342423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342423&o=json
            external_identifier: CBDB:342423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nfMzY5t7f8H9RppBtz5ZTG
        subject_person_id: p_3yqV5bMZ8Aeha3asAHHpeT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹，明人物。明清進士進士，籍贯舒城，入仕進士。（中国历代人物传记资料库 CBDB 342423）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5GPShz0-IqlB6Cy3pmUevL
          claim_id: c_nfMzY5t7f8H9RppBtz5ZTG
          source_id: s_ezbnw4uqhVWfpv5omhHyr5
          stance: supports
          locator: CBDB:342423
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

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| bio.summary | 王紹，明人物。明清進士進士，籍贯舒城，入仕進士。（中国历代人物传记资料库 CBDB 342423） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹（CBDB 342423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342423&o=json)
