---
schema: wang-person/v1
id: p_uu4yjus8EVVwp6m8E5Qav5
status: active
merged_into: null
display_name: 王建中
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LwFe178tQqDWDJi23GxYKt
        subject_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e5ebNrb72EMtrHTpJVBCYz
          claim_id: c_LwFe178tQqDWDJi23GxYKt
          source_id: s_DWvq37AAtx9FFNpHWvSHPC
          stance: supports
          locator: CBDB:207082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207082）
          source: &a1
            id: s_DWvq37AAtx9FFNpHWvSHPC
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 207082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207082&o=json
            external_identifier: CBDB:207082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HS4PW77Q76EuMHPURyqzBd
        subject_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1556年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_98sNLm7M637gcmPvcZVQxN
          claim_id: c_HS4PW77Q76EuMHPURyqzBd
          source_id: s_DWvq37AAtx9FFNpHWvSHPC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eMu1CpkNfF2EFan86n6VR8
        subject_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VMSM5nni47Z8NRF1CBuZ6H
          claim_id: c_eMu1CpkNfF2EFan86n6VR8
          source_id: s_DWvq37AAtx9FFNpHWvSHPC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_apU2kiOluYSNuLNDLIRkLS
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J6Z_xZDoQ4o2lNy-lbNnT7
          claim_id: c_apU2kiOluYSNuLNDLIRkLS
          source_id: s_AyFU1YoxuNRAXfYCvRKqQo
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AyFU1YoxuNRAXfYCvRKqQo
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 227348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227348&o=json
            external_identifier: CBDB:227348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mk7g7S4D3bQEXDd4TQZ87J
        status: active
        display_name: 王言
        merged_into_person_id: null
  children:
    - claim:
        id: c_3AaG_YKWCJc5E8KLg6Dhnz
        subject_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fBSpr1XLTJQSPTHxe8gQcL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vac0z1g5W8dnpeC1188cRK
          claim_id: c_3AaG_YKWCJc5E8KLg6Dhnz
          source_id: s_TPzudFrtFm4pG8o4ZckQSe
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TPzudFrtFm4pG8o4ZckQSe
            source_type: api_record
            title: 中国历代人物传记资料库：王墀獻（CBDB 227356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227356&o=json
            external_identifier: CBDB:227356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fBSpr1XLTJQSPTHxe8gQcL
        status: active
        display_name: 王墀獻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Ht8_eQsWhJaL0AWDn2OL3Y
        subject_person_id: p_9f4FXEus92MxR1KgNAKHGn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Myx-Kv1MtnerGoEnTZPMJN
          claim_id: c_Ht8_eQsWhJaL0AWDn2OL3Y
          source_id: s_ive7iRvKY9AtzAofgt3gdW
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ive7iRvKY9AtzAofgt3gdW
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 227346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227346&o=json
            external_identifier: CBDB:227346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9f4FXEus92MxR1KgNAKHGn
        status: active
        display_name: 王端
        merged_into_person_id: null
    - claim:
        id: c__1CbkKShS3BzcJbdXlPml8
        subject_person_id: p_hnSBnT4j7rHN6LwszWa45X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_okP_aNaJf91eP-q8GBdKW7
          claim_id: c__1CbkKShS3BzcJbdXlPml8
          source_id: s_QM46N5EPZbowiGDyJEQSvU
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QM46N5EPZbowiGDyJEQSvU
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 227347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227347&o=json
            external_identifier: CBDB:227347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hnSBnT4j7rHN6LwszWa45X
        status: active
        display_name: 王堂
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王建中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建中 | accepted |
| birth.date | 1556年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mk7g7S4D3bQEXDd4TQZ87J | 王言 | accepted |
| children | p_fBSpr1XLTJQSPTHxe8gQcL | 王墀獻 | accepted |
| ancestors | p_9f4FXEus92MxR1KgNAKHGn | 王端 | accepted |
| ancestors | p_hnSBnT4j7rHN6LwszWa45X | 王堂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王墀獻（CBDB 227356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227356&o=json)
- [中国历代人物传记资料库：王端（CBDB 227346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227346&o=json)
- [中国历代人物传记资料库：王建中（CBDB 207082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207082&o=json)
- [中国历代人物传记资料库：王堂（CBDB 227347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227347&o=json)
- [中国历代人物传记资料库：王言（CBDB 227348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227348&o=json)
