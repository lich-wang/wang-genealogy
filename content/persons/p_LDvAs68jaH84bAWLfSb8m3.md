---
schema: wang-person/v1
id: p_LDvAs68jaH84bAWLfSb8m3
status: active
merged_into: null
display_name: 王得隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N6hSSG7rHXR7iKG6toqrBU
        subject_person_id: p_LDvAs68jaH84bAWLfSb8m3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ajWD7BtT7K2MExBEK9pw6x
          claim_id: c_N6hSSG7rHXR7iKG6toqrBU
          source_id: s_XPMANt3NNo4H2HYMvAirLP
          stance: supports
          locator: CBDB:637652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637652）
          source: &a1
            id: s_XPMANt3NNo4H2HYMvAirLP
            source_type: api_record
            title: 中国历代人物传记资料库：王得隆（CBDB 637652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637652&o=json
            external_identifier: CBDB:637652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MwLqMDpitv3y6jEj6U7dCM
        subject_person_id: p_LDvAs68jaH84bAWLfSb8m3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得隆，清人物。籍贯河南省，入仕進士，曾任右營都司。（中国历代人物传记资料库 CBDB 637652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aTQYSMEVv-qw8Z7vTReyYl
          claim_id: c_MwLqMDpitv3y6jEj6U7dCM
          source_id: s_XPMANt3NNo4H2HYMvAirLP
          stance: supports
          locator: CBDB:637652
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

# 王得隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得隆 | accepted |
| bio.summary | 王得隆，清人物。籍贯河南省，入仕進士，曾任右營都司。（中国历代人物传记资料库 CBDB 637652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得隆（CBDB 637652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637652&o=json)
