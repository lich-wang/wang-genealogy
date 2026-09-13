---
schema: wang-person/v1
id: p_ajPx8SrP67WXjyut5BBExs
status: active
merged_into: null
display_name: 王睿
cbdb_id: 314679
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8fmpjLpJbo86gtQ3Ee7BF3
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿，明人物。嘉靖二十九年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 314679）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_i2WT7oCaSHrjBAqJokjqLC
          claim_id: c_8fmpjLpJbo86gtQ3Ee7BF3
          source_id: s_fGCPjzVEA74N9JZyJDe8YP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_fGCPjzVEA74N9JZyJDe8YP
            source_type: api_record
            title: 维基数据：王睿（Q45442408）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442408
            external_identifier: Q45442408
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_T_L2E09iICkvyBtA3eTWJe
          claim_id: c_8fmpjLpJbo86gtQ3Ee7BF3
          source_id: s_Fgk8mdNb9CUTVmfGXxF46A
          stance: supports
          locator: CBDB:314679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fgk8mdNb9CUTVmfGXxF46A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王睿（314679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314679&o=json
            external_identifier: CBDB:314679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:09.449Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_97qaQS6hs8KRofe8MY5SRd
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6mhxddTpQ2w7V9XzyPeQqd
          claim_id: c_97qaQS6hs8KRofe8MY5SRd
          source_id: s_fGCPjzVEA74N9JZyJDe8YP
          stance: supports
          locator: Q45442408
          quotation: null
          interpretation_note: null
          source:
            id: s_fGCPjzVEA74N9JZyJDe8YP
            source_type: api_record
            title: 维基数据：王睿（Q45442408）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442408
            external_identifier: Q45442408
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_uo1i7f9pAZDsj6kiNqsbhL
          claim_id: c_97qaQS6hs8KRofe8MY5SRd
          source_id: s_Fgk8mdNb9CUTVmfGXxF46A
          stance: supports
          locator: Q45442408
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mBPjx4qVx8uMCrxUpZdSEE
        subject_person_id: p_XafvmbqFiWanFhRfKjJh1p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ajPx8SrP67WXjyut5BBExs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g2emKDW9J94nS2S8FPtMsH
          claim_id: c_mBPjx4qVx8uMCrxUpZdSEE
          source_id: s_fGCPjzVEA74N9JZyJDe8YP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_Dd8dKsAWhae6TMoGzVhFoJ
          claim_id: c_mBPjx4qVx8uMCrxUpZdSEE
          source_id: s_V82c4Y2GCs47mYwENCUT7M
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_V82c4Y2GCs47mYwENCUT7M
            source_type: api_record
            title: 维基数据：王通（Q45442342）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442342
            external_identifier: Q45442342
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
      object_person:
        id: p_XafvmbqFiWanFhRfKjJh1p
        status: active
        display_name: 王通
        merged_into_person_id: null
  children:
    - claim:
        id: c_RV5FvhjL5nv9WvgpnqDLmA
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jWRBXNs9hNQYimujJ64LcZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FwY4fViPEWbtAYPBCHbCmr
          claim_id: c_RV5FvhjL5nv9WvgpnqDLmA
          source_id: s_fGCPjzVEA74N9JZyJDe8YP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fGCPjzVEA74N9JZyJDe8YP
            source_type: api_record
            title: 维基数据：王睿（Q45442408）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442408
            external_identifier: Q45442408
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_NKzdPNwAjrdSYatqstQHii
          claim_id: c_RV5FvhjL5nv9WvgpnqDLmA
          source_id: s_vmbSm4M2V7WEGi1zAPPHbV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vmbSm4M2V7WEGi1zAPPHbV
            source_type: api_record
            title: 维基数据：王𫓧（Q15934129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934129
            external_identifier: Q15934129
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
            metadata_json: null
      object_person:
        id: p_jWRBXNs9hNQYimujJ64LcZ
        status: active
        display_name: 王𫓧
        merged_into_person_id: null
    - claim:
        id: c__HIUS8DGQzeSb_nlbeBtBd
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zPKLBMGVifz3pyF9TqlAVk
          claim_id: c__HIUS8DGQzeSb_nlbeBtBd
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PFzSq6kQwtCdVXYvMpdpPB
            source_type: api_record
            title: 中国历代人物传记资料库：王鈇（CBDB 67912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json
            external_identifier: CBDB:67912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KdnEK5JvxzCLuhzpo1b35X
        status: active
        display_name: 王鈇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王睿，明人物。嘉靖二十九年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 314679） | accepted |
| name.primary | 王睿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XafvmbqFiWanFhRfKjJh1p | 王通 | accepted |
| children | p_jWRBXNs9hNQYimujJ64LcZ | 王𫓧 | accepted |
| children | p_KdnEK5JvxzCLuhzpo1b35X | 王鈇 | accepted |

## 外部来源

- [维基数据：王𫓧（Q15934129）](https://www.wikidata.org/wiki/Q15934129)
- [维基数据：王睿（Q45442408）](https://www.wikidata.org/wiki/Q45442408)
- [维基数据：王通（Q45442342）](https://www.wikidata.org/wiki/Q45442342)
- [中国历代人物传记资料库：王鈇（CBDB 67912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json)
- [CBDB 中国历代人物传记资料库：王睿（314679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314679&o=json)
