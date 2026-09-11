---
schema: wang-person/v1
id: p_rUncesZYCq9mFUJbWXZCd3
status: active
merged_into: null
display_name: 王修甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B2mnDshysh4wUWCPe3jWuV
        subject_person_id: p_rUncesZYCq9mFUJbWXZCd3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JE1MLWYpf9wCRVZ9Kf2UU2
          claim_id: c_B2mnDshysh4wUWCPe3jWuV
          source_id: s_MeEC7brLFfLiwUMwf9Ytae
          stance: supports
          locator: CBDB:92056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92056）
          source: &a1
            id: s_MeEC7brLFfLiwUMwf9Ytae
            source_type: api_record
            title: 中国历代人物传记资料库：王修甫（CBDB 92056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92056&o=json
            external_identifier: CBDB:92056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_32Q5d5Sh2ZjjP5pQTyiPrG
        subject_person_id: p_rUncesZYCq9mFUJbWXZCd3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修甫，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 92056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gNJ2O5_xb3SYaXDTqhCYTU
          claim_id: c_32Q5d5Sh2ZjjP5pQTyiPrG
          source_id: s_MeEC7brLFfLiwUMwf9Ytae
          stance: supports
          locator: CBDB:92056
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

# 王修甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修甫 | accepted |
| bio.summary | 王修甫，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 92056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修甫（CBDB 92056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92056&o=json)
