---
schema: wang-person/v1
id: p_DpQiwc8xYXUruWevnbjJPo
status: active
merged_into: null
display_name: 王仲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7UuFfRtHEZ2oVt1v5QuMcn
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZxjoSQVa2bLQM5YC7DPQFx
          claim_id: c_7UuFfRtHEZ2oVt1v5QuMcn
          source_id: s_DULoJjSFVPUakU1udCVKyY
          stance: supports
          locator: CBDB:138715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138715）
          source: &a1
            id: s_DULoJjSFVPUakU1udCVKyY
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 138715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138715&o=json
            external_identifier: CBDB:138715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sn8QRCnYmQFcuFoKbEp115
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 555年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Q3xnAACexWE4gN9qaT7So
          claim_id: c_sn8QRCnYmQFcuFoKbEp115
          source_id: s_DULoJjSFVPUakU1udCVKyY
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
        id: c_is3SwsJwxqoRUGBBJpTSm2
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 620年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9qmPTm5nuMMf5LM6a3PisJ
          claim_id: c_is3SwsJwxqoRUGBBJpTSm2
          source_id: s_DULoJjSFVPUakU1udCVKyY
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
        id: c_Jk3HfGDksN2NniGrFJVmDQ
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为鄭（王世充）人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FzB89kqHoq1aYUBHXRNQtX
          claim_id: c_Jk3HfGDksN2NniGrFJVmDQ
          source_id: s_DULoJjSFVPUakU1udCVKyY
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

# 王仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲 | accepted |
| birth.date | 555年 | accepted |
| death.date | 620年 | accepted |
| bio.summary | CBDB 记载为鄭（王世充）人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲（CBDB 138715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138715&o=json)
