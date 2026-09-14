---
schema: wang-person/v1
id: p_KiFYN7jscB6DHipu7TDA6c
status: active
merged_into: null
display_name: 王來賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5W6ducKJJPikekHCPQs4Ft
        subject_person_id: p_KiFYN7jscB6DHipu7TDA6c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GkUjyCAFfHC8Ye8ugmbTry
          claim_id: c_5W6ducKJJPikekHCPQs4Ft
          source_id: s_zxXMpKCc5usq87rCibvYGz
          stance: supports
          locator: CBDB:338035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338035）
          source: &a1
            id: s_zxXMpKCc5usq87rCibvYGz
            source_type: api_record
            title: 中国历代人物传记资料库：王來賓（CBDB 338035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338035&o=json
            external_identifier: CBDB:338035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3zkfpwDwiHTTMs8i8UYzGL
        subject_person_id: p_KiFYN7jscB6DHipu7TDA6c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來賓，明人物。隆慶五年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 338035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_omZLUpWlfwwCYqov_M_d71
          claim_id: c_3zkfpwDwiHTTMs8i8UYzGL
          source_id: s_zxXMpKCc5usq87rCibvYGz
          stance: supports
          locator: CBDB:338035
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VYknxEbVtLZVDfq9Be6IMO
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KiFYN7jscB6DHipu7TDA6c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m_BGg5Ey2qk_VUaVZQoBTH
          claim_id: c_VYknxEbVtLZVDfq9Be6IMO
          source_id: s_o4KhR2mUd4Wlmdh4Cx1sHj
          stance: supports
          locator: CBDB：兄弟 王來賢（205758）之父／母 王好義
          quotation: null
          interpretation_note: 由兄弟关系推断：王來賓 与 王來賢 为同胞（CBDB 记「兄」），王來賢 之父／母即 王來賓 之父／母。
          source:
            id: s_o4KhR2mUd4Wlmdh4Cx1sHj
            source_type: api_record
            title: 中国历代人物传记资料库：王來賓（CBDB 338035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338035&o=json
            external_identifier: CBDB:338035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QnpAMHvuyLgE52HMUUdB1Q
        status: active
        display_name: 王好義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_canTNh9yqfYOUM7fW5K8Cc
        subject_person_id: p_KiFYN7jscB6DHipu7TDA6c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aAFSBPvreHZtKBpYbVoLGC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vpJ24ueJp1yNQuYkt5CwHO
          claim_id: c_canTNh9yqfYOUM7fW5K8Cc
          source_id: s_o4KhR2mUd4Wlmdh4Cx1sHj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205758 王來賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_o4KhR2mUd4Wlmdh4Cx1sHj
            source_type: api_record
            title: 中国历代人物传记资料库：王來賓（CBDB 338035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338035&o=json
            external_identifier: CBDB:338035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aAFSBPvreHZtKBpYbVoLGC
        status: active
        display_name: 王來賢
        merged_into_person_id: null
---

# 王來賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來賓 | accepted |
| bio.summary | 王來賓，明人物。隆慶五年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 338035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QnpAMHvuyLgE52HMUUdB1Q | 王好義 | accepted |
| other | p_aAFSBPvreHZtKBpYbVoLGC | 王來賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來賓（CBDB 338035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338035&o=json)
