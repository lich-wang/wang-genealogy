---
schema: wang-person/v1
id: p_BeExBVBoLALEyg1y8qcCQ5
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ldm8iMbb7wK8HupKzzw4HA
        subject_person_id: p_BeExBVBoLALEyg1y8qcCQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7uQ3C6ShmMAK7awtPyWtJu
          claim_id: c_Ldm8iMbb7wK8HupKzzw4HA
          source_id: s_xudsnkQu3CaLxPue6WRmiK
          stance: supports
          locator: CBDB:268113
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268113）
          source: &a1
            id: s_xudsnkQu3CaLxPue6WRmiK
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 268113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268113&o=json
            external_identifier: CBDB:268113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1uzX5cFc1BV3RjqkEni9hp
        subject_person_id: p_BeExBVBoLALEyg1y8qcCQ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，明人物。弘治九年進士，曾任指揮使。（中国历代人物传记资料库 CBDB 268113）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f6dmtWuywPjmS68o7paMLp
          claim_id: c_1uzX5cFc1BV3RjqkEni9hp
          source_id: s_xudsnkQu3CaLxPue6WRmiK
          stance: supports
          locator: CBDB:268113
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_Y7_VETw28wTx5nTGc9REMf
        subject_person_id: p_BeExBVBoLALEyg1y8qcCQ5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FBEzv-xo-8tbidW-srCPlQ
          claim_id: c_Y7_VETw28wTx5nTGc9REMf
          source_id: s_xudsnkQu3CaLxPue6WRmiK
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Cuoocx9FVbq3j8KTAiGKVC
        status: active
        display_name: 王春
        merged_into_person_id: null
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | 王成，明人物。弘治九年進士，曾任指揮使。（中国历代人物传记资料库 CBDB 268113） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Cuoocx9FVbq3j8KTAiGKVC | 王春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 268113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268113&o=json)
