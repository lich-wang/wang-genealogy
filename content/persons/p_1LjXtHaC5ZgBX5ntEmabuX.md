---
schema: wang-person/v1
id: p_1LjXtHaC5ZgBX5ntEmabuX
status: active
merged_into: null
display_name: 王彦成
cbdb_id: 240857
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4nZspm14raMnaoGcwhxvHd
        subject_person_id: p_1LjXtHaC5ZgBX5ntEmabuX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦成
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_raNEF3gQF234jve6hDzncb
          claim_id: c_4nZspm14raMnaoGcwhxvHd
          source_id: s_5pS5Fu42DzUqhFJYMrzKSW
          stance: supports
          locator: Q45459312
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_5pS5Fu42DzUqhFJYMrzKSW
            source_type: api_record
            title: 维基数据：王彦成（Q45459312）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459312
            external_identifier: Q45459312
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_gNqnZ12KSFv3z63a46CcYM
          claim_id: c_4nZspm14raMnaoGcwhxvHd
          source_id: s_77uPWEr3G5D5qjv5UcVsRV
          stance: supports
          locator: CBDB:240857
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_77uPWEr3G5D5qjv5UcVsRV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥成（240857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240857&o=json
            external_identifier: CBDB:240857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_259D5sG59dZUBVAioKAfu9
        subject_person_id: p_1LjXtHaC5ZgBX5ntEmabuX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 240857
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGc81eWLYx5hMwnV1irN4o
          claim_id: c_259D5sG59dZUBVAioKAfu9
          source_id: s_5pS5Fu42DzUqhFJYMrzKSW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BSXeTNNDMMBuwhnPspLjxd
        subject_person_id: p_1LjXtHaC5ZgBX5ntEmabuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1RTdSnJZD3zpL87Qxy9pP
          claim_id: c_BSXeTNNDMMBuwhnPspLjxd
          source_id: s_7UCYwv12hL8uoTS1hCGekt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7UCYwv12hL8uoTS1hCGekt
            source_type: api_record
            title: 维基数据：王惟真（Q45459375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459375
            external_identifier: Q45459375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_4qCre3MNW46qp7KeFA9i7p
          claim_id: c_BSXeTNNDMMBuwhnPspLjxd
          source_id: s_5pS5Fu42DzUqhFJYMrzKSW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_m8pEmRBSH6ayXuTKwEAjBF
        status: active
        display_name: 王惟真
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彦成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彦成 | accepted |
| bio.summary | Ming dynasty person CBDB = 240857 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_m8pEmRBSH6ayXuTKwEAjBF | 王惟真 | accepted |

## 外部来源

- [维基数据：王惟真（Q45459375）](https://www.wikidata.org/wiki/Q45459375)
- [维基数据：王彦成（Q45459312）](https://www.wikidata.org/wiki/Q45459312)
- [CBDB 中国历代人物传记资料库：王彥成（240857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240857&o=json)
