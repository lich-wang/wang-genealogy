---
schema: wang-person/v1
id: p_RFSk9U6s1PdRrrCWPSXxDg
status: active
merged_into: null
display_name: 王中逵
cbdb_id: 205715
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oR2ge3QzC24TGMpJkgTBqo
        subject_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中逵（生于1534年），明人物。明清進士進士，籍贯宣武衛，入仕進士。（中国历代人物传记资料库 CBDB 205715）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nXbkKmVCtZcuE6lfGp0eYy
          claim_id: c_oR2ge3QzC24TGMpJkgTBqo
          source_id: s_UarE9DY4wM8vnof4DezqJY
          stance: supports
          locator: CBDB:205715
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UarE9DY4wM8vnof4DezqJY
            source_type: api_record
            title: 中国历代人物传记资料库：王中逵（CBDB 205715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205715&o=json
            external_identifier: CBDB:205715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9d7Nd4VMFT3E51prQMDLkb
        subject_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1534-01-01
            latest: 1534-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mJskANGnpDRVWUuLn6LrR1
          claim_id: c_9d7Nd4VMFT3E51prQMDLkb
          source_id: s_UarE9DY4wM8vnof4DezqJY
          stance: supports
          locator: CBDB:205715
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1534
          source:
            id: s_UarE9DY4wM8vnof4DezqJY
            source_type: api_record
            title: 中国历代人物传记资料库：王中逵（CBDB 205715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205715&o=json
            external_identifier: CBDB:205715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dYYJRCe6TAy8HwFaus6zT5
        subject_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ARDBtBvjhRBBDVAwtxaTKm
          claim_id: c_dYYJRCe6TAy8HwFaus6zT5
          source_id: s_UarE9DY4wM8vnof4DezqJY
          stance: supports
          locator: CBDB:205715
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1534
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iDr4LHyOtzuyCVXWoFndqw
        subject_person_id: p_N3FQWHHsU1jDdJrJRdhgNj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZgHttSIB70tFZoPTZsq-u6
          claim_id: c_iDr4LHyOtzuyCVXWoFndqw
          source_id: s_9y9mzPk6krkeAi2LATFi6v
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9y9mzPk6krkeAi2LATFi6v
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 337340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337340&o=json
            external_identifier: CBDB:337340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N3FQWHHsU1jDdJrJRdhgNj
        status: active
        display_name: 王琇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dLYJiOBq-1FAhrPFEeFrJw
        subject_person_id: p_dVFw6z9MbPgDffNmsHfBDJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CpwMJWl0lIFLkzSzuDU343
          claim_id: c_dLYJiOBq-1FAhrPFEeFrJw
          source_id: s_phwVonbwTWc52M9R4jhHbu
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_phwVonbwTWc52M9R4jhHbu
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 337339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337339&o=json
            external_identifier: CBDB:337339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dVFw6z9MbPgDffNmsHfBDJ
        status: active
        display_name: 王振
        merged_into_person_id: null
    - claim:
        id: c_f2jmBmBAqh1akG9ntnLvlb
        subject_person_id: p_W1S164MJeXJnV1PQFWcY3H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tLTR5q7KxdyQetDcGED9Qq
          claim_id: c_f2jmBmBAqh1akG9ntnLvlb
          source_id: s_4AjZFBgFAHE9F1BHbejR99
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4AjZFBgFAHE9F1BHbejR99
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 337338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337338&o=json
            external_identifier: CBDB:337338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W1S164MJeXJnV1PQFWcY3H
        status: active
        display_name: 王通
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_8BCHqCFa1Qd5tzVhjgqJe9
        subject_person_id: p_1ShqaCUpZz7ea4X1Y2Gjoz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3qEfjJ1pvIiFwoYbd0LSZt
          claim_id: c_8BCHqCFa1Qd5tzVhjgqJe9
          source_id: s_tvUazeo5nwTgXbBmjR4-UN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205715 王中逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tvUazeo5nwTgXbBmjR4-UN
            source_type: api_record
            title: 中国历代人物传记资料库：王中立（CBDB 337347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337347&o=json
            external_identifier: CBDB:337347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ShqaCUpZz7ea4X1Y2Gjoz
        status: active
        display_name: 王中立
        merged_into_person_id: null
    - claim:
        id: c_5GlI8myzgOVTtW5q_les9e
        subject_person_id: p_4HCzSpdU7euZ3kPvRDAWWq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-V6U3-E8qufk68M6Uj1IH9
          claim_id: c_5GlI8myzgOVTtW5q_les9e
          source_id: s_1q-vlDy2qpNeIM0df2hpd0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205715 王中逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1q-vlDy2qpNeIM0df2hpd0
            source_type: api_record
            title: 中国历代人物传记资料库：王中行（CBDB 337348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337348&o=json
            external_identifier: CBDB:337348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4HCzSpdU7euZ3kPvRDAWWq
        status: active
        display_name: 王中行
        merged_into_person_id: null
    - claim:
        id: c_1uUDUwF9JPx_xViMpWSW8U
        subject_person_id: p_CCcKrCDVukY43voMZETTGf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uk1TwR1AFZjVmqohYASJJp
          claim_id: c_1uUDUwF9JPx_xViMpWSW8U
          source_id: s_iToaK_gWgmCZcfitM2En0T
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205715 王中逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iToaK_gWgmCZcfitM2En0T
            source_type: api_record
            title: 中国历代人物传记资料库：王中孚（CBDB 337346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337346&o=json
            external_identifier: CBDB:337346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CCcKrCDVukY43voMZETTGf
        status: active
        display_name: 王中孚
        merged_into_person_id: null
    - claim:
        id: c_KRv2Uhym0lAr0AaM2poAhL
        subject_person_id: p_LwoDDyRFCAFF7CrE3F4orq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8NRKn2id5xqcfGpl2Z5UaS
          claim_id: c_KRv2Uhym0lAr0AaM2poAhL
          source_id: s_S4vlMVNDc-erhIk60zaqkH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205715 王中逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S4vlMVNDc-erhIk60zaqkH
            source_type: api_record
            title: 中国历代人物传记资料库：王中和（CBDB 337349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337349&o=json
            external_identifier: CBDB:337349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LwoDDyRFCAFF7CrE3F4orq
        status: active
        display_name: 王中和
        merged_into_person_id: null
