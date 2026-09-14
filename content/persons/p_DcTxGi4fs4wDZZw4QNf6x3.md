---
schema: wang-person/v1
id: p_DcTxGi4fs4wDZZw4QNf6x3
status: active
merged_into: null
display_name: 王本雚
cbdb_id: 324425
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ShjVca2GnEjDGMe282wTir
        subject_person_id: p_DcTxGi4fs4wDZZw4QNf6x3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本雚，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6juilfs24m2L1y3ImTVXry
          claim_id: c_ShjVca2GnEjDGMe282wTir
          source_id: s_QD7e9gogwKyyH6h8d22xEv
          stance: supports
          locator: CBDB:324425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QD7e9gogwKyyH6h8d22xEv
            source_type: api_record
            title: 中国历代人物传记资料库：王本雚（CBDB 324425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324425&o=json
            external_identifier: CBDB:324425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QNFW5jBsFM9VBYRuYiEe64
        subject_person_id: p_DcTxGi4fs4wDZZw4QNf6x3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本雚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oaA2oPJ8UyBY6XV3zfKbfC
          claim_id: c_QNFW5jBsFM9VBYRuYiEe64
          source_id: s_QD7e9gogwKyyH6h8d22xEv
          stance: supports
          locator: CBDB:324425
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FRv10HwUuZrWny0T_CcXR4
        subject_person_id: p_DcTxGi4fs4wDZZw4QNf6x3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H8f3fQrEFijtF1x1A1zF_b
          claim_id: c_FRv10HwUuZrWny0T_CcXR4
          source_id: s_QD7e9gogwKyyH6h8d22xEv
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QD7e9gogwKyyH6h8d22xEv
            source_type: api_record
            title: 中国历代人物传记资料库：王本雚（CBDB 324425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324425&o=json
            external_identifier: CBDB:324425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_R77qQWn6AaKWcHuNaQWCy2
        status: active
        display_name: 王堂
        merged_into_person_id: null
    - claim:
        id: c_GYHIGMKVh6JwTPzqSSovZI
        subject_person_id: p_DcTxGi4fs4wDZZw4QNf6x3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_49EAHPDGUkxDkUqKkX9KJH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gBRKE8YPxM1OgU7_SAGuhw
          claim_id: c_GYHIGMKVh6JwTPzqSSovZI
          source_id: s_ntd3if8Pv1xSAqJKZQ4mC0
          stance: supports
          locator: CBDB：兄弟 王堂（204814）之父／母 王本雚
          quotation: null
          interpretation_note: 由兄弟关系推断：王問 与 王堂 为同胞（CBDB 记「兄」），王堂 之父／母即 王問 之父／母。
          source:
            id: s_ntd3if8Pv1xSAqJKZQ4mC0
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 324431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324431&o=json
            external_identifier: CBDB:324431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_49EAHPDGUkxDkUqKkX9KJH
        status: active
        display_name: 王問
        merged_into_person_id: null
    - claim:
        id: c_d_TXnhPNINCAUwwGWC-qnp
        subject_person_id: p_DcTxGi4fs4wDZZw4QNf6x3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4eEd6J7sf8PX3EsELNyjJX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FsddATFMl_k4DoNzAjAotk
          claim_id: c_d_TXnhPNINCAUwwGWC-qnp
          source_id: s_DqmaCVn5ebT8fSqqloedzA
          stance: supports
          locator: CBDB：兄弟 王堂（204814）之父／母 王本雚
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉 与 王堂 为同胞（CBDB 记「弟」），王堂 之父／母即 王嘉 之父／母。
          source:
            id: s_DqmaCVn5ebT8fSqqloedzA
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324428&o=json
            external_identifier: CBDB:324428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4eEd6J7sf8PX3EsELNyjJX
        status: active
        display_name: 王嘉
        merged_into_person_id: null
    - claim:
        id: c_iBeflbJopUv3ulXOcd1G7R
        subject_person_id: p_DcTxGi4fs4wDZZw4QNf6x3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZCSBH1ggTRGGXUtKo7xUdv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7aDGPrJ2sB3HoWEfRyzKyf
          claim_id: c_iBeflbJopUv3ulXOcd1G7R
          source_id: s_UoW__hYdSEsOICbIrjgE2i
          stance: supports
          locator: CBDB：兄弟 王堂（204814）之父／母 王本雚
          quotation: null
          interpretation_note: 由兄弟关系推断：王聘 与 王堂 为同胞（CBDB 记「弟」），王堂 之父／母即 王聘 之父／母。
          source:
            id: s_UoW__hYdSEsOICbIrjgE2i
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 324430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324430&o=json
            external_identifier: CBDB:324430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZCSBH1ggTRGGXUtKo7xUdv
        status: active
        display_name: 王聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本雚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本雚，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324425） | accepted |
| name.primary | 王本雚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_R77qQWn6AaKWcHuNaQWCy2 | 王堂 | accepted |
| children | p_49EAHPDGUkxDkUqKkX9KJH | 王問 | accepted |
| children | p_4eEd6J7sf8PX3EsELNyjJX | 王嘉 | accepted |
| children | p_ZCSBH1ggTRGGXUtKo7xUdv | 王聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本雚（CBDB 324425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324425&o=json)
- [中国历代人物传记资料库：王嘉（CBDB 324428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324428&o=json)
- [中国历代人物传记资料库：王聘（CBDB 324430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324430&o=json)
- [中国历代人物传记资料库：王問（CBDB 324431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324431&o=json)
