---
schema: wang-person/v1
id: p_6HuDivMra3F8YF6aP7qd27
status: active
merged_into: null
display_name: 王建
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m889AVKtMyRG7hJ5a7ER1b
        subject_person_id: p_6HuDivMra3F8YF6aP7qd27
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BuKE5PwtvAC1EPj3k9xfhy
          claim_id: c_m889AVKtMyRG7hJ5a7ER1b
          source_id: s_pd6cpY1oTdNfzE59tFpR6E
          stance: supports
          locator: CBDB:38164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38164）
          source: &a1
            id: s_pd6cpY1oTdNfzE59tFpR6E
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 38164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38164&o=json
            external_identifier: CBDB:38164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mLXNh3YLd7ieFwfTkP9Vo8
        subject_person_id: p_6HuDivMra3F8YF6aP7qd27
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建，宋人物。入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 38164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LZMnODr6BKrzDD7dg07UZJ
          claim_id: c_mLXNh3YLd7ieFwfTkP9Vo8
          source_id: s_pd6cpY1oTdNfzE59tFpR6E
          stance: supports
          locator: CBDB:38164
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

# 王建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建 | accepted |
| bio.summary | 王建，宋人物。入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 38164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建（CBDB 38164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38164&o=json)
