---
schema: wang-person/v1
id: p_51Pca5wdng4NB9T2FpYuFX
status: active
merged_into: null
display_name: 王可
cbdb_id: 334081
revision: 12
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j3qAqP7Nxt1fQYfSdKGBgU
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可，明人物。隆慶二年進士，籍贯南陽，曾任通判。（中国历代人物传记资料库 CBDB 334081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_KLGBefr9jLyLCRZAbmL1Du
          claim_id: c_j3qAqP7Nxt1fQYfSdKGBgU
          source_id: s_6kSWPjkGQP4kypDPpgbhbH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_6kSWPjkGQP4kypDPpgbhbH
            source_type: api_record
            title: 维基数据：王可（Q45603634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603634
            external_identifier: Q45603634
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.193Z
            metadata_json: null
        - id: cs_intjVaKIu-K-oFvcn1lIio
          claim_id: c_j3qAqP7Nxt1fQYfSdKGBgU
          source_id: s_4hULzQvG2j4W8T4NELP39w
          stance: supports
          locator: CBDB:334081
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4hULzQvG2j4W8T4NELP39w
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王可（334081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334081&o=json
            external_identifier: CBDB:334081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:12.368Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1F7CetCkEcwEVeJMJAM3Li
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2A4hX334FmTeox52X1eJB5
          claim_id: c_1F7CetCkEcwEVeJMJAM3Li
          source_id: s_6kSWPjkGQP4kypDPpgbhbH
          stance: supports
          locator: Q45603634
          quotation: null
          interpretation_note: null
          source:
            id: s_6kSWPjkGQP4kypDPpgbhbH
            source_type: api_record
            title: 维基数据：王可（Q45603634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603634
            external_identifier: Q45603634
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.193Z
            metadata_json: null
        - id: cs_VQXwzuGY6QeLXfDgT3Q9Mn
          claim_id: c_1F7CetCkEcwEVeJMJAM3Li
          source_id: s_4hULzQvG2j4W8T4NELP39w
          stance: supports
          locator: Q45603634
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xk4KPJv1taqGwjwcLRVkK3
        subject_person_id: p_Wdd9WrspYiEE72NGMNp75f
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_51Pca5wdng4NB9T2FpYuFX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5bKwbYsaBhXwYXKD11QJRF
          claim_id: c_xk4KPJv1taqGwjwcLRVkK3
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_g1q73gKvB6bGzszoP8GtLg
            source_type: api_record
            title: 维基数据：王鸿儒（Q15933067）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933067
            external_identifier: Q15933067
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_WJD3g5r1TQjJKbqSb7GToZ
          claim_id: c_xk4KPJv1taqGwjwcLRVkK3
          source_id: s_6kSWPjkGQP4kypDPpgbhbH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6kSWPjkGQP4kypDPpgbhbH
            source_type: api_record
            title: 维基数据：王可（Q45603634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603634
            external_identifier: Q45603634
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.193Z
            metadata_json: null
      object_person:
        id: p_Wdd9WrspYiEE72NGMNp75f
        status: active
        display_name: 王鸿儒
        merged_into_person_id: null
  children:
    - claim:
        id: c_qw9AU9TFUn14MU8QP5HAkn
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n2Z6nP1dxxiDpw29aMQmPh
          claim_id: c_qw9AU9TFUn14MU8QP5HAkn
          source_id: s_6kSWPjkGQP4kypDPpgbhbH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_P5DMDvn3JXjq59yaCUZF2P
          claim_id: c_qw9AU9TFUn14MU8QP5HAkn
          source_id: s_4aAHVT5jB6WtTJCwPKgxKa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4aAHVT5jB6WtTJCwPKgxKa
            source_type: api_record
            title: 维基数据：王汝鲁（Q45577422）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45577422
            external_identifier: Q45577422
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:07.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B1%9D%E9%AD%AF
        - id: cs_1FqW4Udt1VoYER6vpQVeyG
          claim_id: c_qw9AU9TFUn14MU8QP5HAkn
          source_id: s_4hULzQvG2j4W8T4NELP39w
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：隆慶二年進士登科錄:一卷
          source: *a1
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
    - claim:
        id: c_zjzVgu4Ti1sr8p_FVlbsS1
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Ci7qL1s3qigXkMm76Urwd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CpAcNALaqNUkRZx-rHcGax
          claim_id: c_zjzVgu4Ti1sr8p_FVlbsS1
          source_id: s_8NJYjvRzkwVH6FLeqZnkuG
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王念祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王念祖 之父／母。
          source:
            id: s_8NJYjvRzkwVH6FLeqZnkuG
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 334096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334096&o=json
            external_identifier: CBDB:334096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Ci7qL1s3qigXkMm76Urwd
        status: active
        display_name: 王念祖
        merged_into_person_id: null
    - claim:
        id: c_hKPTR3GG1EwqNs4z2Q5vZQ
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Dpq8kjKgyyFFtwkDVGZtY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-NWFI_cNvzZ_-vEh4gSoWI
          claim_id: c_hKPTR3GG1EwqNs4z2Q5vZQ
          source_id: s_wG9BY6AsA0FJhHQj93Pr1R
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝愚 与 王汝鲁 为同胞（CBDB 记「弟」），王汝鲁 之父／母即 王汝愚 之父／母。
          source:
            id: s_wG9BY6AsA0FJhHQj93Pr1R
            source_type: api_record
            title: 中国历代人物传记资料库：王汝愚（CBDB 334087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334087&o=json
            external_identifier: CBDB:334087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Dpq8kjKgyyFFtwkDVGZtY
        status: active
        display_name: 王汝愚
        merged_into_person_id: null
    - claim:
        id: c_dPlY0Pk4p__Cj9UCUg5qFW
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_74HTjLiVA9smKoDrQtJHxY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eFlZJFZR5WDT0RtGKYvL6A
          claim_id: c_dPlY0Pk4p__Cj9UCUg5qFW
          source_id: s_nvrVllNucj7OaihtUEjJby
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王述祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王述祖 之父／母。
          source:
            id: s_nvrVllNucj7OaihtUEjJby
            source_type: api_record
            title: 中国历代人物传记资料库：王述祖（CBDB 334091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334091&o=json
            external_identifier: CBDB:334091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_74HTjLiVA9smKoDrQtJHxY
        status: active
        display_name: 王述祖
        merged_into_person_id: null
    - claim:
        id: c_vs7yInnOpnzWUsWM89lJwK
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M1GRMmmB6zw7T9HZbBDcti
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_epEiEpgw0YkHo0ADyw0vtB
          claim_id: c_vs7yInnOpnzWUsWM89lJwK
          source_id: s_73GlavPRTSDEPGDyyCa5-t
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝直 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王汝直 之父／母。
          source:
            id: s_73GlavPRTSDEPGDyyCa5-t
            source_type: api_record
            title: 中国历代人物传记资料库：王汝直（CBDB 334089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334089&o=json
            external_identifier: CBDB:334089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M1GRMmmB6zw7T9HZbBDcti
        status: active
        display_name: 王汝直
        merged_into_person_id: null
    - claim:
        id: c_mr_H4WFI655eiD8lBhTqbQ
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q6fFeQW2ehU9rtmya4vkWx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8iml9CwP4mODX002-THI3
          claim_id: c_mr_H4WFI655eiD8lBhTqbQ
          source_id: s_PjDbxbn8M92nv5YT7ITeC6
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王思祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王思祖 之父／母。
          source:
            id: s_PjDbxbn8M92nv5YT7ITeC6
            source_type: api_record
            title: 中国历代人物传记资料库：王思祖（CBDB 334095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334095&o=json
            external_identifier: CBDB:334095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q6fFeQW2ehU9rtmya4vkWx
        status: active
        display_name: 王思祖
        merged_into_person_id: null
    - claim:
        id: c_wNbV5f4fozOekzKXTF7kPf
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R8QHqGMyorRKWv1Gp9HVpy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o0hKH7w0v6mm3EixpThIK9
          claim_id: c_wNbV5f4fozOekzKXTF7kPf
          source_id: s_49UKC_ZOy-0ixXpQemNOIz
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王承祖 与 王汝鲁 为同胞（CBDB 记「弟」），王汝鲁 之父／母即 王承祖 之父／母。
          source:
            id: s_49UKC_ZOy-0ixXpQemNOIz
            source_type: api_record
            title: 中国历代人物传记资料库：王承祖（CBDB 334086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334086&o=json
            external_identifier: CBDB:334086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R8QHqGMyorRKWv1Gp9HVpy
        status: active
        display_name: 王承祖
        merged_into_person_id: null
    - claim:
        id: c_rfm1YvmIQT7R52tMm3EOIb
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S4UVHUd3PZcoSkCpN5ckg4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kTiPXT2pmW7nTAjb0P5RH6
          claim_id: c_rfm1YvmIQT7R52tMm3EOIb
          source_id: s_cUCN1bS5LtY_cysJSfD6jT
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王光祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王光祖 之父／母。
          source:
            id: s_cUCN1bS5LtY_cysJSfD6jT
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 334090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334090&o=json
            external_identifier: CBDB:334090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S4UVHUd3PZcoSkCpN5ckg4
        status: active
        display_name: 王光祖
        merged_into_person_id: null
    - claim:
        id: c_GtHozoW9d6HP_p7GWmP9L0
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dAWNGSC4UZ3S5otnkB8F6j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yum0GNapz1dIwzq1g1fzUw
          claim_id: c_GtHozoW9d6HP_p7GWmP9L0
          source_id: s_PaEifW8jZ2YBH5XBG0c1zd
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王某祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王某祖 之父／母。
          source:
            id: s_PaEifW8jZ2YBH5XBG0c1zd
            source_type: api_record
            title: 中国历代人物传记资料库：王某祖（CBDB 334093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334093&o=json
            external_identifier: CBDB:334093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dAWNGSC4UZ3S5otnkB8F6j
        status: active
        display_name: 王某祖
        merged_into_person_id: null
    - claim:
        id: c_7AMgNLrCe4OTwpqcrVT9Ci
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpHcMFX8XKT64kHX5tREso
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5gJQ50GxKY_lQWqjKHUMy9
          claim_id: c_7AMgNLrCe4OTwpqcrVT9Ci
          source_id: s_3uKbG8tM9ZJIsKiGuUtWhp
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王率祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王率祖 之父／母。
          source:
            id: s_3uKbG8tM9ZJIsKiGuUtWhp
            source_type: api_record
            title: 中国历代人物传记资料库：王率祖（CBDB 334094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334094&o=json
            external_identifier: CBDB:334094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpHcMFX8XKT64kHX5tREso
        status: active
        display_name: 王率祖
        merged_into_person_id: null
    - claim:
        id: c_gJkn_PNadsFu1Lqt-GUOCR
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sXjzq1eE3XnKjFre3JXwb9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3LtIMIOLIosDqP8hENpslG
          claim_id: c_gJkn_PNadsFu1Lqt-GUOCR
          source_id: s_3flUmUTm-GW2-ezdJHrKmi
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王法祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王法祖 之父／母。
          source:
            id: s_3flUmUTm-GW2-ezdJHrKmi
            source_type: api_record
            title: 中国历代人物传记资料库：王法祖（CBDB 334092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334092&o=json
            external_identifier: CBDB:334092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sXjzq1eE3XnKjFre3JXwb9
        status: active
        display_name: 王法祖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王可，明人物。隆慶二年進士，籍贯南陽，曾任通判。（中国历代人物传记资料库 CBDB 334081） | accepted |
