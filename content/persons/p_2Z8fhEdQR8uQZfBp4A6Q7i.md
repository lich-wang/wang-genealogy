---
schema: wang-person/v1
id: p_2Z8fhEdQR8uQZfBp4A6Q7i
status: active
merged_into: null
display_name: 王智才
cbdb_id: 214157
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9yyCgNBSEGST8GXeffaEKZ
        subject_person_id: p_2Z8fhEdQR8uQZfBp4A6Q7i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智才，史料所见人物。本项目依据《中国历代人物传记资料库：王智才（CBDB 214157）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_lfKs0uT-0hieAJ6FvABkpg
          claim_id: c_9yyCgNBSEGST8GXeffaEKZ
          source_id: s_AiHZLH4SwW5rkDiaSFpVPt
          stance: supports
          locator: CBDB:214157
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AiHZLH4SwW5rkDiaSFpVPt
            source_type: api_record
            title: 中国历代人物传记资料库：王智才（CBDB 214157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214157&o=json
            external_identifier: CBDB:214157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gCUJzpfz2V88hkgtFBqYyk
        subject_person_id: p_2Z8fhEdQR8uQZfBp4A6Q7i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_b2uRAAKFU1SztrgxQvBSRt
          claim_id: c_gCUJzpfz2V88hkgtFBqYyk
          source_id: s_AiHZLH4SwW5rkDiaSFpVPt
          stance: supports
          locator: CBDB:214157
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_9lRklJZOw_gjr0NfBKFcJX
        subject_person_id: p_2Z8fhEdQR8uQZfBp4A6Q7i
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gsLUVjMxPfhNttK9JjrR4B
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4CYwE98z8whdAz3pvTf7gA
          claim_id: c_9lRklJZOw_gjr0NfBKFcJX
          source_id: s_AiHZLH4SwW5rkDiaSFpVPt
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AiHZLH4SwW5rkDiaSFpVPt
            source_type: api_record
            title: 中国历代人物传记资料库：王智才（CBDB 214157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214157&o=json
            external_identifier: CBDB:214157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_gsLUVjMxPfhNttK9JjrR4B
        status: active
        display_name: 王毓陽
        merged_into_person_id: null
  other: []
---

# 王智才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王智才，史料所见人物。本项目依据《中国历代人物传记资料库：王智才（CBDB 214157）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王智才 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gsLUVjMxPfhNttK9JjrR4B | 王毓陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王智才（CBDB 214157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214157&o=json)
