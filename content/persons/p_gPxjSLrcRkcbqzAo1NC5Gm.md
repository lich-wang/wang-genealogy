---
schema: wang-person/v1
id: p_gPxjSLrcRkcbqzAo1NC5Gm
status: active
merged_into: null
display_name: 王仲禮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YBP3617xg8UHxjKSEsuVVt
        subject_person_id: p_gPxjSLrcRkcbqzAo1NC5Gm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LHDM6UH5R698ZoCeC62jLQ
          claim_id: c_YBP3617xg8UHxjKSEsuVVt
          source_id: s_hqFGY2fJ5wJvMKrbNNz7EJ
          stance: supports
          locator: CBDB:244954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244954）
          source: &a1
            id: s_hqFGY2fJ5wJvMKrbNNz7EJ
            source_type: api_record
            title: 中国历代人物传记资料库：王仲禮（CBDB 244954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244954&o=json
            external_identifier: CBDB:244954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pu2t97fsq339eVxWthppWN
        subject_person_id: p_gPxjSLrcRkcbqzAo1NC5Gm
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
        - id: cs_qZiEg4oKqA3ZqMaJ8WLQyD
          claim_id: c_pu2t97fsq339eVxWthppWN
          source_id: s_hqFGY2fJ5wJvMKrbNNz7EJ
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
        id: c_bIonGj3XaZeBCxQXA4alDO
        subject_person_id: p_gPxjSLrcRkcbqzAo1NC5Gm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AiSvGdI1QQQ8bKO9sH9eqQ
          claim_id: c_bIonGj3XaZeBCxQXA4alDO
          source_id: s_hqFGY2fJ5wJvMKrbNNz7EJ
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V4FwK3zU4QEPhCKRyGhfXG
        status: active
        display_name: 王問
        merged_into_person_id: null
  other: []
---

# 王仲禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲禮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_V4FwK3zU4QEPhCKRyGhfXG | 王問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲禮（CBDB 244954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244954&o=json)
