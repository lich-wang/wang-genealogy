---
schema: wang-person/v1
id: p_kYGpXaLiEitGpz5LcQi99e
status: active
merged_into: null
display_name: 王相
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YedCAn8sSti6CF2mMU1Dw4
        subject_person_id: p_kYGpXaLiEitGpz5LcQi99e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dCX7EyZ86C1KZFBGypK6LX
          claim_id: c_YedCAn8sSti6CF2mMU1Dw4
          source_id: s_6jNHhvHo7ALnJrL6nh8zB3
          stance: supports
          locator: CBDB:10708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10708）
          source: &a1
            id: s_6jNHhvHo7ALnJrL6nh8zB3
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 10708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10708&o=json
            external_identifier: CBDB:10708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5aRCGJMFYyHSoCut2y1zCT
        subject_person_id: p_kYGpXaLiEitGpz5LcQi99e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王相，宋人物。籍贯金華，身份为工於文、好學，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 10708）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0EuZoH3Pl9YH3HPZRDyDuU
          claim_id: c_5aRCGJMFYyHSoCut2y1zCT
          source_id: s_6jNHhvHo7ALnJrL6nh8zB3
          stance: supports
          locator: CBDB:10708
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5TnJrTipSBIpG9pS2X8V7-
        subject_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kYGpXaLiEitGpz5LcQi99e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qu9x6KBGd3InNZEmobvO61
          claim_id: c_5TnJrTipSBIpG9pS2X8V7-
          source_id: s_g2UE1xthB45-jk5smV_kNN
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10704）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_g2UE1xthB45-jk5smV_kNN
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 10708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10708&o=json
            external_identifier: CBDB:10708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5dcsDxDKEpK12rMtB5o7pc
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_N2kEdRr-_5cM_Ikx3HcnSI
        subject_person_id: p_3voEFztyjE9gBvRFtzzihf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kYGpXaLiEitGpz5LcQi99e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SWgCbI9oo8jbdabi8ewQt6
          claim_id: c_N2kEdRr-_5cM_Ikx3HcnSI
          source_id: s_g2UE1xthB45-jk5smV_kNN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 10706 王柏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g2UE1xthB45-jk5smV_kNN
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 10708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10708&o=json
            external_identifier: CBDB:10708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3voEFztyjE9gBvRFtzzihf
        status: active
        display_name: 王柏
        merged_into_person_id: null
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，宋人物。籍贯金華，身份为工於文、好學，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 10708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5dcsDxDKEpK12rMtB5o7pc | 王瀚 | accepted |
| other | p_3voEFztyjE9gBvRFtzzihf | 王柏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 10708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10708&o=json)
