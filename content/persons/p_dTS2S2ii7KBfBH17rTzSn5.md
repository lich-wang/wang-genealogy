---
schema: wang-person/v1
id: p_dTS2S2ii7KBfBH17rTzSn5
status: active
merged_into: null
display_name: 施氏
revision: 5
cbdb_id: 38174
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7elK_AYvoaRRAgywSdDsrP
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 施氏，宋人物。曾任郡夫人、郡君。（中国历代人物传记资料库 CBDB 38174）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OMFggIHom_dNt5kIUgrr5N
          claim_id: c_7elK_AYvoaRRAgywSdDsrP
          source_id: s_Uu2MYz2wbOw9gA6lew7GED
          stance: supports
          locator: CBDB:38174
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Uu2MYz2wbOw9gA6lew7GED
            source_type: api_record
            title: 中国历代人物传记资料库：施氏(王中正妻)（CBDB 38174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38174&o=json
            external_identifier: CBDB:38174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YiqC09Z8vZo3pPTngSRMC-
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 施氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z9JlibNKe6SJcqxQ8a-8mh
          claim_id: c_YiqC09Z8vZo3pPTngSRMC-
          source_id: s_Uu2MYz2wbOw9gA6lew7GED
          stance: supports
          locator: CBDB:38174
          quotation: null
          interpretation_note: CBDB 明确记录的王中正配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6Q85OfBeYodhdWVLfP-3Du
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_7jUC2qyUN1zDpTdMY9WiAE
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QPZcyxoxNhhX37tO7yuqp2
          claim_id: c_6Q85OfBeYodhdWVLfP-3Du
          source_id: s_ctpln9mpaA1SvhALdJCVsT
          stance: supports
          locator: CBDB 亲属：母（KinPerson 38174）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_ctpln9mpaA1SvhALdJCVsT
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 26365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26365&o=json
            external_identifier: CBDB:26365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7jUC2qyUN1zDpTdMY9WiAE
        status: active
        display_name: 王世昌
        merged_into_person_id: null
    - claim:
        id: c_Oj1NhgipkxbPNTnlGHEmIN
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_AeiQ3yBXkr3BsfCWA8QdWQ
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tblr1-1NSx5-hNcM9XUGTV
          claim_id: c_Oj1NhgipkxbPNTnlGHEmIN
          source_id: s_kwsEQaXzPK3rm007QYfSdE
          stance: supports
          locator: CBDB 亲属：母（KinPerson 38174）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kwsEQaXzPK3rm007QYfSdE
            source_type: api_record
            title: 中国历代人物传记资料库：王世長（CBDB 37408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37408&o=json
            external_identifier: CBDB:37408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AeiQ3yBXkr3BsfCWA8QdWQ
        status: active
        display_name: 王世長
        merged_into_person_id: null
    - claim:
        id: c_xuFvZVTWFR7RWpa7VgKa6w
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_VdvBjKWLHAJK5DbrysUDnY
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NQ8TFKGUKlRaGItugnyNlN
          claim_id: c_xuFvZVTWFR7RWpa7VgKa6w
          source_id: s_YihA0nqp3IKwp1IHrRokCp
          stance: supports
          locator: CBDB 亲属：母（KinPerson 38174）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_YihA0nqp3IKwp1IHrRokCp
            source_type: api_record
            title: 中国历代人物传记资料库：王世融（CBDB 37409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37409&o=json
            external_identifier: CBDB:37409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VdvBjKWLHAJK5DbrysUDnY
        status: active
        display_name: 王世融
        merged_into_person_id: null
    - claim:
        id: c_PdA_7P3v1aHzBRYz3zA84c
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_x1ifADeGmWkPgij2WApXDK
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_STrZ3czeAeEZm5yJykVhtX
          claim_id: c_PdA_7P3v1aHzBRYz3zA84c
          source_id: s_SxGyszVUVmeejyRIAD5egQ
          stance: supports
          locator: CBDB 亲属：母（KinPerson 38174）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_SxGyszVUVmeejyRIAD5egQ
            source_type: api_record
            title: 中国历代人物传记资料库：王世寧（CBDB 37407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37407&o=json
            external_identifier: CBDB:37407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x1ifADeGmWkPgij2WApXDK
        status: active
        display_name: 王世寧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TXoLCfN1STEBObOCUmyjJE
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kp-K4Xp6BnJ_4HqjQtN_Sy
          claim_id: c_TXoLCfN1STEBObOCUmyjJE
          source_id: s_Uu2MYz2wbOw9gA6lew7GED
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1441;1442：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HmkBbL3A8MpbWct9UhADAQ
        status: active
        display_name: 王中正
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 施氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 施氏，宋人物。曾任郡夫人、郡君。（中国历代人物传记资料库 CBDB 38174） | accepted |
| name.primary | 施氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7jUC2qyUN1zDpTdMY9WiAE | 王世昌 | accepted |
| children | p_AeiQ3yBXkr3BsfCWA8QdWQ | 王世長 | accepted |
| children | p_VdvBjKWLHAJK5DbrysUDnY | 王世融 | accepted |
| children | p_x1ifADeGmWkPgij2WApXDK | 王世寧 | accepted |
| spouses | p_HmkBbL3A8MpbWct9UhADAQ | 王中正 | accepted |

## 外部来源

- [中国历代人物传记资料库：施氏(王中正妻)（CBDB 38174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38174&o=json)
- [中国历代人物传记资料库：王世昌（CBDB 26365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26365&o=json)
- [中国历代人物传记资料库：王世寧（CBDB 37407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37407&o=json)
- [中国历代人物传记资料库：王世融（CBDB 37409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37409&o=json)
- [中国历代人物传记资料库：王世長（CBDB 37408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37408&o=json)
