---
schema: wang-person/v1
id: p_TMeqLfAT841BJKjHU7SvtN
status: active
merged_into: null
display_name: 王君賞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y4BUKFQJqWvuy1WCo7RwpY
        subject_person_id: p_TMeqLfAT841BJKjHU7SvtN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君賞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VwWch4bKwHGHYUEQiRqxxV
          claim_id: c_Y4BUKFQJqWvuy1WCo7RwpY
          source_id: s_YF3TGhHX62T2obymWSriWS
          stance: supports
          locator: CBDB:467738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467738）
          source: &a1
            id: s_YF3TGhHX62T2obymWSriWS
            source_type: api_record
            title: 中国历代人物传记资料库：王君賞（CBDB 467738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467738&o=json
            external_identifier: CBDB:467738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B6GefjNTr9RXaWhGPp2EfA
        subject_person_id: p_TMeqLfAT841BJKjHU7SvtN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君賞，明人物。曾任巡按御史。（中国历代人物传记资料库 CBDB 467738）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_83SWYOb-JbsEn2tok7QMa6
          claim_id: c_B6GefjNTr9RXaWhGPp2EfA
          source_id: s_YF3TGhHX62T2obymWSriWS
          stance: supports
          locator: CBDB:467738
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

# 王君賞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君賞 | accepted |
| bio.summary | 王君賞，明人物。曾任巡按御史。（中国历代人物传记资料库 CBDB 467738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王君賞（CBDB 467738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467738&o=json)
