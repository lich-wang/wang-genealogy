---
schema: wang-person/v1
id: p_ijbex4t9VLqLfFA3i5CSdB
status: active
merged_into: null
display_name: 王宏德
cbdb_id: 314792
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SZPMCSi4mFK9dTocpfK1Fh
        subject_person_id: p_ijbex4t9VLqLfFA3i5CSdB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏德，明人物。嘉靖二十九年進士，曾任巡檢。（中国历代人物传记资料库 CBDB 314792）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zXWpt_YEYu4ZJq9odMf2uV
          claim_id: c_SZPMCSi4mFK9dTocpfK1Fh
          source_id: s_m72RDGr9uLrghaW2vYR9aR
          stance: supports
          locator: CBDB:314792
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_m72RDGr9uLrghaW2vYR9aR
            source_type: api_record
            title: 中国历代人物传记资料库：王宏德（CBDB 314792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314792&o=json
            external_identifier: CBDB:314792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_47A4BFLpv3JtuyMR8YtWGx
        subject_person_id: p_ijbex4t9VLqLfFA3i5CSdB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CxgLtTk27A8wtoHSZhJzMS
          claim_id: c_47A4BFLpv3JtuyMR8YtWGx
          source_id: s_m72RDGr9uLrghaW2vYR9aR
          stance: supports
          locator: CBDB:314792
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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
        id: c_RgsqsuCgfb_MISTrkIjNPY
        subject_person_id: p_ijbex4t9VLqLfFA3i5CSdB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8lb2aB7h7ICoDg6dej_UBt
          claim_id: c_RgsqsuCgfb_MISTrkIjNPY
          source_id: s_m72RDGr9uLrghaW2vYR9aR
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m72RDGr9uLrghaW2vYR9aR
            source_type: api_record
            title: 中国历代人物传记资料库：王宏德（CBDB 314792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314792&o=json
            external_identifier: CBDB:314792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nuBK1wsMvCBFXuA1nKxaa5
        status: active
        display_name: 王納講
        merged_into_person_id: null
  other: []
---

# 王宏德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宏德，明人物。嘉靖二十九年進士，曾任巡檢。（中国历代人物传记资料库 CBDB 314792） | accepted |
| name.primary | 王宏德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nuBK1wsMvCBFXuA1nKxaa5 | 王納講 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏德（CBDB 314792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314792&o=json)
