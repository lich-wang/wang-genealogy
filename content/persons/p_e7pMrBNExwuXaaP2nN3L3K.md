---
schema: wang-person/v1
id: p_e7pMrBNExwuXaaP2nN3L3K
status: active
merged_into: null
display_name: 王恩注
cbdb_id: 343468
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3HyTTZzSya1MTaCcepuowM
        subject_person_id: p_e7pMrBNExwuXaaP2nN3L3K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩注，史料所见人物。本项目依据《中国历代人物传记资料库：王恩注（CBDB 343468）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_3tTOyRvXoe_GX6qsMzGFAq
          claim_id: c_3HyTTZzSya1MTaCcepuowM
          source_id: s_xwx5Ud29aw7eTK8e5LV5xW
          stance: supports
          locator: CBDB:343468
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xwx5Ud29aw7eTK8e5LV5xW
            source_type: api_record
            title: 中国历代人物传记资料库：王恩注（CBDB 343468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343468&o=json
            external_identifier: CBDB:343468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:17.973Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6T3KZ4865nbXxfVtqZvKbY
        subject_person_id: p_e7pMrBNExwuXaaP2nN3L3K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩注
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DqsdQ6KPcG1Cq8YmFfepL3
          claim_id: c_6T3KZ4865nbXxfVtqZvKbY
          source_id: s_xwx5Ud29aw7eTK8e5LV5xW
          stance: supports
          locator: CBDB:343468
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4601-4700）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7i9m4UaRxfhPQyKpRjgdz7
        subject_person_id: p_S5BzyH9t7zFnWJULzKKDHD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e7pMrBNExwuXaaP2nN3L3K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hMsfLg0aXP804r8sXLqVzZ
          claim_id: c_7i9m4UaRxfhPQyKpRjgdz7
          source_id: s_N1brtA1g5JB3LW7kMfiipR
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160565：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N1brtA1g5JB3LW7kMfiipR
            source_type: api_record
            title: 中国历代人物传记资料库：王佩蘭（CBDB 551491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551491&o=json
            external_identifier: CBDB:551491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_S5BzyH9t7zFnWJULzKKDHD
        status: active
        display_name: 王佩蘭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恩注

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恩注，史料所见人物。本项目依据《中国历代人物传记资料库：王恩注（CBDB 343468）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王恩注 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S5BzyH9t7zFnWJULzKKDHD | 王佩蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩注（CBDB 343468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343468&o=json)
- [中国历代人物传记资料库：王佩蘭（CBDB 551491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551491&o=json)
