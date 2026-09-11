---
schema: wang-person/v1
id: p_8cA72YUN4szByBjQ7DU6Qa
status: active
merged_into: null
display_name: 王義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jxUYwNshaQKVCCAU3foZoD
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PwjdxHPhMG2pwZMMWYQ5rB
          claim_id: c_jxUYwNshaQKVCCAU3foZoD
          source_id: s_L29J7ZWCs5BAKX3wb886B7
          stance: supports
          locator: CBDB:242449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242449）
          source: &a1
            id: s_L29J7ZWCs5BAKX3wb886B7
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 242449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242449&o=json
            external_identifier: CBDB:242449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XDttwBJTip9dMV2Dw3Cn46
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
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
        - id: cs_gaj5dm6N51o7xhS4y8P69X
          claim_id: c_XDttwBJTip9dMV2Dw3Cn46
          source_id: s_L29J7ZWCs5BAKX3wb886B7
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
        id: c_ITpnk7XzQLvfEaUy4Hl2bp
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kx6D7JNFNVC8j5PdXCMLCd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jEu5WJZptgnwB1kf4-RSWe
          claim_id: c_ITpnk7XzQLvfEaUy4Hl2bp
          source_id: s_L29J7ZWCs5BAKX3wb886B7
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百三十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kx6D7JNFNVC8j5PdXCMLCd
        status: active
        display_name: 王弼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kx6D7JNFNVC8j5PdXCMLCd | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 242449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242449&o=json)
