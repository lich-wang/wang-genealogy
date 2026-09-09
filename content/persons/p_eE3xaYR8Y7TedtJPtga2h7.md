---
schema: wang-person/v1
id: p_eE3xaYR8Y7TedtJPtga2h7
status: active
merged_into: null
display_name: 王于昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TWFG8hjcaLkf8ykwySjcBP
        subject_person_id: p_eE3xaYR8Y7TedtJPtga2h7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王于昭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AcfP5G2moA7d23UtSft7SY
          claim_id: c_TWFG8hjcaLkf8ykwySjcBP
          source_id: s_Q7bfSoJwQDkCsqi2HHqJTa
          stance: supports
          locator: CBDB:635842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635842）
          source: &a1
            id: s_Q7bfSoJwQDkCsqi2HHqJTa
            source_type: api_record
            title: 中国历代人物传记资料库：王于昭（CBDB 635842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635842&o=json
            external_identifier: CBDB:635842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o2u82szAcdokNG1R29q7yK
        subject_person_id: p_eE3xaYR8Y7TedtJPtga2h7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PpSC8tk93v38N88U2Gk5t
          claim_id: c_o2u82szAcdokNG1R29q7yK
          source_id: s_Q7bfSoJwQDkCsqi2HHqJTa
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

# 王于昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王于昭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王于昭（CBDB 635842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635842&o=json)
