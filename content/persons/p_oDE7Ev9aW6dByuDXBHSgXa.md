---
schema: wang-person/v1
id: p_oDE7Ev9aW6dByuDXBHSgXa
status: active
merged_into: null
display_name: 王揚芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3f8WevV2KyVRgcbi4qFnTY
        subject_person_id: p_oDE7Ev9aW6dByuDXBHSgXa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揚芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kBeUtypyQWY2K1WidSbR4q
          claim_id: c_3f8WevV2KyVRgcbi4qFnTY
          source_id: s_ur8m8d6sKXrhG2JT542nXP
          stance: supports
          locator: CBDB:638152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638152）
          source: &a1
            id: s_ur8m8d6sKXrhG2JT542nXP
            source_type: api_record
            title: 中国历代人物传记资料库：王揚芳（CBDB 638152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638152&o=json
            external_identifier: CBDB:638152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QELKGZgMN6W1FSZvtGMxXp
        subject_person_id: p_oDE7Ev9aW6dByuDXBHSgXa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揚芳，清人物。籍贯瀏陽，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TaaDXwr2WgRSCtbzwH4dUj
          claim_id: c_QELKGZgMN6W1FSZvtGMxXp
          source_id: s_ur8m8d6sKXrhG2JT542nXP
          stance: supports
          locator: CBDB:638152
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

# 王揚芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王揚芳 | accepted |
| bio.summary | 王揚芳，清人物。籍贯瀏陽，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638152） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王揚芳（CBDB 638152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638152&o=json)
