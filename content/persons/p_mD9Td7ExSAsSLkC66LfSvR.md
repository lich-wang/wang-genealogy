---
schema: wang-person/v1
id: p_mD9Td7ExSAsSLkC66LfSvR
status: active
merged_into: null
display_name: 王大貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NhNjX78UmCtBP47QponTDA
        subject_person_id: p_mD9Td7ExSAsSLkC66LfSvR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HQAAhbHamP8YfntheEezbt
          claim_id: c_NhNjX78UmCtBP47QponTDA
          source_id: s_bv7E64RDSiFyy8ha2FBQMA
          stance: supports
          locator: CBDB:636916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636916）
          source: &a1
            id: s_bv7E64RDSiFyy8ha2FBQMA
            source_type: api_record
            title: 中国历代人物传记资料库：王大貞（CBDB 636916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636916&o=json
            external_identifier: CBDB:636916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nKeaLCAKjNq9LzPvxfDSNa
        subject_person_id: p_mD9Td7ExSAsSLkC66LfSvR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大貞，清人物。籍贯晉江，入仕鄉貢舉人，曾任郎中、主事。（中国历代人物传记资料库 CBDB 636916）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eoIPNQ9upvdpF6aE-4V7wM
          claim_id: c_nKeaLCAKjNq9LzPvxfDSNa
          source_id: s_bv7E64RDSiFyy8ha2FBQMA
          stance: supports
          locator: CBDB:636916
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

# 王大貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大貞 | accepted |
| bio.summary | 王大貞，清人物。籍贯晉江，入仕鄉貢舉人，曾任郎中、主事。（中国历代人物传记资料库 CBDB 636916） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大貞（CBDB 636916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636916&o=json)
