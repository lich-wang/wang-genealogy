---
schema: wang-person/v1
id: p_qoAdHHLt7NBY3aQndi4h7A
status: active
merged_into: null
display_name: 王舜卿
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dDVdWgck6zM3GgpgjyPCdU
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3HQwi169xgJ3DCW2XeQx3k
          claim_id: c_dDVdWgck6zM3GgpgjyPCdU
          source_id: s_8VtG5FUfNt117BNgkuCBND
          stance: supports
          locator: CBDB:236475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236475）
          source: &a1
            id: s_8VtG5FUfNt117BNgkuCBND
            source_type: api_record
            title: 中国历代人物传记资料库：王舜卿（CBDB 236475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236475&o=json
            external_identifier: CBDB:236475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_whoTdT8HvypU8NYWvqyCNL
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜卿，明人物。籍贯武進，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 236475）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jifQaeS8NS9G0-2WVOqu2T
          claim_id: c_whoTdT8HvypU8NYWvqyCNL
          source_id: s_8VtG5FUfNt117BNgkuCBND
          stance: supports
          locator: CBDB:236475
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nSRPG0MWFhnhELOkmoSA9T
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRqJXXALZ9Y-k7jrR6MYyf
          claim_id: c_nSRPG0MWFhnhELOkmoSA9T
          source_id: s_8VtG5FUfNt117BNgkuCBND
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
    - claim:
        id: c_xBLQX9nfOpxfxWFtVpjoia
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Z9ovzoyssBJVDk5H5EyEb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VW6NNaOmS6uOSLMDqgFp6c
          claim_id: c_xBLQX9nfOpxfxWFtVpjoia
          source_id: s_7rqXWHYOu9lCOGgtNBe-_Z
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌祖 与 王念祖 为同胞（CBDB 记「兄」），王念祖 之父／母即 王昌祖 之父／母。
          source:
            id: s_7rqXWHYOu9lCOGgtNBe-_Z
            source_type: api_record
            title: 中国历代人物传记资料库：王昌祖（CBDB 236490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236490&o=json
            external_identifier: CBDB:236490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Z9ovzoyssBJVDk5H5EyEb
        status: active
        display_name: 王昌祖
        merged_into_person_id: null
    - claim:
        id: c_Nf0Gya7y5KfFeBkbN6ufqr
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3JGD7aS5CmvcYXYXaFkfKG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AqQig2oAReStH6fRZ_Gfo-
          claim_id: c_Nf0Gya7y5KfFeBkbN6ufqr
          source_id: s_AuwPsmnNo9YG0LEYEuQF3k
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王壎 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王壎 之父／母。
          source:
            id: s_AuwPsmnNo9YG0LEYEuQF3k
            source_type: api_record
            title: 中国历代人物传记资料库：王壎（CBDB 236483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json
            external_identifier: CBDB:236483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3JGD7aS5CmvcYXYXaFkfKG
        status: active
        display_name: 王壎
        merged_into_person_id: null
    - claim:
        id: c_hLJ6S9p-TJqFkOVxdAwioJ
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Aa31PHaJGTUyv8DURAeYhy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DlQP9GrHzxew0R6GBAv27I
          claim_id: c_hLJ6S9p-TJqFkOVxdAwioJ
          source_id: s_s8yZ7pHEr3w2PU_aaRDTDE
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王均 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王均 之父／母。
          source:
            id: s_s8yZ7pHEr3w2PU_aaRDTDE
            source_type: api_record
            title: 中国历代人物传记资料库：王均（CBDB 236484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236484&o=json
            external_identifier: CBDB:236484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Aa31PHaJGTUyv8DURAeYhy
        status: active
        display_name: 王均
        merged_into_person_id: null
    - claim:
        id: c_Cl3TrnNh8gOYPwS00m9OLZ
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E31vnHv2SuVCD2MDQvZaji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2szUI4TluOdVP3J6DtZqMv
          claim_id: c_Cl3TrnNh8gOYPwS00m9OLZ
          source_id: s_s0w4V3pGjHlrajtL6CCST7
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王圻 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王圻 之父／母。
          source:
            id: s_s0w4V3pGjHlrajtL6CCST7
            source_type: api_record
            title: 中国历代人物传记资料库：王圻（CBDB 236486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json
            external_identifier: CBDB:236486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E31vnHv2SuVCD2MDQvZaji
        status: active
        display_name: 王圻
        merged_into_person_id: null
    - claim:
        id: c_rHIRbjoFrqdwQqJyjL6i-C
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EnK4LFPnKth3r1eR5JuCpq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WCaSgPTk33VkG0r9AfUMbW
          claim_id: c_rHIRbjoFrqdwQqJyjL6i-C
          source_id: s_-15ftZYb0WOTCAvKMCOvSh
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王念兹 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王念兹 之父／母。
          source:
            id: s_-15ftZYb0WOTCAvKMCOvSh
            source_type: api_record
            title: 中国历代人物传记资料库：王念兹（CBDB 236485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236485&o=json
            external_identifier: CBDB:236485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EnK4LFPnKth3r1eR5JuCpq
        status: active
        display_name: 王念兹
        merged_into_person_id: null
    - claim:
        id: c_yGtEAfDqLmkb-tpuH6D_zY
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FbJWivDTmB4C48oVuqnyWX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p5D3Ceot25RlL_OUaVudq3
          claim_id: c_yGtEAfDqLmkb-tpuH6D_zY
          source_id: s_WuEgb8OA2UiEEBOslJQ9y4
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王堦 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王堦 之父／母。
          source:
            id: s_WuEgb8OA2UiEEBOslJQ9y4
            source_type: api_record
            title: 中国历代人物传记资料库：王堦（CBDB 236480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236480&o=json
            external_identifier: CBDB:236480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FbJWivDTmB4C48oVuqnyWX
        status: active
        display_name: 王堦
        merged_into_person_id: null
    - claim:
        id: c_okTD_Lxr2RMvX7d9xnQ0ta
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TK5z7oK9MAhdoCe4L4Zqh4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sYqaAJWK5WFxNM7PhXGhKA
          claim_id: c_okTD_Lxr2RMvX7d9xnQ0ta
          source_id: s_R2Za04XagfrLq4tsMrqvUG
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王域 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王域 之父／母。
          source:
            id: s_R2Za04XagfrLq4tsMrqvUG
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 236482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236482&o=json
            external_identifier: CBDB:236482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TK5z7oK9MAhdoCe4L4Zqh4
        status: active
        display_name: 王域
        merged_into_person_id: null
    - claim:
        id: c_NKdIk858cts_bgk000yQCL
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XSpXBQn2ZKmUkzA4VWqkjv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-zCY65Jg9uUqVAY1CC7CcR
          claim_id: c_NKdIk858cts_bgk000yQCL
          source_id: s_XV1HuzO3aFc-JMVXZzKKBy
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王坤 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王坤 之父／母。
          source:
            id: s_XV1HuzO3aFc-JMVXZzKKBy
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 236481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236481&o=json
            external_identifier: CBDB:236481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XSpXBQn2ZKmUkzA4VWqkjv
        status: active
        display_name: 王坤
        merged_into_person_id: null
    - claim:
        id: c_2kGDaXLe5c7zw8HmwN4IFt
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i8QAXrFSTHaYhDd4TMMRoQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zh6ccxRJs0i6f6pGtoV1ZS
          claim_id: c_2kGDaXLe5c7zw8HmwN4IFt
          source_id: s_tAx9WrUrChsSDW4sYnjGDr
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王光祖 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王光祖 之父／母。
          source:
            id: s_tAx9WrUrChsSDW4sYnjGDr
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 236489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236489&o=json
            external_identifier: CBDB:236489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i8QAXrFSTHaYhDd4TMMRoQ
        status: active
        display_name: 王光祖
        merged_into_person_id: null
    - claim:
        id: c_aMdOsF3jAWuCn8XFyswW2L
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jLjXgM3f18nuVW83EfXw7K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GDomcsDYPmZDhW2boBHvHZ
          claim_id: c_aMdOsF3jAWuCn8XFyswW2L
          source_id: s_saSf1K2Erj9drzinWILT7Z
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王墉 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王墉 之父／母。
          source:
            id: s_saSf1K2Erj9drzinWILT7Z
            source_type: api_record
            title: 中国历代人物传记资料库：王墉（CBDB 236488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236488&o=json
            external_identifier: CBDB:236488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jLjXgM3f18nuVW83EfXw7K
        status: active
        display_name: 王墉
        merged_into_person_id: null
    - claim:
        id: c_d3tP0j6EjhZHIMtNDGOajF
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rfnLHuZPH5GnvbaWYy12L8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NBzzDN4hbiueDUc2qiNWFL
          claim_id: c_d3tP0j6EjhZHIMtNDGOajF
          source_id: s_-QVMzd-c_bCEZd9qc-RlDk
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘祖 与 王念祖 为同胞（CBDB 记「兄」），王念祖 之父／母即 王弘祖 之父／母。
          source:
            id: s_-QVMzd-c_bCEZd9qc-RlDk
            source_type: api_record
            title: 中国历代人物传记资料库：王弘祖（CBDB 236491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236491&o=json
            external_identifier: CBDB:236491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rfnLHuZPH5GnvbaWYy12L8
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舜卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜卿 | accepted |
| bio.summary | 王舜卿，明人物。籍贯武進，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 236475） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |
| children | p_2Z9ovzoyssBJVDk5H5EyEb | 王昌祖 | accepted |
| children | p_3JGD7aS5CmvcYXYXaFkfKG | 王壎 | accepted |
| children | p_Aa31PHaJGTUyv8DURAeYhy | 王均 | accepted |
| children | p_E31vnHv2SuVCD2MDQvZaji | 王圻 | accepted |
| children | p_EnK4LFPnKth3r1eR5JuCpq | 王念兹 | accepted |
| children | p_FbJWivDTmB4C48oVuqnyWX | 王堦 | accepted |
| children | p_TK5z7oK9MAhdoCe4L4Zqh4 | 王域 | accepted |
| children | p_XSpXBQn2ZKmUkzA4VWqkjv | 王坤 | accepted |
| children | p_i8QAXrFSTHaYhDd4TMMRoQ | 王光祖 | accepted |
| children | p_jLjXgM3f18nuVW83EfXw7K | 王墉 | accepted |
| children | p_rfnLHuZPH5GnvbaWYy12L8 | 王弘祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌祖（CBDB 236490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236490&o=json)
- [中国历代人物传记资料库：王光祖（CBDB 236489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236489&o=json)
- [中国历代人物传记资料库：王弘祖（CBDB 236491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236491&o=json)
- [中国历代人物传记资料库：王堦（CBDB 236480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236480&o=json)
- [中国历代人物传记资料库：王均（CBDB 236484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236484&o=json)
- [中国历代人物传记资料库：王坤（CBDB 236481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236481&o=json)
- [中国历代人物传记资料库：王念兹（CBDB 236485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236485&o=json)
- [中国历代人物传记资料库：王圻（CBDB 236486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json)
- [中国历代人物传记资料库：王舜卿（CBDB 236475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236475&o=json)
- [中国历代人物传记资料库：王壎（CBDB 236483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json)
- [中国历代人物传记资料库：王墉（CBDB 236488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236488&o=json)
- [中国历代人物传记资料库：王域（CBDB 236482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236482&o=json)
