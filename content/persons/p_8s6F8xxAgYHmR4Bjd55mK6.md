---
schema: wang-person/v1
id: p_8s6F8xxAgYHmR4Bjd55mK6
status: active
merged_into: null
display_name: 王汝謙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PUZkbeotzrz5c829PPNFbC
        subject_person_id: p_8s6F8xxAgYHmR4Bjd55mK6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qyrj4q1GT8g3Q3sLESHqS7
          claim_id: c_PUZkbeotzrz5c829PPNFbC
          source_id: s_SeNbXE1jnGKd8T2jzDDyUT
          stance: supports
          locator: CBDB:209902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209902）
          source: &a1
            id: s_SeNbXE1jnGKd8T2jzDDyUT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謙（CBDB 209902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209902&o=json
            external_identifier: CBDB:209902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9kCPsuPryZmY5Jwp3D9HNP
        subject_person_id: p_8s6F8xxAgYHmR4Bjd55mK6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝謙，明人物。隆慶五年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 209902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7WxlOKcOClTF9O1zqiTBh_
          claim_id: c_9kCPsuPryZmY5Jwp3D9HNP
          source_id: s_SeNbXE1jnGKd8T2jzDDyUT
          stance: supports
          locator: CBDB:209902
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0bpz_on55WawQ2gd_IVNcG
        subject_person_id: p_K6Mg8CNu81j224iHAUiEPB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8s6F8xxAgYHmR4Bjd55mK6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KNb_lrEA9FlLmUHOjoggvr
          claim_id: c_0bpz_on55WawQ2gd_IVNcG
          source_id: s_xv4nmh5Evjs_TtLTvWcN1b
          stance: supports
          locator: CBDB：兄弟 王汝訓（126501）之父／母 王藩
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝謙 与 王汝訓 为同胞（CBDB 记「弟」），王汝訓 之父／母即 王汝謙 之父／母。
          source:
            id: s_xv4nmh5Evjs_TtLTvWcN1b
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謙（CBDB 209902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209902&o=json
            external_identifier: CBDB:209902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K6Mg8CNu81j224iHAUiEPB
        status: active
        display_name: 王藩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UbVnNVV6-LaNZtoBpjX3hj
        subject_person_id: p_8s6F8xxAgYHmR4Bjd55mK6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cakXozT1Ed1TLgH5Avqt9N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZL2rN7gi1VJXPiRLsajIUr
          claim_id: c_UbVnNVV6-LaNZtoBpjX3hj
          source_id: s_xv4nmh5Evjs_TtLTvWcN1b
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126501 王汝訓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xv4nmh5Evjs_TtLTvWcN1b
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謙（CBDB 209902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209902&o=json
            external_identifier: CBDB:209902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cakXozT1Ed1TLgH5Avqt9N
        status: active
        display_name: 王汝訓
        merged_into_person_id: null
---

# 王汝謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝謙 | accepted |
| bio.summary | 王汝謙，明人物。隆慶五年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 209902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K6Mg8CNu81j224iHAUiEPB | 王藩 | accepted |
| other | p_cakXozT1Ed1TLgH5Avqt9N | 王汝訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝謙（CBDB 209902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209902&o=json)
