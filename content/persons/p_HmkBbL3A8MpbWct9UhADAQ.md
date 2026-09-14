---
schema: wang-person/v1
id: p_HmkBbL3A8MpbWct9UhADAQ
status: active
merged_into: null
display_name: 王中正
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJkW7RARARBtDKZyj912Q8
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7E4Lz57Zfw7MdmPTNaEoXk
          claim_id: c_oJkW7RARARBtDKZyj912Q8
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
          stance: supports
          locator: CBDB:26364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26364）
          source: &a1
            id: s_XPejiH5UFyBAiuaYYJXnFu
            source_type: api_record
            title: 中国历代人物传记资料库：王中正（CBDB 26364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26364&o=json
            external_identifier: CBDB:26364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Em28C57MmD3JXVU8w2QQPs
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 962年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6SgjXYykEoh53m3SkThGo3
          claim_id: c_Em28C57MmD3JXVU8w2QQPs
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kAZFEKCr7fHRXAYJBEVyFc
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1016年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tTJ4boVhpuQPd7ijZXL8He
          claim_id: c_kAZFEKCr7fHRXAYJBEVyFc
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zj1275fJMuTK4A1KiAHuAJ
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中正（962年—1016年），宋人物。籍贯開封，身份为武將，入仕薦舉 (保任,保舉)，曾任考課院、流內銓（吏部）、龍圖閣待制。（中国历代人物传记资料库 CBDB 26364）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TS-uqh_ARB3EneGK8zQm1f
          claim_id: c_zj1275fJMuTK4A1KiAHuAJ
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
          stance: supports
          locator: CBDB:26364
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8U8NKpU8aEkmDuAG8L15_R
        subject_person_id: p_n6A1BTwey7dDo3Xt5YHJ8t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U0Dh4tbvnW9Y2jKb_8j9iI
          claim_id: c_8U8NKpU8aEkmDuAG8L15_R
          source_id: s_XPejiH5UFyBAiuaYYJXnFu
          stance: supports
          locator: CBDB 双向互证（父 王成 ⇄ 子 王中正）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_n6A1BTwey7dDo3Xt5YHJ8t
        status: active
        display_name: 王成
        merged_into_person_id: null
  children:
    - claim:
        id: c_NMJ8jng8yurOWGnEa4fuZy
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7jUC2qyUN1zDpTdMY9WiAE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o-RFzygjdkASYquDiWkZgl
          claim_id: c_NMJ8jng8yurOWGnEa4fuZy
          source_id: s_ctpln9mpaA1SvhALdJCVsT
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26364）
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
        id: c_gdnfVDZN06hNWGAwnkFw1K
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AeiQ3yBXkr3BsfCWA8QdWQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZETJI4rN5pLx_4ai8DELv9
          claim_id: c_gdnfVDZN06hNWGAwnkFw1K
          source_id: s_kwsEQaXzPK3rm007QYfSdE
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26364）
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
        id: c_Pi_N1gzwcRI7nTf2Kvy6Gx
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VdvBjKWLHAJK5DbrysUDnY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DgRHZNaWRJbIe0nuF-B89u
          claim_id: c_Pi_N1gzwcRI7nTf2Kvy6Gx
          source_id: s_YihA0nqp3IKwp1IHrRokCp
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26364）
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
        id: c_J-D9Fxz8wVrRg_jwMcVQbY
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x1ifADeGmWkPgij2WApXDK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ONYyk56iJVSbhoAZkTFzBP
          claim_id: c_J-D9Fxz8wVrRg_jwMcVQbY
          source_id: s_SxGyszVUVmeejyRIAD5egQ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26364）
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
          source:
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
      object_person:
        id: p_dTS2S2ii7KBfBH17rTzSn5
        status: active
        display_name: 施氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王中正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中正 | accepted |
| birth.date | 962年 | accepted |
| death.date | 1016年 | accepted |
| bio.summary | 王中正（962年—1016年），宋人物。籍贯開封，身份为武將，入仕薦舉 (保任,保舉)，曾任考課院、流內銓（吏部）、龍圖閣待制。（中国历代人物传记资料库 CBDB 26364） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n6A1BTwey7dDo3Xt5YHJ8t | 王成 | accepted |
| children | p_7jUC2qyUN1zDpTdMY9WiAE | 王世昌 | accepted |
| children | p_AeiQ3yBXkr3BsfCWA8QdWQ | 王世長 | accepted |
| children | p_VdvBjKWLHAJK5DbrysUDnY | 王世融 | accepted |
| children | p_x1ifADeGmWkPgij2WApXDK | 王世寧 | accepted |
| spouses | p_dTS2S2ii7KBfBH17rTzSn5 | 施氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：施氏(王中正妻)（CBDB 38174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38174&o=json)
- [中国历代人物传记资料库：王世昌（CBDB 26365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26365&o=json)
- [中国历代人物传记资料库：王世寧（CBDB 37407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37407&o=json)
- [中国历代人物传记资料库：王世融（CBDB 37409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37409&o=json)
- [中国历代人物传记资料库：王世長（CBDB 37408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37408&o=json)
- [中国历代人物传记资料库：王中正（CBDB 26364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26364&o=json)
