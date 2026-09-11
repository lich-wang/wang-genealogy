---
schema: wang-person/v1
id: p_pJwhh9SEH9qmj8mm8eFbV6
status: active
merged_into: null
display_name: 王宗聖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ged5ceRvTPqrMQJNMdHjnD
        subject_person_id: p_pJwhh9SEH9qmj8mm8eFbV6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗聖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vNAcAeZemqzE3FmiWvoG6L
          claim_id: c_Ged5ceRvTPqrMQJNMdHjnD
          source_id: s_HFGnUSy8bH8Sji1E7tGxtb
          stance: supports
          locator: CBDB:203686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203686）
          source: &a1
            id: s_HFGnUSy8bH8Sji1E7tGxtb
            source_type: api_record
            title: 中国历代人物传记资料库：王宗聖（CBDB 203686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203686&o=json
            external_identifier: CBDB:203686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rsCxwD5ihguKc2tiCpNgtG
        subject_person_id: p_pJwhh9SEH9qmj8mm8eFbV6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1512年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4BoC5Kg8gTRa7GsLV6hc5P
          claim_id: c_rsCxwD5ihguKc2tiCpNgtG
          source_id: s_HFGnUSy8bH8Sji1E7tGxtb
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
        id: c_AqSgt19Pug7MMFzdaqm3PP
        subject_person_id: p_pJwhh9SEH9qmj8mm8eFbV6
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
        - id: cs_yunNeqxTQpDBNd9hqaQDiL
          claim_id: c_AqSgt19Pug7MMFzdaqm3PP
          source_id: s_HFGnUSy8bH8Sji1E7tGxtb
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
  ancestors:
    - claim:
        id: c_uq3AqfBks4fYW7KUMUIhWT
        subject_person_id: p_MyDaVXaQLuCk3aFgXrjx3J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pJwhh9SEH9qmj8mm8eFbV6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9oxBifxrb-KUcuRyq1I29K
          claim_id: c_uq3AqfBks4fYW7KUMUIhWT
          source_id: s_QZmejtzsf3mAUWQzZDfgyd
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第二百一十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QZmejtzsf3mAUWQzZDfgyd
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 308413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308413&o=json
            external_identifier: CBDB:308413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MyDaVXaQLuCk3aFgXrjx3J
        status: active
        display_name: 王琛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宗聖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗聖 | accepted |
| birth.date | 1512年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_MyDaVXaQLuCk3aFgXrjx3J | 王琛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 308413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308413&o=json)
- [中国历代人物传记资料库：王宗聖（CBDB 203686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203686&o=json)
