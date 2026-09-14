---
schema: wang-person/v1
id: p_xnVNk7Yn6e863HGsnbGHpw
status: active
merged_into: null
display_name: 王相
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VGLWVdx4pzaus1gyg4ggSD
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yaD364VCogQGGvQjAsgDYq
          claim_id: c_VGLWVdx4pzaus1gyg4ggSD
          source_id: s_qNaDCfmQnvJunyf2HgH913
          stance: supports
          locator: CBDB:303176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303176）
          source: &a1
            id: s_qNaDCfmQnvJunyf2HgH913
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 303176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303176&o=json
            external_identifier: CBDB:303176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cN2N2zp8EnUwi3ssE9EjkK
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。嘉靖二十年進士，籍贯澤州，曾任府知事。（中国历代人物传记资料库 CBDB 303176）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iwX4pGdRiHwxzZMK4K1Uus
          claim_id: c_cN2N2zp8EnUwi3ssE9EjkK
          source_id: s_qNaDCfmQnvJunyf2HgH913
          stance: supports
          locator: CBDB:303176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Qx9Sp0Hf81seqfTTxuy0VW
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R66lxO4RIt-IQB_-bv4WTk
          claim_id: c_Qx9Sp0Hf81seqfTTxuy0VW
          source_id: s_qNaDCfmQnvJunyf2HgH913
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U7JNj2nXJh2KN7f9tg3Czd
        status: active
        display_name: 王學柳
        merged_into_person_id: null
    - claim:
        id: c_g-8giiwswV5P2jLMV7OPZZ
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_44KAP5Fb5E2otJ3zj8FAG8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bIFWeqGTYkfQNKfGu3n9xo
          claim_id: c_g-8giiwswV5P2jLMV7OPZZ
          source_id: s_0EDjuPF0MS3aQ_Z-EUJpr6
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學蘇 与 王學柳 为同胞（CBDB 记「兄」），王學柳 之父／母即 王學蘇 之父／母。
          source:
            id: s_0EDjuPF0MS3aQ_Z-EUJpr6
            source_type: api_record
            title: 中国历代人物传记资料库：王學蘇（CBDB 303182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303182&o=json
            external_identifier: CBDB:303182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_44KAP5Fb5E2otJ3zj8FAG8
        status: active
        display_name: 王學蘇
        merged_into_person_id: null
    - claim:
        id: c_4Tj3Yg_KoRmfP4OLeVM_3c
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rfnk7QJ1hjkREGbsjm5ALY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fGTXN-KH0UKP3dzmp-r_xX
          claim_id: c_4Tj3Yg_KoRmfP4OLeVM_3c
          source_id: s_LiX8t7vAudH8QsxSfUnvR6
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學召 与 王學柳 为同胞（CBDB 记「兄」），王學柳 之父／母即 王學召 之父／母。
          source:
            id: s_LiX8t7vAudH8QsxSfUnvR6
            source_type: api_record
            title: 中国历代人物传记资料库：王學召（CBDB 303184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303184&o=json
            external_identifier: CBDB:303184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rfnk7QJ1hjkREGbsjm5ALY
        status: active
        display_name: 王學召
        merged_into_person_id: null
    - claim:
        id: c_jNbywiLhHdXiMSkAANa1ta
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TcEgoCK92NB84dZ85NVqLx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8NVInj-6lNPlpyzLZGJSc
          claim_id: c_jNbywiLhHdXiMSkAANa1ta
          source_id: s_im7g2HnV-UHUt7S6IguDX3
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學歐 与 王學柳 为同胞（CBDB 记「兄」），王學柳 之父／母即 王學歐 之父／母。
          source:
            id: s_im7g2HnV-UHUt7S6IguDX3
            source_type: api_record
            title: 中国历代人物传记资料库：王學歐（CBDB 303180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303180&o=json
            external_identifier: CBDB:303180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TcEgoCK92NB84dZ85NVqLx
        status: active
        display_name: 王學歐
        merged_into_person_id: null
    - claim:
        id: c_uz8JYkHYAIk2wCPT6tK6Tu
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XMZWa26MMC6LxMpQ7MWtzL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kgib30WEjs4il7qMcgWyv9
          claim_id: c_uz8JYkHYAIk2wCPT6tK6Tu
          source_id: s_23p0juV1A8QC5aIrRU67SB
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學周 与 王學柳 为同胞（CBDB 记「兄」），王學柳 之父／母即 王學周 之父／母。
          source:
            id: s_23p0juV1A8QC5aIrRU67SB
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 303183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303183&o=json
            external_identifier: CBDB:303183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XMZWa26MMC6LxMpQ7MWtzL
        status: active
        display_name: 王學周
        merged_into_person_id: null
    - claim:
        id: c_OmpatZC4uR2O-fnsVkGy_k
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XgL2sfSoL9QfrcNrDCpzew
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OgNhHWnWUlZoYw9AVvWuyp
          claim_id: c_OmpatZC4uR2O-fnsVkGy_k
          source_id: s_zyNSUOPhscSQdINM7953E_
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學曾 与 王學柳 为同胞（CBDB 记「兄」），王學柳 之父／母即 王學曾 之父／母。
          source:
            id: s_zyNSUOPhscSQdINM7953E_
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 303185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303185&o=json
            external_identifier: CBDB:303185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XgL2sfSoL9QfrcNrDCpzew
        status: active
        display_name: 王學曾
        merged_into_person_id: null
    - claim:
        id: c_WfkWU_mzKCBOB1wH-w-RQ-
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gxH82HCdGJ63PfR4sqqsLs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eg_miSgNJnUgx9_rmrwEK3
          claim_id: c_WfkWU_mzKCBOB1wH-w-RQ-
          source_id: s_IJz3PLQYaBUEVf-OU6tGgG
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學韓 与 王學柳 为同胞（CBDB 记「弟」），王學柳 之父／母即 王學韓 之父／母。
          source:
            id: s_IJz3PLQYaBUEVf-OU6tGgG
            source_type: api_record
            title: 中国历代人物传记资料库：王學韓（CBDB 303179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303179&o=json
            external_identifier: CBDB:303179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gxH82HCdGJ63PfR4sqqsLs
        status: active
        display_name: 王學韓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。嘉靖二十年進士，籍贯澤州，曾任府知事。（中国历代人物传记资料库 CBDB 303176） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_U7JNj2nXJh2KN7f9tg3Czd | 王學柳 | accepted |
| children | p_44KAP5Fb5E2otJ3zj8FAG8 | 王學蘇 | accepted |
| children | p_Rfnk7QJ1hjkREGbsjm5ALY | 王學召 | accepted |
| children | p_TcEgoCK92NB84dZ85NVqLx | 王學歐 | accepted |
| children | p_XMZWa26MMC6LxMpQ7MWtzL | 王學周 | accepted |
| children | p_XgL2sfSoL9QfrcNrDCpzew | 王學曾 | accepted |
| children | p_gxH82HCdGJ63PfR4sqqsLs | 王學韓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 303176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303176&o=json)
- [中国历代人物传记资料库：王學曾（CBDB 303185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303185&o=json)
- [中国历代人物传记资料库：王學韓（CBDB 303179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303179&o=json)
- [中国历代人物传记资料库：王學歐（CBDB 303180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303180&o=json)
- [中国历代人物传记资料库：王學蘇（CBDB 303182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303182&o=json)
- [中国历代人物传记资料库：王學召（CBDB 303184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303184&o=json)
- [中国历代人物传记资料库：王學周（CBDB 303183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303183&o=json)
