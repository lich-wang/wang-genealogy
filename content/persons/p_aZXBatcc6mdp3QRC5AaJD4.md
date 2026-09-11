---
schema: wang-person/v1
id: p_aZXBatcc6mdp3QRC5AaJD4
status: active
merged_into: null
display_name: 王光遠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pjQMcLnCnwd32NBcV9gmqK
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ZHkUBNCbgWfEpNDCRvNVR
          claim_id: c_pjQMcLnCnwd32NBcV9gmqK
          source_id: s_Cw2NXiSd1Jch75ohxBsXNX
          stance: supports
          locator: CBDB:225797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225797）
          source: &a1
            id: s_Cw2NXiSd1Jch75ohxBsXNX
            source_type: api_record
            title: 中国历代人物传记资料库：王光遠（CBDB 225797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225797&o=json
            external_identifier: CBDB:225797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1WvzpjA9rB3ncts5QopE1A
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光遠，明人物。萬曆丙戌科進士進士，籍贯即墨，曾任教諭。（中国历代人物传记资料库 CBDB 225797）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2GZxKeVreB8BIJow_VPMla
          claim_id: c_1WvzpjA9rB3ncts5QopE1A
          source_id: s_Cw2NXiSd1Jch75ohxBsXNX
          stance: supports
          locator: CBDB:225797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZDXZ3w-NCt2EsTnBLbxGUY
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hWNF7HbB9E5if6kNK731ro
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ehjf68mueDGfSXrtAZslUb
          claim_id: c_ZDXZ3w-NCt2EsTnBLbxGUY
          source_id: s_Cw2NXiSd1Jch75ohxBsXNX
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hWNF7HbB9E5if6kNK731ro
        status: active
        display_name: 王祿兆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光遠 | accepted |
| bio.summary | 王光遠，明人物。萬曆丙戌科進士進士，籍贯即墨，曾任教諭。（中国历代人物传记资料库 CBDB 225797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hWNF7HbB9E5if6kNK731ro | 王祿兆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光遠（CBDB 225797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225797&o=json)
