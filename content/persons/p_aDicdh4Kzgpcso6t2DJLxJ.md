---
schema: wang-person/v1
id: p_aDicdh4Kzgpcso6t2DJLxJ
status: active
merged_into: null
display_name: 王燕生
cbdb_id: 99999
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AQYMe2DxN8wqtZ2iQVJtBh
        subject_person_id: p_aDicdh4Kzgpcso6t2DJLxJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕生，史料所见人物。本项目依据《中国历代人物传记资料库：王燕生（CBDB 99999）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_6HTrTfui-3DclVgEcc3a2E
          claim_id: c_AQYMe2DxN8wqtZ2iQVJtBh
          source_id: s_BjJmZmMDNMLNyQv7dzHwjU
          stance: supports
          locator: CBDB:99999
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BjJmZmMDNMLNyQv7dzHwjU
            source_type: api_record
            title: 中国历代人物传记资料库：王燕生（CBDB 99999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=99999&o=json
            external_identifier: CBDB:99999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m5nL4j34iq5MeZHu1y5Zqa
        subject_person_id: p_aDicdh4Kzgpcso6t2DJLxJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UVhqRkZmNuJkDAUL98VbR9
          claim_id: c_m5nL4j34iq5MeZHu1y5Zqa
          source_id: s_BjJmZmMDNMLNyQv7dzHwjU
          stance: supports
          locator: CBDB:99999
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 清
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
        id: c_OWHA8MqJ9JCFnOQdk3C44K
        subject_person_id: p_aDicdh4Kzgpcso6t2DJLxJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qgPiocate8GSdtYS3He9RF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9KV77lqPhQINpiQf39Nh6v
          claim_id: c_OWHA8MqJ9JCFnOQdk3C44K
          source_id: s_dJ_K-PtDjuI_oxzGwF050-
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1760：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dJ_K-PtDjuI_oxzGwF050-
            source_type: api_record
            title: 中国历代人物传记资料库：阮亨（CBDB 29677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29677&o=json
            external_identifier: CBDB:29677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qgPiocate8GSdtYS3He9RF
        status: active
        display_name: 阮亨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王燕生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王燕生，史料所见人物。本项目依据《中国历代人物传记资料库：王燕生（CBDB 99999）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王燕生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_qgPiocate8GSdtYS3He9RF | 阮亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：阮亨（CBDB 29677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29677&o=json)
- [中国历代人物传记资料库：王燕生（CBDB 99999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=99999&o=json)
