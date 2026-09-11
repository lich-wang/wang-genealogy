---
schema: wang-person/v1
id: p_hGqYpwp76J7WnpdJ5qks7x
status: active
merged_into: null
display_name: 王袞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hmuq9LpzNmQ8B3ksNYSACg
        subject_person_id: p_hGqYpwp76J7WnpdJ5qks7x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4fNYB61kGG2yf9FZvsgNVZ
          claim_id: c_hmuq9LpzNmQ8B3ksNYSACg
          source_id: s_rvcMsNb1tK4uDge9MQK5L5
          stance: supports
          locator: CBDB:38045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38045）
          source: &a1
            id: s_rvcMsNb1tK4uDge9MQK5L5
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 38045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38045&o=json
            external_identifier: CBDB:38045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zbd5NWdJC13XjGD1eRSGKj
        subject_person_id: p_hGqYpwp76J7WnpdJ5qks7x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞，宋人物。籍贯澶州，曾任提舉宮觀、通判、著作佐郎。（中国历代人物传记资料库 CBDB 38045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GsY4-FD_ylot95dunrwZqG
          claim_id: c_zbd5NWdJC13XjGD1eRSGKj
          source_id: s_rvcMsNb1tK4uDge9MQK5L5
          stance: supports
          locator: CBDB:38045
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

# 王袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王袞 | accepted |
| bio.summary | 王袞，宋人物。籍贯澶州，曾任提舉宮觀、通判、著作佐郎。（中国历代人物传记资料库 CBDB 38045） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王袞（CBDB 38045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38045&o=json)
