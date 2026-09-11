---
schema: wang-person/v1
id: p_sqRQj3rACsAggP37o1X4hW
status: active
merged_into: null
display_name: 王賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1uw9Ryv3T8p1HHLh9dPA5g
        subject_person_id: p_sqRQj3rACsAggP37o1X4hW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5ykCxp3J9rgZQJLVuMd2rq
          claim_id: c_1uw9Ryv3T8p1HHLh9dPA5g
          source_id: s_MuEk8a8nuWuehDbVVCqs5e
          stance: supports
          locator: CBDB:238662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238662）
          source: &a1
            id: s_MuEk8a8nuWuehDbVVCqs5e
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 238662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238662&o=json
            external_identifier: CBDB:238662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8CEEPr345gA4yuAfFKVuQ2
        subject_person_id: p_sqRQj3rACsAggP37o1X4hW
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
        - id: cs_iW3fEjNWgqgP18GYEj9SKe
          claim_id: c_8CEEPr345gA4yuAfFKVuQ2
          source_id: s_MuEk8a8nuWuehDbVVCqs5e
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
        id: c_2uInjBmj-ziOr2cHxasWq_
        subject_person_id: p_sqRQj3rACsAggP37o1X4hW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Kr82p89DPcaLRwmJJapqo8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LFSgOYSaDATZDPNoUyJ44z
          claim_id: c_2uInjBmj-ziOr2cHxasWq_
          source_id: s_MuEk8a8nuWuehDbVVCqs5e
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kr82p89DPcaLRwmJJapqo8
        status: active
        display_name: 王宣
        merged_into_person_id: null
  other: []
---

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Kr82p89DPcaLRwmJJapqo8 | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 238662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238662&o=json)
