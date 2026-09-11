---
schema: wang-person/v1
id: p_x6wj7BA4cWtHr3xDK2HVWH
status: active
merged_into: null
display_name: 王爲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_14zckEonaQPxYUH3Z4Dvpf
        subject_person_id: p_x6wj7BA4cWtHr3xDK2HVWH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X26VCiLrL246iffbh4LCCS
          claim_id: c_14zckEonaQPxYUH3Z4Dvpf
          source_id: s_qzcZ5UZz8PV8z5S9mFwKVF
          stance: supports
          locator: CBDB:694938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694938）
          source: &a1
            id: s_qzcZ5UZz8PV8z5S9mFwKVF
            source_type: api_record
            title: 中国历代人物传记资料库：王爲（CBDB 694938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694938&o=json
            external_identifier: CBDB:694938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T7F4kLKooJKod8PDECUyXS
        subject_person_id: p_x6wj7BA4cWtHr3xDK2HVWH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爲，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 694938）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CgPFrjx7SnaDOX07X84HDc
          claim_id: c_T7F4kLKooJKod8PDECUyXS
          source_id: s_qzcZ5UZz8PV8z5S9mFwKVF
          stance: supports
          locator: CBDB:694938
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

# 王爲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爲 | accepted |
| bio.summary | 王爲，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 694938） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爲（CBDB 694938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694938&o=json)
