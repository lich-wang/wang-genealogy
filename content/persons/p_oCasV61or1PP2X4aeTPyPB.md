---
schema: wang-person/v1
id: p_oCasV61or1PP2X4aeTPyPB
status: active
merged_into: null
display_name: 王鑛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ng3UtGfHf89AryS17ybs29
        subject_person_id: p_oCasV61or1PP2X4aeTPyPB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pkyh3qAeehQxQNgWeyJ3Tz
          claim_id: c_Ng3UtGfHf89AryS17ybs29
          source_id: s_CzGABXyWVgJia7PFEXBCiP
          stance: supports
          locator: CBDB:219872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219872）
          source: &a1
            id: s_CzGABXyWVgJia7PFEXBCiP
            source_type: api_record
            title: 中国历代人物传记资料库：王鑛（CBDB 219872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219872&o=json
            external_identifier: CBDB:219872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ZrcLGp8eTHHSDb5PSFtZM
        subject_person_id: p_oCasV61or1PP2X4aeTPyPB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑛，明人物。萬曆八年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 219872）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k5DjA2sZFcIxECDD_D9oqe
          claim_id: c_8ZrcLGp8eTHHSDb5PSFtZM
          source_id: s_CzGABXyWVgJia7PFEXBCiP
          stance: supports
          locator: CBDB:219872
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_07SYb6z5_0KpUstXrriIS1
        subject_person_id: p_VT8a4dGzV3YZgqDrEEd9JE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oCasV61or1PP2X4aeTPyPB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0tYVOEJgxcja1YCQhWs7f2
          claim_id: c_07SYb6z5_0KpUstXrriIS1
          source_id: s_5HFqI1kJAOT5W8XfdEDu4-
          stance: supports
          locator: CBDB：兄弟 王鑰（206568）之父／母 王應官
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑛 与 王鑰 为同胞（CBDB 记「弟」），王鑰 之父／母即 王鑛 之父／母。
          source:
            id: s_5HFqI1kJAOT5W8XfdEDu4-
            source_type: api_record
            title: 中国历代人物传记资料库：王鑛（CBDB 219872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219872&o=json
            external_identifier: CBDB:219872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VT8a4dGzV3YZgqDrEEd9JE
        status: active
        display_name: 王應官
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dNyVZqTwXnJbCCrp0l_Z_0
        subject_person_id: p_Hq41nXPS6acQQdhAZabmC1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oCasV61or1PP2X4aeTPyPB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RmmffD2tAf1qjmtsMD108R
          claim_id: c_dNyVZqTwXnJbCCrp0l_Z_0
          source_id: s_5HFqI1kJAOT5W8XfdEDu4-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206568 王鑰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5HFqI1kJAOT5W8XfdEDu4-
            source_type: api_record
            title: 中国历代人物传记资料库：王鑛（CBDB 219872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219872&o=json
            external_identifier: CBDB:219872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hq41nXPS6acQQdhAZabmC1
        status: active
        display_name: 王鑰
        merged_into_person_id: null
---

# 王鑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑛 | accepted |
| bio.summary | 王鑛，明人物。萬曆八年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 219872） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VT8a4dGzV3YZgqDrEEd9JE | 王應官 | accepted |
| other | p_Hq41nXPS6acQQdhAZabmC1 | 王鑰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑛（CBDB 219872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219872&o=json)
