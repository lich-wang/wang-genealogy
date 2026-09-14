---
schema: wang-person/v1
id: p_RCQhQuX7PGCpAotpnDmWLC
status: active
merged_into: null
display_name: 王湘
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4UEUKeRNh3vYQ6AHZgjRbu
        subject_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UD8Yu1AE4P4LB61zhBvLkD
          claim_id: c_4UEUKeRNh3vYQ6AHZgjRbu
          source_id: s_tgMjMSG5tSMGCFmBHRGq9x
          stance: supports
          locator: CBDB:126704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126704）
          source: &a1
            id: s_tgMjMSG5tSMGCFmBHRGq9x
            source_type: api_record
            title: 中国历代人物传记资料库：王湘（CBDB 126704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126704&o=json
            external_identifier: CBDB:126704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZjAw9omzDkeR5ZTGvjG9ZM
        subject_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ctz1GnuUASNDVrCGHKH8sC
          claim_id: c_ZjAw9omzDkeR5ZTGvjG9ZM
          source_id: s_tgMjMSG5tSMGCFmBHRGq9x
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
        id: c_Nei2oE3L9AFhMY9ML7rmXr
        subject_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1593年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDBUQ8ykLK4PRAX8myhsbW
          claim_id: c_Nei2oE3L9AFhMY9ML7rmXr
          source_id: s_tgMjMSG5tSMGCFmBHRGq9x
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
        id: c_ZJqThTrU4oSpPtGZkSWNpA
        subject_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘（1528年—1593年），明人物。明清進士進士，籍贯平度州，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126704）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_govh8HL_mrsse38TbiB_qJ
          claim_id: c_ZJqThTrU4oSpPtGZkSWNpA
          source_id: s_tgMjMSG5tSMGCFmBHRGq9x
          stance: supports
          locator: CBDB:126704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2hyZ4N2zHF8hkWspUW3Zuu
        subject_person_id: p_QPVpUsz86CA88F5MvdhMMs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y8PjJYh6TzChhppnqEw8ZZ
          claim_id: c_2hyZ4N2zHF8hkWspUW3Zuu
          source_id: s_9ibTTzjrAu4vj79be8QmKZ
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百一十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9ibTTzjrAu4vj79be8QmKZ
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 331407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331407&o=json
            external_identifier: CBDB:331407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QPVpUsz86CA88F5MvdhMMs
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_YTuwchK7Um_IE-wF89kJpt
        subject_person_id: p_4gLPUPHoYUNV5YPHPEmiwx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKYjWGunERrPHyzSqYs8nX
          claim_id: c_YTuwchK7Um_IE-wF89kJpt
          source_id: s_6FihFwgL24JFfPdCRm1o5y
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百一十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6FihFwgL24JFfPdCRm1o5y
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 331406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331406&o=json
            external_identifier: CBDB:331406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4gLPUPHoYUNV5YPHPEmiwx
        status: active
        display_name: 王宣
        merged_into_person_id: null
    - claim:
        id: c_mRTj6s8jewULB9NZ4bpDKy
        subject_person_id: p_GstLTQBoJmwXHptc7U9XE8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f7Ph-rZe8INk9uTef6bQSr
          claim_id: c_mRTj6s8jewULB9NZ4bpDKy
          source_id: s_nmjPWSgfQNBEu1Kw7299rc
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百一十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nmjPWSgfQNBEu1Kw7299rc
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 331405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331405&o=json
            external_identifier: CBDB:331405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GstLTQBoJmwXHptc7U9XE8
        status: active
        display_name: 王寧
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_mqLEwGGglkvnbDLo1FbUoi
        subject_person_id: p_DA31QPHC8h5oAWe8ihuu7E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7oeu11vWVw6XlCCTbM7n6
          claim_id: c_mqLEwGGglkvnbDLo1FbUoi
          source_id: s_oWGYicmF06UlMD5A7NmYwm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126704 王湘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oWGYicmF06UlMD5A7NmYwm
            source_type: api_record
            title: 中国历代人物传记资料库：王江洧（CBDB 331413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331413&o=json
            external_identifier: CBDB:331413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DA31QPHC8h5oAWe8ihuu7E
        status: active
        display_name: 王江洧
        merged_into_person_id: null
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
        id: p_yTNJCTbAwy5mZox1gW4cNa
        status: active
        display_name: 王漢滄
        merged_into_person_id: null
---

# 王湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湘 | accepted |
| birth.date | 1528年 | accepted |
| death.date | 1593年 | accepted |
| bio.summary | 王湘（1528年—1593年），明人物。明清進士進士，籍贯平度州，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QPVpUsz86CA88F5MvdhMMs | 王信 | accepted |
| ancestors | p_4gLPUPHoYUNV5YPHPEmiwx | 王宣 | accepted |
| ancestors | p_GstLTQBoJmwXHptc7U9XE8 | 王寧 | accepted |
| other | p_DA31QPHC8h5oAWe8ihuu7E | 王江洧 | accepted |
| other | p_yTNJCTbAwy5mZox1gW4cNa | 王漢滄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漢滄（CBDB 331412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331412&o=json)
- [中国历代人物传记资料库：王江洧（CBDB 331413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331413&o=json)
- [中国历代人物传记资料库：王寧（CBDB 331405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331405&o=json)
- [中国历代人物传记资料库：王湘（CBDB 126704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126704&o=json)
- [中国历代人物传记资料库：王信（CBDB 331407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331407&o=json)
- [中国历代人物传记资料库：王宣（CBDB 331406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331406&o=json)
