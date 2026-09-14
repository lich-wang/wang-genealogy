---
schema: wang-person/v1
id: p_heKv1Lrv2nNs2FP242e8RP
status: active
merged_into: null
display_name: 王士望
cbdb_id: 218704
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KNNyxUMU3etfRb6QfpoMZ9
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士望，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218704）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5Icw1Y6CQLXCB0kPDHR8yE
          claim_id: c_KNNyxUMU3etfRb6QfpoMZ9
          source_id: s_23MLmrvbVSk3aR9pLKCLpH
          stance: supports
          locator: CBDB:218704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_23MLmrvbVSk3aR9pLKCLpH
            source_type: api_record
            title: 中国历代人物传记资料库：王士望（CBDB 218704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218704&o=json
            external_identifier: CBDB:218704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_avLmBjntnGxy1KJDV5RZH5
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WbrUZ9CV5JFM745B29nPRT
          claim_id: c_avLmBjntnGxy1KJDV5RZH5
          source_id: s_23MLmrvbVSk3aR9pLKCLpH
          stance: supports
          locator: CBDB:218704
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_e6ZqVMQoMaUzm3e_cCKYvo
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sw_ptAPGEd8KZSn2zepDoq
          claim_id: c_e6ZqVMQoMaUzm3e_cCKYvo
          source_id: s_23MLmrvbVSk3aR9pLKCLpH
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_23MLmrvbVSk3aR9pLKCLpH
            source_type: api_record
            title: 中国历代人物传记资料库：王士望（CBDB 218704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218704&o=json
            external_identifier: CBDB:218704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_P62PwvTysFNxEPkUXBg1Fm
        status: active
        display_name: 王德新
        merged_into_person_id: null
    - claim:
        id: c_MksQrqtDfTtLbzbBpIpoYU
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FmPZ9e75zqCio8hBbq7nuP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WLKmFY1pfuhrHvO1Fq8Y6Q
          claim_id: c_MksQrqtDfTtLbzbBpIpoYU
          source_id: s_5mjf1oOKfbogpbSx3KKfmY
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王德和 与 王德新 为同胞（CBDB 记「兄」），王德新 之父／母即 王德和 之父／母。
          source:
            id: s_5mjf1oOKfbogpbSx3KKfmY
            source_type: api_record
            title: 中国历代人物传记资料库：王德和（CBDB 218711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218711&o=json
            external_identifier: CBDB:218711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FmPZ9e75zqCio8hBbq7nuP
        status: active
        display_name: 王德和
        merged_into_person_id: null
    - claim:
        id: c_vZHeRbpA1abjDpb0mBxE1S
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GnfZ7SBiwzY9KHGtcXMs2d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_btRMCd_NgyLpS8zrU8N0dZ
          claim_id: c_vZHeRbpA1abjDpb0mBxE1S
          source_id: s_TOuJP5ePwwXX8k8qhw5n-r
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王德宿 与 王德新 为同胞（CBDB 记「兄」），王德新 之父／母即 王德宿 之父／母。
          source:
            id: s_TOuJP5ePwwXX8k8qhw5n-r
            source_type: api_record
            title: 中国历代人物传记资料库：王德宿（CBDB 218712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218712&o=json
            external_identifier: CBDB:218712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GnfZ7SBiwzY9KHGtcXMs2d
        status: active
        display_name: 王德宿
        merged_into_person_id: null
    - claim:
        id: c_HAE95s3wedazrPHR8bHWG_
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N1TXEWvdC8QVjsKgKvz8GJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bab7CDYSc5vLJhrl2Cciw7
          claim_id: c_HAE95s3wedazrPHR8bHWG_
          source_id: s_h0ztp4dUPxLMEfJHrirH39
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷俊 与 王德新 为同胞（CBDB 记「弟」），王德新 之父／母即 王廷俊 之父／母。
          source:
            id: s_h0ztp4dUPxLMEfJHrirH39
            source_type: api_record
            title: 中国历代人物传记资料库：王廷俊（CBDB 218710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218710&o=json
            external_identifier: CBDB:218710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N1TXEWvdC8QVjsKgKvz8GJ
        status: active
        display_name: 王廷俊
        merged_into_person_id: null
    - claim:
        id: c_2pwXxzdJgpyiERfTxhfG9T
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RsX3Wf6p4rAM8SdmNchmQR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qKZce74jAHM4Bl_urb65DT
          claim_id: c_2pwXxzdJgpyiERfTxhfG9T
          source_id: s_5W3wzEYhkThsOnWTZvEAag
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王德宣 与 王德新 为同胞（CBDB 记「兄」），王德新 之父／母即 王德宣 之父／母。
          source:
            id: s_5W3wzEYhkThsOnWTZvEAag
            source_type: api_record
            title: 中国历代人物传记资料库：王德宣（CBDB 218713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json
            external_identifier: CBDB:218713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RsX3Wf6p4rAM8SdmNchmQR
        status: active
        display_name: 王德宣
        merged_into_person_id: null
    - claim:
        id: c_ZM3pYVd3RBaFsAgfFaz9iy
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mFTnd1QNHXJPWon9Y4YcwK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZgS39ALjNMOce46S3I6Vd3
          claim_id: c_ZM3pYVd3RBaFsAgfFaz9iy
          source_id: s__zwgmwUm5UZdVq2e9jxXFA
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王德昇 与 王德新 为同胞（CBDB 记「弟」），王德新 之父／母即 王德昇 之父／母。
          source:
            id: s__zwgmwUm5UZdVq2e9jxXFA
            source_type: api_record
            title: 中国历代人物传记资料库：王德昇（CBDB 218709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218709&o=json
            external_identifier: CBDB:218709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mFTnd1QNHXJPWon9Y4YcwK
        status: active
        display_name: 王德昇
        merged_into_person_id: null
    - claim:
        id: c_mZCoNDNmSfPIlqd_EEo17i
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wGPi5VDd3eyVWzKfbPmcqL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KsmiQNScrGALh6xyGut1n4
          claim_id: c_mZCoNDNmSfPIlqd_EEo17i
          source_id: s_P_2Bmwi6fkc3d2FIumjNnU
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王德敏 与 王德新 为同胞（CBDB 记「弟」），王德新 之父／母即 王德敏 之父／母。
          source:
            id: s_P_2Bmwi6fkc3d2FIumjNnU
            source_type: api_record
            title: 中国历代人物传记资料库：王德敏（CBDB 218708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218708&o=json
            external_identifier: CBDB:218708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wGPi5VDd3eyVWzKfbPmcqL
        status: active
        display_name: 王德敏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士望，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218704） | accepted |
| name.primary | 王士望 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_P62PwvTysFNxEPkUXBg1Fm | 王德新 | accepted |
| children | p_FmPZ9e75zqCio8hBbq7nuP | 王德和 | accepted |
| children | p_GnfZ7SBiwzY9KHGtcXMs2d | 王德宿 | accepted |
| children | p_N1TXEWvdC8QVjsKgKvz8GJ | 王廷俊 | accepted |
| children | p_RsX3Wf6p4rAM8SdmNchmQR | 王德宣 | accepted |
| children | p_mFTnd1QNHXJPWon9Y4YcwK | 王德昇 | accepted |
| children | p_wGPi5VDd3eyVWzKfbPmcqL | 王德敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德和（CBDB 218711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218711&o=json)
- [中国历代人物传记资料库：王德敏（CBDB 218708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218708&o=json)
- [中国历代人物传记资料库：王德昇（CBDB 218709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218709&o=json)
- [中国历代人物传记资料库：王德宿（CBDB 218712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218712&o=json)
- [中国历代人物传记资料库：王德宣（CBDB 218713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json)
- [中国历代人物传记资料库：王士望（CBDB 218704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218704&o=json)
- [中国历代人物传记资料库：王廷俊（CBDB 218710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218710&o=json)
