---
schema: wang-person/v1
id: p_qEzMiRzsrE1MGWNCLuPUfF
status: active
merged_into: null
display_name: 王澍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zCB8WcTAPe6rANZ1HJ5QjG
        subject_person_id: p_qEzMiRzsrE1MGWNCLuPUfF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LrBqC1GdXGgV3gi5PZBidS
          claim_id: c_zCB8WcTAPe6rANZ1HJ5QjG
          source_id: s_J8QwDBMDYGtWNGvZbGp58c
          stance: supports
          locator: CBDB:281261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281261）
          source: &a1
            id: s_J8QwDBMDYGtWNGvZbGp58c
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 281261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281261&o=json
            external_identifier: CBDB:281261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mu3AFPmDX3S98wEwArDy7Z
        subject_person_id: p_qEzMiRzsrE1MGWNCLuPUfF
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
        - id: cs_3QNXZBaXZXqxkBcNJpQeUj
          claim_id: c_Mu3AFPmDX3S98wEwArDy7Z
          source_id: s_J8QwDBMDYGtWNGvZbGp58c
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
        id: c_5GUbgDXf_FEvr6RoWNdj2Q
        subject_person_id: p_qEzMiRzsrE1MGWNCLuPUfF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HW595LoSX5sZYxTZGrBbPN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lwI1JjFDA8H3pGrqDA3arc
          claim_id: c_5GUbgDXf_FEvr6RoWNdj2Q
          source_id: s_J8QwDBMDYGtWNGvZbGp58c
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HW595LoSX5sZYxTZGrBbPN
        status: active
        display_name: 王正宗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HW595LoSX5sZYxTZGrBbPN | 王正宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澍（CBDB 281261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281261&o=json)
