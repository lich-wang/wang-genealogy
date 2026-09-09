---
schema: wang-person/v1
id: p_EtunJTDuKzmTUvcCoNYvEE
status: active
merged_into: null
display_name: 王棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yrTG5Lt48tTB6Dtyv2Tcfo
        subject_person_id: p_EtunJTDuKzmTUvcCoNYvEE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NLD42JhS7BvtXP4iQpkGs5
          claim_id: c_yrTG5Lt48tTB6Dtyv2Tcfo
          source_id: s_FyPwC1CGbriX4Jrb8FKBXx
          stance: supports
          locator: CBDB:328021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328021）
          source: &a1
            id: s_FyPwC1CGbriX4Jrb8FKBXx
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 328021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328021&o=json
            external_identifier: CBDB:328021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C8Z1JjfrBiQ1i6FLK8yACC
        subject_person_id: p_EtunJTDuKzmTUvcCoNYvEE
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
        - id: cs_zcH5fa7YtgkC9msC4RwwVC
          claim_id: c_C8Z1JjfrBiQ1i6FLK8yACC
          source_id: s_FyPwC1CGbriX4Jrb8FKBXx
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

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 328021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328021&o=json)
