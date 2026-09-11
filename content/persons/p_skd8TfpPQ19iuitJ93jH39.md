---
schema: wang-person/v1
id: p_skd8TfpPQ19iuitJ93jH39
status: active
merged_into: null
display_name: 王克敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9avxzmVYEudU3jMGRg43eD
        subject_person_id: p_skd8TfpPQ19iuitJ93jH39
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_451LZAxDHYct784fu26qJC
          claim_id: c_9avxzmVYEudU3jMGRg43eD
          source_id: s_H1T53QJfF6ZVnMWjVTJMor
          stance: supports
          locator: CBDB:71662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71662）
          source: &a1
            id: s_H1T53QJfF6ZVnMWjVTJMor
            source_type: api_record
            title: 中国历代人物传记资料库：王克敏（CBDB 71662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71662&o=json
            external_identifier: CBDB:71662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5JTBqAGqG4bPfMAJWWJxuk
        subject_person_id: p_skd8TfpPQ19iuitJ93jH39
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1873年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZY5iMdm2p8dAqNGSm2JEkC
          claim_id: c_5JTBqAGqG4bPfMAJWWJxuk
          source_id: s_H1T53QJfF6ZVnMWjVTJMor
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
        id: c_sXNofyZFpPVapuZFgiF8EZ
        subject_person_id: p_skd8TfpPQ19iuitJ93jH39
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1945年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rN6Gjk27N3LWB5jKMErAgp
          claim_id: c_sXNofyZFpPVapuZFgiF8EZ
          source_id: s_H1T53QJfF6ZVnMWjVTJMor
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
        id: c_3xwJLgxTN2G4Ng3M1hvLEE
        subject_person_id: p_skd8TfpPQ19iuitJ93jH39
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克敏（1873年—1945年），中華民國人物。籍贯杭州府。（中国历代人物传记资料库 CBDB 71662）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KNm825U_HV_JAWm5yXR5th
          claim_id: c_3xwJLgxTN2G4Ng3M1hvLEE
          source_id: s_H1T53QJfF6ZVnMWjVTJMor
          stance: supports
          locator: CBDB:71662
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

# 王克敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克敏 | accepted |
| birth.date | 1873年 | accepted |
| death.date | 1945年 | accepted |
| bio.summary | 王克敏（1873年—1945年），中華民國人物。籍贯杭州府。（中国历代人物传记资料库 CBDB 71662） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克敏（CBDB 71662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71662&o=json)
