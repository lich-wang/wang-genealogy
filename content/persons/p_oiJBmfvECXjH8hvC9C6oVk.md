---
schema: wang-person/v1
id: p_oiJBmfvECXjH8hvC9C6oVk
status: active
merged_into: null
display_name: 王友方
cbdb_id: 220568
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8sXNjr9o6nmiztEr7WfPkZ
        subject_person_id: p_oiJBmfvECXjH8hvC9C6oVk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友方，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 220568）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_CgGxmu77qgjJMYuIHvmnwh
          claim_id: c_8sXNjr9o6nmiztEr7WfPkZ
          source_id: s_9PDX4FwaVZztDRrMU8y3gC
          stance: supports
          locator: CBDB:220568
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9PDX4FwaVZztDRrMU8y3gC
            source_type: api_record
            title: 中国历代人物传记资料库：王友方（CBDB 220568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220568&o=json
            external_identifier: CBDB:220568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LoqwhHURDW2Uz9gUb6RfPd
        subject_person_id: p_oiJBmfvECXjH8hvC9C6oVk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QP2iFc8JSa2WmFpBJ6fN2c
          claim_id: c_LoqwhHURDW2Uz9gUb6RfPd
          source_id: s_9PDX4FwaVZztDRrMU8y3gC
          stance: supports
          locator: CBDB:220568
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_l0LLZAaIXJXhU-DzV0dZQU
        subject_person_id: p_oiJBmfvECXjH8hvC9C6oVk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TxvCUWCPj6wVBqyLV556YD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cN2LevjJSzdaypW9Ysiaxo
          claim_id: c_l0LLZAaIXJXhU-DzV0dZQU
          source_id: s_9PDX4FwaVZztDRrMU8y3gC
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百零九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9PDX4FwaVZztDRrMU8y3gC
            source_type: api_record
            title: 中国历代人物传记资料库：王友方（CBDB 220568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220568&o=json
            external_identifier: CBDB:220568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_TxvCUWCPj6wVBqyLV556YD
        status: active
        display_name: 王大謨
        merged_into_person_id: null
  other: []
---

# 王友方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王友方，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 220568） | accepted |
| name.primary | 王友方 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TxvCUWCPj6wVBqyLV556YD | 王大謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友方（CBDB 220568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220568&o=json)
