---
schema: wang-person/v1
id: p_twi4NUUgUZHwb8brmLuPPK
status: active
merged_into: null
display_name: 王羲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9GUQTTbqQGzmNAPtYBc2qC
        subject_person_id: p_twi4NUUgUZHwb8brmLuPPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NKfifSzcMgiDF1Zm43RmBt
          claim_id: c_9GUQTTbqQGzmNAPtYBc2qC
          source_id: s_bbwLJdbYL1N8Kc6Y8ehdvG
          stance: supports
          locator: CBDB:248697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248697）
          source: &a1
            id: s_bbwLJdbYL1N8Kc6Y8ehdvG
            source_type: api_record
            title: 中国历代人物传记资料库：王羲（CBDB 248697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248697&o=json
            external_identifier: CBDB:248697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L4FNLehW9KhvwbrkcBDECB
        subject_person_id: p_twi4NUUgUZHwb8brmLuPPK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羲，明人物。成化十一年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 248697）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GegdrYlHIP1jd9Tk1yhVuE
          claim_id: c_L4FNLehW9KhvwbrkcBDECB
          source_id: s_bbwLJdbYL1N8Kc6Y8ehdvG
          stance: supports
          locator: CBDB:248697
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

# 王羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羲 | accepted |
| bio.summary | 王羲，明人物。成化十一年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 248697） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王羲（CBDB 248697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248697&o=json)
