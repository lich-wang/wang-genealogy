---
schema: wang-person/v1
id: p_fYK8749uuuHYZ58pKipziM
status: active
merged_into: null
display_name: 王師範
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GB9sUF8NQDhHeDf8uLUWmJ
        subject_person_id: p_fYK8749uuuHYZ58pKipziM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DddvV61MUFDY2sAGbVE7w9
          claim_id: c_GB9sUF8NQDhHeDf8uLUWmJ
          source_id: s_e6rHD3QUGd6wgySAA2RWQG
          stance: supports
          locator: CBDB:194587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194587）
          source: &a1
            id: s_e6rHD3QUGd6wgySAA2RWQG
            source_type: api_record
            title: 中国历代人物传记资料库：王師範（CBDB 194587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194587&o=json
            external_identifier: CBDB:194587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fKBP1JWCTh2pF735EED9WC
        subject_person_id: p_fYK8749uuuHYZ58pKipziM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 873年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8UGyeTcyaKdGAWwLA8zC2L
          claim_id: c_fKBP1JWCTh2pF735EED9WC
          source_id: s_e6rHD3QUGd6wgySAA2RWQG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8xdyTA1Z4CxAYNioMnxNwP
        subject_person_id: p_fYK8749uuuHYZ58pKipziM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 908年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mu2A1PLgWatSFGQV5YD4gB
          claim_id: c_8xdyTA1Z4CxAYNioMnxNwP
          source_id: s_e6rHD3QUGd6wgySAA2RWQG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gA8MjMSq7unVmazARuRXJ7
        subject_person_id: p_fYK8749uuuHYZ58pKipziM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師範（873年—908年），唐人物。曾任節度使、州刺史。（中国历代人物传记资料库 CBDB 194587）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Iuto0pVs0dZEaguEgGDKzt
          claim_id: c_gA8MjMSq7unVmazARuRXJ7
          source_id: s_e6rHD3QUGd6wgySAA2RWQG
          stance: supports
          locator: CBDB:194587
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eIvNuNJjaiGrzssart3cNn
        subject_person_id: p_uboKQwd6BX5PmZxXCisYJ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fYK8749uuuHYZ58pKipziM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Mq6TM5ntpjDBIARxeN055
          claim_id: c_eIvNuNJjaiGrzssart3cNn
          source_id: s_e6rHD3QUGd6wgySAA2RWQG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uboKQwd6BX5PmZxXCisYJ8
        status: active
        display_name: 王敬武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師範 | accepted |
| birth.date | 873年 | accepted |
| death.date | 908年 | accepted |
| bio.summary | 王師範（873年—908年），唐人物。曾任節度使、州刺史。（中国历代人物传记资料库 CBDB 194587） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uboKQwd6BX5PmZxXCisYJ8 | 王敬武 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師範（CBDB 194587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194587&o=json)
