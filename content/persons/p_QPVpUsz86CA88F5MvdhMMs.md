---
schema: wang-person/v1
id: p_QPVpUsz86CA88F5MvdhMMs
status: active
merged_into: null
display_name: 王信
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mb1RqF1yYef6QDfytv9nr3
        subject_person_id: p_QPVpUsz86CA88F5MvdhMMs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ngYA87Y7DKzdMYBrhTPQu
          claim_id: c_Mb1RqF1yYef6QDfytv9nr3
          source_id: s_9ibTTzjrAu4vj79be8QmKZ
          stance: supports
          locator: CBDB:331407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331407）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G2QHnt33urvjV9NZvTr2jD
        subject_person_id: p_QPVpUsz86CA88F5MvdhMMs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。嘉靖四十四年進士，籍贯平度州。（中国历代人物传记资料库 CBDB 331407）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JiheKyT3CxevTH2Fw0gAg_
          claim_id: c_G2QHnt33urvjV9NZvTr2jD
          source_id: s_9ibTTzjrAu4vj79be8QmKZ
          stance: supports
          locator: CBDB:331407
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_RCQhQuX7PGCpAotpnDmWLC
        status: active
        display_name: 王湘
        merged_into_person_id: null
    - claim:
        id: c_kxGMBQjxsdx8ZgyFrtBMjA
        subject_person_id: p_QPVpUsz86CA88F5MvdhMMs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DA31QPHC8h5oAWe8ihuu7E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HdtkzQlDAVW0q6Nldtg2Bv
          claim_id: c_kxGMBQjxsdx8ZgyFrtBMjA
          source_id: s_oWGYicmF06UlMD5A7NmYwm
          stance: supports
          locator: CBDB：兄弟 王湘（126704）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王江洧 与 王湘 为同胞（CBDB 记「兄」），王湘 之父／母即 王江洧 之父／母。
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
        id: p_yTNJCTbAwy5mZox1gW4cNa
        status: active
        display_name: 王漢滄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。嘉靖四十四年進士，籍贯平度州。（中国历代人物传记资料库 CBDB 331407） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RCQhQuX7PGCpAotpnDmWLC | 王湘 | accepted |
| children | p_DA31QPHC8h5oAWe8ihuu7E | 王江洧 | accepted |
| children | p_yTNJCTbAwy5mZox1gW4cNa | 王漢滄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漢滄（CBDB 331412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331412&o=json)
- [中国历代人物传记资料库：王江洧（CBDB 331413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331413&o=json)
- [中国历代人物传记资料库：王信（CBDB 331407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331407&o=json)
