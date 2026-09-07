---
schema: wang-person/v1
id: p_7Tia4RakEpFHiC5SDiDZSG
status: active
merged_into: null
display_name: 王让
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZyB5W7BAWHx2NYi2432812
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王让，明人物。CBDB 记录其籍贯记录为公安。中国历代人物传记资料库（CBDB）以人物编号 333155 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wLB2cwq6K588h7FYBbyMnX
          claim_id: c_ZyB5W7BAWHx2NYi2432812
          source_id: s_E8MK8EbyhqXYE21WkXB53z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_E8MK8EbyhqXYE21WkXB53z
            source_type: api_record
            title: 维基数据：王让（Q45561003）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45561003
            external_identifier: Q45561003
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.608Z
            metadata_json: null
        - id: cs_nET8hOB3yAzyFsS9tMaOs6
          claim_id: c_ZyB5W7BAWHx2NYi2432812
          source_id: s_QJLYD7t1vSgu5q1eeSCmEt
          stance: supports
          locator: CBDB:333155
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QJLYD7t1vSgu5q1eeSCmEt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王讓（333155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333155&o=json
            external_identifier: CBDB:333155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:40.786Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9qTNvXcpBwByA5XkdyqmLD
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王让
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2ytfcDT9xZZiBojCDaARBC
          claim_id: c_9qTNvXcpBwByA5XkdyqmLD
          source_id: s_QJLYD7t1vSgu5q1eeSCmEt
          stance: supports
          locator: Q45561003
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ae4aJvWgJ4qeyWnjnKL4ar
          claim_id: c_9qTNvXcpBwByA5XkdyqmLD
          source_id: s_E8MK8EbyhqXYE21WkXB53z
          stance: supports
          locator: Q45561003
          quotation: null
          interpretation_note: null
          source:
            id: s_E8MK8EbyhqXYE21WkXB53z
            source_type: api_record
            title: 维基数据：王让（Q45561003）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45561003
            external_identifier: Q45561003
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.608Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1k2pZ7SSCQADE6CQeMCjaK
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NPncefunYMmyKCiKheCMKZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V5gxA41qVaB9M3FNTwU337
          claim_id: c_1k2pZ7SSCQADE6CQeMCjaK
          source_id: s_E8MK8EbyhqXYE21WkXB53z
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_E8MK8EbyhqXYE21WkXB53z
            source_type: api_record
            title: 维基数据：王让（Q45561003）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45561003
            external_identifier: Q45561003
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.608Z
            metadata_json: null
        - id: cs_tVspaXc4tK7d1F1konvMVW
          claim_id: c_1k2pZ7SSCQADE6CQeMCjaK
          source_id: s_jV9cZa9HALN5QKmuoMDSV3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jV9cZa9HALN5QKmuoMDSV3
            source_type: api_record
            title: 维基数据：王轼（Q15912162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912162
            external_identifier: Q15912162
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.643Z
            metadata_json: null
      object_person:
        id: p_NPncefunYMmyKCiKheCMKZ
        status: active
        display_name: 王轼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王让

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王让，明人物。CBDB 记录其籍贯记录为公安。中国历代人物传记资料库（CBDB）以人物编号 333155 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王让 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NPncefunYMmyKCiKheCMKZ | 王轼 | accepted |

## 外部来源

- [维基数据：王让（Q45561003）](https://www.wikidata.org/wiki/Q45561003)
- [维基数据：王轼（Q15912162）](https://www.wikidata.org/wiki/Q15912162)
- [CBDB 中国历代人物传记资料库：王讓（333155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333155&o=json)
