---
schema: wang-person/v1
id: p_5r1wESpKqnWgbhR5AChbjE
status: active
merged_into: null
display_name: 王之猷
cbdb_id: 126467
revision: 26
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aafhWKf46nRS1qUafEz9iC
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之猷（1549年—1599年），字爾嘉，號栢峯，山東濟南府新城縣人，匠籍，明朝政治人物。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ER4sGwhYyoDvwUZFMet6id
          claim_id: c_aafhWKf46nRS1qUafEz9iC
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4omftLuK67wUsCAnVU8byp
            source_type: api_record
            title: 维基数据：王之猷（Q16075308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075308
            external_identifier: Q16075308
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
        - id: cs_pnLi9YmBd8kiPgtIutNeUL
          claim_id: c_aafhWKf46nRS1qUafEz9iC
          source_id: s_2ZmnKG6DOrt129kfYNZT49
          stance: supports
          locator: 导言
          quotation: 王之猷（1549年—1599年），字爾嘉，號栢峯，山東濟南府新城
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_2ZmnKG6DOrt129kfYNZT49
            source_type: website
            title: 中文维基百科：王之猷
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
            external_identifier: Q16075308
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kfFtmAmX2kBGVt5VzrBscd
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之猷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9qyKVRqNAmFBZB2CczoMUz
          claim_id: c_kfFtmAmX2kBGVt5VzrBscd
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: Q16075308
          quotation: null
          interpretation_note: null
          source:
            id: s_4omftLuK67wUsCAnVU8byp
            source_type: api_record
            title: 维基数据：王之猷（Q16075308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075308
            external_identifier: Q16075308
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
        - id: cs_yGPy7vJW9uocqNZE8ShW6y
          claim_id: c_kfFtmAmX2kBGVt5VzrBscd
          source_id: s_fTSBwdBbGaM2F5XBW7sb2z
          stance: supports
          locator: Q16075308
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_fTSBwdBbGaM2F5XBW7sb2z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之猷（126467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126467&o=json
            external_identifier: CBDB:126467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:58.678Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JJB7UKtTAqgKFU2PWASNFn
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ApoF2qB7R1EMCoo4RvFEEV
          claim_id: c_JJB7UKtTAqgKFU2PWASNFn
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4omftLuK67wUsCAnVU8byp
            source_type: api_record
            title: 维基数据：王之猷（Q16075308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075308
            external_identifier: Q16075308
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
        - id: cs_axuLNZF9krs5esnwyz2QH8
          claim_id: c_JJB7UKtTAqgKFU2PWASNFn
          source_id: s_8v97D6aRgy5zRhLaWeAPgN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v97D6aRgy5zRhLaWeAPgN
            source_type: api_record
            title: 维基数据：王重光（Q15935070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935070
            external_identifier: Q15935070
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children:
    - claim:
        id: c_roAuXBF9e21srCYxze7jAM
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iko9zCvjCxvA9HKpjEWpt4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RV9cKJ9mveQ34mPkgy6Yyh
          claim_id: c_roAuXBF9e21srCYxze7jAM
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: &a1
            id: s_4omftLuK67wUsCAnVU8byp
            source_type: api_record
            title: 维基数据：王之猷（Q16075308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075308
            external_identifier: Q16075308
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
        - id: cs_3u8jHQAJXU9vNg5n3rsovC
          claim_id: c_roAuXBF9e21srCYxze7jAM
          source_id: s_Jh59dCbMpghFUoJALitq8C
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Jh59dCbMpghFUoJALitq8C
            source_type: api_record
            title: 维基数据：王象恒（Q15940995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940995
            external_identifier: Q15940995
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:48.391Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%81%92
      object_person:
        id: p_iko9zCvjCxvA9HKpjEWpt4
        status: active
        display_name: 王象恒
        merged_into_person_id: null
    - claim:
        id: c_BgQB5ozJnBttrdFeAxpENH
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3fyf1EHwF5hvaVkaW4ghV
          claim_id: c_BgQB5ozJnBttrdFeAxpENH
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_FZNRr23DCZVaQ4VCnSeg73
          claim_id: c_BgQB5ozJnBttrdFeAxpENH
          source_id: s_Y1XjPJB2E3sdU1bzkZCXWH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Y1XjPJB2E3sdU1bzkZCXWH
            source_type: api_record
            title: 维基数据：王象春（Q16260916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260916
            external_identifier: Q16260916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.050Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%98%A5
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
    - claim:
        id: c_UdG-chKh6MpFckaedZnEbr
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_22ryfTxVwfapb1ZMHUyk43
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rapkrEfZdBG5bxbNuGaC_p
          claim_id: c_UdG-chKh6MpFckaedZnEbr
          source_id: s_XMOQ0kE35rHvK5SaAD3Ph5
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象益 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象益 之父／母。
          source:
            id: s_XMOQ0kE35rHvK5SaAD3Ph5
            source_type: api_record
            title: 中国历代人物传记资料库：王象益（CBDB 235538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235538&o=json
            external_identifier: CBDB:235538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_22ryfTxVwfapb1ZMHUyk43
        status: active
        display_name: 王象益
        merged_into_person_id: null
    - claim:
        id: c_js0nXsRaxx-VueF-g8uPRH
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2FTzE7ZnUah2E4HvWe1Dw1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4U56f0akP_F0GNGa3ZsVP
          claim_id: c_js0nXsRaxx-VueF-g8uPRH
          source_id: s_CstASng2oSF7XRRJllOoeh
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象曾 与 王象春 为同胞（CBDB 记「兄」），王象春 之父／母即 王象曾 之父／母。
          source:
            id: s_CstASng2oSF7XRRJllOoeh
            source_type: api_record
            title: 中国历代人物传记资料库：王象曾（CBDB 235540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235540&o=json
            external_identifier: CBDB:235540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2FTzE7ZnUah2E4HvWe1Dw1
        status: active
        display_name: 王象曾
        merged_into_person_id: null
    - claim:
        id: c_zkZHaKPIx69VhbqHD7BiZw
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Rw5jj5s9QHTFioRpUjkzn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BvxNFEjZlXSccreN3KBdGV
          claim_id: c_zkZHaKPIx69VhbqHD7BiZw
          source_id: s_7cT9vmY6i4l1WG8BfdHyNT
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象泰 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象泰 之父／母。
          source:
            id: s_7cT9vmY6i4l1WG8BfdHyNT
            source_type: api_record
            title: 中国历代人物传记资料库：王象泰（CBDB 220268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json
            external_identifier: CBDB:220268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Rw5jj5s9QHTFioRpUjkzn
        status: active
        display_name: 王象泰
        merged_into_person_id: null
    - claim:
        id: c_aj_GJWToLMOiQSDwxzYZot
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ef5VE9CLFhhmpDq6fdSAuK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WXXqXQqbHL63T34o3rstBm
          claim_id: c_aj_GJWToLMOiQSDwxzYZot
          source_id: s_UVI6nsp6bioER0eTAtdn86
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象艮 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象艮 之父／母。
          source:
            id: s_UVI6nsp6bioER0eTAtdn86
            source_type: api_record
            title: 中国历代人物传记资料库：王象艮（CBDB 235529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235529&o=json
            external_identifier: CBDB:235529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ef5VE9CLFhhmpDq6fdSAuK
        status: active
        display_name: 王象艮
        merged_into_person_id: null
    - claim:
        id: c_wq817PH7dC82nsktp0PmtV
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LNVFwyexJ8BKXjtTFgaadD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tyksBsuzV0xZRV-dXl_OHU
          claim_id: c_wq817PH7dC82nsktp0PmtV
          source_id: s_diTbnAJB-4z4azfWViog-E
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象孚 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象孚 之父／母。
          source:
            id: s_diTbnAJB-4z4azfWViog-E
            source_type: api_record
            title: 中国历代人物传记资料库：王象孚（CBDB 235535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235535&o=json
            external_identifier: CBDB:235535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LNVFwyexJ8BKXjtTFgaadD
        status: active
        display_name: 王象孚
        merged_into_person_id: null
    - claim:
        id: c_idTTQIRzgwmJmF2SpqnGwm
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LzpJgrnCCiXQt5bvLnBDbB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YShGPmn46bZSF2isjMWx2
          claim_id: c_idTTQIRzgwmJmF2SpqnGwm
          source_id: s_X3-Dy2UtqFkyJb29nYXnWH
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象復 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象復 之父／母。
          source:
            id: s_X3-Dy2UtqFkyJb29nYXnWH
            source_type: api_record
            title: 中国历代人物传记资料库：王象復（CBDB 235534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235534&o=json
            external_identifier: CBDB:235534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LzpJgrnCCiXQt5bvLnBDbB
        status: active
        display_name: 王象復
        merged_into_person_id: null
    - claim:
        id: c_sMgR_2XWAvfZAmhN_Pfruc
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M8QcCephzV5BLsFjaQVADH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rf2sJ9qXkEzd7SXqnRYPDQ
          claim_id: c_sMgR_2XWAvfZAmhN_Pfruc
          source_id: s_KcdSrur6jrW83xMo2hLCmE
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象鼎 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象鼎 之父／母。
          source:
            id: s_KcdSrur6jrW83xMo2hLCmE
            source_type: api_record
            title: 中国历代人物传记资料库：王象鼎（CBDB 235536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235536&o=json
            external_identifier: CBDB:235536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M8QcCephzV5BLsFjaQVADH
        status: active
        display_name: 王象鼎
        merged_into_person_id: null
    - claim:
        id: c_zgZ4fq7GINXDnAPL2V7_2b
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQky6wpdi52zF5zHqq31bi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtH4RXpUXZeyaAIMBQrtkp
          claim_id: c_zgZ4fq7GINXDnAPL2V7_2b
          source_id: s_W0F-qZ5WeQpGl3werGMttR
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象恆 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象恆 之父／母。
          source:
            id: s_W0F-qZ5WeQpGl3werGMttR
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NQky6wpdi52zF5zHqq31bi
        status: active
        display_name: 王象恆
        merged_into_person_id: null
    - claim:
        id: c_XMcsKsHqWalynJkOsaKq_L
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SVYPn11QesoDqbAm8eYf67
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oclNKXAuQPmzX39UyAKk33
          claim_id: c_XMcsKsHqWalynJkOsaKq_L
          source_id: s_DDg90mzsOSy5d4cBiv_HAP
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象某 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象某 之父／母。
          source:
            id: s_DDg90mzsOSy5d4cBiv_HAP
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 235526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235526&o=json
            external_identifier: CBDB:235526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SVYPn11QesoDqbAm8eYf67
        status: active
        display_name: 王象某
        merged_into_person_id: null
    - claim:
        id: c_Vgts-gxluCUXtJZasfnkoh
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TD1TvnKHWVi268fxKgzDuM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DxKZwyIKOA21E3PRZahXhU
          claim_id: c_Vgts-gxluCUXtJZasfnkoh
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象晉 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象晉 之父／母。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TD1TvnKHWVi268fxKgzDuM
        status: active
        display_name: 王象晉
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
        id: p_btyLjEDjLPQrn182pZi5zm
        status: active
        display_name: 王象賁
        merged_into_person_id: null
    - claim:
        id: c_NVgnsKRreFg71B9uMuQdeV
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hPLFM4nuwXpHwDwRtjk2Bk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cM8Ii7mjTdv_kIFfOimu67
          claim_id: c_NVgnsKRreFg71B9uMuQdeV
          source_id: s_jsUXHj7pBtrgGL_XGnTcDJ
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象豐 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象豐 之父／母。
          source:
            id: s_jsUXHj7pBtrgGL_XGnTcDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王象豐（CBDB 235537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235537&o=json
            external_identifier: CBDB:235537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hPLFM4nuwXpHwDwRtjk2Bk
        status: active
        display_name: 王象豐
        merged_into_person_id: null
    - claim:
        id: c_tijlVCDZ18EGBRZCGXZ6rl
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kzcEa5LNsLbTbrKD29jnQ7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UkzVL3mv8bv7oQfPd6imQN
          claim_id: c_tijlVCDZ18EGBRZCGXZ6rl
          source_id: s_qaf0tJk9ctbjl4udhRB1F3
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象節 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象節 之父／母。
          source:
            id: s_qaf0tJk9ctbjl4udhRB1F3
            source_type: api_record
            title: 中国历代人物传记资料库：王象節（CBDB 220272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220272&o=json
            external_identifier: CBDB:220272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kzcEa5LNsLbTbrKD29jnQ7
        status: active
        display_name: 王象節
        merged_into_person_id: null
    - claim:
        id: c_JtAFHjhBSGfufrPcJWXOS7
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p2QPqv2CJRYp5H7S4jqw71
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3ZHgJM1_p927k4b1jExA9
          claim_id: c_JtAFHjhBSGfufrPcJWXOS7
          source_id: s_sL3s16KRDMFK44Q3P39Q0U
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象履 与 王象春 为同胞（CBDB 记「兄」），王象春 之父／母即 王象履 之父／母。
          source:
            id: s_sL3s16KRDMFK44Q3P39Q0U
            source_type: api_record
            title: 中国历代人物传记资料库：王象履（CBDB 235539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235539&o=json
            external_identifier: CBDB:235539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p2QPqv2CJRYp5H7S4jqw71
        status: active
        display_name: 王象履
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EjtQ2j2buhUHVqpPMtMnnp
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nVeRPzH9zM6X3E5H4rwVq1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9nR5ogHo1vdqwmYPWcuYY
          claim_id: c_EjtQ2j2buhUHVqpPMtMnnp
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qBKMtk9DcQ11Qzoap33at6
          claim_id: c_EjtQ2j2buhUHVqpPMtMnnp
          source_id: s_FmCaExmBx5NXeFkAjLnQYm
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_FmCaExmBx5NXeFkAjLnQYm
            source_type: api_record
            title: 维基数据：李氏（Q65820432）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65820432
            external_identifier: Q65820432
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:06.712Z
            metadata_json: null
        - id: cs_KXaKdcDyBSt4b6M8g2MnTj
          claim_id: c_EjtQ2j2buhUHVqpPMtMnnp
          source_id: s_fTSBwdBbGaM2F5XBW7sb2z
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆五年進士登科錄:一卷
          source: *a2
      object_person:
        id: p_nVeRPzH9zM6X3E5H4rwVq1
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Wg_5pTVcWJ5GE8vBDUdU1V
        subject_person_id: p_VwN7eG86JDxNDZrGUdF1Q5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AXDvffMCx7bwj-I_Lmwn5Y
          claim_id: c_Wg_5pTVcWJ5GE8vBDUdU1V
          source_id: s_BsgioAgQi2bNfV41XYhCP9
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BsgioAgQi2bNfV41XYhCP9
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 232520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232520&o=json
            external_identifier: CBDB:232520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VwN7eG86JDxNDZrGUdF1Q5
        status: active
        display_name: 王麟
        merged_into_person_id: null
    - claim:
        id: c_ZkypYFnypEdHtWl3T8Kx4M
        subject_person_id: p_XwKHLH17io2m6CKt414qzT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__VzyUUqs4u7XTig1OWIjVr
          claim_id: c_ZkypYFnypEdHtWl3T8Kx4M
          source_id: s_FJ1HG7BynJqSbkFRirS4id
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FJ1HG7BynJqSbkFRirS4id
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伍（217730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217730&o=json
            external_identifier: CBDB:217730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:19.307Z
            metadata_json: null
      object_person:
        id: p_XwKHLH17io2m6CKt414qzT
        status: active
        display_name: 王伍
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_TA3Wv_5j5vQF6rEgAjnlmd
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7MXLqhuX5DY3uL1k2iYrBv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sg9EcZJFHIo0vRHMSqEO2h
          claim_id: c_TA3Wv_5j5vQF6rEgAjnlmd
          source_id: s_m1-Om2dSn93YTWIyOqXinn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126467 王之猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m1-Om2dSn93YTWIyOqXinn
            source_type: api_record
            title: 中国历代人物传记资料库：王之垣（CBDB 217737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217737&o=json
            external_identifier: CBDB:217737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7MXLqhuX5DY3uL1k2iYrBv
        status: active
        display_name: 王之垣
        merged_into_person_id: null
    - claim:
        id: c_Wwb8vPkCWKugNpyYOLMgkC
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CHJThDkPUT6tJ14ZDHz191
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v5dh8_wi8VFUzmEYjo67zn
          claim_id: c_Wwb8vPkCWKugNpyYOLMgkC
          source_id: s_GJiaLOrfpHq-irzojwgeTb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126467 王之猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GJiaLOrfpHq-irzojwgeTb
            source_type: api_record
            title: 中国历代人物传记资料库：王之輔（CBDB 217738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217738&o=json
            external_identifier: CBDB:217738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CHJThDkPUT6tJ14ZDHz191
        status: active
        display_name: 王之輔
        merged_into_person_id: null
    - claim:
        id: c_9q-CrAkTFyuHJTtGYTDkF1
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pV7UzWEGz6oYnxAAU4nKPC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fu7wJOTuoaWExv9tDhVQls
          claim_id: c_9q-CrAkTFyuHJTtGYTDkF1
          source_id: s_SGyM-rR_My9_66x0ITb6LW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126467 王之猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SGyM-rR_My9_66x0ITb6LW
            source_type: api_record
            title: 中国历代人物传记资料库：王之城（CBDB 217739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217739&o=json
            external_identifier: CBDB:217739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pV7UzWEGz6oYnxAAU4nKPC
        status: active
        display_name: 王之城
        merged_into_person_id: null
