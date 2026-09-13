---
schema: wang-person/v1
id: p_VC8bBPzAyQehLYq3eBykXc
status: active
merged_into: null
display_name: 王時儉
cbdb_id: 203083
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8DWZDriAtHi7P2YmtZjLD1
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時儉（生于1497年），史料所见人物。本项目依据《中国历代人物传记资料库：王時儉（CBDB 203083）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_YW7YfZObm2bqCAiK7ZV1Ds
          claim_id: c_8DWZDriAtHi7P2YmtZjLD1
          source_id: s_s85LLtikxEzvQqhZB5Md9X
          stance: supports
          locator: CBDB:203083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_s85LLtikxEzvQqhZB5Md9X
            source_type: api_record
            title: 中国历代人物传记资料库：王時儉（CBDB 203083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203083&o=json
            external_identifier: CBDB:203083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QECMnwXKkjk75PPC784htK
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1497-01-01
            latest: 1497-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VgBKxMJV3FwRJ4zPPj65Ke
          claim_id: c_QECMnwXKkjk75PPC784htK
          source_id: s_s85LLtikxEzvQqhZB5Md9X
          stance: supports
          locator: CBDB:203083
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1497
          source:
            id: s_s85LLtikxEzvQqhZB5Md9X
            source_type: api_record
            title: 中国历代人物传记资料库：王時儉（CBDB 203083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203083&o=json
            external_identifier: CBDB:203083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LMCwjH5uWAWThHrhSo3Jgz
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NpDfDPyTUUEkp9FR3rpHj2
          claim_id: c_LMCwjH5uWAWThHrhSo3Jgz
          source_id: s_s85LLtikxEzvQqhZB5Md9X
          stance: supports
          locator: CBDB:203083
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1497
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_URqAOpyRYOCgONjQ4538Js
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rtyQa2s94J13v7lqq8S2M_
          claim_id: c_URqAOpyRYOCgONjQ4538Js
          source_id: s_y5BosZXGh6a3zPCcNM7ZwN
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第七十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y5BosZXGh6a3zPCcNM7ZwN
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 299500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299500&o=json
            external_identifier: CBDB:299500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rLGPWGvpfkyHQHmKKEMECW
        status: active
        display_name: 王縉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_d7nk7LJ4HPCw7OFasMwsxz
        subject_person_id: p_JaCmStE8FQ4hMkB4kTj6HJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AK2RPTAE-G9k81jM2L6JBj
          claim_id: c_d7nk7LJ4HPCw7OFasMwsxz
          source_id: s_ybszx2v3qFbYTM22Cm2skq
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第七十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ybszx2v3qFbYTM22Cm2skq
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 299498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299498&o=json
            external_identifier: CBDB:299498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JaCmStE8FQ4hMkB4kTj6HJ
        status: active
        display_name: 王宗道
        merged_into_person_id: null
    - claim:
        id: c_y4-sJNIwFI7zR_Wc5KWX_E
        subject_person_id: p_Pu2x9TKf86JgQ9g7MASE5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l6AfHvdF0ndAqvV1VWYq45
          claim_id: c_y4-sJNIwFI7zR_Wc5KWX_E
          source_id: s_29iEQ8GXjzhkszQfjf5tCj
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第七十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_29iEQ8GXjzhkszQfjf5tCj
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 299499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299499&o=json
            external_identifier: CBDB:299499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Pu2x9TKf86JgQ9g7MASE5D
        status: active
        display_name: 王繼
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王時儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時儉（生于1497年），史料所见人物。本项目依据《中国历代人物传记资料库：王時儉（CBDB 203083）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1497年 | accepted |
| name.primary | 王時儉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rLGPWGvpfkyHQHmKKEMECW | 王縉 | accepted |
| ancestors | p_JaCmStE8FQ4hMkB4kTj6HJ | 王宗道 | accepted |
| ancestors | p_Pu2x9TKf86JgQ9g7MASE5D | 王繼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 299499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299499&o=json)
- [中国历代人物传记资料库：王縉（CBDB 299500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299500&o=json)
- [中国历代人物传记资料库：王時儉（CBDB 203083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203083&o=json)
- [中国历代人物传记资料库：王宗道（CBDB 299498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299498&o=json)
