---
schema: wang-person/v1
id: p_wkotKZqQjaNmCwgnSkqDHm
status: active
merged_into: null
display_name: 王禧年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SdY3TUmWdfiyA5ap93ajpk
        subject_person_id: p_wkotKZqQjaNmCwgnSkqDHm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pSB3u3bYHyX9d3ft8x1pL1
          claim_id: c_SdY3TUmWdfiyA5ap93ajpk
          source_id: s_5c4CXoDC8kJ9hwzGPwJC43
          stance: supports
          locator: CBDB:639622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639622）
          source: &a1
            id: s_5c4CXoDC8kJ9hwzGPwJC43
            source_type: api_record
            title: 中国历代人物传记资料库：王禧年（CBDB 639622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639622&o=json
            external_identifier: CBDB:639622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6KFLsF9GGxMt6AT5UU3w3A
        subject_person_id: p_wkotKZqQjaNmCwgnSkqDHm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧年，清人物。籍贯廣東省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 639622）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HbucmGM1mwE9Pnyge3l6_i
          claim_id: c_6KFLsF9GGxMt6AT5UU3w3A
          source_id: s_5c4CXoDC8kJ9hwzGPwJC43
          stance: supports
          locator: CBDB:639622
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

# 王禧年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禧年 | accepted |
| bio.summary | 王禧年，清人物。籍贯廣東省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 639622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禧年（CBDB 639622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639622&o=json)
