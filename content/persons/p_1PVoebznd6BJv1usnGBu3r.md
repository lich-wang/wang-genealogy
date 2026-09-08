---
schema: wang-person/v1
id: p_1PVoebznd6BJv1usnGBu3r
status: active
merged_into: null
display_name: 王暕
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rt4aRkJGD4gTjuoLEp2YXi
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暕（477年—523年），史料所见人物。本项目依据《王暕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FX0lys8apKGZ1UsSMGnBCh
          claim_id: c_Rt4aRkJGD4gTjuoLEp2YXi
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: Q11572875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KsjikQPijPc5BkNwV19tro
            source_type: api_record
            title: 维基数据：王暕（Q11572875）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572875
            external_identifier: Q11572875
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:58.732Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9A%95
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wq1kZ7A9FzoCZGyJ7rq3Ej
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 477年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0477-01-01
            latest: 0477-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YMDr5DEah9D7NowQcCwZC6
          claim_id: c_wq1kZ7A9FzoCZGyJ7rq3Ej
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KsjikQPijPc5BkNwV19tro
            source_type: api_record
            title: 维基数据：王暕（Q11572875）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572875
            external_identifier: Q11572875
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:58.732Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9A%95
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tUVVVR6E3fAK8by6jE2LdG
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 523年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0523-01-01
            latest: 0523-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Heb9DB1pj8nmaD4AAqiNkx
          claim_id: c_tUVVVR6E3fAK8by6jE2LdG
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KsjikQPijPc5BkNwV19tro
            source_type: api_record
            title: 维基数据：王暕（Q11572875）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572875
            external_identifier: Q11572875
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:58.732Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9A%95
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PQGBFdQaz3DP3w2GHr7Cgn
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7qKhZ5SSBqr8SPNT5Vk6Vn
          claim_id: c_PQGBFdQaz3DP3w2GHr7Cgn
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: Q11572875
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m36tdBrXE82YnPTWzxY1FV
        subject_person_id: p_ke9yjosuiX8LZiiCh781g5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1PVoebznd6BJv1usnGBu3r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CeJfXNaxHKrH3UAE476NTn
          claim_id: c_m36tdBrXE82YnPTWzxY1FV
          source_id: s_4vZtbVHHibEz9C9KT13UKJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4vZtbVHHibEz9C9KT13UKJ
            source_type: api_record
            title: 维基数据：王俭（Q7967476）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967476
            external_identifier: Q7967476
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:40.879Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%84%89_(%E5%8D%97%E6%9C%9D)
        - id: cs_kE66fmW1AR1rLFBoYayBGE
          claim_id: c_m36tdBrXE82YnPTWzxY1FV
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KsjikQPijPc5BkNwV19tro
            source_type: api_record
            title: 维基数据：王暕（Q11572875）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572875
            external_identifier: Q11572875
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:58.732Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9A%95
        - id: cs_q7yabPYwrSGHx8vFB8vLwp
          claim_id: c_m36tdBrXE82YnPTWzxY1FV
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王俭 → 王暕
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_a3uC5tQv6M7qqKK69tDSZK
          claim_id: c_m36tdBrXE82YnPTWzxY1FV
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王俭 → 王暕
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_ke9yjosuiX8LZiiCh781g5
        status: active
        display_name: 王俭
        merged_into_person_id: null
  children:
    - claim:
        id: c_HfKPbtsHVcJRxVZGsLv2t2
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M2tXQe2FSQ532ZvGY6jPvZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QakRP6mCYgcKKP5uSDk5JV
          claim_id: c_HfKPbtsHVcJRxVZGsLv2t2
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KsjikQPijPc5BkNwV19tro
            source_type: api_record
            title: 维基数据：王暕（Q11572875）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572875
            external_identifier: Q11572875
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:58.732Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9A%95
        - id: cs_7WE1Fgygrvk42ai3iHGM8e
          claim_id: c_HfKPbtsHVcJRxVZGsLv2t2
          source_id: s_ff1ysNrkADvCttYkh3AoQA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ff1ysNrkADvCttYkh3AoQA
            source_type: api_record
            title: 维基数据：王穉（Q56600341）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q56600341
            external_identifier: Q56600341
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:09.907Z
            metadata_json: null
        - id: cs_gLuDu2QkAtaJqYCwGc1Ctv
          claim_id: c_HfKPbtsHVcJRxVZGsLv2t2
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王暕 → 王穉
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_4nWcFfh3AQiTqMgK8y5EdL
          claim_id: c_HfKPbtsHVcJRxVZGsLv2t2
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王暕 → 王穉
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_M2tXQe2FSQ532ZvGY6jPvZ
        status: active
        display_name: 王穉
        merged_into_person_id: null
    - claim:
        id: c_5naZPxf4dXqXz1u2Cp8Quw
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5xzanYUMr9aPJq4AE4VLrN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WG7a6fmrJn3xCKmP8joVGE
          claim_id: c_5naZPxf4dXqXz1u2Cp8Quw
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KsjikQPijPc5BkNwV19tro
            source_type: api_record
            title: 维基数据：王暕（Q11572875）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572875
            external_identifier: Q11572875
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:58.732Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9A%95
        - id: cs_KRCvon4QcJ7dLHZfyLKraZ
          claim_id: c_5naZPxf4dXqXz1u2Cp8Quw
          source_id: s_gEn29BmQSFY26kEMXBVzHd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gEn29BmQSFY26kEMXBVzHd
            source_type: api_record
            title: 维基数据：王训（Q18118177）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118177
            external_identifier: Q18118177
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:21.461Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AE%AD_(%E5%8D%97%E6%A2%81)
        - id: cs_vPvxf45cRw494e7g5JgzD8
          claim_id: c_5naZPxf4dXqXz1u2Cp8Quw
          source_id: s_L31FoF9dW1cyPR7oqQqPbx
          stance: supports
          locator: 条文：之子/之女
          quotation: 王训（{{bd|511年||536年||}}），字怀范，小字文殊，琅邪郡临沂县（今山东省临沂市）人，南齐太尉、南昌文宪公王俭之孙，南梁侍中、尚书左仆射、领国子祭酒王暕之子，南梁官员
          interpretation_note: null
          source:
            id: s_L31FoF9dW1cyPR7oqQqPbx
            source_type: website
            title: 中文维基百科：王训 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AE%AD_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:19.744Z
            metadata_json: null
        - id: cs_2SpMPEELtEizqTPdYZkVHZ
          claim_id: c_5naZPxf4dXqXz1u2Cp8Quw
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王暕 → 王训
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_9s3xynr6VzWMZyVx8QMi5L
          claim_id: c_5naZPxf4dXqXz1u2Cp8Quw
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王暕 → 王训
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_s6a3o7UV9HazNHa51dw11t
          claim_id: c_5naZPxf4dXqXz1u2Cp8Quw
          source_id: s_uGqg7vgfEX69SdCW53sHa1
          stance: supports
          locator: 条文：之子/之女
          quotation: 王训，字怀范，小字文殊，琅邪郡临沂县（今山东省临沂市）人，南齐太尉、南昌文宪公王俭之孙，南梁侍中、尚书左仆射、领国子祭酒王暕之子，南梁官员
          interpretation_note: null
          source:
            id: s_uGqg7vgfEX69SdCW53sHa1
            source_type: website
            title: 中文维基百科：王训 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AE%AD_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:55.954Z
            metadata_json: null
      object_person:
        id: p_5xzanYUMr9aPJq4AE4VLrN
        status: active
        display_name: 王训
        merged_into_person_id: null
    - claim:
        id: c_hfR3vAi154MH6aSQUJy6aL
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xewYYA8tMSjuQepsE5e5Ar
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nuBvEG2bX5ka5wzKcbWy6g
          claim_id: c_hfR3vAi154MH6aSQUJy6aL
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王暕 → 王訏
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_hpBjPrnLiqeX8bcPYPLQm4
          claim_id: c_hfR3vAi154MH6aSQUJy6aL
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王暕 → 王訏
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_xewYYA8tMSjuQepsE5e5Ar
        status: active
        display_name: 王訏
        merged_into_person_id: null
    - claim:
        id: c_RnMvb9xPAHAGgMrMqXaU6k
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_342p55dQ1D6NeRnwK3dn2t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gKHCF4tDqaNNWkEQwhx6M2
          claim_id: c_RnMvb9xPAHAGgMrMqXaU6k
          source_id: s_8LTWKKntYNPK94hBz6b43z
          stance: supports
          locator: 王承传
          quotation: 王承字安期，僕射暕子。
          interpretation_note: null
          source:
            id: s_8LTWKKntYNPK94hBz6b43z
            source_type: book
            title: 中文维基文库：《梁书》卷四十一
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E6%A2%81%E6%9B%B8/%E5%8D%B741
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:52.386Z
            metadata_json: null
      object_person:
        id: p_342p55dQ1D6NeRnwK3dn2t
        status: active
        display_name: 王承
        merged_into_person_id: null
    - claim:
        id: c_sbtcvrZLqJ9Z9NPNE6nyAQ
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EZc8eia6jBCUiA6dx8URB6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hqfPBBBMezLhz4TjAVTKre
          claim_id: c_sbtcvrZLqJ9Z9NPNE6nyAQ
          source_id: s_KsjikQPijPc5BkNwV19tro
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tJLw6xWQRQ673raQKXe6E7
          claim_id: c_sbtcvrZLqJ9Z9NPNE6nyAQ
          source_id: s_rpWygGEdG2HNsbmwmC7uyf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_rpWygGEdG2HNsbmwmC7uyf
            source_type: website
            title: 中文维基百科：王承 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF_(%E5%8D%97%E6%A2%81)
            external_identifier: Q28691175
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person:
        id: p_EZc8eia6jBCUiA6dx8URB6
        status: active
        display_name: 王承
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ZKS9UWxTPfS1dh2ZYXRuid
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZVzR4699pegLhSkt9qxiwL
          claim_id: c_ZKS9UWxTPfS1dh2ZYXRuid
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 南梁侍中、尚书左仆射、中书令王暕的曾孙
          interpretation_note: null
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
        - id: cs_Hz3LPYUqB3CUufQLtw9fbd
          claim_id: c_ZKS9UWxTPfS1dh2ZYXRuid
          source_id: s_txa6DXaBqPYUGuDGF7viPh
          stance: supports
          locator: 条文：条文识读（祖）（3世）
          quotation: 南梁侍中、尚书左仆射、中书令王暕的曾孙。
          interpretation_note: null
          source:
            id: s_txa6DXaBqPYUGuDGF7viPh
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:55.731Z
            metadata_json: null
      object_person:
        id: p_PGJAWHxYxJtx3aVz4EvhUR
        status: active
        display_name: 王衮
        merged_into_person_id: null
  other: []
