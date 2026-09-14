---
schema: wang-person/v1
id: p_kvFwT4sa4wGvdykoDxnfP9
status: active
merged_into: null
display_name: 王櫕
cbdb_id: 294444
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AABb7FGSPzLLMmekLA5Aet
        subject_person_id: p_kvFwT4sa4wGvdykoDxnfP9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫕，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fpW-zvZ0q_3USLLR55cywl
          claim_id: c_AABb7FGSPzLLMmekLA5Aet
          source_id: s_g1C4XLbHVNQvF92XE3aR9K
          stance: supports
          locator: CBDB:294444
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g1C4XLbHVNQvF92XE3aR9K
            source_type: api_record
            title: 中国历代人物传记资料库：王櫕（CBDB 294444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294444&o=json
            external_identifier: CBDB:294444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_teJv1eKTDrQrHBAGwkQgka
        subject_person_id: p_kvFwT4sa4wGvdykoDxnfP9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_92dNLaWvzAYfNFEkS7rAxb
          claim_id: c_teJv1eKTDrQrHBAGwkQgka
          source_id: s_g1C4XLbHVNQvF92XE3aR9K
          stance: supports
          locator: CBDB:294444
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RMmZrJGDy-_kXytu27r-Sp
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kvFwT4sa4wGvdykoDxnfP9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uaW1NIeC0L-0-fWiDi7Pxp
          claim_id: c_RMmZrJGDy-_kXytu27r-Sp
          source_id: s_f1FfXpes1afQmKPy7eQv0O
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王櫕 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王櫕 之父／母。
          source:
            id: s_f1FfXpes1afQmKPy7eQv0O
            source_type: api_record
            title: 中国历代人物传记资料库：王櫕（CBDB 294444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294444&o=json
            external_identifier: CBDB:294444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ymQLsviGVnJad7qLTZDHb4
        status: active
        display_name: 王渙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KHjwqvoTRAuhHqmcxs5ofS
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kvFwT4sa4wGvdykoDxnfP9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bE4akgqA3Fxd5mxJcjiiyy
          claim_id: c_KHjwqvoTRAuhHqmcxs5ofS
          source_id: s_f1FfXpes1afQmKPy7eQv0O
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f1FfXpes1afQmKPy7eQv0O
            source_type: api_record
            title: 中国历代人物传记资料库：王櫕（CBDB 294444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294444&o=json
            external_identifier: CBDB:294444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdovnQSDHPgtdb6L5QzgtZ
        status: active
        display_name: 王梴
        merged_into_person_id: null
---

# 王櫕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王櫕，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294444） | accepted |
| name.primary | 王櫕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymQLsviGVnJad7qLTZDHb4 | 王渙 | accepted |
| other | p_TdovnQSDHPgtdb6L5QzgtZ | 王梴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王櫕（CBDB 294444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294444&o=json)
