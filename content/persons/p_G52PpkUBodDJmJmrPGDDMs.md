---
schema: wang-person/v1
id: p_G52PpkUBodDJmJmrPGDDMs
status: active
merged_into: null
display_name: 王廷珪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BfYinVAFUCSbo6oEbCbiXz
        subject_person_id: p_G52PpkUBodDJmJmrPGDDMs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJ4cuE8bAX8FgDhmUFtUJG
          claim_id: c_BfYinVAFUCSbo6oEbCbiXz
          source_id: s_W8XTgQ6of5TCRJVKFdfTvL
          stance: supports
          locator: CBDB:637539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637539）
          source: &a1
            id: s_W8XTgQ6of5TCRJVKFdfTvL
            source_type: api_record
            title: 中国历代人物传记资料库：王廷珪（CBDB 637539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637539&o=json
            external_identifier: CBDB:637539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ea4rLQ3XmYFSSFct3yMVqv
        subject_person_id: p_G52PpkUBodDJmJmrPGDDMs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷珪，清人物。籍贯漳浦，入仕鄉貢舉人，曾任通判、訓導、知縣。（中国历代人物传记资料库 CBDB 637539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AKBnENKQk8ayWUdEp0LznI
          claim_id: c_Ea4rLQ3XmYFSSFct3yMVqv
          source_id: s_W8XTgQ6of5TCRJVKFdfTvL
          stance: supports
          locator: CBDB:637539
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

# 王廷珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷珪 | accepted |
| bio.summary | 王廷珪，清人物。籍贯漳浦，入仕鄉貢舉人，曾任通判、訓導、知縣。（中国历代人物传记资料库 CBDB 637539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷珪（CBDB 637539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637539&o=json)
