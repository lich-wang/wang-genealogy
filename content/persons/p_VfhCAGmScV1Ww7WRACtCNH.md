---
schema: wang-person/v1
id: p_VfhCAGmScV1Ww7WRACtCNH
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 248131
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xjKPtyITMj6iGOHl38SQ9N
        subject_person_id: p_VfhCAGmScV1Ww7WRACtCNH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 248131）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qhmX5zX43xPMIgYO_cjxWL
          claim_id: c_xjKPtyITMj6iGOHl38SQ9N
          source_id: s_G9ivBKWqLM5ceBgGldSFoD
          stance: supports
          locator: CBDB:248131
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_G9ivBKWqLM5ceBgGldSFoD
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王嶽妻)（CBDB 248131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248131&o=json
            external_identifier: CBDB:248131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q7HSyYztPaQsgVGuzGWd8M
        subject_person_id: p_VfhCAGmScV1Ww7WRACtCNH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v39JVNDy3ZJPF8RhAZWVJD
          claim_id: c_Q7HSyYztPaQsgVGuzGWd8M
          source_id: s_G9ivBKWqLM5ceBgGldSFoD
          stance: supports
          locator: CBDB:248131
          quotation: null
          interpretation_note: CBDB 明确记录的王嶽配偶
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
        id: c_hFLDfBf9VPBApHOVdxQiYc
        subject_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VfhCAGmScV1Ww7WRACtCNH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fIJNV72i06CM9QfGOVa1wF
          claim_id: c_hFLDfBf9VPBApHOVdxQiYc
          source_id: s_G9ivBKWqLM5ceBgGldSFoD
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第四十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cQq1LyruU9xa7MkCKy9rQ3
        status: active
        display_name: 王嶽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉氏，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 248131） | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cQq1LyruU9xa7MkCKy9rQ3 | 王嶽 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王嶽妻)（CBDB 248131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248131&o=json)
