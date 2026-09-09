---
schema: wang-person/v1
id: p_LoJbMxAbDgzmuQAGZgmQgS
status: active
merged_into: null
display_name: 王宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PtC7MaF3TqNqDKp7yrb5rc
        subject_person_id: p_LoJbMxAbDgzmuQAGZgmQgS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mHjeheCC5o2W1nKaENwfEb
          claim_id: c_PtC7MaF3TqNqDKp7yrb5rc
          source_id: s_C1tWzToDB1Cd9PWWUFcs2k
          stance: supports
          locator: CBDB:71152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71152）
          source: &a1
            id: s_C1tWzToDB1Cd9PWWUFcs2k
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 71152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71152&o=json
            external_identifier: CBDB:71152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hh1Co38jDEmQLRLz4tW2y9
        subject_person_id: p_LoJbMxAbDgzmuQAGZgmQgS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1630年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_naS4f4nFKbn9gCYdXw1utD
          claim_id: c_hh1Co38jDEmQLRLz4tW2y9
          source_id: s_C1tWzToDB1Cd9PWWUFcs2k
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
        id: c_SZR1hqrzGRxKrsNhg1AZCG
        subject_person_id: p_LoJbMxAbDgzmuQAGZgmQgS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1706年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xTEm5wGenn9cL9F1Am22TL
          claim_id: c_SZR1hqrzGRxKrsNhg1AZCG
          source_id: s_C1tWzToDB1Cd9PWWUFcs2k
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
        id: c_7LU4L3XPjDAZkMqU42vFwj
        subject_person_id: p_LoJbMxAbDgzmuQAGZgmQgS
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
        - id: cs_1aNtx8sh9h5n73CwyJoijc
          claim_id: c_7LU4L3XPjDAZkMqU42vFwj
          source_id: s_C1tWzToDB1Cd9PWWUFcs2k
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

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| birth.date | 1630年 | accepted |
| death.date | 1706年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 71152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71152&o=json)
