---
schema: wang-person/v1
id: p_F5hazwzcVncNtpZFL7kuXD
status: active
merged_into: null
display_name: 王端昌
cbdb_id: 226065
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o2idAvnAbZ3ibCaJ7e7PnC
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端昌，明人物。萬曆丙戌科進士進士，籍贯安福。（中国历代人物传记资料库 CBDB 226065）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_q3U469_RP0jHwap7GDGue1
          claim_id: c_o2idAvnAbZ3ibCaJ7e7PnC
          source_id: s_Gh9VDhwPz46aMKUmb4b9Ns
          stance: supports
          locator: CBDB:226065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Gh9VDhwPz46aMKUmb4b9Ns
            source_type: api_record
            title: 中国历代人物传记资料库：王端昌（CBDB 226065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226065&o=json
            external_identifier: CBDB:226065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yji2U3Yw9c7U5he7DLGA9V
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iqYh5WcuBLkDw4ogkwaEDD
          claim_id: c_Yji2U3Yw9c7U5he7DLGA9V
          source_id: s_Gh9VDhwPz46aMKUmb4b9Ns
          stance: supports
          locator: CBDB:226065
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZAUp-ZP6v1pV52A9RA4_Mb
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-oDgaOOYvXHI21O3mCE6k4
          claim_id: c_ZAUp-ZP6v1pV52A9RA4_Mb
          source_id: s_Gh9VDhwPz46aMKUmb4b9Ns
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Gh9VDhwPz46aMKUmb4b9Ns
            source_type: api_record
            title: 中国历代人物传记资料库：王端昌（CBDB 226065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226065&o=json
            external_identifier: CBDB:226065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4A86HEw8MTfsRuaTJeDAXg
        status: active
        display_name: 王如堅
        merged_into_person_id: null
    - claim:
        id: c_jbyLUdq_O7y6YIAd4d6CLt
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4PGM82EfFNa7LU9rpD5w1c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SYlZ9XleHYhybpTfA3wq5s
          claim_id: c_jbyLUdq_O7y6YIAd4d6CLt
          source_id: s_XePJXUYRCO8nVgdCH_3aWL
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如垓 与 王如堅 为同胞（CBDB 记「兄」），王如堅 之父／母即 王如垓 之父／母。
          source:
            id: s_XePJXUYRCO8nVgdCH_3aWL
            source_type: api_record
            title: 中国历代人物传记资料库：王如垓（CBDB 226072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226072&o=json
            external_identifier: CBDB:226072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4PGM82EfFNa7LU9rpD5w1c
        status: active
        display_name: 王如垓
        merged_into_person_id: null
    - claim:
        id: c_g8rKa8l0P13QGpr9tA9RUC
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8UXR55oiLypfyrC2us4hnw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M848AlhT4AXzCoXtr7UI7-
          claim_id: c_g8rKa8l0P13QGpr9tA9RUC
          source_id: s_tIo3ANSx-oILAN0VYUriCF
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如綸 与 王如堅 为同胞（CBDB 记「兄」），王如堅 之父／母即 王如綸 之父／母。
          source:
            id: s_tIo3ANSx-oILAN0VYUriCF
            source_type: api_record
            title: 中国历代人物传记资料库：王如綸（CBDB 226076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226076&o=json
            external_identifier: CBDB:226076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8UXR55oiLypfyrC2us4hnw
        status: active
        display_name: 王如綸
        merged_into_person_id: null
    - claim:
        id: c_rjXxoDr_7YXF4CgtuII6r8
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CYpUQuSDiitDqgeqdwagiX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f6ryuTl5gNShq_O0ADKtCN
          claim_id: c_rjXxoDr_7YXF4CgtuII6r8
          source_id: s_2VM6oxS26HDLEJhqKtd1q2
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如垠 与 王如堅 为同胞（CBDB 记「兄」），王如堅 之父／母即 王如垠 之父／母。
          source:
            id: s_2VM6oxS26HDLEJhqKtd1q2
            source_type: api_record
            title: 中国历代人物传记资料库：王如垠（CBDB 226074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226074&o=json
            external_identifier: CBDB:226074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CYpUQuSDiitDqgeqdwagiX
        status: active
        display_name: 王如垠
        merged_into_person_id: null
    - claim:
        id: c_pd6_lJzlmJ_bbHVJAy8rjI
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TdtLgm7r8KeBjV945nGKn3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qUIjSHvrJLRLNtYEMYsAt_
          claim_id: c_pd6_lJzlmJ_bbHVJAy8rjI
          source_id: s_fHtpxIk1CyorIfyrN24aBd
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如彭 与 王如堅 为同胞（CBDB 记「兄」），王如堅 之父／母即 王如彭 之父／母。
          source:
            id: s_fHtpxIk1CyorIfyrN24aBd
            source_type: api_record
            title: 中国历代人物传记资料库：王如彭（CBDB 226075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226075&o=json
            external_identifier: CBDB:226075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdtLgm7r8KeBjV945nGKn3
        status: active
        display_name: 王如彭
        merged_into_person_id: null
    - claim:
        id: c_nEajGnSJJlFYO04v4d_u51
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UkPp61zPoKXswTkME5j3Ce
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kODxNyop8JxLndgmujJ7eD
          claim_id: c_nEajGnSJJlFYO04v4d_u51
          source_id: s_OYgoguSPH1T7QD2GIzzLUN
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如堯 与 王如堅 为同胞（CBDB 记「弟」），王如堅 之父／母即 王如堯 之父／母。
          source:
            id: s_OYgoguSPH1T7QD2GIzzLUN
            source_type: api_record
            title: 中国历代人物传记资料库：王如堯（CBDB 226069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226069&o=json
            external_identifier: CBDB:226069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UkPp61zPoKXswTkME5j3Ce
        status: active
        display_name: 王如堯
        merged_into_person_id: null
    - claim:
        id: c_-nyoJbmz_rWb6IfAS0oYC5
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XXKnMfEmABEqcMJJi5dAP6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sq9Yc5hJnKVsqa3rFOAQB6
          claim_id: c_-nyoJbmz_rWb6IfAS0oYC5
          source_id: s_tbdKVe5wdQ1Gaudw-J4G0v
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如在 与 王如堅 为同胞（CBDB 记「兄」），王如堅 之父／母即 王如在 之父／母。
          source:
            id: s_tbdKVe5wdQ1Gaudw-J4G0v
            source_type: api_record
            title: 中国历代人物传记资料库：王如在（CBDB 226070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226070&o=json
            external_identifier: CBDB:226070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XXKnMfEmABEqcMJJi5dAP6
        status: active
        display_name: 王如在
        merged_into_person_id: null
    - claim:
        id: c_w738-8KjDBq6UcA-r8uvs2
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJNPUBn6kxU9Qx4UcPJa6f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SI7WIs51T9FoiImif9g3Yw
          claim_id: c_w738-8KjDBq6UcA-r8uvs2
          source_id: s_n34Qz9abMyG5_HXyp1WvPD
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如翰 与 王如堅 为同胞（CBDB 记「兄」），王如堅 之父／母即 王如翰 之父／母。
          source:
            id: s_n34Qz9abMyG5_HXyp1WvPD
            source_type: api_record
            title: 中国历代人物传记资料库：王如翰（CBDB 226077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226077&o=json
            external_identifier: CBDB:226077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eJNPUBn6kxU9Qx4UcPJa6f
        status: active
        display_name: 王如翰
        merged_into_person_id: null
    - claim:
        id: c_awvT2Kn_ItB51OiNMU_sXa
        subject_person_id: p_F5hazwzcVncNtpZFL7kuXD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n7nxF5sMDAtTGPfHz31BSS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nx0B0-mu_-LRnxc0kH4QRA
          claim_id: c_awvT2Kn_ItB51OiNMU_sXa
          source_id: s_E4pjA5H96BLkM0hWZAZGZL
          stance: supports
          locator: CBDB：兄弟 王如堅（126521）之父／母 王端昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王如塈 与 王如堅 为同胞（CBDB 记「兄」），王如堅 之父／母即 王如塈 之父／母。
          source:
            id: s_E4pjA5H96BLkM0hWZAZGZL
            source_type: api_record
            title: 中国历代人物传记资料库：王如塈（CBDB 226073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226073&o=json
            external_identifier: CBDB:226073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n7nxF5sMDAtTGPfHz31BSS
        status: active
        display_name: 王如塈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王端昌，明人物。萬曆丙戌科進士進士，籍贯安福。（中国历代人物传记资料库 CBDB 226065） | accepted |
