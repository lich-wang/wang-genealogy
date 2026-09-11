---
schema: wang-person/v1
id: p_cgy1FT76hFjB8JK4Kn8rVX
status: active
merged_into: null
display_name: 王景會
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ks1Y9x8A6h7fzoYpPH5LKH
        subject_person_id: p_cgy1FT76hFjB8JK4Kn8rVX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P4ZJcJKajdACrVDfE8B37A
          claim_id: c_Ks1Y9x8A6h7fzoYpPH5LKH
          source_id: s_chHmffM6q5mopb4sFzhJi5
          stance: supports
          locator: CBDB:638486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638486）
          source: &a1
            id: s_chHmffM6q5mopb4sFzhJi5
            source_type: api_record
            title: 中国历代人物传记资料库：王景會（CBDB 638486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638486&o=json
            external_identifier: CBDB:638486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g7bsmS9jMf1MZB9RdjKUok
        subject_person_id: p_cgy1FT76hFjB8JK4Kn8rVX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景會，清人物。籍贯郃陽，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hkTP_M-bFRGcQjvF73XTwS
          claim_id: c_g7bsmS9jMf1MZB9RdjKUok
          source_id: s_chHmffM6q5mopb4sFzhJi5
          stance: supports
          locator: CBDB:638486
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

# 王景會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景會 | accepted |
| bio.summary | 王景會，清人物。籍贯郃陽，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景會（CBDB 638486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638486&o=json)
