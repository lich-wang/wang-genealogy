---
schema: wang-person/v1
id: p_DtN8Z5QdtH34dfH2KX2i1q
status: active
merged_into: null
display_name: 王夢暘
cbdb_id: 206693
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q7Cc9ZzRsGG5DA2C2ofFit
        subject_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢暘（生于1551年），明人物。萬曆八年進士，籍贯上饒，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 206693）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tdnpVFwQMMYILYZ76roi7u
          claim_id: c_q7Cc9ZzRsGG5DA2C2ofFit
          source_id: s_UMWiUF1gXb6MLAJKWQEAQY
          stance: supports
          locator: CBDB:206693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UMWiUF1gXb6MLAJKWQEAQY
            source_type: api_record
            title: 中国历代人物传记资料库：王夢暘（CBDB 206693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206693&o=json
            external_identifier: CBDB:206693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_N5KS9FLrRBqyZHcHBhWRz2
        subject_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1551-01-01
            latest: 1551-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ozhomAjTzMPvySqjuVxdFy
          claim_id: c_N5KS9FLrRBqyZHcHBhWRz2
          source_id: s_UMWiUF1gXb6MLAJKWQEAQY
          stance: supports
          locator: CBDB:206693
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1551
          source:
            id: s_UMWiUF1gXb6MLAJKWQEAQY
            source_type: api_record
            title: 中国历代人物传记资料库：王夢暘（CBDB 206693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206693&o=json
            external_identifier: CBDB:206693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dxVGoHUFyueVWEfexfDfj4
        subject_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢暘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t6GEZ3vhNZMEvt7mePE5J1
          claim_id: c_dxVGoHUFyueVWEfexfDfj4
          source_id: s_UMWiUF1gXb6MLAJKWQEAQY
          stance: supports
          locator: CBDB:206693
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1551
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fitGgoZ1dC5wMJv5XQ0zWr
        subject_person_id: p_GEvSYKNyDCnRLesR9j7DmA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FaWhMGHnnpK5NQEjsGFGaV
          claim_id: c_fitGgoZ1dC5wMJv5XQ0zWr
          source_id: s_nNYKzYtVw9QTf3GiWMQerD
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nNYKzYtVw9QTf3GiWMQerD
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 221659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221659&o=json
            external_identifier: CBDB:221659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GEvSYKNyDCnRLesR9j7DmA
        status: active
        display_name: 王綸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DTgDHxFs35QGcaxFtp3DcD
        subject_person_id: p_CJfcb79SWE3Q64wPYfJJmm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rv4aTknuLyPDEkiKbL3M6H
          claim_id: c_DTgDHxFs35QGcaxFtp3DcD
          source_id: s_vy2yKLMj4NA3zt32rYtxvX
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百零七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vy2yKLMj4NA3zt32rYtxvX
            source_type: api_record
            title: 中国历代人物传记资料库：王鈺（CBDB 221658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221658&o=json
            external_identifier: CBDB:221658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CJfcb79SWE3Q64wPYfJJmm
        status: active
        display_name: 王鈺
        merged_into_person_id: null
    - claim:
        id: c_kpxNYTjeN6_0ZA8VI41X_E
        subject_person_id: p_kxLjAiuhdB84wFKQMEDLyB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IghpOBnXbpGsMLPATT7--1
          claim_id: c_kpxNYTjeN6_0ZA8VI41X_E
          source_id: s_hoqEt81131kpt1Vams6PAD
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百零七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hoqEt81131kpt1Vams6PAD
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 221657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221657&o=json
            external_identifier: CBDB:221657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kxLjAiuhdB84wFKQMEDLyB
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_izTdKdKX8gIrLV0ywGx7xt
        subject_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GUY42anzhEmrW3MkiP5GSB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5MaF--chAhMXN4bngKt1Kt
          claim_id: c_izTdKdKX8gIrLV0ywGx7xt
          source_id: s_fYlfpYtdIphT-jad1v1Gbp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206693 王夢暘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fYlfpYtdIphT-jad1v1Gbp
            source_type: api_record
            title: 中国历代人物传记资料库：王夢雷（CBDB 221666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221666&o=json
            external_identifier: CBDB:221666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GUY42anzhEmrW3MkiP5GSB
        status: active
        display_name: 王夢雷
        merged_into_person_id: null
    - claim:
        id: c_KBqBd9mWe8FAeJxu6cSM28
        subject_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YBCHm7yBrAhedTyRZP7BRr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBsWT1ZKgiEJ-xHOSJkjaJ
          claim_id: c_KBqBd9mWe8FAeJxu6cSM28
          source_id: s_ASPUwmbbnWJ8v-Zq0rLkEX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206693 王夢暘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ASPUwmbbnWJ8v-Zq0rLkEX
            source_type: api_record
            title: 中国历代人物传记资料库：王夢麒（CBDB 221667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221667&o=json
            external_identifier: CBDB:221667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YBCHm7yBrAhedTyRZP7BRr
        status: active
        display_name: 王夢麒
        merged_into_person_id: null
    - claim:
        id: c_m_My8AKBxrIXq_uSuDUHR9
        subject_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pbBqaP2pu6zstMoCepjdss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tbtPZb_m-5huxeB6gdA3wQ
          claim_id: c_m_My8AKBxrIXq_uSuDUHR9
          source_id: s_2awq05dCOOvWhj9peA4pmV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206693 王夢暘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2awq05dCOOvWhj9peA4pmV
            source_type: api_record
            title: 中国历代人物传记资料库：王夢良（CBDB 221665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221665&o=json
            external_identifier: CBDB:221665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pbBqaP2pu6zstMoCepjdss
        status: active
        display_name: 王夢良
        merged_into_person_id: null
---

# 王夢暘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢暘（生于1551年），明人物。萬曆八年進士，籍贯上饒，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 206693） | accepted |
| birth.date | 1551年 | accepted |
| name.primary | 王夢暘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GEvSYKNyDCnRLesR9j7DmA | 王綸 | accepted |
| ancestors | p_CJfcb79SWE3Q64wPYfJJmm | 王鈺 | accepted |
| ancestors | p_kxLjAiuhdB84wFKQMEDLyB | 王瓚 | accepted |
| other | p_GUY42anzhEmrW3MkiP5GSB | 王夢雷 | accepted |
| other | p_YBCHm7yBrAhedTyRZP7BRr | 王夢麒 | accepted |
| other | p_pbBqaP2pu6zstMoCepjdss | 王夢良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 221659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221659&o=json)
- [中国历代人物传记资料库：王夢雷（CBDB 221666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221666&o=json)
- [中国历代人物传记资料库：王夢良（CBDB 221665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221665&o=json)
- [中国历代人物传记资料库：王夢麒（CBDB 221667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221667&o=json)
- [中国历代人物传记资料库：王夢暘（CBDB 206693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206693&o=json)
- [中国历代人物传记资料库：王鈺（CBDB 221658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221658&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 221657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221657&o=json)
