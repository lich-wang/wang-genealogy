---
schema: wang-person/v1
id: p_m3uomHwoopaPPeFMKVD7LC
status: active
merged_into: null
display_name: 王楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WiyGQi1GYhEV5Ds2BBDUSi
        subject_person_id: p_m3uomHwoopaPPeFMKVD7LC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBSKcbk6SdNNHGB2sBLst5
          claim_id: c_WiyGQi1GYhEV5Ds2BBDUSi
          source_id: s_X6WHE52jrKM3mnu43RX8sU
          stance: supports
          locator: CBDB:510254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510254）
          source: &a1
            id: s_X6WHE52jrKM3mnu43RX8sU
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 510254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510254&o=json
            external_identifier: CBDB:510254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qzp5HDLot3LzFRfnob2guC
        subject_person_id: p_m3uomHwoopaPPeFMKVD7LC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UCmP6F9jHX2vNqq6ozuQxR
          claim_id: c_qzp5HDLot3LzFRfnob2guC
          source_id: s_X6WHE52jrKM3mnu43RX8sU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楷（CBDB 510254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510254&o=json)
