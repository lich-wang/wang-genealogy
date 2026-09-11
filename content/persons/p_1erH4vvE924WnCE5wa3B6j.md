---
schema: wang-person/v1
id: p_1erH4vvE924WnCE5wa3B6j
status: active
merged_into: null
display_name: 王應堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cju4yojxzKeQV2VKXj3e4v
        subject_person_id: p_1erH4vvE924WnCE5wa3B6j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PUQpDDX3Xu76VUFfRp6w6Y
          claim_id: c_Cju4yojxzKeQV2VKXj3e4v
          source_id: s_QXap4S1VuLKqQHWyDH8BT6
          stance: supports
          locator: CBDB:637980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637980）
          source: &a1
            id: s_QXap4S1VuLKqQHWyDH8BT6
            source_type: api_record
            title: 中国历代人物传记资料库：王應堂（CBDB 637980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637980&o=json
            external_identifier: CBDB:637980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wxYZLJagHXUZyvq5LQF9Gk
        subject_person_id: p_1erH4vvE924WnCE5wa3B6j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應堂，清人物。籍贯河內，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 637980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2H9s6DZt9Nq3qwP4Uyyvcw
          claim_id: c_wxYZLJagHXUZyvq5LQF9Gk
          source_id: s_QXap4S1VuLKqQHWyDH8BT6
          stance: supports
          locator: CBDB:637980
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

# 王應堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應堂 | accepted |
| bio.summary | 王應堂，清人物。籍贯河內，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 637980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應堂（CBDB 637980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637980&o=json)
