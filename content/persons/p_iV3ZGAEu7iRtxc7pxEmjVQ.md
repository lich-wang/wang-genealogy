---
schema: wang-person/v1
id: p_iV3ZGAEu7iRtxc7pxEmjVQ
status: active
merged_into: null
display_name: 王宴
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GKdb4nNttygoFke5RsK7Cm
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7GBJWsPxvMqAbiRFLiKaM4
          claim_id: c_GKdb4nNttygoFke5RsK7Cm
          source_id: s_sAqCF7taW9xBh2FsGdKucb
          stance: supports
          locator: CBDB:252246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252246）
          source: &a1
            id: s_sAqCF7taW9xBh2FsGdKucb
            source_type: api_record
            title: 中国历代人物传记资料库：王宴（CBDB 252246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252246&o=json
            external_identifier: CBDB:252246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GFJGgJNbkLUDMy442ELikA
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宴，明人物。景泰五年進士，籍贯南溪。（中国历代人物传记资料库 CBDB 252246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2UMSU5PAlwrQ7V6jyottB7
          claim_id: c_GFJGgJNbkLUDMy442ELikA
          source_id: s_sAqCF7taW9xBh2FsGdKucb
          stance: supports
          locator: CBDB:252246
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_sw1MsqoT6Sd32aAF_z1O3g
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xRgAFF1QF89F297F8SmuRt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ruV-9WH0yVJppzCjBMasRM
          claim_id: c_sw1MsqoT6Sd32aAF_z1O3g
          source_id: s_sAqCF7taW9xBh2FsGdKucb
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xRgAFF1QF89F297F8SmuRt
        status: active
        display_name: 王穀
        merged_into_person_id: null
    - claim:
        id: c_nyYZ86Uxkmmzrz5istm6NR
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2F1WgmQC7jwQ2DgZhQXWJf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ofSDZ-WjJnX8U_C2Sg6qtw
          claim_id: c_nyYZ86Uxkmmzrz5istm6NR
          source_id: s_28klMb2vBwMDSnT4XqkTQ-
          stance: supports
          locator: CBDB：兄弟 王穀（198288）之父／母 王宴
          quotation: null
          interpretation_note: 由兄弟关系推断：王菽 与 王穀 为同胞（CBDB 记「兄」），王穀 之父／母即 王菽 之父／母。
          source:
            id: s_28klMb2vBwMDSnT4XqkTQ-
            source_type: api_record
            title: 中国历代人物传记资料库：王菽（CBDB 252324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252324&o=json
            external_identifier: CBDB:252324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2F1WgmQC7jwQ2DgZhQXWJf
        status: active
        display_name: 王菽
        merged_into_person_id: null
    - claim:
        id: c_iyt_xOhMVK3PdaH5VF34zp
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6qxFfRnLJboWpTNND2x8iJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6MwK3G7CzvVrWPApAVI0S4
          claim_id: c_iyt_xOhMVK3PdaH5VF34zp
          source_id: s_cwnpSR5NVN_p_FkKbxyO6z
          stance: supports
          locator: CBDB：兄弟 王穀（198288）之父／母 王宴
          quotation: null
          interpretation_note: 由兄弟关系推断：王符 与 王穀 为同胞（CBDB 记「兄」），王穀 之父／母即 王符 之父／母。
          source:
            id: s_cwnpSR5NVN_p_FkKbxyO6z
            source_type: api_record
            title: 中国历代人物传记资料库：王符（CBDB 252290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252290&o=json
            external_identifier: CBDB:252290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6qxFfRnLJboWpTNND2x8iJ
        status: active
        display_name: 王符
        merged_into_person_id: null
    - claim:
        id: c_o1wBYD9wDMPB1XvSsFG6cz
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JLp2cJV9UDPXcdhx7Hi5Gp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__wkYAY_mD2j7brwyC_iT0E
          claim_id: c_o1wBYD9wDMPB1XvSsFG6cz
          source_id: s_L8Cz8xViOWI0me6U1Yh5Ys
          stance: supports
          locator: CBDB：兄弟 王穀（198288）之父／母 王宴
          quotation: null
          interpretation_note: 由兄弟关系推断：王稷 与 王穀 为同胞（CBDB 记「兄」），王穀 之父／母即 王稷 之父／母。
          source:
            id: s_L8Cz8xViOWI0me6U1Yh5Ys
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 252313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252313&o=json
            external_identifier: CBDB:252313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JLp2cJV9UDPXcdhx7Hi5Gp
        status: active
        display_name: 王稷
        merged_into_person_id: null
    - claim:
        id: c_zWhczXqEIG9LAJP4_Uqwt8
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_etQPLicaZnFHFQDtpCXzZq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MsYjm7-CvKOnkG8zeIbbFU
          claim_id: c_zWhczXqEIG9LAJP4_Uqwt8
          source_id: s_9aHJD8GbbMzKivlHxodRZ2
          stance: supports
          locator: CBDB：兄弟 王穀（198288）之父／母 王宴
          quotation: null
          interpretation_note: 由兄弟关系推断：王節 与 王穀 为同胞（CBDB 记「兄」），王穀 之父／母即 王節 之父／母。
          source:
            id: s_9aHJD8GbbMzKivlHxodRZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 252302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252302&o=json
            external_identifier: CBDB:252302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_etQPLicaZnFHFQDtpCXzZq
        status: active
        display_name: 王節
        merged_into_person_id: null
    - claim:
        id: c_7yluJGxFj6uvvOkIKu-Unm
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qFupMgJC6vXJ4bTwnG4fEk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZeJA9iC2IwtC4npYDa1nRO
          claim_id: c_7yluJGxFj6uvvOkIKu-Unm
          source_id: s_U8H5Ge1K6fqwwoN8MIVwkn
          stance: supports
          locator: CBDB：兄弟 王穀（198288）之父／母 王宴
          quotation: null
          interpretation_note: 由兄弟关系推断：王粟 与 王穀 为同胞（CBDB 记「兄」），王穀 之父／母即 王粟 之父／母。
          source:
            id: s_U8H5Ge1K6fqwwoN8MIVwkn
            source_type: api_record
            title: 中国历代人物传记资料库：王粟（CBDB 252279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252279&o=json
            external_identifier: CBDB:252279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qFupMgJC6vXJ4bTwnG4fEk
        status: active
        display_name: 王粟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宴 | accepted |
| bio.summary | 王宴，明人物。景泰五年進士，籍贯南溪。（中国历代人物传记资料库 CBDB 252246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xRgAFF1QF89F297F8SmuRt | 王穀 | accepted |
| children | p_2F1WgmQC7jwQ2DgZhQXWJf | 王菽 | accepted |
| children | p_6qxFfRnLJboWpTNND2x8iJ | 王符 | accepted |
| children | p_JLp2cJV9UDPXcdhx7Hi5Gp | 王稷 | accepted |
| children | p_etQPLicaZnFHFQDtpCXzZq | 王節 | accepted |
| children | p_qFupMgJC6vXJ4bTwnG4fEk | 王粟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王符（CBDB 252290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252290&o=json)
- [中国历代人物传记资料库：王稷（CBDB 252313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252313&o=json)
- [中国历代人物传记资料库：王節（CBDB 252302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252302&o=json)
- [中国历代人物传记资料库：王菽（CBDB 252324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252324&o=json)
- [中国历代人物传记资料库：王粟（CBDB 252279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252279&o=json)
- [中国历代人物传记资料库：王宴（CBDB 252246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252246&o=json)
