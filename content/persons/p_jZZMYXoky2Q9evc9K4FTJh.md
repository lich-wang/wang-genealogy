---
schema: wang-person/v1
id: p_jZZMYXoky2Q9evc9K4FTJh
status: active
merged_into: null
display_name: 王藻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9LBhNyEreK9KBYzGwg9BSd
        subject_person_id: p_jZZMYXoky2Q9evc9K4FTJh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_spo3324TqmUTE9pHLDegNN
          claim_id: c_9LBhNyEreK9KBYzGwg9BSd
          source_id: s_RNR1dfjJ2itjBxNmrMCz6V
          stance: supports
          locator: CBDB:36349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36349）
          source: &a1
            id: s_RNR1dfjJ2itjBxNmrMCz6V
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 36349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36349&o=json
            external_identifier: CBDB:36349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kuD8H21MXzJZdFiLEvrHEF
        subject_person_id: p_jZZMYXoky2Q9evc9K4FTJh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻，宋人物。籍贯臨川。（中国历代人物传记资料库 CBDB 36349）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VvQh58sEnTztw4rZAYQJt0
          claim_id: c_kuD8H21MXzJZdFiLEvrHEF
          source_id: s_RNR1dfjJ2itjBxNmrMCz6V
          stance: supports
          locator: CBDB:36349
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F9hBTbNLTAz5O4EuIuENXD
        subject_person_id: p_wMzMMZUYVLTvRNNyoinudX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jZZMYXoky2Q9evc9K4FTJh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9bCDO__bsdPvEWhRBx38Qx
          claim_id: c_F9hBTbNLTAz5O4EuIuENXD
          source_id: s_5bPgP2-jYRazAKGfXkLB3u
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26353）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_5bPgP2-jYRazAKGfXkLB3u
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 36349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36349&o=json
            external_identifier: CBDB:36349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wMzMMZUYVLTvRNNyoinudX
        status: active
        display_name: 王檢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| bio.summary | 王藻，宋人物。籍贯臨川。（中国历代人物传记资料库 CBDB 36349） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wMzMMZUYVLTvRNNyoinudX | 王檢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藻（CBDB 36349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36349&o=json)
