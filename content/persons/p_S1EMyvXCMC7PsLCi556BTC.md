---
schema: wang-person/v1
id: p_S1EMyvXCMC7PsLCi556BTC
status: active
merged_into: null
display_name: 王彥臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bNmEXdm45nAG88SETHg2x2
        subject_person_id: p_S1EMyvXCMC7PsLCi556BTC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GCS3FwQKG75WSjTJqw6ivW
          claim_id: c_bNmEXdm45nAG88SETHg2x2
          source_id: s_C7zYcjFm9GKccQZwG7ZRQD
          stance: supports
          locator: CBDB:306741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306741）
          source: &a1
            id: s_C7zYcjFm9GKccQZwG7ZRQD
            source_type: api_record
            title: 中国历代人物传记资料库：王彥臣（CBDB 306741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306741&o=json
            external_identifier: CBDB:306741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lht3p2izzRg8vqxv2gQJ9M
        subject_person_id: p_S1EMyvXCMC7PsLCi556BTC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥臣，明人物。嘉靖二十三年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 306741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_48W_B6IqcrXtc-0bCQHl5k
          claim_id: c_Lht3p2izzRg8vqxv2gQJ9M
          source_id: s_C7zYcjFm9GKccQZwG7ZRQD
          stance: supports
          locator: CBDB:306741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_klf_JfR62DOBxQh7zv0kfi
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S1EMyvXCMC7PsLCi556BTC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BbJHqm3JGwjS8sHsJlrxnN
          claim_id: c_klf_JfR62DOBxQh7zv0kfi
          source_id: s_aOwxDjhJt6hcjCzMXU5rRb
          stance: supports
          locator: CBDB：兄弟 王鳴臣（126785）之父／母 王國賜
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥臣 与 王鳴臣 为同胞（CBDB 记「弟」），王鳴臣 之父／母即 王彥臣 之父／母。
          source:
            id: s_aOwxDjhJt6hcjCzMXU5rRb
            source_type: api_record
            title: 中国历代人物传记资料库：王彥臣（CBDB 306741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306741&o=json
            external_identifier: CBDB:306741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y4FNMr5v5UBkNhYB7rhbfs
        status: active
        display_name: 王國賜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oXyyAl5inp1k3cGXLyzy5F
        subject_person_id: p_S1EMyvXCMC7PsLCi556BTC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_58rDTo_y76mbfATPG4gBRi
          claim_id: c_oXyyAl5inp1k3cGXLyzy5F
          source_id: s_aOwxDjhJt6hcjCzMXU5rRb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126785 王鳴臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aOwxDjhJt6hcjCzMXU5rRb
            source_type: api_record
            title: 中国历代人物传记资料库：王彥臣（CBDB 306741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306741&o=json
            external_identifier: CBDB:306741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gYn21nxF9d7iJNFwbu2Rnf
        status: active
        display_name: 王鳴臣
        merged_into_person_id: null
---

# 王彥臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥臣 | accepted |
| bio.summary | 王彥臣，明人物。嘉靖二十三年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 306741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y4FNMr5v5UBkNhYB7rhbfs | 王國賜 | accepted |
| other | p_gYn21nxF9d7iJNFwbu2Rnf | 王鳴臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥臣（CBDB 306741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306741&o=json)
