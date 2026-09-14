---
schema: wang-person/v1
id: p_SW2vBS5Q2Gs57G32UxYrWC
status: active
merged_into: null
display_name: 王倫
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zUVZyquE7W38dABDYczDM7
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HRV4ZkP2paJDVsDC44PDkn
          claim_id: c_zUVZyquE7W38dABDYczDM7
          source_id: s_FFpWizEZBYbtmqkDEztZ51
          stance: supports
          locator: CBDB:224054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224054）
          source: &a1
            id: s_FFpWizEZBYbtmqkDEztZ51
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 224054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224054&o=json
            external_identifier: CBDB:224054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oMUNWwAiXLq1PNEqtsMeWm
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫，明人物。萬曆十一年進士，籍贯杞縣。（中国历代人物传记资料库 CBDB 224054）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VpCIqpQPzMObCKa9QI3dS2
          claim_id: c_oMUNWwAiXLq1PNEqtsMeWm
          source_id: s_FFpWizEZBYbtmqkDEztZ51
          stance: supports
          locator: CBDB:224054
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6jnZDkw8jYcpDKBYN5TYZ2
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DyAEKNuW84v9PAan2XrKHV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zUlUyPrpbMYdZE19ShfJ24
          claim_id: c_6jnZDkw8jYcpDKBYN5TYZ2
          source_id: s_WRsNJN9orzVPHqFQwefU8e
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WRsNJN9orzVPHqFQwefU8e
            source_type: api_record
            title: 中国历代人物传记资料库：王遵訓（CBDB 206844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206844&o=json
            external_identifier: CBDB:206844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DyAEKNuW84v9PAan2XrKHV
        status: active
        display_name: 王遵訓
        merged_into_person_id: null
    - claim:
        id: c_3JxT69F94D54a9NpGGiXzg
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CaxhV3WpC3bWeKjSHRUMHG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zlJMrnCQSjb2x8mUY1F32C
          claim_id: c_3JxT69F94D54a9NpGGiXzg
          source_id: s_ghf3sr_uUZS1SRKxFmae-h
          stance: supports
          locator: CBDB：兄弟 王遵訓（206844）之父／母 王倫
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵忠 与 王遵訓 为同胞（CBDB 记「兄」），王遵訓 之父／母即 王遵忠 之父／母。
          source:
            id: s_ghf3sr_uUZS1SRKxFmae-h
            source_type: api_record
            title: 中国历代人物传记资料库：王遵忠（CBDB 224062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224062&o=json
            external_identifier: CBDB:224062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CaxhV3WpC3bWeKjSHRUMHG
        status: active
        display_name: 王遵忠
        merged_into_person_id: null
    - claim:
        id: c_HKK-AZYXe0TE8WGJ5J-5FD
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_THjSXuPHuV25p7BCHBT1GF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dGEIpniIoe-ZiBIQeWqaln
          claim_id: c_HKK-AZYXe0TE8WGJ5J-5FD
          source_id: s_nHAqBbWCPisOE6BQD8FOzB
          stance: supports
          locator: CBDB：兄弟 王遵訓（206844）之父／母 王倫
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵道 与 王遵訓 为同胞（CBDB 记「兄」），王遵訓 之父／母即 王遵道 之父／母。
          source:
            id: s_nHAqBbWCPisOE6BQD8FOzB
            source_type: api_record
            title: 中国历代人物传记资料库：王遵道（CBDB 224059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224059&o=json
            external_identifier: CBDB:224059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_THjSXuPHuV25p7BCHBT1GF
        status: active
        display_name: 王遵道
        merged_into_person_id: null
    - claim:
        id: c_XAkfJjAIp4hKByWm4R4IFy
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VarSc8kLjzf416bC1G8naQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgIzV8J2Aka6J-N8znsB7G
          claim_id: c_XAkfJjAIp4hKByWm4R4IFy
          source_id: s_-aV7cmf3OSlJgBBVmSYxLL
          stance: supports
          locator: CBDB：兄弟 王遵訓（206844）之父／母 王倫
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵路 与 王遵訓 为同胞（CBDB 记「兄」），王遵訓 之父／母即 王遵路 之父／母。
          source:
            id: s_-aV7cmf3OSlJgBBVmSYxLL
            source_type: api_record
            title: 中国历代人物传记资料库：王遵路（CBDB 224058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224058&o=json
            external_identifier: CBDB:224058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VarSc8kLjzf416bC1G8naQ
        status: active
        display_name: 王遵路
        merged_into_person_id: null
    - claim:
        id: c_FIRQtfU3AHK0PshmscoAk4
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jvyneAmQwsyuMFavFeHLZy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uck2c-juNKHE1ly1x8sG8_
          claim_id: c_FIRQtfU3AHK0PshmscoAk4
          source_id: s_9gdNNcHoaHHB4kCP4DOpOF
          stance: supports
          locator: CBDB：兄弟 王遵訓（206844）之父／母 王倫
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵魯 与 王遵訓 为同胞（CBDB 记「兄」），王遵訓 之父／母即 王遵魯 之父／母。
          source:
            id: s_9gdNNcHoaHHB4kCP4DOpOF
            source_type: api_record
            title: 中国历代人物传记资料库：王遵魯（CBDB 224061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224061&o=json
            external_identifier: CBDB:224061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jvyneAmQwsyuMFavFeHLZy
        status: active
        display_name: 王遵魯
        merged_into_person_id: null
    - claim:
        id: c_gpQnPSr5nrB6orbNMKLVu3
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vowE3XMF6f9r166gUrc4qM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Xp8BeoZCINGi7Q9Drb_pX
          claim_id: c_gpQnPSr5nrB6orbNMKLVu3
          source_id: s_K8pMIzjWh0eEKJNwHoHN4-
          stance: supports
          locator: CBDB：兄弟 王遵訓（206844）之父／母 王倫
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵孝 与 王遵訓 为同胞（CBDB 记「兄」），王遵訓 之父／母即 王遵孝 之父／母。
          source:
            id: s_K8pMIzjWh0eEKJNwHoHN4-
            source_type: api_record
            title: 中国历代人物传记资料库：王遵孝（CBDB 224063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224063&o=json
            external_identifier: CBDB:224063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vowE3XMF6f9r166gUrc4qM
        status: active
        display_name: 王遵孝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | 王倫，明人物。萬曆十一年進士，籍贯杞縣。（中国历代人物传记资料库 CBDB 224054） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DyAEKNuW84v9PAan2XrKHV | 王遵訓 | accepted |
| children | p_CaxhV3WpC3bWeKjSHRUMHG | 王遵忠 | accepted |
| children | p_THjSXuPHuV25p7BCHBT1GF | 王遵道 | accepted |
| children | p_VarSc8kLjzf416bC1G8naQ | 王遵路 | accepted |
| children | p_jvyneAmQwsyuMFavFeHLZy | 王遵魯 | accepted |
| children | p_vowE3XMF6f9r166gUrc4qM | 王遵孝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 224054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224054&o=json)
- [中国历代人物传记资料库：王遵道（CBDB 224059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224059&o=json)
- [中国历代人物传记资料库：王遵魯（CBDB 224061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224061&o=json)
- [中国历代人物传记资料库：王遵路（CBDB 224058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224058&o=json)
- [中国历代人物传记资料库：王遵孝（CBDB 224063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224063&o=json)
- [中国历代人物传记资料库：王遵訓（CBDB 206844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206844&o=json)
- [中国历代人物传记资料库：王遵忠（CBDB 224062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224062&o=json)
