---
schema: wang-person/v1
id: p_5bRG9DFw6EucCupc5tziz4
status: active
merged_into: null
display_name: 王彥成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GELSysgSufRDsDFwpmfx64
        subject_person_id: p_5bRG9DFw6EucCupc5tziz4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92Lic4n3MKkAuSBpdFr1Da
          claim_id: c_GELSysgSufRDsDFwpmfx64
          source_id: s_KrWzBQ2kT1yUSPnBDEcjR1
          stance: supports
          locator: CBDB:37643
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37643）
          source: &a1
            id: s_KrWzBQ2kT1yUSPnBDEcjR1
            source_type: api_record
            title: 中国历代人物传记资料库：王彥成（CBDB 37643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37643&o=json
            external_identifier: CBDB:37643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AP1Hxr2cETiuC4USPfE4Bi
        subject_person_id: p_5bRG9DFw6EucCupc5tziz4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1091年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mJFJ1R8M6fNQNo3oSX9f6a
          claim_id: c_AP1Hxr2cETiuC4USPfE4Bi
          source_id: s_KrWzBQ2kT1yUSPnBDEcjR1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RKEGo9DX6h3GhxLa7DvQJ1
        subject_person_id: p_5bRG9DFw6EucCupc5tziz4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M72NVVCgKBtj79yaZm3CFN
          claim_id: c_RKEGo9DX6h3GhxLa7DvQJ1
          source_id: s_KrWzBQ2kT1yUSPnBDEcjR1
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

# 王彥成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥成 | accepted |
| birth.date | 1091年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥成（CBDB 37643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37643&o=json)
