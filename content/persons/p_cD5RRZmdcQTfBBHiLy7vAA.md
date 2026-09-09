---
schema: wang-person/v1
id: p_cD5RRZmdcQTfBBHiLy7vAA
status: active
merged_into: null
display_name: 王世淳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1pQ2EoX4p1FgLAfUTUcCXW
        subject_person_id: p_cD5RRZmdcQTfBBHiLy7vAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jpk664WvEBd1Se4APFVm7x
          claim_id: c_1pQ2EoX4p1FgLAfUTUcCXW
          source_id: s_ibfpJEdjwvjqGN2vysu1kB
          stance: supports
          locator: CBDB:101114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101114）
          source: &a1
            id: s_ibfpJEdjwvjqGN2vysu1kB
            source_type: api_record
            title: 中国历代人物传记资料库：王世淳（CBDB 101114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101114&o=json
            external_identifier: CBDB:101114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Qk561h8yGTGBhkQNv1ScGf
        subject_person_id: p_cD5RRZmdcQTfBBHiLy7vAA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1321年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DxZbaow3urzurX9rKu3K78
          claim_id: c_Qk561h8yGTGBhkQNv1ScGf
          source_id: s_ibfpJEdjwvjqGN2vysu1kB
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
        id: c_VnvTKD5YPkvScb2CvWfPA7
        subject_person_id: p_cD5RRZmdcQTfBBHiLy7vAA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1368年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2hSLYV7nBX1JuJY8SbjREq
          claim_id: c_VnvTKD5YPkvScb2CvWfPA7
          source_id: s_ibfpJEdjwvjqGN2vysu1kB
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
        id: c_b4WY86r6B61FzQha7eb1Z4
        subject_person_id: p_cD5RRZmdcQTfBBHiLy7vAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tia852KQq7cDXnCY4mqFZV
          claim_id: c_b4WY86r6B61FzQha7eb1Z4
          source_id: s_ibfpJEdjwvjqGN2vysu1kB
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

# 王世淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世淳 | accepted |
| birth.date | 1321年 | accepted |
| death.date | 1368年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世淳（CBDB 101114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101114&o=json)
