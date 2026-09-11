---
schema: wang-person/v1
id: p_aRe7JGof7cHoDG26LDg11C
status: active
merged_into: null
display_name: 王鐔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Adp448pZDwE673B9Hk3Kw
        subject_person_id: p_aRe7JGof7cHoDG26LDg11C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WZQLcgZtMxGyf7mBsPABgy
          claim_id: c_8Adp448pZDwE673B9Hk3Kw
          source_id: s_Vn4BdoxLM78dkAWav4veo2
          stance: supports
          locator: CBDB:71289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71289）
          source: &a1
            id: s_Vn4BdoxLM78dkAWav4veo2
            source_type: api_record
            title: 中国历代人物传记资料库：王鐔（CBDB 71289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71289&o=json
            external_identifier: CBDB:71289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7wKxmNoriyoyqMPEZ9Cpcq
        subject_person_id: p_aRe7JGof7cHoDG26LDg11C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kSGyMSQtGq8ecSWkFoJFZJ
          claim_id: c_7wKxmNoriyoyqMPEZ9Cpcq
          source_id: s_Vn4BdoxLM78dkAWav4veo2
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
        id: c_uXTdPCAGSn3LKdNZ5M962g
        subject_person_id: p_aRe7JGof7cHoDG26LDg11C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1888年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Sh4yaUxLDaW6dSxpQUmVp
          claim_id: c_uXTdPCAGSn3LKdNZ5M962g
          source_id: s_Vn4BdoxLM78dkAWav4veo2
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
        id: c_AgFAdxy6DTncF868aWo8ff
        subject_person_id: p_aRe7JGof7cHoDG26LDg11C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐔（1824年—1888年），清人物。籍贯武進。（中国历代人物传记资料库 CBDB 71289）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YiEhkVNKQdVSGSwF19hoL1
          claim_id: c_AgFAdxy6DTncF868aWo8ff
          source_id: s_Vn4BdoxLM78dkAWav4veo2
          stance: supports
          locator: CBDB:71289
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

# 王鐔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐔 | accepted |
| birth.date | 1824年 | accepted |
| death.date | 1888年 | accepted |
| bio.summary | 王鐔（1824年—1888年），清人物。籍贯武進。（中国历代人物传记资料库 CBDB 71289） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐔（CBDB 71289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71289&o=json)
