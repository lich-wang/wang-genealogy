---
schema: wang-person/v1
id: p_x8Pfh3mEu2L8yisF1Zzp6B
status: active
merged_into: null
display_name: 王孟寧
cbdb_id: 297813
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mHaAFr7tdQps6UBQkpDJQ4
        subject_person_id: p_x8Pfh3mEu2L8yisF1Zzp6B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟寧，史料所见人物。本项目依据《中国历代人物传记资料库：王孟寧（CBDB 297813）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_WoHTWMLqJiihOQ_m-CKmoB
          claim_id: c_mHaAFr7tdQps6UBQkpDJQ4
          source_id: s_xtMUCEKHTz9S1AQ59G65qw
          stance: supports
          locator: CBDB:297813
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xtMUCEKHTz9S1AQ59G65qw
            source_type: api_record
            title: 中国历代人物传记资料库：王孟寧（CBDB 297813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297813&o=json
            external_identifier: CBDB:297813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tb6ARNejGVWcSQbnPoBej3
        subject_person_id: p_x8Pfh3mEu2L8yisF1Zzp6B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3M92bUT4V3VkQ4CEDQfyG3
          claim_id: c_Tb6ARNejGVWcSQbnPoBej3
          source_id: s_xtMUCEKHTz9S1AQ59G65qw
          stance: supports
          locator: CBDB:297813
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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
        id: c__Ski6yitRLiKFcXy_85ZSU
        subject_person_id: p_x8Pfh3mEu2L8yisF1Zzp6B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7K13-pYYoNnT7EOS-u7TA
          claim_id: c__Ski6yitRLiKFcXy_85ZSU
          source_id: s_3nScnB9r5mRQFv6y1VT1PM
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第七十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3nScnB9r5mRQFv6y1VT1PM
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 67719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json
            external_identifier: CBDB:67719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JCqwAkFqCg6AEXKEULaDMW
        status: active
        display_name: 王淵
        merged_into_person_id: null
  other: []
---

# 王孟寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟寧，史料所见人物。本项目依据《中国历代人物传记资料库：王孟寧（CBDB 297813）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王孟寧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JCqwAkFqCg6AEXKEULaDMW | 王淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟寧（CBDB 297813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297813&o=json)
- [中国历代人物传记资料库：王淵（CBDB 67719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json)
