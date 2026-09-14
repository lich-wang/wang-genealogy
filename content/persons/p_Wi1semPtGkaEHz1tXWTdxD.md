---
schema: wang-person/v1
id: p_Wi1semPtGkaEHz1tXWTdxD
status: active
merged_into: null
display_name: 王謨
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNL7pqG54MFK8Jr3X8H9kN
        subject_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P86j4eF3RCY4caxui1KePV
          claim_id: c_rNL7pqG54MFK8Jr3X8H9kN
          source_id: s_9EZiJHUqXCbc7jcEvW5MHP
          stance: supports
          locator: CBDB:126858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126858）
          source: &a1
            id: s_9EZiJHUqXCbc7jcEvW5MHP
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 126858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126858&o=json
            external_identifier: CBDB:126858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4agcd7MyQMGKzYbCdahFXK
        subject_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h9fs2L6NSFAQpJc8SGY5oj
          claim_id: c_4agcd7MyQMGKzYbCdahFXK
          source_id: s_9EZiJHUqXCbc7jcEvW5MHP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WzSBDk6t5g9aRRH6Uqx9Mx
        subject_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1591年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aaQyZZB5nJDiCH6jSqTEtb
          claim_id: c_WzSBDk6t5g9aRRH6Uqx9Mx
          source_id: s_9EZiJHUqXCbc7jcEvW5MHP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3DVLvK4DTYDb79ZiZsSDAP
        subject_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨（1528年—1591年），明人物。明清進士進士，籍贯許州，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126858）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dzyyTeju_7LelSWNCkxbNY
          claim_id: c_3DVLvK4DTYDb79ZiZsSDAP
          source_id: s_9EZiJHUqXCbc7jcEvW5MHP
          stance: supports
          locator: CBDB:126858
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vulGqIFhlBBko4ryL2YB6L
        subject_person_id: p_CiJPDmrHnjH3i1SjFztPki
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6apS9gBBXW5WqJQbn8VLOs
          claim_id: c_vulGqIFhlBBko4ryL2YB6L
          source_id: s_quLEK74L2K6x8bwri4J2A4
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_quLEK74L2K6x8bwri4J2A4
            source_type: api_record
            title: 中国历代人物传记资料库：王邦益（CBDB 327287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327287&o=json
            external_identifier: CBDB:327287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_CiJPDmrHnjH3i1SjFztPki
        status: active
        display_name: 王邦益
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_j0oXTs3kF8KnxJbtZSGww1
        subject_person_id: p_69SYtuUR4i7SPHKoTQHLk5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4W7uPvYth9Ff8ky0IeJ3O2
          claim_id: c_j0oXTs3kF8KnxJbtZSGww1
          source_id: s_2Yd6CURV4y9jjkhsP13bF1
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2Yd6CURV4y9jjkhsP13bF1
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 327285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327285&o=json
            external_identifier: CBDB:327285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_69SYtuUR4i7SPHKoTQHLk5
        status: active
        display_name: 王冕
        merged_into_person_id: null
    - claim:
        id: c_Ci611qT_aQnVuRB5mAUkQk
        subject_person_id: p_NnpsuXJ58mcKjR3mWtcn4i
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hBYa4UwdfciBWSkT-1tWwY
          claim_id: c_Ci611qT_aQnVuRB5mAUkQk
          source_id: s_eLeTykP4jRZHcSkCTadmBg
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eLeTykP4jRZHcSkCTadmBg
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 327284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327284&o=json
            external_identifier: CBDB:327284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NnpsuXJ58mcKjR3mWtcn4i
        status: active
        display_name: 王琳
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_u1BIvMd96Q2fSZBL2TXZZH
        subject_person_id: p_5nrs4oow6V92GspyB8sxJV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SUOku9EU7SWbBEom1DCPU2
          claim_id: c_u1BIvMd96Q2fSZBL2TXZZH
          source_id: s_vHXRRfNoEaLQck9oh1Cb9w
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126858 王謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vHXRRfNoEaLQck9oh1Cb9w
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 327291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327291&o=json
            external_identifier: CBDB:327291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5nrs4oow6V92GspyB8sxJV
        status: active
        display_name: 王訓
        merged_into_person_id: null
    - claim:
        id: c_zABCG7xgnGB0MTJfbr0BSf
        subject_person_id: p_VUyiHnghgkyQaf5U7JP2io
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YI1cyWjm2TCWZarTZRLCKL
          claim_id: c_zABCG7xgnGB0MTJfbr0BSf
          source_id: s_7fBwakIrm16TKrEpEvLhi1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126858 王謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7fBwakIrm16TKrEpEvLhi1
            source_type: api_record
            title: 中国历代人物传记资料库：王文烱（CBDB 327293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327293&o=json
            external_identifier: CBDB:327293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VUyiHnghgkyQaf5U7JP2io
        status: active
        display_name: 王文烱
        merged_into_person_id: null
    - claim:
        id: c_ptBdfeoHBXcwPf10EdzOrC
        subject_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mJZPwBGUcsF6TQMNiDRK6p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yIIueuHDkNHPHOFWl3PQeX
          claim_id: c_ptBdfeoHBXcwPf10EdzOrC
          source_id: s_TkPIlYA7GnENn6iCkEt9KP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126858 王謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TkPIlYA7GnENn6iCkEt9KP
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 327292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327292&o=json
            external_identifier: CBDB:327292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mJZPwBGUcsF6TQMNiDRK6p
        status: active
        display_name: 王誥
        merged_into_person_id: null
---

# 王謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謨 | accepted |
| birth.date | 1528年 | accepted |
| death.date | 1591年 | accepted |
| bio.summary | 王謨（1528年—1591年），明人物。明清進士進士，籍贯許州，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126858） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CiJPDmrHnjH3i1SjFztPki | 王邦益 | accepted |
| ancestors | p_69SYtuUR4i7SPHKoTQHLk5 | 王冕 | accepted |
| ancestors | p_NnpsuXJ58mcKjR3mWtcn4i | 王琳 | accepted |
| other | p_5nrs4oow6V92GspyB8sxJV | 王訓 | accepted |
| other | p_VUyiHnghgkyQaf5U7JP2io | 王文烱 | accepted |
| other | p_mJZPwBGUcsF6TQMNiDRK6p | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦益（CBDB 327287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327287&o=json)
- [中国历代人物传记资料库：王誥（CBDB 327292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327292&o=json)
- [中国历代人物传记资料库：王琳（CBDB 327284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327284&o=json)
- [中国历代人物传记资料库：王冕（CBDB 327285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327285&o=json)
- [中国历代人物传记资料库：王謨（CBDB 126858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126858&o=json)
- [中国历代人物传记资料库：王文烱（CBDB 327293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327293&o=json)
- [中国历代人物传记资料库：王訓（CBDB 327291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327291&o=json)
