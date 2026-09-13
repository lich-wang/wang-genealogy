---
schema: wang-person/v1
id: p_oqJyshhnaM6gipZPsvALnC
status: active
merged_into: null
display_name: 王绘
cbdb_id: 175380
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VCCyMqPNgwuKAMTuFBtT59
        subject_person_id: p_oqJyshhnaM6gipZPsvALnC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绘（卒于770年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_M87steEyfu4YyEFppr8Av8
          claim_id: c_VCCyMqPNgwuKAMTuFBtT59
          source_id: s_BPayNbcmVFhh17mWcYhmRB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BPayNbcmVFhh17mWcYhmRB
            source_type: api_record
            title: 维基数据：王绘（Q45656368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656368
            external_identifier: Q45656368
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_muAqNNbpcZMd4jE4N1lNYG
          claim_id: c_VCCyMqPNgwuKAMTuFBtT59
          source_id: s_hbkweP25trTPPowjoo9LfM
          stance: supports
          locator: CBDB:175380
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hbkweP25trTPPowjoo9LfM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王繪（175380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175380&o=json
            external_identifier: CBDB:175380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.281Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MJBCKFS63MaDrrLasCnSnF
        subject_person_id: p_oqJyshhnaM6gipZPsvALnC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6eJRijPRKwGPGwGBxLLzHg
          claim_id: c_MJBCKFS63MaDrrLasCnSnF
          source_id: s_BPayNbcmVFhh17mWcYhmRB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BPayNbcmVFhh17mWcYhmRB
            source_type: api_record
            title: 维基数据：王绘（Q45656368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656368
            external_identifier: Q45656368
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nGss7PfBDGNrNmHk941xMR
        subject_person_id: p_oqJyshhnaM6gipZPsvALnC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VpmxMGHKQg2WsEKfYQR6pp
          claim_id: c_nGss7PfBDGNrNmHk941xMR
          source_id: s_BPayNbcmVFhh17mWcYhmRB
          stance: supports
          locator: Q45656368
          quotation: null
          interpretation_note: null
          source:
            id: s_BPayNbcmVFhh17mWcYhmRB
            source_type: api_record
            title: 维基数据：王绘（Q45656368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656368
            external_identifier: Q45656368
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_c1yeJFpFnRzWB34HpJqRMR
          claim_id: c_nGss7PfBDGNrNmHk941xMR
          source_id: s_hbkweP25trTPPowjoo9LfM
          stance: supports
          locator: Q45656368
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uWFWcUtscqQ2jNiC7qmoB6
        subject_person_id: p_gNNKGh9cA8mj3unQMkURSh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oqJyshhnaM6gipZPsvALnC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GdN41aVN2ha6KYRuPJSr63
          claim_id: c_uWFWcUtscqQ2jNiC7qmoB6
          source_id: s_6PJvQF2kNSdTSx2XaQ7NC3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6PJvQF2kNSdTSx2XaQ7NC3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json
            external_identifier: CBDB:175379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.513Z
            metadata_json: null
        - id: cs_TQPZNrCg4PUNC3BaAjRQdC
          claim_id: c_uWFWcUtscqQ2jNiC7qmoB6
          source_id: s_QQrkFEYA4rGqsNhmtcv3Fp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QQrkFEYA4rGqsNhmtcv3Fp
            source_type: api_record
            title: 维基数据：王升（Q45656308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656308
            external_identifier: Q45656308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_7wHEdBRQoCYKnC6ENfCKWB
          claim_id: c_uWFWcUtscqQ2jNiC7qmoB6
          source_id: s_BPayNbcmVFhh17mWcYhmRB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BPayNbcmVFhh17mWcYhmRB
            source_type: api_record
            title: 维基数据：王绘（Q45656368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656368
            external_identifier: Q45656368
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_8tyV9eWC8YjNUDyUsMyEQf
          claim_id: c_uWFWcUtscqQ2jNiC7qmoB6
          source_id: s_hbkweP25trTPPowjoo9LfM
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hbkweP25trTPPowjoo9LfM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王繪（175380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175380&o=json
            external_identifier: CBDB:175380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.281Z
            metadata_json: null
      object_person:
        id: p_gNNKGh9cA8mj3unQMkURSh
        status: active
        display_name: 王升
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绘（卒于770年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175380） | accepted |
| death.date | 770年 | accepted |
| name.primary | 王绘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gNNKGh9cA8mj3unQMkURSh | 王升 | accepted |

## 外部来源

- [维基数据：王绘（Q45656368）](https://www.wikidata.org/wiki/Q45656368)
- [维基数据：王升（Q45656308）](https://www.wikidata.org/wiki/Q45656308)
- [CBDB 中国历代人物传记资料库：王繪（175380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175380&o=json)
- [CBDB 中国历代人物传记资料库：王昇（175379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json)
