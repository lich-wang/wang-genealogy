---
schema: wang-person/v1
id: p_6tdTGr8WHYZiKQmeHZ5QVe
status: active
merged_into: null
display_name: 王宗源
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6KDEGkse6jsHBoFziQGm2D
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2HPq7EPWikenCL35SoLno
          claim_id: c_6KDEGkse6jsHBoFziQGm2D
          source_id: s_jj2yA4oddQ1UkNSUdd2TXN
          stance: supports
          locator: CBDB:230874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230874）
          source: &a1
            id: s_jj2yA4oddQ1UkNSUdd2TXN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗源（CBDB 230874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230874&o=json
            external_identifier: CBDB:230874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LwEnF18e9sMEoGEdrf64Pm
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗源，明人物。萬曆丙戌科進士進士，籍贯清遠，曾任鄉耆。（中国历代人物传记资料库 CBDB 230874）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qvLs13xFwDFJXZedeJ6klF
          claim_id: c_LwEnF18e9sMEoGEdrf64Pm
          source_id: s_jj2yA4oddQ1UkNSUdd2TXN
          stance: supports
          locator: CBDB:230874
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yqVBxl6TKrbhv9mN-6Mxrw
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H8UDji4tvPsw1D6PXfr_J8
          claim_id: c_yqVBxl6TKrbhv9mN-6Mxrw
          source_id: s_jj2yA4oddQ1UkNSUdd2TXN
          stance: supports
          locator: 萬曆丙戌科進士同年總錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EAKJt6kT5T4F5kcYrF9f6y
        status: active
        display_name: 王玠
        merged_into_person_id: null
    - claim:
        id: c_Zfvr-osBhoFHsGhxqLSSjz
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EXL3GbHFSwjHzEdLSaJPU1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mYx7osGdT9BzM8VfaTWcj5
          claim_id: c_Zfvr-osBhoFHsGhxqLSSjz
          source_id: s_oTRnWioMQ9gznlsh9_pYox
          stance: supports
          locator: CBDB：兄弟 王玠（207286）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑚 与 王玠 为同胞（CBDB 记「弟」），王玠 之父／母即 王瑚 之父／母。
          source:
            id: s_oTRnWioMQ9gznlsh9_pYox
            source_type: api_record
            title: 中国历代人物传记资料库：王瑚（CBDB 230879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230879&o=json
            external_identifier: CBDB:230879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EXL3GbHFSwjHzEdLSaJPU1
        status: active
        display_name: 王瑚
        merged_into_person_id: null
    - claim:
        id: c_fzEBO-cyEPf9DkHscjo5lI
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FxvRZqGsncHQZPb3N2sJP6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3A057LbNoXpC3DqkpM3Odr
          claim_id: c_fzEBO-cyEPf9DkHscjo5lI
          source_id: s_OoTN-6CFQ5-5RBjuaIYskY
          stance: supports
          locator: CBDB：兄弟 王玠（207286）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王球 与 王玠 为同胞（CBDB 记「兄」），王玠 之父／母即 王球 之父／母。
          source:
            id: s_OoTN-6CFQ5-5RBjuaIYskY
            source_type: api_record
            title: 中国历代人物传记资料库：王球（CBDB 230884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230884&o=json
            external_identifier: CBDB:230884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FxvRZqGsncHQZPb3N2sJP6
        status: active
        display_name: 王球
        merged_into_person_id: null
    - claim:
        id: c_-9-cAxup1NVM62EaxRPvnJ
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBexWpRG714qmm2J7TtZqA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j1on34CZEVEsMC8jJq9Jh9
          claim_id: c_-9-cAxup1NVM62EaxRPvnJ
          source_id: s_68TSNj5rXumEMrlY-QIRbZ
          stance: supports
          locator: CBDB：兄弟 王玠（207286）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王璞 与 王玠 为同胞（CBDB 记「兄」），王玠 之父／母即 王璞 之父／母。
          source:
            id: s_68TSNj5rXumEMrlY-QIRbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 230882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230882&o=json
            external_identifier: CBDB:230882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GBexWpRG714qmm2J7TtZqA
        status: active
        display_name: 王璞
        merged_into_person_id: null
    - claim:
        id: c_bHfmCKngsIaskmTqRqb-AH
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fmYNxtA1MNbhpBqp19EFLD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EneRpjXOmGuGifgpQB_neI
          claim_id: c_bHfmCKngsIaskmTqRqb-AH
          source_id: s_UrLkMrsypu_H9CSOSFYmYd
          stance: supports
          locator: CBDB：兄弟 王玠（207286）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王玘 与 王玠 为同胞（CBDB 记「弟」），王玠 之父／母即 王玘 之父／母。
          source:
            id: s_UrLkMrsypu_H9CSOSFYmYd
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 230880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230880&o=json
            external_identifier: CBDB:230880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fmYNxtA1MNbhpBqp19EFLD
        status: active
        display_name: 王玘
        merged_into_person_id: null
    - claim:
        id: c_KZUW70BsBRukqrmWvDqeeB
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jcSR28HVc1YdUmWB2uemAX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JnXqJEdpGggElhNIS1Qlcf
          claim_id: c_KZUW70BsBRukqrmWvDqeeB
          source_id: s_XC1t6F5ot4bPlFdz-h8Iu1
          stance: supports
          locator: CBDB：兄弟 王玠（207286）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑺 与 王玠 为同胞（CBDB 记「兄」），王玠 之父／母即 王瑺 之父／母。
          source:
            id: s_XC1t6F5ot4bPlFdz-h8Iu1
            source_type: api_record
            title: 中国历代人物传记资料库：王瑺（CBDB 230881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230881&o=json
            external_identifier: CBDB:230881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jcSR28HVc1YdUmWB2uemAX
        status: active
        display_name: 王瑺
        merged_into_person_id: null
    - claim:
        id: c_gI6KGTbUQKmmW6b4LUZ9oa
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xNuBMveoJNbM9ZvyqDs2xz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MV7JK0PjNBMXIkVxBlybuS
          claim_id: c_gI6KGTbUQKmmW6b4LUZ9oa
          source_id: s_KJZaovp98zd5ZUWdAH6Owz
          stance: supports
          locator: CBDB：兄弟 王玠（207286）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓚 与 王玠 为同胞（CBDB 记「兄」），王玠 之父／母即 王瓚 之父／母。
          source:
            id: s_KJZaovp98zd5ZUWdAH6Owz
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 230883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230883&o=json
            external_identifier: CBDB:230883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xNuBMveoJNbM9ZvyqDs2xz
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗源 | accepted |
| bio.summary | 王宗源，明人物。萬曆丙戌科進士進士，籍贯清遠，曾任鄉耆。（中国历代人物传记资料库 CBDB 230874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EAKJt6kT5T4F5kcYrF9f6y | 王玠 | accepted |
| children | p_EXL3GbHFSwjHzEdLSaJPU1 | 王瑚 | accepted |
| children | p_FxvRZqGsncHQZPb3N2sJP6 | 王球 | accepted |
| children | p_GBexWpRG714qmm2J7TtZqA | 王璞 | accepted |
| children | p_fmYNxtA1MNbhpBqp19EFLD | 王玘 | accepted |
| children | p_jcSR28HVc1YdUmWB2uemAX | 王瑺 | accepted |
| children | p_xNuBMveoJNbM9ZvyqDs2xz | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑺（CBDB 230881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230881&o=json)
- [中国历代人物传记资料库：王瑚（CBDB 230879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230879&o=json)
- [中国历代人物传记资料库：王璞（CBDB 230882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230882&o=json)
- [中国历代人物传记资料库：王玘（CBDB 230880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230880&o=json)
- [中国历代人物传记资料库：王球（CBDB 230884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230884&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 230883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230883&o=json)
- [中国历代人物传记资料库：王宗源（CBDB 230874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230874&o=json)
