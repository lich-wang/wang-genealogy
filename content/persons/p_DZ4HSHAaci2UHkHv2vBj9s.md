---
schema: wang-person/v1
id: p_DZ4HSHAaci2UHkHv2vBj9s
status: active
merged_into: null
display_name: 推氏
revision: 1
cbdb_id: 28737
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NdG2eE_QydsO-FDbU1GkS7
        subject_person_id: p_DZ4HSHAaci2UHkHv2vBj9s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 推氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vc-c85vWyg0DKCJ5bIri85
          claim_id: c_NdG2eE_QydsO-FDbU1GkS7
          source_id: s_QKQs2aVII9o8VzElFEs69c
          stance: supports
          locator: CBDB:28737
          quotation: null
          interpretation_note: CBDB 明确记录的王惲配偶
          source: &a1
            id: s_QKQs2aVII9o8VzElFEs69c
            source_type: api_record
            title: 中国历代人物传记资料库：推氏(推A女)（CBDB 28737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28737&o=json
            external_identifier: CBDB:28737
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
        id: c_kVL9hcH20DvT2SFHr0ZRYn
        subject_person_id: p_ZGiJW67sDSieGJ416En8tR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DZ4HSHAaci2UHkHv2vBj9s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZdZO63kQ6DpQDqTBEz4c_F
          claim_id: c_kVL9hcH20DvT2SFHr0ZRYn
          source_id: s_QKQs2aVII9o8VzElFEs69c
          stance: supports
          locator: CBDB 双向互证（妻子 推氏(推A女)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZGiJW67sDSieGJ416En8tR
        status: active
        display_name: 王惲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 推氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 推氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ZGiJW67sDSieGJ416En8tR | 王惲 | accepted |

## 外部来源

- [中国历代人物传记资料库：推氏(推A女)（CBDB 28737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28737&o=json)
