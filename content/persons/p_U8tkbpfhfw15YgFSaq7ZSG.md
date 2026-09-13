---
schema: wang-person/v1
id: p_U8tkbpfhfw15YgFSaq7ZSG
status: merged
merged_into: p_hEEpn7U7EKTTeFP3ixWWbm
display_name: 王禔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRAE3sYQ9bLTVKGiuvAmb1
        subject_person_id: p_U8tkbpfhfw15YgFSaq7ZSG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uEPoCGXFNnmsMje7QvZtWA
          claim_id: c_oRAE3sYQ9bLTVKGiuvAmb1
          source_id: s_h9y4oT6A6XMdpJGHmqQSr5
          stance: supports
          locator: CBDB:17426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17426）
          source: &a1
            id: s_h9y4oT6A6XMdpJGHmqQSr5
            source_type: api_record
            title: 中国历代人物传记资料库：王禔（CBDB 17426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17426&o=json
            external_identifier: CBDB:17426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y3KZDCKHL3qJitRSNXLTtr
        subject_person_id: p_U8tkbpfhfw15YgFSaq7ZSG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禔，宋人物。籍贯鄞縣，曾任朝散大夫、左朝散大夫、府。（中国历代人物传记资料库 CBDB 17426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3HdsiecClEJ5tGY4KGJiXM
          claim_id: c_y3KZDCKHL3qJitRSNXLTtr
          source_id: s_h9y4oT6A6XMdpJGHmqQSr5
          stance: supports
          locator: CBDB:17426
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

# 王禔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禔 | accepted |
| bio.summary | 王禔，宋人物。籍贯鄞縣，曾任朝散大夫、左朝散大夫、府。（中国历代人物传记资料库 CBDB 17426） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禔（CBDB 17426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17426&o=json)
