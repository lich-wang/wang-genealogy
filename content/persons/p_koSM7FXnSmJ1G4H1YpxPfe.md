---
schema: wang-person/v1
id: p_koSM7FXnSmJ1G4H1YpxPfe
status: active
merged_into: null
display_name: 王之相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GPQQ85aHebz76xeGkMHJuV
        subject_person_id: p_koSM7FXnSmJ1G4H1YpxPfe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98qZGNkkWoWQfqqGTTrtHD
          claim_id: c_GPQQ85aHebz76xeGkMHJuV
          source_id: s_oiqZ6wD5TwcdCaf35jDrKf
          stance: supports
          locator: CBDB:71356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71356）
          source: &a1
            id: s_oiqZ6wD5TwcdCaf35jDrKf
            source_type: api_record
            title: 中国历代人物传记资料库：王之相（CBDB 71356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71356&o=json
            external_identifier: CBDB:71356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JM63p2GYXY2iN6e4J3BJKz
        subject_person_id: p_koSM7FXnSmJ1G4H1YpxPfe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1609年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j391xwri1buwxF5EPwr5na
          claim_id: c_JM63p2GYXY2iN6e4J3BJKz
          source_id: s_oiqZ6wD5TwcdCaf35jDrKf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Gky72jzmn79aLX1QKoeGJ
        subject_person_id: p_koSM7FXnSmJ1G4H1YpxPfe
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
        - id: cs_CF7GG5vJcTBshR1AEf3FD3
          claim_id: c_3Gky72jzmn79aLX1QKoeGJ
          source_id: s_oiqZ6wD5TwcdCaf35jDrKf
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

# 王之相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之相 | accepted |
| birth.date | 1609年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之相（CBDB 71356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71356&o=json)
