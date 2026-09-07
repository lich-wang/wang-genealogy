---
schema: wang-person/v1
id: p_YzT6HhE387kd7ePqohxr7u
status: active
merged_into: null
display_name: 王悦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nETX9R7pYW8U8B51X3eS2B
        subject_person_id: p_YzT6HhE387kd7ePqohxr7u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悦，东晋大臣。维基数据以独立条目 Q15944710 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_-tLqT2J4g-43cjbiLB1czA
          claim_id: c_nETX9R7pYW8U8B51X3eS2B
          source_id: s_zMKp2Wd4NhSGMNBy9e1nW7
          stance: supports
          locator: Q15944710
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_zMKp2Wd4NhSGMNBy9e1nW7
            source_type: api_record
            title: 維基數據：王悦（Q15944710）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15944710
            external_identifier: Q15944710
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:08.328Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%82%A6_(%E6%99%8B%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_BNrHU1PY5rKM8ojFLYV1ic
        subject_person_id: p_YzT6HhE387kd7ePqohxr7u
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
        - id: cs_U6JDFZ6VUMyUiyEPcgwnPU
          claim_id: c_BNrHU1PY5rKM8ojFLYV1ic
          source_id: s_zMKp2Wd4NhSGMNBy9e1nW7
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：东晋大臣
          source:
            id: s_zMKp2Wd4NhSGMNBy9e1nW7
            source_type: api_record
            title: 維基數據：王悦（Q15944710）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15944710
            external_identifier: Q15944710
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:08.328Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%82%A6_(%E6%99%8B%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pg5LUtUbpqvv3JK47VPFuN
        subject_person_id: p_YzT6HhE387kd7ePqohxr7u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6RzeZkXrHzRpDPB9CLD51N
          claim_id: c_pg5LUtUbpqvv3JK47VPFuN
          source_id: s_zMKp2Wd4NhSGMNBy9e1nW7
          stance: supports
          locator: Q15944710
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eMjEV2ysa4YzcoSFrJwgXK
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YzT6HhE387kd7ePqohxr7u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VR1E8FJFwkA2yMH87ZPJyu
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
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
        - id: cs_BNo4Ta9NEVovQKx1CBFmW3
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
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
        - id: cs_DkGs91rg6zRdEgjMJGebRv
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_zMKp2Wd4NhSGMNBy9e1nW7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zMKp2Wd4NhSGMNBy9e1nW7
            source_type: api_record
            title: 維基數據：王悦（Q15944710）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15944710
            external_identifier: Q15944710
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:08.328Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%82%A6_(%E6%99%8B%E6%9C%9D)
        - id: cs_99rTSpaLRWwbfet9K1s5jq
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_rCP6CJoM7Pq41uB8uHSbXK
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rCP6CJoM7Pq41uB8uHSbXK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王導（25788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25788&o=json
            external_identifier: CBDB:25788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:39.033Z
            metadata_json: null
        - id: cs_CQCFb36GgjGd7ASHDuzTDF
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_W6uy8HQJgwZ7Q78pUwbBKU
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_W6uy8HQJgwZ7Q78pUwbBKU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王悅（25789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25789&o=json
            external_identifier: CBDB:25789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:47.444Z
            metadata_json: null
        - id: cs_xmVBHsWdAmG9FFTGGHaY1h
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王悦
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
        - id: cs_s7xGNaYDpjQ3nUdDEzBjLD
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王悦
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
        - id: cs_CAjpeCt8Pr3gVvFdC4KQ4Z
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王悦
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
        - id: cs_YsMPTDvdNP1d6QMScazTqP
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王悦
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
        - id: cs_CkmAfWaZp76RwdpuUGz3PW
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王悦
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
        - id: cs_GyeCEXxuru6MFBfpC85njP
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王悦
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
        - id: cs_HV1foTbNfp9sLpmBGGQqLQ
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王悦
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
        - id: cs_EdfR3hhvVQwP3Mzww1ysPT
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王悦
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
        - id: cs_rMb8azdP8fpKTAmdvJy4Nz
          claim_id: c_eMjEV2ysa4YzcoSFrJwgXK
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王悦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王悦，东晋大臣。维基数据以独立条目 Q15944710 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| historical.period | 东晋 | accepted |
| name.primary | 王悦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |

## 外部来源

- [維基數據：王導（Q3274914）](https://www.wikidata.org/wiki/Q3274914)
- [維基數據：王悦（Q15944710）](https://www.wikidata.org/wiki/Q15944710)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王導](https://zh.wikipedia.org/wiki/王導)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王導（25788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25788&o=json)
- [CBDB 中国历代人物传记资料库：王悅（25789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25789&o=json)
