---
schema: wang-person/v1
id: p_yTNJCTbAwy5mZox1gW4cNa
status: active
merged_into: null
display_name: 王漢滄
cbdb_id: 331412
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UmgXX1wT2sHSa2er72sqx1
        subject_person_id: p_yTNJCTbAwy5mZox1gW4cNa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢滄，明人物。嘉靖四十四年進士，籍贯平度州。（中国历代人物传记资料库 CBDB 331412）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gQmY8MxRF9jp_QwATUQrxb
          claim_id: c_UmgXX1wT2sHSa2er72sqx1
          source_id: s_RD44rTKKh2sEvqavPrkFgi
          stance: supports
          locator: CBDB:331412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RD44rTKKh2sEvqavPrkFgi
            source_type: api_record
            title: 中国历代人物传记资料库：王漢滄（CBDB 331412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331412&o=json
            external_identifier: CBDB:331412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_876FSHeUt3QR7h5E5NDrJz
        subject_person_id: p_yTNJCTbAwy5mZox1gW4cNa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢滄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6Sp3kc6rDG3uFUcsT3p4aD
          claim_id: c_876FSHeUt3QR7h5E5NDrJz
          source_id: s_RD44rTKKh2sEvqavPrkFgi
          stance: supports
          locator: CBDB:331412
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8o4IR6CfHhovv3j4daGCSN
        subject_person_id: p_QPVpUsz86CA88F5MvdhMMs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yTNJCTbAwy5mZox1gW4cNa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZYma9rcK82-79rTDWclLFu
          claim_id: c_8o4IR6CfHhovv3j4daGCSN
          source_id: s_1k1-KCPgkmLZV5TAp3J9aK
          stance: supports
          locator: CBDB：兄弟 王湘（126704）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王漢滄 与 王湘 为同胞（CBDB 记「弟」），王湘 之父／母即 王漢滄 之父／母。
          source:
            id: s_1k1-KCPgkmLZV5TAp3J9aK
            source_type: api_record
            title: 中国历代人物传记资料库：王漢滄（CBDB 331412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331412&o=json
            external_identifier: CBDB:331412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QPVpUsz86CA88F5MvdhMMs
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7AfDTjqCng_a6CQ3fnHFUP
        subject_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yTNJCTbAwy5mZox1gW4cNa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0lgFW2XZLco4yDm6xSPn_z
          claim_id: c_7AfDTjqCng_a6CQ3fnHFUP
          source_id: s_1k1-KCPgkmLZV5TAp3J9aK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126704 王湘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1k1-KCPgkmLZV5TAp3J9aK
            source_type: api_record
            title: 中国历代人物传记资料库：王漢滄（CBDB 331412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331412&o=json
            external_identifier: CBDB:331412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RCQhQuX7PGCpAotpnDmWLC
        status: active
        display_name: 王湘
        merged_into_person_id: null
---

# 王漢滄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王漢滄，明人物。嘉靖四十四年進士，籍贯平度州。（中国历代人物传记资料库 CBDB 331412） | accepted |
| name.primary | 王漢滄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QPVpUsz86CA88F5MvdhMMs | 王信 | accepted |
| other | p_RCQhQuX7PGCpAotpnDmWLC | 王湘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漢滄（CBDB 331412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331412&o=json)
