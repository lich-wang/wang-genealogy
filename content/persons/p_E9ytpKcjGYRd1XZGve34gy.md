---
schema: wang-person/v1
id: p_E9ytpKcjGYRd1XZGve34gy
status: active
merged_into: null
display_name: 王景
cbdb_id: 92088
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PcAi3Ndy3Qp6gFDJEiKNVd
        subject_person_id: p_E9ytpKcjGYRd1XZGve34gy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景，唐人物。CBDB 记录其籍贯记录为太原，身份包括詩人，曾任司門員外郎、縣主簿。中国历代人物传记资料库（CBDB）以人物编号 92088 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WZo2KJMHexYgrEynCHTeWC
          claim_id: c_PcAi3Ndy3Qp6gFDJEiKNVd
          source_id: s_GotHTyPQYsNrDTXS36Mq8J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_GotHTyPQYsNrDTXS36Mq8J
            source_type: api_record
            title: 维基数据：王景（Q45445465）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45445465
            external_identifier: Q45445465
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:11.488Z
            metadata_json: null
        - id: cs_neYDV40JTmUSuuknt4Q7sA
          claim_id: c_PcAi3Ndy3Qp6gFDJEiKNVd
          source_id: s_QsBshaQuZ3BBW9ttFMvNKJ
          stance: supports
          locator: CBDB:92088
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QsBshaQuZ3BBW9ttFMvNKJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（92088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92088&o=json
            external_identifier: CBDB:92088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:11.624Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t3TtNetAVggZdbE8BxMVZN
        subject_person_id: p_E9ytpKcjGYRd1XZGve34gy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6EwWWGaxyKyLGsZvAtEMfd
          claim_id: c_t3TtNetAVggZdbE8BxMVZN
          source_id: s_GotHTyPQYsNrDTXS36Mq8J
          stance: supports
          locator: Q45445465
          quotation: null
          interpretation_note: null
          source:
            id: s_GotHTyPQYsNrDTXS36Mq8J
            source_type: api_record
            title: 维基数据：王景（Q45445465）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45445465
            external_identifier: Q45445465
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:11.488Z
            metadata_json: null
        - id: cs_n3Y6AF9UmxBKKLoptihmEP
          claim_id: c_t3TtNetAVggZdbE8BxMVZN
          source_id: s_QsBshaQuZ3BBW9ttFMvNKJ
          stance: supports
          locator: Q45445465
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D9AFTBssCPiC157nUxp4xw
        subject_person_id: p_GMCTq5KrktL4A6wV97QsyN
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_E9ytpKcjGYRd1XZGve34gy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NoJYQdyVxq42DXzdsF5qc5
          claim_id: c_D9AFTBssCPiC157nUxp4xw
          source_id: s_QsBshaQuZ3BBW9ttFMvNKJ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_QsBshaQuZ3BBW9ttFMvNKJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（92088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92088&o=json
            external_identifier: CBDB:92088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:11.624Z
            metadata_json: null
        - id: cs_QiK2jmfCGafvJNJu6HMGpk
          claim_id: c_D9AFTBssCPiC157nUxp4xw
          source_id: s_CURwrKyQEGB2YySmUVnJvG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CURwrKyQEGB2YySmUVnJvG
            source_type: api_record
            title: 维基数据：王德表（Q45447026）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45447026
            external_identifier: Q45447026
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:23.482Z
            metadata_json: null
        - id: cs_15ZuyjVQRdKFcEpBs1C3uS
          claim_id: c_D9AFTBssCPiC157nUxp4xw
          source_id: s_CJRovFBNPpkBucw7sNMmvK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_CJRovFBNPpkBucw7sNMmvK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王德表（92112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92112&o=json
            external_identifier: CBDB:92112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:23.640Z
            metadata_json: null
      object_person:
        id: p_GMCTq5KrktL4A6wV97QsyN
        status: active
        display_name: 王德表
        merged_into_person_id: null
    - claim:
        id: c_hL6SiWF8XQT8GYNRvmbyhm
        subject_person_id: p_2QzaHREwKpSyXNbQkJ4Bk3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_E9ytpKcjGYRd1XZGve34gy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8sDsxTaNdWLLzRJfh3wsEX
          claim_id: c_hL6SiWF8XQT8GYNRvmbyhm
          source_id: s_GotHTyPQYsNrDTXS36Mq8J
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GotHTyPQYsNrDTXS36Mq8J
            source_type: api_record
            title: 维基数据：王景（Q45445465）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45445465
            external_identifier: Q45445465
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:11.488Z
            metadata_json: null
        - id: cs_f71vQaLqK1j6DC7GQyPEBs
          claim_id: c_hL6SiWF8XQT8GYNRvmbyhm
          source_id: s_Uq4LGQJyC9XRsj9FkngQaN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Uq4LGQJyC9XRsj9FkngQaN
            source_type: api_record
            title: 维基数据：王表（Q45587008）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587008
            external_identifier: Q45587008
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:02.679Z
            metadata_json: null
      object_person:
        id: p_2QzaHREwKpSyXNbQkJ4Bk3
        status: active
        display_name: 王表
        merged_into_person_id: null
  children:
    - claim:
        id: c_EbuhyrL7zLzJ5vHWCY8aVh
        subject_person_id: p_E9ytpKcjGYRd1XZGve34gy
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_KrXiuuihJGRDJgH856L9a9
        generation_count: null
        parent_role: null
        value_json: null
        status: disputed
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QmDdrvHJKtd2pBikTHd4tt
          claim_id: c_EbuhyrL7zLzJ5vHWCY8aVh
          source_id: s_jVmJjiEpWN1LFNLogR9HcB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source:
            id: s_jVmJjiEpWN1LFNLogR9HcB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之渙（91975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91975&o=json
            external_identifier: CBDB:91975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:18.216Z
            metadata_json: null
        - id: cs_oySj7kytMjjNfkSxDdxzFc
          claim_id: c_EbuhyrL7zLzJ5vHWCY8aVh
          source_id: s_QsBshaQuZ3BBW9ttFMvNKJ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source:
            id: s_QsBshaQuZ3BBW9ttFMvNKJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（92088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92088&o=json
            external_identifier: CBDB:92088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:11.624Z
            metadata_json: null
      object_person:
        id: p_KrXiuuihJGRDJgH856L9a9
        status: active
        display_name: 王之涣
        merged_into_person_id: null
    - claim:
        id: c_WxiVf6aFKgjBmMaUM5kK3W
        subject_person_id: p_E9ytpKcjGYRd1XZGve34gy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TWVZdtkHCAJE3rdF74jZxi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XoF6MfQBkvUvt6bGCRZsVT
          claim_id: c_WxiVf6aFKgjBmMaUM5kK3W
          source_id: s_QsBshaQuZ3BBW9ttFMvNKJ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QsBshaQuZ3BBW9ttFMvNKJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（92088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92088&o=json
            external_identifier: CBDB:92088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:11.624Z
            metadata_json: null
        - id: cs_yhCod2mJWnmFPJhQD4pyRe
          claim_id: c_WxiVf6aFKgjBmMaUM5kK3W
          source_id: s_GotHTyPQYsNrDTXS36Mq8J
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_GotHTyPQYsNrDTXS36Mq8J
            source_type: api_record
            title: 维基数据：王景（Q45445465）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45445465
            external_identifier: Q45445465
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:11.488Z
            metadata_json: null
        - id: cs_dh4yEpQUFPKKnqCSCkU97P
          claim_id: c_WxiVf6aFKgjBmMaUM5kK3W
          source_id: s_4RdZ747yZ6xNHgbG9QBNLo
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4RdZ747yZ6xNHgbG9QBNLo
            source_type: api_record
            title: 维基数据：王之咸（Q45490683）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45490683
            external_identifier: Q45490683
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:23.482Z
            metadata_json: null
        - id: cs_4GA32q5aHpZKTjeV1fDoYP
          claim_id: c_WxiVf6aFKgjBmMaUM5kK3W
          source_id: s_ofPoK33QJicxdXg6F8mP2p
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ofPoK33QJicxdXg6F8mP2p
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之咸（146035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146035&o=json
            external_identifier: CBDB:146035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:23.642Z
            metadata_json: null
      object_person:
        id: p_TWVZdtkHCAJE3rdF74jZxi
        status: active
        display_name: 王之咸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景，唐人物。CBDB 记录其籍贯记录为太原，身份包括詩人，曾任司門員外郎、縣主簿。中国历代人物传记资料库（CBDB）以人物编号 92088 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王景 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GMCTq5KrktL4A6wV97QsyN | 王德表 | accepted |
| parents | p_2QzaHREwKpSyXNbQkJ4Bk3 | 王表 | accepted |
| children | p_KrXiuuihJGRDJgH856L9a9 | 王之涣 | disputed |
| children | p_TWVZdtkHCAJE3rdF74jZxi | 王之咸 | accepted |

## 外部来源

- [维基数据：王表（Q45587008）](https://www.wikidata.org/wiki/Q45587008)
- [维基数据：王德表（Q45447026）](https://www.wikidata.org/wiki/Q45447026)
- [维基数据：王景（Q45445465）](https://www.wikidata.org/wiki/Q45445465)
- [维基数据：王之咸（Q45490683）](https://www.wikidata.org/wiki/Q45490683)
- [CBDB 中国历代人物传记资料库：王德表（92112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92112&o=json)
- [CBDB 中国历代人物传记资料库：王景（92088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92088&o=json)
- [CBDB 中国历代人物传记资料库：王之渙（91975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91975&o=json)
- [CBDB 中国历代人物传记资料库：王之咸（146035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146035&o=json)
