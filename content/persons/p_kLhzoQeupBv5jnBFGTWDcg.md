---
schema: wang-person/v1
id: p_kLhzoQeupBv5jnBFGTWDcg
status: active
merged_into: null
display_name: 王定國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K78i5gfgJ1EXGWvPDQH8Gc
        subject_person_id: p_kLhzoQeupBv5jnBFGTWDcg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UW8jR7ajAuRF7QCrAKc62Q
          claim_id: c_K78i5gfgJ1EXGWvPDQH8Gc
          source_id: s_5dW8pQpPnpDmw1zkuMyxFN
          stance: supports
          locator: CBDB:508168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508168）
          source: &a1
            id: s_5dW8pQpPnpDmw1zkuMyxFN
            source_type: api_record
            title: 中国历代人物传记资料库：王定國（CBDB 508168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508168&o=json
            external_identifier: CBDB:508168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AEDPMr3ezULQCXQJEqj6Nh
        subject_person_id: p_kLhzoQeupBv5jnBFGTWDcg
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
        - id: cs_NBBe44dn1Sas2Mc13xqANs
          claim_id: c_AEDPMr3ezULQCXQJEqj6Nh
          source_id: s_5dW8pQpPnpDmw1zkuMyxFN
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
  descendants: []
  other: []
---

# 王定國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定國 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定國（CBDB 508168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508168&o=json)
