---
schema: wang-person/v1
id: p_axCoRmroTjkzfX75uM4WpN
status: active
merged_into: null
display_name: 王光
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rN568CvCLBnvB3EQbZk6vg
        subject_person_id: p_axCoRmroTjkzfX75uM4WpN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hd5HECVxoqCxH4Lok4J6Se
          claim_id: c_rN568CvCLBnvB3EQbZk6vg
          source_id: s_kA96DfK3aEnsCQqtSTpBUs
          stance: supports
          locator: CBDB:25486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25486）
          source: &a1
            id: s_kA96DfK3aEnsCQqtSTpBUs
            source_type: api_record
            title: 中国历代人物传记资料库：王光（CBDB 25486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25486&o=json
            external_identifier: CBDB:25486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iEZeRUPjB8yJJ5KeqnM8fG
        subject_person_id: p_axCoRmroTjkzfX75uM4WpN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DHLUzpcC9MxcpE9JQUuZZE
          claim_id: c_iEZeRUPjB8yJJ5KeqnM8fG
          source_id: s_kA96DfK3aEnsCQqtSTpBUs
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
        id: c_2Ks3DcrJl6hSrM7FaXLqLY
        subject_person_id: p_axCoRmroTjkzfX75uM4WpN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sG13vw1kNPD6YQdSJvphMP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIRLn7SyDSPyMoOKFRl21i
          claim_id: c_2Ks3DcrJl6hSrM7FaXLqLY
          source_id: s_kA96DfK3aEnsCQqtSTpBUs
          stance: supports
          locator: CBDB 双向互证（子 王鞏 ⇄ 父 王光）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sG13vw1kNPD6YQdSJvphMP
        status: active
        display_name: 王鞏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sG13vw1kNPD6YQdSJvphMP | 王鞏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光（CBDB 25486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25486&o=json)
