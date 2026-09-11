---
schema: wang-person/v1
id: p_TKMd2N9MancG4gPe9AdMm2
status: active
merged_into: null
display_name: 王應台
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B8CGH6F7WJeYh6tGDN8ZJ9
        subject_person_id: p_TKMd2N9MancG4gPe9AdMm2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應台
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H121vuiw6nF2Vh91HWttpL
          claim_id: c_B8CGH6F7WJeYh6tGDN8ZJ9
          source_id: s_1kiyKCvAcnmyJzSk2qUG7W
          stance: supports
          locator: CBDB:637976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637976）
          source: &a1
            id: s_1kiyKCvAcnmyJzSk2qUG7W
            source_type: api_record
            title: 中国历代人物传记资料库：王應台（CBDB 637976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637976&o=json
            external_identifier: CBDB:637976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yUvC2asE1BGjbcZnskFzje
        subject_person_id: p_TKMd2N9MancG4gPe9AdMm2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應台，清人物。籍贯天津，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__BMMpVVbI0NFzi3w9EnFm0
          claim_id: c_yUvC2asE1BGjbcZnskFzje
          source_id: s_1kiyKCvAcnmyJzSk2qUG7W
          stance: supports
          locator: CBDB:637976
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

# 王應台

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應台 | accepted |
| bio.summary | 王應台，清人物。籍贯天津，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應台（CBDB 637976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637976&o=json)
