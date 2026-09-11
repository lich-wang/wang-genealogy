---
schema: wang-person/v1
id: p_jXRz39yUsmFmBwPGPpqbVZ
status: active
merged_into: null
display_name: 王氏
cbdb_id: 5286
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YULQ2iP6W4n9CUYEGWwgsP
        subject_person_id: p_jXRz39yUsmFmBwPGPpqbVZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E7VQH3a8FbeAFKadfiECwG
          claim_id: c_YULQ2iP6W4n9CUYEGWwgsP
          source_id: s_LRbi2Y5W9u8c2L4YQe1wfF
          stance: supports
          locator: Q45364582
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_LRbi2Y5W9u8c2L4YQe1wfF
            source_type: api_record
            title: 维基数据：王氏（Q45364582）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364582
            external_identifier: Q45364582
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_4Dine5FRMLyBy9CNE6trqP
          claim_id: c_YULQ2iP6W4n9CUYEGWwgsP
          source_id: s_pk23EcPayEY4oHh82TbjzT
          stance: supports
          locator: CBDB:5286
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_pk23EcPayEY4oHh82TbjzT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5286&o=json
            external_identifier: CBDB:5286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JNPsj8NUGXUrd2B91SeJsR
        subject_person_id: p_jXRz39yUsmFmBwPGPpqbVZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏（1047年—1069年），宋人物。籍贯開封，入仕封贈，曾任縣君。（中国历代人物传记资料库 CBDB 5286）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hx63kcMmGxxJxv66cgUo5s
          claim_id: c_JNPsj8NUGXUrd2B91SeJsR
          source_id: s_LRbi2Y5W9u8c2L4YQe1wfF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_8CsU51ERebVpnGzzkgTlI0
          claim_id: c_JNPsj8NUGXUrd2B91SeJsR
          source_id: s_pk23EcPayEY4oHh82TbjzT
          stance: supports
          locator: CBDB:5286
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nBz1uPAojLY1hGDZi2mMd6
        subject_person_id: p_jXRz39yUsmFmBwPGPpqbVZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1047年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVNZ9Rr6EKABrjvfrj4yad
          claim_id: c_nBz1uPAojLY1hGDZi2mMd6
          source_id: s_LRbi2Y5W9u8c2L4YQe1wfF
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_U6EqJYTPLB8GQarH2X5r99
        subject_person_id: p_jXRz39yUsmFmBwPGPpqbVZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1069年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZGAYs5x82VaAU6h7H7owc6
          claim_id: c_U6EqJYTPLB8GQarH2X5r99
          source_id: s_LRbi2Y5W9u8c2L4YQe1wfF
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9Xp3zT5dXcWFibQ2yGJ2e4
        subject_person_id: p_ZPiJcbwj4KJjw7t1YK6E4f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jXRz39yUsmFmBwPGPpqbVZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nAEZV8cxbWvFQB7JRxxThb
          claim_id: c_9Xp3zT5dXcWFibQ2yGJ2e4
          source_id: s_LRbi2Y5W9u8c2L4YQe1wfF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_A8uHtSNLPga2iFoddRoScq
          claim_id: c_9Xp3zT5dXcWFibQ2yGJ2e4
          source_id: s_N2nE1uhLZsS7bBLZk7mBBv
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_N2nE1uhLZsS7bBLZk7mBBv
            source_type: api_record
            title: 维基数据：王世厚（Q45387147）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387147
            external_identifier: Q45387147
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_a8rn8xiEtj4XX8YTcJoWbq
          claim_id: c_9Xp3zT5dXcWFibQ2yGJ2e4
          source_id: s_7JFBKVPJcwxyUcg3ckqL1b
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_7JFBKVPJcwxyUcg3ckqL1b
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世厚（17763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17763&o=json
            external_identifier: CBDB:17763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:14.258Z
            metadata_json: null
      object_person:
        id: p_ZPiJcbwj4KJjw7t1YK6E4f
        status: active
        display_name: 王世厚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王氏 | accepted |
| bio.summary | 王氏（1047年—1069年），宋人物。籍贯開封，入仕封贈，曾任縣君。（中国历代人物传记资料库 CBDB 5286） | accepted |
| birth.date | 1047年 | accepted |
| death.date | 1069年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZPiJcbwj4KJjw7t1YK6E4f | 王世厚 | accepted |

## 外部来源

- [维基数据：王氏（Q45364582）](https://www.wikidata.org/wiki/Q45364582)
- [维基数据：王世厚（Q45387147）](https://www.wikidata.org/wiki/Q45387147)
- [CBDB 中国历代人物传记资料库：王氏（5286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5286&o=json)
- [CBDB 中国历代人物传记资料库：王世厚（17763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17763&o=json)
