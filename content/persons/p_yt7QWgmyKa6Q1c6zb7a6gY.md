---
schema: wang-person/v1
id: p_yt7QWgmyKa6Q1c6zb7a6gY
status: active
merged_into: null
display_name: 王言綍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_95BWzTChG8MBn2tLkv1Xb7
        subject_person_id: p_yt7QWgmyKa6Q1c6zb7a6gY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言綍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BAuuNuQPvPAa3S3yZj4TVY
          claim_id: c_95BWzTChG8MBn2tLkv1Xb7
          source_id: s_2t7vVrKXrMn9uB38cwB1NQ
          stance: supports
          locator: CBDB:493341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493341）
          source: &a1
            id: s_2t7vVrKXrMn9uB38cwB1NQ
            source_type: api_record
            title: 中国历代人物传记资料库：王言綍（CBDB 493341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493341&o=json
            external_identifier: CBDB:493341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P9KLCC6Y1xLHbVBeJn18Mr
        subject_person_id: p_yt7QWgmyKa6Q1c6zb7a6gY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王言綍，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 493341）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BTQwFkJ9w3pYo9DECbKIdi
          claim_id: c_P9KLCC6Y1xLHbVBeJn18Mr
          source_id: s_2t7vVrKXrMn9uB38cwB1NQ
          stance: supports
          locator: CBDB:493341
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

# 王言綍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言綍 | accepted |
| bio.summary | 王言綍，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 493341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言綍（CBDB 493341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493341&o=json)
