---
schema: wang-person/v1
id: p_ioHAG7Z7qtpA8w57akPMuF
status: active
merged_into: null
display_name: 王弘舒
cbdb_id: 241183
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fPSC8pyaEM543mZQXAikDv
        subject_person_id: p_ioHAG7Z7qtpA8w57akPMuF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘舒，明人物。正統十三年進士，籍贯南靖。（中国历代人物传记资料库 CBDB 241183）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-VyVAMqosdD9VCorAqrSAg
          claim_id: c_fPSC8pyaEM543mZQXAikDv
          source_id: s_uBe1bJsRBdv8xMDhaPEkNP
          stance: supports
          locator: CBDB:241183
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uBe1bJsRBdv8xMDhaPEkNP
            source_type: api_record
            title: 中国历代人物传记资料库：王弘舒（CBDB 241183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241183&o=json
            external_identifier: CBDB:241183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iAUbR5jQTpu2sGVejRUV1v
        subject_person_id: p_ioHAG7Z7qtpA8w57akPMuF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘舒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_74eURoc2VGBEcDDqyApBg2
          claim_id: c_iAUbR5jQTpu2sGVejRUV1v
          source_id: s_uBe1bJsRBdv8xMDhaPEkNP
          stance: supports
          locator: CBDB:241183
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wSygNcmCCMQ939g6I3rHMS
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ioHAG7Z7qtpA8w57akPMuF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y_DmQD_PdoeaoHHJUu5dgQ
          claim_id: c_wSygNcmCCMQ939g6I3rHMS
          source_id: s_JIzWifrDvBelHaKQXM1v5d
          stance: supports
          locator: CBDB：兄弟 王玭（208155）之父／母 王興弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘舒 与 王玭 为同胞（CBDB 记「兄」），王玭 之父／母即 王弘舒 之父／母。
          source:
            id: s_JIzWifrDvBelHaKQXM1v5d
            source_type: api_record
            title: 中国历代人物传记资料库：王弘舒（CBDB 241183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241183&o=json
            external_identifier: CBDB:241183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6Tbz6rZoK81ZB5BwdE41k7
        status: active
        display_name: 王興弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qID0RV6_VDjxrOWfdvdP8K
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ioHAG7Z7qtpA8w57akPMuF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kZnyWScW8ujqdU_Gpq1nmM
          claim_id: c_qID0RV6_VDjxrOWfdvdP8K
          source_id: s_JIzWifrDvBelHaKQXM1v5d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208155 王玭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JIzWifrDvBelHaKQXM1v5d
            source_type: api_record
            title: 中国历代人物传记资料库：王弘舒（CBDB 241183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241183&o=json
            external_identifier: CBDB:241183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GZ9FC3xVw4crRVvp7UDQTX
        status: active
        display_name: 王玭
        merged_into_person_id: null
---

# 王弘舒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘舒，明人物。正統十三年進士，籍贯南靖。（中国历代人物传记资料库 CBDB 241183） | accepted |
| name.primary | 王弘舒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6Tbz6rZoK81ZB5BwdE41k7 | 王興弼 | accepted |
| other | p_GZ9FC3xVw4crRVvp7UDQTX | 王玭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘舒（CBDB 241183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241183&o=json)
