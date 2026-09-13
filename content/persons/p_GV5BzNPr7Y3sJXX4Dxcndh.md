---
schema: wang-person/v1
id: p_GV5BzNPr7Y3sJXX4Dxcndh
status: active
merged_into: null
display_name: 王志崇
cbdb_id: 255491
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ct8K6DJLkLFA75KDTS5EyG
        subject_person_id: p_GV5BzNPr7Y3sJXX4Dxcndh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志崇，史料所见人物。本项目依据《中国历代人物传记资料库：王志崇（CBDB 255491）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ABni-PAuf_OM-f6yE553iu
          claim_id: c_Ct8K6DJLkLFA75KDTS5EyG
          source_id: s_jNxqfCxZj3KMdndhLLQqNp
          stance: supports
          locator: CBDB:255491
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_jNxqfCxZj3KMdndhLLQqNp
            source_type: api_record
            title: 中国历代人物传记资料库：王志崇（CBDB 255491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255491&o=json
            external_identifier: CBDB:255491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pJ8LyXE6g5QuDqW8VpteFw
        subject_person_id: p_GV5BzNPr7Y3sJXX4Dxcndh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7U4rrUdJwMBqgHrk7vbJov
          claim_id: c_pJ8LyXE6g5QuDqW8VpteFw
          source_id: s_jNxqfCxZj3KMdndhLLQqNp
          stance: supports
          locator: CBDB:255491
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_egJ6VOVXgqKa_sorop_vBj
        subject_person_id: p_GV5BzNPr7Y3sJXX4Dxcndh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h94-zuwJ5QTgsk8oKIaIH9
          claim_id: c_egJ6VOVXgqKa_sorop_vBj
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fXkoxige6XKe16u4aLm1LC
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 126831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json
            external_identifier: CBDB:126831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KL6pD2p9SR6r7j4F89boFc
        status: active
        display_name: 王衡
        merged_into_person_id: null
  other: []
---

# 王志崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志崇，史料所见人物。本项目依据《中国历代人物传记资料库：王志崇（CBDB 255491）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王志崇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_KL6pD2p9SR6r7j4F89boFc | 王衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王衡（CBDB 126831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json)
- [中国历代人物传记资料库：王志崇（CBDB 255491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255491&o=json)
