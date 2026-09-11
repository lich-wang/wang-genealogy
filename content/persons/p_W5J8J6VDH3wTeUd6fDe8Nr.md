---
schema: wang-person/v1
id: p_W5J8J6VDH3wTeUd6fDe8Nr
status: active
merged_into: null
display_name: 王琦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_epBrin2exmhAuZQyGnNJaB
        subject_person_id: p_W5J8J6VDH3wTeUd6fDe8Nr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uFDwDWF9bthTdLKDuLJP95
          claim_id: c_epBrin2exmhAuZQyGnNJaB
          source_id: s_2WenAaj6Tzu65BL3Q3pdcu
          stance: supports
          locator: CBDB:214068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214068）
          source: &a1
            id: s_2WenAaj6Tzu65BL3Q3pdcu
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 214068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214068&o=json
            external_identifier: CBDB:214068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.143Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5jz6C2X4Avu5qXzH6Zih1r
        subject_person_id: p_W5J8J6VDH3wTeUd6fDe8Nr
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
        - id: cs_aodPbpVmsqYjSNr2E19Ca5
          claim_id: c_5jz6C2X4Avu5qXzH6Zih1r
          source_id: s_2WenAaj6Tzu65BL3Q3pdcu
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
        id: c_xrDMnq02qbGYuiLtV9Wfnt
        subject_person_id: p_W5J8J6VDH3wTeUd6fDe8Nr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQl0N8eqrrpTXB8YE8V_cU
          claim_id: c_xrDMnq02qbGYuiLtV9Wfnt
          source_id: s_7u9pDH7qaGQstC7Dpwtt7B
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7u9pDH7qaGQstC7Dpwtt7B
            source_type: api_record
            title: 中国历代人物传记资料库：王景星（CBDB 206153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206153&o=json
            external_identifier: CBDB:206153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5GaxaL368Sw3VJAGUZoHG3
        status: active
        display_name: 王景星
        merged_into_person_id: null
  other: []
---

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5GaxaL368Sw3VJAGUZoHG3 | 王景星 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景星（CBDB 206153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206153&o=json)
- [中国历代人物传记资料库：王琦（CBDB 214068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214068&o=json)
