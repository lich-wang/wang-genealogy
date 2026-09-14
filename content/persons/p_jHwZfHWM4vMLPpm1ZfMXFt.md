---
schema: wang-person/v1
id: p_jHwZfHWM4vMLPpm1ZfMXFt
status: active
merged_into: null
display_name: 王彝
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92oGLac3Aq9kp1kdqS6HBw
        subject_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p1VAU3wYMMiHSFCC3eKith
          claim_id: c_92oGLac3Aq9kp1kdqS6HBw
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
          stance: supports
          locator: CBDB:200153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200153）
          source: &a1
            id: s_srAnw7NJCmjSg2UeHn9GXe
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 200153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json
            external_identifier: CBDB:200153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QCA4bhPxF1U84nD7EeasiK
        subject_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1370年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VLvHhqZ5dFd8JWYFYr5J9g
          claim_id: c_QCA4bhPxF1U84nD7EeasiK
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
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
        id: c_ypWrrDaS7Cp8hyJMyMakPH
        subject_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝（生于1370年），明人物。建文二年殿試進士，籍贯懷寧，入仕進士。（中国历代人物传记资料库 CBDB 200153）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XwkEKowNAcddMQIVGD73oN
          claim_id: c_ypWrrDaS7Cp8hyJMyMakPH
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
          stance: supports
          locator: CBDB:200153
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FoS5x0NzEPNBRPz_ltp3Rn
        subject_person_id: p_Y3wRCa6Nb255jiaw4aNbxF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6eJaArFM13Rb6lQRTsLXIV
          claim_id: c_FoS5x0NzEPNBRPz_ltp3Rn
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y3wRCa6Nb255jiaw4aNbxF
        status: active
        display_name: 王仕亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_34VUr4uXaVwuisfPD0h5_p
        subject_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TDtECwxi94xmGArH9Cawfo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bcjw-MC4ypKgq6vCVIuXhP
          claim_id: c_34VUr4uXaVwuisfPD0h5_p
          source_id: s_sF2O6Oe6O3tlgVgiIXjTd1
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sF2O6Oe6O3tlgVgiIXjTd1
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王彝妻)（CBDB 254340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254340&o=json
            external_identifier: CBDB:254340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TDtECwxi94xmGArH9Cawfo
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_OsqttvLGCmHlIQ03XVkiBE
        subject_person_id: p_EW8EydaZ8wxDcvfR19G4ZY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a1kot01P2W6A7tj_1sn97L
          claim_id: c_OsqttvLGCmHlIQ03XVkiBE
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EW8EydaZ8wxDcvfR19G4ZY
        status: active
        display_name: 王均稅
        merged_into_person_id: null
    - claim:
        id: c_E1Q-7jDg7hbEP3B5D7SdfI
        subject_person_id: p_EgkZNq9umBed7X2HqoE1NN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xEHMb-ThceGC9gcvRiGIXF
          claim_id: c_E1Q-7jDg7hbEP3B5D7SdfI
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EgkZNq9umBed7X2HqoE1NN
        status: active
        display_name: 王谷英
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_2H7YT95h7PlsJhXqTPD_fM
        subject_person_id: p_88aW4qqVfVPkCBokMNdnzW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gWiQx8C-fuQqICIl_9ECdw
          claim_id: c_2H7YT95h7PlsJhXqTPD_fM
          source_id: s_6TOxj2xkxtfMuqORvJYcP7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200153 王彝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6TOxj2xkxtfMuqORvJYcP7
            source_type: api_record
            title: 中国历代人物传记资料库：王叔（CBDB 254341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254341&o=json
            external_identifier: CBDB:254341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_88aW4qqVfVPkCBokMNdnzW
        status: active
        display_name: 王叔
        merged_into_person_id: null
    - claim:
        id: c_FO-O91SAprn31BTNSaJHja
        subject_person_id: p_cKDD8AK9koSSMPZF8PPASp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XlaM665Hz2NKLZbzOoKWJs
          claim_id: c_FO-O91SAprn31BTNSaJHja
          source_id: s_KRH654eUgQQraTyA6AXLU0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200153 王彝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KRH654eUgQQraTyA6AXLU0
            source_type: api_record
            title: 中国历代人物传记资料库：王性（CBDB 254342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254342&o=json
            external_identifier: CBDB:254342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cKDD8AK9koSSMPZF8PPASp
        status: active
        display_name: 王性
        merged_into_person_id: null
---

# 王彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝 | accepted |
| birth.date | 1370年 | accepted |
| bio.summary | 王彝（生于1370年），明人物。建文二年殿試進士，籍贯懷寧，入仕進士。（中国历代人物传记资料库 CBDB 200153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y3wRCa6Nb255jiaw4aNbxF | 王仕亨 | accepted |
| spouses | p_TDtECwxi94xmGArH9Cawfo | 周氏 | accepted |
| ancestors | p_EW8EydaZ8wxDcvfR19G4ZY | 王均稅 | accepted |
| ancestors | p_EgkZNq9umBed7X2HqoE1NN | 王谷英 | accepted |
| other | p_88aW4qqVfVPkCBokMNdnzW | 王叔 | accepted |
| other | p_cKDD8AK9koSSMPZF8PPASp | 王性 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔（CBDB 254341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254341&o=json)
- [中国历代人物传记资料库：王性（CBDB 254342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254342&o=json)
- [中国历代人物传记资料库：王彝（CBDB 200153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json)
- [中国历代人物传记资料库：周氏(王彝妻)（CBDB 254340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254340&o=json)
