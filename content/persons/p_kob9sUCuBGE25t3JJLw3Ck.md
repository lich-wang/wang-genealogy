---
schema: wang-person/v1
id: p_kob9sUCuBGE25t3JJLw3Ck
status: active
merged_into: null
display_name: 王瑻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jUPugSaQzYkLmpuExjsukr
        subject_person_id: p_kob9sUCuBGE25t3JJLw3Ck
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qgxA239FMzo2yQxSKQvfTk
          claim_id: c_jUPugSaQzYkLmpuExjsukr
          source_id: s_ZdakEjECZNwLHNxoVQ2bzZ
          stance: supports
          locator: CBDB:563043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563043）
          source: &a1
            id: s_ZdakEjECZNwLHNxoVQ2bzZ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑻（CBDB 563043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563043&o=json
            external_identifier: CBDB:563043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DbsD8RtEpeDX4s42nsvgWo
        subject_person_id: p_kob9sUCuBGE25t3JJLw3Ck
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑻，宋人物。籍贯通遠軍。（中国历代人物传记资料库 CBDB 563043）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u_1lEVeRHHi1x2h8q25zmJ
          claim_id: c_DbsD8RtEpeDX4s42nsvgWo
          source_id: s_ZdakEjECZNwLHNxoVQ2bzZ
          stance: supports
          locator: CBDB:563043
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

# 王瑻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑻 | accepted |
| bio.summary | 王瑻，宋人物。籍贯通遠軍。（中国历代人物传记资料库 CBDB 563043） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑻（CBDB 563043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563043&o=json)
