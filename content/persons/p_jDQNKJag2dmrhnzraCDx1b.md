---
schema: wang-person/v1
id: p_jDQNKJag2dmrhnzraCDx1b
status: active
merged_into: null
display_name: 王鳳梧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h4FhnFw1T6T942fPVvbc1r
        subject_person_id: p_jDQNKJag2dmrhnzraCDx1b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳梧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LKZpiCgA1Q7m3PZQQbduUA
          claim_id: c_h4FhnFw1T6T942fPVvbc1r
          source_id: s_hhXkYKZC7nGdLo41e8LRjC
          stance: supports
          locator: CBDB:640936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640936）
          source: &a1
            id: s_hhXkYKZC7nGdLo41e8LRjC
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳梧（CBDB 640936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640936&o=json
            external_identifier: CBDB:640936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2GfqCCMh55ADxHfPK9dNEJ
        subject_person_id: p_jDQNKJag2dmrhnzraCDx1b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳梧，清人物。籍贯正陽，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640936）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QPXP7YRJxPJ8fqUQOtJV4J
          claim_id: c_2GfqCCMh55ADxHfPK9dNEJ
          source_id: s_hhXkYKZC7nGdLo41e8LRjC
          stance: supports
          locator: CBDB:640936
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

# 王鳳梧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳梧 | accepted |
| bio.summary | 王鳳梧，清人物。籍贯正陽，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳梧（CBDB 640936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640936&o=json)
