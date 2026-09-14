---
schema: wang-person/v1
id: p_U6zX3wnxTCMh3nEUMpMz4g
status: active
merged_into: null
display_name: 王一貫
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBp4A33XG2L6vNp1FkPjWt
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tHqTeJBGuHPVGi1wcrBzLG
          claim_id: c_SBp4A33XG2L6vNp1FkPjWt
          source_id: s_hJqj7Z5xZmWaxak2Py5xRH
          stance: supports
          locator: CBDB:333618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333618）
          source: &a1
            id: s_hJqj7Z5xZmWaxak2Py5xRH
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 333618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333618&o=json
            external_identifier: CBDB:333618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kj9jNMko3ET8CcATJUnLzR
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貫，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333618）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tF4SUqtUBKQfnN8t9nHPNO
          claim_id: c_Kj9jNMko3ET8CcATJUnLzR
          source_id: s_hJqj7Z5xZmWaxak2Py5xRH
          stance: supports
          locator: CBDB:333618
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7PvY0msdix01v06pxb2oxd
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b3YnqCeGQADyKZFNL-gXPR
          claim_id: c_7PvY0msdix01v06pxb2oxd
          source_id: s_hJqj7Z5xZmWaxak2Py5xRH
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_McURSghs63gxnc5WxHG3bH
        status: active
        display_name: 王周紹
        merged_into_person_id: null
    - claim:
        id: c_Te9pmvjlsOBuGgu_vmiHGK
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4Wb4Gbgs9Dw4h9zXjiS69
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c99CVgaUqtUixnLWQrGQbv
          claim_id: c_Te9pmvjlsOBuGgu_vmiHGK
          source_id: s_0QavQUGm7w20OQDXwK1g4p
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王繢 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王繢 之父／母。
          source:
            id: s_0QavQUGm7w20OQDXwK1g4p
            source_type: api_record
            title: 中国历代人物传记资料库：王繢（CBDB 333629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333629&o=json
            external_identifier: CBDB:333629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C4Wb4Gbgs9Dw4h9zXjiS69
        status: active
        display_name: 王繢
        merged_into_person_id: null
    - claim:
        id: c_K5WXysRxYrF6vlmliIm29_
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EpwRMB1qrN42kqWjR78hMV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_baTRoz5knHwe_CwGuZnbPr
          claim_id: c_K5WXysRxYrF6vlmliIm29_
          source_id: s_CvEezrnFEP2AajoA3nL5Sc
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王約 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王約 之父／母。
          source:
            id: s_CvEezrnFEP2AajoA3nL5Sc
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 333625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333625&o=json
            external_identifier: CBDB:333625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EpwRMB1qrN42kqWjR78hMV
        status: active
        display_name: 王約
        merged_into_person_id: null
    - claim:
        id: c_4ZoBRW5eKjYU1SV7BoROkJ
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EwCuh8FCLcMfe1885hDnr6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_udU-QZwPXQshvf3I2zEUZs
          claim_id: c_4ZoBRW5eKjYU1SV7BoROkJ
          source_id: s_QkY2WmIg6AhjqO7GZFLCPs
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王綬 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王綬 之父／母。
          source:
            id: s_QkY2WmIg6AhjqO7GZFLCPs
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 333626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333626&o=json
            external_identifier: CBDB:333626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EwCuh8FCLcMfe1885hDnr6
        status: active
        display_name: 王綬
        merged_into_person_id: null
    - claim:
        id: c_k_BcWLrid7cSQ8QFbn0rTZ
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LJZvEdY7pT87YV6vtHGzP5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o7IlggheL3T4Jo99Imta-q
          claim_id: c_k_BcWLrid7cSQ8QFbn0rTZ
          source_id: s_ZBhjZA9pc8hvUk08IN9tLe
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王純 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王純 之父／母。
          source:
            id: s_ZBhjZA9pc8hvUk08IN9tLe
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 333624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333624&o=json
            external_identifier: CBDB:333624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LJZvEdY7pT87YV6vtHGzP5
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_7nfyFVAK7X3wA5O42p3D0I
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Vx2kDRfEE97Vw8nM1qYXxC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wkj_qhbDEHpThoU8J1lTsJ
          claim_id: c_7nfyFVAK7X3wA5O42p3D0I
          source_id: s_bwMP_8T_1nsWY_0-GaiGR2
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王紈 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王紈 之父／母。
          source:
            id: s_bwMP_8T_1nsWY_0-GaiGR2
            source_type: api_record
            title: 中国历代人物传记资料库：王紈（CBDB 333627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333627&o=json
            external_identifier: CBDB:333627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vx2kDRfEE97Vw8nM1qYXxC
        status: active
        display_name: 王紈
        merged_into_person_id: null
    - claim:
        id: c_9Crg-ld_mbioiaMDkCot3C
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xp9Q5oCad9JcZJepjgLUib
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_id2FLhSfE4pqSloSJqFcLz
          claim_id: c_9Crg-ld_mbioiaMDkCot3C
          source_id: s_7KHAS95yeIc8od4HTAmC8K
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王緝 与 王周紹 为同胞（CBDB 记「弟」），王周紹 之父／母即 王緝 之父／母。
          source:
            id: s_7KHAS95yeIc8od4HTAmC8K
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 333622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333622&o=json
            external_identifier: CBDB:333622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xp9Q5oCad9JcZJepjgLUib
        status: active
        display_name: 王緝
        merged_into_person_id: null
    - claim:
        id: c_MLaSB9kkqBVmLE-u9q_BUe
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dFCaAHJ3Wh6A5sABwRVHDY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HnS_NQJalvcLHwN_FXEeWO
          claim_id: c_MLaSB9kkqBVmLE-u9q_BUe
          source_id: s_1kgDU93YjLPUMX2yej406p
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王綰 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王綰 之父／母。
          source:
            id: s_1kgDU93YjLPUMX2yej406p
            source_type: api_record
            title: 中国历代人物传记资料库：王綰（CBDB 333630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333630&o=json
            external_identifier: CBDB:333630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dFCaAHJ3Wh6A5sABwRVHDY
        status: active
        display_name: 王綰
        merged_into_person_id: null
    - claim:
        id: c_AxM1XjIAkYOuLLq3_KUsVi
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eM6qByj6T8ij6umXWEwH93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1h_8B53wT6S0dfQP4_AN4
          claim_id: c_AxM1XjIAkYOuLLq3_KUsVi
          source_id: s_5EOUFk2w73vg9Wx-yBIf9i
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王維 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王維 之父／母。
          source:
            id: s_5EOUFk2w73vg9Wx-yBIf9i
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 333628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333628&o=json
            external_identifier: CBDB:333628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eM6qByj6T8ij6umXWEwH93
        status: active
        display_name: 王維
        merged_into_person_id: null
    - claim:
        id: c_5CzUiPOzQV3Od2TcQCPlyP
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hKETKBqQaqzSN84bAyEYVA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xpmkjwRZoiukngDTHxOo0I
          claim_id: c_5CzUiPOzQV3Od2TcQCPlyP
          source_id: s_mFibrdp4f6QRVFqMk2lZdL
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王組 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王組 之父／母。
          source:
            id: s_mFibrdp4f6QRVFqMk2lZdL
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 333623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333623&o=json
            external_identifier: CBDB:333623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hKETKBqQaqzSN84bAyEYVA
        status: active
        display_name: 王組
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一貫 | accepted |
| bio.summary | 王一貫，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333618） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_McURSghs63gxnc5WxHG3bH | 王周紹 | accepted |
| children | p_C4Wb4Gbgs9Dw4h9zXjiS69 | 王繢 | accepted |
| children | p_EpwRMB1qrN42kqWjR78hMV | 王約 | accepted |
| children | p_EwCuh8FCLcMfe1885hDnr6 | 王綬 | accepted |
| children | p_LJZvEdY7pT87YV6vtHGzP5 | 王純 | accepted |
| children | p_Vx2kDRfEE97Vw8nM1qYXxC | 王紈 | accepted |
| children | p_Xp9Q5oCad9JcZJepjgLUib | 王緝 | accepted |
| children | p_dFCaAHJ3Wh6A5sABwRVHDY | 王綰 | accepted |
| children | p_eM6qByj6T8ij6umXWEwH93 | 王維 | accepted |
| children | p_hKETKBqQaqzSN84bAyEYVA | 王組 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 333624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333624&o=json)
- [中国历代人物传记资料库：王繢（CBDB 333629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333629&o=json)
- [中国历代人物传记资料库：王緝（CBDB 333622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333622&o=json)
- [中国历代人物传记资料库：王綬（CBDB 333626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333626&o=json)
- [中国历代人物传记资料库：王紈（CBDB 333627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333627&o=json)
- [中国历代人物传记资料库：王綰（CBDB 333630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333630&o=json)
- [中国历代人物传记资料库：王維（CBDB 333628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333628&o=json)
- [中国历代人物传记资料库：王一貫（CBDB 333618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333618&o=json)
- [中国历代人物传记资料库：王約（CBDB 333625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333625&o=json)
- [中国历代人物传记资料库：王組（CBDB 333623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333623&o=json)
