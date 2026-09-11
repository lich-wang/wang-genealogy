---
schema: wang-person/v1
id: p_Hcs4M6sfPGU9rT3rrDzaVL
status: active
merged_into: null
display_name: 王用俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fm8LMcJw2t8m9kux3MmhL9
        subject_person_id: p_Hcs4M6sfPGU9rT3rrDzaVL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NvCQ61pRAAXrFBUXdkDhor
          claim_id: c_Fm8LMcJw2t8m9kux3MmhL9
          source_id: s_GmCM3ktxkX5uFM47yMcw6D
          stance: supports
          locator: CBDB:702874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702874）
          source: &a1
            id: s_GmCM3ktxkX5uFM47yMcw6D
            source_type: api_record
            title: 中国历代人物传记资料库：王用俊（CBDB 702874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702874&o=json
            external_identifier: CBDB:702874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FYWCC8xuVSZ4g4dguYSLtR
        subject_person_id: p_Hcs4M6sfPGU9rT3rrDzaVL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用俊，明人物。籍贯元和，身份为書法家。（中国历代人物传记资料库 CBDB 702874）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7NkasvnUW-5KY-8DE0qgoq
          claim_id: c_FYWCC8xuVSZ4g4dguYSLtR
          source_id: s_GmCM3ktxkX5uFM47yMcw6D
          stance: supports
          locator: CBDB:702874
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8n8l-xucbC-QcVonfaGmiW
        subject_person_id: p_9per95yktK3i7Q899v63sD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hcs4M6sfPGU9rT3rrDzaVL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8gFZ1QsexjMZQP2DZmdHP
          claim_id: c_8n8l-xucbC-QcVonfaGmiW
          source_id: s_GmCM3ktxkX5uFM47yMcw6D
          stance: supports
          locator: "元和唯亭志: 二十卷，lgid=179032：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9per95yktK3i7Q899v63sD
        status: active
        display_name: 王士龍
        merged_into_person_id: null
  children:
    - claim:
        id: c_mRMp65V2V6Wdvhzmtj-n5b
        subject_person_id: p_Hcs4M6sfPGU9rT3rrDzaVL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kp4LFuhULDpkgqMTGegNF8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HnewlfQQzgmxlIUOeWSY8v
          claim_id: c_mRMp65V2V6Wdvhzmtj-n5b
          source_id: s_GmCM3ktxkX5uFM47yMcw6D
          stance: supports
          locator: "元和唯亭志: 二十卷，lgid=179034：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kp4LFuhULDpkgqMTGegNF8
        status: active
        display_name: 王逢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用俊 | accepted |
| bio.summary | 王用俊，明人物。籍贯元和，身份为書法家。（中国历代人物传记资料库 CBDB 702874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9per95yktK3i7Q899v63sD | 王士龍 | accepted |
| children | p_kp4LFuhULDpkgqMTGegNF8 | 王逢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用俊（CBDB 702874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702874&o=json)