| name.primary | 王可 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wdd9WrspYiEE72NGMNp75f | 王鸿儒 | accepted |
| children | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |
| children | p_1Ci7qL1s3qigXkMm76Urwd | 王念祖 | accepted |
| children | p_2Dpq8kjKgyyFFtwkDVGZtY | 王汝愚 | accepted |
| children | p_74HTjLiVA9smKoDrQtJHxY | 王述祖 | accepted |
| children | p_M1GRMmmB6zw7T9HZbBDcti | 王汝直 | accepted |
| children | p_Q6fFeQW2ehU9rtmya4vkWx | 王思祖 | accepted |
| children | p_R8QHqGMyorRKWv1Gp9HVpy | 王承祖 | accepted |
| children | p_S4UVHUd3PZcoSkCpN5ckg4 | 王光祖 | accepted |
| children | p_dAWNGSC4UZ3S5otnkB8F6j | 王某祖 | accepted |
| children | p_hpHcMFX8XKT64kHX5tREso | 王率祖 | accepted |
| children | p_sXjzq1eE3XnKjFre3JXwb9 | 王法祖 | accepted |

## 外部来源

- [维基数据：王鸿儒（Q15933067）](https://www.wikidata.org/wiki/Q15933067)
- [维基数据：王可（Q45603634）](https://www.wikidata.org/wiki/Q45603634)
- [维基数据：王汝鲁（Q45577422）](https://www.wikidata.org/wiki/Q45577422)
- [中国历代人物传记资料库：王承祖（CBDB 334086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334086&o=json)
- [中国历代人物传记资料库：王法祖（CBDB 334092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334092&o=json)
- [中国历代人物传记资料库：王光祖（CBDB 334090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334090&o=json)
- [中国历代人物传记资料库：王率祖（CBDB 334094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334094&o=json)
- [中国历代人物传记资料库：王某祖（CBDB 334093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334093&o=json)
- [中国历代人物传记资料库：王念祖（CBDB 334096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334096&o=json)
- [中国历代人物传记资料库：王汝愚（CBDB 334087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334087&o=json)
- [中国历代人物传记资料库：王汝直（CBDB 334089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334089&o=json)
- [中国历代人物传记资料库：王述祖（CBDB 334091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334091&o=json)
- [中国历代人物传记资料库：王思祖（CBDB 334095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334095&o=json)
- [CBDB 中国历代人物传记资料库：王可（334081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334081&o=json)
