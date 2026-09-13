---
schema: wang-person/v1
id: p_ZPiJcbwj4KJjw7t1YK6E4f
status: active
merged_into: null
display_name: 王世厚
cbdb_id: 17763
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8GZKHMpxMmypex5i9g2hXt
        subject_person_id: p_ZPiJcbwj4KJjw7t1YK6E4f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世厚，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 17763）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_gXCJYNuDBF2bHcq3mvaHHP
          claim_id: c_8GZKHMpxMmypex5i9g2hXt
          source_id: s_N2nE1uhLZsS7bBLZk7mBBv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
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
        - id: cs_Pxd30Hh_r2lOVvYJ5MFlMF
          claim_id: c_8GZKHMpxMmypex5i9g2hXt
          source_id: s_7JFBKVPJcwxyUcg3ckqL1b
          stance: supports
          locator: CBDB:17763
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3p3zxk1FNzi8NBMUAvLQhb
        subject_person_id: p_ZPiJcbwj4KJjw7t1YK6E4f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世厚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WEjNNKYqVa7z4cSfdc7Zqb
          claim_id: c_3p3zxk1FNzi8NBMUAvLQhb
          source_id: s_7JFBKVPJcwxyUcg3ckqL1b
          stance: supports
          locator: Q45387147
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hW4YPHJ2eis4F9FqbjYaJz
          claim_id: c_3p3zxk1FNzi8NBMUAvLQhb
          source_id: s_N2nE1uhLZsS7bBLZk7mBBv
          stance: supports
          locator: Q45387147
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bHyRmhzbnGs5ZqxggWzqQs
        subject_person_id: p_nauC3gPyC9F4eNZQfgox1p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZPiJcbwj4KJjw7t1YK6E4f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_puzzWHnrt4KrQJn9NhGs9M
          claim_id: c_bHyRmhzbnGs5ZqxggWzqQs
          source_id: s_9Bxbgx7PdZjzQztiuqDhcK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9Bxbgx7PdZjzQztiuqDhcK
            source_type: api_record
            title: 维基数据：王承德（Q45387102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387102
            external_identifier: Q45387102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_zxGDh93TwBrK79uKPKrFu2
          claim_id: c_bHyRmhzbnGs5ZqxggWzqQs
          source_id: s_N2nE1uhLZsS7bBLZk7mBBv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_T49F6gbQKo4BHy2AWWeNKR
          claim_id: c_bHyRmhzbnGs5ZqxggWzqQs
          source_id: s_roLdRLMHv9nqgj31e4UvLq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_roLdRLMHv9nqgj31e4UvLq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承德（17748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17748&o=json
            external_identifier: CBDB:17748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:01.792Z
            metadata_json: null
      object_person:
        id: p_nauC3gPyC9F4eNZQfgox1p
        status: active
        display_name: 王承德
        merged_into_person_id: null
  children:
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
          source:
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
        - id: cs_A8uHtSNLPga2iFoddRoScq
          claim_id: c_9Xp3zT5dXcWFibQ2yGJ2e4
          source_id: s_N2nE1uhLZsS7bBLZk7mBBv
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_a8rn8xiEtj4XX8YTcJoWbq
          claim_id: c_9Xp3zT5dXcWFibQ2yGJ2e4
          source_id: s_7JFBKVPJcwxyUcg3ckqL1b
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_jXRz39yUsmFmBwPGPpqbVZ
        status: active
        display_name: 王氏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世厚，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 17763） | accepted |
| name.primary | 王世厚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nauC3gPyC9F4eNZQfgox1p | 王承德 | accepted |
| children | p_jXRz39yUsmFmBwPGPpqbVZ | 王氏 | accepted |

## 外部来源

- [维基数据：王承德（Q45387102）](https://www.wikidata.org/wiki/Q45387102)
- [维基数据：王氏（Q45364582）](https://www.wikidata.org/wiki/Q45364582)
- [维基数据：王世厚（Q45387147）](https://www.wikidata.org/wiki/Q45387147)
- [CBDB 中国历代人物传记资料库：王承德（17748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17748&o=json)
- [CBDB 中国历代人物传记资料库：王世厚（17763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17763&o=json)
