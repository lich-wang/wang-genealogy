---
schema: wang-person/v1
id: p_8jRiYXCjV6tD1mdoRKKN3W
status: active
merged_into: null
display_name: 王祿書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2PwoTzcPXLuBQBCbn9whgu
        subject_person_id: p_8jRiYXCjV6tD1mdoRKKN3W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_23J1YzwWHk4yyvqT9uMp1n
          claim_id: c_2PwoTzcPXLuBQBCbn9whgu
          source_id: s_D3rvEr6QRy3CCt7f54d9NC
          stance: supports
          locator: CBDB:639598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639598）
          source: &a1
            id: s_D3rvEr6QRy3CCt7f54d9NC
            source_type: api_record
            title: 中国历代人物传记资料库：王祿書（CBDB 639598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639598&o=json
            external_identifier: CBDB:639598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J1bjtWnPQSsPz8WZwnqBwa
        subject_person_id: p_8jRiYXCjV6tD1mdoRKKN3W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿書，清人物。籍贯甘泉，入仕鄉貢舉人，曾任郎中。（中国历代人物传记资料库 CBDB 639598）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eqTBao0QBMy7L-7_PQWyLD
          claim_id: c_J1bjtWnPQSsPz8WZwnqBwa
          source_id: s_D3rvEr6QRy3CCt7f54d9NC
          stance: supports
          locator: CBDB:639598
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

# 王祿書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿書 | accepted |
| bio.summary | 王祿書，清人物。籍贯甘泉，入仕鄉貢舉人，曾任郎中。（中国历代人物传记资料库 CBDB 639598） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祿書（CBDB 639598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639598&o=json)
