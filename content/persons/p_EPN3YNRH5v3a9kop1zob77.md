---
schema: wang-person/v1
id: p_EPN3YNRH5v3a9kop1zob77
status: active
merged_into: null
display_name: 王瑩
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6tIrRx6C8_pZE37elE9Qg4
        subject_person_id: p_EPN3YNRH5v3a9kop1zob77
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩（5世纪—516年），史料所见人物。本项目依据《王瑩》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_a9_OC-gau5V0t_qHGsO-_e
          claim_id: c_6tIrRx6C8_pZE37elE9Qg4
          source_id: s_joJxBUhDogYHUGHf61ssdD
          stance: supports
          locator: Q11573176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_joJxBUhDogYHUGHf61ssdD
            source_type: api_record
            title: 维基数据：王瑩（Q11573176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573176
            external_identifier: Q11573176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:17.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%B9_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vjgTLfaKFXB1RaBacWhSRD
        subject_person_id: p_EPN3YNRH5v3a9kop1zob77
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 5世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0401-01-01
            latest: 0500-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fdiuc2DVJeAb69UohQTPxr
          claim_id: c_vjgTLfaKFXB1RaBacWhSRD
          source_id: s_joJxBUhDogYHUGHf61ssdD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_joJxBUhDogYHUGHf61ssdD
            source_type: api_record
            title: 维基数据：王瑩（Q11573176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573176
            external_identifier: Q11573176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:17.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%B9_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qSFfFoQA2MacgpvaqaVWrN
        subject_person_id: p_EPN3YNRH5v3a9kop1zob77
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 516年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0516-01-01
            latest: 0516-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PW5i3eosBL3gPCo8aZ81q4
          claim_id: c_qSFfFoQA2MacgpvaqaVWrN
          source_id: s_joJxBUhDogYHUGHf61ssdD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_joJxBUhDogYHUGHf61ssdD
            source_type: api_record
            title: 维基数据：王瑩（Q11573176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573176
            external_identifier: Q11573176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:17.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%B9_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_544QAVQVH8sN2bQ419UZCP
        subject_person_id: p_EPN3YNRH5v3a9kop1zob77
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KBPdEekq5n151DRoyFMg2Y
          claim_id: c_544QAVQVH8sN2bQ419UZCP
          source_id: s_joJxBUhDogYHUGHf61ssdD
          stance: supports
          locator: Q11573176
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Jbw66dYwQpDRxxRAgdjend
        subject_person_id: p_F3A2LfaZNs8ryznksG7eQn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EPN3YNRH5v3a9kop1zob77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Q4eDP2p22rN3ZHmDfv32pd
          claim_id: c_Jbw66dYwQpDRxxRAgdjend
          source_id: s_NuY8cr7vCDr1MHDyamJc6s
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NuY8cr7vCDr1MHDyamJc6s
            source_type: api_record
            title: 维基数据：王懋（Q22814998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814998
            external_identifier: Q22814998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
        - id: cs_33xDZdvJJvTd3sbzsK9jLn
          claim_id: c_Jbw66dYwQpDRxxRAgdjend
          source_id: s_joJxBUhDogYHUGHf61ssdD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_joJxBUhDogYHUGHf61ssdD
            source_type: api_record
            title: 维基数据：王瑩（Q11573176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573176
            external_identifier: Q11573176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:17.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%B9_(%E5%8D%97%E6%9C%9D)
        - id: cs_keJaM6QRyPgkLkFW8zvh4u
          claim_id: c_Jbw66dYwQpDRxxRAgdjend
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王懋 → 王莹
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
        - id: cs_JPeat6xM6xgLqTm5TQDe9B
          claim_id: c_Jbw66dYwQpDRxxRAgdjend
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王懋 → 王莹
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
        id: p_F3A2LfaZNs8ryznksG7eQn
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children:
    - claim:
        id: c_3J9gkCo7z68HbMHKwgRdme
        subject_person_id: p_EPN3YNRH5v3a9kop1zob77
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9H3YbeE77QSe5Xmr1AdR2N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uuSAPbtQ46NAfj6QAL8M4y
          claim_id: c_3J9gkCo7z68HbMHKwgRdme
          source_id: s_joJxBUhDogYHUGHf61ssdD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_joJxBUhDogYHUGHf61ssdD
            source_type: api_record
            title: 维基数据：王瑩（Q11573176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573176
            external_identifier: Q11573176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:17.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%B9_(%E5%8D%97%E6%9C%9D)
        - id: cs_b7KkgXU9cRWjSn8yGpiw6b
          claim_id: c_3J9gkCo7z68HbMHKwgRdme
          source_id: s_xeHt1T4jXjwQJWRvGdbmXa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xeHt1T4jXjwQJWRvGdbmXa
            source_type: api_record
            title: 维基数据：王實（Q38975814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q38975814
            external_identifier: Q38975814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:35.993Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A6
        - id: cs_7nYLyCc2FhbiAz5HGaMjKh
          claim_id: c_3J9gkCo7z68HbMHKwgRdme
          source_id: s_1v5SGAJADrjBATacB2EyUp
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王莹的小儿子
          interpretation_note: null
          source:
            id: s_1v5SGAJADrjBATacB2EyUp
            source_type: website
            title: 中文维基百科：王實
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.012Z
            metadata_json: null
        - id: cs_7tEc9qBNNwYDZfyJV5CmVN
          claim_id: c_3J9gkCo7z68HbMHKwgRdme
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王莹 → 王实
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
        - id: cs_Dy1yfs9TppzA6huc83VyJ9
          claim_id: c_3J9gkCo7z68HbMHKwgRdme
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王莹 → 王实
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
        - id: cs_AdM8kBrb847ctme8ec7Uyo
          claim_id: c_3J9gkCo7z68HbMHKwgRdme
          source_id: s_JiS1ZvUp9uJcvzAEBmVVzh
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 中国南北朝时南朝梁官员，王莹的小儿子。
          interpretation_note: null
          source:
            id: s_JiS1ZvUp9uJcvzAEBmVVzh
            source_type: website
            title: 中文维基百科：王實
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:13.140Z
            metadata_json: null
      object_person:
        id: p_9H3YbeE77QSe5Xmr1AdR2N
        status: active
        display_name: 王實
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_8UDxQZjAydPijmiMVFADpn
        subject_person_id: p_A8WhC2MD3ijQ1DL74YQJKa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EPN3YNRH5v3a9kop1zob77
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_4MWzwfgTcCaoxiqouKSvC6
          claim_id: c_8UDxQZjAydPijmiMVFADpn
          source_id: s_joJxBUhDogYHUGHf61ssdD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_joJxBUhDogYHUGHf61ssdD
            source_type: api_record
            title: 维基数据：王瑩（Q11573176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573176
            external_identifier: Q11573176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:17.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%B9_(%E5%8D%97%E6%9C%9D)
        - id: cs_6FbYeK2cVAq1tZaPEB5v9u
          claim_id: c_8UDxQZjAydPijmiMVFADpn
          source_id: s_7SALGNckMJzeRPrJQ58BZ9
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7SALGNckMJzeRPrJQ58BZ9
            source_type: api_record
            title: 维基数据：刘楚佩（Q16603329）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603329
            external_identifier: Q16603329
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:20.482Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9
        - id: cs_6Zw5DB9Jn5Zmmr5zvmDma2
          claim_id: c_8UDxQZjAydPijmiMVFADpn
          source_id: s_mjhk1DhQQFXMrWb8FcbzUX
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 她后来嫁给了义兴太守王莹
          interpretation_note: null
          source:
            id: s_mjhk1DhQQFXMrWb8FcbzUX
            source_type: website
            title: 中文维基百科：刘楚佩
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:26.027Z
            metadata_json: null
        - id: cs_1sL1huJnXURnopBnho4Vmb
          claim_id: c_8UDxQZjAydPijmiMVFADpn
          source_id: s_3yiHyGXC4F98p3f25DhCuv
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 她后来嫁给了义兴太守王莹。
          interpretation_note: null
          source:
            id: s_3yiHyGXC4F98p3f25DhCuv
            source_type: website
            title: 中文维基百科：刘楚佩
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:45.852Z
            metadata_json: null
      object_person:
        id: p_A8WhC2MD3ijQ1DL74YQJKa
        status: active
        display_name: 刘楚佩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑩（5世纪—516年），史料所见人物。本项目依据《王瑩》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 5世纪 | accepted |
| death.date | 516年 | accepted |
| name.primary | 王瑩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F3A2LfaZNs8ryznksG7eQn | 王懋 | accepted |
| children | p_9H3YbeE77QSe5Xmr1AdR2N | 王實 | accepted |
| spouses | p_A8WhC2MD3ijQ1DL74YQJKa | 刘楚佩 | accepted |

## 外部来源

- [维基数据：刘楚佩（Q16603329）](https://www.wikidata.org/wiki/Q16603329)
- [维基数据：王懋（Q22814998）](https://www.wikidata.org/wiki/Q22814998)
- [维基数据：王實（Q38975814）](https://www.wikidata.org/wiki/Q38975814)
- [维基数据：王瑩（Q11573176）](https://www.wikidata.org/wiki/Q11573176)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：刘楚佩](https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9)
- [中文维基百科：王實](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A6)
