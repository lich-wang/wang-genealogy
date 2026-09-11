---
schema: wang-person/v1
id: p_HRtWnooxefDz8rZgtu7C52
status: active
merged_into: null
display_name: 王義方
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_594vGtj2BMWLpTR1VgbRT7
        subject_person_id: p_HRtWnooxefDz8rZgtu7C52
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SiG3Nndq9ETzf2NHKJq7yb
          claim_id: c_594vGtj2BMWLpTR1VgbRT7
          source_id: s_1ofatSvBypgVy91RP2nv59
          stance: supports
          locator: CBDB:149258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149258）
          source: &a1
            id: s_1ofatSvBypgVy91RP2nv59
            source_type: api_record
            title: 中国历代人物传记资料库：王義方（CBDB 149258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149258&o=json
            external_identifier: CBDB:149258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1NYX2kvzDwm4s7nHbUAugf
        subject_person_id: p_HRtWnooxefDz8rZgtu7C52
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
        - id: cs_9JcdtQJi2cD5LkyqqwskmF
          claim_id: c_1NYX2kvzDwm4s7nHbUAugf
          source_id: s_1ofatSvBypgVy91RP2nv59
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
        id: c_lDkSKQlT8dQ9disAz6j0Pb
        subject_person_id: p_8Dg6XHckcaLtCF8z4S2GGo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HRtWnooxefDz8rZgtu7C52
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BfBXNzAZlsEpTHAivMAd6v
          claim_id: c_lDkSKQlT8dQ9disAz6j0Pb
          source_id: s_1ofatSvBypgVy91RP2nv59
          stance: supports
          locator: 唐代墓誌匯編:二卷，Chuigong 25：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8Dg6XHckcaLtCF8z4S2GGo
        status: active
        display_name: 王行威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義方 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8Dg6XHckcaLtCF8z4S2GGo | 王行威 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義方（CBDB 149258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149258&o=json)
