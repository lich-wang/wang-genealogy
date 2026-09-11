---
schema: wang-person/v1
id: p_YDMKprHypVe8Lcrbj9sFHn
status: active
merged_into: null
display_name: 王埜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A19ATfDMYhECnFKx4SYR8D
        subject_person_id: p_YDMKprHypVe8Lcrbj9sFHn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_so6AJp5QuUNR7DZG68Xp2y
          claim_id: c_A19ATfDMYhECnFKx4SYR8D
          source_id: s_ptg3BKqrQ71uvdy4mQp3vE
          stance: supports
          locator: CBDB:562663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562663）
          source: &a1
            id: s_ptg3BKqrQ71uvdy4mQp3vE
            source_type: api_record
            title: 中国历代人物传记资料库：王埜（CBDB 562663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562663&o=json
            external_identifier: CBDB:562663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xYEbfCrB9C3ro6UvtRyCax
        subject_person_id: p_YDMKprHypVe8Lcrbj9sFHn
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
        - id: cs_4eRpNYprgM61KCXFvJ29FA
          claim_id: c_xYEbfCrB9C3ro6UvtRyCax
          source_id: s_ptg3BKqrQ71uvdy4mQp3vE
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
        id: c_9AMkAYxYQ5XAfjosaE_jYl
        subject_person_id: p_YDMKprHypVe8Lcrbj9sFHn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xMJ31sywd2sF93wwJMjwCi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLRCNan4sTxEcjAVgOTnO-
          claim_id: c_9AMkAYxYQ5XAfjosaE_jYl
          source_id: s_qC524Sdba3rMTaNw7NZUAN
          stance: supports
          locator: 紹興府志:八十卷，lgid=316645：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qC524Sdba3rMTaNw7NZUAN
            source_type: api_record
            title: 中国历代人物传记资料库：王蘗屏（CBDB 562664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562664&o=json
            external_identifier: CBDB:562664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xMJ31sywd2sF93wwJMjwCi
        status: active
        display_name: 王蘗屏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王埜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xMJ31sywd2sF93wwJMjwCi | 王蘗屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘗屏（CBDB 562664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562664&o=json)
- [中国历代人物传记资料库：王埜（CBDB 562663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562663&o=json)
