---
schema: wang-person/v1
id: p_eXbfnLumK74re9bXfGtZE3
status: active
merged_into: null
display_name: 王永明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y18HAM49h68iSTRxzZRqzC
        subject_person_id: p_eXbfnLumK74re9bXfGtZE3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7k1u4NZ9Lq4UEMVhPiseFD
          claim_id: c_y18HAM49h68iSTRxzZRqzC
          source_id: s_8A256qh2Msbwmdu6FuHiuL
          stance: supports
          locator: CBDB:638982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638982）
          source: &a1
            id: s_8A256qh2Msbwmdu6FuHiuL
            source_type: api_record
            title: 中国历代人物传记资料库：王永明（CBDB 638982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638982&o=json
            external_identifier: CBDB:638982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G7cZCs926nU1TKS1D528HN
        subject_person_id: p_eXbfnLumK74re9bXfGtZE3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王永明，清人物。籍贯莒州，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638982）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YZ0ksPV-0c7Qq-UEsuCgYq
          claim_id: c_G7cZCs926nU1TKS1D528HN
          source_id: s_8A256qh2Msbwmdu6FuHiuL
          stance: supports
          locator: CBDB:638982
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

# 王永明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永明 | accepted |
| bio.summary | 王永明，清人物。籍贯莒州，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永明（CBDB 638982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638982&o=json)
