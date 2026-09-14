---
schema: wang-person/v1
id: p_oYShNGR9e2YVy71LdVhQbQ
status: active
merged_into: null
display_name: 王一鳴
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vknrmGxd378yNs9GmLo2X5
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BGkVTjip4Fz1W8HFpR9TdB
          claim_id: c_vknrmGxd378yNs9GmLo2X5
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: CBDB:207264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207264）
          source: &a1
            id: s_Mrpj37C8DH4qVHGNGQntYM
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳴（CBDB 207264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json
            external_identifier: CBDB:207264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dL8HSJiFE7W7GFd8B7u7zx
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1564年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DNB68Ldr8VUeH7p7yqX2mt
          claim_id: c_dL8HSJiFE7W7GFd8B7u7zx
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
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
        id: c_xVu5FWybY5cNgNAXGQzBWq
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳴（生于1564年），明人物。明清進士進士，籍贯黃岡，入仕進士，曾任知縣、都察院觀政。（中国历代人物传记资料库 CBDB 207264）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DdSMN7bT6sYO9XYDyWhAhk
          claim_id: c_xVu5FWybY5cNgNAXGQzBWq
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: CBDB:207264
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2RQpD2Tmm3hXbsZSrro3sa
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uosHinJhLsUHLFRAnDYOwe
          claim_id: c_2RQpD2Tmm3hXbsZSrro3sa
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1NFpKAdMuHUnaxbGrqKLeD
        status: active
        display_name: 王追美
        merged_into_person_id: null
  children:
    - claim:
        id: c_uZbjx4T-qVL-ATx6Fdm7zI
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s1G8THmnnjEDHat96956Pe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-OkdlXF-zAs9PYrNJx2lsS
          claim_id: c_uZbjx4T-qVL-ATx6Fdm7zI
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第七十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s1G8THmnnjEDHat96956Pe
        status: active
        display_name: 王封東
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_dePtiQqWVXIw2Qt7lTXUTs
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WZzCD5VuiJqS4L6W4rg7D6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RFbBl8FTEvqV40K5VfrocR
          claim_id: c_dePtiQqWVXIw2Qt7lTXUTs
          source_id: s_qU1gW4p37XZ7ZDeVxd1xET
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qU1gW4p37XZ7ZDeVxd1xET
            source_type: api_record
            title: 中国历代人物传记资料库：易氏(王一鳴妻)（CBDB 230475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230475&o=json
            external_identifier: CBDB:230475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WZzCD5VuiJqS4L6W4rg7D6
        status: active
        display_name: 易氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c__O9ZF9-xKbQEVo6VuKC5gs
        subject_person_id: p_sJoGCz3fLX1phN4S3RncbL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JG0CK5LoEPDhcOLuvDl4vo
          claim_id: c__O9ZF9-xKbQEVo6VuKC5gs
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sJoGCz3fLX1phN4S3RncbL
        status: active
        display_name: 王廷儒
        merged_into_person_id: null
    - claim:
        id: c_t-8aQjzQ9qSwO3e4KZq57v
        subject_person_id: p_T5goNvoNQpEkcLRFNrHQMZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2cmodu3518kBrCfqEVsayw
          claim_id: c_t-8aQjzQ9qSwO3e4KZq57v
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T5goNvoNQpEkcLRFNrHQMZ
        status: active
        display_name: 王同京
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Zdqn2A7O7DXQQgbN8swIdr
        subject_person_id: p_NpUjCMnr3vateBNa88RNFa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FN1W9byuQc1UR_HUNBhLkb
          claim_id: c_Zdqn2A7O7DXQQgbN8swIdr
          source_id: s_JeOnMNb5PQGzLiByVkecNT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207264 王一鳴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JeOnMNb5PQGzLiByVkecNT
            source_type: api_record
            title: 中国历代人物传记资料库：王一寧（CBDB 230481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230481&o=json
            external_identifier: CBDB:230481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NpUjCMnr3vateBNa88RNFa
        status: active
        display_name: 王一寧
        merged_into_person_id: null
    - claim:
        id: c_lHcn9d6AOl5_BO3Oojgjif
        subject_person_id: p_gEnZLZ59BdARRR4HvdHJTz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wl4Cwj_0-JcNNqRGURiAgM
          claim_id: c_lHcn9d6AOl5_BO3Oojgjif
          source_id: s_vXbpI9H6FXuBumAJMshn6a
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207264 王一鳴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vXbpI9H6FXuBumAJMshn6a
            source_type: api_record
            title: 中国历代人物传记资料库：王一文（CBDB 230480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230480&o=json
            external_identifier: CBDB:230480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gEnZLZ59BdARRR4HvdHJTz
        status: active
        display_name: 王一文
        merged_into_person_id: null
    - claim:
        id: c_h0a9GCefudrCe3rYYfMVQ8
        subject_person_id: p_gL95C6iSo5JiMEeXTZCE27
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JoYe56XoFscSqJvwbaT143
          claim_id: c_h0a9GCefudrCe3rYYfMVQ8
          source_id: s_zU-1x65syOK_hNwFT8b4SU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207264 王一鳴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zU-1x65syOK_hNwFT8b4SU
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 230478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json
            external_identifier: CBDB:230478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gL95C6iSo5JiMEeXTZCE27
        status: active
        display_name: 王一奇
        merged_into_person_id: null
    - claim:
        id: c_ZKp9_2ygNLvA2Ot4zfOGnI
        subject_person_id: p_k1orWwRhbBXEJcpco7J2As
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8HkRhHpk12vHDPIGY5p8PF
          claim_id: c_ZKp9_2ygNLvA2Ot4zfOGnI
          source_id: s_EZMHWVp35NNdMNkz0u1C-_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207264 王一鳴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EZMHWVp35NNdMNkz0u1C-_
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 230479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230479&o=json
            external_identifier: CBDB:230479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k1orWwRhbBXEJcpco7J2As
        status: active
        display_name: 王一治
        merged_into_person_id: null
    - claim:
        id: c_k4thWepOo8QDE2XjmZdMwk
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yfv4AKPLpmPbw2Ga9k5Jfg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_juY0yD4Ftw84fz1XgzwJTf
          claim_id: c_k4thWepOo8QDE2XjmZdMwk
          source_id: s_yMTF0VhDJPNBFaQEJqqKSq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207264 王一鳴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yMTF0VhDJPNBFaQEJqqKSq
            source_type: api_record
            title: 中国历代人物传记资料库：王一中（CBDB 230477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230477&o=json
            external_identifier: CBDB:230477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yfv4AKPLpmPbw2Ga9k5Jfg
        status: active
        display_name: 王一中
        merged_into_person_id: null
