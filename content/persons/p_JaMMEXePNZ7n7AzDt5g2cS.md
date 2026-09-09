---
schema: wang-person/v1
id: p_JaMMEXePNZ7n7AzDt5g2cS
status: active
merged_into: null
display_name: 王以安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZHmMAJU4KnYEA4yoxAn7u5
        subject_person_id: p_JaMMEXePNZ7n7AzDt5g2cS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eMTPgAZEc2tg7fVRQ3rgr9
          claim_id: c_ZHmMAJU4KnYEA4yoxAn7u5
          source_id: s_1C5f3q8Jk49fTpCg7gJRLq
          stance: supports
          locator: CBDB:635917
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635917）
          source: &a1
            id: s_1C5f3q8Jk49fTpCg7gJRLq
            source_type: api_record
            title: 中国历代人物传记资料库：王以安（CBDB 635917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635917&o=json
            external_identifier: CBDB:635917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_36WvCfArGP7L6Tq1AU1m4h
        subject_person_id: p_JaMMEXePNZ7n7AzDt5g2cS
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
        - id: cs_orLNiEU149MD7DLJTkWnMH
          claim_id: c_36WvCfArGP7L6Tq1AU1m4h
          source_id: s_1C5f3q8Jk49fTpCg7gJRLq
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

# 王以安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以安 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以安（CBDB 635917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635917&o=json)
