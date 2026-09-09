---
schema: wang-person/v1
id: p_yUGrnHLsS7LxYLCrPjF2cK
status: active
merged_into: null
display_name: 王曔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BRyiGG1f2SzvPBnXfow5EB
        subject_person_id: p_yUGrnHLsS7LxYLCrPjF2cK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FfmJ8K1FKAVXrivRc8ToFL
          claim_id: c_BRyiGG1f2SzvPBnXfow5EB
          source_id: s_HduMXTcM34LtMANpP8J7TG
          stance: supports
          locator: CBDB:175905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175905）
          source: &a1
            id: s_HduMXTcM34LtMANpP8J7TG
            source_type: api_record
            title: 中国历代人物传记资料库：王曔（CBDB 175905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175905&o=json
            external_identifier: CBDB:175905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DNfHN6Z2VMxvYhJVfyChJ2
        subject_person_id: p_yUGrnHLsS7LxYLCrPjF2cK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 769年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iWoyhCgXPCM3jZiW8LJr2k
          claim_id: c_DNfHN6Z2VMxvYhJVfyChJ2
          source_id: s_HduMXTcM34LtMANpP8J7TG
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
        id: c_M9gY6kpmKrV16TQ6r1n9ad
        subject_person_id: p_yUGrnHLsS7LxYLCrPjF2cK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3vAc8WY2RzGG81Rosg3Nt6
          claim_id: c_M9gY6kpmKrV16TQ6r1n9ad
          source_id: s_HduMXTcM34LtMANpP8J7TG
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

# 王曔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曔 | accepted |
| death.date | 769年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曔（CBDB 175905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175905&o=json)
