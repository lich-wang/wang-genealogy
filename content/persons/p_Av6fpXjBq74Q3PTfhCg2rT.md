---
schema: wang-person/v1
id: p_Av6fpXjBq74Q3PTfhCg2rT
status: active
merged_into: null
display_name: 王法平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vbASvaNa88Cm3cDDdx5VuY
        subject_person_id: p_Av6fpXjBq74Q3PTfhCg2rT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g9C6GgbCRt4Uc2NfhEvL8M
          claim_id: c_vbASvaNa88Cm3cDDdx5VuY
          source_id: s_qGqQJyY4MwhqUGLoTpc1m3
          stance: supports
          locator: CBDB:701422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701422）
          source: &a1
            id: s_qGqQJyY4MwhqUGLoTpc1m3
            source_type: api_record
            title: 中国历代人物传记资料库：王法平（CBDB 701422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701422&o=json
            external_identifier: CBDB:701422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DWPCS1MQY3DCYATu2ZQauV
        subject_person_id: p_Av6fpXjBq74Q3PTfhCg2rT
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
        - id: cs_GqfSmR6nracpCUAvVXVfb7
          claim_id: c_DWPCS1MQY3DCYATu2ZQauV
          source_id: s_qGqQJyY4MwhqUGLoTpc1m3
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

# 王法平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王法平 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王法平（CBDB 701422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701422&o=json)
