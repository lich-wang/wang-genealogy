---
schema: wang-person/v1
id: p_TwqNttrAJWC7sH4DG9Kbi9
status: active
merged_into: null
display_name: 王令
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6TM1fXWCVPu1De5ELvPLpo
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_966JXyiXZSo3M5R9MBECyV
          claim_id: c_6TM1fXWCVPu1De5ELvPLpo
          source_id: s_WCzigkijLgsbiQwxTTQQEJ
          stance: supports
          locator: CBDB:140513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140513）
          source: &a1
            id: s_WCzigkijLgsbiQwxTTQQEJ
            source_type: api_record
            title: 中国历代人物传记资料库：王令（CBDB 140513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140513&o=json
            external_identifier: CBDB:140513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p75qMgxhnhDaua3UBJgy6C
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qqm6G8iqjbZZgtQ6QTmHPc
          claim_id: c_p75qMgxhnhDaua3UBJgy6C
          source_id: s_WCzigkijLgsbiQwxTTQQEJ
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
        id: c_7bsrc9n5gav4fSTsDunrbG
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 731年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_42Pp4ENh8CFQyKCLDJbgUZ
          claim_id: c_7bsrc9n5gav4fSTsDunrbG
          source_id: s_WCzigkijLgsbiQwxTTQQEJ
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
        id: c_MDccNABfngWJJ5tjsoaSNn
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令（672年—731年），唐人物。籍贯臨汝。（中国历代人物传记资料库 CBDB 140513）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8xy_diHtU3DLWbvCJhIddd
          claim_id: c_MDccNABfngWJJ5tjsoaSNn
          source_id: s_WCzigkijLgsbiQwxTTQQEJ
          stance: supports
          locator: CBDB:140513
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e-mFEAectXfEZ0KhVUH6Bt
        subject_person_id: p_V6uZ3vaJQQPK3miTq334HU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LjalCZEY2kOXZ4Xmd6V6EN
          claim_id: c_e-mFEAectXfEZ0KhVUH6Bt
          source_id: s_WCzigkijLgsbiQwxTTQQEJ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 339：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V6uZ3vaJQQPK3miTq334HU
        status: active
        display_name: 王了
        merged_into_person_id: null
  children:
    - claim:
        id: c_in7hH5dKZY8oHo4XXEAdQ6
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A8FZFEXtNi6H1X64Qcc96n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YBmTHhGYF5ULSnggVU8Uc6
          claim_id: c_in7hH5dKZY8oHo4XXEAdQ6
          source_id: s_nZqR7qfJq7j7dY2H5Qw6y1
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 339：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nZqR7qfJq7j7dY2H5Qw6y1
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 152390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152390&o=json
            external_identifier: CBDB:152390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A8FZFEXtNi6H1X64Qcc96n
        status: active
        display_name: 王尚賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9AqYknM7fhFEvkylEvo7M5
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Htri1XDjpuraKHCCtEFJ7i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5wyDyXJrj0jEp861IFd3_7
          claim_id: c_9AqYknM7fhFEvkylEvo7M5
          source_id: s_XhfO9Q80a6fiBQ2Nq3Sw2S
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 339：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XhfO9Q80a6fiBQ2Nq3Sw2S
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王令妻)（CBDB 152385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152385&o=json
            external_identifier: CBDB:152385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Htri1XDjpuraKHCCtEFJ7i
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王令

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王令 | accepted |
| birth.date | 672年 | accepted |
| death.date | 731年 | accepted |
| bio.summary | 王令（672年—731年），唐人物。籍贯臨汝。（中国历代人物传记资料库 CBDB 140513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V6uZ3vaJQQPK3miTq334HU | 王了 | accepted |
| children | p_A8FZFEXtNi6H1X64Qcc96n | 王尚賢 | accepted |
| spouses | p_Htri1XDjpuraKHCCtEFJ7i | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王令妻)（CBDB 152385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152385&o=json)
- [中国历代人物传记资料库：王令（CBDB 140513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140513&o=json)
- [中国历代人物传记资料库：王尚賢（CBDB 152390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152390&o=json)
