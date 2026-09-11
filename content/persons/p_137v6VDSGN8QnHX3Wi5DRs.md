---
schema: wang-person/v1
id: p_137v6VDSGN8QnHX3Wi5DRs
status: active
merged_into: null
display_name: 王珪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZbbpzTkGExBfUCMLmnexYK
        subject_person_id: p_137v6VDSGN8QnHX3Wi5DRs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9PwnW6i8mL9MJiTCMr4iUJ
          claim_id: c_ZbbpzTkGExBfUCMLmnexYK
          source_id: s_VYwCSMuN4xN2PSQ7Asb1gQ
          stance: supports
          locator: CBDB:491578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491578）
          source: &a1
            id: s_VYwCSMuN4xN2PSQ7Asb1gQ
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 491578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491578&o=json
            external_identifier: CBDB:491578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PJJ7khuGHwq9BUPBZhkShz
        subject_person_id: p_137v6VDSGN8QnHX3Wi5DRs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，明人物。曾任訓術。（中国历代人物传记资料库 CBDB 491578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-gndXU73bljKBs2Wzj2x_l
          claim_id: c_PJJ7khuGHwq9BUPBZhkShz
          source_id: s_VYwCSMuN4xN2PSQ7Asb1gQ
          stance: supports
          locator: CBDB:491578
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

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，明人物。曾任訓術。（中国历代人物传记资料库 CBDB 491578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 491578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491578&o=json)
