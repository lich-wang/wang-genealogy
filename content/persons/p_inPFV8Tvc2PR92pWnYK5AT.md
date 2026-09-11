---
schema: wang-person/v1
id: p_inPFV8Tvc2PR92pWnYK5AT
status: active
merged_into: null
display_name: 王㮣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g8LgN1dTuES5QaTRUcSLwQ
        subject_person_id: p_inPFV8Tvc2PR92pWnYK5AT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㮣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o2nCQGV1acWhhvrRp17a9S
          claim_id: c_g8LgN1dTuES5QaTRUcSLwQ
          source_id: s_v3KjvDPd1y8ZB5sxnWkn5T
          stance: supports
          locator: CBDB:222808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222808）
          source: &a1
            id: s_v3KjvDPd1y8ZB5sxnWkn5T
            source_type: api_record
            title: 中国历代人物传记资料库：王㮣（CBDB 222808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222808&o=json
            external_identifier: CBDB:222808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4JDeM8U4d9ntLf1haExf61
        subject_person_id: p_inPFV8Tvc2PR92pWnYK5AT
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
        - id: cs_gnca8nFp7nfE6DJ1MsyqrM
          claim_id: c_4JDeM8U4d9ntLf1haExf61
          source_id: s_v3KjvDPd1y8ZB5sxnWkn5T
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
        id: c_495c8qXsJ6JJnZn6XJMGDG
        subject_person_id: p_inPFV8Tvc2PR92pWnYK5AT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vUdxqzcr_iX6qqTYxg4ldc
          claim_id: c_495c8qXsJ6JJnZn6XJMGDG
          source_id: s_v3KjvDPd1y8ZB5sxnWkn5T
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
  other: []
---

# 王㮣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㮣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王㮣（CBDB 222808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222808&o=json)
