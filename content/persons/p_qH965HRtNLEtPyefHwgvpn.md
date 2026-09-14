---
schema: wang-person/v1
id: p_qH965HRtNLEtPyefHwgvpn
status: active
merged_into: null
display_name: 王宗吉
cbdb_id: 262879
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CfU4LRh6njagqKs8a4YU6o
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗吉，明人物。弘治三年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 262879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_s8wDhVCiODkIcZmNW8Fre9
          claim_id: c_CfU4LRh6njagqKs8a4YU6o
          source_id: s_zHpi8Q6czXNCLh1NU52MFu
          stance: supports
          locator: CBDB:262879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zHpi8Q6czXNCLh1NU52MFu
            source_type: api_record
            title: 中国历代人物传记资料库：王宗吉（CBDB 262879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262879&o=json
            external_identifier: CBDB:262879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ncy4yTaf7kaD4RAUhADrYK
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DPCopEvscF3xG7Va7CWMMd
          claim_id: c_ncy4yTaf7kaD4RAUhADrYK
          source_id: s_zHpi8Q6czXNCLh1NU52MFu
          stance: supports
          locator: CBDB:262879
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1N2mkv4ukXNxA73MxKU5c3
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vS4Kzjgv4fYK1EkhDfWocF
          claim_id: c_1N2mkv4ukXNxA73MxKU5c3
          source_id: s_YEFc76BF7d689AbSJF4e5B
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百一十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YEFc76BF7d689AbSJF4e5B
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 126636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json
            external_identifier: CBDB:126636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        status: active
        display_name: 王哲
        merged_into_person_id: null
    - claim:
        id: c_9hdQxV9cUPy0yDT76FFCSj
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aoFJQBdMFvi8Y8zFmY4FTx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eu4qg1M14MR2cXXJ_XrBMF
          claim_id: c_9hdQxV9cUPy0yDT76FFCSj
          source_id: s_VsYNxuYrzWzc0hMS9Pz-8F
          stance: supports
          locator: CBDB：兄弟 王哲（126636）之父／母 王宗吉
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王哲 为同胞（CBDB 记「兄」），王哲 之父／母即 王敏 之父／母。
          source:
            id: s_VsYNxuYrzWzc0hMS9Pz-8F
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 262886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262886&o=json
            external_identifier: CBDB:262886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aoFJQBdMFvi8Y8zFmY4FTx
        status: active
        display_name: 王敏
        merged_into_person_id: null
    - claim:
        id: c_Arhwt-Msd_x9La-MWkhJAE
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hHGmvV3CTCAGUKcTNaynLh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5V_A5UHhtHw7OJ9lb6iPeH
          claim_id: c_Arhwt-Msd_x9La-MWkhJAE
          source_id: s_XNqQMtGP2Db7qVK_OCCj5W
          stance: supports
          locator: CBDB：兄弟 王哲（126636）之父／母 王宗吉
          quotation: null
          interpretation_note: 由兄弟关系推断：王明 与 王哲 为同胞（CBDB 记「兄」），王哲 之父／母即 王明 之父／母。
          source:
            id: s_XNqQMtGP2Db7qVK_OCCj5W
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 262885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262885&o=json
            external_identifier: CBDB:262885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hHGmvV3CTCAGUKcTNaynLh
        status: active
        display_name: 王明
        merged_into_person_id: null
    - claim:
        id: c_4u4KpZcLXW5M9_LYoBTZKj
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xCXSNfKHg5zYrfU2QtZuN2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gCucNKGDI4m0qIbb6XgEhe
          claim_id: c_4u4KpZcLXW5M9_LYoBTZKj
          source_id: s_9395sIcI4x0NoKOQpbwHbs
          stance: supports
          locator: CBDB：兄弟 王哲（126636）之父／母 王宗吉
          quotation: null
          interpretation_note: 由兄弟关系推断：王賢 与 王哲 为同胞（CBDB 记「弟」），王哲 之父／母即 王賢 之父／母。
          source:
            id: s_9395sIcI4x0NoKOQpbwHbs
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 262884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262884&o=json
            external_identifier: CBDB:262884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xCXSNfKHg5zYrfU2QtZuN2
        status: active
        display_name: 王賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗吉，明人物。弘治三年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 262879） | accepted |
| name.primary | 王宗吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8Z1UQ2GEaLW3fJdsaEnJcd | 王哲 | accepted |
| children | p_aoFJQBdMFvi8Y8zFmY4FTx | 王敏 | accepted |
| children | p_hHGmvV3CTCAGUKcTNaynLh | 王明 | accepted |
| children | p_xCXSNfKHg5zYrfU2QtZuN2 | 王賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 262886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262886&o=json)
- [中国历代人物传记资料库：王明（CBDB 262885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262885&o=json)
- [中国历代人物传记资料库：王賢（CBDB 262884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262884&o=json)
- [中国历代人物传记资料库：王哲（CBDB 126636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json)
- [中国历代人物传记资料库：王宗吉（CBDB 262879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262879&o=json)
