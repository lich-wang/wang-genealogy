---
schema: wang-person/v1
id: p_CLeaiBYUN5tbTn66BTGdrC
status: active
merged_into: null
display_name: 王椿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_24T4zzvthB2td2ybUY4Uks
        subject_person_id: p_CLeaiBYUN5tbTn66BTGdrC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ujLBTm4qpc6YnBxPCJuMgf
          claim_id: c_24T4zzvthB2td2ybUY4Uks
          source_id: s_9RsJiGjVYs4UDZaP8D889B
          stance: supports
          locator: CBDB:283929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283929）
          source: &a1
            id: s_9RsJiGjVYs4UDZaP8D889B
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 283929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283929&o=json
            external_identifier: CBDB:283929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sjsk4ybRLks5p41F9fxFtL
        subject_person_id: p_CLeaiBYUN5tbTn66BTGdrC
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
        - id: cs_JvSDBCozaz8vwYQJvZVnXc
          claim_id: c_sjsk4ybRLks5p41F9fxFtL
          source_id: s_9RsJiGjVYs4UDZaP8D889B
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

# 王椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王椿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 283929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283929&o=json)
