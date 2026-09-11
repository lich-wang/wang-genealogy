---
schema: wang-person/v1
id: p_F47c3qQNBNmyT4rVR47REj
status: active
merged_into: null
display_name: 王翊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rUrN4yVf5oJgAMvjPFHNED
        subject_person_id: p_F47c3qQNBNmyT4rVR47REj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zutiykD8HSK5uLed74SVd3
          claim_id: c_rUrN4yVf5oJgAMvjPFHNED
          source_id: s_oxiTW8m1T98w8XpjGTc5pB
          stance: supports
          locator: CBDB:703100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703100）
          source: &a1
            id: s_oxiTW8m1T98w8XpjGTc5pB
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 703100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703100&o=json
            external_identifier: CBDB:703100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xxjmapT7FHf6yy4DNSDPwL
        subject_person_id: p_F47c3qQNBNmyT4rVR47REj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊，明人物。籍贯上虞，曾任兵部職方司郎中。（中国历代人物传记资料库 CBDB 703100）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ppoebNZ8W90Vy8U_bh1yiU
          claim_id: c_xxjmapT7FHf6yy4DNSDPwL
          source_id: s_oxiTW8m1T98w8XpjGTc5pB
          stance: supports
          locator: CBDB:703100
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

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| bio.summary | 王翊，明人物。籍贯上虞，曾任兵部職方司郎中。（中国历代人物传记资料库 CBDB 703100） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翊（CBDB 703100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703100&o=json)
