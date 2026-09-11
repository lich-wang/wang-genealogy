---
schema: wang-person/v1
id: p_TS8273Y79wYURzagt41oQZ
status: active
merged_into: null
display_name: 王佩玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ehU4qvebGWS72VBFRVc5hE
        subject_person_id: p_TS8273Y79wYURzagt41oQZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mPV5KECf7HSRSvQa7F6CAR
          claim_id: c_ehU4qvebGWS72VBFRVc5hE
          source_id: s_MgVmoRZf3vaRwKG6hMMbtT
          stance: supports
          locator: CBDB:636013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636013）
          source: &a1
            id: s_MgVmoRZf3vaRwKG6hMMbtT
            source_type: api_record
            title: 中国历代人物传记资料库：王佩玉（CBDB 636013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636013&o=json
            external_identifier: CBDB:636013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZyNCoJ9DNFB2iCrF3ZJdZp
        subject_person_id: p_TS8273Y79wYURzagt41oQZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩玉，清人物。籍贯寶寧，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636013）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wNYhTxrM3T4gUX8UiIxO3h
          claim_id: c_ZyNCoJ9DNFB2iCrF3ZJdZp
          source_id: s_MgVmoRZf3vaRwKG6hMMbtT
          stance: supports
          locator: CBDB:636013
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

# 王佩玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩玉 | accepted |
| bio.summary | 王佩玉，清人物。籍贯寶寧，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636013） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩玉（CBDB 636013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636013&o=json)
