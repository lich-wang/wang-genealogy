---
schema: wang-person/v1
id: p_RQFRb7ZkfNHmmspp2wmJ84
status: active
merged_into: null
display_name: 王方泰
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HrwSCw344pSRVTPk2jh7NE
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方泰，唐人物。CBDB 记录其籍贯记录为河南府，曾任太府卿、太府少卿。中国历代人物传记资料库（CBDB）以人物编号 154137 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YEBe1ENiXYnxTjCtHX68Wm
          claim_id: c_HrwSCw344pSRVTPk2jh7NE
          source_id: s_dW2Bb8p5tn4ffUPCY1ANMp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_dW2Bb8p5tn4ffUPCY1ANMp
            source_type: api_record
            title: 维基数据：王方泰（Q45623207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623207
            external_identifier: Q45623207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_fy2s0fadib3-FLhURH8zxE
          claim_id: c_HrwSCw344pSRVTPk2jh7NE
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: CBDB:154137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X5FE4bgHktQFQtEGNU1fYX
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方泰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4ACkXZSPdcqBccQJyo4ZAJ
          claim_id: c_X5FE4bgHktQFQtEGNU1fYX
          source_id: s_dW2Bb8p5tn4ffUPCY1ANMp
          stance: supports
          locator: Q45623207
          quotation: null
          interpretation_note: null
          source:
            id: s_dW2Bb8p5tn4ffUPCY1ANMp
            source_type: api_record
            title: 维基数据：王方泰（Q45623207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623207
            external_identifier: Q45623207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_aV1HBQzB5b4PjCYtBvK5Q1
          claim_id: c_X5FE4bgHktQFQtEGNU1fYX
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: Q45623207
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Qj1xuJv9H6hve6fdK9QfBv
        subject_person_id: p_Ghms3xa2yCWnMb7o2tgKE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jiAmGN2EU14hovVHTxwSz4
          claim_id: c_Qj1xuJv9H6hve6fdK9QfBv
          source_id: s_j6jdwhiGJQo39kTF1QVLj8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_j6jdwhiGJQo39kTF1QVLj8
            source_type: api_record
            title: 维基数据：王弘让（Q45623145）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623145
            external_identifier: Q45623145
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:06.357Z
            metadata_json: null
        - id: cs_AKkKNSyMMuTNuypHo1fgGc
          claim_id: c_Qj1xuJv9H6hve6fdK9QfBv
          source_id: s_dW2Bb8p5tn4ffUPCY1ANMp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_dW2Bb8p5tn4ffUPCY1ANMp
            source_type: api_record
            title: 维基数据：王方泰（Q45623207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623207
            external_identifier: Q45623207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_QG6QFGFUcaved39Hv3dD33
          claim_id: c_Qj1xuJv9H6hve6fdK9QfBv
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person:
        id: p_Ghms3xa2yCWnMb7o2tgKE4
        status: active
        display_name: 王弘让
        merged_into_person_id: null
  children:
    - claim:
        id: c_kp5iwwwb7WMMY7FTUtGoiP
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bj8bFyazic2NrpdNesGfKg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_P7DpASAKwij6T313EPXJWc
          claim_id: c_kp5iwwwb7WMMY7FTUtGoiP
          source_id: s_dW2Bb8p5tn4ffUPCY1ANMp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dW2Bb8p5tn4ffUPCY1ANMp
            source_type: api_record
            title: 维基数据：王方泰（Q45623207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623207
            external_identifier: Q45623207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_SkL2MoF2GJZ7tC2DRGCogz
          claim_id: c_kp5iwwwb7WMMY7FTUtGoiP
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
        - id: cs_LA4XiACbyP37LTPTFQF4DG
          claim_id: c_kp5iwwwb7WMMY7FTUtGoiP
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oEZhBpmPhCMLgvgFWpzFVy
            source_type: api_record
            title: 维基数据：王鸿（Q45507766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507766
            external_identifier: Q45507766
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_K2eXFEjP2DpGzcWkUL9CkN
          claim_id: c_kp5iwwwb7WMMY7FTUtGoiP
          source_id: s_842fPHTiuXebkgrsSQy6Wc
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_842fPHTiuXebkgrsSQy6Wc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鴻（140992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json
            external_identifier: CBDB:140992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.350Z
            metadata_json: null
      object_person:
        id: p_Bj8bFyazic2NrpdNesGfKg
        status: active
        display_name: 王鸿
        merged_into_person_id: null
    - claim:
        id: c_ZKLbd97kNQR5PqFvC4h847
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_awEWD4PFE8u2EVxcU51iT5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3qQHg9ReV7AP4hWN8piFYj
          claim_id: c_ZKLbd97kNQR5PqFvC4h847
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person:
        id: p_awEWD4PFE8u2EVxcU51iT5
        status: active
        display_name: 王源
        merged_into_person_id: null
    - claim:
        id: c_Go9HTAVZrUrYthCGsyiJyX
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kuwfewmDv8zJpZ96k2KbfM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i1YsDX82gHpYJ13jH2GK9E
          claim_id: c_Go9HTAVZrUrYthCGsyiJyX
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person:
        id: p_kuwfewmDv8zJpZ96k2KbfM
        status: active
        display_name: 王澄
        merged_into_person_id: null
    - claim:
        id: c_U3cVoMZFhakhwDQtiDX9kG
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_R9Fp842NrLyBtZxFpCjEo4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wjj2aUCfh9vPwLnUDzQhur
          claim_id: c_U3cVoMZFhakhwDQtiDX9kG
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person:
        id: p_R9Fp842NrLyBtZxFpCjEo4
        status: active
        display_name: 王濬
        merged_into_person_id: null
    - claim:
        id: c_JpdLT8cyKzJur5bF3pEUuh
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CnZaSbhkknBxcKEGNZs4oi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jGXMRx5P2GxM12gX6i3o1J
          claim_id: c_JpdLT8cyKzJur5bF3pEUuh
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person:
        id: p_CnZaSbhkknBxcKEGNZs4oi
        status: active
        display_name: 王濛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王方泰，唐人物。CBDB 记录其籍贯记录为河南府，曾任太府卿、太府少卿。中国历代人物传记资料库（CBDB）以人物编号 154137 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王方泰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ghms3xa2yCWnMb7o2tgKE4 | 王弘让 | accepted |
| children | p_Bj8bFyazic2NrpdNesGfKg | 王鸿 | accepted |
| children | p_awEWD4PFE8u2EVxcU51iT5 | 王源 | accepted |
| children | p_kuwfewmDv8zJpZ96k2KbfM | 王澄 | accepted |
| children | p_R9Fp842NrLyBtZxFpCjEo4 | 王濬 | accepted |
| children | p_CnZaSbhkknBxcKEGNZs4oi | 王濛 | accepted |

## 外部来源

- [维基数据：王方泰（Q45623207）](https://www.wikidata.org/wiki/Q45623207)
- [维基数据：王弘让（Q45623145）](https://www.wikidata.org/wiki/Q45623145)
- [维基数据：王鸿（Q45507766）](https://www.wikidata.org/wiki/Q45507766)
- [CBDB 中国历代人物传记资料库：王方泰（154137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json)
- [CBDB 中国历代人物传记资料库：王鴻（140992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json)