---

# 王暕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王暕（477年—523年），史料所见人物。本项目依据《王暕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 477年 | accepted |
| death.date | 523年 | accepted |
| name.primary | 王暕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ke9yjosuiX8LZiiCh781g5 | 王俭 | accepted |
| children | p_M2tXQe2FSQ532ZvGY6jPvZ | 王穉 | accepted |
| children | p_5xzanYUMr9aPJq4AE4VLrN | 王训 | accepted |
| children | p_xewYYA8tMSjuQepsE5e5Ar | 王訏 | accepted |
| children | p_342p55dQ1D6NeRnwK3dn2t | 王承 | accepted |
| children | p_EZc8eia6jBCUiA6dx8URB6 | 王承 | accepted |
| descendants | p_PGJAWHxYxJtx3aVz4EvhUR | 王衮 | accepted |

## 外部来源

- [维基数据：王俭（Q7967476）](https://www.wikidata.org/wiki/Q7967476)
- [维基数据：王暕（Q11572875）](https://www.wikidata.org/wiki/Q11572875)
- [维基数据：王训（Q18118177）](https://www.wikidata.org/wiki/Q18118177)
- [维基数据：王穉（Q56600341）](https://www.wikidata.org/wiki/Q56600341)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王承 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF_(%E5%8D%97%E6%A2%81))
- [中文维基百科：王衮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE)
- [中文维基百科：王训 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AE%AD_(%E5%8D%97%E6%A2%81))
- [中文维基文库：《梁书》卷四十一](https://zh.wikisource.org/zh-hant/%E6%A2%81%E6%9B%B8/%E5%8D%B741)
