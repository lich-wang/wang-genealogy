---
schema: wang-person/v1
id: p_FbmutpELQmT8RY3xeYQt2J
status: active
merged_into: null
display_name: 王榆善
cbdb_id: 414885
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dPVE8phyHx4HHut1hyQctX
        subject_person_id: p_FbmutpELQmT8RY3xeYQt2J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榆善，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414885）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Y_XRg0ONvUIsg_Gr7kAiCX
          claim_id: c_dPVE8phyHx4HHut1hyQctX
          source_id: s_r2QBd2Pp3N5AEDP5voY9kV
          stance: supports
          locator: CBDB:414885
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r2QBd2Pp3N5AEDP5voY9kV
            source_type: api_record
            title: 中国历代人物传记资料库：王榆善（CBDB 414885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414885&o=json
            external_identifier: CBDB:414885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:40.762Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f2Hx3dJhCJvsyDeCZsiz6c
        subject_person_id: p_FbmutpELQmT8RY3xeYQt2J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榆善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_di22WN5D2NCAJTSwtgtctL
          claim_id: c_f2Hx3dJhCJvsyDeCZsiz6c
          source_id: s_r2QBd2Pp3N5AEDP5voY9kV
          stance: supports
          locator: CBDB:414885
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5801-5900）｜历史性依据：CBDB 朝代 = 清
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

# 王榆善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王榆善，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414885） | accepted |
| name.primary | 王榆善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榆善（CBDB 414885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414885&o=json)
