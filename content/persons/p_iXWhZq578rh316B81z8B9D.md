---
schema: wang-person/v1
id: p_iXWhZq578rh316B81z8B9D
status: active
merged_into: null
display_name: 王元挺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pBKBtj99fsjQNKP32JMevj
        subject_person_id: p_iXWhZq578rh316B81z8B9D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元挺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7iK6BUuQMARHaMrsfLceFN
          claim_id: c_pBKBtj99fsjQNKP32JMevj
          source_id: s_VdDeqKPoXb7z1db8pbEyGV
          stance: supports
          locator: CBDB:636151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636151）
          source: &a1
            id: s_VdDeqKPoXb7z1db8pbEyGV
            source_type: api_record
            title: 中国历代人物传记资料库：王元挺（CBDB 636151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636151&o=json
            external_identifier: CBDB:636151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ptDuHaGQ5E2p3JR5JqytKu
        subject_person_id: p_iXWhZq578rh316B81z8B9D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元挺，清人物。籍贯金谿，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8KRBE3p0adjCXMjDz7BMMK
          claim_id: c_ptDuHaGQ5E2p3JR5JqytKu
          source_id: s_VdDeqKPoXb7z1db8pbEyGV
          stance: supports
          locator: CBDB:636151
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

# 王元挺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元挺 | accepted |
| bio.summary | 王元挺，清人物。籍贯金谿，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元挺（CBDB 636151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636151&o=json)
