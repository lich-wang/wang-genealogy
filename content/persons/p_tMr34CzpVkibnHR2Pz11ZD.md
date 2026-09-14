---
schema: wang-person/v1
id: p_tMr34CzpVkibnHR2Pz11ZD
status: active
merged_into: null
display_name: 王宗漢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mauMKKonApEnaDed8dkK8A
        subject_person_id: p_tMr34CzpVkibnHR2Pz11ZD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗漢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pr9Y3YkWmVF15VvSJWDDag
          claim_id: c_mauMKKonApEnaDed8dkK8A
          source_id: s_uULnDECeBKPCjYFkxMqtc5
          stance: supports
          locator: CBDB:278556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278556）
          source: &a1
            id: s_uULnDECeBKPCjYFkxMqtc5
            source_type: api_record
            title: 中国历代人物传记资料库：王宗漢（CBDB 278556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278556&o=json
            external_identifier: CBDB:278556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vSzJY28wHct6bF56CLXsSn
        subject_person_id: p_tMr34CzpVkibnHR2Pz11ZD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗漢，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278556）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gRuCtk43aANyPyJB_PcAMG
          claim_id: c_vSzJY28wHct6bF56CLXsSn
          source_id: s_uULnDECeBKPCjYFkxMqtc5
          stance: supports
          locator: CBDB:278556
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i5Sxpgbk1tqQRuJfz8NOCq
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tMr34CzpVkibnHR2Pz11ZD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nMU99hp_Hmy54YGfJf6Gjk
          claim_id: c_i5Sxpgbk1tqQRuJfz8NOCq
          source_id: s_qyC87AIcLDGvV0R_NOmgLE
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗漢 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗漢 之父／母。
          source:
            id: s_qyC87AIcLDGvV0R_NOmgLE
            source_type: api_record
            title: 中国历代人物传记资料库：王宗漢（CBDB 278556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278556&o=json
            external_identifier: CBDB:278556
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
        id: c_z3In4iLg5SPljNBILEYL-p
        subject_person_id: p_tMr34CzpVkibnHR2Pz11ZD
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
        - id: cs_IEGFepD4TiU2XHEWCNEKgU
          claim_id: c_z3In4iLg5SPljNBILEYL-p
          source_id: s_qyC87AIcLDGvV0R_NOmgLE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qyC87AIcLDGvV0R_NOmgLE
            source_type: api_record
            title: 中国历代人物传记资料库：王宗漢（CBDB 278556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278556&o=json
            external_identifier: CBDB:278556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        status: active
        display_name: 王宗源
        merged_into_person_id: null
---

# 王宗漢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗漢 | accepted |
| bio.summary | 王宗漢，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278556） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NfVYYG7aC993nZohPs46Tb | 王綱 | accepted |
| other | p_tuf6Y9AXWQN6kvcQsy6Eb8 | 王宗源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗漢（CBDB 278556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278556&o=json)
