---
schema: wang-person/v1
id: p_goGz2W3af9xG7M2dqgkBmy
status: active
merged_into: null
display_name: 王光槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CLS3UgXav1vbLYBCxFh8Ev
        subject_person_id: p_goGz2W3af9xG7M2dqgkBmy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kVguySt4NKUkKHece4LmgG
          claim_id: c_CLS3UgXav1vbLYBCxFh8Ev
          source_id: s_qPrMp73YKzKbJtzxniHKQK
          stance: supports
          locator: CBDB:636256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636256）
          source: &a1
            id: s_qPrMp73YKzKbJtzxniHKQK
            source_type: api_record
            title: 中国历代人物传记资料库：王光槐（CBDB 636256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636256&o=json
            external_identifier: CBDB:636256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yXfY45AYkso5zj645AN2Pu
        subject_person_id: p_goGz2W3af9xG7M2dqgkBmy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光槐，清人物。籍贯寶慶府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YZd9ZjW7jKxpHT1G-STlms
          claim_id: c_yXfY45AYkso5zj645AN2Pu
          source_id: s_qPrMp73YKzKbJtzxniHKQK
          stance: supports
          locator: CBDB:636256
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

# 王光槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光槐 | accepted |
| bio.summary | 王光槐，清人物。籍贯寶慶府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光槐（CBDB 636256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636256&o=json)
