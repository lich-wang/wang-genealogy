---
schema: wang-person/v1
id: p_HDqkFSaJUY2V3BLfMwGNKD
status: active
merged_into: null
display_name: 王所冲
cbdb_id: 266582
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LMVFLKZ4EDQYRwfQVri7fb
        subject_person_id: p_HDqkFSaJUY2V3BLfMwGNKD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所冲，史料所见人物。本项目依据《中国历代人物传记资料库：王所冲（CBDB 266582）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_gV5Nch25j5whslonf_nRyS
          claim_id: c_LMVFLKZ4EDQYRwfQVri7fb
          source_id: s_vf3DypGrw6gZ8XL2PZhpeb
          stance: supports
          locator: CBDB:266582
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vf3DypGrw6gZ8XL2PZhpeb
            source_type: api_record
            title: 中国历代人物传记资料库：王所冲（CBDB 266582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266582&o=json
            external_identifier: CBDB:266582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yJ9VMecSnCcQL7BwXSRdYt
        subject_person_id: p_HDqkFSaJUY2V3BLfMwGNKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所冲
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Az57nLj8nSCp7biwKMysbn
          claim_id: c_yJ9VMecSnCcQL7BwXSRdYt
          source_id: s_vf3DypGrw6gZ8XL2PZhpeb
          stance: supports
          locator: CBDB:266582
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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
        id: c_0ZYAzrWuUJYtEmxzyqf8te
        subject_person_id: p_HDqkFSaJUY2V3BLfMwGNKD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z4aCxcZmXAafGUnNufCVpV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PBzXWNBN1KXMISWLZlYr-L
          claim_id: c_0ZYAzrWuUJYtEmxzyqf8te
          source_id: s_2ruKTegb7Gy8bvnrUTT9Kn
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2ruKTegb7Gy8bvnrUTT9Kn
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 198394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198394&o=json
            external_identifier: CBDB:198394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_z4aCxcZmXAafGUnNufCVpV
        status: active
        display_name: 王重
        merged_into_person_id: null
  other: []
---

# 王所冲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王所冲，史料所见人物。本项目依据《中国历代人物传记资料库：王所冲（CBDB 266582）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王所冲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_z4aCxcZmXAafGUnNufCVpV | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王所冲（CBDB 266582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266582&o=json)
- [中国历代人物传记资料库：王重（CBDB 198394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198394&o=json)
