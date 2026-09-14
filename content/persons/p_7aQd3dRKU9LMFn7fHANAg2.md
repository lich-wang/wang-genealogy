---
schema: wang-person/v1
id: p_7aQd3dRKU9LMFn7fHANAg2
status: active
merged_into: null
display_name: 王乾
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8WXXF3qtwj1RKk7VM2CnFG
        subject_person_id: p_7aQd3dRKU9LMFn7fHANAg2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TcFoXMT59UeNhrpNqANyiz
          claim_id: c_8WXXF3qtwj1RKk7VM2CnFG
          source_id: s_fhL8MbMBGJ3BuphfDYfqwg
          stance: supports
          locator: CBDB:320451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320451）
          source: &a1
            id: s_fhL8MbMBGJ3BuphfDYfqwg
            source_type: api_record
            title: 中国历代人物传记资料库：王乾（CBDB 320451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320451&o=json
            external_identifier: CBDB:320451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vuk8uRFhg3XXhgFaJXK3Y4
        subject_person_id: p_7aQd3dRKU9LMFn7fHANAg2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾，明人物。嘉靖三十五年進士，籍贯昌黎。（中国历代人物传记资料库 CBDB 320451）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SvmiJ43joe5lJbkNl9PEiu
          claim_id: c_vuk8uRFhg3XXhgFaJXK3Y4
          source_id: s_fhL8MbMBGJ3BuphfDYfqwg
          stance: supports
          locator: CBDB:320451
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7HRrN0497MCW8x8IEfwclB
        subject_person_id: p_7aQd3dRKU9LMFn7fHANAg2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VZLf26Mozo1ZFBb1o11yr1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LCwtl9evpvRfVng4fWKwfW
          claim_id: c_7HRrN0497MCW8x8IEfwclB
          source_id: s_fhL8MbMBGJ3BuphfDYfqwg
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VZLf26Mozo1ZFBb1o11yr1
        status: active
        display_name: 王尚直
        merged_into_person_id: null
    - claim:
        id: c_Iky204adOHXsU3ZFo_cfMj
        subject_person_id: p_7aQd3dRKU9LMFn7fHANAg2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GApuhFgjSF5QNTE41oACF6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_thTqLxD9HB9HdIBRHsJ-OK
          claim_id: c_Iky204adOHXsU3ZFo_cfMj
          source_id: s__KpSDvDzdlYNghN6aSb7vf
          stance: supports
          locator: CBDB：兄弟 王尚直（204534）之父／母 王乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚質 与 王尚直 为同胞（CBDB 记「弟」），王尚直 之父／母即 王尚質 之父／母。
          source:
            id: s__KpSDvDzdlYNghN6aSb7vf
            source_type: api_record
            title: 中国历代人物传记资料库：王尚質（CBDB 320455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320455&o=json
            external_identifier: CBDB:320455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GApuhFgjSF5QNTE41oACF6
        status: active
        display_name: 王尚質
        merged_into_person_id: null
    - claim:
        id: c_WxWav8sasjj72l5wD20p6q
        subject_person_id: p_7aQd3dRKU9LMFn7fHANAg2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kHNzKFLG77HYQBxc47diR6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vn0cz_vTICx43SbEeQVIsS
          claim_id: c_WxWav8sasjj72l5wD20p6q
          source_id: s_XJs8EIc18RX6CUFF4RxkYi
          stance: supports
          locator: CBDB：兄弟 王尚直（204534）之父／母 王乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚賢 与 王尚直 为同胞（CBDB 记「弟」），王尚直 之父／母即 王尚賢 之父／母。
          source:
            id: s_XJs8EIc18RX6CUFF4RxkYi
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 320457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320457&o=json
            external_identifier: CBDB:320457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kHNzKFLG77HYQBxc47diR6
        status: active
        display_name: 王尚賢
        merged_into_person_id: null
    - claim:
        id: c__T3SnFtxMKoP8XKtVtC0cj
        subject_person_id: p_7aQd3dRKU9LMFn7fHANAg2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tsRpEduyyq7s3cJb7Ld6TB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_reqJNw5ZR73OyuxeyG7fFX
          claim_id: c__T3SnFtxMKoP8XKtVtC0cj
          source_id: s_mUN2AT7ec7FhajPF1Jp1Ut
          stance: supports
          locator: CBDB：兄弟 王尚直（204534）之父／母 王乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚志 与 王尚直 为同胞（CBDB 记「弟」），王尚直 之父／母即 王尚志 之父／母。
          source:
            id: s_mUN2AT7ec7FhajPF1Jp1Ut
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 320456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320456&o=json
            external_identifier: CBDB:320456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tsRpEduyyq7s3cJb7Ld6TB
        status: active
        display_name: 王尚志
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾 | accepted |
| bio.summary | 王乾，明人物。嘉靖三十五年進士，籍贯昌黎。（中国历代人物传记资料库 CBDB 320451） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VZLf26Mozo1ZFBb1o11yr1 | 王尚直 | accepted |
| children | p_GApuhFgjSF5QNTE41oACF6 | 王尚質 | accepted |
| children | p_kHNzKFLG77HYQBxc47diR6 | 王尚賢 | accepted |
| children | p_tsRpEduyyq7s3cJb7Ld6TB | 王尚志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乾（CBDB 320451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320451&o=json)
- [中国历代人物传记资料库：王尚賢（CBDB 320457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320457&o=json)
- [中国历代人物传记资料库：王尚志（CBDB 320456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320456&o=json)
- [中国历代人物传记资料库：王尚質（CBDB 320455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320455&o=json)
