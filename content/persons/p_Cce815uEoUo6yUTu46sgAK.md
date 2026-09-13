---
schema: wang-person/v1
id: p_Cce815uEoUo6yUTu46sgAK
status: active
merged_into: null
display_name: 王暾
cbdb_id: 191288
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZK4gZkM4akfRMPHEzoeX4p
        subject_person_id: p_Cce815uEoUo6yUTu46sgAK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暾（卒于775年），唐人物。籍贯偃師，曾任縣令。（中国历代人物传记资料库 CBDB 191288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_6uBCRtwyEZLiyAz3GXy4um
          claim_id: c_ZK4gZkM4akfRMPHEzoeX4p
          source_id: s_pS92jA51R1fPE55T5LbhbD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_pS92jA51R1fPE55T5LbhbD
            source_type: api_record
            title: 维基数据：王暾（Q26209938）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209938
            external_identifier: Q26209938
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
        - id: cs_J0nJszgVZV09659DMxRv0h
          claim_id: c_ZK4gZkM4akfRMPHEzoeX4p
          source_id: s_LX9kJceu48Y8qUt7vNsnN3
          stance: supports
          locator: CBDB:191288
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LX9kJceu48Y8qUt7vNsnN3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暾（191288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191288&o=json
            external_identifier: CBDB:191288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:29.891Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8Jf7c86W6cDxJf4fjS67t3
        subject_person_id: p_Cce815uEoUo6yUTu46sgAK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 775年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0775-01-01
            latest: 0775-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iG6LBRPs4SfSdCSarGWXUm
          claim_id: c_8Jf7c86W6cDxJf4fjS67t3
          source_id: s_pS92jA51R1fPE55T5LbhbD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pS92jA51R1fPE55T5LbhbD
            source_type: api_record
            title: 维基数据：王暾（Q26209938）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209938
            external_identifier: Q26209938
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bhpupBt6FztH6avmn868gi
        subject_person_id: p_Cce815uEoUo6yUTu46sgAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5XbgFCZb8FFsA8UqR12K6G
          claim_id: c_bhpupBt6FztH6avmn868gi
          source_id: s_pS92jA51R1fPE55T5LbhbD
          stance: supports
          locator: Q26209938
          quotation: null
          interpretation_note: null
          source:
            id: s_pS92jA51R1fPE55T5LbhbD
            source_type: api_record
            title: 维基数据：王暾（Q26209938）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209938
            external_identifier: Q26209938
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
        - id: cs_heEbaKmduYFXSod7Laz16z
          claim_id: c_bhpupBt6FztH6avmn868gi
          source_id: s_LX9kJceu48Y8qUt7vNsnN3
          stance: supports
          locator: Q26209938
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jRDAVr8k7sAXi4MJ9rNqgm
        subject_person_id: p_nU6imksHKqtEMfuEaRNJUG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cce815uEoUo6yUTu46sgAK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y99ccM4CYf9aCjGhswvTBd
          claim_id: c_jRDAVr8k7sAXi4MJ9rNqgm
          source_id: s_pS92jA51R1fPE55T5LbhbD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_8ZDJWRuxUfTWTsQEiouZ6a
          claim_id: c_jRDAVr8k7sAXi4MJ9rNqgm
          source_id: s_me9K8G3FtkpaRu1ypeJzht
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_me9K8G3FtkpaRu1ypeJzht
            source_type: api_record
            title: 维基数据：王上客（Q26209933）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209933
            external_identifier: Q26209933
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_nU6imksHKqtEMfuEaRNJUG
        status: active
        display_name: 王上客
        merged_into_person_id: null
  children:
    - claim:
        id: c_YVzEsaB9w6vWdR4BADjEvf
        subject_person_id: p_Cce815uEoUo6yUTu46sgAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZGT8gZNiBTBKcXdZjzhNZq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mXzv3ZtH3UCjBkPeZvPjAD
          claim_id: c_YVzEsaB9w6vWdR4BADjEvf
          source_id: s_zRRKdBK1v9aDRDctwzda8g
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zRRKdBK1v9aDRDctwzda8g
            source_type: api_record
            title: 维基数据：王俊（Q26209939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209939
            external_identifier: Q26209939
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
        - id: cs_pgswrhY4xDvPTzCqV7aXVm
          claim_id: c_YVzEsaB9w6vWdR4BADjEvf
          source_id: s_pS92jA51R1fPE55T5LbhbD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_QM3KzTvzWrkLcgvu7ngHk6
          claim_id: c_YVzEsaB9w6vWdR4BADjEvf
          source_id: s_LX9kJceu48Y8qUt7vNsnN3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a1
      object_person:
        id: p_ZGT8gZNiBTBKcXdZjzhNZq
        status: active
        display_name: 王俊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王暾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王暾（卒于775年），唐人物。籍贯偃師，曾任縣令。（中国历代人物传记资料库 CBDB 191288） | accepted |
| death.date | 775年 | accepted |
| name.primary | 王暾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nU6imksHKqtEMfuEaRNJUG | 王上客 | accepted |
| children | p_ZGT8gZNiBTBKcXdZjzhNZq | 王俊 | accepted |

## 外部来源

- [维基数据：王俊（Q26209939）](https://www.wikidata.org/wiki/Q26209939)
- [维基数据：王上客（Q26209933）](https://www.wikidata.org/wiki/Q26209933)
- [维基数据：王暾（Q26209938）](https://www.wikidata.org/wiki/Q26209938)
- [CBDB 中国历代人物传记资料库：王暾（191288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191288&o=json)
