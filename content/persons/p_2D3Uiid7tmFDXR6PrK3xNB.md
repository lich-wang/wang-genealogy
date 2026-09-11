---
schema: wang-person/v1
id: p_2D3Uiid7tmFDXR6PrK3xNB
status: active
merged_into: null
display_name: 王智珪
cbdb_id: 135162
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LYAuMcGtyNE3SKMPiDpEh3
        subject_person_id: p_2D3Uiid7tmFDXR6PrK3xNB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智珪，清人物。中国历代人物传记资料库（CBDB）以人物编号 135162 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ynk5tUG-IxozvZ-cQdKk_p
          claim_id: c_LYAuMcGtyNE3SKMPiDpEh3
          source_id: s_y3vWyxDCt6Vee29oJRq47Y
          stance: supports
          locator: CBDB:135162
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_y3vWyxDCt6Vee29oJRq47Y
            source_type: api_record
            title: 中国历代人物传记资料库：王智珪（CBDB 135162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135162&o=json
            external_identifier: CBDB:135162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_irnr5NHbEzvW8D1oyzurRs
        subject_person_id: p_2D3Uiid7tmFDXR6PrK3xNB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sNa8W7SSr73Aevj6ss194G
          claim_id: c_irnr5NHbEzvW8D1oyzurRs
          source_id: s_y3vWyxDCt6Vee29oJRq47Y
          stance: supports
          locator: CBDB:135162
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_y3vWyxDCt6Vee29oJRq47Y
            source_type: api_record
            title: 中国历代人物传记资料库：王智珪（CBDB 135162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135162&o=json
            external_identifier: CBDB:135162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_p56QiXzRPz-8n_Q_7R9_0j
        subject_person_id: p_2D3Uiid7tmFDXR6PrK3xNB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FwHoPEbE1hGF48mo8Xh2Vp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7MVFYLRvefPgReun_0Jpy3
          claim_id: c_p56QiXzRPz-8n_Q_7R9_0j
          source_id: s_LDFfG5pZPTfSSgnZmBHiPQ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5540：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LDFfG5pZPTfSSgnZmBHiPQ
            source_type: api_record
            title: 中国历代人物传记资料库：陳某(王智珪夫)（CBDB 135164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135164&o=json
            external_identifier: CBDB:135164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FwHoPEbE1hGF48mo8Xh2Vp
        status: active
        display_name: 陳某
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王智珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王智珪，清人物。中国历代人物传记资料库（CBDB）以人物编号 135162 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王智珪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FwHoPEbE1hGF48mo8Xh2Vp | 陳某 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳某(王智珪夫)（CBDB 135164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135164&o=json)
- [中国历代人物传记资料库：王智珪（CBDB 135162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135162&o=json)
