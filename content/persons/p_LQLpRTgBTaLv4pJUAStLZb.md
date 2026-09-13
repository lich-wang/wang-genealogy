---
schema: wang-person/v1
id: p_LQLpRTgBTaLv4pJUAStLZb
status: active
merged_into: null
display_name: 王惟叢
cbdb_id: 414611
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NaVBeDeNp5HfhD56DbzNqB
        subject_person_id: p_LQLpRTgBTaLv4pJUAStLZb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟叢，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414611）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gcwD2tEnea3v0kaF8ZSEIn
          claim_id: c_NaVBeDeNp5HfhD56DbzNqB
          source_id: s_uWJ8UB4JKAqEy7xmW1PtEz
          stance: supports
          locator: CBDB:414611
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uWJ8UB4JKAqEy7xmW1PtEz
            source_type: api_record
            title: 中国历代人物传记资料库：王惟叢（CBDB 414611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414611&o=json
            external_identifier: CBDB:414611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:36.869Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQ5o3DAVXhtEb8Z7CgJQhr
        subject_person_id: p_LQLpRTgBTaLv4pJUAStLZb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟叢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ujxkTLB6eGbxvJHbTzSpT2
          claim_id: c_EQ5o3DAVXhtEb8Z7CgJQhr
          source_id: s_uWJ8UB4JKAqEy7xmW1PtEz
          stance: supports
          locator: CBDB:414611
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5601-5700）｜历史性依据：CBDB 朝代 = 清
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

# 王惟叢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟叢，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414611） | accepted |
| name.primary | 王惟叢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟叢（CBDB 414611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414611&o=json)
