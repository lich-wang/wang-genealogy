---
schema: wang-person/v1
id: p_wEuXW2QRPfavvbFYPCJ1DK
status: active
merged_into: null
display_name: 王宏
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1FJBvTAa7Bgb4YcrfZyF5o
        subject_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MNSmwM5xoQ5Yk8Aa5Dfdb6
          claim_id: c_1FJBvTAa7Bgb4YcrfZyF5o
          source_id: s_ZumPdj3jsFKYGtvsveaDgh
          stance: supports
          locator: CBDB:199484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199484）
          source: &a1
            id: s_ZumPdj3jsFKYGtvsveaDgh
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 199484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199484&o=json
            external_identifier: CBDB:199484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WgiwK6BETVitmJEPPqYU26
        subject_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1443年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZXqWNPNTTtMup1wcubjapW
          claim_id: c_WgiwK6BETVitmJEPPqYU26
          source_id: s_ZumPdj3jsFKYGtvsveaDgh
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
        id: c_u7VMn1Dkogd4WSbAtR4tT8
        subject_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏（生于1443年），明人物。明清進士進士，籍贯文登，入仕進士。（中国历代人物传记资料库 CBDB 199484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CFMIc3ZHjz7u9o2scrpQNh
          claim_id: c_u7VMn1Dkogd4WSbAtR4tT8
          source_id: s_ZumPdj3jsFKYGtvsveaDgh
          stance: supports
          locator: CBDB:199484
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-pPL40RkHw1n6aldebjRJi
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G0_XUAWHUAX2EGOLbiLOze
          claim_id: c_-pPL40RkHw1n6aldebjRJi
          source_id: s_z7d5HYzKcD7H64D6YKWzRd
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z7d5HYzKcD7H64D6YKWzRd
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 245697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245697&o=json
            external_identifier: CBDB:245697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P3bk3vpKCZxTvFzWKE93mj
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-NJaDEQjIrnR0_9jP4BW0Z
        subject_person_id: p_A3ZzUS6ZaxSG1AS5DcEhHg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLbhEVGy70yHdRi4RzRXHQ
          claim_id: c_-NJaDEQjIrnR0_9jP4BW0Z
          source_id: s_rW9u62b8fcn5Cz3YjfcW1X
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rW9u62b8fcn5Cz3YjfcW1X
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 245694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245694&o=json
            external_identifier: CBDB:245694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A3ZzUS6ZaxSG1AS5DcEhHg
        status: active
        display_name: 王溫
        merged_into_person_id: null
    - claim:
        id: c_eokae1b6khEefxOf2jOAor
        subject_person_id: p_wpezh42DEbjo5UEKBZKa7E
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vk1YJfMTV6Loii9TYwdfaM
          claim_id: c_eokae1b6khEefxOf2jOAor
          source_id: s_RFNq9uhgWupkzkr3s7FVXC
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RFNq9uhgWupkzkr3s7FVXC
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 245695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245695&o=json
            external_identifier: CBDB:245695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wpezh42DEbjo5UEKBZKa7E
        status: active
        display_name: 王信
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_EZj9WyaybagJRW2i7bsKUy
        subject_person_id: p_6SWf882NNoMs9TT22ducd7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R3aPntpZN1T_Id2yZlkbSF
          claim_id: c_EZj9WyaybagJRW2i7bsKUy
          source_id: s_BqLAL_O6eoSGacmhZddDMm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199484 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BqLAL_O6eoSGacmhZddDMm
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 245700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245700&o=json
            external_identifier: CBDB:245700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6SWf882NNoMs9TT22ducd7
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_V8SASGBZBY-GVt3CkLRGt_
        subject_person_id: p_8YQoJ9ap7XQ9u851x9wtF6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HAF0U7jf3Hiv32xYFCmgr-
          claim_id: c_V8SASGBZBY-GVt3CkLRGt_
          source_id: s_iGh4gea0mwfSsO_9-DribX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199484 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iGh4gea0mwfSsO_9-DribX
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 245701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245701&o=json
            external_identifier: CBDB:245701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8YQoJ9ap7XQ9u851x9wtF6
        status: active
        display_name: 王安
        merged_into_person_id: null
    - claim:
        id: c_uEDoSZvkp2U-SX46YlZI6v
        subject_person_id: p_BmWgCLqoG2bs8skh9MjSZT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e2WKX6gWkzIof8dtoO4ine
          claim_id: c_uEDoSZvkp2U-SX46YlZI6v
          source_id: s_13mK4eiRjF8YlrrRnd5UFX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199484 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_13mK4eiRjF8YlrrRnd5UFX
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 245704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json
            external_identifier: CBDB:245704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BmWgCLqoG2bs8skh9MjSZT
        status: active
        display_name: 王寬
        merged_into_person_id: null
    - claim:
        id: c_bazhdkCVT7a1ZEB1ADnwFl
        subject_person_id: p_MPBiL1iM5rKucTNCufCi87
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ICRoPe-m8WetPiaPGeCnee
          claim_id: c_bazhdkCVT7a1ZEB1ADnwFl
          source_id: s_6W_7RkfMxqnou77KqQ9KiB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199484 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6W_7RkfMxqnou77KqQ9KiB
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 245703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json
            external_identifier: CBDB:245703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MPBiL1iM5rKucTNCufCi87
        status: active
        display_name: 王容
        merged_into_person_id: null
    - claim:
        id: c_IBDh4OWF6cNS2bTcd7ikTx
        subject_person_id: p_e83ucJicuv1MxVjgd5jQ2Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RNzCFqX1kVfTc5xgUmAfIr
          claim_id: c_IBDh4OWF6cNS2bTcd7ikTx
          source_id: s_f6Bbhpx1b3EB41lplD3lwi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199484 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f6Bbhpx1b3EB41lplD3lwi
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 245702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245702&o=json
            external_identifier: CBDB:245702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e83ucJicuv1MxVjgd5jQ2Q
        status: active
        display_name: 王實
        merged_into_person_id: null
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| birth.date | 1443年 | accepted |
| bio.summary | 王宏（生于1443年），明人物。明清進士進士，籍贯文登，入仕進士。（中国历代人物传记资料库 CBDB 199484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P3bk3vpKCZxTvFzWKE93mj | 王麟 | accepted |
| ancestors | p_A3ZzUS6ZaxSG1AS5DcEhHg | 王溫 | accepted |
| ancestors | p_wpezh42DEbjo5UEKBZKa7E | 王信 | accepted |
| other | p_6SWf882NNoMs9TT22ducd7 | 王寧 | accepted |
| other | p_8YQoJ9ap7XQ9u851x9wtF6 | 王安 | accepted |
| other | p_BmWgCLqoG2bs8skh9MjSZT | 王寬 | accepted |
| other | p_MPBiL1iM5rKucTNCufCi87 | 王容 | accepted |
| other | p_e83ucJicuv1MxVjgd5jQ2Q | 王實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 245701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245701&o=json)
- [中国历代人物传记资料库：王宏（CBDB 199484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199484&o=json)
- [中国历代人物传记资料库：王寬（CBDB 245704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json)
- [中国历代人物传记资料库：王麟（CBDB 245697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245697&o=json)
- [中国历代人物传记资料库：王寧（CBDB 245700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245700&o=json)
- [中国历代人物传记资料库：王容（CBDB 245703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json)
- [中国历代人物传记资料库：王實（CBDB 245702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245702&o=json)
- [中国历代人物传记资料库：王溫（CBDB 245694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245694&o=json)
- [中国历代人物传记资料库：王信（CBDB 245695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245695&o=json)
