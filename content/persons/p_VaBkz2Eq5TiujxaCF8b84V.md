---
schema: wang-person/v1
id: p_VaBkz2Eq5TiujxaCF8b84V
status: active
merged_into: null
display_name: 王益
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_74QeSCakSiEDW4es6P532A
        subject_person_id: p_VaBkz2Eq5TiujxaCF8b84V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sr6hbcqLE8n4pcyW42hw5d
          claim_id: c_74QeSCakSiEDW4es6P532A
          source_id: s_aHcENNaJfyf9b72bMrRWeL
          stance: supports
          locator: CBDB:280307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280307）
          source: &a1
            id: s_aHcENNaJfyf9b72bMrRWeL
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 280307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280307&o=json
            external_identifier: CBDB:280307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f1gEjCS9bnzS2n3YA4vDYQ
        subject_person_id: p_VaBkz2Eq5TiujxaCF8b84V
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
        - id: cs_N2w5Wdm29pAR8mrbthQdjJ
          claim_id: c_f1gEjCS9bnzS2n3YA4vDYQ
          source_id: s_aHcENNaJfyf9b72bMrRWeL
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
        id: c_QJGhDgIPtoQ9k8njf0zmNJ
        subject_person_id: p_VaBkz2Eq5TiujxaCF8b84V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2bM722d9X3YmbYXbBeCDTM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCAdeXmvNF5GraOR3r3AB7
          claim_id: c_QJGhDgIPtoQ9k8njf0zmNJ
          source_id: s_HKUvL6tDCQPamiF1rrU2Yi
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HKUvL6tDCQPamiF1rrU2Yi
            source_type: api_record
            title: 中国历代人物传记资料库：王敬中（CBDB 198032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198032&o=json
            external_identifier: CBDB:198032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2bM722d9X3YmbYXbBeCDTM
        status: active
        display_name: 王敬中
        merged_into_person_id: null
  other: []
---

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2bM722d9X3YmbYXbBeCDTM | 王敬中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬中（CBDB 198032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198032&o=json)
- [中国历代人物传记资料库：王益（CBDB 280307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280307&o=json)
