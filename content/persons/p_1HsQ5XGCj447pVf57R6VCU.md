---
schema: wang-person/v1
id: p_1HsQ5XGCj447pVf57R6VCU
status: active
merged_into: null
display_name: 王九牧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D1VojHLYKwRsQTDkJTCNQ4
        subject_person_id: p_1HsQ5XGCj447pVf57R6VCU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九牧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_STfLrKzDo9f529eXWoeXP9
          claim_id: c_D1VojHLYKwRsQTDkJTCNQ4
          source_id: s_NN8Rq41eqzEoRcnj3DqFQH
          stance: supports
          locator: CBDB:635832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635832）
          source: &a1
            id: s_NN8Rq41eqzEoRcnj3DqFQH
            source_type: api_record
            title: 中国历代人物传记资料库：王九牧（CBDB 635832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635832&o=json
            external_identifier: CBDB:635832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kzsys7pk7JUuxSoNcAz7ow
        subject_person_id: p_1HsQ5XGCj447pVf57R6VCU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九牧，清人物。籍贯交河，入仕副榜，曾任知縣。（中国历代人物传记资料库 CBDB 635832）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7JdBf0asMt5DSORDKLb8rB
          claim_id: c_kzsys7pk7JUuxSoNcAz7ow
          source_id: s_NN8Rq41eqzEoRcnj3DqFQH
          stance: supports
          locator: CBDB:635832
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王九牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九牧 | accepted |
| bio.summary | 王九牧，清人物。籍贯交河，入仕副榜，曾任知縣。（中国历代人物传记资料库 CBDB 635832） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九牧（CBDB 635832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635832&o=json)
