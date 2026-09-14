---
schema: wang-person/v1
id: p_4A86HEw8MTfsRuaTJeDAXg
status: active
merged_into: null
display_name: 王如堅
cbdb_id: 126521
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Cw3V43pQ9B866izp5bLg4
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如堅，明人物。明清進士進士，籍贯安福，入仕進士，曾任府推官、光祿寺少卿、刑科給事中。（中国历代人物传记资料库 CBDB 126521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_aYsVa-6GIKWVtQ1khd1KL_
          claim_id: c_7Cw3V43pQ9B866izp5bLg4
          source_id: s_1vCtG62qiKjiUdUoFWqJTW
          stance: supports
          locator: CBDB:126521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1vCtG62qiKjiUdUoFWqJTW
            source_type: api_record
            title: 中国历代人物传记资料库：王如堅（CBDB 126521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126521&o=json
            external_identifier: CBDB:126521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4WP9hawKHtESWqh3dVnHwu
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y1NXoQcciTUfDg2EKBVTdo
          claim_id: c_4WP9hawKHtESWqh3dVnHwu
          source_id: s_1vCtG62qiKjiUdUoFWqJTW
          stance: supports
          locator: CBDB:126521
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_F5hazwzcVncNtpZFL7kuXD
        status: active
        display_name: 王端昌
        merged_into_person_id: null
  children:
    - claim:
        id: c_wW9r1Gdw4tmbH2YLcY7QNY
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U9b6v9c6R1jEbuddukv4n9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkrkTxkcTFwI4rQIHO_Y7X
          claim_id: c_wW9r1Gdw4tmbH2YLcY7QNY
          source_id: s_BqHyFtHt2YcdckWj72LYMx
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BqHyFtHt2YcdckWj72LYMx
            source_type: api_record
            title: 中国历代人物传记资料库：王立德（CBDB 226078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226078&o=json
            external_identifier: CBDB:226078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_U9b6v9c6R1jEbuddukv4n9
        status: active
        display_name: 王立德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GijHQFW4Ej2W1De6LsNfeu
        subject_person_id: p_Kx5m9AG61yTn4dcbNdJvSZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vEIDuPobnB-B0pMAGrHak6
          claim_id: c_GijHQFW4Ej2W1De6LsNfeu
          source_id: s_S4WnZn7C47M9YtfDY7XrZN
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S4WnZn7C47M9YtfDY7XrZN
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 226063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226063&o=json
            external_identifier: CBDB:226063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Kx5m9AG61yTn4dcbNdJvSZ
        status: active
        display_name: 王淇
        merged_into_person_id: null
    - claim:
        id: c_KQR07Tf_xwhzs_lzyKGhaf
        subject_person_id: p_3wL2fQErDSb4B4arPG5LJq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKkX7TuoFC8_FUdGx8Luxm
          claim_id: c_KQR07Tf_xwhzs_lzyKGhaf
          source_id: s_HYD6AxK7dDHTprrNXE2uut
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HYD6AxK7dDHTprrNXE2uut
            source_type: api_record
            title: 中国历代人物传记资料库：王有懋（CBDB 226064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226064&o=json
            external_identifier: CBDB:226064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3wL2fQErDSb4B4arPG5LJq
        status: active
        display_name: 王有懋
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_2wlboTvauSuMWpMn4fWqoE
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4PGM82EfFNa7LU9rpD5w1c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__hf_1S5xuvjqrU1fR29bTd
          claim_id: c_2wlboTvauSuMWpMn4fWqoE
          source_id: s_XePJXUYRCO8nVgdCH_3aWL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_xBNMci3iIXBLP-cWHRJIWg
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8UXR55oiLypfyrC2us4hnw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQGhtmtFkEFj6QjIamHjLy
          claim_id: c_xBNMci3iIXBLP-cWHRJIWg
          source_id: s_tIo3ANSx-oILAN0VYUriCF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_7BCDk2GigIQrcknK0WA1xw
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CYpUQuSDiitDqgeqdwagiX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H49Aw1Iv3hOaPnIZE3jHbO
          claim_id: c_7BCDk2GigIQrcknK0WA1xw
          source_id: s_2VM6oxS26HDLEJhqKtd1q2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_zqfrRLYNgbVGMMxGVrVIN9
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdtLgm7r8KeBjV945nGKn3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9RfDAId-NG3SRkZcrIreSf
          claim_id: c_zqfrRLYNgbVGMMxGVrVIN9
          source_id: s_fHtpxIk1CyorIfyrN24aBd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_bJw4DVGLnxadByM7vKJqDr
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UkPp61zPoKXswTkME5j3Ce
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ly4vPZXxxYTiT_bDkB428b
          claim_id: c_bJw4DVGLnxadByM7vKJqDr
          source_id: s_OYgoguSPH1T7QD2GIzzLUN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_jglkNvsfQImmf-g5-jSwDK
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XXKnMfEmABEqcMJJi5dAP6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dEGOH_5a6wSnPsrC7RefP6
          claim_id: c_jglkNvsfQImmf-g5-jSwDK
          source_id: s_tbdKVe5wdQ1Gaudw-J4G0v
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_FtR0SjY6OzSkTxHPyiH9qo
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eJNPUBn6kxU9Qx4UcPJa6f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kYZH38pZBF91wyueWXEIra
          claim_id: c_FtR0SjY6OzSkTxHPyiH9qo
          source_id: s_n34Qz9abMyG5_HXyp1WvPD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_6KGDeyesEGZcocpuD6N-Kf
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n7nxF5sMDAtTGPfHz31BSS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a_d_kH4fAQ1PA_8S5r4stR
          claim_id: c_6KGDeyesEGZcocpuD6N-Kf
          source_id: s_E4pjA5H96BLkM0hWZAZGZL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126521 王如堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王如堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如堅，明人物。明清進士進士，籍贯安福，入仕進士，曾任府推官、光祿寺少卿、刑科給事中。（中国历代人物传记资料库 CBDB 126521） | accepted |
