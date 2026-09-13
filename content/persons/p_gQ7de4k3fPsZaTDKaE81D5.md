---
schema: wang-person/v1
id: p_gQ7de4k3fPsZaTDKaE81D5
status: active
merged_into: null
display_name: 王三宅
cbdb_id: 126449
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UDLbCRWWCwiWVoF7oCdrRy
        subject_person_id: p_gQ7de4k3fPsZaTDKaE81D5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三宅，明人物。明清進士進士，籍贯懷慶府，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9RIEgyg7E_5j6E8jTh7VPI
          claim_id: c_UDLbCRWWCwiWVoF7oCdrRy
          source_id: s_h7CAy5ME4phy84LMJ46EMX
          stance: supports
          locator: CBDB:126449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_h7CAy5ME4phy84LMJ46EMX
            source_type: api_record
            title: 中国历代人物传记资料库：王三宅（CBDB 126449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126449&o=json
            external_identifier: CBDB:126449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wMk5yfQatG5Rky6tPnPjYX
        subject_person_id: p_gQ7de4k3fPsZaTDKaE81D5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三宅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fRocwHNCLAaRYPLz7qG578
          claim_id: c_wMk5yfQatG5Rky6tPnPjYX
          source_id: s_h7CAy5ME4phy84LMJ46EMX
          stance: supports
          locator: CBDB:126449
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9fA9nAOnpYu3dex-JH07Lw
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gQ7de4k3fPsZaTDKaE81D5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cJKzNDS84LDvavmkyUbU2g
          claim_id: c_9fA9nAOnpYu3dex-JH07Lw
          source_id: s_Ew3yKZ6g5wxDGR12BzttQa
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百零五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ew3yKZ6g5wxDGR12BzttQa
            source_type: api_record
            title: 中国历代人物传记资料库：王曰可（CBDB 214227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214227&o=json
            external_identifier: CBDB:214227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1FBPum8LTBdeJMCSbLMi71
        status: active
        display_name: 王曰可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_5GQUp6JPhDuckMqCGRrQ-w
        subject_person_id: p_5v6Xq1AA1UE4c7bcH4r8Te
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gQ7de4k3fPsZaTDKaE81D5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fVgmazkbg7Y2UaLaLrmf-B
          claim_id: c_5GQUp6JPhDuckMqCGRrQ-w
          source_id: s_Er9XcTRxBwP6AxNGovEHMA
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百零五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Er9XcTRxBwP6AxNGovEHMA
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 214224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214224&o=json
            external_identifier: CBDB:214224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5v6Xq1AA1UE4c7bcH4r8Te
        status: active
        display_name: 王卿
        merged_into_person_id: null
    - claim:
        id: c_2sJVqDjelDCugD37PDF0By
        subject_person_id: p_MK97hCcoFWb8K3JPHRLDhj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gQ7de4k3fPsZaTDKaE81D5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jjWZ5A8029CZ5a9Q8ITRoz
          claim_id: c_2sJVqDjelDCugD37PDF0By
          source_id: s_gYsbVNCbQUd22UJBR2jYoH
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百零五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gYsbVNCbQUd22UJBR2jYoH
            source_type: api_record
            title: 中国历代人物传记资料库：王施恩（CBDB 214225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214225&o=json
            external_identifier: CBDB:214225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MK97hCcoFWb8K3JPHRLDhj
        status: active
        display_name: 王施恩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王三宅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三宅，明人物。明清進士進士，籍贯懷慶府，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126449） | accepted |
| name.primary | 王三宅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1FBPum8LTBdeJMCSbLMi71 | 王曰可 | accepted |
| ancestors | p_5v6Xq1AA1UE4c7bcH4r8Te | 王卿 | accepted |
| ancestors | p_MK97hCcoFWb8K3JPHRLDhj | 王施恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王卿（CBDB 214224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214224&o=json)
- [中国历代人物传记资料库：王三宅（CBDB 126449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126449&o=json)
- [中国历代人物传记资料库：王施恩（CBDB 214225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214225&o=json)
- [中国历代人物传记资料库：王曰可（CBDB 214227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214227&o=json)
