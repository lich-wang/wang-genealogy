---
schema: wang-person/v1
id: p_NUGZxG8CRGQAZaz13iyc8P
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TAqEM2a3RjwQ7amfsACvtt
        subject_person_id: p_NUGZxG8CRGQAZaz13iyc8P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W57wrx73eJsstcfoMJ79HU
          claim_id: c_TAqEM2a3RjwQ7amfsACvtt
          source_id: s_AGVE87G1b97toMJ5X5g1Tm
          stance: supports
          locator: CBDB:261737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261737）
          source: &a1
            id: s_AGVE87G1b97toMJ5X5g1Tm
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 261737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261737&o=json
            external_identifier: CBDB:261737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w7KJTeN1mPP7jbKwS9fJBb
        subject_person_id: p_NUGZxG8CRGQAZaz13iyc8P
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
        - id: cs_PYumxo6igPE2zEpw4DQxp6
          claim_id: c_w7KJTeN1mPP7jbKwS9fJBb
          source_id: s_AGVE87G1b97toMJ5X5g1Tm
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
        id: c__ivNuHRe2YyWbpnoOwLUPN
        subject_person_id: p_NUGZxG8CRGQAZaz13iyc8P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AiG6QrCQGQD3MPcSgAchU7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_djQp_FPl3Zj8HcAZ9xg4RG
          claim_id: c__ivNuHRe2YyWbpnoOwLUPN
          source_id: s_AGVE87G1b97toMJ5X5g1Tm
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AiG6QrCQGQD3MPcSgAchU7
        status: active
        display_name: 王宸
        merged_into_person_id: null
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AiG6QrCQGQD3MPcSgAchU7 | 王宸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 261737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261737&o=json)
