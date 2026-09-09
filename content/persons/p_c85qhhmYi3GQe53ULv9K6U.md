---
schema: wang-person/v1
id: p_c85qhhmYi3GQe53ULv9K6U
status: active
merged_into: null
display_name: 王永壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xVqg9dzbYotYf87zJ4tb4t
        subject_person_id: p_c85qhhmYi3GQe53ULv9K6U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jrWBGgo5dt7gE23kxpu8iD
          claim_id: c_xVqg9dzbYotYf87zJ4tb4t
          source_id: s_Zp8DPtSrC1MRzCDVfSdLRi
          stance: supports
          locator: CBDB:69123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69123）
          source: &a1
            id: s_Zp8DPtSrC1MRzCDVfSdLRi
            source_type: api_record
            title: 中国历代人物传记资料库：王永壽（CBDB 69123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69123&o=json
            external_identifier: CBDB:69123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RXJDfHyG4mZD3HgmzCwDY2
        subject_person_id: p_c85qhhmYi3GQe53ULv9K6U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1850年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cvcyQ1fvpC2E9WFf7k7aBy
          claim_id: c_RXJDfHyG4mZD3HgmzCwDY2
          source_id: s_Zp8DPtSrC1MRzCDVfSdLRi
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
        id: c_hC4yZAxLMBpqjW2CL8rToG
        subject_person_id: p_c85qhhmYi3GQe53ULv9K6U
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
        - id: cs_pL7AQn8Jej86ypqde79vE4
          claim_id: c_hC4yZAxLMBpqjW2CL8rToG
          source_id: s_Zp8DPtSrC1MRzCDVfSdLRi
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

# 王永壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永壽 | accepted |
| death.date | 1850年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永壽（CBDB 69123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69123&o=json)