| name.primary | 王如堅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F5hazwzcVncNtpZFL7kuXD | 王端昌 | accepted |
| children | p_U9b6v9c6R1jEbuddukv4n9 | 王立德 | accepted |
| ancestors | p_Kx5m9AG61yTn4dcbNdJvSZ | 王淇 | accepted |
| ancestors | p_3wL2fQErDSb4B4arPG5LJq | 王有懋 | accepted |
| other | p_4PGM82EfFNa7LU9rpD5w1c | 王如垓 | accepted |
| other | p_8UXR55oiLypfyrC2us4hnw | 王如綸 | accepted |
| other | p_CYpUQuSDiitDqgeqdwagiX | 王如垠 | accepted |
| other | p_TdtLgm7r8KeBjV945nGKn3 | 王如彭 | accepted |
| other | p_UkPp61zPoKXswTkME5j3Ce | 王如堯 | accepted |
| other | p_XXKnMfEmABEqcMJJi5dAP6 | 王如在 | accepted |
| other | p_eJNPUBn6kxU9Qx4UcPJa6f | 王如翰 | accepted |
| other | p_n7nxF5sMDAtTGPfHz31BSS | 王如塈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端昌（CBDB 226065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226065&o=json)
- [中国历代人物传记资料库：王立德（CBDB 226078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226078&o=json)
- [中国历代人物传记资料库：王淇（CBDB 226063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226063&o=json)
- [中国历代人物传记资料库：王如垓（CBDB 226072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226072&o=json)
- [中国历代人物传记资料库：王如翰（CBDB 226077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226077&o=json)
- [中国历代人物传记资料库：王如塈（CBDB 226073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226073&o=json)
- [中国历代人物传记资料库：王如堅（CBDB 126521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126521&o=json)
- [中国历代人物传记资料库：王如綸（CBDB 226076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226076&o=json)
- [中国历代人物传记资料库：王如彭（CBDB 226075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226075&o=json)
- [中国历代人物传记资料库：王如堯（CBDB 226069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226069&o=json)
- [中国历代人物传记资料库：王如垠（CBDB 226074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226074&o=json)
- [中国历代人物传记资料库：王如在（CBDB 226070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226070&o=json)
- [中国历代人物传记资料库：王有懋（CBDB 226064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226064&o=json)
