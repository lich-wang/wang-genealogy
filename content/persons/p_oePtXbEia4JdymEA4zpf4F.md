---
schema: wang-person/v1
id: p_oePtXbEia4JdymEA4zpf4F
status: active
merged_into: null
display_name: 王明發
cbdb_id: 37650
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tK6zn6wyJB1VshMsMxE7u4
        subject_person_id: p_oePtXbEia4JdymEA4zpf4F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明發，宋人物。籍贯明州，入仕進士，曾任朝奉大夫、丁母憂。（中国历代人物传记资料库 CBDB 37650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ZDjlnwCnwktfWovknQ_1kC
          claim_id: c_tK6zn6wyJB1VshMsMxE7u4
          source_id: s_HykdcvMzY9upHcCw6ge4AJ
          stance: supports
          locator: CBDB:37650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HykdcvMzY9upHcCw6ge4AJ
            source_type: api_record
            title: 中国历代人物传记资料库：王明發（CBDB 37650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37650&o=json
            external_identifier: CBDB:37650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pHqvpT2pqP2yzQJHdz8asR
        subject_person_id: p_oePtXbEia4JdymEA4zpf4F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YjSquN63zYMxFEjF13FGCz
          claim_id: c_pHqvpT2pqP2yzQJHdz8asR
          source_id: s_HykdcvMzY9upHcCw6ge4AJ
          stance: supports
          locator: CBDB:37650
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
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

# 王明發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王明發，宋人物。籍贯明州，入仕進士，曾任朝奉大夫、丁母憂。（中国历代人物传记资料库 CBDB 37650） | accepted |
| name.primary | 王明發 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明發（CBDB 37650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37650&o=json)
