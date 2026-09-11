---
schema: wang-person/v1
id: p_2oy62EEzX8avtnwM7s1tDJ
status: active
merged_into: null
display_name: 王綸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9cmyRaC7y7Yt4WvDmPfrfj
        subject_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ww5e958tiTHgdGLQJZ5d3q
          claim_id: c_9cmyRaC7y7Yt4WvDmPfrfj
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
          stance: supports
          locator: CBDB:201866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201866）
          source: &a1
            id: s_EMFDyqiwB7TGfKzHDKUFLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 201866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201866&o=json
            external_identifier: CBDB:201866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2Mf5mp4FqH8MTWNDHMYJCs
        subject_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PL8nGX5iPKGtv7eUGxcs5B
          claim_id: c_2Mf5mp4FqH8MTWNDHMYJCs
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
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
        id: c_Q1MUh8AvqHe59o3Ne7tqzb
        subject_person_id: p_2oy62EEzX8avtnwM7s1tDJ
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
        - id: cs_G4wTkRBQmJdwod7FDJGR67
          claim_id: c_Q1MUh8AvqHe59o3Ne7tqzb
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QShgYdZtskdA69OkmeoAix
        subject_person_id: p_x9Awku7CAnQGUksh5ZJJfC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QzBHRfn5rX-qzQhEXnviMy
          claim_id: c_QShgYdZtskdA69OkmeoAix
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x9Awku7CAnQGUksh5ZJJfC
        status: active
        display_name: 王衛道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_b07Kbvtw4kmbqpefZDPur6
        subject_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9EBaBaERe4jyRALGPp5X8f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9FFpJxO7IwCNRcSjf408eb
          claim_id: c_b07Kbvtw4kmbqpefZDPur6
          source_id: s_74Hs2yXXHS5pFHZsbHV-b0
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_74Hs2yXXHS5pFHZsbHV-b0
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王綸妻)（CBDB 279468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279468&o=json
            external_identifier: CBDB:279468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9EBaBaERe4jyRALGPp5X8f
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Ibv9YP8kbvKqyAacmdwox0
        subject_person_id: p_8dgAxfFfVEMLHEpMDD9hvE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BVQxjP0HLW2XeBNAHM5y7h
          claim_id: c_Ibv9YP8kbvKqyAacmdwox0
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8dgAxfFfVEMLHEpMDD9hvE
        status: active
        display_name: 王賢佐
        merged_into_person_id: null
    - claim:
        id: c_eeIaf8Enxb67OMUnC5-hBm
        subject_person_id: p_ptGw2Ux5EUNCZB6gq3DCnB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pe-8DxAMiChQwVYSQFHPL_
          claim_id: c_eeIaf8Enxb67OMUnC5-hBm
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ptGw2Ux5EUNCZB6gq3DCnB
        status: active
        display_name: 王拱仁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| birth.date | 1485年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x9Awku7CAnQGUksh5ZJJfC | 王衛道 | accepted |
| spouses | p_9EBaBaERe4jyRALGPp5X8f | 張氏 | accepted |
| ancestors | p_8dgAxfFfVEMLHEpMDD9hvE | 王賢佐 | accepted |
| ancestors | p_ptGw2Ux5EUNCZB6gq3DCnB | 王拱仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 201866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201866&o=json)
- [中国历代人物传记资料库：張氏(王綸妻)（CBDB 279468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279468&o=json)