---

# 王之猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之猷（1549年—1599年），字爾嘉，號栢峯，山東濟南府新城縣人，匠籍，明朝政治人物。 | accepted |
| name.primary | 王之猷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| children | p_iko9zCvjCxvA9HKpjEWpt4 | 王象恒 | accepted |
| children | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |
| children | p_22ryfTxVwfapb1ZMHUyk43 | 王象益 | accepted |
| children | p_2FTzE7ZnUah2E4HvWe1Dw1 | 王象曾 | accepted |
| children | p_2Rw5jj5s9QHTFioRpUjkzn | 王象泰 | accepted |
| children | p_Ef5VE9CLFhhmpDq6fdSAuK | 王象艮 | accepted |
| children | p_LNVFwyexJ8BKXjtTFgaadD | 王象孚 | accepted |
| children | p_LzpJgrnCCiXQt5bvLnBDbB | 王象復 | accepted |
| children | p_M8QcCephzV5BLsFjaQVADH | 王象鼎 | accepted |
| children | p_NQky6wpdi52zF5zHqq31bi | 王象恆 | accepted |
| children | p_SVYPn11QesoDqbAm8eYf67 | 王象某 | accepted |
| children | p_TD1TvnKHWVi268fxKgzDuM | 王象晉 | accepted |
| children | p_btyLjEDjLPQrn182pZi5zm | 王象賁 | accepted |
| children | p_hPLFM4nuwXpHwDwRtjk2Bk | 王象豐 | accepted |
| children | p_kzcEa5LNsLbTbrKD29jnQ7 | 王象節 | accepted |
| children | p_p2QPqv2CJRYp5H7S4jqw71 | 王象履 | accepted |
| spouses | p_nVeRPzH9zM6X3E5H4rwVq1 | 李氏 | accepted |
| ancestors | p_VwN7eG86JDxNDZrGUdF1Q5 | 王麟 | accepted |
| ancestors | p_XwKHLH17io2m6CKt414qzT | 王伍 | accepted |
| other | p_7MXLqhuX5DY3uL1k2iYrBv | 王之垣 | accepted |
| other | p_CHJThDkPUT6tJ14ZDHz191 | 王之輔 | accepted |
| other | p_pV7UzWEGz6oYnxAAU4nKPC | 王之城 | accepted |

