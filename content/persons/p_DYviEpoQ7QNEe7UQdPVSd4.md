---
schema: wang-person/v1
id: p_DYviEpoQ7QNEe7UQdPVSd4
status: active
merged_into: null
display_name: 王以纁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oKj974iq1pjJMHhqUMgMb7
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以纁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uac9f4pJopPKx3C95uQJaQ
          claim_id: c_oKj974iq1pjJMHhqUMgMb7
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: CBDB:205075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205075）
          source: &a1
            id: s_NxyvnQDn1eZ9nvxr3JFUPK
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 205075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json
            external_identifier: CBDB:205075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7TxWkJ3LA9NQgyDbA1eD2n
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bCC2YEoVAFk3dagjmLNETq
          claim_id: c_7TxWkJ3LA9NQgyDbA1eD2n
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
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
        id: c_JXVj1nhiEE3kV41iwCvGsS
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以纁（生于1536年），明人物。明清進士進士，籍贯文安，入仕進士。（中国历代人物传记资料库 CBDB 205075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v7nrHCbRjkPRALipApeOCc
          claim_id: c_JXVj1nhiEE3kV41iwCvGsS
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: CBDB:205075
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I5huK4fvM09TaXPK6L45Pz
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CDPdNvxabQX9Mzpz2bTClj
          claim_id: c_I5huK4fvM09TaXPK6L45Pz
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SJyiQsStHWbHq3jTTvu2vD
        status: active
        display_name: 王楫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tqjCV0HrsWpwB1Njzs4gM_
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gAE7Y6mD8FN6PQfoSCLqU6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wHtj4nZc3o1ilXiEaK65xA
          claim_id: c_tqjCV0HrsWpwB1Njzs4gM_
          source_id: s_E4hPiD9AzsAhuci4rgn_ao
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E4hPiD9AzsAhuci4rgn_ao
            source_type: api_record
            title: 中国历代人物传记资料库：段氏(王以纁妻)（CBDB 327947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327947&o=json
            external_identifier: CBDB:327947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gAE7Y6mD8FN6PQfoSCLqU6
        status: active
        display_name: 段氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Ef9s1miXQLEf-PKYDiiINm
        subject_person_id: p_UmiM46iyTrzbnFK5RdENAL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LOcWJdNotoaKqPqBYn02-v
          claim_id: c_Ef9s1miXQLEf-PKYDiiINm
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UmiM46iyTrzbnFK5RdENAL
        status: active
        display_name: 王能
        merged_into_person_id: null
    - claim:
        id: c_9D0ROdQlGGks2jIJWd2h75
        subject_person_id: p_gSoKgcTCFAWExn64bcLa7C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ANTojEQO9kD-DwjLolJSuc
          claim_id: c_9D0ROdQlGGks2jIJWd2h75
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gSoKgcTCFAWExn64bcLa7C
        status: active
        display_name: 王詔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王以纁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以纁 | accepted |
| birth.date | 1536年 | accepted |
| bio.summary | 王以纁（生于1536年），明人物。明清進士進士，籍贯文安，入仕進士。（中国历代人物传记资料库 CBDB 205075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SJyiQsStHWbHq3jTTvu2vD | 王楫 | accepted |
| spouses | p_gAE7Y6mD8FN6PQfoSCLqU6 | 段氏 | accepted |
| ancestors | p_UmiM46iyTrzbnFK5RdENAL | 王能 | accepted |
| ancestors | p_gSoKgcTCFAWExn64bcLa7C | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：段氏(王以纁妻)（CBDB 327947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327947&o=json)
- [中国历代人物传记资料库：王以纁（CBDB 205075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json)
