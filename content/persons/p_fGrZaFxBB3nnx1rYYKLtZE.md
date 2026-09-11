---
schema: wang-person/v1
id: p_fGrZaFxBB3nnx1rYYKLtZE
status: active
merged_into: null
display_name: 王之垣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K4AyajbdzzaYQWf7C32bJu
        subject_person_id: p_fGrZaFxBB3nnx1rYYKLtZE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s4WRLwBpqBcFW21B1LytgP
          claim_id: c_K4AyajbdzzaYQWf7C32bJu
          source_id: s_mmcgLQPmy3Q4M5xVZEb4UB
          stance: supports
          locator: CBDB:211354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211354）
          source: &a1
            id: s_mmcgLQPmy3Q4M5xVZEb4UB
            source_type: api_record
            title: 中国历代人物传记资料库：王之垣（CBDB 211354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211354&o=json
            external_identifier: CBDB:211354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mg8pXJuumLAxbKSbtuM8rn
        subject_person_id: p_fGrZaFxBB3nnx1rYYKLtZE
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
        - id: cs_McJzQ2fYLrv1sFWGjnVMtV
          claim_id: c_Mg8pXJuumLAxbKSbtuM8rn
          source_id: s_mmcgLQPmy3Q4M5xVZEb4UB
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
        id: c_dFHk5UMzKDOWwYzZswXZ_V
        subject_person_id: p_fGrZaFxBB3nnx1rYYKLtZE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oA4_jRBupurZoSkNoEaptS
          claim_id: c_dFHk5UMzKDOWwYzZswXZ_V
          source_id: s_mmcgLQPmy3Q4M5xVZEb4UB
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_F188zxtPQfzqFJEz9WJ3M7
        status: active
        display_name: 王象乾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之垣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_F188zxtPQfzqFJEz9WJ3M7 | 王象乾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之垣（CBDB 211354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211354&o=json)
