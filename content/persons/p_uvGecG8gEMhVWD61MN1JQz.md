---
schema: wang-person/v1
id: p_uvGecG8gEMhVWD61MN1JQz
status: active
merged_into: null
display_name: 王敬中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zGX1ZomcrnD5fqKm7dLrXD
        subject_person_id: p_uvGecG8gEMhVWD61MN1JQz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bajGiJvRAxsbPewffShvTz
          claim_id: c_zGX1ZomcrnD5fqKm7dLrXD
          source_id: s_a2vnNnGspKHBe2FAmSpWUu
          stance: supports
          locator: CBDB:304157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304157）
          source: &a1
            id: s_a2vnNnGspKHBe2FAmSpWUu
            source_type: api_record
            title: 中国历代人物传记资料库：王敬中（CBDB 304157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304157&o=json
            external_identifier: CBDB:304157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QVu32kJDc1oWhgdaDiAPBD
        subject_person_id: p_uvGecG8gEMhVWD61MN1JQz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nGx9AG_4_hFTKphhGpjEG-
          claim_id: c_QVu32kJDc1oWhgdaDiAPBD
          source_id: s_a2vnNnGspKHBe2FAmSpWUu
          stance: supports
          locator: CBDB:304157
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_llrp7wosJvH1ck8mJytnSY
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uvGecG8gEMhVWD61MN1JQz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qteelBXt5bpNofel7OhjAx
          claim_id: c_llrp7wosJvH1ck8mJytnSY
          source_id: s_7jmiTBMNFJdaiVJMgkKggn
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王敬中 与 王惟中 为同胞（CBDB 记「兄」），王惟中 之父／母即 王敬中 之父／母。
          source:
            id: s_7jmiTBMNFJdaiVJMgkKggn
            source_type: api_record
            title: 中国历代人物传记资料库：王敬中（CBDB 304157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304157&o=json
            external_identifier: CBDB:304157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EL1xAzh69eBckvCoFLRC2M
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FJSSH_OvOI1yPlpz7lFpMN
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uvGecG8gEMhVWD61MN1JQz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ovsa8lginq0q1W1DTfHATt
          claim_id: c_FJSSH_OvOI1yPlpz7lFpMN
          source_id: s_7jmiTBMNFJdaiVJMgkKggn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7jmiTBMNFJdaiVJMgkKggn
            source_type: api_record
            title: 中国历代人物传记资料库：王敬中（CBDB 304157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304157&o=json
            external_identifier: CBDB:304157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
        merged_into_person_id: null
---

# 王敬中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬中 | accepted |
| bio.summary | 王敬中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EL1xAzh69eBckvCoFLRC2M | 王紀 | accepted |
| other | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬中（CBDB 304157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304157&o=json)
