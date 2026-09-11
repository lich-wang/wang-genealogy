---
schema: wang-person/v1
id: p_n4HnwyXBowzKCKTnFGS9jZ
status: active
merged_into: null
display_name: 王恕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fKGjW6zyYtdLn4YP15KxKi
        subject_person_id: p_n4HnwyXBowzKCKTnFGS9jZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NZSrqjiZi6kpn1gzT8MtM2
          claim_id: c_fKGjW6zyYtdLn4YP15KxKi
          source_id: s_44xqapKsf8VJHnW9hc4xis
          stance: supports
          locator: CBDB:508438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508438）
          source: &a1
            id: s_44xqapKsf8VJHnW9hc4xis
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 508438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508438&o=json
            external_identifier: CBDB:508438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hD4DUBFbSFKRPdm3nHuBKF
        subject_person_id: p_n4HnwyXBowzKCKTnFGS9jZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕，明人物。入仕世襲(替)。（中国历代人物传记资料库 CBDB 508438）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sko9kInauWuX3WDBN0SN9z
          claim_id: c_hD4DUBFbSFKRPdm3nHuBKF
          source_id: s_44xqapKsf8VJHnW9hc4xis
          stance: supports
          locator: CBDB:508438
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

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| bio.summary | 王恕，明人物。入仕世襲(替)。（中国历代人物传记资料库 CBDB 508438） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 508438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508438&o=json)
