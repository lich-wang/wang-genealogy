---
schema: wang-person/v1
id: p_wCFeJH7VaTonEockyP2zKx
status: active
merged_into: null
display_name: 王天养
cbdb_id: 175612
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RrJ7WSkaYZFbCKJitcmMr5
        subject_person_id: p_wCFeJH7VaTonEockyP2zKx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天养（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175612）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_aby8yU2pzG9QCMMSgkv8ds
          claim_id: c_RrJ7WSkaYZFbCKJitcmMr5
          source_id: s_oFPGJtG6tz3HhUmQfFTsva
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_oFPGJtG6tz3HhUmQfFTsva
            source_type: api_record
            title: 维基数据：王天养（Q45669168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669168
            external_identifier: Q45669168
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_rNlVI5U3QQ_nG1T7AIRppb
          claim_id: c_RrJ7WSkaYZFbCKJitcmMr5
          source_id: s_38Jz8fR9HWyYuDEAkAmXTR
          stance: supports
          locator: CBDB:175612
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_38Jz8fR9HWyYuDEAkAmXTR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王天養（175612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175612&o=json
            external_identifier: CBDB:175612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:45.573Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ngc8KbceQvjrXSmzW3CQku
        subject_person_id: p_wCFeJH7VaTonEockyP2zKx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ASWtpd53ZN4NuxX6YxoS9K
          claim_id: c_Ngc8KbceQvjrXSmzW3CQku
          source_id: s_oFPGJtG6tz3HhUmQfFTsva
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_oFPGJtG6tz3HhUmQfFTsva
            source_type: api_record
            title: 维基数据：王天养（Q45669168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669168
            external_identifier: Q45669168
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QK3YaULmM27LV5od49qU1h
        subject_person_id: p_wCFeJH7VaTonEockyP2zKx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天养
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HPQFs5PoP4L2ksBF1hmgX6
          claim_id: c_QK3YaULmM27LV5od49qU1h
          source_id: s_38Jz8fR9HWyYuDEAkAmXTR
          stance: supports
          locator: Q45669168
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xhReJhLDtn9YNAoiWAD8Mk
          claim_id: c_QK3YaULmM27LV5od49qU1h
          source_id: s_oFPGJtG6tz3HhUmQfFTsva
          stance: supports
          locator: Q45669168
          quotation: null
          interpretation_note: null
          source:
            id: s_oFPGJtG6tz3HhUmQfFTsva
            source_type: api_record
            title: 维基数据：王天养（Q45669168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669168
            external_identifier: Q45669168
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pq1oEvFSaxDL8XREx7RQnG
        subject_person_id: p_sWwSh6sCgmnFiT4vB8NsXR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wCFeJH7VaTonEockyP2zKx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_N3cHx7RoL1tcWeK2HJbP4m
          claim_id: c_pq1oEvFSaxDL8XREx7RQnG
          source_id: s_rKaSEN8T2fskn5NzW11Dej
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rKaSEN8T2fskn5NzW11Dej
            source_type: api_record
            title: 维基数据：王滟（Q45669120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669120
            external_identifier: Q45669120
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_xiji1keH7JqvbLQzxEjedd
          claim_id: c_pq1oEvFSaxDL8XREx7RQnG
          source_id: s_Bi96TrqhugeD3d9uWRwAXg
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Bi96TrqhugeD3d9uWRwAXg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王灩（175611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175611&o=json
            external_identifier: CBDB:175611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.521Z
            metadata_json: null
        - id: cs_ZAYorobFjeycJyPXhf6iKs
          claim_id: c_pq1oEvFSaxDL8XREx7RQnG
          source_id: s_oFPGJtG6tz3HhUmQfFTsva
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oFPGJtG6tz3HhUmQfFTsva
            source_type: api_record
            title: 维基数据：王天养（Q45669168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669168
            external_identifier: Q45669168
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_QgcLuiU21PyLxvRQinNA2F
          claim_id: c_pq1oEvFSaxDL8XREx7RQnG
          source_id: s_38Jz8fR9HWyYuDEAkAmXTR
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_38Jz8fR9HWyYuDEAkAmXTR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王天養（175612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175612&o=json
            external_identifier: CBDB:175612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:45.573Z
            metadata_json: null
      object_person:
        id: p_sWwSh6sCgmnFiT4vB8NsXR
        status: active
        display_name: 王滟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王天养

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王天养（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175612） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王天养 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sWwSh6sCgmnFiT4vB8NsXR | 王滟 | accepted |

## 外部来源

- [维基数据：王天养（Q45669168）](https://www.wikidata.org/wiki/Q45669168)
- [维基数据：王滟（Q45669120）](https://www.wikidata.org/wiki/Q45669120)
- [CBDB 中国历代人物传记资料库：王天養（175612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175612&o=json)
- [CBDB 中国历代人物传记资料库：王灩（175611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175611&o=json)
