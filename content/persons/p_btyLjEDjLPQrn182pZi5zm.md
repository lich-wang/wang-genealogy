---
schema: wang-person/v1
id: p_btyLjEDjLPQrn182pZi5zm
status: active
merged_into: null
display_name: 王象賁
cbdb_id: 220269
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UvHNMHHMLevM5cNWrZEP37
        subject_person_id: p_btyLjEDjLPQrn182pZi5zm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王象賁，明人物。隆慶五年進士，籍贯新城，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任戶部員外郎、官生。（中国历代人物传记资料库 CBDB 220269）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eVh4TMRTNgfwbcy171Coip
          claim_id: c_UvHNMHHMLevM5cNWrZEP37
          source_id: s_N76jyG1fhL6Ds4FWDMiRPp
          stance: supports
          locator: CBDB:220269
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N76jyG1fhL6Ds4FWDMiRPp
            source_type: api_record
            title: 中国历代人物传记资料库：王象賁（CBDB 220269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json
            external_identifier: CBDB:220269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XL9YMPr3DeVAcAcvEib7Dx
        subject_person_id: p_btyLjEDjLPQrn182pZi5zm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象賁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KojgQs7sco6ifx4Ut4uLZc
          claim_id: c_XL9YMPr3DeVAcAcvEib7Dx
          source_id: s_N76jyG1fhL6Ds4FWDMiRPp
          stance: supports
          locator: CBDB:220269
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gxFJGyqwVpIjYoqBJ5REjn
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_btyLjEDjLPQrn182pZi5zm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ynmo6WNWuluyYoroilfDkm
          claim_id: c_gxFJGyqwVpIjYoqBJ5REjn
          source_id: s_XUCna2N0Hq78YI7xlBxyi_
          stance: supports
          locator: CBDB：兄弟 王象乾（65764）之父／母 王之垣
          quotation: null
          interpretation_note: 由兄弟关系推断：王象賁 与 王象乾 为同胞（CBDB 记「兄」），王象乾 之父／母即 王象賁 之父／母。
          source:
            id: s_XUCna2N0Hq78YI7xlBxyi_
            source_type: api_record
            title: 中国历代人物传记资料库：王象賁（CBDB 220269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json
            external_identifier: CBDB:220269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
    - claim:
        id: c_pcJgHBzlgR3wRreTA7WD3q
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_btyLjEDjLPQrn182pZi5zm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxDUfWWgEwx_OOthyF13wP
          claim_id: c_pcJgHBzlgR3wRreTA7WD3q
          source_id: s_XUCna2N0Hq78YI7xlBxyi_
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象賁 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象賁 之父／母。
          source:
            id: s_XUCna2N0Hq78YI7xlBxyi_
            source_type: api_record
            title: 中国历代人物传记资料库：王象賁（CBDB 220269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json
            external_identifier: CBDB:220269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
    - claim:
        id: c_q9xT6sH-HSjLjaN3l2t_h8
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_btyLjEDjLPQrn182pZi5zm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XHVb6tY8w-UgBHhOkaTQoj
          claim_id: c_q9xT6sH-HSjLjaN3l2t_h8
          source_id: s_XUCna2N0Hq78YI7xlBxyi_
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象賁 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象賁 之父／母。
          source:
            id: s_XUCna2N0Hq78YI7xlBxyi_
            source_type: api_record
            title: 中国历代人物传记资料库：王象賁（CBDB 220269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json
            external_identifier: CBDB:220269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Lz6m4jFnlcKZtStLP-CB0g
        subject_person_id: p_btyLjEDjLPQrn182pZi5zm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mNbLtBp7NLKek2NHmVT5fp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tJ2wVV-adF0wDqJULJ9tZK
          claim_id: c_Lz6m4jFnlcKZtStLP-CB0g
          source_id: s_XUCna2N0Hq78YI7xlBxyi_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 65764 王象乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XUCna2N0Hq78YI7xlBxyi_
            source_type: api_record
            title: 中国历代人物传记资料库：王象賁（CBDB 220269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json
            external_identifier: CBDB:220269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mNbLtBp7NLKek2NHmVT5fp
        status: active
        display_name: 王象乾
        merged_into_person_id: null
    - claim:
        id: c_FfanOI0TBya-ZDu0_3zCtb
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_btyLjEDjLPQrn182pZi5zm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r7adHbF-PaBPzso9APXB0V
          claim_id: c_FfanOI0TBya-ZDu0_3zCtb
          source_id: s_XUCna2N0Hq78YI7xlBxyi_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XUCna2N0Hq78YI7xlBxyi_
            source_type: api_record
            title: 中国历代人物传记资料库：王象賁（CBDB 220269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json
            external_identifier: CBDB:220269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
    - claim:
        id: c_h4t9FmJQo4iJfFqPmh1n2P
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_btyLjEDjLPQrn182pZi5zm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SOnoK80YPrUTNRbXuqvVNx
          claim_id: c_h4t9FmJQo4iJfFqPmh1n2P
          source_id: s_XUCna2N0Hq78YI7xlBxyi_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126731 王象春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XUCna2N0Hq78YI7xlBxyi_
            source_type: api_record
            title: 中国历代人物传记资料库：王象賁（CBDB 220269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json
            external_identifier: CBDB:220269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
---

# 王象賁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象賁，明人物。隆慶五年進士，籍贯新城，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任戶部員外郎、官生。（中国历代人物传记资料库 CBDB 220269） | accepted |
| name.primary | 王象賁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| parents | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| other | p_mNbLtBp7NLKek2NHmVT5fp | 王象乾 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |
| other | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象賁（CBDB 220269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json)
