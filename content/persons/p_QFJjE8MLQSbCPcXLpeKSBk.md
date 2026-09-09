---
schema: wang-person/v1
id: p_QFJjE8MLQSbCPcXLpeKSBk
status: active
merged_into: null
display_name: 王珪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GRQduFrHEi4HLa3xsGmzQS
        subject_person_id: p_QFJjE8MLQSbCPcXLpeKSBk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aDegSruQ1ECEx9mr4JyPhR
          claim_id: c_GRQduFrHEi4HLa3xsGmzQS
          source_id: s_NTcCub8NV99BswAnga1DC8
          stance: supports
          locator: CBDB:485022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（485022）
          source: &a1
            id: s_NTcCub8NV99BswAnga1DC8
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 485022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485022&o=json
            external_identifier: CBDB:485022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QroCP1TXamQiGVuJrNayew
        subject_person_id: p_QFJjE8MLQSbCPcXLpeKSBk
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
        - id: cs_5jEEtrqLt5SmVmgLRhR2Ca
          claim_id: c_QroCP1TXamQiGVuJrNayew
          source_id: s_NTcCub8NV99BswAnga1DC8
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

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 485022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485022&o=json)
