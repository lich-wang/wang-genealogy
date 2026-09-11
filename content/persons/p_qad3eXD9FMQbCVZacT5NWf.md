---
schema: wang-person/v1
id: p_qad3eXD9FMQbCVZacT5NWf
status: active
merged_into: null
display_name: 王六德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZaxEpu3ntN9hJNyThCQbMf
        subject_person_id: p_qad3eXD9FMQbCVZacT5NWf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EAnKrVVTNDmzdpBeqJzcz4
          claim_id: c_ZaxEpu3ntN9hJNyThCQbMf
          source_id: s_C5CTjMyrskAK71emJoywCC
          stance: supports
          locator: CBDB:636326
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636326）
          source: &a1
            id: s_C5CTjMyrskAK71emJoywCC
            source_type: api_record
            title: 中国历代人物传记资料库：王六德（CBDB 636326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636326&o=json
            external_identifier: CBDB:636326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kmC9Z9vQaxNPEAVJv7j6Gq
        subject_person_id: p_qad3eXD9FMQbCVZacT5NWf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六德，清人物。籍贯寧津，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636326）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BLvQ-9UBQAp5T8WuNWngy6
          claim_id: c_kmC9Z9vQaxNPEAVJv7j6Gq
          source_id: s_C5CTjMyrskAK71emJoywCC
          stance: supports
          locator: CBDB:636326
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

# 王六德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王六德 | accepted |
| bio.summary | 王六德，清人物。籍贯寧津，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636326） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王六德（CBDB 636326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636326&o=json)
