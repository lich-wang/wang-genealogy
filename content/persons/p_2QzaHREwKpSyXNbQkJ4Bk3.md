---
schema: wang-person/v1
id: p_2QzaHREwKpSyXNbQkJ4Bk3
status: active
merged_into: null
display_name: 王表
cbdb_id: 153364
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bvdw24ppitB8KALGQDxbCR
        subject_person_id: p_2QzaHREwKpSyXNbQkJ4Bk3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表，唐人物。CBDB 记录其籍贯记录为河南府，曾任縣丞。中国历代人物传记资料库（CBDB）以人物编号 153364 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_616BZKKmmmPTCvHv2fb14X
          claim_id: c_Bvdw24ppitB8KALGQDxbCR
          source_id: s_Uq4LGQJyC9XRsj9FkngQaN
          stance: supports
          locator: null
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
        - id: cs_RtvhCFbxBMdDSOD-MuAQ46
          claim_id: c_Bvdw24ppitB8KALGQDxbCR
          source_id: s_1F8UydYc31GCSrYwD7vKMa
          stance: supports
          locator: CBDB:153364
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1F8UydYc31GCSrYwD7vKMa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王表（153364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153364&o=json
            external_identifier: CBDB:153364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:38:02.854Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GresqGS5nsK9FDwbcKWAX1
        subject_person_id: p_2QzaHREwKpSyXNbQkJ4Bk3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XmXy2DXF183x7KyC3oAmNr
          claim_id: c_GresqGS5nsK9FDwbcKWAX1
          source_id: s_1F8UydYc31GCSrYwD7vKMa
          stance: supports
          locator: Q45587008
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_kxAuMRCti5GX42QaqEYJwC
          claim_id: c_GresqGS5nsK9FDwbcKWAX1
          source_id: s_Uq4LGQJyC9XRsj9FkngQaN
          stance: supports
          locator: Q45587008
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_N6bQh9pnDkScrvHDXa2Wts
        status: active
        display_name: 王信
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
      object_person:
        id: p_N6bQh9pnDkScrvHDXa2Wts
        status: active
        display_name: 王信
        merged_into_person_id: null
  children:
    - claim:
        id: c_Z1W6BXUYWJrn4sRKB3P5D7
        subject_person_id: p_2QzaHREwKpSyXNbQkJ4Bk3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MHnJiH3KT72B1d43pNjdsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iZhLi2TmNci52Jj4DDb8Wt
          claim_id: c_Z1W6BXUYWJrn4sRKB3P5D7
          source_id: s_Uq4LGQJyC9XRsj9FkngQaN
          stance: supports
          locator: P40（子女）
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
        - id: cs_jvU4aAdk8JxXBHM29zrtjJ
          claim_id: c_Z1W6BXUYWJrn4sRKB3P5D7
          source_id: s_oHwVLtMeMLGbeix5ABuqZN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oHwVLtMeMLGbeix5ABuqZN
            source_type: api_record
            title: 維基數據：王昱（Q45587071）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587071
            external_identifier: Q45587071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:30.809Z
            metadata_json: null
      object_person:
        id: p_MHnJiH3KT72B1d43pNjdsL
        status: active
        display_name: 王昱
        merged_into_person_id: null
    - claim:
        id: c_hL6SiWF8XQT8GYNRvmbyhm
        subject_person_id: p_2QzaHREwKpSyXNbQkJ4Bk3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_E9ytpKcjGYRd1XZGve34gy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8sDsxTaNdWLLzRJfh3wsEX
          claim_id: c_hL6SiWF8XQT8GYNRvmbyhm
          source_id: s_GotHTyPQYsNrDTXS36Mq8J
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GotHTyPQYsNrDTXS36Mq8J
            source_type: api_record
            title: 维基数据：王景（Q45445465）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45445465
            external_identifier: Q45445465
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:11.488Z
            metadata_json: null
        - id: cs_f71vQaLqK1j6DC7GQyPEBs
          claim_id: c_hL6SiWF8XQT8GYNRvmbyhm
          source_id: s_Uq4LGQJyC9XRsj9FkngQaN
          stance: supports
          locator: P40（子女）
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
        id: p_E9ytpKcjGYRd1XZGve34gy
        status: active
        display_name: 王景
        merged_into_person_id: null
    - claim:
        id: c_2NfrUXNL7M5gtJXyH48XVY
        subject_person_id: p_2QzaHREwKpSyXNbQkJ4Bk3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_65Sv25s3dJsDY8HXQATSAi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2aT1Fi6EngxPgDEd3QA6Go
          claim_id: c_2NfrUXNL7M5gtJXyH48XVY
          source_id: s_Uq4LGQJyC9XRsj9FkngQaN
          stance: supports
          locator: P40（子女）
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
        - id: cs_KTHC7VMQMAzpb3BN26tidt
          claim_id: c_2NfrUXNL7M5gtJXyH48XVY
          source_id: s_VAAE3c88TnsbqiFfKz8iQd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VAAE3c88TnsbqiFfKz8iQd
            source_type: api_record
            title: 维基数据：王洛客（Q45503855）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45503855
            external_identifier: Q45503855
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
      object_person:
        id: p_65Sv25s3dJsDY8HXQATSAi
        status: active
        display_name: 王洛客
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王表，唐人物。CBDB 记录其籍贯记录为河南府，曾任縣丞。中国历代人物传记资料库（CBDB）以人物编号 153364 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王表 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N6bQh9pnDkScrvHDXa2Wts | 王信 | accepted |
| parents | p_N6bQh9pnDkScrvHDXa2Wts | 王信 | accepted |
| children | p_MHnJiH3KT72B1d43pNjdsL | 王昱 | accepted |
| children | p_E9ytpKcjGYRd1XZGve34gy | 王景 | accepted |
| children | p_65Sv25s3dJsDY8HXQATSAi | 王洛客 | accepted |

## 外部来源

- [维基数据：王表（Q45587008）](https://www.wikidata.org/wiki/Q45587008)
- [维基数据：王景（Q45445465）](https://www.wikidata.org/wiki/Q45445465)
- [维基数据：王洛客（Q45503855）](https://www.wikidata.org/wiki/Q45503855)
- [维基数据：王信（Q45678428）](https://www.wikidata.org/wiki/Q45678428)
- [維基數據：王昱（Q45587071）](https://www.wikidata.org/wiki/Q45587071)
- [CBDB 中国历代人物传记资料库：王表（153364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153364&o=json)
- [CBDB 中国历代人物传记资料库：王信（150135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150135&o=json)
