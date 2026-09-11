---
schema: wang-person/v1
id: p_g4Wz29pCfyxCWK2d3zj3Nm
status: active
merged_into: null
display_name: 宋氏
revision: 1
cbdb_id: 38348
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VvD-xB9e3_jV4aMcyGVUp1
        subject_person_id: p_g4Wz29pCfyxCWK2d3zj3Nm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏，宋人物。曾任國太夫人。（中国历代人物传记资料库 CBDB 38348）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xuquX7EmX5PDyQNzo44qVU
          claim_id: c_VvD-xB9e3_jV4aMcyGVUp1
          source_id: s_ACfVuCJhjSX4zS2n_6MnGY
          stance: supports
          locator: CBDB:38348
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ACfVuCJhjSX4zS2n_6MnGY
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王化基妻)（CBDB 38348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38348&o=json
            external_identifier: CBDB:38348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kehEnlvsVeewd2F9V7I4IT
        subject_person_id: p_g4Wz29pCfyxCWK2d3zj3Nm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2iJoV6hH8M3fmYQu4I1_nE
          claim_id: c_kehEnlvsVeewd2F9V7I4IT
          source_id: s_ACfVuCJhjSX4zS2n_6MnGY
          stance: supports
          locator: CBDB:38348
          quotation: null
          interpretation_note: CBDB 明确记录的王化基配偶
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
        id: c_Enqo-XJs6CxefSlJEPioom
        subject_person_id: p_WJHP8YxtLrW6oyDrhKZ1wB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_g4Wz29pCfyxCWK2d3zj3Nm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9lVOVLrU83vZixbCyZ4Yrx
          claim_id: c_Enqo-XJs6CxefSlJEPioom
          source_id: s_ACfVuCJhjSX4zS2n_6MnGY
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1473;1474：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WJHP8YxtLrW6oyDrhKZ1wB
        status: active
        display_name: 王化基
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 宋氏，宋人物。曾任國太夫人。（中国历代人物传记资料库 CBDB 38348） | accepted |
| name.primary | 宋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_WJHP8YxtLrW6oyDrhKZ1wB | 王化基 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王化基妻)（CBDB 38348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38348&o=json)