## 外部来源

- [维基数据：李氏（Q65820432）](https://www.wikidata.org/wiki/Q65820432)
- [维基数据：王象春（Q16260916）](https://www.wikidata.org/wiki/Q16260916)
- [维基数据：王象恒（Q15940995）](https://www.wikidata.org/wiki/Q15940995)
- [维基数据：王之猷（Q16075308）](https://www.wikidata.org/wiki/Q16075308)
- [维基数据：王重光（Q15935070）](https://www.wikidata.org/wiki/Q15935070)
- [中国历代人物传记资料库：王麟（CBDB 232520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232520&o=json)
- [中国历代人物传记资料库：王象賁（CBDB 220269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json)
- [中国历代人物传记资料库：王象曾（CBDB 235540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235540&o=json)
- [中国历代人物传记资料库：王象鼎（CBDB 235536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235536&o=json)
- [中国历代人物传记资料库：王象豐（CBDB 235537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235537&o=json)
- [中国历代人物传记资料库：王象孚（CBDB 235535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235535&o=json)
- [中国历代人物传记资料库：王象復（CBDB 235534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235534&o=json)
- [中国历代人物传记资料库：王象艮（CBDB 235529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235529&o=json)
- [中国历代人物传记资料库：王象恆（CBDB 220279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json)
- [中国历代人物传记资料库：王象節（CBDB 220272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220272&o=json)
- [中国历代人物传记资料库：王象晉（CBDB 65763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json)
- [中国历代人物传记资料库：王象履（CBDB 235539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235539&o=json)
- [中国历代人物传记资料库：王象某（CBDB 235526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235526&o=json)
- [中国历代人物传记资料库：王象泰（CBDB 220268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json)
- [中国历代人物传记资料库：王象益（CBDB 235538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235538&o=json)
- [中国历代人物传记资料库：王之城（CBDB 217739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217739&o=json)
- [中国历代人物传记资料库：王之輔（CBDB 217738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217738&o=json)
- [中国历代人物传记资料库：王之垣（CBDB 217737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217737&o=json)
- [中文维基百科：王之猷](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7)
- [CBDB 中国历代人物传记资料库：王伍（217730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217730&o=json)
- [CBDB 中国历代人物传记资料库：王之猷（126467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126467&o=json)
