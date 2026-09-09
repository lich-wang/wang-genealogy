---
schema: wang-person/v1
id: p_Y17xfzPGVLstPa5NGJrj41
status: active
merged_into: null
display_name: 王愛良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g7Ds4wSLdTEfCnn2a2PGD7
        subject_person_id: p_Y17xfzPGVLstPa5NGJrj41
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rWNtH5SSPJZiM4yP55kYJk
          claim_id: c_g7Ds4wSLdTEfCnn2a2PGD7
          source_id: s_qpCFDPVYT2LtWZ4xMCT1Rd
          stance: supports
          locator: CBDB:703581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703581）
          source: &a1
            id: s_qpCFDPVYT2LtWZ4xMCT1Rd
            source_type: api_record
            title: 中国历代人物传记资料库：王愛良（CBDB 703581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703581&o=json
            external_identifier: CBDB:703581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EW9DyWjMhP26qkkKD8a8BH
        subject_person_id: p_Y17xfzPGVLstPa5NGJrj41
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
        - id: cs_Mx1WZPbTPNRA6LhEa8cQAP
          claim_id: c_EW9DyWjMhP26qkkKD8a8BH
          source_id: s_qpCFDPVYT2LtWZ4xMCT1Rd
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

# 王愛良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愛良 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愛良（CBDB 703581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703581&o=json)
