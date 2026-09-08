---
schema: wang-person/v1
id: p_tQ2ueSAFfHvjwVttGqR6mV
status: active
merged_into: null
display_name: 王志福
cbdb_id: 175386
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZj6LHHbiQzhijUVzTD4r8
        subject_person_id: p_tQ2ueSAFfHvjwVttGqR6mV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志福（卒于770年），唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 175386 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NxgF1nMc9NeKEMEos6997A
          claim_id: c_EZj6LHHbiQzhijUVzTD4r8
          source_id: s_uqrMM3D2aSPCqD4cFA1w3F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uqrMM3D2aSPCqD4cFA1w3F
            source_type: api_record
            title: 维基数据：王志福（Q45656548）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656548
            external_identifier: Q45656548
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_eoQtmuqgmYBZ4bBGP45uZG
          claim_id: c_EZj6LHHbiQzhijUVzTD4r8
          source_id: s_b1g8yrX3GzBXAzaLGgCtHm
          stance: supports
          locator: CBDB:175386
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_b1g8yrX3GzBXAzaLGgCtHm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志福（175386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175386&o=json
            external_identifier: CBDB:175386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.260Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EsgoL2qsHURTZ4GxrNxTsP
        subject_person_id: p_tQ2ueSAFfHvjwVttGqR6mV
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
        - id: cs_nxaGh9d3JtKe9W6SvxDJLE
          claim_id: c_EsgoL2qsHURTZ4GxrNxTsP
          source_id: s_uqrMM3D2aSPCqD4cFA1w3F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uqrMM3D2aSPCqD4cFA1w3F
            source_type: api_record
            title: 维基数据：王志福（Q45656548）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656548
            external_identifier: Q45656548
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sicZ23pfHGjsvaXhVjist9
        subject_person_id: p_tQ2ueSAFfHvjwVttGqR6mV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志福
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bGsxB4sz5VbAPgaA4NWJD1
          claim_id: c_sicZ23pfHGjsvaXhVjist9
          source_id: s_uqrMM3D2aSPCqD4cFA1w3F
          stance: supports
          locator: Q45656548
          quotation: null
          interpretation_note: null
          source:
            id: s_uqrMM3D2aSPCqD4cFA1w3F
            source_type: api_record
            title: 维基数据：王志福（Q45656548）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656548
            external_identifier: Q45656548
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_xGpmAeZ1evdArvbzF1qeey
          claim_id: c_sicZ23pfHGjsvaXhVjist9
          source_id: s_b1g8yrX3GzBXAzaLGgCtHm
          stance: supports
          locator: Q45656548
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E9dL8YDt1RjhfLXwY5fCGd
        subject_person_id: p_awEWD4PFE8u2EVxcU51iT5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tQ2ueSAFfHvjwVttGqR6mV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gWHN2szgAjGWXiE1xMVMxD
          claim_id: c_E9dL8YDt1RjhfLXwY5fCGd
          source_id: s_qLyunMUXvHHBHqHsBaBvB4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qLyunMUXvHHBHqHsBaBvB4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源（175385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175385&o=json
            external_identifier: CBDB:175385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.549Z
            metadata_json: null
        - id: cs_jn374kXKtXMnHgYQNQjdX7
          claim_id: c_E9dL8YDt1RjhfLXwY5fCGd
          source_id: s_m8XuWNbCqP9fbo6xFGC5Sf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_m8XuWNbCqP9fbo6xFGC5Sf
            source_type: api_record
            title: 维基数据：王源（Q45656489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656489
            external_identifier: Q45656489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
        - id: cs_75rXUr5EUnAk6i7YZpgvns
          claim_id: c_E9dL8YDt1RjhfLXwY5fCGd
          source_id: s_uqrMM3D2aSPCqD4cFA1w3F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uqrMM3D2aSPCqD4cFA1w3F
            source_type: api_record
            title: 维基数据：王志福（Q45656548）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656548
            external_identifier: Q45656548
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_36JukwvWERedXMcf1C2jDx
          claim_id: c_E9dL8YDt1RjhfLXwY5fCGd
          source_id: s_b1g8yrX3GzBXAzaLGgCtHm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_b1g8yrX3GzBXAzaLGgCtHm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志福（175386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175386&o=json
            external_identifier: CBDB:175386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.260Z
            metadata_json: null
      object_person:
        id: p_awEWD4PFE8u2EVxcU51iT5
        status: active
        display_name: 王源
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志福（卒于770年），唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 175386 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王志福 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_awEWD4PFE8u2EVxcU51iT5 | 王源 | accepted |

## 外部来源

- [维基数据：王源（Q45656489）](https://www.wikidata.org/wiki/Q45656489)
- [维基数据：王志福（Q45656548）](https://www.wikidata.org/wiki/Q45656548)
- [CBDB 中国历代人物传记资料库：王源（175385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175385&o=json)
- [CBDB 中国历代人物传记资料库：王志福（175386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175386&o=json)
