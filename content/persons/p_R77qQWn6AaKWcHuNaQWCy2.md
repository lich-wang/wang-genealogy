---
schema: wang-person/v1
id: p_R77qQWn6AaKWcHuNaQWCy2
status: active
merged_into: null
display_name: 王堂
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1LQ2cNeKe2NvXTVBZjTBw1
        subject_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q7Ngpy256KNRowHQBvSqQV
          claim_id: c_1LQ2cNeKe2NvXTVBZjTBw1
          source_id: s_qegrNY11n7cxSM5ZGsYzeb
          stance: supports
          locator: CBDB:204814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204814）
          source: &a1
            id: s_qegrNY11n7cxSM5ZGsYzeb
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 204814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204814&o=json
            external_identifier: CBDB:204814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_znCN2AzeYPhF6PSb3xGRpH
        subject_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DkjT3a1mcDKEodTMBQb1WM
          claim_id: c_znCN2AzeYPhF6PSb3xGRpH
          source_id: s_qegrNY11n7cxSM5ZGsYzeb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aHu61oXWDhwPqAbtbEEAuc
        subject_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂（生于1532年），明人物。明清進士進士，籍贯涪州，入仕進士。（中国历代人物传记资料库 CBDB 204814）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_35514XYueQpc9qzUruz-lk
          claim_id: c_aHu61oXWDhwPqAbtbEEAuc
          source_id: s_qegrNY11n7cxSM5ZGsYzeb
          stance: supports
          locator: CBDB:204814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_DcTxGi4fs4wDZZw4QNf6x3
        status: active
        display_name: 王本雚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Jl32I7halky5tKIXe6lE6C
        subject_person_id: p_Bra3wsJ6ysE9pnbB2keq5x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L6S0TiC4vewMpbwHkW7Kbk
          claim_id: c_Jl32I7halky5tKIXe6lE6C
          source_id: s_7zjAZA6esVuiH8g63UQBEF
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7zjAZA6esVuiH8g63UQBEF
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 324424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324424&o=json
            external_identifier: CBDB:324424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bra3wsJ6ysE9pnbB2keq5x
        status: active
        display_name: 王定
        merged_into_person_id: null
    - claim:
        id: c_mUj0T_Q1V3PWHhzl5tmFbA
        subject_person_id: p_3GVtF1CSJpGQWYhKPXwVwq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XuvysvYkUhqWTxc7urBi7f
          claim_id: c_mUj0T_Q1V3PWHhzl5tmFbA
          source_id: s_9DgadnGe4fWWaVrMdLBY8X
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9DgadnGe4fWWaVrMdLBY8X
            source_type: api_record
            title: 中国历代人物传记资料库：王思鑑（CBDB 324423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324423&o=json
            external_identifier: CBDB:324423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3GVtF1CSJpGQWYhKPXwVwq
        status: active
        display_name: 王思鑑
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ZRtrVwj0c6FJ8R5i_EQ3KW
        subject_person_id: p_49EAHPDGUkxDkUqKkX9KJH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B7cji8DEpUUvd6WE5LtpT6
          claim_id: c_ZRtrVwj0c6FJ8R5i_EQ3KW
          source_id: s_ntd3if8Pv1xSAqJKZQ4mC0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204814 王堂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Nwt4hou9m6dI-Ho8wYtSQI
        subject_person_id: p_4eEd6J7sf8PX3EsELNyjJX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3BwumdkBL4gc_yQulSxvEG
          claim_id: c_Nwt4hou9m6dI-Ho8wYtSQI
          source_id: s_DqmaCVn5ebT8fSqqloedzA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204814 王堂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_2Yx3pvxaCTvwBc9Hc9G77N
        subject_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZCSBH1ggTRGGXUtKo7xUdv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_liPQsFHi8cH0ebHhk1Mr5L
          claim_id: c_2Yx3pvxaCTvwBc9Hc9G77N
          source_id: s_UoW__hYdSEsOICbIrjgE2i
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204814 王堂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堂 | accepted |
| birth.date | 1532年 | accepted |
| bio.summary | 王堂（生于1532年），明人物。明清進士進士，籍贯涪州，入仕進士。（中国历代人物传记资料库 CBDB 204814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DcTxGi4fs4wDZZw4QNf6x3 | 王本雚 | accepted |
| ancestors | p_Bra3wsJ6ysE9pnbB2keq5x | 王定 | accepted |
| ancestors | p_3GVtF1CSJpGQWYhKPXwVwq | 王思鑑 | accepted |
| other | p_49EAHPDGUkxDkUqKkX9KJH | 王問 | accepted |
| other | p_4eEd6J7sf8PX3EsELNyjJX | 王嘉 | accepted |
| other | p_ZCSBH1ggTRGGXUtKo7xUdv | 王聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本雚（CBDB 324425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324425&o=json)
- [中国历代人物传记资料库：王定（CBDB 324424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324424&o=json)
- [中国历代人物传记资料库：王嘉（CBDB 324428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324428&o=json)
- [中国历代人物传记资料库：王聘（CBDB 324430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324430&o=json)
- [中国历代人物传记资料库：王思鑑（CBDB 324423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324423&o=json)
- [中国历代人物传记资料库：王堂（CBDB 204814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204814&o=json)
- [中国历代人物传记资料库：王問（CBDB 324431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324431&o=json)
