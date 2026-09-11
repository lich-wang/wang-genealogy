---
schema: wang-person/v1
id: p_6yXPTPamMspPfd1UEnA2CC
status: active
merged_into: null
display_name: 王遵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_73tsLiddLRMhhHq9reggoX
        subject_person_id: p_6yXPTPamMspPfd1UEnA2CC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nFJk1ZpQ1EZeE5wT233K6q
          claim_id: c_73tsLiddLRMhhHq9reggoX
          source_id: s_6aEXboTgyymn5sZNW2nRtj
          stance: supports
          locator: CBDB:175863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175863）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_s9XnJ5Pm1kCvdC1B7qhD1W
        subject_person_id: p_6yXPTPamMspPfd1UEnA2CC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 630年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ab6QCQ8kwytDSrjwASqdRZ
          claim_id: c_s9XnJ5Pm1kCvdC1B7qhD1W
          source_id: s_6aEXboTgyymn5sZNW2nRtj
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
        id: c_4MoGQf4F95JQhK75BrvMRJ
        subject_person_id: p_6yXPTPamMspPfd1UEnA2CC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oCDk4oKizjX4GfYH3K5xRY
          claim_id: c_4MoGQf4F95JQhK75BrvMRJ
          source_id: s_6aEXboTgyymn5sZNW2nRtj
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
          source: *a1
      object_person:
        id: p_LP6J8fKwPV6Sr55i5heTqV
        status: active
        display_name: 王頍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| death.date | 630年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LP6J8fKwPV6Sr55i5heTqV | 王頍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵（CBDB 175863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175863&o=json)
