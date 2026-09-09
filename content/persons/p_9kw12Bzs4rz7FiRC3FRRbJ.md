---
schema: wang-person/v1
id: p_9kw12Bzs4rz7FiRC3FRRbJ
status: active
merged_into: null
display_name: 王之笏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yTRr36LNNKLE7ZwW7NSHQo
        subject_person_id: p_9kw12Bzs4rz7FiRC3FRRbJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之笏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Yu6UEsFw3btEky3Ycw3nr
          claim_id: c_yTRr36LNNKLE7ZwW7NSHQo
          source_id: s_DKP2Zru6s7JfsCr7ojpAT3
          stance: supports
          locator: CBDB:635807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635807）
          source: &a1
            id: s_DKP2Zru6s7JfsCr7ojpAT3
            source_type: api_record
            title: 中国历代人物传记资料库：王之笏（CBDB 635807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635807&o=json
            external_identifier: CBDB:635807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J6aA2YzebiXQMLC39mRgwa
        subject_person_id: p_9kw12Bzs4rz7FiRC3FRRbJ
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
        - id: cs_y6psT8145ZnWvCQ9bNvfJW
          claim_id: c_J6aA2YzebiXQMLC39mRgwa
          source_id: s_DKP2Zru6s7JfsCr7ojpAT3
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

# 王之笏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之笏 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之笏（CBDB 635807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635807&o=json)