---

# 王一鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鳴 | accepted |
| birth.date | 1564年 | accepted |
| bio.summary | 王一鳴（生于1564年），明人物。明清進士進士，籍贯黃岡，入仕進士，曾任知縣、都察院觀政。（中国历代人物传记资料库 CBDB 207264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1NFpKAdMuHUnaxbGrqKLeD | 王追美 | accepted |
| children | p_s1G8THmnnjEDHat96956Pe | 王封東 | accepted |
| spouses | p_WZzCD5VuiJqS4L6W4rg7D6 | 易氏 | accepted |
| ancestors | p_sJoGCz3fLX1phN4S3RncbL | 王廷儒 | accepted |
| ancestors | p_T5goNvoNQpEkcLRFNrHQMZ | 王同京 | accepted |
| other | p_NpUjCMnr3vateBNa88RNFa | 王一寧 | accepted |
| other | p_gEnZLZ59BdARRR4HvdHJTz | 王一文 | accepted |
| other | p_gL95C6iSo5JiMEeXTZCE27 | 王一奇 | accepted |
| other | p_k1orWwRhbBXEJcpco7J2As | 王一治 | accepted |
| other | p_yfv4AKPLpmPbw2Ga9k5Jfg | 王一中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一鳴（CBDB 207264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json)
- [中国历代人物传记资料库：王一寧（CBDB 230481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230481&o=json)
- [中国历代人物传记资料库：王一奇（CBDB 230478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json)
- [中国历代人物传记资料库：王一文（CBDB 230480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230480&o=json)
- [中国历代人物传记资料库：王一治（CBDB 230479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230479&o=json)
- [中国历代人物传记资料库：王一中（CBDB 230477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230477&o=json)
- [中国历代人物传记资料库：易氏(王一鳴妻)（CBDB 230475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230475&o=json)
