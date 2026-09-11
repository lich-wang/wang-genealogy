---
schema: wang-person/v1
id: p_znHV3HmefbEt6m77VLzyPN
status: active
merged_into: null
display_name: 王底績
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKCcC4Ujobv7n4XTLntqQt
        subject_person_id: p_znHV3HmefbEt6m77VLzyPN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王底績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZaLY8qCSDCCxPGUUGyuksG
          claim_id: c_HKCcC4Ujobv7n4XTLntqQt
          source_id: s_sE4ZWLwC8o9V81i2TxdwB1
          stance: supports
          locator: CBDB:637418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637418）
          source: &a1
            id: s_sE4ZWLwC8o9V81i2TxdwB1
            source_type: api_record
            title: 中国历代人物传记资料库：王底績（CBDB 637418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637418&o=json
            external_identifier: CBDB:637418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ESe65kr5j3DQZeUKXN5MR3
        subject_person_id: p_znHV3HmefbEt6m77VLzyPN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王底績，清人物。籍贯武定直隸州，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637418）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_efoHBTI_5wa6KQKB7eMed0
          claim_id: c_ESe65kr5j3DQZeUKXN5MR3
          source_id: s_sE4ZWLwC8o9V81i2TxdwB1
          stance: supports
          locator: CBDB:637418
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

# 王底績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王底績 | accepted |
| bio.summary | 王底績，清人物。籍贯武定直隸州，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637418） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王底績（CBDB 637418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637418&o=json)
