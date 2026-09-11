---
schema: wang-person/v1
id: p_N6bQh9pnDkScrvHDXa2Wts
status: active
merged_into: null
display_name: 王信
cbdb_id: 150135
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6JZoqQsu3ZvCQAtH3a3AFH
        subject_person_id: p_N6bQh9pnDkScrvHDXa2Wts
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，唐人物。CBDB 记录其籍贯记录为絳州，曾任著作佐郎。中国历代人物传记资料库（CBDB）以人物编号 150135 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PGC8uvTNjTvEJ3o8gwo26t
          claim_id: c_6JZoqQsu3ZvCQAtH3a3AFH
          source_id: s_xQPsT5sBbbddERH371uuF4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xQPsT5sBbbddERH371uuF4
            source_type: api_record
            title: 维基数据：王信（Q45678428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678428
            external_identifier: Q45678428
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:15.108Z
            metadata_json: null
        - id: cs_jZ7oMYRuIoH5_d7sPW8pJo
          claim_id: c_6JZoqQsu3ZvCQAtH3a3AFH
          source_id: s_t12j9uut9cE85A2EB1mrNy
          stance: supports
          locator: CBDB:150135
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_t12j9uut9cE85A2EB1mrNy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王信（150135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150135&o=json
            external_identifier: CBDB:150135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:15.257Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iSQSXDbeAbqKJy5DKigTU2
        subject_person_id: p_N6bQh9pnDkScrvHDXa2Wts
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2iEgT4xP6xfv2iqD7ZxiN7
          claim_id: c_iSQSXDbeAbqKJy5DKigTU2
          source_id: s_t12j9uut9cE85A2EB1mrNy
          stance: supports
          locator: Q45678428
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qLh9vLxDQegbnEHPmk5a9i
          claim_id: c_iSQSXDbeAbqKJy5DKigTU2
          source_id: s_xQPsT5sBbbddERH371uuF4
          stance: supports
          locator: Q45678428
          quotation: null
          interpretation_note: null
          source:
            id: s_xQPsT5sBbbddERH371uuF4
            source_type: api_record
            title: 维基数据：王信（Q45678428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678428
            external_identifier: Q45678428
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:15.108Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_unF9y6E7w6LpjuKzxM7L2d
        subject_person_id: p_JRxQLCdnELN71C7FFfG44D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N6bQh9pnDkScrvHDXa2Wts
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zFNdNEZqegsA8qWmaz1Lvm
          claim_id: c_unF9y6E7w6LpjuKzxM7L2d
          source_id: s_xQPsT5sBbbddERH371uuF4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xQPsT5sBbbddERH371uuF4
            source_type: api_record
            title: 维基数据：王信（Q45678428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678428
            external_identifier: Q45678428
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:15.108Z
            metadata_json: null
        - id: cs_eANveH7yr6j7kWYX8KFw8C
          claim_id: c_unF9y6E7w6LpjuKzxM7L2d
          source_id: s_X4jSCHW5ju9iPgUYTgtTpw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_X4jSCHW5ju9iPgUYTgtTpw
            source_type: api_record
            title: 维基数据：王子杰（Q45678395）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678395
            external_identifier: Q45678395
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
      object_person:
        id: p_JRxQLCdnELN71C7FFfG44D
        status: active
        display_name: 王子杰
        merged_into_person_id: null
  children:
    - claim:
        id: c_Gn3cNNqTZDrtPavY7FJrk2
        subject_person_id: p_N6bQh9pnDkScrvHDXa2Wts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GMCTq5KrktL4A6wV97QsyN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5GRedG7x9eoUkgKkKKgSdo
          claim_id: c_Gn3cNNqTZDrtPavY7FJrk2
          source_id: s_CURwrKyQEGB2YySmUVnJvG
          stance: supports
          locator: P22（父）
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
        - id: cs_856DGDNwmKgtKQSLadodvE
          claim_id: c_Gn3cNNqTZDrtPavY7FJrk2
          source_id: s_t12j9uut9cE85A2EB1mrNy
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_t12j9uut9cE85A2EB1mrNy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王信（150135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150135&o=json
            external_identifier: CBDB:150135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:15.257Z
            metadata_json: null
        - id: cs_ULyhH1HGLPd3yAL7Ex3Ftb
          claim_id: c_Gn3cNNqTZDrtPavY7FJrk2
          source_id: s_CJRovFBNPpkBucw7sNMmvK
          stance: supports
          locator: 亲属关系：父
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
        id: c_Mqeguwm9CMNJPm7gNqgfzD
        subject_person_id: p_N6bQh9pnDkScrvHDXa2Wts
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2QzaHREwKpSyXNbQkJ4Bk3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_11ZChLmY6H3wzMBs84eJhE
          claim_id: c_Mqeguwm9CMNJPm7gNqgfzD
          source_id: s_t12j9uut9cE85A2EB1mrNy
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_t12j9uut9cE85A2EB1mrNy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王信（150135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150135&o=json
            external_identifier: CBDB:150135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:15.257Z
            metadata_json: null
        - id: cs_Kocz7LESxE33AEJMPvvgsL
          claim_id: c_Mqeguwm9CMNJPm7gNqgfzD
          source_id: s_xQPsT5sBbbddERH371uuF4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xQPsT5sBbbddERH371uuF4
            source_type: api_record
            title: 维基数据：王信（Q45678428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678428
            external_identifier: Q45678428
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:15.108Z
            metadata_json: null
        - id: cs_buDsNjwsBmRPqPDRhVvPs6
          claim_id: c_Mqeguwm9CMNJPm7gNqgfzD
          source_id: s_Uq4LGQJyC9XRsj9FkngQaN
          stance: supports
          locator: P22（父）
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
    - claim:
        id: c_EclMmHdDaQrX13vYWWHaDA
        subject_person_id: p_N6bQh9pnDkScrvHDXa2Wts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2QzaHREwKpSyXNbQkJ4Bk3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uE2X-lbc4FB4NWDsgjsyLQ
          claim_id: c_EclMmHdDaQrX13vYWWHaDA
          source_id: s_t12j9uut9cE85A2EB1mrNy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2QzaHREwKpSyXNbQkJ4Bk3
        status: active
        display_name: 王表
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_iwn1RR2K75JATGlH8mNw2b
        subject_person_id: p_N6bQh9pnDkScrvHDXa2Wts
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NQEG3VEtv6G5kdckYDLpGN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_28hMSOZLuoiHGLJ_f9vHuu
          claim_id: c_iwn1RR2K75JATGlH8mNw2b
          source_id: s_t12j9uut9cE85A2EB1mrNy
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 28：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NQEG3VEtv6G5kdckYDLpGN
        status: active
        display_name: 王之渙
        merged_into_person_id: null
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王信，唐人物。CBDB 记录其籍贯记录为絳州，曾任著作佐郎。中国历代人物传记资料库（CBDB）以人物编号 150135 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王信 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JRxQLCdnELN71C7FFfG44D | 王子杰 | accepted |
| children | p_GMCTq5KrktL4A6wV97QsyN | 王德表 | accepted |
| children | p_2QzaHREwKpSyXNbQkJ4Bk3 | 王表 | accepted |
| children | p_2QzaHREwKpSyXNbQkJ4Bk3 | 王表 | accepted |
| descendants | p_NQEG3VEtv6G5kdckYDLpGN | 王之渙 | accepted |

## 外部来源

- [维基数据：王表（Q45587008）](https://www.wikidata.org/wiki/Q45587008)
- [维基数据：王德表（Q45447026）](https://www.wikidata.org/wiki/Q45447026)
- [维基数据：王信（Q45678428）](https://www.wikidata.org/wiki/Q45678428)
- [维基数据：王子杰（Q45678395）](https://www.wikidata.org/wiki/Q45678395)
- [CBDB 中国历代人物传记资料库：王德表（92112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92112&o=json)
- [CBDB 中国历代人物传记资料库：王信（150135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150135&o=json)
