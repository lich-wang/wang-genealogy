---
schema: wang-person/v1
id: p_mmhxQ3mMMbafknFpAgKiQp
status: active
merged_into: null
display_name: 王寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FRxAPqLYNy74Q6ERV3wzM
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1WBPFytKB7yeFrAvdTPQ8r
          claim_id: c_4FRxAPqLYNy74Q6ERV3wzM
          source_id: s_gnZg8SzkQb2YQh5M6kQqn9
          stance: supports
          locator: CBDB:309940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309940）
          source: &a1
            id: s_gnZg8SzkQb2YQh5M6kQqn9
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 309940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309940&o=json
            external_identifier: CBDB:309940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NJe5FURogMWDnzbhAgqv8d
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
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
        - id: cs_4Pr6JGazjaPbuDw7Xncd3S
          claim_id: c_NJe5FURogMWDnzbhAgqv8d
          source_id: s_gnZg8SzkQb2YQh5M6kQqn9
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
        id: c_Kp9WbOYHoo2yR7api3L7rT
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C19wrUmCjzas_PXpx73nuP
          claim_id: c_Kp9WbOYHoo2yR7api3L7rT
          source_id: s_gnZg8SzkQb2YQh5M6kQqn9
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EL3MrLTYLivcbMQDRsPBD7
        status: active
        display_name: 王徽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EL3MrLTYLivcbMQDRsPBD7 | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 309940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309940&o=json)
