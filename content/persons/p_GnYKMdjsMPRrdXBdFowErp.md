---
schema: wang-person/v1
id: p_GnYKMdjsMPRrdXBdFowErp
status: active
merged_into: null
display_name: 王紳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2D3KMn7pjFmQYCFJAJwB23
        subject_person_id: p_GnYKMdjsMPRrdXBdFowErp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fNQHPgA37e3QEBf53WwMBN
          claim_id: c_2D3KMn7pjFmQYCFJAJwB23
          source_id: s_pwssHoi6G3nwRvbjMJepQ7
          stance: supports
          locator: CBDB:502095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502095）
          source: &a1
            id: s_pwssHoi6G3nwRvbjMJepQ7
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 502095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502095&o=json
            external_identifier: CBDB:502095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BDFvpSEgwcJunUPNMhs2U7
        subject_person_id: p_GnYKMdjsMPRrdXBdFowErp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 502095）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_smFSXOjj21FD4WRNi5zV7h
          claim_id: c_BDFvpSEgwcJunUPNMhs2U7
          source_id: s_pwssHoi6G3nwRvbjMJepQ7
          stance: supports
          locator: CBDB:502095
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

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| bio.summary | 王紳，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 502095） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 502095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502095&o=json)
