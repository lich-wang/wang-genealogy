---
schema: wang-person/v1
id: p_gnWtUJFNbS7rZiUrdzFxVM
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 557673
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kjhi7oQGKm7EnkqGZYyWYr
        subject_person_id: p_gnWtUJFNbS7rZiUrdzFxVM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FaVrFXAX1xZ0L8sFBYY20_
          claim_id: c_Kjhi7oQGKm7EnkqGZYyWYr
          source_id: s_VPyASDI9VsPJ0wuGAQCHFi
          stance: supports
          locator: CBDB:557673
          quotation: null
          interpretation_note: CBDB 明确记录的王國白配偶
          source: &a1
            id: s_VPyASDI9VsPJ0wuGAQCHFi
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王國白妻)（CBDB 557673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557673&o=json
            external_identifier: CBDB:557673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_0hJFPqLMwlR0rCndAukU83
        subject_person_id: p_kWT4ahRnkBSRHNq3CUCc8p
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gnWtUJFNbS7rZiUrdzFxVM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-thNGhqUAufAB1FYcF3Atv
          claim_id: c_0hJFPqLMwlR0rCndAukU83
          source_id: s_VPyASDI9VsPJ0wuGAQCHFi
          stance: supports
          locator: 南陽府志，lgid=878789：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kWT4ahRnkBSRHNq3CUCc8p
        status: active
        display_name: 王國白
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kWT4ahRnkBSRHNq3CUCc8p | 王國白 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王國白妻)（CBDB 557673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557673&o=json)
