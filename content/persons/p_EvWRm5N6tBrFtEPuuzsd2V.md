---
schema: wang-person/v1
id: p_EvWRm5N6tBrFtEPuuzsd2V
status: active
merged_into: null
display_name: 王曰緒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1eMY2VLaN61xb1Dr9zc9SU
        subject_person_id: p_EvWRm5N6tBrFtEPuuzsd2V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FaC6eKNpuY1H9UpYGuhXi8
          claim_id: c_1eMY2VLaN61xb1Dr9zc9SU
          source_id: s_joSe9jqWh3KMUk8LMSXgmV
          stance: supports
          locator: CBDB:558145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558145）
          source: &a1
            id: s_joSe9jqWh3KMUk8LMSXgmV
            source_type: api_record
            title: 中国历代人物传记资料库：王曰緒（CBDB 558145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558145&o=json
            external_identifier: CBDB:558145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BZxUdp1YHBUfLnF5MEJAWN
        subject_person_id: p_EvWRm5N6tBrFtEPuuzsd2V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c2FWvAAjiPV4A35F5tiUEh
          claim_id: c_BZxUdp1YHBUfLnF5MEJAWN
          source_id: s_joSe9jqWh3KMUk8LMSXgmV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_AR52gGoRJBDu8J8Ya1r0K6
        subject_person_id: p_EvWRm5N6tBrFtEPuuzsd2V
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UQUiDompPb22sHgYLci5Sz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u2UwSFKtNDCNyofzbjN4YA
          claim_id: c_AR52gGoRJBDu8J8Ya1r0K6
          source_id: s_pDSVCRpUC02eHMfbSYa8pR
          stance: supports
          locator: 南陽府志，lgid=878823-878824：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pDSVCRpUC02eHMfbSYa8pR
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王曰緒妻)（CBDB 558146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558146&o=json
            external_identifier: CBDB:558146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UQUiDompPb22sHgYLci5Sz
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王曰緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰緒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_UQUiDompPb22sHgYLci5Sz | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曰緒（CBDB 558145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558145&o=json)
- [中国历代人物传记资料库：張氏(王曰緒妻)（CBDB 558146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558146&o=json)
