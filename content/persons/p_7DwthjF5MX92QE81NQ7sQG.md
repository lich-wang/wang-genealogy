---
schema: wang-person/v1
id: p_7DwthjF5MX92QE81NQ7sQG
status: active
merged_into: null
display_name: 王安宗
cbdb_id: 234990
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KBSGdRngRuSMV7UiHPsVEp
        subject_person_id: p_7DwthjF5MX92QE81NQ7sQG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安宗，明人物。籍贯廣州後衛，曾任都指揮事。（中国历代人物传记资料库 CBDB 234990）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lWv_48IzafUKwSPBmsfNNU
          claim_id: c_KBSGdRngRuSMV7UiHPsVEp
          source_id: s_52epCQdhsQ2d2Ai1cTdCRP
          stance: supports
          locator: CBDB:234990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_52epCQdhsQ2d2Ai1cTdCRP
            source_type: api_record
            title: 中国历代人物传记资料库：王安宗（CBDB 234990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234990&o=json
            external_identifier: CBDB:234990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hshFLzrGLfVEwcXnvm9jwo
        subject_person_id: p_7DwthjF5MX92QE81NQ7sQG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vkQFruimfEPjaqSvMNra23
          claim_id: c_hshFLzrGLfVEwcXnvm9jwo
          source_id: s_52epCQdhsQ2d2Ai1cTdCRP
          stance: supports
          locator: CBDB:234990
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S5nsRRJ_bTHWUvn_eN4ywI
        subject_person_id: p_VDcSxdbjB5JPLzERpmYvFU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7DwthjF5MX92QE81NQ7sQG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UIScF-qm5xIsnRfph7_u5F
          claim_id: c_S5nsRRJ_bTHWUvn_eN4ywI
          source_id: s_UFrad3Hro0TLa_SHWgRGZi
          stance: supports
          locator: CBDB：兄弟 王安舜（207738）之父／母 王泝
          quotation: null
          interpretation_note: 由兄弟关系推断：王安宗 与 王安舜 为同胞（CBDB 记「弟」），王安舜 之父／母即 王安宗 之父／母。
          source:
            id: s_UFrad3Hro0TLa_SHWgRGZi
            source_type: api_record
            title: 中国历代人物传记资料库：王安宗（CBDB 234990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234990&o=json
            external_identifier: CBDB:234990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VDcSxdbjB5JPLzERpmYvFU
        status: active
        display_name: 王泝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wCUZYuvsbj79B2xpSdDqtF
        subject_person_id: p_7DwthjF5MX92QE81NQ7sQG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_etxF8UycP4Urogz61YgdPb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGb09tg2jArA6xeCo6CZ-y
          claim_id: c_wCUZYuvsbj79B2xpSdDqtF
          source_id: s_UFrad3Hro0TLa_SHWgRGZi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207738 王安舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UFrad3Hro0TLa_SHWgRGZi
            source_type: api_record
            title: 中国历代人物传记资料库：王安宗（CBDB 234990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234990&o=json
            external_identifier: CBDB:234990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_etxF8UycP4Urogz61YgdPb
        status: active
        display_name: 王安舜
        merged_into_person_id: null
---

# 王安宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安宗，明人物。籍贯廣州後衛，曾任都指揮事。（中国历代人物传记资料库 CBDB 234990） | accepted |
| name.primary | 王安宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VDcSxdbjB5JPLzERpmYvFU | 王泝 | accepted |
| other | p_etxF8UycP4Urogz61YgdPb | 王安舜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安宗（CBDB 234990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234990&o=json)
