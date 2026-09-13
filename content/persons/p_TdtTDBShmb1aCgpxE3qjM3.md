---
schema: wang-person/v1
id: p_TdtTDBShmb1aCgpxE3qjM3
status: active
merged_into: null
display_name: 王資善
cbdb_id: 248128
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UFzvogMmxBvz9eZEhJPNrX
        subject_person_id: p_TdtTDBShmb1aCgpxE3qjM3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王資善，史料所见人物。本项目依据《中国历代人物传记资料库：王資善（CBDB 248128）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_imnSrErfd0gTmXeYvD4Kgm
          claim_id: c_UFzvogMmxBvz9eZEhJPNrX
          source_id: s_wJcqwEWMP2eixsDYQcXWXs
          stance: supports
          locator: CBDB:248128
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wJcqwEWMP2eixsDYQcXWXs
            source_type: api_record
            title: 中国历代人物传记资料库：王資善（CBDB 248128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248128&o=json
            external_identifier: CBDB:248128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_274BA17fQWTtrdRwrKnKt4
        subject_person_id: p_TdtTDBShmb1aCgpxE3qjM3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王資善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kt1F9ytaVHif7JKLxoEyGh
          claim_id: c_274BA17fQWTtrdRwrKnKt4
          source_id: s_wJcqwEWMP2eixsDYQcXWXs
          stance: supports
          locator: CBDB:248128
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
        id: c_4OfHDYuklvJsrVqcQvPA5o
        subject_person_id: p_TdtTDBShmb1aCgpxE3qjM3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UrLLz3mUrwA_TRiLbV52iY
          claim_id: c_4OfHDYuklvJsrVqcQvPA5o
          source_id: s_dnGcX27WSqLJQi9Wfz8Gdu
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第四十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dnGcX27WSqLJQi9Wfz8Gdu
            source_type: api_record
            title: 中国历代人物传记资料库：王嶽（CBDB 199663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199663&o=json
            external_identifier: CBDB:199663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cQq1LyruU9xa7MkCKy9rQ3
        status: active
        display_name: 王嶽
        merged_into_person_id: null
  other: []
---

# 王資善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王資善，史料所见人物。本项目依据《中国历代人物传记资料库：王資善（CBDB 248128）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王資善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cQq1LyruU9xa7MkCKy9rQ3 | 王嶽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嶽（CBDB 199663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199663&o=json)
- [中国历代人物传记资料库：王資善（CBDB 248128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248128&o=json)
