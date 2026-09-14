---
schema: wang-person/v1
id: p_BMNf3Y1e3GX9M1tCr78uZv
status: active
merged_into: null
display_name: 王臣
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RrjrgDEHJZ9ZzRdouUvCCA
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GWdZe58ztPfgq8oKurbRMB
          claim_id: c_RrjrgDEHJZ9ZzRdouUvCCA
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
          stance: supports
          locator: CBDB:126514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126514）
          source: &a1
            id: s_zmrfFWfwmHqZxrRkgGutK1
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 126514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json
            external_identifier: CBDB:126514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MicJgadekkMDT3doTQEdsf
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1430年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HzjtpmFANHJzpMLvNH1pua
          claim_id: c_MicJgadekkMDT3doTQEdsf
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
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
        id: c_RAWAP3HHyHCq2Dugnb42K1
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mjq7escYgzwc7jwXkbeWRy
          claim_id: c_RAWAP3HHyHCq2Dugnb42K1
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
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
        id: c_iLQNCJhR2DWCqKpCNtTjpJ
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣（1430年—1498年），明人物。明清進士進士，籍贯蒲城，入仕進士。（中国历代人物传记资料库 CBDB 126514）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7drbX7lISIxHaW8V2FWLQa
          claim_id: c_iLQNCJhR2DWCqKpCNtTjpJ
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
          stance: supports
          locator: CBDB:126514
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FXRwuXV2Z73JnrSUvVKvwZ
        subject_person_id: p_L1mTZr3NQ9UFGyoNN92bJE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p6TIv7-rn0xpcykH044ylj
          claim_id: c_FXRwuXV2Z73JnrSUvVKvwZ
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第五十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_L1mTZr3NQ9UFGyoNN92bJE
        status: active
        display_name: 王威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iuKeu7xVyTvqJhyc5PAuD3
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iBR4fXfrnoJYCCbLYJJDNk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7kykSPl7JTiryEg17H27F
          claim_id: c_iuKeu7xVyTvqJhyc5PAuD3
          source_id: s_D3BpLiq1xOYY7MQ993NhQS
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第五十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D3BpLiq1xOYY7MQ993NhQS
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王臣妻)（CBDB 337199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337199&o=json
            external_identifier: CBDB:337199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iBR4fXfrnoJYCCbLYJJDNk
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_4RAeiXpC7J4fc0u83u0TZ0
        subject_person_id: p_6E2W1NKHyeLPCWmDUE7yC4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M8B4vkNyLs3Pnfx4RQY3hG
          claim_id: c_4RAeiXpC7J4fc0u83u0TZ0
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第五十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6E2W1NKHyeLPCWmDUE7yC4
        status: active
        display_name: 王甫禮
        merged_into_person_id: null
    - claim:
        id: c_yI5rB_JVQUSpSECVOItafL
        subject_person_id: p_zNuBaBWZsMU4TAdk23ekxC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OsQWaETE72cKaXz_vQY6oC
          claim_id: c_yI5rB_JVQUSpSECVOItafL
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第五十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zNuBaBWZsMU4TAdk23ekxC
        status: active
        display_name: 王仲肅
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_6PUaySAOcIoZqkAhr9FvLj
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GqsmKMNTn1jVdDtxhMkkuz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4lw_qkDqwQb6Yz1dP_D8ZC
          claim_id: c_6PUaySAOcIoZqkAhr9FvLj
          source_id: s_8Y3uiVZeklcOovuRL9JNeP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126514 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8Y3uiVZeklcOovuRL9JNeP
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 337222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337222&o=json
            external_identifier: CBDB:337222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GqsmKMNTn1jVdDtxhMkkuz
        status: active
        display_name: 王志
        merged_into_person_id: null
    - claim:
        id: c_kSJrl4MZXcOD8TAPH0rjDw
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NHJKz3mSnRKkPm7sc9fmFE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c4k08lExULsiaBFfmU9UP9
          claim_id: c_kSJrl4MZXcOD8TAPH0rjDw
          source_id: s_g6JvpgqelkchXzbH2edng_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126514 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g6JvpgqelkchXzbH2edng_
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 337233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337233&o=json
            external_identifier: CBDB:337233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NHJKz3mSnRKkPm7sc9fmFE
        status: active
        display_name: 王玘
        merged_into_person_id: null
    - claim:
        id: c_vuurto809qfJYGJUhdAU_i
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jDiMTw4ntEuL4kwaSVMF9X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mbuYmOCC7ml_AHGLaH-kCt
          claim_id: c_vuurto809qfJYGJUhdAU_i
          source_id: s_A8oz3fiFSDgm8FJ0G6xs2u
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126514 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A8oz3fiFSDgm8FJ0G6xs2u
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 337210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337210&o=json
            external_identifier: CBDB:337210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jDiMTw4ntEuL4kwaSVMF9X
        status: active
        display_name: 王昱
        merged_into_person_id: null
---

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| birth.date | 1430年 | accepted |
| death.date | 1498年 | accepted |
| bio.summary | 王臣（1430年—1498年），明人物。明清進士進士，籍贯蒲城，入仕進士。（中国历代人物传记资料库 CBDB 126514） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L1mTZr3NQ9UFGyoNN92bJE | 王威 | accepted |
| spouses | p_iBR4fXfrnoJYCCbLYJJDNk | 孫氏 | accepted |
| ancestors | p_6E2W1NKHyeLPCWmDUE7yC4 | 王甫禮 | accepted |
| ancestors | p_zNuBaBWZsMU4TAdk23ekxC | 王仲肅 | accepted |
| other | p_GqsmKMNTn1jVdDtxhMkkuz | 王志 | accepted |
| other | p_NHJKz3mSnRKkPm7sc9fmFE | 王玘 | accepted |
| other | p_jDiMTw4ntEuL4kwaSVMF9X | 王昱 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王臣妻)（CBDB 337199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337199&o=json)
- [中国历代人物传记资料库：王臣（CBDB 126514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json)
- [中国历代人物传记资料库：王玘（CBDB 337233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337233&o=json)
- [中国历代人物传记资料库：王昱（CBDB 337210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337210&o=json)
- [中国历代人物传记资料库：王志（CBDB 337222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337222&o=json)
