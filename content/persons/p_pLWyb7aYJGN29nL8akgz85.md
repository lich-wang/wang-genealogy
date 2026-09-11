---
schema: wang-person/v1
id: p_pLWyb7aYJGN29nL8akgz85
status: active
merged_into: null
display_name: 王溫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NSkq5uin6zc4VMdtAmYohP
        subject_person_id: p_pLWyb7aYJGN29nL8akgz85
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a8ycc8Ma6fXuQ4ExJoW5an
          claim_id: c_NSkq5uin6zc4VMdtAmYohP
          source_id: s_b17FdwyjSvAxkGPvBuyap3
          stance: supports
          locator: CBDB:134180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134180）
          source: &a1
            id: s_b17FdwyjSvAxkGPvBuyap3
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 134180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134180&o=json
            external_identifier: CBDB:134180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PZUF7nGgtkwqG3rGki2YKV
        subject_person_id: p_pLWyb7aYJGN29nL8akgz85
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
        - id: cs_egsgJXjc7Q47VoDLBVUDAK
          claim_id: c_PZUF7nGgtkwqG3rGki2YKV
          source_id: s_b17FdwyjSvAxkGPvBuyap3
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
  ancestors:
    - claim:
        id: c_5UyNgyFmhDIPkOfYlPmMbz
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pLWyb7aYJGN29nL8akgz85
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h4PU6J2r2ZKPvv_ORSJ5Bk
          claim_id: c_5UyNgyFmhDIPkOfYlPmMbz
          source_id: s_b17FdwyjSvAxkGPvBuyap3
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溫（CBDB 134180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134180&o=json)
