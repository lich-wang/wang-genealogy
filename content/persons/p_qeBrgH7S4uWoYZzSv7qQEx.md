---
schema: wang-person/v1
id: p_qeBrgH7S4uWoYZzSv7qQEx
status: active
merged_into: null
display_name: 王宗顏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uF1NzyZQZBQrBXUuSAwoGT
        subject_person_id: p_qeBrgH7S4uWoYZzSv7qQEx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iq8cthPa5xC3knfQRkHAkB
          claim_id: c_uF1NzyZQZBQrBXUuSAwoGT
          source_id: s_oKb1PGDPudh8VwnvLGSohP
          stance: supports
          locator: CBDB:637128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637128）
          source: &a1
            id: s_oKb1PGDPudh8VwnvLGSohP
            source_type: api_record
            title: 中国历代人物传记资料库：王宗顏（CBDB 637128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637128&o=json
            external_identifier: CBDB:637128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ND8aUzZkonx3Ae2nKZ48dE
        subject_person_id: p_qeBrgH7S4uWoYZzSv7qQEx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗顏，清人物。籍贯河間，曾任訓導。（中国历代人物传记资料库 CBDB 637128）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kTCkGNzDOrV9_vTzal95dh
          claim_id: c_ND8aUzZkonx3Ae2nKZ48dE
          source_id: s_oKb1PGDPudh8VwnvLGSohP
          stance: supports
          locator: CBDB:637128
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

# 王宗顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗顏 | accepted |
| bio.summary | 王宗顏，清人物。籍贯河間，曾任訓導。（中国历代人物传记资料库 CBDB 637128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗顏（CBDB 637128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637128&o=json)
