---
schema: wang-person/v1
id: p_KqZTWrS4mmCBA7tub81ES3
status: active
merged_into: null
display_name: 王繹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwAMbgJNHEmhpNq775ryTe
        subject_person_id: p_KqZTWrS4mmCBA7tub81ES3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vd1RCMVH1LeqicQ6KH3dBj
          claim_id: c_EwAMbgJNHEmhpNq775ryTe
          source_id: s_LtcVQuivziWDwXnkECRKBG
          stance: supports
          locator: CBDB:687962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687962）
          source: &a1
            id: s_LtcVQuivziWDwXnkECRKBG
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 687962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687962&o=json
            external_identifier: CBDB:687962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uNvhDAy6VZs8aSGA4rT5ts
        subject_person_id: p_KqZTWrS4mmCBA7tub81ES3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹，宋人物。籍贯莆田，入仕正奏名諸科(不含明經、明法)。（中国历代人物传记资料库 CBDB 687962）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g2BT2QV1zJdVnewe5eCec1
          claim_id: c_uNvhDAy6VZs8aSGA4rT5ts
          source_id: s_LtcVQuivziWDwXnkECRKBG
          stance: supports
          locator: CBDB:687962
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

# 王繹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繹 | accepted |
| bio.summary | 王繹，宋人物。籍贯莆田，入仕正奏名諸科(不含明經、明法)。（中国历代人物传记资料库 CBDB 687962） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繹（CBDB 687962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687962&o=json)
