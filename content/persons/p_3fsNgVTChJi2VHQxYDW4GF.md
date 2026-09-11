---
schema: wang-person/v1
id: p_3fsNgVTChJi2VHQxYDW4GF
status: active
merged_into: null
display_name: 王觀濤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZrAttqJWpBDHD9WpcoHQPQ
        subject_person_id: p_3fsNgVTChJi2VHQxYDW4GF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀濤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gej54yigSfcimr17P4TNqQ
          claim_id: c_ZrAttqJWpBDHD9WpcoHQPQ
          source_id: s_WcxtxiqJ7xxKdnJajyYprh
          stance: supports
          locator: CBDB:640255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640255）
          source: &a1
            id: s_WcxtxiqJ7xxKdnJajyYprh
            source_type: api_record
            title: 中国历代人物传记资料库：王觀濤（CBDB 640255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640255&o=json
            external_identifier: CBDB:640255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2ErG1DW51Xyt882979Li6x
        subject_person_id: p_3fsNgVTChJi2VHQxYDW4GF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀濤，清人物。籍贯順天府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XLID6YGnagwRYd4j0T3rP1
          claim_id: c_2ErG1DW51Xyt882979Li6x
          source_id: s_WcxtxiqJ7xxKdnJajyYprh
          stance: supports
          locator: CBDB:640255
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

# 王觀濤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀濤 | accepted |
| bio.summary | 王觀濤，清人物。籍贯順天府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀濤（CBDB 640255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640255&o=json)
