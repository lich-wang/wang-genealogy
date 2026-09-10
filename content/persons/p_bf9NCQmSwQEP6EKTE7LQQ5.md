---
schema: wang-person/v1
id: p_bf9NCQmSwQEP6EKTE7LQQ5
status: active
merged_into: null
display_name: 王斌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JLDoP2GhnS5RyVGvizh67g
        subject_person_id: p_bf9NCQmSwQEP6EKTE7LQQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5NE9cRCNJpASzHwrQB4VUz
          claim_id: c_JLDoP2GhnS5RyVGvizh67g
          source_id: s_nboHFJ6TMnNkREKW6AaqYB
          stance: supports
          locator: CBDB:252673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252673）
          source: &a1
            id: s_nboHFJ6TMnNkREKW6AaqYB
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 252673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252673&o=json
            external_identifier: CBDB:252673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TBsJ8bJz7eLSLgJrCZJDDX
        subject_person_id: p_bf9NCQmSwQEP6EKTE7LQQ5
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
        - id: cs_Pi1oRx8tJjy5jScZ9MkV6v
          claim_id: c_TBsJ8bJz7eLSLgJrCZJDDX
          source_id: s_nboHFJ6TMnNkREKW6AaqYB
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
        id: c_W48klj9e9e9gvTRnVHAPB3
        subject_person_id: p_bf9NCQmSwQEP6EKTE7LQQ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xySe3nQRavCmmmxMiAe2Ua
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WsAQ3rCcWyCfislXU4Gm6_
          claim_id: c_W48klj9e9e9gvTRnVHAPB3
          source_id: s_kGw8NrUwBZse4bkBcBkxJX
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第四十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kGw8NrUwBZse4bkBcBkxJX
            source_type: api_record
            title: 中国历代人物传记资料库：王念（CBDB 126587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126587&o=json
            external_identifier: CBDB:126587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xySe3nQRavCmmmxMiAe2Ua
        status: active
        display_name: 王政
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xySe3nQRavCmmmxMiAe2Ua | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 252673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252673&o=json)
- [中国历代人物传记资料库：王念（CBDB 126587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126587&o=json)
