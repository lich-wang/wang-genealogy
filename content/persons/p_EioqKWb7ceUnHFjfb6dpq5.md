---
schema: wang-person/v1
id: p_EioqKWb7ceUnHFjfb6dpq5
status: active
merged_into: null
display_name: 王金發
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DJWgGpsGkChctRLx18Bbpv
        subject_person_id: p_EioqKWb7ceUnHFjfb6dpq5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EB63SCndCBCg1MqG3T7DnM
          claim_id: c_DJWgGpsGkChctRLx18Bbpv
          source_id: s_idjDegUFu72osmUUqVd35E
          stance: supports
          locator: CBDB:71780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71780）
          source: &a1
            id: s_idjDegUFu72osmUUqVd35E
            source_type: api_record
            title: 中国历代人物传记资料库：王金發（CBDB 71780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71780&o=json
            external_identifier: CBDB:71780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_87CkhFKpdSTn4ccAZuJBfi
        subject_person_id: p_EioqKWb7ceUnHFjfb6dpq5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1883年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PnC4pyqzSvJ6HBtQqk5nE9
          claim_id: c_87CkhFKpdSTn4ccAZuJBfi
          source_id: s_idjDegUFu72osmUUqVd35E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7AHfU3yXXUUyFgKz3D728L
        subject_person_id: p_EioqKWb7ceUnHFjfb6dpq5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1915年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cQwiorgQPB6kgxhfFGkL2p
          claim_id: c_7AHfU3yXXUUyFgKz3D728L
          source_id: s_idjDegUFu72osmUUqVd35E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KPabEkXCrvPPC12pYrG4xf
        subject_person_id: p_EioqKWb7ceUnHFjfb6dpq5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金發（1883年—1915年），中華民國人物。籍贯嵊縣。（中国历代人物传记资料库 CBDB 71780）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_spNavvH7CMyV2Ga4COj1ue
          claim_id: c_KPabEkXCrvPPC12pYrG4xf
          source_id: s_idjDegUFu72osmUUqVd35E
          stance: supports
          locator: CBDB:71780
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

# 王金發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金發 | accepted |
| birth.date | 1883年 | accepted |
| death.date | 1915年 | accepted |
| bio.summary | 王金發（1883年—1915年），中華民國人物。籍贯嵊縣。（中国历代人物传记资料库 CBDB 71780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金發（CBDB 71780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71780&o=json)
