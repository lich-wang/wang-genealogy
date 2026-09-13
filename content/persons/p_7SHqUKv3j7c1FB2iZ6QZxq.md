---
schema: wang-person/v1
id: p_7SHqUKv3j7c1FB2iZ6QZxq
status: active
merged_into: null
display_name: 王繼成
cbdb_id: 415272
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TL7CuFJYqtPQVbENtz9nXB
        subject_person_id: p_7SHqUKv3j7c1FB2iZ6QZxq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼成，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 415272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eMeuytYBrQmb6PmsWhzHbu
          claim_id: c_TL7CuFJYqtPQVbENtz9nXB
          source_id: s_Haa41xm1sMuFnUf6WBFK23
          stance: supports
          locator: CBDB:415272
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Haa41xm1sMuFnUf6WBFK23
            source_type: api_record
            title: 中国历代人物传记资料库：王繼成（CBDB 415272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415272&o=json
            external_identifier: CBDB:415272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:53.628Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oX1tPXz3FnAH9Sn5DuZ6Jc
        subject_person_id: p_7SHqUKv3j7c1FB2iZ6QZxq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7ZTBa4Mz5WCq9urFMuYiCv
          claim_id: c_oX1tPXz3FnAH9Sn5DuZ6Jc
          source_id: s_Haa41xm1sMuFnUf6WBFK23
          stance: supports
          locator: CBDB:415272
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6201-6300）｜历史性依据：CBDB 朝代 = 清
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

# 王繼成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼成，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 415272） | accepted |
| name.primary | 王繼成 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼成（CBDB 415272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415272&o=json)
