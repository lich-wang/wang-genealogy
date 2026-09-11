---
schema: wang-person/v1
id: p_QeKezjrqjZ3pGuS4yx8R36
status: active
merged_into: null
display_name: 王大度
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5hYRcVMP2ZEjZ733Z41qMA
        subject_person_id: p_QeKezjrqjZ3pGuS4yx8R36
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_atvAZkwe95qhBoJ3UocUYv
          claim_id: c_5hYRcVMP2ZEjZ733Z41qMA
          source_id: s_FUpRVa8DUJPsKMfr5AoV61
          stance: supports
          locator: CBDB:690956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690956）
          source: &a1
            id: s_FUpRVa8DUJPsKMfr5AoV61
            source_type: api_record
            title: 中国历代人物传记资料库：王大度（CBDB 690956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690956&o=json
            external_identifier: CBDB:690956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KfghVecXbRK1S1DBdd1rMH
        subject_person_id: p_QeKezjrqjZ3pGuS4yx8R36
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大度，明人物。籍贯黟縣，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 690956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BhM0qwsIKbppv5mWCq8x_B
          claim_id: c_KfghVecXbRK1S1DBdd1rMH
          source_id: s_FUpRVa8DUJPsKMfr5AoV61
          stance: supports
          locator: CBDB:690956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4GLAI3ACZEFbtd_idMH_gI
        subject_person_id: p_yueT28KmtQMkrhqxZNWfyB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QeKezjrqjZ3pGuS4yx8R36
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWKnxaHf4mfYhDfjEcPuWX
          claim_id: c_4GLAI3ACZEFbtd_idMH_gI
          source_id: s_FUpRVa8DUJPsKMfr5AoV61
          stance: supports
          locator: 嘉慶黟縣志，lgid=1166267：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yueT28KmtQMkrhqxZNWfyB
        status: active
        display_name: 王張顯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大度 | accepted |
| bio.summary | 王大度，明人物。籍贯黟縣，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 690956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yueT28KmtQMkrhqxZNWfyB | 王張顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大度（CBDB 690956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690956&o=json)
