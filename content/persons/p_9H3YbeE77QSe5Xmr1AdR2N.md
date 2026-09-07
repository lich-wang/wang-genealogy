---
schema: wang-person/v1
id: p_9H3YbeE77QSe5Xmr1AdR2N
status: active
merged_into: null
display_name: 王實
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3nAudu3Q8wGYNrpo4v9SEu
        subject_person_id: p_9H3YbeE77QSe5Xmr1AdR2N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實，中国古代历史人物。维基数据以独立条目 Q38975814 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_LTJlnJ1VaqXHVtxMCHJ1OB
          claim_id: c_3nAudu3Q8wGYNrpo4v9SEu
          source_id: s_xeHt1T4jXjwQJWRvGdbmXa
          stance: supports
          locator: Q38975814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FpdnppnmCBcULrGupQw69m
        subject_person_id: p_9H3YbeE77QSe5Xmr1AdR2N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XVJEJcwNV4L8SA4W9wpoQd
          claim_id: c_FpdnppnmCBcULrGupQw69m
          source_id: s_xeHt1T4jXjwQJWRvGdbmXa
          stance: supports
          locator: Q38975814
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_EPN3YNRH5v3a9kop1zob77
        status: active
        display_name: 王瑩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_rVAWgsqNJsxR4kbJJ5YMk9
        subject_person_id: p_9H3YbeE77QSe5Xmr1AdR2N
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_neKQnotq8nJpW2A68RCMsU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zhErCHuo8RWSe74axtPEHt
          claim_id: c_rVAWgsqNJsxR4kbJJ5YMk9
          source_id: s_1v5SGAJADrjBATacB2EyUp
          stance: supports
          locator: 条文：妻/娶
          quotation: 王实初为秘书郎，娶梁武帝女安吉公主萧玉誌，袭爵建城县公，为新安郡{{dn|date=2024年08月15日}}太守，王实的堂兄去找他，他给堂兄五十万铜钱，不准他在郡内或者路上散用
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
        - id: cs_xXu4GJG6Ekd7wD3vM5tWc2
          claim_id: c_rVAWgsqNJsxR4kbJJ5YMk9
          source_id: s_JiS1ZvUp9uJcvzAEBmVVzh
          stance: supports
          locator: 条文：妻/娶
          quotation: 王实初为秘书郎，娶梁武帝女安吉公主萧玉誌，袭爵建城县公，为新安郡太守，王实的堂兄去找他，他给堂兄五十万铜钱，不准他在郡内或者路上散用
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
        id: p_neKQnotq8nJpW2A68RCMsU
        status: active
        display_name: 梁武帝
        merged_into_person_id: null
    - claim:
        id: c_wqL9WwXbGb9KmX6uRC9qWk
        subject_person_id: p_9H3YbeE77QSe5Xmr1AdR2N
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sMN2nbNbLtXTEWF44hM1Hf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nz7z9mUozhJ2TMx4sytwCW
          claim_id: c_wqL9WwXbGb9KmX6uRC9qWk
          source_id: s_1v5SGAJADrjBATacB2EyUp
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶梁武帝女安吉公主萧玉誌
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
        - id: cs_33jD7RjGUMnUvJD5GyKM4M
          claim_id: c_wqL9WwXbGb9KmX6uRC9qWk
          source_id: s_JiS1ZvUp9uJcvzAEBmVVzh
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶梁武帝女安吉公主萧玉誌，袭爵建城县公
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
        id: p_sMN2nbNbLtXTEWF44hM1Hf
        status: active
        display_name: 萧玉誌
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王實，中国古代历史人物。维基数据以独立条目 Q38975814 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王實 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EPN3YNRH5v3a9kop1zob77 | 王瑩 | accepted |
| spouses | p_neKQnotq8nJpW2A68RCMsU | 梁武帝 | accepted |
| spouses | p_sMN2nbNbLtXTEWF44hM1Hf | 萧玉誌 | accepted |

## 外部来源

- [维基数据：王實（Q38975814）](https://www.wikidata.org/wiki/Q38975814)
- [维基数据：王瑩（Q11573176）](https://www.wikidata.org/wiki/Q11573176)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王實](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A6)
