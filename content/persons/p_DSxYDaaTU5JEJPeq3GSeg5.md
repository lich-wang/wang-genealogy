---
schema: wang-person/v1
id: p_DSxYDaaTU5JEJPeq3GSeg5
status: active
merged_into: null
display_name: 王聚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pKfQZPAdhZGMgThXyTKJa4
        subject_person_id: p_DSxYDaaTU5JEJPeq3GSeg5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C7UaVQqQ1P2HV4LSd89V6G
          claim_id: c_pKfQZPAdhZGMgThXyTKJa4
          source_id: s_qwG2g3SgW3kGMCoHNqibDH
          stance: supports
          locator: CBDB:284294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284294）
          source: &a1
            id: s_qwG2g3SgW3kGMCoHNqibDH
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 284294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284294&o=json
            external_identifier: CBDB:284294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLAqsbNouLLMXJPDkoo1Re
        subject_person_id: p_DSxYDaaTU5JEJPeq3GSeg5
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
        - id: cs_NJ462jadez2fYALcShi4Zb
          claim_id: c_rLAqsbNouLLMXJPDkoo1Re
          source_id: s_qwG2g3SgW3kGMCoHNqibDH
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
  descendants:
    - claim:
        id: c_eloTyXsJ334GLvJGici2Zb
        subject_person_id: p_DSxYDaaTU5JEJPeq3GSeg5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yxgqh426PaAQx3BrO8SpVn
          claim_id: c_eloTyXsJ334GLvJGici2Zb
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LMA8xHJ4EXr524gv8VeY3b
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 202150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json
            external_identifier: CBDB:202150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3VWyJNWMm17kXtvGcMVL5b
        status: active
        display_name: 王密
        merged_into_person_id: null
  other: []
---

# 王聚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3VWyJNWMm17kXtvGcMVL5b | 王密 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聚（CBDB 284294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284294&o=json)
- [中国历代人物传记资料库：王密（CBDB 202150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json)
