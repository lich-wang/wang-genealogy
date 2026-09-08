---
schema: wang-person/v1
id: p_42szA6CsjsGEHtctBDvhPe
status: active
merged_into: null
display_name: 王玩
cbdb_id: 19872
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MA5VsybQ9x3o8LeKLe9GBP
        subject_person_id: p_42szA6CsjsGEHtctBDvhPe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玩，宋人物。CBDB 记录其籍贯记录为鄞縣。中国历代人物传记资料库（CBDB）以人物编号 19872 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4Mr3tNSkHbptzsU4PtZF3s
          claim_id: c_MA5VsybQ9x3o8LeKLe9GBP
          source_id: s_TDiSeBpHPozrTk3mUeU3Ac
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TDiSeBpHPozrTk3mUeU3Ac
            source_type: api_record
            title: 维基数据：王玩（Q45393590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45393590
            external_identifier: Q45393590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
        - id: cs_FZi9zGywH6BydlixF2u2r8
          claim_id: c_MA5VsybQ9x3o8LeKLe9GBP
          source_id: s_Yjruqgq98a54tQjfboiysN
          stance: supports
          locator: CBDB:19872
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Yjruqgq98a54tQjfboiysN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王玩（19872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19872&o=json
            external_identifier: CBDB:19872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:30.084Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J5FWohqmu6216BmUHPt8ie
        subject_person_id: p_42szA6CsjsGEHtctBDvhPe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DbYcQVHqPKJxcjigYvQR4E
          claim_id: c_J5FWohqmu6216BmUHPt8ie
          source_id: s_TDiSeBpHPozrTk3mUeU3Ac
          stance: supports
          locator: Q45393590
          quotation: null
          interpretation_note: null
          source:
            id: s_TDiSeBpHPozrTk3mUeU3Ac
            source_type: api_record
            title: 维基数据：王玩（Q45393590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45393590
            external_identifier: Q45393590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
        - id: cs_XNQK2515C2vSJqthrTCpB7
          claim_id: c_J5FWohqmu6216BmUHPt8ie
          source_id: s_Yjruqgq98a54tQjfboiysN
          stance: supports
          locator: Q45393590
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hbhbqpayMA8cMj1wJJ5iDS
        subject_person_id: p_CoWBMMnvoQK84CJeGyRA7b
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_42szA6CsjsGEHtctBDvhPe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SgbD3UkuvCabJxgQPKLy4y
          claim_id: c_hbhbqpayMA8cMj1wJJ5iDS
          source_id: s_MnWbvo26kGRe47FErk4cfJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MnWbvo26kGRe47FErk4cfJ
            source_type: api_record
            title: 维基数据：王说（Q15897779）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15897779
            external_identifier: Q15897779
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.300Z
            metadata_json: null
        - id: cs_abAAChWVQSkg99aNzs1Dhy
          claim_id: c_hbhbqpayMA8cMj1wJJ5iDS
          source_id: s_TDiSeBpHPozrTk3mUeU3Ac
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TDiSeBpHPozrTk3mUeU3Ac
            source_type: api_record
            title: 维基数据：王玩（Q45393590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45393590
            external_identifier: Q45393590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
        - id: cs_unxg14QdGhKJMB9i2Gyixh
          claim_id: c_hbhbqpayMA8cMj1wJJ5iDS
          source_id: s_NLSMrajxZbZtS5LgXhdj4W
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_NLSMrajxZbZtS5LgXhdj4W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王說（19870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json
            external_identifier: CBDB:19870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:03.782Z
            metadata_json: null
      object_person:
        id: p_CoWBMMnvoQK84CJeGyRA7b
        status: active
        display_name: 王说
        merged_into_person_id: null
  children:
    - claim:
        id: c_gJcJbcLCZKTtrnQ9QckPGY
        subject_person_id: p_42szA6CsjsGEHtctBDvhPe
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_uvC2UTFHn7qq3s4HmhkHi2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8PGJ8HvsnagMFoGPmCpfso
          claim_id: c_gJcJbcLCZKTtrnQ9QckPGY
          source_id: s_Waes1iN3Z5AR1SBu7Rtfjy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Waes1iN3Z5AR1SBu7Rtfjy
            source_type: api_record
            title: 维基数据：王勋（Q45359505）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359505
            external_identifier: Q45359505
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:49.422Z
            metadata_json: null
        - id: cs_8PHpJmj6XMi2zKxaGdjK95
          claim_id: c_gJcJbcLCZKTtrnQ9QckPGY
          source_id: s_TDiSeBpHPozrTk3mUeU3Ac
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_TDiSeBpHPozrTk3mUeU3Ac
            source_type: api_record
            title: 维基数据：王玩（Q45393590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45393590
            external_identifier: Q45393590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
      object_person:
        id: p_uvC2UTFHn7qq3s4HmhkHi2
        status: active
        display_name: 王勋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玩，宋人物。CBDB 记录其籍贯记录为鄞縣。中国历代人物传记资料库（CBDB）以人物编号 19872 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王玩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CoWBMMnvoQK84CJeGyRA7b | 王说 | accepted |
| children | p_uvC2UTFHn7qq3s4HmhkHi2 | 王勋 | accepted |

## 外部来源

- [维基数据：王说（Q15897779）](https://www.wikidata.org/wiki/Q15897779)
- [维基数据：王玩（Q45393590）](https://www.wikidata.org/wiki/Q45393590)
- [维基数据：王勋（Q45359505）](https://www.wikidata.org/wiki/Q45359505)
- [CBDB 中国历代人物传记资料库：王說（19870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json)
- [CBDB 中国历代人物传记资料库：王玩（19872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19872&o=json)
