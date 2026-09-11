---
schema: wang-person/v1
id: p_dcCUe916bMnppMofDsdnPf
status: active
merged_into: null
display_name: 王允忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_475QncwGY8ENTHVz788S2J
        subject_person_id: p_dcCUe916bMnppMofDsdnPf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C1EJXEZkepnhdo7yFAmPvM
          claim_id: c_475QncwGY8ENTHVz788S2J
          source_id: s_6GaRccZPhgcyGGmLD4vPny
          stance: supports
          locator: CBDB:636120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636120）
          source: &a1
            id: s_6GaRccZPhgcyGGmLD4vPny
            source_type: api_record
            title: 中国历代人物传记资料库：王允忠（CBDB 636120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636120&o=json
            external_identifier: CBDB:636120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m2C8fvRgqqZFBeC6dMxmbC
        subject_person_id: p_dcCUe916bMnppMofDsdnPf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允忠，清人物。籍贯順天府，入仕行伍，曾任守備。（中国历代人物传记资料库 CBDB 636120）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9Qsu7fx7bc2CC6VSa2bCGK
          claim_id: c_m2C8fvRgqqZFBeC6dMxmbC
          source_id: s_6GaRccZPhgcyGGmLD4vPny
          stance: supports
          locator: CBDB:636120
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

# 王允忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允忠 | accepted |
| bio.summary | 王允忠，清人物。籍贯順天府，入仕行伍，曾任守備。（中国历代人物传记资料库 CBDB 636120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允忠（CBDB 636120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636120&o=json)
