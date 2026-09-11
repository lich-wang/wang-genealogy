---
schema: wang-person/v1
id: p_rxDiN4Hxqq8YPM5Pdiao9Y
status: active
merged_into: null
display_name: 王冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a77sAmCSvq1vo7amMzmDso
        subject_person_id: p_rxDiN4Hxqq8YPM5Pdiao9Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gxtwSabg2yxmE9sor5B2gK
          claim_id: c_a77sAmCSvq1vo7amMzmDso
          source_id: s_bs3KWGm37kU5GRRPyR8P9M
          stance: supports
          locator: CBDB:495523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495523）
          source: &a1
            id: s_bs3KWGm37kU5GRRPyR8P9M
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 495523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495523&o=json
            external_identifier: CBDB:495523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7UJPg3MaKqDLmekwpbCCge
        subject_person_id: p_rxDiN4Hxqq8YPM5Pdiao9Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕，明人物。入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 495523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jvm2Yei4F_UBI4RU7Dtct3
          claim_id: c_7UJPg3MaKqDLmekwpbCCge
          source_id: s_bs3KWGm37kU5GRRPyR8P9M
          stance: supports
          locator: CBDB:495523
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

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| bio.summary | 王冕，明人物。入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 495523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 495523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495523&o=json)
