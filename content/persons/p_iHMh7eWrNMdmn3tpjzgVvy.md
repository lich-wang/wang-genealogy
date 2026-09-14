---
schema: wang-person/v1
id: p_iHMh7eWrNMdmn3tpjzgVvy
status: active
merged_into: null
display_name: 王言中
cbdb_id: 331765
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9P6FuqpJcA5Fzy8eUQ3tHf
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言中，明人物。嘉靖四十四年進士，籍贯達州。（中国历代人物传记资料库 CBDB 331765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4sgHmUVapJkBRfeQKli6rV
          claim_id: c_9P6FuqpJcA5Fzy8eUQ3tHf
          source_id: s_rgz2wJPHLxp17v7oh4jSpC
          stance: supports
          locator: CBDB:331765
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rgz2wJPHLxp17v7oh4jSpC
            source_type: api_record
            title: 中国历代人物传记资料库：王言中（CBDB 331765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331765&o=json
            external_identifier: CBDB:331765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JbWTzpFMztsB7G6YwEJtAV
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_igyd7k94LYYwnWm4cc5jHP
          claim_id: c_JbWTzpFMztsB7G6YwEJtAV
          source_id: s_rgz2wJPHLxp17v7oh4jSpC
          stance: supports
          locator: CBDB:331765
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4pmgvkil2n6iRDzolDV4uk
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5joJqoMyociS4kycpuaY9i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d1c5gKrLtY65sG5eSk9318
          claim_id: c_4pmgvkil2n6iRDzolDV4uk
          source_id: s_2GHNV9LUGW5GXzQXYQpJ6F
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百四十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2GHNV9LUGW5GXzQXYQpJ6F
            source_type: api_record
            title: 中国历代人物传记资料库：王以修（CBDB 126492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126492&o=json
            external_identifier: CBDB:126492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5joJqoMyociS4kycpuaY9i
        status: active
        display_name: 王以修
        merged_into_person_id: null
    - claim:
        id: c_yxUPnhYtsUlnlp-yNv3mDx
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2QL6KGVBsKUC9RoVJau8Ax
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQvdIVHxFQcK8SuL-nwSbh
          claim_id: c_yxUPnhYtsUlnlp-yNv3mDx
          source_id: s_uQdnokxkfExSusOVE39OC1
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以孚 与 王以修 为同胞（CBDB 记「兄」），王以修 之父／母即 王以孚 之父／母。
          source:
            id: s_uQdnokxkfExSusOVE39OC1
            source_type: api_record
            title: 中国历代人物传记资料库：王以孚（CBDB 331771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331771&o=json
            external_identifier: CBDB:331771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2QL6KGVBsKUC9RoVJau8Ax
        status: active
        display_name: 王以孚
        merged_into_person_id: null
    - claim:
        id: c_1aSRxMLdeIAVMR86Hxtu7C
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4uqEpzsZPn5Pq8rwSNhRpH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a8LKMRz2tbhEmnPo92bQsF
          claim_id: c_1aSRxMLdeIAVMR86Hxtu7C
          source_id: s_O-l33pGcw32zsci6EQy-c7
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以作 与 王以修 为同胞（CBDB 记「兄」），王以修 之父／母即 王以作 之父／母。
          source:
            id: s_O-l33pGcw32zsci6EQy-c7
            source_type: api_record
            title: 中国历代人物传记资料库：王以作（CBDB 331779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331779&o=json
            external_identifier: CBDB:331779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4uqEpzsZPn5Pq8rwSNhRpH
        status: active
        display_name: 王以作
        merged_into_person_id: null
    - claim:
        id: c_uMbkITwHEYeikOXC762ADY
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9e4AiV7Lt25AgF3mSfcLTp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MtRYm-Hnox4wu-1x1e8zxL
          claim_id: c_uMbkITwHEYeikOXC762ADY
          source_id: s_pep39zOuSyLCSQbroVnCzW
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以新 与 王以修 为同胞（CBDB 记「兄」），王以修 之父／母即 王以新 之父／母。
          source:
            id: s_pep39zOuSyLCSQbroVnCzW
            source_type: api_record
            title: 中国历代人物传记资料库：王以新（CBDB 331775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331775&o=json
            external_identifier: CBDB:331775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9e4AiV7Lt25AgF3mSfcLTp
        status: active
        display_name: 王以新
        merged_into_person_id: null
    - claim:
        id: c_GRDf4C5eDY5_fbBozWTjbX
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FProLURjrk172yUAp4kieh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z5zrZ36GC54VLSsOjof4MS
          claim_id: c_GRDf4C5eDY5_fbBozWTjbX
          source_id: s_mMKobAdDZ9-jz8wReo81O3
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以寧 与 王以修 为同胞（CBDB 记「兄」），王以修 之父／母即 王以寧 之父／母。
          source:
            id: s_mMKobAdDZ9-jz8wReo81O3
            source_type: api_record
            title: 中国历代人物传记资料库：王以寧（CBDB 331774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331774&o=json
            external_identifier: CBDB:331774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FProLURjrk172yUAp4kieh
        status: active
        display_name: 王以寧
        merged_into_person_id: null
    - claim:
        id: c_iJmoRK3h_4MEwtDXsXBhls
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GwmQLsEiZEWwQxfjMTkiM2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mm4J7cAJT8rmp2BqrxtftT
          claim_id: c_iJmoRK3h_4MEwtDXsXBhls
          source_id: s_h25HfqsslgogZyhaCpT8eC
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以莊 与 王以修 为同胞（CBDB 记「兄」），王以修 之父／母即 王以莊 之父／母。
          source:
            id: s_h25HfqsslgogZyhaCpT8eC
            source_type: api_record
            title: 中国历代人物传记资料库：王以莊（CBDB 331772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331772&o=json
            external_identifier: CBDB:331772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GwmQLsEiZEWwQxfjMTkiM2
        status: active
        display_name: 王以莊
        merged_into_person_id: null
    - claim:
        id: c_EvrXy5PMQ5wsSjKZOssLUb
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L52cJTMPzAejZtPYFGPNJo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W9xx4lZKjwH7bh1BGT1utc
          claim_id: c_EvrXy5PMQ5wsSjKZOssLUb
          source_id: s_qg_a_74HrTtwVWg1Yvp0SG
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以第 与 王以修 为同胞（CBDB 记「弟」），王以修 之父／母即 王以第 之父／母。
          source:
            id: s_qg_a_74HrTtwVWg1Yvp0SG
            source_type: api_record
            title: 中国历代人物传记资料库：王以第（CBDB 331770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331770&o=json
            external_identifier: CBDB:331770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L52cJTMPzAejZtPYFGPNJo
        status: active
        display_name: 王以第
        merged_into_person_id: null
    - claim:
        id: c_IOs7SqGtRECpEEONXJVw1A
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NagG8yzgxihG7BrC5mFCcE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQuL1EzmZopLOCSlVeZuj4
          claim_id: c_IOs7SqGtRECpEEONXJVw1A
          source_id: s_mW6A0MLfifLdgqEc97Kdf4
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以充 与 王以修 为同胞（CBDB 记「兄」），王以修 之父／母即 王以充 之父／母。
          source:
            id: s_mW6A0MLfifLdgqEc97Kdf4
            source_type: api_record
            title: 中国历代人物传记资料库：王以充（CBDB 331773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331773&o=json
            external_identifier: CBDB:331773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NagG8yzgxihG7BrC5mFCcE
        status: active
        display_name: 王以充
        merged_into_person_id: null
    - claim:
        id: c_KKHLl8cTd5AniRttFoR97H
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jnF7A5Ubvx97C6nt3zpqmi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-WQKEWHz6aqtt9vGXTGOgh
          claim_id: c_KKHLl8cTd5AniRttFoR97H
          source_id: s_mXgKwft1gNQPmcSqmLmMmV
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以貞 与 王以修 为同胞（CBDB 记「兄」），王以修 之父／母即 王以貞 之父／母。
          source:
            id: s_mXgKwft1gNQPmcSqmLmMmV
            source_type: api_record
            title: 中国历代人物传记资料库：王以貞（CBDB 331776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331776&o=json
            external_identifier: CBDB:331776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jnF7A5Ubvx97C6nt3zpqmi
        status: active
        display_name: 王以貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王言中，明人物。嘉靖四十四年進士，籍贯達州。（中国历代人物传记资料库 CBDB 331765） | accepted |
