---
schema: wang-person/v1
id: p_CgEKz1NoAXQAHTMt7rq26j
status: active
merged_into: null
display_name: 王希哲
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AYS7KRJ3UeRiVhJR14g2Hr
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zNt49GBRNpGDoaHYBVPBAQ
          claim_id: c_AYS7KRJ3UeRiVhJR14g2Hr
          source_id: s_LphhT8ZVfiGGNobzUEgK9t
          stance: supports
          locator: CBDB:236843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236843）
          source: &a1
            id: s_LphhT8ZVfiGGNobzUEgK9t
            source_type: api_record
            title: 中国历代人物传记资料库：王希哲（CBDB 236843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236843&o=json
            external_identifier: CBDB:236843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FQU8Le3gnRvWB2Y57eC4Nc
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希哲，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__iyRdQujVsucnGa3bsI5Wr
          claim_id: c_FQU8Le3gnRvWB2Y57eC4Nc
          source_id: s_LphhT8ZVfiGGNobzUEgK9t
          stance: supports
          locator: CBDB:236843
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jqytP4b1ow89RfSt_Z6Kmq
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0PDqpw6ETqDty76jw5V_P4
          claim_id: c_jqytP4b1ow89RfSt_Z6Kmq
          source_id: s_2D4p66LisW9zuWaUxemQ21
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2D4p66LisW9zuWaUxemQ21
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 66976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json
            external_identifier: CBDB:66976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfDGGh6h4aUB2seMFJ2w8R
        status: active
        display_name: 王宇
        merged_into_person_id: null
    - claim:
        id: c_jMumxWpM7ZCGyGH8gvORAD
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5EgzdfJMD3NGPP3uDreorv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-mynBelspxeY4eEpia0mE
          claim_id: c_jMumxWpM7ZCGyGH8gvORAD
          source_id: s_9Gb9zqGZZAfhfhljwPnq74
          stance: supports
          locator: CBDB：兄弟 王宇（66976）之父／母 王希哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲玉 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王仲玉 之父／母。
          source:
            id: s_9Gb9zqGZZAfhfhljwPnq74
            source_type: api_record
            title: 中国历代人物传记资料库：王仲玉（CBDB 236847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236847&o=json
            external_identifier: CBDB:236847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5EgzdfJMD3NGPP3uDreorv
        status: active
        display_name: 王仲玉
        merged_into_person_id: null
    - claim:
        id: c_F9ZMeieiRZzlK3vdi8aXH8
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9xi1VbgPTa8NJ2wLn887t3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ji5Ct-7zl-usb4A4Eh92G
          claim_id: c_F9ZMeieiRZzlK3vdi8aXH8
          source_id: s_vOM1923PKxJwgEoQONRuy4
          stance: supports
          locator: CBDB：兄弟 王宇（66976）之父／母 王希哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲和 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王仲和 之父／母。
          source:
            id: s_vOM1923PKxJwgEoQONRuy4
            source_type: api_record
            title: 中国历代人物传记资料库：王仲和（CBDB 236846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236846&o=json
            external_identifier: CBDB:236846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9xi1VbgPTa8NJ2wLn887t3
        status: active
        display_name: 王仲和
        merged_into_person_id: null
    - claim:
        id: c_vPoEjdfO0NCk2_CHi_zx52
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TT8LfufnLba48ky697TFQK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shmMhGuTRoDsARU3ca3NQt
          claim_id: c_vPoEjdfO0NCk2_CHi_zx52
          source_id: s_Y9n1Zs8cG4pTNnRMC_61Jj
          stance: supports
          locator: CBDB：兄弟 王宇（66976）之父／母 王希哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王宗 之父／母。
          source:
            id: s_Y9n1Zs8cG4pTNnRMC_61Jj
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 236850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236850&o=json
            external_identifier: CBDB:236850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TT8LfufnLba48ky697TFQK
        status: active
        display_name: 王宗
        merged_into_person_id: null
    - claim:
        id: c_cFSbD-4JcMgALrm5QVTO1d
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_auKShgYLoKGMUZrPg2akKL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M7HyPqm1SlpC0V816iTc_8
          claim_id: c_cFSbD-4JcMgALrm5QVTO1d
          source_id: s_y_BoKGL8gFY1UxRuPuWbPg
          stance: supports
          locator: CBDB：兄弟 王宇（66976）之父／母 王希哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲儀 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王仲儀 之父／母。
          source:
            id: s_y_BoKGL8gFY1UxRuPuWbPg
            source_type: api_record
            title: 中国历代人物传记资料库：王仲儀（CBDB 236848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236848&o=json
            external_identifier: CBDB:236848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_auKShgYLoKGMUZrPg2akKL
        status: active
        display_name: 王仲儀
        merged_into_person_id: null
    - claim:
        id: c_8qSEJfDMJH7g97Vpd7jBjP
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rXgThQ3SLVpXDRziiubL6P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X8HP2f_Ebe37y_cExKTYs2
          claim_id: c_8qSEJfDMJH7g97Vpd7jBjP
          source_id: s_L0myh3bVy1aNe-0usMwhAl
          stance: supports
          locator: CBDB：兄弟 王宇（66976）之父／母 王希哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王宜 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王宜 之父／母。
          source:
            id: s_L0myh3bVy1aNe-0usMwhAl
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 236849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236849&o=json
            external_identifier: CBDB:236849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rXgThQ3SLVpXDRziiubL6P
        status: active
        display_name: 王宜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希哲 | accepted |
| bio.summary | 王希哲，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AfDGGh6h4aUB2seMFJ2w8R | 王宇 | accepted |
| children | p_5EgzdfJMD3NGPP3uDreorv | 王仲玉 | accepted |
| children | p_9xi1VbgPTa8NJ2wLn887t3 | 王仲和 | accepted |
| children | p_TT8LfufnLba48ky697TFQK | 王宗 | accepted |
| children | p_auKShgYLoKGMUZrPg2akKL | 王仲儀 | accepted |
| children | p_rXgThQ3SLVpXDRziiubL6P | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希哲（CBDB 236843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236843&o=json)
- [中国历代人物传记资料库：王宜（CBDB 236849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236849&o=json)
- [中国历代人物传记资料库：王宇（CBDB 66976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json)
- [中国历代人物传记资料库：王仲和（CBDB 236846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236846&o=json)
- [中国历代人物传记资料库：王仲儀（CBDB 236848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236848&o=json)
- [中国历代人物传记资料库：王仲玉（CBDB 236847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236847&o=json)
- [中国历代人物传记资料库：王宗（CBDB 236850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236850&o=json)
