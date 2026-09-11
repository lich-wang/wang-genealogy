---
schema: wang-person/v1
id: p_oqqAqEmNmpPFsevd4rAqoR
status: active
merged_into: null
display_name: 王喜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1B9LCQH9b9P2JWd2Jr6Urp
        subject_person_id: p_oqqAqEmNmpPFsevd4rAqoR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4VyzaL1PD2TZeGZ3qEiF4y
          claim_id: c_1B9LCQH9b9P2JWd2Jr6Urp
          source_id: s_KZmHwxY44j8Q7aRHeqtkzB
          stance: supports
          locator: CBDB:100817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100817）
          source: &a1
            id: s_KZmHwxY44j8Q7aRHeqtkzB
            source_type: api_record
            title: 中国历代人物传记资料库：王喜（CBDB 100817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100817&o=json
            external_identifier: CBDB:100817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_95ALx8VZiH2U6weSHEaNmD
        subject_person_id: p_oqqAqEmNmpPFsevd4rAqoR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜，元人物。籍贯宿州，曾任知州。（中国历代人物传记资料库 CBDB 100817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jPV2TlsNyepyACpgfxFHYm
          claim_id: c_95ALx8VZiH2U6weSHEaNmD
          source_id: s_KZmHwxY44j8Q7aRHeqtkzB
          stance: supports
          locator: CBDB:100817
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

# 王喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喜 | accepted |
| bio.summary | 王喜，元人物。籍贯宿州，曾任知州。（中国历代人物传记资料库 CBDB 100817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喜（CBDB 100817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100817&o=json)
