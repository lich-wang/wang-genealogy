---
schema: wang-person/v1
id: p_qVBJb169BDHQKKqV3gB6Fn
status: active
merged_into: null
display_name: 王家轍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h9RR9syC2iQhB3wJB1GTo9
        subject_person_id: p_qVBJb169BDHQKKqV3gB6Fn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家轍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aVqfi6YgUuCY7XbLguwvUh
          claim_id: c_h9RR9syC2iQhB3wJB1GTo9
          source_id: s_NxSsPrqiVBBTwpSDhcxTtG
          stance: supports
          locator: CBDB:637219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637219）
          source: &a1
            id: s_NxSsPrqiVBBTwpSDhcxTtG
            source_type: api_record
            title: 中国历代人物传记资料库：王家轍（CBDB 637219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637219&o=json
            external_identifier: CBDB:637219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CWHCp6RCREnze2BzgVAZsY
        subject_person_id: p_qVBJb169BDHQKKqV3gB6Fn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家轍，清人物。籍贯臨安，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 637219）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BF98N72Adyn-xi1WT0-o8U
          claim_id: c_CWHCp6RCREnze2BzgVAZsY
          source_id: s_NxSsPrqiVBBTwpSDhcxTtG
          stance: supports
          locator: CBDB:637219
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

# 王家轍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家轍 | accepted |
| bio.summary | 王家轍，清人物。籍贯臨安，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 637219） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家轍（CBDB 637219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637219&o=json)