| name.primary | 王言中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5joJqoMyociS4kycpuaY9i | 王以修 | accepted |
| children | p_2QL6KGVBsKUC9RoVJau8Ax | 王以孚 | accepted |
| children | p_4uqEpzsZPn5Pq8rwSNhRpH | 王以作 | accepted |
| children | p_9e4AiV7Lt25AgF3mSfcLTp | 王以新 | accepted |
| children | p_FProLURjrk172yUAp4kieh | 王以寧 | accepted |
| children | p_GwmQLsEiZEWwQxfjMTkiM2 | 王以莊 | accepted |
| children | p_L52cJTMPzAejZtPYFGPNJo | 王以第 | accepted |
| children | p_NagG8yzgxihG7BrC5mFCcE | 王以充 | accepted |
| children | p_jnF7A5Ubvx97C6nt3zpqmi | 王以貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王言中（CBDB 331765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331765&o=json)
- [中国历代人物传记资料库：王以充（CBDB 331773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331773&o=json)
- [中国历代人物传记资料库：王以第（CBDB 331770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331770&o=json)
- [中国历代人物传记资料库：王以孚（CBDB 331771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331771&o=json)
- [中国历代人物传记资料库：王以寧（CBDB 331774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331774&o=json)
- [中国历代人物传记资料库：王以新（CBDB 331775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331775&o=json)
- [中国历代人物传记资料库：王以修（CBDB 126492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126492&o=json)
- [中国历代人物传记资料库：王以貞（CBDB 331776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331776&o=json)
- [中国历代人物传记资料库：王以莊（CBDB 331772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331772&o=json)
- [中国历代人物传记资料库：王以作（CBDB 331779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331779&o=json)
