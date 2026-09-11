---
schema: wang-person/v1
id: p_yFi7MXFeidwv4kDwkJRh44
status: active
merged_into: null
display_name: 王琰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vzwEPx2KT2M68PZPDLpEh4
        subject_person_id: p_yFi7MXFeidwv4kDwkJRh44
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wihNNYT6JTPqpqbazzNbFT
          claim_id: c_vzwEPx2KT2M68PZPDLpEh4
          source_id: s_z6CXDGdPL594UXAMwEZmqy
          stance: supports
          locator: CBDB:563042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563042）
          source: &a1
            id: s_z6CXDGdPL594UXAMwEZmqy
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 563042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563042&o=json
            external_identifier: CBDB:563042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SGZxJ2Dpv6QAdEmtwj4fCM
        subject_person_id: p_yFi7MXFeidwv4kDwkJRh44
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰，宋人物。籍贯通遠軍。（中国历代人物传记资料库 CBDB 563042）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TOy8Y6P3J2DME22Btpcnp-
          claim_id: c_SGZxJ2Dpv6QAdEmtwj4fCM
          source_id: s_z6CXDGdPL594UXAMwEZmqy
          stance: supports
          locator: CBDB:563042
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

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | 王琰，宋人物。籍贯通遠軍。（中国历代人物传记资料库 CBDB 563042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琰（CBDB 563042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563042&o=json)
