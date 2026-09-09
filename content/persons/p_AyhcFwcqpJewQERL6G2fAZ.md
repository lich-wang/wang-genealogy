---
schema: wang-person/v1
id: p_AyhcFwcqpJewQERL6G2fAZ
status: active
merged_into: null
display_name: 王景珠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BCQ6PxQXjkXn2TZMnQs2eR
        subject_person_id: p_AyhcFwcqpJewQERL6G2fAZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QsieP9DCJU7DbMmfJpSCWZ
          claim_id: c_BCQ6PxQXjkXn2TZMnQs2eR
          source_id: s_sWAGJC72cfzkHkZm3vePRv
          stance: supports
          locator: CBDB:638497
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638497）
          source: &a1
            id: s_sWAGJC72cfzkHkZm3vePRv
            source_type: api_record
            title: 中国历代人物传记资料库：王景珠（CBDB 638497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638497&o=json
            external_identifier: CBDB:638497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ky3uBB3v23VVgnj3B22Mbh
        subject_person_id: p_AyhcFwcqpJewQERL6G2fAZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXSJ3Fwt51x7WRgw55vHiP
          claim_id: c_Ky3uBB3v23VVgnj3B22Mbh
          source_id: s_sWAGJC72cfzkHkZm3vePRv
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

# 王景珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景珠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景珠（CBDB 638497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638497&o=json)
