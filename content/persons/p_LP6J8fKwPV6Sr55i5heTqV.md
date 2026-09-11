---
schema: wang-person/v1
id: p_LP6J8fKwPV6Sr55i5heTqV
status: active
merged_into: null
display_name: 王頍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YaB9FdyN2dSt1vpHhfoaYK
        subject_person_id: p_LP6J8fKwPV6Sr55i5heTqV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FVSF5sbzQNmkGYdzm2LoRP
          claim_id: c_YaB9FdyN2dSt1vpHhfoaYK
          source_id: s_4wgxuJ5TaoSYC5EtC5Kjsr
          stance: supports
          locator: CBDB:175862
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175862）
          source: &a1
            id: s_4wgxuJ5TaoSYC5EtC5Kjsr
            source_type: api_record
            title: 中国历代人物传记资料库：王頍（CBDB 175862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175862&o=json
            external_identifier: CBDB:175862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jVKqUoxt65JCSFV4VNP7or
        subject_person_id: p_LP6J8fKwPV6Sr55i5heTqV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 593年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pmhmMN2PvLMRH2wQG4Vrxz
          claim_id: c_jVKqUoxt65JCSFV4VNP7or
          source_id: s_4wgxuJ5TaoSYC5EtC5Kjsr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aoc6Av5ktyhgg8qvbmJET4
        subject_person_id: p_LP6J8fKwPV6Sr55i5heTqV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oEXtCRSZEukN5Qc1ACcFJ2
          claim_id: c_aoc6Av5ktyhgg8qvbmJET4
          source_id: s_4wgxuJ5TaoSYC5EtC5Kjsr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2WS6azCo05umJ6CknvK2xm
        subject_person_id: p_LP6J8fKwPV6Sr55i5heTqV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6yXPTPamMspPfd1UEnA2CC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fo5G4ZeA604EYDKXmT5m07
          claim_id: c_2WS6azCo05umJ6CknvK2xm
          source_id: s_6aEXboTgyymn5sZNW2nRtj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6aEXboTgyymn5sZNW2nRtj
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 175863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175863&o=json
            external_identifier: CBDB:175863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6yXPTPamMspPfd1UEnA2CC
        status: active
        display_name: 王遵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王頍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頍 | accepted |
| death.date | 593年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6yXPTPamMspPfd1UEnA2CC | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頍（CBDB 175862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175862&o=json)
- [中国历代人物传记资料库：王遵（CBDB 175863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175863&o=json)
