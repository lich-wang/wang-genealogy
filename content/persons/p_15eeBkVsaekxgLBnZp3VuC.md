---
schema: wang-person/v1
id: p_15eeBkVsaekxgLBnZp3VuC
status: merged
merged_into: p_mWjKoqisRyZQ6GFgu4smAa
display_name: 王炎午
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TZd77kFMxBDPjzPD4m2c6v
        subject_person_id: p_15eeBkVsaekxgLBnZp3VuC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎午
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H6erWwsNi7NSme2QKUFHtF
          claim_id: c_TZd77kFMxBDPjzPD4m2c6v
          source_id: s_DAHNRvZ4JWoGtAPgXnN5BQ
          stance: supports
          locator: CBDB:35269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35269）
          source: &a1
            id: s_DAHNRvZ4JWoGtAPgXnN5BQ
            source_type: api_record
            title: 中国历代人物传记资料库：王炎午（CBDB 35269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35269&o=json
            external_identifier: CBDB:35269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YLDyEsDibcmh2zJqbAmxiy
        subject_person_id: p_15eeBkVsaekxgLBnZp3VuC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1252年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hsYn49h4DKw8QKJERqoBki
          claim_id: c_YLDyEsDibcmh2zJqbAmxiy
          source_id: s_DAHNRvZ4JWoGtAPgXnN5BQ
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
        id: c_Fytj7X94YRri48CAgyg9pq
        subject_person_id: p_15eeBkVsaekxgLBnZp3VuC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1324年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_828CD7ZnM14DL8nh7WgzGe
          claim_id: c_Fytj7X94YRri48CAgyg9pq
          source_id: s_DAHNRvZ4JWoGtAPgXnN5BQ
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
        id: c_8CKJAgLX1ATCc5sXCBa7vJ
        subject_person_id: p_15eeBkVsaekxgLBnZp3VuC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎午（1252年—1324年），元人物。籍贯安福州，身份为死國難、思想家，曾任太學生。（中国历代人物传记资料库 CBDB 35269）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YlGKDvf3ctGC1MYXU0LSgr
          claim_id: c_8CKJAgLX1ATCc5sXCBa7vJ
          source_id: s_DAHNRvZ4JWoGtAPgXnN5BQ
          stance: supports
          locator: CBDB:35269
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

# 王炎午

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎午 | accepted |
| birth.date | 1252年 | accepted |
| death.date | 1324年 | accepted |
| bio.summary | 王炎午（1252年—1324年），元人物。籍贯安福州，身份为死國難、思想家，曾任太學生。（中国历代人物传记资料库 CBDB 35269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炎午（CBDB 35269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35269&o=json)
