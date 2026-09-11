---
schema: wang-person/v1
id: p_Y9VpT5a4bHRsBrje4LpbfA
status: active
merged_into: null
display_name: 王豫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7JtBDHw4X89UMpDe8SnEGj
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nYfhXFMrUyADDG1BCr7sJG
          claim_id: c_7JtBDHw4X89UMpDe8SnEGj
          source_id: s_supKiBCeqfoZKnhWAj2v7T
          stance: supports
          locator: CBDB:260235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260235）
          source: &a1
            id: s_supKiBCeqfoZKnhWAj2v7T
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 260235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260235&o=json
            external_identifier: CBDB:260235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2tjHBbQDKs8MX4MFEAt9CL
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
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
        - id: cs_eh6H6Tg9j5R7AHfN3cBiLM
          claim_id: c_2tjHBbQDKs8MX4MFEAt9CL
          source_id: s_supKiBCeqfoZKnhWAj2v7T
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
        id: c_yVomOuItwIcCWSy6fXrzfi
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6il5sz4nf8NWu1AsCR9Vzu
          claim_id: c_yVomOuItwIcCWSy6fXrzfi
          source_id: s_supKiBCeqfoZKnhWAj2v7T
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v3b97W1yi7J7kSEqJr8m4E
        status: active
        display_name: 王玹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_v3b97W1yi7J7kSEqJr8m4E | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王豫（CBDB 260235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260235&o=json)
