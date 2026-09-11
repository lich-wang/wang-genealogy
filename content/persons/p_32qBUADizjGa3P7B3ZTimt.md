---
schema: wang-person/v1
id: p_32qBUADizjGa3P7B3ZTimt
status: active
merged_into: null
display_name: 王瑤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_435MrKbRW2r6aXMnbt5bNk
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NJJ3b4u9apXx8xiFXzsieE
          claim_id: c_435MrKbRW2r6aXMnbt5bNk
          source_id: s_KsZnLRsXB29v8BDss4UGTC
          stance: supports
          locator: CBDB:303942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303942）
          source: &a1
            id: s_KsZnLRsXB29v8BDss4UGTC
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 303942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303942&o=json
            external_identifier: CBDB:303942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mxn2YtyQubtJ2DHumWKG7e
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
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
        - id: cs_HHcxZRwtiZngXi67DNUqUq
          claim_id: c_mxn2YtyQubtJ2DHumWKG7e
          source_id: s_KsZnLRsXB29v8BDss4UGTC
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
        id: c_VmbgkNE6CrxJ6RTQYkVMlu
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WlYb0Drk7ecCCs_asjmMr6
          claim_id: c_VmbgkNE6CrxJ6RTQYkVMlu
          source_id: s_KsZnLRsXB29v8BDss4UGTC
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_USmQUSMYXi4KzQDYfEfPrB
        status: active
        display_name: 王三聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_USmQUSMYXi4KzQDYfEfPrB | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑤（CBDB 303942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303942&o=json)
