---
schema: wang-person/v1
id: p_LkHA7Eh6TZ3G6EVZV4TAQp
status: active
merged_into: null
display_name: 王斌
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1FdveumCwsgCTCJd5fVeDa
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yfmTyg2LTqoFjnSkACdbKY
          claim_id: c_1FdveumCwsgCTCJd5fVeDa
          source_id: s_5krZFWPxL7Gb15bWQvDxeA
          stance: supports
          locator: CBDB:209360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209360）
          source: &a1
            id: s_5krZFWPxL7Gb15bWQvDxeA
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 209360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209360&o=json
            external_identifier: CBDB:209360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s9fd68vQqURHj2kHo6fYM1
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2RvXc2GnOwqxS3vp1_uDFf
          claim_id: c_s9fd68vQqURHj2kHo6fYM1
          source_id: s_5krZFWPxL7Gb15bWQvDxeA
          stance: supports
          locator: CBDB:209360
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SAeamRJxRHjvWZKx6NaoHn
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rueH5VJGf9EEceCDH3UTnn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MQm7KJ5iixKYLfYg5wk23s
          claim_id: c_SAeamRJxRHjvWZKx6NaoHn
          source_id: s_5krZFWPxL7Gb15bWQvDxeA
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rueH5VJGf9EEceCDH3UTnn
        status: active
        display_name: 王昭
        merged_into_person_id: null
    - claim:
        id: c_jlgr5CUBYqqgoW8uqST1pn
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7VzTA9domDdPkLvFgB5MaX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_67IHLJcqPpwPtrODFzYn-J
          claim_id: c_jlgr5CUBYqqgoW8uqST1pn
          source_id: s_oESFSE1Icum2kY8YyhNzyC
          stance: supports
          locator: CBDB：兄弟 王昭（198949）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王福 与 王昭 为同胞（CBDB 记「兄」），王昭 之父／母即 王福 之父／母。
          source:
            id: s_oESFSE1Icum2kY8YyhNzyC
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 209415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209415&o=json
            external_identifier: CBDB:209415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7VzTA9domDdPkLvFgB5MaX
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_4ZTvjkOQHu4JISEXAQyrxg
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ev2yhJMvCSnSAKwvxKM5SJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5tIYXfFIbqjowTbJXAxoLD
          claim_id: c_4ZTvjkOQHu4JISEXAQyrxg
          source_id: s_cgiR4wPOQjqedsnIJXorrX
          stance: supports
          locator: CBDB：兄弟 王昭（198949）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王興 与 王昭 为同胞（CBDB 记「兄」），王昭 之父／母即 王興 之父／母。
          source:
            id: s_cgiR4wPOQjqedsnIJXorrX
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 209404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209404&o=json
            external_identifier: CBDB:209404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ev2yhJMvCSnSAKwvxKM5SJ
        status: active
        display_name: 王興
        merged_into_person_id: null
    - claim:
        id: c_7mU_RqtcOuGKoDhLxc-Vb9
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j9W8U7ZHYSvBLCwCZE36Ez
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c_UijbG_s0bswuTb6i6xGi
          claim_id: c_7mU_RqtcOuGKoDhLxc-Vb9
          source_id: s_EkoF0HEhftVbVpD4pWIkC3
          stance: supports
          locator: CBDB：兄弟 王昭（198949）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王全 与 王昭 为同胞（CBDB 记「兄」），王昭 之父／母即 王全 之父／母。
          source:
            id: s_EkoF0HEhftVbVpD4pWIkC3
            source_type: api_record
            title: 中国历代人物传记资料库：王全（CBDB 209426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209426&o=json
            external_identifier: CBDB:209426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j9W8U7ZHYSvBLCwCZE36Ez
        status: active
        display_name: 王全
        merged_into_person_id: null
    - claim:
        id: c_C5ccpEFRc_RvisrQj8fA_C
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sLQvjJt611mPrcp7NCFrW1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yauAcbXAwQAfUI5e9S6dAu
          claim_id: c_C5ccpEFRc_RvisrQj8fA_C
          source_id: s_M13nitQwZys2CsfZIh_wnR
          stance: supports
          locator: CBDB：兄弟 王昭（198949）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王茂 与 王昭 为同胞（CBDB 记「兄」），王昭 之父／母即 王茂 之父／母。
          source:
            id: s_M13nitQwZys2CsfZIh_wnR
            source_type: api_record
            title: 中国历代人物传记资料库：王茂（CBDB 209393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209393&o=json
            external_identifier: CBDB:209393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sLQvjJt611mPrcp7NCFrW1
        status: active
        display_name: 王茂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | 王斌，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rueH5VJGf9EEceCDH3UTnn | 王昭 | accepted |
| children | p_7VzTA9domDdPkLvFgB5MaX | 王福 | accepted |
| children | p_Ev2yhJMvCSnSAKwvxKM5SJ | 王興 | accepted |
| children | p_j9W8U7ZHYSvBLCwCZE36Ez | 王全 | accepted |
| children | p_sLQvjJt611mPrcp7NCFrW1 | 王茂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 209360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209360&o=json)
- [中国历代人物传记资料库：王福（CBDB 209415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209415&o=json)
- [中国历代人物传记资料库：王茂（CBDB 209393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209393&o=json)
- [中国历代人物传记资料库：王全（CBDB 209426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209426&o=json)
- [中国历代人物传记资料库：王興（CBDB 209404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209404&o=json)
