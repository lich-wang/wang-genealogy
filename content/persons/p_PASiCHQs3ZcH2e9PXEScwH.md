---
schema: wang-person/v1
id: p_PASiCHQs3ZcH2e9PXEScwH
status: active
merged_into: null
display_name: 王效
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xZBAZVadSaTf1pApWZfyRK
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王效
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ntU9bz1pyQjCTxiYxksBDD
          claim_id: c_xZBAZVadSaTf1pApWZfyRK
          source_id: s_Lh1LGFfF1AXhe6KWLNQsWi
          stance: supports
          locator: CBDB:247208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247208）
          source: &a1
            id: s_Lh1LGFfF1AXhe6KWLNQsWi
            source_type: api_record
            title: 中国历代人物传记资料库：王效（CBDB 247208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247208&o=json
            external_identifier: CBDB:247208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LzKcyEcz6qFMVzYPCNQYc5
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王效，明人物。成化八年進士，籍贯吉水，曾任伴讀。（中国历代人物传记资料库 CBDB 247208）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9a2953TDkdYh7nuMsmk5im
          claim_id: c_LzKcyEcz6qFMVzYPCNQYc5
          source_id: s_Lh1LGFfF1AXhe6KWLNQsWi
          stance: supports
          locator: CBDB:247208
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aOPTdJe1WBJi8giMHfMCCi
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tusdwtb3ytyb2RY3bSMNmt
          claim_id: c_aOPTdJe1WBJi8giMHfMCCi
          source_id: s_44ZRSw7JUzZCzrKFGDptvb
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_44ZRSw7JUzZCzrKFGDptvb
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 199608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199608&o=json
            external_identifier: CBDB:199608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aoocqwv9rrDDvPqTtq5ozW
        status: active
        display_name: 王弁
        merged_into_person_id: null
    - claim:
        id: c_vZGWylLxpfT8AF82HbFHaK
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1XAxD14ZFWcp4wGTVz9vV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lhKiy9pwgqN-xvKjGnz7P5
          claim_id: c_vZGWylLxpfT8AF82HbFHaK
          source_id: s_r2b-Dvrpg1n964Lbkw-RS9
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王冕 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王冕 之父／母。
          source:
            id: s_r2b-Dvrpg1n964Lbkw-RS9
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 247213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247213&o=json
            external_identifier: CBDB:247213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1XAxD14ZFWcp4wGTVz9vV6
        status: active
        display_name: 王冕
        merged_into_person_id: null
    - claim:
        id: c_jhEmw2ZQtpOCcr_a9HJSpy
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6QRXoU8XkLikTVxrEb5Vjz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2EmY0ylRAuNcXEV7495E75
          claim_id: c_jhEmw2ZQtpOCcr_a9HJSpy
          source_id: s_iyDo-qpWL-uQpwHoeX76gb
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王收 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王收 之父／母。
          source:
            id: s_iyDo-qpWL-uQpwHoeX76gb
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 247215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json
            external_identifier: CBDB:247215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6QRXoU8XkLikTVxrEb5Vjz
        status: active
        display_name: 王收
        merged_into_person_id: null
    - claim:
        id: c_QFlhBBQWDrFUBDM-9BH4q1
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6sGYC9YM3Ed7K2oVcFK24a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yUGRB2m6dkkNyatuYM759v
          claim_id: c_QFlhBBQWDrFUBDM-9BH4q1
          source_id: s_gDH39AVgR26OPzLkEBudSo
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王冔 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王冔 之父／母。
          source:
            id: s_gDH39AVgR26OPzLkEBudSo
            source_type: api_record
            title: 中国历代人物传记资料库：王冔（CBDB 247214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247214&o=json
            external_identifier: CBDB:247214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6sGYC9YM3Ed7K2oVcFK24a
        status: active
        display_name: 王冔
        merged_into_person_id: null
    - claim:
        id: c_vEVLmaxVCDCm1BHS1_A6Wz
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rcm69CNXPErg3zCYnPGd5T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NKpHZt7ntZzNYHSzJdk7dE
          claim_id: c_vEVLmaxVCDCm1BHS1_A6Wz
          source_id: s_lzduX5tb_3bD8olQywnIJv
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王訓 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王訓 之父／母。
          source:
            id: s_lzduX5tb_3bD8olQywnIJv
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 247219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247219&o=json
            external_identifier: CBDB:247219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rcm69CNXPErg3zCYnPGd5T
        status: active
        display_name: 王訓
        merged_into_person_id: null
    - claim:
        id: c_g3tdS3uVETuYVOiUf-G0fe
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wv87baCYCEA9D2PeSaMvSP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9kzOYiiLJQ7wAt9O2M8ZRI
          claim_id: c_g3tdS3uVETuYVOiUf-G0fe
          source_id: s_m5A55ndnmbCS4nfkZsk4FL
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王謨 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王謨 之父／母。
          source:
            id: s_m5A55ndnmbCS4nfkZsk4FL
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 247216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247216&o=json
            external_identifier: CBDB:247216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wv87baCYCEA9D2PeSaMvSP
        status: active
        display_name: 王謨
        merged_into_person_id: null
    - claim:
        id: c_1dvwxKYDXjsmGMaRGN98sd
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YxaQDdBpQXyHqwFmgoL9bd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gf6OtRJ8fZVlp7VdXxSXBx
          claim_id: c_1dvwxKYDXjsmGMaRGN98sd
          source_id: s_wO8vRwwyZXsIa8rjUtZRLJ
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王證 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王證 之父／母。
          source:
            id: s_wO8vRwwyZXsIa8rjUtZRLJ
            source_type: api_record
            title: 中国历代人物传记资料库：王證（CBDB 247218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247218&o=json
            external_identifier: CBDB:247218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YxaQDdBpQXyHqwFmgoL9bd
        status: active
        display_name: 王證
        merged_into_person_id: null
    - claim:
        id: c_LZ-b3zJGzWXljv81fFLc46
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qhKhiu2sY8i5ENaBwRqNpc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tOTGplAecKELWrZWtt5PL6
          claim_id: c_LZ-b3zJGzWXljv81fFLc46
          source_id: s_U_Rslw1KeqpvK7ZITXGU1M
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王詔 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王詔 之父／母。
          source:
            id: s_U_Rslw1KeqpvK7ZITXGU1M
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 247217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247217&o=json
            external_identifier: CBDB:247217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qhKhiu2sY8i5ENaBwRqNpc
        status: active
        display_name: 王詔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王效

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王效 | accepted |
| bio.summary | 王效，明人物。成化八年進士，籍贯吉水，曾任伴讀。（中国历代人物传记资料库 CBDB 247208） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aoocqwv9rrDDvPqTtq5ozW | 王弁 | accepted |
| children | p_1XAxD14ZFWcp4wGTVz9vV6 | 王冕 | accepted |
| children | p_6QRXoU8XkLikTVxrEb5Vjz | 王收 | accepted |
| children | p_6sGYC9YM3Ed7K2oVcFK24a | 王冔 | accepted |
| children | p_Rcm69CNXPErg3zCYnPGd5T | 王訓 | accepted |
| children | p_Wv87baCYCEA9D2PeSaMvSP | 王謨 | accepted |
| children | p_YxaQDdBpQXyHqwFmgoL9bd | 王證 | accepted |
| children | p_qhKhiu2sY8i5ENaBwRqNpc | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 199608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199608&o=json)
- [中国历代人物传记资料库：王冕（CBDB 247213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247213&o=json)
- [中国历代人物传记资料库：王謨（CBDB 247216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247216&o=json)
- [中国历代人物传记资料库：王收（CBDB 247215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json)
- [中国历代人物传记资料库：王效（CBDB 247208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247208&o=json)
- [中国历代人物传记资料库：王冔（CBDB 247214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247214&o=json)
- [中国历代人物传记资料库：王訓（CBDB 247219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247219&o=json)
- [中国历代人物传记资料库：王詔（CBDB 247217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247217&o=json)
- [中国历代人物传记资料库：王證（CBDB 247218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247218&o=json)
