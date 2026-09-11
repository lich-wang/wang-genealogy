---
schema: wang-person/v1
id: p_73WRcTL7p7XYw6KEAPS5AP
status: active
merged_into: null
display_name: 王輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xHfAjKRPZzcjc4GtunWrQx
        subject_person_id: p_73WRcTL7p7XYw6KEAPS5AP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hg8TvAPkDDzfynRcai4Cis
          claim_id: c_xHfAjKRPZzcjc4GtunWrQx
          source_id: s_Lb6dkDKM4Z5LtJ7opd42wE
          stance: supports
          locator: CBDB:500335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500335）
          source: &a1
            id: s_Lb6dkDKM4Z5LtJ7opd42wE
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 500335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500335&o=json
            external_identifier: CBDB:500335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_weE7d3ZP1e98XRHrspiiBv
        subject_person_id: p_73WRcTL7p7XYw6KEAPS5AP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔，清人物。入仕監生，曾任兵備道。（中国历代人物传记资料库 CBDB 500335）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Aa0yClZtM9GJ9G_LBLms8n
          claim_id: c_weE7d3ZP1e98XRHrspiiBv
          source_id: s_Lb6dkDKM4Z5LtJ7opd42wE
          stance: supports
          locator: CBDB:500335
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

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | 王輔，清人物。入仕監生，曾任兵備道。（中国历代人物传记资料库 CBDB 500335） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 500335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500335&o=json)
