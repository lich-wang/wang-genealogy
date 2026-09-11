---
schema: wang-person/v1
id: p_6KR7P6p4KneqnP2rd3a97L
status: active
merged_into: null
display_name: 王納言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LHTuu9n5jfr5fmrMUW2u6X
        subject_person_id: p_6KR7P6p4KneqnP2rd3a97L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3rvLVJoAaKMagZFDJEYkin
          claim_id: c_LHTuu9n5jfr5fmrMUW2u6X
          source_id: s_ZRxgiEfNxUKQt8qiQnPJw3
          stance: supports
          locator: CBDB:342340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342340）
          source: &a1
            id: s_ZRxgiEfNxUKQt8qiQnPJw3
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 342340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342340&o=json
            external_identifier: CBDB:342340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W9tc8dicN2wg3MNHj15oZY
        subject_person_id: p_6KR7P6p4KneqnP2rd3a97L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言，明人物。明清進士進士，籍贯富順，入仕進士。（中国历代人物传记资料库 CBDB 342340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bc6-Amoj3orqyXreIbNW2R
          claim_id: c_W9tc8dicN2wg3MNHj15oZY
          source_id: s_ZRxgiEfNxUKQt8qiQnPJw3
          stance: supports
          locator: CBDB:342340
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

# 王納言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納言 | accepted |
| bio.summary | 王納言，明人物。明清進士進士，籍贯富順，入仕進士。（中国历代人物传记资料库 CBDB 342340） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王納言（CBDB 342340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342340&o=json)