---

# 王中逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王中逵（生于1534年），明人物。明清進士進士，籍贯宣武衛，入仕進士。（中国历代人物传记资料库 CBDB 205715） | accepted |
| birth.date | 1534年 | accepted |
| name.primary | 王中逵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N3FQWHHsU1jDdJrJRdhgNj | 王琇 | accepted |
| ancestors | p_dVFw6z9MbPgDffNmsHfBDJ | 王振 | accepted |
| ancestors | p_W1S164MJeXJnV1PQFWcY3H | 王通 | accepted |
| other | p_1ShqaCUpZz7ea4X1Y2Gjoz | 王中立 | accepted |
| other | p_4HCzSpdU7euZ3kPvRDAWWq | 王中行 | accepted |
| other | p_CCcKrCDVukY43voMZETTGf | 王中孚 | accepted |
| other | p_LwoDDyRFCAFF7CrE3F4orq | 王中和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 337338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337338&o=json)
- [中国历代人物传记资料库：王琇（CBDB 337340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337340&o=json)
- [中国历代人物传记资料库：王振（CBDB 337339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337339&o=json)
- [中国历代人物传记资料库：王中孚（CBDB 337346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337346&o=json)
- [中国历代人物传记资料库：王中和（CBDB 337349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337349&o=json)
- [中国历代人物传记资料库：王中逵（CBDB 205715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205715&o=json)
- [中国历代人物传记资料库：王中立（CBDB 337347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337347&o=json)
- [中国历代人物传记资料库：王中行（CBDB 337348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337348&o=json)
