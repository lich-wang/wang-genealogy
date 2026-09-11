---
schema: wang-person/v1
id: p_5hHZn4JdRNtDFps6R7FtjP
status: active
merged_into: null
display_name: 王遹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aSyHcxTdFY4RcfDzKzX2zo
        subject_person_id: p_5hHZn4JdRNtDFps6R7FtjP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jDRCaWERqEGE6EaQxhRESE
          claim_id: c_aSyHcxTdFY4RcfDzKzX2zo
          source_id: s_7u8LEwRZVt8iwM41G9ihj7
          stance: supports
          locator: CBDB:22215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22215）
          source: &a1
            id: s_7u8LEwRZVt8iwM41G9ihj7
            source_type: api_record
            title: 中国历代人物传记资料库：王遹（CBDB 22215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22215&o=json
            external_identifier: CBDB:22215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bDGf2zYtSS1Fv1NmFpxgmz
        subject_person_id: p_5hHZn4JdRNtDFps6R7FtjP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_egAv4i4Lymc1ZRRjsh3hxH
          claim_id: c_bDGf2zYtSS1Fv1NmFpxgmz
          source_id: s_7u8LEwRZVt8iwM41G9ihj7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CcE0jREa-am6mY15yCg462
        subject_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5hHZn4JdRNtDFps6R7FtjP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_alD8etKLWTaePZhT5MAVqq
          claim_id: c_CcE0jREa-am6mY15yCg462
          source_id: s_7u8LEwRZVt8iwM41G9ihj7
          stance: supports
          locator: CBDB 双向互证（父 王正路 ⇄ 子 王遹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_iLUdeieVQDb1mxk8x28Vj3
        status: active
        display_name: 王正路
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_aoxxSBviETKYYdyN5vel0v
        subject_person_id: p_9epbfLViLxzdJRKQE2V4dh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5hHZn4JdRNtDFps6R7FtjP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3U5xrHpadPKGfrC-FrQfAX
          claim_id: c_aoxxSBviETKYYdyN5vel0v
          source_id: s_7u8LEwRZVt8iwM41G9ihj7
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9epbfLViLxzdJRKQE2V4dh
        status: active
        display_name: 王鬷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王遹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遹 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iLUdeieVQDb1mxk8x28Vj3 | 王正路 | accepted |
| ancestors | p_9epbfLViLxzdJRKQE2V4dh | 王鬷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遹（CBDB 22215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22215&o=json)
