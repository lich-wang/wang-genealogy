---
schema: wang-person/v1
id: p_UHUqHrmc3KJzYiDRgXCMg7
status: active
merged_into: null
display_name: 王傅
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qvC4xGQmxCxPt2x2t1MHNs
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBBvKf4rMceFvLZZ6ScJXy
          claim_id: c_qvC4xGQmxCxPt2x2t1MHNs
          source_id: s_fsRMm8fXNQYG8KCA8hT678
          stance: supports
          locator: CBDB:202284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202284）
          source: &a1
            id: s_fsRMm8fXNQYG8KCA8hT678
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 202284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202284&o=json
            external_identifier: CBDB:202284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.736Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8NxMSa93HaUASD5HyAVTtb
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1486年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5uDnYbC3GuhfznsLHWUvVd
          claim_id: c_8NxMSa93HaUASD5HyAVTtb
          source_id: s_fsRMm8fXNQYG8KCA8hT678
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
        id: c_hBtJWY2D9BJcwKTCPWURE1
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅（生于1486年），明人物。正德十六年進士，籍贯金吾右衛，入仕進士。（中国历代人物传记资料库 CBDB 202284）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sHM0eE0Y8hE-RLtHh00tCz
          claim_id: c_hBtJWY2D9BJcwKTCPWURE1
          source_id: s_fsRMm8fXNQYG8KCA8hT678
          stance: supports
          locator: CBDB:202284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ibeI6KZV63buuQLp9TJ3rf
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3jg7aKUVMegM2yCV7Ho8T
          claim_id: c_ibeI6KZV63buuQLp9TJ3rf
          source_id: s_KJ2LiRNY2XexW7aMiZuRKD
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KJ2LiRNY2XexW7aMiZuRKD
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 286065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286065&o=json
            external_identifier: CBDB:286065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_exNPQqiad19zXtFzRk4E7x
        status: active
        display_name: 王琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8xdETBsEDowfh-2fT5kXgp
        subject_person_id: p_iwotRk166CwUddrnrJYHtv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cWinOhXdT4vSzaQ6uUwsm8
          claim_id: c_8xdETBsEDowfh-2fT5kXgp
          source_id: s_EfeMtdfrt7rWstHnFdDfVH
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EfeMtdfrt7rWstHnFdDfVH
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 286063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286063&o=json
            external_identifier: CBDB:286063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iwotRk166CwUddrnrJYHtv
        status: active
        display_name: 王安
        merged_into_person_id: null
    - claim:
        id: c_zpm-F3W-XebP2D5Maz8zf6
        subject_person_id: p_TmD36wVHjfD8DL7MMyVRvc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QBtfYw5wFx6ENdGYMI7ojM
          claim_id: c_zpm-F3W-XebP2D5Maz8zf6
          source_id: s_66VboCNuZpSouvAFPnGnLC
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_66VboCNuZpSouvAFPnGnLC
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 286064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286064&o=json
            external_identifier: CBDB:286064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TmD36wVHjfD8DL7MMyVRvc
        status: active
        display_name: 王洪
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ZxEJut9DrRBQ8ZKrCnPdQ5
        subject_person_id: p_RaCULe8YbsQAC9UBv88tPg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HUNjD0jqzYq5RhcZpzTsbf
          claim_id: c_ZxEJut9DrRBQ8ZKrCnPdQ5
          source_id: s_hpYukY3Bp9Zp77uV6LVlPr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202284 王傅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hpYukY3Bp9Zp77uV6LVlPr
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 286072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286072&o=json
            external_identifier: CBDB:286072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RaCULe8YbsQAC9UBv88tPg
        status: active
        display_name: 王倫
        merged_into_person_id: null
    - claim:
        id: c_3SuSaiVK9Dek53HVT8c-Db
        subject_person_id: p_SJBWu9Xd2q6he7vBE6hr8A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ol-nZ9fGSoCAnzbw6PjTiQ
          claim_id: c_3SuSaiVK9Dek53HVT8c-Db
          source_id: s_cbWH3noehCRlNSh-hsLzUj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202284 王傅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cbWH3noehCRlNSh-hsLzUj
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 286075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286075&o=json
            external_identifier: CBDB:286075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJBWu9Xd2q6he7vBE6hr8A
        status: active
        display_name: 王佑
        merged_into_person_id: null
    - claim:
        id: c_-326v8lO3zetufILg5iKgy
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cPuUpFf9kMsmpGodkcuj9o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C2bzTvta7ggGOmUwNrrze6
          claim_id: c_-326v8lO3zetufILg5iKgy
          source_id: s_ajTFAFyMf-CUHhDprDTqm6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202284 王傅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ajTFAFyMf-CUHhDprDTqm6
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 286071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286071&o=json
            external_identifier: CBDB:286071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cPuUpFf9kMsmpGodkcuj9o
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_Yhl9TO4quCDjbiD2khymeL
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iWnciWJEHsQCVoY8eMUtjv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eZLJcoBbP5Ysvb_FrWFZu_
          claim_id: c_Yhl9TO4quCDjbiD2khymeL
          source_id: s_wHguomZVrx7aEgJUVdRfv8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202284 王傅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wHguomZVrx7aEgJUVdRfv8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 286074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286074&o=json
            external_identifier: CBDB:286074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iWnciWJEHsQCVoY8eMUtjv
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王傅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅 | accepted |
| birth.date | 1486年 | accepted |
| bio.summary | 王傅（生于1486年），明人物。正德十六年進士，籍贯金吾右衛，入仕進士。（中国历代人物传记资料库 CBDB 202284） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_exNPQqiad19zXtFzRk4E7x | 王琦 | accepted |
| ancestors | p_iwotRk166CwUddrnrJYHtv | 王安 | accepted |
| ancestors | p_TmD36wVHjfD8DL7MMyVRvc | 王洪 | accepted |
| other | p_RaCULe8YbsQAC9UBv88tPg | 王倫 | accepted |
| other | p_SJBWu9Xd2q6he7vBE6hr8A | 王佑 | accepted |
| other | p_cPuUpFf9kMsmpGodkcuj9o | 王傑 | accepted |
| other | p_iWnciWJEHsQCVoY8eMUtjv | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 286063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286063&o=json)
- [中国历代人物传记资料库：王傅（CBDB 202284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202284&o=json)
- [中国历代人物传记资料库：王洪（CBDB 286064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286064&o=json)
- [中国历代人物传记资料库：王傑（CBDB 286071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286071&o=json)
- [中国历代人物传记资料库：王倫（CBDB 286072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286072&o=json)
- [中国历代人物传记资料库：王琦（CBDB 286065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286065&o=json)
- [中国历代人物传记资料库：王佑（CBDB 286075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286075&o=json)
- [中国历代人物传记资料库：王佐（CBDB 286074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286074&o=json)
