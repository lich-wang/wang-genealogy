---
schema: wang-person/v1
id: p_W84gmRoBdwTDoRpNLAA3Lm
status: active
merged_into: null
display_name: 王彥文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NAfiQFMRv7SGHh9XTNNrT3
        subject_person_id: p_W84gmRoBdwTDoRpNLAA3Lm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F54cq2Atu8wwMHY5Ez1Pfy
          claim_id: c_NAfiQFMRv7SGHh9XTNNrT3
          source_id: s_JCSysUGDK5yGQ6nhESv7ne
          stance: supports
          locator: CBDB:260371
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260371）
          source: &a1
            id: s_JCSysUGDK5yGQ6nhESv7ne
            source_type: api_record
            title: 中国历代人物传记资料库：王彥文（CBDB 260371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260371&o=json
            external_identifier: CBDB:260371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z3gtSs5DLKXhvPxkH6zin4
        subject_person_id: p_W84gmRoBdwTDoRpNLAA3Lm
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
        - id: cs_KBi6k8WFHK6MsU9Myz3XV8
          claim_id: c_z3gtSs5DLKXhvPxkH6zin4
          source_id: s_JCSysUGDK5yGQ6nhESv7ne
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
        id: c_xHtqGmbSvXj5tAa8A6y7Zx
        subject_person_id: p_W84gmRoBdwTDoRpNLAA3Lm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13AOkz4tZcuHy6jDtrzP1k
          claim_id: c_xHtqGmbSvXj5tAa8A6y7Zx
          source_id: s_JCSysUGDK5yGQ6nhESv7ne
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        status: active
        display_name: 王珀
        merged_into_person_id: null
  other: []
---

# 王彥文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Qvi4bpPzBmsqf5Y7oUFpd5 | 王珀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥文（CBDB 260371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260371&o=json)
