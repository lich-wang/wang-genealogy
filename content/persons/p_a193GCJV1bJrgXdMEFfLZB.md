---
schema: wang-person/v1
id: p_a193GCJV1bJrgXdMEFfLZB
status: active
merged_into: null
display_name: 王采蘋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M5iSMWZPeFeU3sbgT1oS44
        subject_person_id: p_a193GCJV1bJrgXdMEFfLZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采蘋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qiTS8WEfZ3hdDWaZTGwKX2
          claim_id: c_M5iSMWZPeFeU3sbgT1oS44
          source_id: s_Ywjh28MAL9HiWPs2L9x3aD
          stance: supports
          locator: CBDB:55195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55195）
          source: &a1
            id: s_Ywjh28MAL9HiWPs2L9x3aD
            source_type: api_record
            title: 中国历代人物传记资料库：王采蘋（CBDB 55195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55195&o=json
            external_identifier: CBDB:55195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.084Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MngNq6kimHeVR4JN5mKzAj
        subject_person_id: p_a193GCJV1bJrgXdMEFfLZB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1827年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9aBRJFN3oSFXXSnfZbq77X
          claim_id: c_MngNq6kimHeVR4JN5mKzAj
          source_id: s_Ywjh28MAL9HiWPs2L9x3aD
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
        id: c_19U4zf74zDckADBggk7Phg
        subject_person_id: p_a193GCJV1bJrgXdMEFfLZB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1893年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4f2kJNHHonxqSrw6CScp6Q
          claim_id: c_19U4zf74zDckADBggk7Phg
          source_id: s_Ywjh28MAL9HiWPs2L9x3aD
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
        id: c_MZ7PYiaEnEqyFR2zeGUogH
        subject_person_id: p_a193GCJV1bJrgXdMEFfLZB
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
        - id: cs_77vA4PbtjbkD5aCHHF21cb
          claim_id: c_MZ7PYiaEnEqyFR2zeGUogH
          source_id: s_Ywjh28MAL9HiWPs2L9x3aD
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

# 王采蘋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王采蘋 | accepted |
| birth.date | 1827年 | accepted |
| death.date | 1893年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王采蘋（CBDB 55195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55195&o=json)
