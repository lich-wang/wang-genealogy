---
schema: wang-person/v1
id: p_E3jyn3iMhLxX8MiuCHAoAQ
status: active
merged_into: null
display_name: 王讚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_igFPBCc6LsYK7hCZvZzBHL
        subject_person_id: p_E3jyn3iMhLxX8MiuCHAoAQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2wUYg2FXFonJ5K61LvjZEf
          claim_id: c_igFPBCc6LsYK7hCZvZzBHL
          source_id: s_9d4s7ZRU1tzsGsqapWBGK9
          stance: supports
          locator: CBDB:30041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30041）
          source: &a1
            id: s_9d4s7ZRU1tzsGsqapWBGK9
            source_type: api_record
            title: 中国历代人物传记资料库：王讚（CBDB 30041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30041&o=json
            external_identifier: CBDB:30041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GqbzWiaD6zzDww9wjL7y8f
        subject_person_id: p_E3jyn3iMhLxX8MiuCHAoAQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讚，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s0gba9Bfao2sJ_YWcbAKtg
          claim_id: c_GqbzWiaD6zzDww9wjL7y8f
          source_id: s_9d4s7ZRU1tzsGsqapWBGK9
          stance: supports
          locator: CBDB:30041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S9KMpjGHZsGXXG-x6Ga8LM
        subject_person_id: p_Tz4YpWKtJXjcMJNGcixnvv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E3jyn3iMhLxX8MiuCHAoAQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_l95BQM6Fqz4miqZIIbqyVu
          claim_id: c_S9KMpjGHZsGXXG-x6Ga8LM
          source_id: s_mbijOCLK28elS388ZEyyFP
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30033）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_mbijOCLK28elS388ZEyyFP
            source_type: api_record
            title: 中国历代人物传记资料库：王讚（CBDB 30041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30041&o=json
            external_identifier: CBDB:30041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tz4YpWKtJXjcMJNGcixnvv
        status: active
        display_name: 王枚士
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王讚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讚 | accepted |
| bio.summary | 王讚，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Tz4YpWKtJXjcMJNGcixnvv | 王枚士 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讚（CBDB 30041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30041&o=json)
