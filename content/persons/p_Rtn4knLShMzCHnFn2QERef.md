---
schema: wang-person/v1
id: p_Rtn4knLShMzCHnFn2QERef
status: active
merged_into: null
display_name: 王振聲
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QacH5GVQqfLLS5irXo5fjH
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振聲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_toFW76GFBjLa2yfkT2TatA
          claim_id: c_QacH5GVQqfLLS5irXo5fjH
          source_id: s_gSWQHL1V8E1x7hLAPMLZPn
          stance: supports
          locator: CBDB:30048
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30048）
          source: &a1
            id: s_gSWQHL1V8E1x7hLAPMLZPn
            source_type: api_record
            title: 中国历代人物传记资料库：王振聲（CBDB 30048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30048&o=json
            external_identifier: CBDB:30048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w15DUBf2FNyYm3EdhJt2ZV
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Av8LPzhXzmTzAHKcx3gY5U
          claim_id: c_w15DUBf2FNyYm3EdhJt2ZV
          source_id: s_gSWQHL1V8E1x7hLAPMLZPn
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
        id: c_fwqDKBH8bJKF2T8Q67ZFx3
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振聲（生于1852年），清人物。明清進士進士，籍贯通州，入仕進士，曾任道監察御史、都水司員外郎、同考官。（中国历代人物传记资料库 CBDB 30048）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MfmA7EdyvVttIGN5uuz61B
          claim_id: c_fwqDKBH8bJKF2T8Q67ZFx3
          source_id: s_gSWQHL1V8E1x7hLAPMLZPn
          stance: supports
          locator: CBDB:30048
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_sXiD5xCte9IXb4oChLhkvw
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3pWRCytbEVjkom5AkxD1He
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLBLBtumoq5GXS-rMYCgNF
          claim_id: c_sXiD5xCte9IXb4oChLhkvw
          source_id: s_14LUUNITVp4p6Vf8XiOVEe
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30048）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_14LUUNITVp4p6Vf8XiOVEe
            source_type: api_record
            title: 中国历代人物传记资料库：王聚秀（CBDB 30065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30065&o=json
            external_identifier: CBDB:30065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3pWRCytbEVjkom5AkxD1He
        status: active
        display_name: 王聚秀
        merged_into_person_id: null
    - claim:
        id: c_O_KkZIgLIzwK86zHGcLust
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tE38h7PQT2RGTDHJYfdJbH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NazVavn69frus7gNqkra4R
          claim_id: c_O_KkZIgLIzwK86zHGcLust
          source_id: s_G-j9Pk5k2rrL5XF2qpLkXQ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30048）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_G-j9Pk5k2rrL5XF2qpLkXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾秀（CBDB 30063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30063&o=json
            external_identifier: CBDB:30063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tE38h7PQT2RGTDHJYfdJbH
        status: active
        display_name: 王鍾秀
        merged_into_person_id: null
    - claim:
        id: c_WZujjNSu5bsPEyc9s9KbBb
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uLU6voA3oKZDYf6mokns6L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sfwzcRgvqvkMPTi59Ahefx
          claim_id: c_WZujjNSu5bsPEyc9s9KbBb
          source_id: s_VKcG0XQTEbCoW1NRUXgiVa
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30048）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_VKcG0XQTEbCoW1NRUXgiVa
            source_type: api_record
            title: 中国历代人物传记资料库：王發秀（CBDB 30064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30064&o=json
            external_identifier: CBDB:30064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uLU6voA3oKZDYf6mokns6L
        status: active
        display_name: 王發秀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王振聲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振聲 | accepted |
| birth.date | 1852年 | accepted |
| bio.summary | 王振聲（生于1852年），清人物。明清進士進士，籍贯通州，入仕進士，曾任道監察御史、都水司員外郎、同考官。（中国历代人物传记资料库 CBDB 30048） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3pWRCytbEVjkom5AkxD1He | 王聚秀 | accepted |
| children | p_tE38h7PQT2RGTDHJYfdJbH | 王鍾秀 | accepted |
| children | p_uLU6voA3oKZDYf6mokns6L | 王發秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王發秀（CBDB 30064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30064&o=json)
- [中国历代人物传记资料库：王聚秀（CBDB 30065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30065&o=json)
- [中国历代人物传记资料库：王振聲（CBDB 30048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30048&o=json)
- [中国历代人物传记资料库：王鍾秀（CBDB 30063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30063&o=json)
