---
schema: wang-person/v1
id: p_CxyZa6TEKBz4MjoJnsZpoy
status: active
merged_into: null
display_name: 王均玉
cbdb_id: 237853
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wc5ja2DzU9jGMPqWHJdSki
        subject_person_id: p_CxyZa6TEKBz4MjoJnsZpoy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均玉，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 237853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_whgvSQG5tS1yDWIYOGL3Vd
          claim_id: c_Wc5ja2DzU9jGMPqWHJdSki
          source_id: s_rSy84gsdJBoBQH9xrZKxGV
          stance: supports
          locator: CBDB:237853
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rSy84gsdJBoBQH9xrZKxGV
            source_type: api_record
            title: 中国历代人物传记资料库：王均玉（CBDB 237853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237853&o=json
            external_identifier: CBDB:237853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rabygh7Xxy5nJ3PnwZJNYZ
        subject_person_id: p_CxyZa6TEKBz4MjoJnsZpoy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ue4UVA5wKm8bqCBfvgVZnT
          claim_id: c_rabygh7Xxy5nJ3PnwZJNYZ
          source_id: s_rSy84gsdJBoBQH9xrZKxGV
          stance: supports
          locator: CBDB:237853
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
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
        id: c_KvqefautQPiS-oBj7LuymA
        subject_person_id: p_CxyZa6TEKBz4MjoJnsZpoy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2pyiwzcEw3KeyFtg8zdPY8
          claim_id: c_KvqefautQPiS-oBj7LuymA
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vzhFyj98EbzW26DLi4CY6U
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 126877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126877&o=json
            external_identifier: CBDB:126877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ByxZLeQEM3c8TBLeF6KvJM
        status: active
        display_name: 王繼
        merged_into_person_id: null
  other: []
---

# 王均玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王均玉，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 237853） | accepted |
| name.primary | 王均玉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ByxZLeQEM3c8TBLeF6KvJM | 王繼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 126877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126877&o=json)
- [中国历代人物传记资料库：王均玉（CBDB 237853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237853&o=json)
