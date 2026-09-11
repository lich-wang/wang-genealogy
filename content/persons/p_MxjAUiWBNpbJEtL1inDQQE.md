---
schema: wang-person/v1
id: p_MxjAUiWBNpbJEtL1inDQQE
status: active
merged_into: null
display_name: 王思敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NJMDui1hYCz3Ld1jNRUvCF
        subject_person_id: p_MxjAUiWBNpbJEtL1inDQQE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RKN89xnhZZ3dfM1cEmfQiK
          claim_id: c_NJMDui1hYCz3Ld1jNRUvCF
          source_id: s_v3sWcgH1WjEsWWv6QDMBGR
          stance: supports
          locator: CBDB:261988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261988）
          source: &a1
            id: s_v3sWcgH1WjEsWWv6QDMBGR
            source_type: api_record
            title: 中国历代人物传记资料库：王思敬（CBDB 261988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261988&o=json
            external_identifier: CBDB:261988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hAEp722VGs8CoycDBRFVyi
        subject_person_id: p_MxjAUiWBNpbJEtL1inDQQE
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
        - id: cs_M2at9wEiNEgVoCJQoowNAx
          claim_id: c_hAEp722VGs8CoycDBRFVyi
          source_id: s_v3sWcgH1WjEsWWv6QDMBGR
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
        id: c_I03NHMrpegyFHpjf8tZWwy
        subject_person_id: p_MxjAUiWBNpbJEtL1inDQQE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LSGWLrXs7XnndXnW76V8U
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLNRODPm3qh5NBUC5oWFZN
          claim_id: c_I03NHMrpegyFHpjf8tZWwy
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FzHANRPNeNFZ34nEd8FtEx
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 200725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json
            external_identifier: CBDB:200725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LSGWLrXs7XnndXnW76V8U
        status: active
        display_name: 王統
        merged_into_person_id: null
  other: []
---

# 王思敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思敬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2LSGWLrXs7XnndXnW76V8U | 王統 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思敬（CBDB 261988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261988&o=json)
- [中国历代人物传记资料库：王統（CBDB 200725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json)
