---
schema: wang-person/v1
id: p_VZLf26Mozo1ZFBb1o11yr1
status: active
merged_into: null
display_name: 王尚直
cbdb_id: 204534
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7rDTZriBLxb8scKaedTzKL
        subject_person_id: p_VZLf26Mozo1ZFBb1o11yr1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚直（生于1528年），史料所见人物。本项目依据《中国历代人物传记资料库：王尚直（CBDB 204534）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_qiQ9EqiR7wXgTyh3nMS8CU
          claim_id: c_7rDTZriBLxb8scKaedTzKL
          source_id: s_5yZ77mF2pvcysTLaudWcfq
          stance: supports
          locator: CBDB:204534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5yZ77mF2pvcysTLaudWcfq
            source_type: api_record
            title: 中国历代人物传记资料库：王尚直（CBDB 204534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204534&o=json
            external_identifier: CBDB:204534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MkaXQHavjZ2AfEBrAc5v6T
        subject_person_id: p_VZLf26Mozo1ZFBb1o11yr1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1528-01-01
            latest: 1528-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FFjuH4YGfY5yVi9Bt89Syk
          claim_id: c_MkaXQHavjZ2AfEBrAc5v6T
          source_id: s_5yZ77mF2pvcysTLaudWcfq
          stance: supports
          locator: CBDB:204534
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1528
          source:
            id: s_5yZ77mF2pvcysTLaudWcfq
            source_type: api_record
            title: 中国历代人物传记资料库：王尚直（CBDB 204534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204534&o=json
            external_identifier: CBDB:204534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EWUHVKEUUko1kv4fz8hSzr
        subject_person_id: p_VZLf26Mozo1ZFBb1o11yr1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Vye6Zk7H7Z8M8rNnjoVpBc
          claim_id: c_EWUHVKEUUko1kv4fz8hSzr
          source_id: s_5yZ77mF2pvcysTLaudWcfq
          stance: supports
          locator: CBDB:204534
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1528
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_7aQd3dRKU9LMFn7fHANAg2
        status: active
        display_name: 王乾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-qvNTcstt7RzwO5aTHmOhf
        subject_person_id: p_3SXVXnXhwsBKFzQhTEhmM9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VZLf26Mozo1ZFBb1o11yr1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lq7Y5EzINQeOdWnh734WWF
          claim_id: c_-qvNTcstt7RzwO5aTHmOhf
          source_id: s_q5ZQxZ3SGTBMwnkKfqr9sk
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q5ZQxZ3SGTBMwnkKfqr9sk
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 320450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320450&o=json
            external_identifier: CBDB:320450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3SXVXnXhwsBKFzQhTEhmM9
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_jPebMKDjuaRvdYdGeKP2hR
        subject_person_id: p_6Jkqyvvg84u7vAFtZgPt4V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VZLf26Mozo1ZFBb1o11yr1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R13sikz4Sh56CmN0jtNRp7
          claim_id: c_jPebMKDjuaRvdYdGeKP2hR
          source_id: s_xHXeSx7ivKFLDEoJq1fXu1
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xHXeSx7ivKFLDEoJq1fXu1
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 320449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320449&o=json
            external_identifier: CBDB:320449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6Jkqyvvg84u7vAFtZgPt4V
        status: active
        display_name: 王英
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王尚直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王尚直（生于1528年），史料所见人物。本项目依据《中国历代人物传记资料库：王尚直（CBDB 204534）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1528年 | accepted |
| name.primary | 王尚直 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7aQd3dRKU9LMFn7fHANAg2 | 王乾 | accepted |
| ancestors | p_3SXVXnXhwsBKFzQhTEhmM9 | 王恭 | accepted |
| ancestors | p_6Jkqyvvg84u7vAFtZgPt4V | 王英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 320450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320450&o=json)
- [中国历代人物传记资料库：王乾（CBDB 320451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320451&o=json)
- [中国历代人物传记资料库：王尚直（CBDB 204534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204534&o=json)
- [中国历代人物传记资料库：王英（CBDB 320449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320449&o=json)
