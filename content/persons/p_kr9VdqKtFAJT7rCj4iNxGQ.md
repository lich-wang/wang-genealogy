---
schema: wang-person/v1
id: p_kr9VdqKtFAJT7rCj4iNxGQ
status: active
merged_into: null
display_name: 王彦
cbdb_id: 30881
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WePTXvZZbGK586sYq3hnbj
        subject_person_id: p_kr9VdqKtFAJT7rCj4iNxGQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦，北魏人物。CBDB 记录其籍贯记录为龍門。中国历代人物传记资料库（CBDB）以人物编号 30881 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bUEH1hWoDFNGHqg588VNND
          claim_id: c_WePTXvZZbGK586sYq3hnbj
          source_id: s_P4tinirCGxq9jxkKJ8Lc8C
          stance: supports
          locator: null
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
        - id: cs_HuKhs-gUJ4XOYBkFlPieVg
          claim_id: c_WePTXvZZbGK586sYq3hnbj
          source_id: s_kkoZvxHYknsSCd7XN45CjD
          stance: supports
          locator: CBDB:30881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iUcbBBxGKBgSMBJ7wVHWvg
        subject_person_id: p_kr9VdqKtFAJT7rCj4iNxGQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ApVo73EHdmA4QEDL51GrP9
          claim_id: c_iUcbBBxGKBgSMBJ7wVHWvg
          source_id: s_P4tinirCGxq9jxkKJ8Lc8C
          stance: supports
          locator: Q45418699
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
        - id: cs_Bw2tkNpAf424nwuQCDy1Fv
          claim_id: c_iUcbBBxGKBgSMBJ7wVHWvg
          source_id: s_kkoZvxHYknsSCd7XN45CjD
          stance: supports
          locator: Q45418699
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_yFJog2yKuoKNiTQkPT3iJy
        status: active
        display_name: 王虬
        merged_into_person_id: null
  children:
    - claim:
        id: c_mxFVBnwLumzHeXEpZPCucL
        subject_person_id: p_kr9VdqKtFAJT7rCj4iNxGQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pGM7RMwCzi7kwVnBhRjRdL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5Gfn5tnKMFqJpVrWyztRSf
          claim_id: c_mxFVBnwLumzHeXEpZPCucL
          source_id: s_pS2AvoSTHQe1PygJoudYDu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pS2AvoSTHQe1PygJoudYDu
            source_type: api_record
            title: 维基数据：王杰（Q45418700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418700
            external_identifier: Q45418700
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:25.154Z
            metadata_json: null
        - id: cs_hhLNnL7c7puJjb2VE9nZGC
          claim_id: c_mxFVBnwLumzHeXEpZPCucL
          source_id: s_2GFRR8sizZhBqPZU9n4H1r
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_2GFRR8sizZhBqPZU9n4H1r
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傑（30882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30882&o=json
            external_identifier: CBDB:30882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:25.290Z
            metadata_json: null
        - id: cs_qnHsqRbV4WGCUaLkxjiyLn
          claim_id: c_mxFVBnwLumzHeXEpZPCucL
          source_id: s_P4tinirCGxq9jxkKJ8Lc8C
          stance: supports
          locator: P40（子女）
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
        - id: cs_33rxMYPa8276va5DK3pHy8
          claim_id: c_mxFVBnwLumzHeXEpZPCucL
          source_id: s_kkoZvxHYknsSCd7XN45CjD
          stance: supports
          locator: 亲属关系：子
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
      object_person:
        id: p_pGM7RMwCzi7kwVnBhRjRdL
        status: active
        display_name: 王杰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彦，北魏人物。CBDB 记录其籍贯记录为龍門。中国历代人物传记资料库（CBDB）以人物编号 30881 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王彦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yFJog2yKuoKNiTQkPT3iJy | 王虬 | accepted |
| children | p_pGM7RMwCzi7kwVnBhRjRdL | 王杰 | accepted |

## 外部来源

- [维基数据：王杰（Q45418700）](https://www.wikidata.org/wiki/Q45418700)
- [维基数据：王虬（Q45418697）](https://www.wikidata.org/wiki/Q45418697)
- [维基数据：王彦（Q45418699）](https://www.wikidata.org/wiki/Q45418699)
- [CBDB 中国历代人物传记资料库：王傑（30882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30882&o=json)
- [CBDB 中国历代人物传记资料库：王虯（30880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30880&o=json)
- [CBDB 中国历代人物传记资料库：王彥（30881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30881&o=json)
