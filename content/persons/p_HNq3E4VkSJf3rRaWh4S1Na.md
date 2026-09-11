---
schema: wang-person/v1
id: p_HNq3E4VkSJf3rRaWh4S1Na
status: active
merged_into: null
display_name: 王槐芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3KW1mMiKiMAGov8R5MU1R3
        subject_person_id: p_HNq3E4VkSJf3rRaWh4S1Na
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uthp6i3KTh2LhMdWGfcVUa
          claim_id: c_3KW1mMiKiMAGov8R5MU1R3
          source_id: s_oXyDe3HQYuPyTTf3q49aWL
          stance: supports
          locator: CBDB:638815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638815）
          source: &a1
            id: s_oXyDe3HQYuPyTTf3q49aWL
            source_type: api_record
            title: 中国历代人物传记资料库：王槐芳（CBDB 638815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638815&o=json
            external_identifier: CBDB:638815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.753Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xfeGAi8G7PnLmQa2LgMLLk
        subject_person_id: p_HNq3E4VkSJf3rRaWh4S1Na
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐芳，清人物。籍贯平越直隸州，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4sgMDXkhjSOiEmWHAslHNN
          claim_id: c_xfeGAi8G7PnLmQa2LgMLLk
          source_id: s_oXyDe3HQYuPyTTf3q49aWL
          stance: supports
          locator: CBDB:638815
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

# 王槐芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐芳 | accepted |
| bio.summary | 王槐芳，清人物。籍贯平越直隸州，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槐芳（CBDB 638815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638815&o=json)
