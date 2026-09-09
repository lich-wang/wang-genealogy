---
schema: wang-person/v1
id: p_mwYJV5WL8CpJH6Dx5ZeWwH
status: active
merged_into: null
display_name: 王諫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jbcus1NH7HyjU1Cf7N4Jcs
        subject_person_id: p_mwYJV5WL8CpJH6Dx5ZeWwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AQFTbmw8rB93whXTJKVo4o
          claim_id: c_Jbcus1NH7HyjU1Cf7N4Jcs
          source_id: s_E8SCDJCATmG6Vgs6EA39TF
          stance: supports
          locator: CBDB:318546
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318546）
          source: &a1
            id: s_E8SCDJCATmG6Vgs6EA39TF
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 318546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318546&o=json
            external_identifier: CBDB:318546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CA6Y39YPBdTwd3Gaausr1o
        subject_person_id: p_mwYJV5WL8CpJH6Dx5ZeWwH
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
        - id: cs_fXtk3QdGjWA3jbvfHdGpyH
          claim_id: c_CA6Y39YPBdTwd3Gaausr1o
          source_id: s_E8SCDJCATmG6Vgs6EA39TF
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

# 王諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諫（CBDB 318546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318546&o=json)
