---
schema: wang-person/v1
id: p_hhR1V5tPmSVTGDPg8u7UdZ
status: active
merged_into: null
display_name: 王金華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HoViF197eajy49a5PCzwq5
        subject_person_id: p_hhR1V5tPmSVTGDPg8u7UdZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qm256ha9nywGiDcu34c3cK
          claim_id: c_HoViF197eajy49a5PCzwq5
          source_id: s_KRctj49xgj5KChAVSFuTAc
          stance: supports
          locator: CBDB:640522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640522）
          source: &a1
            id: s_KRctj49xgj5KChAVSFuTAc
            source_type: api_record
            title: 中国历代人物传记资料库：王金華（CBDB 640522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640522&o=json
            external_identifier: CBDB:640522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mMPxfqeV84nPktvnwZf9Ei
        subject_person_id: p_hhR1V5tPmSVTGDPg8u7UdZ
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
        - id: cs_1qxhR4yWN1P3UmZdFW9ZhD
          claim_id: c_mMPxfqeV84nPktvnwZf9Ei
          source_id: s_KRctj49xgj5KChAVSFuTAc
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

# 王金華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金華 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金華（CBDB 640522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640522&o=json)