| name.primary | 王端昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4A86HEw8MTfsRuaTJeDAXg | 王如堅 | accepted |
| children | p_4PGM82EfFNa7LU9rpD5w1c | 王如垓 | accepted |
| children | p_8UXR55oiLypfyrC2us4hnw | 王如綸 | accepted |
| children | p_CYpUQuSDiitDqgeqdwagiX | 王如垠 | accepted |
| children | p_TdtLgm7r8KeBjV945nGKn3 | 王如彭 | accepted |
| children | p_UkPp61zPoKXswTkME5j3Ce | 王如堯 | accepted |
| children | p_XXKnMfEmABEqcMJJi5dAP6 | 王如在 | accepted |
| children | p_eJNPUBn6kxU9Qx4UcPJa6f | 王如翰 | accepted |
| children | p_n7nxF5sMDAtTGPfHz31BSS | 王如塈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端昌（CBDB 226065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226065&o=json)
- [中国历代人物传记资料库：王如垓（CBDB 226072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226072&o=json)
- [中国历代人物传记资料库：王如翰（CBDB 226077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226077&o=json)
- [中国历代人物传记资料库：王如塈（CBDB 226073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226073&o=json)
- [中国历代人物传记资料库：王如綸（CBDB 226076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226076&o=json)
- [中国历代人物传记资料库：王如彭（CBDB 226075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226075&o=json)
- [中国历代人物传记资料库：王如堯（CBDB 226069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226069&o=json)
- [中国历代人物传记资料库：王如垠（CBDB 226074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226074&o=json)
- [中国历代人物传记资料库：王如在（CBDB 226070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226070&o=json)
