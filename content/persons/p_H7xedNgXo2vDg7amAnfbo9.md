---
schema: wang-person/v1
id: p_H7xedNgXo2vDg7amAnfbo9
status: active
merged_into: null
display_name: 王恬
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZpDK4JaLFkNTYYHvZWF4w7
        subject_person_id: p_H7xedNgXo2vDg7amAnfbo9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恬（生于314年），东晋大臣将领。维基数据以独立条目 Q15927256 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eerKJ1tQjPh4cwC2on6Bo9
          claim_id: c_ZpDK4JaLFkNTYYHvZWF4w7
          source_id: s_2FafAvni6gBSLVweT5oH5V
          stance: supports
          locator: Q15927256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_2FafAvni6gBSLVweT5oH5V
            source_type: api_record
            title: 維基數據：王恬（Q15927256）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15927256
            external_identifier: Q15927256
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:06.973Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AC
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kn1vf3nscDEH69Wdr7eHAR
        subject_person_id: p_H7xedNgXo2vDg7amAnfbo9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 314年
            calendar_note: 維基數據 P569 結構化日期，精度：年
            earliest: 0314-01-01
            latest: 0314-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KEepfrCNxNQCrYx4BLt11W
          claim_id: c_kn1vf3nscDEH69Wdr7eHAR
          source_id: s_2FafAvni6gBSLVweT5oH5V
          stance: supports
          locator: Q15927256
          quotation: null
          interpretation_note: null
          source:
            id: s_2FafAvni6gBSLVweT5oH5V
            source_type: api_record
            title: 維基數據：王恬（Q15927256）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15927256
            external_identifier: Q15927256
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:06.973Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AC
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_QMGkK7oiuDSnZn5v2pqyQ1
        subject_person_id: p_H7xedNgXo2vDg7amAnfbo9
        claim_kind: property
        predicate: historical.period
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 东晋
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B8Kip6WsoQn4AFDqoTzpxb
          claim_id: c_QMGkK7oiuDSnZn5v2pqyQ1
          source_id: s_2FafAvni6gBSLVweT5oH5V
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：东晋大臣将领
          source:
            id: s_2FafAvni6gBSLVweT5oH5V
            source_type: api_record
            title: 維基數據：王恬（Q15927256）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15927256
            external_identifier: Q15927256
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:06.973Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AC
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e51C7dWQAXgJYwrD8drow2
        subject_person_id: p_H7xedNgXo2vDg7amAnfbo9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uDF92efqNKEXVZ5jMs69DL
          claim_id: c_e51C7dWQAXgJYwrD8drow2
          source_id: s_2FafAvni6gBSLVweT5oH5V
          stance: supports
          locator: Q15927256
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CiM9q3WaLhBEYAN9ihnivi
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H7xedNgXo2vDg7amAnfbo9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9QhNk9f5WpnfUMg3W2CcAw
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_ZAm91q8ts6LtYjrmAiQGNG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZAm91q8ts6LtYjrmAiQGNG
            source_type: website
            title: 中文维基百科：王導
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王導
            external_identifier: Q3274914
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_t2MpdnCQPgZGJWCReXiicN
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_FRo67ZrNmc5pka5csQaFUo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FRo67ZrNmc5pka5csQaFUo
            source_type: api_record
            title: 維基數據：王導（Q3274914）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q3274914
            external_identifier: Q3274914
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:40.794Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B0%8E
        - id: cs_83UMjjqsJh5TTmyJ6GA7me
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_2FafAvni6gBSLVweT5oH5V
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_2FafAvni6gBSLVweT5oH5V
            source_type: api_record
            title: 維基數據：王恬（Q15927256）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15927256
            external_identifier: Q15927256
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:06.973Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AC
        - id: cs_5vwFmqaBY39ESiB6HZsRmN
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王恬
          interpretation_note: null
          source:
            id: s_EuhopAKPrGRPYfhK6LWGqg
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:06.893Z
            metadata_json: null
        - id: cs_TexhLdvTBvP9shK8GD6uQx
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王恬
          interpretation_note: null
          source:
            id: s_UT2fnx3qtzoieQ2DR3uegK
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:12:42.934Z
            metadata_json: null
        - id: cs_A28CCKK8e3ADM5LKbFy8Tg
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王恬
          interpretation_note: null
          source:
            id: s_Hu48xKLWbTYqemmfCh8psU
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:50:46.620Z
            metadata_json: null
        - id: cs_3PFUB37KmV6Rz2zRBj225y
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王恬
          interpretation_note: null
          source:
            id: s_am7Fw6MoGrjn6MQaPht7Mr
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:33.641Z
            metadata_json: null
        - id: cs_bRWKMcDQ9TKvDjyDxbzkXH
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王恬
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
        - id: cs_UakV4czyDZ5p7xyJxAM1B6
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王恬
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
        - id: cs_Ut5Vec5A4zgZJc61PFyCmw
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王恬
          interpretation_note: null
          source:
            id: s_2Vkz5GQzEDauSJDkgPos6m
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:13.683Z
            metadata_json: null
        - id: cs_8WBXq17a9W65w6jL2HuYRx
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王恬
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_gJXENLikqHYRdJF269T2My
          claim_id: c_CiM9q3WaLhBEYAN9ihnivi
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 六子：悅、恬、劭、洽、協、薈。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_Xbn65bXVofZnsi76cqAQCP
        status: active
        display_name: 王導
        merged_into_person_id: null
  children:
    - claim:
        id: c_c2pAoHej5uzgyTbN4nHo6W
        subject_person_id: p_H7xedNgXo2vDg7amAnfbo9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q6vWU3Gcy6nNadkETK95kb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_awxGPLwP5snLAVgf5zqJyw
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_2FafAvni6gBSLVweT5oH5V
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_2FafAvni6gBSLVweT5oH5V
            source_type: api_record
            title: 維基數據：王恬（Q15927256）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15927256
            external_identifier: Q15927256
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:06.973Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AC
        - id: cs_YjT32RXxts196jbH8SMSks
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_uMYzG4L5LQN4Snn9xwf1Vu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uMYzG4L5LQN4Snn9xwf1Vu
            source_type: api_record
            title: 维基数据：王女宗（Q16905970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905970
            external_identifier: Q16905970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:58.956Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
        - id: cs_JL1i29HP2amzCwKQhnp1dP
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_1oz3SJ2gCJ92Wj1D89aqxL
          stance: supports
          locator: 条文：之子/之女
          quotation: 王女宗（{{bd|？||？||}}），名不详，字女宗，琅邪临沂（今山东省临沂市）人，王导的孙女，王恬的女儿，桓冲的夫人
          interpretation_note: null
          source:
            id: s_1oz3SJ2gCJ92Wj1D89aqxL
            source_type: website
            title: 中文维基百科：王女宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
        - id: cs_NxvvzE3PwvW5QTNU3Yakua
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王女宗
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
        - id: cs_UJppooAV46MAyC2Q5C7V1R
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王女宗
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
        - id: cs_EHPWUexnhVHhggUnhA4iEr
          claim_id: c_c2pAoHej5uzgyTbN4nHo6W
          source_id: s_yzts9m1YUrffNpS67AKYU9
          stance: supports
          locator: 条文：之子/之女
          quotation: 王女宗，名不详，字女宗，琅邪临沂（今山东省临沂市）人，王导的孙女，王恬的女儿，桓冲的夫人
          interpretation_note: null
          source:
            id: s_yzts9m1YUrffNpS67AKYU9
            source_type: website
            title: 中文维基百科：王女宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:10.102Z
            metadata_json: null
      object_person:
        id: p_q6vWU3Gcy6nNadkETK95kb
        status: active
        display_name: 王女宗
        merged_into_person_id: null
    - claim:
        id: c_veRM32UBEMJwbS283E4c8p
        subject_person_id: p_H7xedNgXo2vDg7amAnfbo9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eGi6cJepexiV9GFAnd9L8u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FZvbUrAaKDHSfSENUipGVf
          claim_id: c_veRM32UBEMJwbS283E4c8p
          source_id: s_2FafAvni6gBSLVweT5oH5V
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_2FafAvni6gBSLVweT5oH5V
            source_type: api_record
            title: 維基數據：王恬（Q15927256）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15927256
            external_identifier: Q15927256
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:06.973Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AC
        - id: cs_Y4KGWgzicQBp497VL6igks
          claim_id: c_veRM32UBEMJwbS283E4c8p
          source_id: s_eCfut1gTfg2DFbQLvfxPSL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eCfut1gTfg2DFbQLvfxPSL
            source_type: api_record
            title: 维基数据：王混（Q18118174）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118174
            external_identifier: Q18118174
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:01.492Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%B7
        - id: cs_2cMs9wn9ZVftSmtXjiKtEc
          claim_id: c_veRM32UBEMJwbS283E4c8p
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王混
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
        - id: cs_3iKuTTzZtHwy49jakaHZrQ
          claim_id: c_veRM32UBEMJwbS283E4c8p
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王混
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
        id: p_eGi6cJepexiV9GFAnd9L8u
        status: active
        display_name: 王混
        merged_into_person_id: null
    - claim:
        id: c_7XkAmc9YAQz8X6ymT6eJSJ
        subject_person_id: p_H7xedNgXo2vDg7amAnfbo9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_QVxhcJyFB5DQDNXBKDa1DD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tC9dDu9RJNraF2Q7eB5jpE
          claim_id: c_7XkAmc9YAQz8X6ymT6eJSJ
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王浩
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
        - id: cs_tw8A1VrycnDnmBm8ChsV5n
          claim_id: c_7XkAmc9YAQz8X6ymT6eJSJ
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恬 → 王浩
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
        id: p_QVxhcJyFB5DQDNXBKDa1DD
        status: active
        display_name: 王浩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恬（生于314年），东晋大臣将领。维基数据以独立条目 Q15927256 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| birth.date | 314年 | accepted |
| historical.period | 东晋 | accepted |
| name.primary | 王恬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |
| children | p_q6vWU3Gcy6nNadkETK95kb | 王女宗 | accepted |
| children | p_eGi6cJepexiV9GFAnd9L8u | 王混 | accepted |
| children | p_QVxhcJyFB5DQDNXBKDa1DD | 王浩 | accepted |

## 外部来源

- [维基数据：王混（Q18118174）](https://www.wikidata.org/wiki/Q18118174)
- [维基数据：王女宗（Q16905970）](https://www.wikidata.org/wiki/Q16905970)
- [維基數據：王導（Q3274914）](https://www.wikidata.org/wiki/Q3274914)
- [維基數據：王恬（Q15927256）](https://www.wikidata.org/wiki/Q15927256)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王導](https://zh.wikipedia.org/wiki/王導)
- [中文维基百科：王女宗](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%B3%E5%AE%97)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
