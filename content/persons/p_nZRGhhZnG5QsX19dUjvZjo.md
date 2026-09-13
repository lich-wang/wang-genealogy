---
schema: wang-person/v1
id: p_nZRGhhZnG5QsX19dUjvZjo
status: active
merged_into: null
display_name: 王寓
cbdb_id: 30874
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Keave9RxERYPdx5C9nk4qX
        subject_person_id: p_nZRGhhZnG5QsX19dUjvZjo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寓，東晉人物。籍贯江寧。（中国历代人物传记资料库 CBDB 30874）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_peWs8KKLR5spJqnpkQbces
          claim_id: c_Keave9RxERYPdx5C9nk4qX
          source_id: s_fEq1f59QawFfRrhVuAKx9Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fEq1f59QawFfRrhVuAKx9Q
            source_type: api_record
            title: 维基数据：王寓（Q45418687）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418687
            external_identifier: Q45418687
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_DLuZz_AMtBGvubB75KTK_k
          claim_id: c_Keave9RxERYPdx5C9nk4qX
          source_id: s_F6QPA1zRxu9sxNuwAF7wPd
          stance: supports
          locator: CBDB:30874
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_F6QPA1zRxu9sxNuwAF7wPd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寓（30874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30874&o=json
            external_identifier: CBDB:30874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.768Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gGmY4Wm6WygoP2GAF8iHk3
        subject_person_id: p_nZRGhhZnG5QsX19dUjvZjo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寓
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CSxPDWHdHot1LAsjtfBs2J
          claim_id: c_gGmY4Wm6WygoP2GAF8iHk3
          source_id: s_F6QPA1zRxu9sxNuwAF7wPd
          stance: supports
          locator: Q45418687
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Yg62qpTqFirn34Lqtibtjk
          claim_id: c_gGmY4Wm6WygoP2GAF8iHk3
          source_id: s_fEq1f59QawFfRrhVuAKx9Q
          stance: supports
          locator: Q45418687
          quotation: null
          interpretation_note: null
          source:
            id: s_fEq1f59QawFfRrhVuAKx9Q
            source_type: api_record
            title: 维基数据：王寓（Q45418687）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418687
            external_identifier: Q45418687
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_KMrfWta1r7RMS6MUiTezkS
        subject_person_id: p_nZRGhhZnG5QsX19dUjvZjo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cfc3VQ6S7FLhbGyGSqaBz6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2mWkutDcA8L1P4HmCWqfgC
          claim_id: c_KMrfWta1r7RMS6MUiTezkS
          source_id: s_CJB5NYcUSoXtsEJ3UCDTib
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CJB5NYcUSoXtsEJ3UCDTib
            source_type: api_record
            title: 维基数据：王罕（Q45418688）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418688
            external_identifier: Q45418688
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.577Z
            metadata_json: null
        - id: cs_ySHJdxEB4nQfNsH2ULR1KF
          claim_id: c_KMrfWta1r7RMS6MUiTezkS
          source_id: s_bvVk6fidXiLa3A2pzp3qwT
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bvVk6fidXiLa3A2pzp3qwT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王罕（30875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30875&o=json
            external_identifier: CBDB:30875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.913Z
            metadata_json: null
        - id: cs_8qNDQamycaqofFBZ79z17u
          claim_id: c_KMrfWta1r7RMS6MUiTezkS
          source_id: s_fEq1f59QawFfRrhVuAKx9Q
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fEq1f59QawFfRrhVuAKx9Q
            source_type: api_record
            title: 维基数据：王寓（Q45418687）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418687
            external_identifier: Q45418687
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_ArkN1a31MHK3xn7d9m9B4d
          claim_id: c_KMrfWta1r7RMS6MUiTezkS
          source_id: s_F6QPA1zRxu9sxNuwAF7wPd
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_F6QPA1zRxu9sxNuwAF7wPd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寓（30874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30874&o=json
            external_identifier: CBDB:30874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.768Z
            metadata_json: null
      object_person:
        id: p_cfc3VQ6S7FLhbGyGSqaBz6
        status: active
        display_name: 王罕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寓，東晉人物。籍贯江寧。（中国历代人物传记资料库 CBDB 30874） | accepted |
| name.primary | 王寓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cfc3VQ6S7FLhbGyGSqaBz6 | 王罕 | accepted |

## 外部来源

- [维基数据：王罕（Q45418688）](https://www.wikidata.org/wiki/Q45418688)
- [维基数据：王寓（Q45418687）](https://www.wikidata.org/wiki/Q45418687)
- [CBDB 中国历代人物传记资料库：王罕（30875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30875&o=json)
- [CBDB 中国历代人物传记资料库：王寓（30874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30874&o=json)
