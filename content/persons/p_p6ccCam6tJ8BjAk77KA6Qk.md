---
schema: wang-person/v1
id: p_p6ccCam6tJ8BjAk77KA6Qk
status: active
merged_into: null
display_name: 王葉滋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBBB8E3ymZVZ79NARqXyr1
        subject_person_id: p_p6ccCam6tJ8BjAk77KA6Qk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葉滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JMJuQ3C2yiXmWd868J8Wdd
          claim_id: c_FBBB8E3ymZVZ79NARqXyr1
          source_id: s_w7iKh33DHBgVhmgXGE12G5
          stance: supports
          locator: CBDB:65798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65798）
          source: &a1
            id: s_w7iKh33DHBgVhmgXGE12G5
            source_type: api_record
            title: 中国历代人物传记资料库：王葉滋（CBDB 65798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65798&o=json
            external_identifier: CBDB:65798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.094Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9Wciti5Pe3M2Snn58TH7Q9
        subject_person_id: p_p6ccCam6tJ8BjAk77KA6Qk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1682年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZqwT6KhsFYmzmDjWwqGBgq
          claim_id: c_9Wciti5Pe3M2Snn58TH7Q9
          source_id: s_w7iKh33DHBgVhmgXGE12G5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FErierpMw1XA2phTUYcJ9n
        subject_person_id: p_p6ccCam6tJ8BjAk77KA6Qk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1736年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gYj7v28zHtxXv7myqSnB3T
          claim_id: c_FErierpMw1XA2phTUYcJ9n
          source_id: s_w7iKh33DHBgVhmgXGE12G5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_btyTtLvVAYKGriLAtdbwM1
        subject_person_id: p_p6ccCam6tJ8BjAk77KA6Qk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葉滋（1682年—1736年），清人物。籍贯華亭，入仕進士，曾任道副使、知府。（中国历代人物传记资料库 CBDB 65798）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DBJhfu5jSF8GiutdICQjGE
          claim_id: c_btyTtLvVAYKGriLAtdbwM1
          source_id: s_w7iKh33DHBgVhmgXGE12G5
          stance: supports
          locator: CBDB:65798
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

# 王葉滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葉滋 | accepted |
| birth.date | 1682年 | accepted |
| death.date | 1736年 | accepted |
| bio.summary | 王葉滋（1682年—1736年），清人物。籍贯華亭，入仕進士，曾任道副使、知府。（中国历代人物传记资料库 CBDB 65798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葉滋（CBDB 65798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65798&o=json)
