---
schema: wang-person/v1
id: p_JHqi6d1vvqiQLspWHkbHn9
status: active
merged_into: null
display_name: 王宷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TmHkozCzFrMTqTDjNRrvcR
        subject_person_id: p_JHqi6d1vvqiQLspWHkbHn9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pQWTK1XX6i6dsxCAGPLPgC
          claim_id: c_TmHkozCzFrMTqTDjNRrvcR
          source_id: s_nBibG56KMyxWwXRtqiaV8A
          stance: supports
          locator: CBDB:326394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326394）
          source: &a1
            id: s_nBibG56KMyxWwXRtqiaV8A
            source_type: api_record
            title: 中国历代人物传记资料库：王宷（CBDB 326394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326394&o=json
            external_identifier: CBDB:326394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tHv1qkNzC5m6G9Z96BnHDB
        subject_person_id: p_JHqi6d1vvqiQLspWHkbHn9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宷，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326394）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EMP8mt_gush8oh_0JA24e0
          claim_id: c_tHv1qkNzC5m6G9Z96BnHDB
          source_id: s_nBibG56KMyxWwXRtqiaV8A
          stance: supports
          locator: CBDB:326394
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wVwF7Lo_vYh8ytddOtWIIa
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JHqi6d1vvqiQLspWHkbHn9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YX0fkh2RilFE54CNQrx8_9
          claim_id: c_wVwF7Lo_vYh8ytddOtWIIa
          source_id: s_0uvJNNoKAgcT7aUcutAPjl
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王宷 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王宷 之父／母。
          source:
            id: s_0uvJNNoKAgcT7aUcutAPjl
            source_type: api_record
            title: 中国历代人物传记资料库：王宷（CBDB 326394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326394&o=json
            external_identifier: CBDB:326394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mxcPanzqKKzAH8GE9Zk1aa
        status: active
        display_name: 王絹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ADYwPFe8s2RR-z61YZuXDn
        subject_person_id: p_JHqi6d1vvqiQLspWHkbHn9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e2ZIjLAVmbfbbLnLGY0DWD
          claim_id: c_ADYwPFe8s2RR-z61YZuXDn
          source_id: s_0uvJNNoKAgcT7aUcutAPjl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204956 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0uvJNNoKAgcT7aUcutAPjl
            source_type: api_record
            title: 中国历代人物传记资料库：王宷（CBDB 326394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326394&o=json
            external_identifier: CBDB:326394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zRoaCHSKLmhLA6JAg13u3d
        status: active
        display_name: 王宜
        merged_into_person_id: null
---

# 王宷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宷 | accepted |
| bio.summary | 王宷，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326394） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mxcPanzqKKzAH8GE9Zk1aa | 王絹 | accepted |
| other | p_zRoaCHSKLmhLA6JAg13u3d | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宷（CBDB 326394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326394&o=json)
