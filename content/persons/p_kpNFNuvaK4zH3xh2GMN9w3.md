---
schema: wang-person/v1
id: p_kpNFNuvaK4zH3xh2GMN9w3
status: active
merged_into: null
display_name: 王道澄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4w5GGWQLqb6BQ2RsgiChD
        subject_person_id: p_kpNFNuvaK4zH3xh2GMN9w3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ww2W7Wr2CD5HBTdckPCpDc
          claim_id: c_L4w5GGWQLqb6BQ2RsgiChD
          source_id: s_qQ1G5FXKxhPWQ9z8mRa479
          stance: supports
          locator: CBDB:640458
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640458）
          source: &a1
            id: s_qQ1G5FXKxhPWQ9z8mRa479
            source_type: api_record
            title: 中国历代人物传记资料库：王道澄（CBDB 640458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640458&o=json
            external_identifier: CBDB:640458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4T3p4xfxEDLRrpErUcLLQf
        subject_person_id: p_kpNFNuvaK4zH3xh2GMN9w3
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
        - id: cs_Fz9tbGc2J7BceGrwQXWPcG
          claim_id: c_4T3p4xfxEDLRrpErUcLLQf
          source_id: s_qQ1G5FXKxhPWQ9z8mRa479
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

# 王道澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道澄 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道澄（CBDB 640458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640458&o=json)
