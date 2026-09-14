---
schema: wang-person/v1
id: p_NXh9xgg8kLtc5e2wmpJnhn
status: active
merged_into: null
display_name: 王繼濂
cbdb_id: 303917
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XFM8DARaaq9MMy7NB3XKDh
        subject_person_id: p_NXh9xgg8kLtc5e2wmpJnhn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼濂，明人物。嘉靖二十年進士，籍贯鄭州。（中国历代人物传记资料库 CBDB 303917）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wPHxV5C6kVYg9c-06cjcEg
          claim_id: c_XFM8DARaaq9MMy7NB3XKDh
          source_id: s_DmqL1CDj8XszeB1c4K49H8
          stance: supports
          locator: CBDB:303917
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DmqL1CDj8XszeB1c4K49H8
            source_type: api_record
            title: 中国历代人物传记资料库：王繼濂（CBDB 303917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303917&o=json
            external_identifier: CBDB:303917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UKPRk2AHfn3HkA2W2SuMMj
        subject_person_id: p_NXh9xgg8kLtc5e2wmpJnhn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dLRiNV72K2X5apqLEyFGeF
          claim_id: c_UKPRk2AHfn3HkA2W2SuMMj
          source_id: s_DmqL1CDj8XszeB1c4K49H8
          stance: supports
          locator: CBDB:303917
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PMKqxem8RmRbN1JK5zukag
        subject_person_id: p_xd5BBtiqvSSseTbzS782qq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NXh9xgg8kLtc5e2wmpJnhn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q5YkDlvQlPDmpda29ahn5O
          claim_id: c_PMKqxem8RmRbN1JK5zukag
          source_id: s_oQ2aHHxYfCcvBHzaGmYSxq
          stance: supports
          locator: CBDB：兄弟 王繼洛（203382）之父／母 王鍊
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼濂 与 王繼洛 为同胞（CBDB 记「弟」），王繼洛 之父／母即 王繼濂 之父／母。
          source:
            id: s_oQ2aHHxYfCcvBHzaGmYSxq
            source_type: api_record
            title: 中国历代人物传记资料库：王繼濂（CBDB 303917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303917&o=json
            external_identifier: CBDB:303917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xd5BBtiqvSSseTbzS782qq
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EJbzjUXa15UYZFUTNqMz_6
        subject_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NXh9xgg8kLtc5e2wmpJnhn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r2DXQcgu2PZ5Csa7-W7Kwe
          claim_id: c_EJbzjUXa15UYZFUTNqMz_6
          source_id: s_oQ2aHHxYfCcvBHzaGmYSxq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203382 王繼洛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oQ2aHHxYfCcvBHzaGmYSxq
            source_type: api_record
            title: 中国历代人物传记资料库：王繼濂（CBDB 303917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303917&o=json
            external_identifier: CBDB:303917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DjAtFBFadf2HWZ7GfWUuJs
        status: active
        display_name: 王繼洛
        merged_into_person_id: null
---

# 王繼濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼濂，明人物。嘉靖二十年進士，籍贯鄭州。（中国历代人物传记资料库 CBDB 303917） | accepted |
| name.primary | 王繼濂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xd5BBtiqvSSseTbzS782qq | 王鍊 | accepted |
| other | p_DjAtFBFadf2HWZ7GfWUuJs | 王繼洛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼濂（CBDB 303917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303917&o=json)
