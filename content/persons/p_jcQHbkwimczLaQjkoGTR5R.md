---
schema: wang-person/v1
id: p_jcQHbkwimczLaQjkoGTR5R
status: active
merged_into: null
display_name: 王雍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yj1SRT24m727Xo2qNfA5fD
        subject_person_id: p_jcQHbkwimczLaQjkoGTR5R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DR9TYCyL7JLFURRrMD2xEX
          claim_id: c_yj1SRT24m727Xo2qNfA5fD
          source_id: s_g6m17142ZPjmJtNAibPZyH
          stance: supports
          locator: CBDB:262455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262455）
          source: &a1
            id: s_g6m17142ZPjmJtNAibPZyH
            source_type: api_record
            title: 中国历代人物传记资料库：王雍（CBDB 262455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262455&o=json
            external_identifier: CBDB:262455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E2csegNFBx6EZLtL4qxFXc
        subject_person_id: p_jcQHbkwimczLaQjkoGTR5R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MEuRsZO4I6EzCFA9gPvR8q
          claim_id: c_E2csegNFBx6EZLtL4qxFXc
          source_id: s_g6m17142ZPjmJtNAibPZyH
          stance: supports
          locator: CBDB:262455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c21comUpfcT2R5bBpbhYJ0
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jcQHbkwimczLaQjkoGTR5R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pv1ZdRQa79J8AQDk9VWhir
          claim_id: c_c21comUpfcT2R5bBpbhYJ0
          source_id: s_Wd_WxuM8pYazeUyHAknrIr
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王雍 与 王时中 为同胞（CBDB 记「兄」），王时中 之父／母即 王雍 之父／母。
          source:
            id: s_Wd_WxuM8pYazeUyHAknrIr
            source_type: api_record
            title: 中国历代人物传记资料库：王雍（CBDB 262455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262455&o=json
            external_identifier: CBDB:262455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bVznNBP2hMh6tDWAzv1nG9
        status: active
        display_name: 王钻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_npqlMyEE-6JNNGKFH8-263
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jcQHbkwimczLaQjkoGTR5R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o34K2VU4D50SKdUupzVQOr
          claim_id: c_npqlMyEE-6JNNGKFH8-263
          source_id: s_Wd_WxuM8pYazeUyHAknrIr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wd_WxuM8pYazeUyHAknrIr
            source_type: api_record
            title: 中国历代人物传记资料库：王雍（CBDB 262455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262455&o=json
            external_identifier: CBDB:262455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3SWv8LY5fsb1rb4ZwewsLo
        status: active
        display_name: 王时中
        merged_into_person_id: null
---

# 王雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雍 | accepted |
| bio.summary | 王雍，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bVznNBP2hMh6tDWAzv1nG9 | 王钻 | accepted |
| other | p_3SWv8LY5fsb1rb4ZwewsLo | 王时中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雍（CBDB 262455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262455&o=json)
