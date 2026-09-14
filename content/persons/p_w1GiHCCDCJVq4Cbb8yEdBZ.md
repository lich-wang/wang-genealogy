---
schema: wang-person/v1
id: p_w1GiHCCDCJVq4Cbb8yEdBZ
status: active
merged_into: null
display_name: 王之政
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U77q1nBFd87D8rBquX5Tw3
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KNALHYsw6ffDjQEEoeAKRm
          claim_id: c_U77q1nBFd87D8rBquX5Tw3
          source_id: s_AkT7bdZRSM9dKaqiVizv3B
          stance: supports
          locator: CBDB:555348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555348）
          source: &a1
            id: s_AkT7bdZRSM9dKaqiVizv3B
            source_type: api_record
            title: 中国历代人物传记资料库：王之政（CBDB 555348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555348&o=json
            external_identifier: CBDB:555348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J2b5s3GdLXqr9jgrdsnquv
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之政，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555348）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_08QqYMx6miYB4_i1OMHCEr
          claim_id: c_J2b5s3GdLXqr9jgrdsnquv
          source_id: s_AkT7bdZRSM9dKaqiVizv3B
          stance: supports
          locator: CBDB:555348
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_F5HfP9BHtn8MNS3pIb4mHq
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AxvvbWXS7bT111A7Ymvsf5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vd85LH--blUTK8cL3gaebH
          claim_id: c_F5HfP9BHtn8MNS3pIb4mHq
          source_id: s_HpNZuG1DbA8FcBoiBEQMGi
          stance: supports
          locator: 南陽府志，lgid=878691-878692：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HpNZuG1DbA8FcBoiBEQMGi
            source_type: api_record
            title: 中国历代人物传记资料库：王師元（CBDB 555352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555352&o=json
            external_identifier: CBDB:555352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AxvvbWXS7bT111A7Ymvsf5
        status: active
        display_name: 王師元
        merged_into_person_id: null
    - claim:
        id: c_0loMYaW--NNytpA4GdwvXw
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5bAkYBtfoQ9N4uGS4LVix
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DY9-AzXSsP0WCYiRyDYNxy
          claim_id: c_0loMYaW--NNytpA4GdwvXw
          source_id: s_XiMgnmLvFoF7DxfgYU5EHG
          stance: supports
          locator: 南陽府志，lgid=878691-878692：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XiMgnmLvFoF7DxfgYU5EHG
            source_type: api_record
            title: 中国历代人物传记资料库：王師虺（CBDB 555356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555356&o=json
            external_identifier: CBDB:555356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G5bAkYBtfoQ9N4uGS4LVix
        status: active
        display_name: 王師虺
        merged_into_person_id: null
    - claim:
        id: c_N07wyDPE0jPOdT3hCkpr6u
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m75VvDC3sRAZLmgAeYZoPt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fdVO8vhO7-Jsgwtluxe6bk
          claim_id: c_N07wyDPE0jPOdT3hCkpr6u
          source_id: s_UWvQyXRz4o9DSSAMHcb6hc
          stance: supports
          locator: 南陽府志，lgid=878691-878692：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UWvQyXRz4o9DSSAMHcb6hc
            source_type: api_record
            title: 中国历代人物传记资料库：王師伋（CBDB 555355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555355&o=json
            external_identifier: CBDB:555355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m75VvDC3sRAZLmgAeYZoPt
        status: active
        display_name: 王師伋
        merged_into_person_id: null
    - claim:
        id: c_hAow43_2Fz1eWTAI4KLStG
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QcouJWUA6YJBp4PXTJf4RW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jPsKH0pgBeA8K9_dlEZuKH
          claim_id: c_hAow43_2Fz1eWTAI4KLStG
          source_id: s_rbAHhsaNGUBDLFUhMxEn1F
          stance: supports
          locator: 南陽府志，lgid=878691-878692：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rbAHhsaNGUBDLFUhMxEn1F
            source_type: api_record
            title: 中国历代人物传记资料库：王師震（CBDB 555069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555069&o=json
            external_identifier: CBDB:555069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QcouJWUA6YJBp4PXTJf4RW
        status: active
        display_name: 王師震
        merged_into_person_id: null
    - claim:
        id: c_GD4o-9evDCMfA3FbG6aHMD
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RYcLEAdiXKa2C2JTchNKQu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xr8XdHVWdVe6hCU8xwsuVU
          claim_id: c_GD4o-9evDCMfA3FbG6aHMD
          source_id: s_RiPwL9BhYF8HCY18uFALXo
          stance: supports
          locator: 南陽府志，lgid=878691-878692：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RiPwL9BhYF8HCY18uFALXo
            source_type: api_record
            title: 中国历代人物传记资料库：王師剪（CBDB 555354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555354&o=json
            external_identifier: CBDB:555354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RYcLEAdiXKa2C2JTchNKQu
        status: active
        display_name: 王師剪
        merged_into_person_id: null
    - claim:
        id: c_pxWtCXZFwdkqq26FTFMrk4
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zRfAMH39EM4tmccFUAC8rh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AYg6VEL4MdNj8DAJIGkQdU
          claim_id: c_pxWtCXZFwdkqq26FTFMrk4
          source_id: s_nr2T-k_quXXpweAOwFFwlp
          stance: supports
          locator: CBDB：兄弟 王師震（555069）之父／母 王之政
          quotation: null
          interpretation_note: 由兄弟关系推断：王師說 与 王師震 为同胞（CBDB 记「兄」），王師震 之父／母即 王師說 之父／母。
          source:
            id: s_nr2T-k_quXXpweAOwFFwlp
            source_type: api_record
            title: 中国历代人物传记资料库：王師說（CBDB 555070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555070&o=json
            external_identifier: CBDB:555070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zRfAMH39EM4tmccFUAC8rh
        status: active
        display_name: 王師說
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之政 | accepted |
| bio.summary | 王之政，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AxvvbWXS7bT111A7Ymvsf5 | 王師元 | accepted |
| children | p_G5bAkYBtfoQ9N4uGS4LVix | 王師虺 | accepted |
| children | p_m75VvDC3sRAZLmgAeYZoPt | 王師伋 | accepted |
| children | p_QcouJWUA6YJBp4PXTJf4RW | 王師震 | accepted |
| children | p_RYcLEAdiXKa2C2JTchNKQu | 王師剪 | accepted |
| children | p_zRfAMH39EM4tmccFUAC8rh | 王師說 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師虺（CBDB 555356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555356&o=json)
- [中国历代人物传记资料库：王師伋（CBDB 555355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555355&o=json)
- [中国历代人物传记资料库：王師剪（CBDB 555354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555354&o=json)
- [中国历代人物传记资料库：王師說（CBDB 555070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555070&o=json)
- [中国历代人物传记资料库：王師元（CBDB 555352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555352&o=json)
- [中国历代人物传记资料库：王師震（CBDB 555069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555069&o=json)
- [中国历代人物传记资料库：王之政（CBDB 555348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555348&o=json)
