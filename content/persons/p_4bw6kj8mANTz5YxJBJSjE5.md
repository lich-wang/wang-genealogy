---
schema: wang-person/v1
id: p_4bw6kj8mANTz5YxJBJSjE5
status: active
merged_into: null
display_name: 王承业
cbdb_id: 195919
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uSJGtErnuBVvVmxRcNZHeM
        subject_person_id: p_4bw6kj8mANTz5YxJBJSjE5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承业（卒于846年），唐人物。CBDB 记录其籍贯记录为岐州，曾任節度使。中国历代人物传记资料库（CBDB）以人物编号 195919 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ntQX1LLGPHUY8vNJdxcYa6
          claim_id: c_uSJGtErnuBVvVmxRcNZHeM
          source_id: s_rvhGnAqEjQvh7hBXik5vGf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_rvhGnAqEjQvh7hBXik5vGf
            source_type: api_record
            title: 维基数据：王承业（Q45615501）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45615501
            external_identifier: Q45615501
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
        - id: cs_SG2Q54fTsdEUWJPfVDWiYu
          claim_id: c_uSJGtErnuBVvVmxRcNZHeM
          source_id: s_NXh3dib9iTV5fV7FLgBH88
          stance: supports
          locator: CBDB:195919
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NXh3dib9iTV5fV7FLgBH88
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承業（195919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195919&o=json
            external_identifier: CBDB:195919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:44.456Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WXSaPVHhUGJPy8kGqSXSDA
        subject_person_id: p_4bw6kj8mANTz5YxJBJSjE5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 846年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0846-01-01
            latest: 0846-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4ryxg9UHj4idbb93ZLuZHS
          claim_id: c_WXSaPVHhUGJPy8kGqSXSDA
          source_id: s_rvhGnAqEjQvh7hBXik5vGf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_rvhGnAqEjQvh7hBXik5vGf
            source_type: api_record
            title: 维基数据：王承业（Q45615501）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45615501
            external_identifier: Q45615501
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dbnKfiFyY3JnuTifFPVG4Z
        subject_person_id: p_4bw6kj8mANTz5YxJBJSjE5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承业
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3DQvHE8S9a7AM3jJ9xnRKv
          claim_id: c_dbnKfiFyY3JnuTifFPVG4Z
          source_id: s_rvhGnAqEjQvh7hBXik5vGf
          stance: supports
          locator: Q45615501
          quotation: null
          interpretation_note: null
          source:
            id: s_rvhGnAqEjQvh7hBXik5vGf
            source_type: api_record
            title: 维基数据：王承业（Q45615501）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45615501
            external_identifier: Q45615501
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
        - id: cs_6FDEHrMZH537joSNJ1mGig
          claim_id: c_dbnKfiFyY3JnuTifFPVG4Z
          source_id: s_NXh3dib9iTV5fV7FLgBH88
          stance: supports
          locator: Q45615501
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Kpaa98dwR4QYBZGWD6UVG3
        subject_person_id: p_X1UCfgUyoJHi8W8xdH58BE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4bw6kj8mANTz5YxJBJSjE5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJKQRyXhGKWVjVMbYby3s7
          claim_id: c_Kpaa98dwR4QYBZGWD6UVG3
          source_id: s_uNFQmZbjnbMWfFpWUMCosA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uNFQmZbjnbMWfFpWUMCosA
            source_type: api_record
            title: 维基数据：王士真（Q20026517）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q20026517
            external_identifier: Q20026517
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:26.496Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E7%9C%9F
        - id: cs_Ea4E4VHQCMEauzDr9u3fmE
          claim_id: c_Kpaa98dwR4QYBZGWD6UVG3
          source_id: s_rvhGnAqEjQvh7hBXik5vGf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_daWqPmPBkLmM211CgVnfrz
          claim_id: c_Kpaa98dwR4QYBZGWD6UVG3
          source_id: s_8JcMUxTCwkNV6cEXnmYv9n
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8JcMUxTCwkNV6cEXnmYv9n
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士真（169076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169076&o=json
            external_identifier: CBDB:169076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:26.669Z
            metadata_json: null
      object_person:
        id: p_X1UCfgUyoJHi8W8xdH58BE
        status: active
        display_name: 王士真
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承业

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承业（卒于846年），唐人物。CBDB 记录其籍贯记录为岐州，曾任節度使。中国历代人物传记资料库（CBDB）以人物编号 195919 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 846年 | accepted |
| name.primary | 王承业 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X1UCfgUyoJHi8W8xdH58BE | 王士真 | accepted |

## 外部来源

- [维基数据：王承业（Q45615501）](https://www.wikidata.org/wiki/Q45615501)
- [维基数据：王士真（Q20026517）](https://www.wikidata.org/wiki/Q20026517)
- [CBDB 中国历代人物传记资料库：王承業（195919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195919&o=json)
- [CBDB 中国历代人物传记资料库：王士真（169076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169076&o=json)
