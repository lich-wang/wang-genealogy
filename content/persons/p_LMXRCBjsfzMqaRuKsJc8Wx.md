---
schema: wang-person/v1
id: p_LMXRCBjsfzMqaRuKsJc8Wx
status: active
merged_into: null
display_name: 王津
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tik93HQ1YvGYLeLJ3zYBtM
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王津
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DuQxaysjXFxWgB6wFByDrN
          claim_id: c_tik93HQ1YvGYLeLJ3zYBtM
          source_id: s_h4fb8hebaSCF7ivWsq6wnS
          stance: supports
          locator: CBDB:213202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213202）
          source: &a1
            id: s_h4fb8hebaSCF7ivWsq6wnS
            source_type: api_record
            title: 中国历代人物传记资料库：王津（CBDB 213202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213202&o=json
            external_identifier: CBDB:213202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A7UsFWJHe7q2uWJBV2ScYE
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王津，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213202）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qCJdKr3-3RL9jpn94-mH2E
          claim_id: c_A7UsFWJHe7q2uWJBV2ScYE
          source_id: s_h4fb8hebaSCF7ivWsq6wnS
          stance: supports
          locator: CBDB:213202
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_L5WOaYm1xQcbfOVzQSl9-a
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5TirH8Xhthe5OfN8szaPtV
          claim_id: c_L5WOaYm1xQcbfOVzQSl9-a
          source_id: s_h4fb8hebaSCF7ivWsq6wnS
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v7QTG8DDAv27Aki2Sqpnvw
        status: active
        display_name: 王問卿
        merged_into_person_id: null
    - claim:
        id: c_x2qDnZ9DVeRwgzf_uQSqS9
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9TMxY3DJJVQSN8rfmTH838
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YjaDlPAU8xYaA0dNu2KUFl
          claim_id: c_x2qDnZ9DVeRwgzf_uQSqS9
          source_id: s_QcgC0i7YNetxHvqgcPQX2-
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王問卿 为同胞（CBDB 记「兄」），王問卿 之父／母即 王棟 之父／母。
          source:
            id: s_QcgC0i7YNetxHvqgcPQX2-
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 213212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213212&o=json
            external_identifier: CBDB:213212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9TMxY3DJJVQSN8rfmTH838
        status: active
        display_name: 王棟
        merged_into_person_id: null
    - claim:
        id: c_BocsTjjA1H-Y6sQe7zhVYp
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CDvrsuRMwV8T8ENNHyMzid
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivZq-XKrMK_XCiXga5FrJ1
          claim_id: c_BocsTjjA1H-Y6sQe7zhVYp
          source_id: s_NXuFljl__jjW0MsbGWxfhC
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王栢 与 王問卿 为同胞（CBDB 记「弟」），王問卿 之父／母即 王栢 之父／母。
          source:
            id: s_NXuFljl__jjW0MsbGWxfhC
            source_type: api_record
            title: 中国历代人物传记资料库：王栢（CBDB 213211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213211&o=json
            external_identifier: CBDB:213211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CDvrsuRMwV8T8ENNHyMzid
        status: active
        display_name: 王栢
        merged_into_person_id: null
    - claim:
        id: c_6o-Rtlff6bWuuBdck2jI7-
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ejj2hgcPK3mGAwt4U6pasD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_stvqdrF4uuCUJ4_zzbuS8o
          claim_id: c_6o-Rtlff6bWuuBdck2jI7-
          source_id: s_VC_Nll3DNpTevov7dAoHXH
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王本 与 王問卿 为同胞（CBDB 记「弟」），王問卿 之父／母即 王本 之父／母。
          source:
            id: s_VC_Nll3DNpTevov7dAoHXH
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 213210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213210&o=json
            external_identifier: CBDB:213210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ejj2hgcPK3mGAwt4U6pasD
        status: active
        display_name: 王本
        merged_into_person_id: null
    - claim:
        id: c_-uayTPxKGxoKWKn0Mzku6_
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GjGiibm4LpCUtLELc9X7aj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EWFveFUVo6syhs2YMcrx2C
          claim_id: c_-uayTPxKGxoKWKn0Mzku6_
          source_id: s_yk6hAnlnIzCuCZAfF_-87v
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王术 与 王問卿 为同胞（CBDB 记「弟」），王問卿 之父／母即 王术 之父／母。
          source:
            id: s_yk6hAnlnIzCuCZAfF_-87v
            source_type: api_record
            title: 中国历代人物传记资料库：王术（CBDB 213209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213209&o=json
            external_identifier: CBDB:213209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GjGiibm4LpCUtLELc9X7aj
        status: active
        display_name: 王术
        merged_into_person_id: null
    - claim:
        id: c_6SVPsQy_cyMLfJxDLlMlyA
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KTnNBwV3CHPjmkPa1XhXGf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2He2WXcZRnVwbCT81SRIqY
          claim_id: c_6SVPsQy_cyMLfJxDLlMlyA
          source_id: s_PA5QIGGUH8p-Jp6uc4ffSU
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王祖福 与 王問卿 为同胞（CBDB 记「弟」），王問卿 之父／母即 王祖福 之父／母。
          source:
            id: s_PA5QIGGUH8p-Jp6uc4ffSU
            source_type: api_record
            title: 中国历代人物传记资料库：王祖福（CBDB 213206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213206&o=json
            external_identifier: CBDB:213206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KTnNBwV3CHPjmkPa1XhXGf
        status: active
        display_name: 王祖福
        merged_into_person_id: null
    - claim:
        id: c_Kb-Tbl4JONw1Js8WgLR86y
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q9rBAKZ68eWprGhbiDzntS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8_chUdgUyMbQFMcM4oMj-
          claim_id: c_Kb-Tbl4JONw1Js8WgLR86y
          source_id: s_jUGCLxrQkf4WTZADafa0Oz
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王祖德 与 王問卿 为同胞（CBDB 记「弟」），王問卿 之父／母即 王祖德 之父／母。
          source:
            id: s_jUGCLxrQkf4WTZADafa0Oz
            source_type: api_record
            title: 中国历代人物传记资料库：王祖德（CBDB 213207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213207&o=json
            external_identifier: CBDB:213207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q9rBAKZ68eWprGhbiDzntS
        status: active
        display_name: 王祖德
        merged_into_person_id: null
    - claim:
        id: c_eexUp3E5eAIzgq8hGKm30K
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hYqw4TjUxGXuvJCbcaKQKD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q63aEOoC5IZSXMhQZz7OZC
          claim_id: c_eexUp3E5eAIzgq8hGKm30K
          source_id: s_siI7i6vEsAG68-ClZz-omf
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王祖齡 与 王問卿 为同胞（CBDB 记「弟」），王問卿 之父／母即 王祖齡 之父／母。
          source:
            id: s_siI7i6vEsAG68-ClZz-omf
            source_type: api_record
            title: 中国历代人物传记资料库：王祖齡（CBDB 213208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213208&o=json
            external_identifier: CBDB:213208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hYqw4TjUxGXuvJCbcaKQKD
        status: active
        display_name: 王祖齡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王津

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王津 | accepted |
| bio.summary | 王津，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213202） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_v7QTG8DDAv27Aki2Sqpnvw | 王問卿 | accepted |
| children | p_9TMxY3DJJVQSN8rfmTH838 | 王棟 | accepted |
| children | p_CDvrsuRMwV8T8ENNHyMzid | 王栢 | accepted |
| children | p_Ejj2hgcPK3mGAwt4U6pasD | 王本 | accepted |
| children | p_GjGiibm4LpCUtLELc9X7aj | 王术 | accepted |
| children | p_KTnNBwV3CHPjmkPa1XhXGf | 王祖福 | accepted |
| children | p_Q9rBAKZ68eWprGhbiDzntS | 王祖德 | accepted |
| children | p_hYqw4TjUxGXuvJCbcaKQKD | 王祖齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王栢（CBDB 213211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213211&o=json)
- [中国历代人物传记资料库：王本（CBDB 213210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213210&o=json)
- [中国历代人物传记资料库：王棟（CBDB 213212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213212&o=json)
- [中国历代人物传记资料库：王津（CBDB 213202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213202&o=json)
- [中国历代人物传记资料库：王术（CBDB 213209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213209&o=json)
- [中国历代人物传记资料库：王祖德（CBDB 213207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213207&o=json)
- [中国历代人物传记资料库：王祖福（CBDB 213206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213206&o=json)
- [中国历代人物传记资料库：王祖齡（CBDB 213208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213208&o=json)
