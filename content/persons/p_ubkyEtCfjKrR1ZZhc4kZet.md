---
schema: wang-person/v1
id: p_ubkyEtCfjKrR1ZZhc4kZet
status: active
merged_into: null
display_name: 王實
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bYhmZVKpfgK8uxSvEHFmKg
        subject_person_id: p_ubkyEtCfjKrR1ZZhc4kZet
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gbVNYJ5TqGxMmiVkVCevwi
          claim_id: c_bYhmZVKpfgK8uxSvEHFmKg
          source_id: s_zFxt9XLxacTwgeBSLmYtg7
          stance: supports
          locator: CBDB:250015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250015）
          source: &a1
            id: s_zFxt9XLxacTwgeBSLmYtg7
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 250015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250015&o=json
            external_identifier: CBDB:250015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v1BH17pq1q4BkJfhcoKtNr
        subject_person_id: p_ubkyEtCfjKrR1ZZhc4kZet
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實，明人物。成化十一年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 250015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tQpmYNXN1_xp6_JVq9uOfb
          claim_id: c_v1BH17pq1q4BkJfhcoKtNr
          source_id: s_zFxt9XLxacTwgeBSLmYtg7
          stance: supports
          locator: CBDB:250015
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rNDx7CahLsHgdjG1A3-Lps
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ubkyEtCfjKrR1ZZhc4kZet
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g8EaZwuB5tqRJRsVdBfOUf
          claim_id: c_rNDx7CahLsHgdjG1A3-Lps
          source_id: s__sSgwIeZdEKA1KHFRpj-JE
          stance: supports
          locator: CBDB：兄弟 王宬（199813）之父／母 王孟瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王實 与 王宬 为同胞（CBDB 记「弟」），王宬 之父／母即 王實 之父／母。
          source:
            id: s__sSgwIeZdEKA1KHFRpj-JE
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 250015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250015&o=json
            external_identifier: CBDB:250015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oYefTot2EGCYoXmKyUe9cv
        status: active
        display_name: 王孟瓛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_p0CqNxEW4ZuTcVMXlnNsmm
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ubkyEtCfjKrR1ZZhc4kZet
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AiFqhMwzM6o1OfP1RWiBdN
          claim_id: c_p0CqNxEW4ZuTcVMXlnNsmm
          source_id: s__sSgwIeZdEKA1KHFRpj-JE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199813 王宬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__sSgwIeZdEKA1KHFRpj-JE
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 250015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250015&o=json
            external_identifier: CBDB:250015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XU2HBZFhmiBGAyoKHD4B6w
        status: active
        display_name: 王宬
        merged_into_person_id: null
---

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王實 | accepted |
| bio.summary | 王實，明人物。成化十一年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 250015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oYefTot2EGCYoXmKyUe9cv | 王孟瓛 | accepted |
| other | p_XU2HBZFhmiBGAyoKHD4B6w | 王宬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王實（CBDB 250015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250015&o=json)
