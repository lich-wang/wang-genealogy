---
schema: wang-person/v1
id: p_VjBPyVeFWxRXxTkvsVvTMd
status: active
merged_into: null
display_name: 王荣期
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_27c6kbEb3ATxnJcx9Fd4uG
        subject_person_id: p_VjBPyVeFWxRXxTkvsVvTMd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荣期（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175375 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PSFh4TDnRsTfQF9X6yjZfv
          claim_id: c_27c6kbEb3ATxnJcx9Fd4uG
          source_id: s_F7LRKvQvj59CogBUA8wF5a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_F7LRKvQvj59CogBUA8wF5a
            source_type: api_record
            title: 维基数据：王荣期（Q45656066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656066
            external_identifier: Q45656066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.307Z
            metadata_json: null
        - id: cs__QchPYAVmpYrdxcnz5xzi8
          claim_id: c_27c6kbEb3ATxnJcx9Fd4uG
          source_id: s_2yx6MuB715hMAjcUFaqfU1
          stance: supports
          locator: CBDB:175375
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2yx6MuB715hMAjcUFaqfU1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王榮期（175375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175375&o=json
            external_identifier: CBDB:175375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:50.461Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fG6bMDLkeniMjoVCuNAqLo
        subject_person_id: p_VjBPyVeFWxRXxTkvsVvTMd
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
        - id: cs_hZpF4rL99eUx6F54E5X8BJ
          claim_id: c_fG6bMDLkeniMjoVCuNAqLo
          source_id: s_F7LRKvQvj59CogBUA8wF5a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_F7LRKvQvj59CogBUA8wF5a
            source_type: api_record
            title: 维基数据：王荣期（Q45656066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656066
            external_identifier: Q45656066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.307Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6jWWzxdXqfoF65WV9Wbrw5
        subject_person_id: p_VjBPyVeFWxRXxTkvsVvTMd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荣期
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4dRwvqpVmqYvT6TjPj8QJV
          claim_id: c_6jWWzxdXqfoF65WV9Wbrw5
          source_id: s_2yx6MuB715hMAjcUFaqfU1
          stance: supports
          locator: Q45656066
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_RbUGJRgZd63NgPUGiqE7pR
          claim_id: c_6jWWzxdXqfoF65WV9Wbrw5
          source_id: s_F7LRKvQvj59CogBUA8wF5a
          stance: supports
          locator: Q45656066
          quotation: null
          interpretation_note: null
          source:
            id: s_F7LRKvQvj59CogBUA8wF5a
            source_type: api_record
            title: 维基数据：王荣期（Q45656066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656066
            external_identifier: Q45656066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.307Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aXsgj5BH2p5NexcsHMUkX1
        subject_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VjBPyVeFWxRXxTkvsVvTMd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CEy1qR1JsPo31652F144wn
          claim_id: c_aXsgj5BH2p5NexcsHMUkX1
          source_id: s_1GvDnEMNFL7bVjG46Cxc2S
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1GvDnEMNFL7bVjG46Cxc2S
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏（175372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json
            external_identifier: CBDB:175372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.794Z
            metadata_json: null
        - id: cs_JvgvviHAFgrz36AAYCP1F2
          claim_id: c_aXsgj5BH2p5NexcsHMUkX1
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_F9H3A2RgiNDmEuX7KR5Kjr
          claim_id: c_aXsgj5BH2p5NexcsHMUkX1
          source_id: s_F7LRKvQvj59CogBUA8wF5a
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_F7LRKvQvj59CogBUA8wF5a
            source_type: api_record
            title: 维基数据：王荣期（Q45656066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656066
            external_identifier: Q45656066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.307Z
            metadata_json: null
        - id: cs_jW64BMu9N1mXR35E7bNgJ5
          claim_id: c_aXsgj5BH2p5NexcsHMUkX1
          source_id: s_2yx6MuB715hMAjcUFaqfU1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2yx6MuB715hMAjcUFaqfU1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王榮期（175375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175375&o=json
            external_identifier: CBDB:175375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:50.461Z
            metadata_json: null
      object_person:
        id: p_NQbvRb1nM7Q9W6mBE1QPGm
        status: active
        display_name: 王晏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王荣期

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王荣期（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175375 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王荣期 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NQbvRb1nM7Q9W6mBE1QPGm | 王晏 | accepted |

## 外部来源

- [维基数据：王荣期（Q45656066）](https://www.wikidata.org/wiki/Q45656066)
- [维基数据：王晏（Q45655886）](https://www.wikidata.org/wiki/Q45655886)
- [CBDB 中国历代人物传记资料库：王榮期（175375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175375&o=json)
- [CBDB 中国历代人物传记资料库：王晏（175372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json)
