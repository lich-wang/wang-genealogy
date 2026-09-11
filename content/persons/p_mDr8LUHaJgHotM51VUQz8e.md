---
schema: wang-person/v1
id: p_mDr8LUHaJgHotM51VUQz8e
status: active
merged_into: null
display_name: 王佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hrcPDt6mjTznWYzmyxgscm
        subject_person_id: p_mDr8LUHaJgHotM51VUQz8e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UgLnLjHBREifd2hyvYJvHT
          claim_id: c_hrcPDt6mjTznWYzmyxgscm
          source_id: s_MVJrBewghrMp2NLCR7Gh7G
          stance: supports
          locator: CBDB:241029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241029）
          source: &a1
            id: s_MVJrBewghrMp2NLCR7Gh7G
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 241029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241029&o=json
            external_identifier: CBDB:241029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RbyaT2DziZJAtehpJaZAEt
        subject_person_id: p_mDr8LUHaJgHotM51VUQz8e
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
        - id: cs_3d6wTpCXsyMMykzkb8qMdT
          claim_id: c_RbyaT2DziZJAtehpJaZAEt
          source_id: s_MVJrBewghrMp2NLCR7Gh7G
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
        id: c_aRaEiUhVmajlYy6WZ1e2aY
        subject_person_id: p_mDr8LUHaJgHotM51VUQz8e
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A2LK1q_iDQxJQeto14WIoz
          claim_id: c_aRaEiUhVmajlYy6WZ1e2aY
          source_id: s_MVJrBewghrMp2NLCR7Gh7G
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yUh5Ys3GsJr5X9EvLigP9m
        status: active
        display_name: 王璧
        merged_into_person_id: null
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_yUh5Ys3GsJr5X9EvLigP9m | 王璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 241029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241029&o=json)
