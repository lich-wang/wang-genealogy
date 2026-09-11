---
schema: wang-person/v1
id: p_2hZntAFEQjbQjN2yxjBT42
status: active
merged_into: null
display_name: 鄭氏
revision: 1
cbdb_id: 253503
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nnNKIrFYaDzUCdAZRqAJ_o
        subject_person_id: p_2hZntAFEQjbQjN2yxjBT42
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253503）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0WBFye9mz0wvDr1CVNF2GK
          claim_id: c_nnNKIrFYaDzUCdAZRqAJ_o
          source_id: s_3LhXdjldqLiZ4DqYvPnI-H
          stance: supports
          locator: CBDB:253503
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3LhXdjldqLiZ4DqYvPnI-H
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王溫妻)（CBDB 253503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253503&o=json
            external_identifier: CBDB:253503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nA2e8sXBp0sP99ZXzJ_765
        subject_person_id: p_2hZntAFEQjbQjN2yxjBT42
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KLaf6ZhyCU_qzMtHrhUjxA
          claim_id: c_nA2e8sXBp0sP99ZXzJ_765
          source_id: s_3LhXdjldqLiZ4DqYvPnI-H
          stance: supports
          locator: CBDB:253503
          quotation: null
          interpretation_note: CBDB 明确记录的王溫配偶
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
        id: c_pykvwDNkb7ne7cG1IUHBWM
        subject_person_id: p_CbNek4JAS5hDtg3Feu9pPB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2hZntAFEQjbQjN2yxjBT42
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QGenMRqZH2M4jF9p8LHtDI
          claim_id: c_pykvwDNkb7ne7cG1IUHBWM
          source_id: s_3LhXdjldqLiZ4DqYvPnI-H
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CbNek4JAS5hDtg3Feu9pPB
        status: active
        display_name: 王溫
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 鄭氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253503） | accepted |
| name.primary | 鄭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CbNek4JAS5hDtg3Feu9pPB | 王溫 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄭氏(王溫妻)（CBDB 253503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253503&o=json)
