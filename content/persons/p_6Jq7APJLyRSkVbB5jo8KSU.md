---
schema: wang-person/v1
id: p_6Jq7APJLyRSkVbB5jo8KSU
status: active
merged_into: null
display_name: 王復
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kR9UmKtXsrHtM6422G7HtJ
        subject_person_id: p_6Jq7APJLyRSkVbB5jo8KSU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BQRt2oQix5g8YHyRD3dj38
          claim_id: c_kR9UmKtXsrHtM6422G7HtJ
          source_id: s_8KeTqjatdHTjZRVVJNSWhh
          stance: supports
          locator: CBDB:215743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215743）
          source: &a1
            id: s_8KeTqjatdHTjZRVVJNSWhh
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 215743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215743&o=json
            external_identifier: CBDB:215743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_urWxWjskJT3gmiDeKj9Ytf
        subject_person_id: p_6Jq7APJLyRSkVbB5jo8KSU
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
        - id: cs_VPKbr27Y2t2RkPBZ4w87ZL
          claim_id: c_urWxWjskJT3gmiDeKj9Ytf
          source_id: s_8KeTqjatdHTjZRVVJNSWhh
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

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 215743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215743&o=json)
