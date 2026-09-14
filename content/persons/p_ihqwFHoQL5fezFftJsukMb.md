---
schema: wang-person/v1
id: p_ihqwFHoQL5fezFftJsukMb
status: active
merged_into: null
display_name: 王銳
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_piVF9dJHeyxQ9BKZeRMmGW
        subject_person_id: p_ihqwFHoQL5fezFftJsukMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BnBHTkiTUVLqyJEj55Tffx
          claim_id: c_piVF9dJHeyxQ9BKZeRMmGW
          source_id: s_jeazmAgpnL84Ce6RMwkVPH
          stance: supports
          locator: CBDB:202276
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202276）
          source: &a1
            id: s_jeazmAgpnL84Ce6RMwkVPH
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 202276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202276&o=json
            external_identifier: CBDB:202276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QbqkZCbXBRCmx4uFjSKHrp
        subject_person_id: p_ihqwFHoQL5fezFftJsukMb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TAiPCNQXNCiAwqmXXQKJ87
          claim_id: c_QbqkZCbXBRCmx4uFjSKHrp
          source_id: s_jeazmAgpnL84Ce6RMwkVPH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MqFr7CGQHs8tm8oESkdVxx
        subject_person_id: p_ihqwFHoQL5fezFftJsukMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳（生于1487年），明人物。明清進士進士，籍贯平峪，入仕進士。（中国历代人物传记资料库 CBDB 202276）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tfob34hNYurnzykhPEx9uF
          claim_id: c_MqFr7CGQHs8tm8oESkdVxx
          source_id: s_jeazmAgpnL84Ce6RMwkVPH
          stance: supports
          locator: CBDB:202276
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gjsJqK5PvSo7TNxLXxTEkp
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csYCzbezuk0GCE3kXFgP9i
          claim_id: c_gjsJqK5PvSo7TNxLXxTEkp
          source_id: s_jeazmAgpnL84Ce6RMwkVPH
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百七十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_w-v_AdZm1pnk4kCIPEaDXF
        subject_person_id: p_ihqwFHoQL5fezFftJsukMb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rNBvTiWLAN4bLrCCab35T1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sJ1O_4aUFBG8-QmxTj6Zls
          claim_id: c_w-v_AdZm1pnk4kCIPEaDXF
          source_id: s_ZHLvS1s3An6dpbCqnSv1cz
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百七十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZHLvS1s3An6dpbCqnSv1cz
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王銳妻)（CBDB 285956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285956&o=json
            external_identifier: CBDB:285956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rNBvTiWLAN4bLrCCab35T1
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_B5TrRuBQm-qXxMdPUOGy1k
        subject_person_id: p_vMjpKHJoeuGDZhv3HdG2i8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DvIARx8H0gwbP_JiJ2o_H0
          claim_id: c_B5TrRuBQm-qXxMdPUOGy1k
          source_id: s_jeazmAgpnL84Ce6RMwkVPH
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百七十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vMjpKHJoeuGDZhv3HdG2i8
        status: active
        display_name: 王昇
        merged_into_person_id: null
    - claim:
        id: c_nIeIIY6dHH2WJ4DSRrUt6V
        subject_person_id: p_ksXbMH5SYnRtnnkU312q9h
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ekYAnsss02mBzT4qbqiXYg
          claim_id: c_nIeIIY6dHH2WJ4DSRrUt6V
          source_id: s_jeazmAgpnL84Ce6RMwkVPH
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百七十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ksXbMH5SYnRtnnkU312q9h
        status: active
        display_name: 王紀
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Pfs5LFfy_eJuH_LGOqCpsb
        subject_person_id: p_3JXmUyAG5SM1NxgguQKH5M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y6dZDOj2kRu847jXun-D5p
          claim_id: c_Pfs5LFfy_eJuH_LGOqCpsb
          source_id: s_6vGMh8FG7KxqlOPeCPsFDC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202276 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6vGMh8FG7KxqlOPeCPsFDC
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 285958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285958&o=json
            external_identifier: CBDB:285958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3JXmUyAG5SM1NxgguQKH5M
        status: active
        display_name: 王鍈
        merged_into_person_id: null
    - claim:
        id: c_l6yGX_fmOjclF8Fkz64QmQ
        subject_person_id: p_GB7C9iCPVFk1bWVfvXJBAb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yro-N-_bT3LIDfv2Tgfwc0
          claim_id: c_l6yGX_fmOjclF8Fkz64QmQ
          source_id: s_fDWkH7Uvph0ooZswqhsGff
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202276 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fDWkH7Uvph0ooZswqhsGff
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 285960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285960&o=json
            external_identifier: CBDB:285960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GB7C9iCPVFk1bWVfvXJBAb
        status: active
        display_name: 王鈞
        merged_into_person_id: null
    - claim:
        id: c_XDvazWIGISqfJXqXgr3oUj
        subject_person_id: p_KKu1v7yctAFL7GoE8VbjKL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kRoCOuEakYrrJU9bq1Htx3
          claim_id: c_XDvazWIGISqfJXqXgr3oUj
          source_id: s_xV_IyRKm_B6ehvVtZM9-Ft
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202276 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xV_IyRKm_B6ehvVtZM9-Ft
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 285957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285957&o=json
            external_identifier: CBDB:285957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KKu1v7yctAFL7GoE8VbjKL
        status: active
        display_name: 王鉞
        merged_into_person_id: null
    - claim:
        id: c_OT3ea1zdZsFFDV-dhmORXZ
        subject_person_id: p_QtDiQFreFQHM1M2Z39Dit3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1X-eNiIQJfIq893s1oMYF2
          claim_id: c_OT3ea1zdZsFFDV-dhmORXZ
          source_id: s_cw3waLGJk4J_o-QP05Npdd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202276 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cw3waLGJk4J_o-QP05Npdd
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 285961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285961&o=json
            external_identifier: CBDB:285961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QtDiQFreFQHM1M2Z39Dit3
        status: active
        display_name: 王鍾
        merged_into_person_id: null
    - claim:
        id: c_NbQgxDxK-dETYP3ZLOg-Am
        subject_person_id: p_VbmgKsRzLNGsQDkBfPCYk6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qts2Syq60mNhnC7SBdBuhC
          claim_id: c_NbQgxDxK-dETYP3ZLOg-Am
          source_id: s_SDdDgBzBY2MXr3nQZ6Zlty
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202276 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SDdDgBzBY2MXr3nQZ6Zlty
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 285959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285959&o=json
            external_identifier: CBDB:285959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VbmgKsRzLNGsQDkBfPCYk6
        status: active
        display_name: 王鉉
        merged_into_person_id: null
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| birth.date | 1487年 | accepted |
| bio.summary | 王銳（生于1487年），明人物。明清進士進士，籍贯平峪，入仕進士。（中国历代人物传记资料库 CBDB 202276） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z8BnuYsiaLneHAb2Y8ZJ1g | 王通 | accepted |
| spouses | p_rNBvTiWLAN4bLrCCab35T1 | 楊氏 | accepted |
| ancestors | p_vMjpKHJoeuGDZhv3HdG2i8 | 王昇 | accepted |
| ancestors | p_ksXbMH5SYnRtnnkU312q9h | 王紀 | accepted |
| other | p_3JXmUyAG5SM1NxgguQKH5M | 王鍈 | accepted |
| other | p_GB7C9iCPVFk1bWVfvXJBAb | 王鈞 | accepted |
| other | p_KKu1v7yctAFL7GoE8VbjKL | 王鉞 | accepted |
| other | p_QtDiQFreFQHM1M2Z39Dit3 | 王鍾 | accepted |
| other | p_VbmgKsRzLNGsQDkBfPCYk6 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 285960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285960&o=json)
- [中国历代人物传记资料库：王銳（CBDB 202276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202276&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 285959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285959&o=json)
- [中国历代人物传记资料库：王鍈（CBDB 285958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285958&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 285957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285957&o=json)
- [中国历代人物传记资料库：王鍾（CBDB 285961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285961&o=json)
- [中国历代人物传记资料库：楊氏(王銳妻)（CBDB 285956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285956&o=json)
