---
schema: wang-person/v1
id: p_dgdij9AEju2hv2VB29LPgp
status: active
merged_into: null
display_name: 王文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iWHj1BddZ6XFwdpdqDF343
        subject_person_id: p_dgdij9AEju2hv2VB29LPgp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7pJSxexhHQaqFh6vMvSbmG
          claim_id: c_iWHj1BddZ6XFwdpdqDF343
          source_id: s_dJAu9J33AfX3LtAaSBgMe8
          stance: supports
          locator: CBDB:285492
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285492）
          source: &a1
            id: s_dJAu9J33AfX3LtAaSBgMe8
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 285492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285492&o=json
            external_identifier: CBDB:285492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.214Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uj6AiiF8FyPGxCtxMsbYbi
        subject_person_id: p_dgdij9AEju2hv2VB29LPgp
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
        - id: cs_7a8js2wQuQjKpZHzjYLJrH
          claim_id: c_uj6AiiF8FyPGxCtxMsbYbi
          source_id: s_dJAu9J33AfX3LtAaSBgMe8
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
        id: c_0RUacAXD9wUYCx2SmYqVpS
        subject_person_id: p_dgdij9AEju2hv2VB29LPgp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rT3bK3RVCNfBJPQAtdAstK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zbdxzvTepUoY-tK3dao-rD
          claim_id: c_0RUacAXD9wUYCx2SmYqVpS
          source_id: s_dJAu9J33AfX3LtAaSBgMe8
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rT3bK3RVCNfBJPQAtdAstK
        status: active
        display_name: 王鳴鳳
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rT3bK3RVCNfBJPQAtdAstK | 王鳴鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 285492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285492&o=json)
