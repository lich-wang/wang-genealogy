---
schema: wang-person/v1
id: p_b9BosizY678mqTJvwfhNMJ
status: active
merged_into: null
display_name: 王宫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4LJpkRRoWjUNfQYF598adu
        subject_person_id: p_b9BosizY678mqTJvwfhNMJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宫
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iG6L4oBkN9YkL9AJshQYTd
          claim_id: c_4LJpkRRoWjUNfQYF598adu
          source_id: s_Gtr9K4Bs1eAd22qwmj7heB
          stance: supports
          locator: CBDB:501632
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501632）
          source: &a1
            id: s_Gtr9K4Bs1eAd22qwmj7heB
            source_type: api_record
            title: 中国历代人物传记资料库：王宫（CBDB 501632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501632&o=json
            external_identifier: CBDB:501632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YgyWCnB7D29s6RRSGUuQj6
        subject_person_id: p_b9BosizY678mqTJvwfhNMJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宫，明人物。入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 501632）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rwRngOX8KSWSyLIN8A2L-C
          claim_id: c_YgyWCnB7D29s6RRSGUuQj6
          source_id: s_Gtr9K4Bs1eAd22qwmj7heB
          stance: supports
          locator: CBDB:501632
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

# 王宫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宫 | accepted |
| bio.summary | 王宫，明人物。入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 501632） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宫（CBDB 501632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501632&o=json)
