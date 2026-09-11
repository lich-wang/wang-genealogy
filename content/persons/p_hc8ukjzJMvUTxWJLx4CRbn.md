---
schema: wang-person/v1
id: p_hc8ukjzJMvUTxWJLx4CRbn
status: active
merged_into: null
display_name: 王元泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FRFhbFKdUQDxEJ3NpnmYp6
        subject_person_id: p_hc8ukjzJMvUTxWJLx4CRbn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CixFBU63tDJToS6EYrQSs5
          claim_id: c_FRFhbFKdUQDxEJ3NpnmYp6
          source_id: s_oQoWW3HdUGLD36jtJGzBvB
          stance: supports
          locator: CBDB:191269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191269）
          source: &a1
            id: s_oQoWW3HdUGLD36jtJGzBvB
            source_type: api_record
            title: 中国历代人物传记资料库：王元泰（CBDB 191269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191269&o=json
            external_identifier: CBDB:191269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RxtdY5b66ZWb46NEaKqwDR
        subject_person_id: p_hc8ukjzJMvUTxWJLx4CRbn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 839年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66DXeytYQPAWWMivCfjW5v
          claim_id: c_RxtdY5b66ZWb46NEaKqwDR
          source_id: s_oQoWW3HdUGLD36jtJGzBvB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WpVXsvDoPTtVqgZMFWMxRU
        subject_person_id: p_hc8ukjzJMvUTxWJLx4CRbn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元泰（卒于839年），唐人物。籍贯長安，曾任門下省典儀。（中国历代人物传记资料库 CBDB 191269）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BIO4kZJ6hsc0GprMqD3nqe
          claim_id: c_WpVXsvDoPTtVqgZMFWMxRU
          source_id: s_oQoWW3HdUGLD36jtJGzBvB
          stance: supports
          locator: CBDB:191269
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p3k6BRRLRJ0GVks7iOYbon
        subject_person_id: p_P7GhwesJiVs4C1A4Nba7Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hc8ukjzJMvUTxWJLx4CRbn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__vtEvbnomEgYrlynQtl1Cs
          claim_id: c_p3k6BRRLRJ0GVks7iOYbon
          source_id: s_oQoWW3HdUGLD36jtJGzBvB
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P7GhwesJiVs4C1A4Nba7Jb
        status: active
        display_name: 王紹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元泰 | accepted |
| death.date | 839年 | accepted |
| bio.summary | 王元泰（卒于839年），唐人物。籍贯長安，曾任門下省典儀。（中国历代人物传记资料库 CBDB 191269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P7GhwesJiVs4C1A4Nba7Jb | 王紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元泰（CBDB 191269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191269&o=json)
