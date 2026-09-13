---
schema: wang-person/v1
id: p_U5JQDU5J5YYRKaCvpa53pZ
status: active
merged_into: null
display_name: 王明
cbdb_id: 18552
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BPWawX13QfAX6R1AQJviSx
        subject_person_id: p_U5JQDU5J5YYRKaCvpa53pZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明，宋人物。籍贯臨川，身份为地方士人/鄉紳，入仕封贈，曾任國公、防禦使、太師。（中国历代人物传记资料库 CBDB 18552）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_NfsMYc5FSmeBjt8rD8ysfu
          claim_id: c_BPWawX13QfAX6R1AQJviSx
          source_id: s_KqabcMCYghjh4BxLMBFcZP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KqabcMCYghjh4BxLMBFcZP
            source_type: api_record
            title: 维基数据：王明（Q45389716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389716
            external_identifier: Q45389716
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.732Z
            metadata_json: null
        - id: cs_Sy9saDKJRDk3vcOch_wqIM
          claim_id: c_BPWawX13QfAX6R1AQJviSx
          source_id: s_r1DEUtGRws9a3wk7bfrEBS
          stance: supports
          locator: CBDB:18552
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r1DEUtGRws9a3wk7bfrEBS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（18552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json
            external_identifier: CBDB:18552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.915Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PMwXWzbTEnDduQKNPsiC6K
        subject_person_id: p_U5JQDU5J5YYRKaCvpa53pZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Jw5PhQj3k79ZLekWupDBRU
          claim_id: c_PMwXWzbTEnDduQKNPsiC6K
          source_id: s_KqabcMCYghjh4BxLMBFcZP
          stance: supports
          locator: Q45389716
          quotation: null
          interpretation_note: null
          source:
            id: s_KqabcMCYghjh4BxLMBFcZP
            source_type: api_record
            title: 维基数据：王明（Q45389716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389716
            external_identifier: Q45389716
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.732Z
            metadata_json: null
        - id: cs_c6B1BLe2EWbX2nqpdR1gHq
          claim_id: c_PMwXWzbTEnDduQKNPsiC6K
          source_id: s_r1DEUtGRws9a3wk7bfrEBS
          stance: supports
          locator: Q45389716
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zD79Juzt3HzbbXExM7NgxM
        subject_person_id: p_U5JQDU5J5YYRKaCvpa53pZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_35QFKfx85i3nAWQ3kqdmAL
          claim_id: c_zD79Juzt3HzbbXExM7NgxM
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_5hW95bouu5ZEDEvq6Yrb41
          claim_id: c_zD79Juzt3HzbbXExM7NgxM
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
        - id: cs_BDRpnRAcXxZK5p4PgAyoJR
          claim_id: c_zD79Juzt3HzbbXExM7NgxM
          source_id: s_KqabcMCYghjh4BxLMBFcZP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KqabcMCYghjh4BxLMBFcZP
            source_type: api_record
            title: 维基数据：王明（Q45389716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389716
            external_identifier: Q45389716
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.732Z
            metadata_json: null
        - id: cs_CWA2eHN433gFXAhRt6ympX
          claim_id: c_zD79Juzt3HzbbXExM7NgxM
          source_id: s_r1DEUtGRws9a3wk7bfrEBS
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_r1DEUtGRws9a3wk7bfrEBS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（18552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json
            external_identifier: CBDB:18552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.915Z
            metadata_json: null
      object_person:
        id: p_qhr63u6HvGLzGzcHEvaWtZ
        status: active
        display_name: 王用之
        merged_into_person_id: null
    - claim:
        id: c_U9caK6q4rFCc1ExmLG7TwA
        subject_person_id: p_U5JQDU5J5YYRKaCvpa53pZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o255NHVLtnzoPr2i5G4ntm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_65qf5Bnwbdvr9Drr3ZnjVx
          claim_id: c_U9caK6q4rFCc1ExmLG7TwA
          source_id: s_r1DEUtGRws9a3wk7bfrEBS
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_r1DEUtGRws9a3wk7bfrEBS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（18552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json
            external_identifier: CBDB:18552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.915Z
            metadata_json: null
        - id: cs_MkJmTXMTjJyZYSS4k5dyem
          claim_id: c_U9caK6q4rFCc1ExmLG7TwA
          source_id: s_KqabcMCYghjh4BxLMBFcZP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KqabcMCYghjh4BxLMBFcZP
            source_type: api_record
            title: 维基数据：王明（Q45389716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389716
            external_identifier: Q45389716
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.732Z
            metadata_json: null
        - id: cs_JU3bk8JGAQwpM5TxP4cp16
          claim_id: c_U9caK6q4rFCc1ExmLG7TwA
          source_id: s_un7dCG7hRi14hUeg4EsewE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_un7dCG7hRi14hUeg4EsewE
            source_type: api_record
            title: 维基数据：王贯之（Q45362986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362986
            external_identifier: Q45362986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:43.280Z
            metadata_json: null
        - id: cs_aSGCiR3twH4xaiumASe3N7
          claim_id: c_U9caK6q4rFCc1ExmLG7TwA
          source_id: s_3Y9DQdDPm6vSqf3LqpD5ei
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_3Y9DQdDPm6vSqf3LqpD5ei
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貫之（3965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3965&o=json
            external_identifier: CBDB:3965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:43.471Z
            metadata_json: null
      object_person:
        id: p_o255NHVLtnzoPr2i5G4ntm
        status: active
        display_name: 王贯之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_oiPYkRmfeGcbZSwZLL6Zvd
        subject_person_id: p_U5JQDU5J5YYRKaCvpa53pZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_94q1e1836gtMmWzZkszZK7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J8HBk65tcAv5g-Nbh7lonN
          claim_id: c_oiPYkRmfeGcbZSwZLL6Zvd
          source_id: s_r1DEUtGRws9a3wk7bfrEBS
          stance: supports
          locator: 宋人傳記資料索引(電子版)，812;813：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_94q1e1836gtMmWzZkszZK7
        status: active
        display_name: 王益
        merged_into_person_id: null
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王明，宋人物。籍贯臨川，身份为地方士人/鄉紳，入仕封贈，曾任國公、防禦使、太師。（中国历代人物传记资料库 CBDB 18552） | accepted |
| name.primary | 王明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qhr63u6HvGLzGzcHEvaWtZ | 王用之 | accepted |
| children | p_o255NHVLtnzoPr2i5G4ntm | 王贯之 | accepted |
| descendants | p_94q1e1836gtMmWzZkszZK7 | 王益 | accepted |

## 外部来源

- [维基数据：王贯之（Q45362986）](https://www.wikidata.org/wiki/Q45362986)
- [维基数据：王明（Q45389716）](https://www.wikidata.org/wiki/Q45389716)
- [维基数据：王用之（Q45389721）](https://www.wikidata.org/wiki/Q45389721)
- [CBDB 中国历代人物传记资料库：王貫之（3965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3965&o=json)
- [CBDB 中国历代人物传记资料库：王明（18552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json)
- [CBDB 中国历代人物传记资料库：王用之（18553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json)
