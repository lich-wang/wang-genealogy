---
schema: wang-person/v1
id: p_eKrzMPVSkrsedCB3YNRsrk
status: active
merged_into: null
display_name: 王崑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c47cpm68F2XEgudpsMo5bn
        subject_person_id: p_eKrzMPVSkrsedCB3YNRsrk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NF3febq64NYVPGXQbNBMDG
          claim_id: c_c47cpm68F2XEgudpsMo5bn
          source_id: s_bNm9sc7buVvXqdG4F8yv4p
          stance: supports
          locator: CBDB:490077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490077）
          source: &a1
            id: s_bNm9sc7buVvXqdG4F8yv4p
            source_type: api_record
            title: 中国历代人物传记资料库：王崑（CBDB 490077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490077&o=json
            external_identifier: CBDB:490077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4zmV1spY1CVRDCcNfpR5Ey
        subject_person_id: p_eKrzMPVSkrsedCB3YNRsrk
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
        - id: cs_LS2atQ57ZeijWgij4Y7bio
          claim_id: c_4zmV1spY1CVRDCcNfpR5Ey
          source_id: s_bNm9sc7buVvXqdG4F8yv4p
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

# 王崑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崑（CBDB 490077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490077&o=json)
