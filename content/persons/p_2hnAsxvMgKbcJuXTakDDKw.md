---
schema: wang-person/v1
id: p_2hnAsxvMgKbcJuXTakDDKw
status: active
merged_into: null
display_name: 王端甫
cbdb_id: 22014
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RbQWn7yENDF9RsYpejCUZE
        subject_person_id: p_2hnAsxvMgKbcJuXTakDDKw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端甫，宋人物。CBDB 记录其籍贯记录为咸平。中国历代人物传记资料库（CBDB）以人物编号 22014 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dHtAneqrHFNmrAQyP4hC8Y
          claim_id: c_RbQWn7yENDF9RsYpejCUZE
          source_id: s_B9rgNuKGrgQq9RDvYHtXnE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_B9rgNuKGrgQq9RDvYHtXnE
            source_type: api_record
            title: 维基数据：王端甫（Q45401684）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401684
            external_identifier: Q45401684
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:03.152Z
            metadata_json: null
        - id: cs_e_05QseVPXYwrzmN6uVyfK
          claim_id: c_RbQWn7yENDF9RsYpejCUZE
          source_id: s_7ugFxnAQuBfpLJy4NUT4za
          stance: supports
          locator: CBDB:22014
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7ugFxnAQuBfpLJy4NUT4za
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王端甫（22014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22014&o=json
            external_identifier: CBDB:22014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:03.304Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HzrCfrCrFTNdEF84hpTRp4
        subject_person_id: p_2hnAsxvMgKbcJuXTakDDKw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端甫
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dmhTaxSbNZ2N4kvm2rMqCY
          claim_id: c_HzrCfrCrFTNdEF84hpTRp4
          source_id: s_B9rgNuKGrgQq9RDvYHtXnE
          stance: supports
          locator: Q45401684
          quotation: null
          interpretation_note: null
          source:
            id: s_B9rgNuKGrgQq9RDvYHtXnE
            source_type: api_record
            title: 维基数据：王端甫（Q45401684）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401684
            external_identifier: Q45401684
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:03.152Z
            metadata_json: null
        - id: cs_eT61tp1PEGcA8WA37yApaq
          claim_id: c_HzrCfrCrFTNdEF84hpTRp4
          source_id: s_7ugFxnAQuBfpLJy4NUT4za
          stance: supports
          locator: Q45401684
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RcinKcJs8MGWAhHDqmLeZW
        subject_person_id: p_Hy3oL9P7FfBor4frFk5Jm5
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2hnAsxvMgKbcJuXTakDDKw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QCZQjwsAb4vwfUHXamY2Gh
          claim_id: c_RcinKcJs8MGWAhHDqmLeZW
          source_id: s_KaWCfUWNUAhuBv5aBM1qS9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KaWCfUWNUAhuBv5aBM1qS9
            source_type: api_record
            title: 维基数据：王拱辰（Q15932959）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15932959
            external_identifier: Q15932959
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_cFjG4PPKCDLWas7GVyPB16
          claim_id: c_RcinKcJs8MGWAhHDqmLeZW
          source_id: s_B9rgNuKGrgQq9RDvYHtXnE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_B9rgNuKGrgQq9RDvYHtXnE
            source_type: api_record
            title: 维基数据：王端甫（Q45401684）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401684
            external_identifier: Q45401684
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:03.152Z
            metadata_json: null
        - id: cs_y5pj4eP8S5mz9h1ukyjGcZ
          claim_id: c_RcinKcJs8MGWAhHDqmLeZW
          source_id: s_ibHb7Z4nqpDXdLqQbGdB7v
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ibHb7Z4nqpDXdLqQbGdB7v
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王拱辰（1847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json
            external_identifier: CBDB:1847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.110Z
            metadata_json: null
      object_person:
        id: p_Hy3oL9P7FfBor4frFk5Jm5
        status: active
        display_name: 王拱辰
        merged_into_person_id: null
  children:
    - claim:
        id: c_DkmcpwkWJVx1naboMBJ9ke
        subject_person_id: p_2hnAsxvMgKbcJuXTakDDKw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t4r6xJhA7S53USBaqKsA6D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AZQGaW2iVAgzrA3uFqNySS
          claim_id: c_DkmcpwkWJVx1naboMBJ9ke
          source_id: s_B9rgNuKGrgQq9RDvYHtXnE
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_FWFpKeA9dnkqZCjy15AVFL
          claim_id: c_DkmcpwkWJVx1naboMBJ9ke
          source_id: s_k4cG5rN2dmbJBiGcNW8Vha
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_k4cG5rN2dmbJBiGcNW8Vha
            source_type: api_record
            title: 维基数据：王敏文（Q45359594）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359594
            external_identifier: Q45359594
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_vsfpzCqGZBE3J8YkuNe4to
          claim_id: c_DkmcpwkWJVx1naboMBJ9ke
          source_id: s_7ugFxnAQuBfpLJy4NUT4za
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_t4r6xJhA7S53USBaqKsA6D
        status: active
        display_name: 王敏文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王端甫，宋人物。CBDB 记录其籍贯记录为咸平。中国历代人物传记资料库（CBDB）以人物编号 22014 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王端甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hy3oL9P7FfBor4frFk5Jm5 | 王拱辰 | accepted |
| children | p_t4r6xJhA7S53USBaqKsA6D | 王敏文 | accepted |

## 外部来源

- [维基数据：王端甫（Q45401684）](https://www.wikidata.org/wiki/Q45401684)
- [维基数据：王拱辰（Q15932959）](https://www.wikidata.org/wiki/Q15932959)
- [维基数据：王敏文（Q45359594）](https://www.wikidata.org/wiki/Q45359594)
- [CBDB 中国历代人物传记资料库：王端甫（22014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22014&o=json)
- [CBDB 中国历代人物传记资料库：王拱辰（1847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json)
