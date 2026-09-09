---
schema: wang-person/v1
id: p_3dzqwywXeC4MQykQszTDHD
status: active
merged_into: null
display_name: 王文清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TteW7U7g83xTrWU5MPctgz
        subject_person_id: p_3dzqwywXeC4MQykQszTDHD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KMcAzJdvUCSn1LFdG56sLr
          claim_id: c_TteW7U7g83xTrWU5MPctgz
          source_id: s_LPo59M93NQ9SeL9xWQhave
          stance: supports
          locator: CBDB:69047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69047）
          source: &a1
            id: s_LPo59M93NQ9SeL9xWQhave
            source_type: api_record
            title: 中国历代人物传记资料库：王文清（CBDB 69047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69047&o=json
            external_identifier: CBDB:69047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HNxti1fCsE2NZ3N1QAvtDS
        subject_person_id: p_3dzqwywXeC4MQykQszTDHD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1688年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8atwcJ7QD7AUn3TT64EMYn
          claim_id: c_HNxti1fCsE2NZ3N1QAvtDS
          source_id: s_LPo59M93NQ9SeL9xWQhave
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Dko6QcS1cpksSM32Fqrncr
        subject_person_id: p_3dzqwywXeC4MQykQszTDHD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1779年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QAMQW9x9unBThCpUjPRehX
          claim_id: c_Dko6QcS1cpksSM32Fqrncr
          source_id: s_LPo59M93NQ9SeL9xWQhave
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i9dJzkK9sw6Q5noaT81vcs
        subject_person_id: p_3dzqwywXeC4MQykQszTDHD
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
        - id: cs_Gv8iF743K1JzNzuREHGL3c
          claim_id: c_i9dJzkK9sw6Q5noaT81vcs
          source_id: s_LPo59M93NQ9SeL9xWQhave
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

# 王文清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文清 | accepted |
| birth.date | 1688年 | accepted |
| death.date | 1779年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文清（CBDB 69047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69047&o=json)
