---
schema: wang-person/v1
id: p_xF3ZqgD3XmMyiZXdZvaeJQ
status: active
merged_into: null
display_name: 王明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fFVebgFUhccSLZ21TbjyKZ
        subject_person_id: p_xF3ZqgD3XmMyiZXdZvaeJQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CZK2CZ22aJ9WCmfeQsEsC9
          claim_id: c_fFVebgFUhccSLZ21TbjyKZ
          source_id: s_6bvngHSBvLFnThaET13x5Y
          stance: supports
          locator: CBDB:39487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39487）
          source: &a1
            id: s_6bvngHSBvLFnThaET13x5Y
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 39487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39487&o=json
            external_identifier: CBDB:39487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nqbMnjvLhvipFboUMSCHoF
        subject_person_id: p_xF3ZqgD3XmMyiZXdZvaeJQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 39487）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ATbCWgLKwpom1IITcGeG7c
          claim_id: c_nqbMnjvLhvipFboUMSCHoF
          source_id: s_6bvngHSBvLFnThaET13x5Y
          stance: supports
          locator: CBDB:39487
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

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | 王明，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 39487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 39487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39487&o=json)
