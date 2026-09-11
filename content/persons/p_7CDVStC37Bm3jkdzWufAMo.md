---
schema: wang-person/v1
id: p_7CDVStC37Bm3jkdzWufAMo
status: active
merged_into: null
display_name: 王國祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iyGjJ6aCnz7xbY9iza56LJ
        subject_person_id: p_7CDVStC37Bm3jkdzWufAMo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BVzprvHrjaAjKNREZ1mcL2
          claim_id: c_iyGjJ6aCnz7xbY9iza56LJ
          source_id: s_CkYUU6XYgf6aGXMHUFCdzP
          stance: supports
          locator: CBDB:229907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229907）
          source: &a1
            id: s_CkYUU6XYgf6aGXMHUFCdzP
            source_type: api_record
            title: 中国历代人物传记资料库：王國祥（CBDB 229907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229907&o=json
            external_identifier: CBDB:229907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pk19rnTeAzXR8gapwPMzkT
        subject_person_id: p_7CDVStC37Bm3jkdzWufAMo
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
        - id: cs_vG6qDK3a7SgXgXcHJ6Ja3g
          claim_id: c_Pk19rnTeAzXR8gapwPMzkT
          source_id: s_CkYUU6XYgf6aGXMHUFCdzP
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
        id: c_ly3Pb8eB8Jk0YdPGqgER57
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7CDVStC37Bm3jkdzWufAMo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_03PIt4qujquFUR_88toxpm
          claim_id: c_ly3Pb8eB8Jk0YdPGqgER57
          source_id: s_CkYUU6XYgf6aGXMHUFCdzP
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DJcqSVwRMjWd5tk8GAdMxa
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國祥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DJcqSVwRMjWd5tk8GAdMxa | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國祥（CBDB 229907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229907&o=json)
