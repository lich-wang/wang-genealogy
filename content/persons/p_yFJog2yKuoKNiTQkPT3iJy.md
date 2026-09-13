---
schema: wang-person/v1
id: p_yFJog2yKuoKNiTQkPT3iJy
status: active
merged_into: null
display_name: 王虬
cbdb_id: 30880
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BH4CRuweHistGGN62xZFBB
        subject_person_id: p_yFJog2yKuoKNiTQkPT3iJy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虬，北魏人物。籍贯龍門。（中国历代人物传记资料库 CBDB 30880）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_JNr9sDrye73yY9hHQo7ANY
          claim_id: c_BH4CRuweHistGGN62xZFBB
          source_id: s_pPSLE9eiZCjFfyCAitCm2m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pPSLE9eiZCjFfyCAitCm2m
            source_type: api_record
            title: 维基数据：王虬（Q45418697）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418697
            external_identifier: Q45418697
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:13.139Z
            metadata_json: null
        - id: cs_JLi4r7XKisSynC8JIb4gID
          claim_id: c_BH4CRuweHistGGN62xZFBB
          source_id: s_8FbBfK3SQDN1cvWES2GHek
          stance: supports
          locator: CBDB:30880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8FbBfK3SQDN1cvWES2GHek
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王虯（30880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30880&o=json
            external_identifier: CBDB:30880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:13.294Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SvwKgZUoaBjc7B7VH7k6xf
        subject_person_id: p_yFJog2yKuoKNiTQkPT3iJy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1pTrGYpRH9KvYcgaD4NA1E
          claim_id: c_SvwKgZUoaBjc7B7VH7k6xf
          source_id: s_8FbBfK3SQDN1cvWES2GHek
          stance: supports
          locator: Q45418697
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_q6oTojfzv6Q9MNoXwTSuQk
          claim_id: c_SvwKgZUoaBjc7B7VH7k6xf
          source_id: s_pPSLE9eiZCjFfyCAitCm2m
          stance: supports
          locator: Q45418697
          quotation: null
          interpretation_note: null
          source:
            id: s_pPSLE9eiZCjFfyCAitCm2m
            source_type: api_record
            title: 维基数据：王虬（Q45418697）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418697
            external_identifier: Q45418697
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:13.139Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_L3BrBSuN1ZCPCPXEMP8xUY
        subject_person_id: p_Wjb7tMM4iyXPCuB8VWQHTE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yFJog2yKuoKNiTQkPT3iJy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bCUAvxpa8zDgBRHGE5Dwhg
          claim_id: c_L3BrBSuN1ZCPCPXEMP8xUY
          source_id: s_pPSLE9eiZCjFfyCAitCm2m
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pPSLE9eiZCjFfyCAitCm2m
            source_type: api_record
            title: 维基数据：王虬（Q45418697）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418697
            external_identifier: Q45418697
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:13.139Z
            metadata_json: null
        - id: cs_zaatN7mSbPmVj4xUJMRAy4
          claim_id: c_L3BrBSuN1ZCPCPXEMP8xUY
          source_id: s_8FbBfK3SQDN1cvWES2GHek
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_8FbBfK3SQDN1cvWES2GHek
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王虯（30880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30880&o=json
            external_identifier: CBDB:30880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:13.294Z
            metadata_json: null
        - id: cs_Xm2EGL7EnE75nxxFJHgrFA
          claim_id: c_L3BrBSuN1ZCPCPXEMP8xUY
          source_id: s_uQJ2Mh9aV985iBGR2hfxB7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uQJ2Mh9aV985iBGR2hfxB7
            source_type: api_record
            title: 维基数据：王焕（Q45418696）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418696
            external_identifier: Q45418696
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:37.944Z
            metadata_json: null
        - id: cs_aZkWEha5ENyWL8BSdb2PhD
          claim_id: c_L3BrBSuN1ZCPCPXEMP8xUY
          source_id: s_C5wSoXVFQ9PrMDgyj1bP5T
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_C5wSoXVFQ9PrMDgyj1bP5T
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王煥（30879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30879&o=json
            external_identifier: CBDB:30879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:38.104Z
            metadata_json: null
      object_person:
        id: p_Wjb7tMM4iyXPCuB8VWQHTE
        status: active
        display_name: 王焕
        merged_into_person_id: null
  children:
    - claim:
        id: c_8AAfPJAQs6A4G7E74GG4x5
        subject_person_id: p_yFJog2yKuoKNiTQkPT3iJy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kr9VdqKtFAJT7rCj4iNxGQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_eUaHCSrQBn3hNz1B6r7acC
          claim_id: c_8AAfPJAQs6A4G7E74GG4x5
          source_id: s_P4tinirCGxq9jxkKJ8Lc8C
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_P4tinirCGxq9jxkKJ8Lc8C
            source_type: api_record
            title: 维基数据：王彦（Q45418699）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418699
            external_identifier: Q45418699
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:58.902Z
            metadata_json: null
        - id: cs_x8494HvkjyDrF8m1WJuXa2
          claim_id: c_8AAfPJAQs6A4G7E74GG4x5
          source_id: s_kkoZvxHYknsSCd7XN45CjD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_kkoZvxHYknsSCd7XN45CjD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥（30881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30881&o=json
            external_identifier: CBDB:30881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:17:59.056Z
            metadata_json: null
        - id: cs_276EZM6cHo2PJwYDjKJQDu
          claim_id: c_8AAfPJAQs6A4G7E74GG4x5
          source_id: s_pPSLE9eiZCjFfyCAitCm2m
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pPSLE9eiZCjFfyCAitCm2m
            source_type: api_record
            title: 维基数据：王虬（Q45418697）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418697
            external_identifier: Q45418697
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:13.139Z
            metadata_json: null
        - id: cs_8qnp1JoiXemD1usNyvGVXP
          claim_id: c_8AAfPJAQs6A4G7E74GG4x5
          source_id: s_8FbBfK3SQDN1cvWES2GHek
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_8FbBfK3SQDN1cvWES2GHek
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王虯（30880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30880&o=json
            external_identifier: CBDB:30880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:13.294Z
            metadata_json: null
      object_person:
        id: p_kr9VdqKtFAJT7rCj4iNxGQ
        status: active
        display_name: 王彦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王虬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王虬，北魏人物。籍贯龍門。（中国历代人物传记资料库 CBDB 30880） | accepted |
| name.primary | 王虬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wjb7tMM4iyXPCuB8VWQHTE | 王焕 | accepted |
| children | p_kr9VdqKtFAJT7rCj4iNxGQ | 王彦 | accepted |

## 外部来源

- [维基数据：王焕（Q45418696）](https://www.wikidata.org/wiki/Q45418696)
- [维基数据：王虬（Q45418697）](https://www.wikidata.org/wiki/Q45418697)
- [维基数据：王彦（Q45418699）](https://www.wikidata.org/wiki/Q45418699)
- [CBDB 中国历代人物传记资料库：王煥（30879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30879&o=json)
- [CBDB 中国历代人物传记资料库：王虯（30880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30880&o=json)
- [CBDB 中国历代人物传记资料库：王彥（30881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30881&o=json)
