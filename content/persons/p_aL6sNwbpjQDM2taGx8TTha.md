---
schema: wang-person/v1
id: p_aL6sNwbpjQDM2taGx8TTha
status: active
merged_into: null
display_name: 王舜舉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_39ojFgXzjKmG7ybusuADe6
        subject_person_id: p_aL6sNwbpjQDM2taGx8TTha
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ChAaC2WBAMAUDGyTvDivHW
          claim_id: c_39ojFgXzjKmG7ybusuADe6
          source_id: s_H2tqr6sUxKV8LudJs7wC5p
          stance: supports
          locator: CBDB:251769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251769）
          source: &a1
            id: s_H2tqr6sUxKV8LudJs7wC5p
            source_type: api_record
            title: 中国历代人物传记资料库：王舜舉（CBDB 251769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251769&o=json
            external_identifier: CBDB:251769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TZmwV6SqMbAjch6TXinvKP
        subject_person_id: p_aL6sNwbpjQDM2taGx8TTha
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
        - id: cs_b2FbnkNRChMPrsQ26rqwHF
          claim_id: c_TZmwV6SqMbAjch6TXinvKP
          source_id: s_H2tqr6sUxKV8LudJs7wC5p
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_lC5qZwDjbVGqfvXRYSpG-r
        subject_person_id: p_aL6sNwbpjQDM2taGx8TTha
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h0_wTgAzYt7y7bjdrxj9Ff
          claim_id: c_lC5qZwDjbVGqfvXRYSpG-r
          source_id: s_H2tqr6sUxKV8LudJs7wC5p
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9PrBQcpmCF997Qgs2oiS3t
        status: active
        display_name: 王本儉
        merged_into_person_id: null
  other: []
---

# 王舜舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜舉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9PrBQcpmCF997Qgs2oiS3t | 王本儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舜舉（CBDB 251769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251769&o=json)
