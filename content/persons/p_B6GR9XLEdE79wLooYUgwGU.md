---
schema: wang-person/v1
id: p_B6GR9XLEdE79wLooYUgwGU
status: active
merged_into: null
display_name: 王修月
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BN3PKW7PjaCMJs5BNApLdc
        subject_person_id: p_B6GR9XLEdE79wLooYUgwGU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修月
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wAz2jGZD8Mo7TvBErEwRP3
          claim_id: c_BN3PKW7PjaCMJs5BNApLdc
          source_id: s_Z6hoLi9uqzQaWBgRAeuTL6
          stance: supports
          locator: CBDB:568741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568741）
          source: &a1
            id: s_Z6hoLi9uqzQaWBgRAeuTL6
            source_type: api_record
            title: 中国历代人物传记资料库：王修月（CBDB 568741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568741&o=json
            external_identifier: CBDB:568741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wd8r4ZNynWNL1vTD96QmTC
        subject_person_id: p_B6GR9XLEdE79wLooYUgwGU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修月，清人物。籍贯杭州府。（中国历代人物传记资料库 CBDB 568741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HiOdScQMeqCms6p52MZHgU
          claim_id: c_Wd8r4ZNynWNL1vTD96QmTC
          source_id: s_Z6hoLi9uqzQaWBgRAeuTL6
          stance: supports
          locator: CBDB:568741
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

# 王修月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修月 | accepted |
| bio.summary | 王修月，清人物。籍贯杭州府。（中国历代人物传记资料库 CBDB 568741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修月（CBDB 568741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568741&o=json)
