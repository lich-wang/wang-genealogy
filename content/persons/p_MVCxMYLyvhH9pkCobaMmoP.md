---
schema: wang-person/v1
id: p_MVCxMYLyvhH9pkCobaMmoP
status: active
merged_into: null
display_name: 王宗澄
cbdb_id: 278552
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZeyWtmzsYZ869jHAPC4kr3
        subject_person_id: p_MVCxMYLyvhH9pkCobaMmoP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗澄，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278552）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_n1amoU_8SV8ehbe2NNQAAl
          claim_id: c_ZeyWtmzsYZ869jHAPC4kr3
          source_id: s_HadMaryddYJSffhG5rbHw5
          stance: supports
          locator: CBDB:278552
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HadMaryddYJSffhG5rbHw5
            source_type: api_record
            title: 中国历代人物传记资料库：王宗澄（CBDB 278552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278552&o=json
            external_identifier: CBDB:278552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TVc62rG5qxiE5vmvXQTCWx
        subject_person_id: p_MVCxMYLyvhH9pkCobaMmoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xNYJFhJvQRGnBgW43v4LWr
          claim_id: c_TVc62rG5qxiE5vmvXQTCWx
          source_id: s_HadMaryddYJSffhG5rbHw5
          stance: supports
          locator: CBDB:278552
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-KRVqry6fPvWTjLQfP-4Bn
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MVCxMYLyvhH9pkCobaMmoP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWOgURRD_O6KNvv0JoVq4N
          claim_id: c_-KRVqry6fPvWTjLQfP-4Bn
          source_id: s_fwgEdgmc2ANoDs8Dm6-wtk
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗澄 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗澄 之父／母。
          source:
            id: s_fwgEdgmc2ANoDs8Dm6-wtk
            source_type: api_record
            title: 中国历代人物传记资料库：王宗澄（CBDB 278552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278552&o=json
            external_identifier: CBDB:278552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NfVYYG7aC993nZohPs46Tb
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7EFTVUTfgaXMnNexjjF_LL
        subject_person_id: p_MVCxMYLyvhH9pkCobaMmoP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4p917aJGHcHcSoxKUqy7Gv
          claim_id: c_7EFTVUTfgaXMnNexjjF_LL
          source_id: s_fwgEdgmc2ANoDs8Dm6-wtk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fwgEdgmc2ANoDs8Dm6-wtk
            source_type: api_record
            title: 中国历代人物传记资料库：王宗澄（CBDB 278552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278552&o=json
            external_identifier: CBDB:278552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        status: active
        display_name: 王宗源
        merged_into_person_id: null
---

# 王宗澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗澄，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278552） | accepted |
| name.primary | 王宗澄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NfVYYG7aC993nZohPs46Tb | 王綱 | accepted |
| other | p_tuf6Y9AXWQN6kvcQsy6Eb8 | 王宗源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗澄（CBDB 278552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278552&o=json)
