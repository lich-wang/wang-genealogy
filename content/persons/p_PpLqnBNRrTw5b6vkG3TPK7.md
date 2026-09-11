---
schema: wang-person/v1
id: p_PpLqnBNRrTw5b6vkG3TPK7
status: active
merged_into: null
display_name: 王時可
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U6NJv2qDKjXkUdLvCPnUAc
        subject_person_id: p_PpLqnBNRrTw5b6vkG3TPK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YrC27MVGCdY4hQAhdsfJPD
          claim_id: c_U6NJv2qDKjXkUdLvCPnUAc
          source_id: s_48w7agQBRvSUkP56U1snL5
          stance: supports
          locator: CBDB:291906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291906）
          source: &a1
            id: s_48w7agQBRvSUkP56U1snL5
            source_type: api_record
            title: 中国历代人物传记资料库：王時可（CBDB 291906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291906&o=json
            external_identifier: CBDB:291906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a3g5PuyekMbBB3pCKkVCxF
        subject_person_id: p_PpLqnBNRrTw5b6vkG3TPK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時可，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 291906）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kL4c5EnWYxDpzIAxevHmEp
          claim_id: c_a3g5PuyekMbBB3pCKkVCxF
          source_id: s_48w7agQBRvSUkP56U1snL5
          stance: supports
          locator: CBDB:291906
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-jecEuJ9BBL7ZPmZ8LlCeu
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PpLqnBNRrTw5b6vkG3TPK7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0R8xWLaYi1JQ2MInY5f-Tx
          claim_id: c_-jecEuJ9BBL7ZPmZ8LlCeu
          source_id: s_48w7agQBRvSUkP56U1snL5
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王時可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時可 | accepted |
| bio.summary | 王時可，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 291906） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時可（CBDB 291906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291906&o=json)
