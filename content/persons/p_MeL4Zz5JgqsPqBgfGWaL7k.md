---
schema: wang-person/v1
id: p_MeL4Zz5JgqsPqBgfGWaL7k
status: active
merged_into: null
display_name: 王應瑜
cbdb_id: 341555
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_suCwv5cnbph3fQNEiS4nor
        subject_person_id: p_MeL4Zz5JgqsPqBgfGWaL7k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應瑜，清人物。中国历代人物传记资料库（CBDB）以人物编号 341555 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_A38VjhvW2PJhLtKfPMEPtJ
          claim_id: c_suCwv5cnbph3fQNEiS4nor
          source_id: s_1UocxkNBvtHVQ3jqZbNzAh
          stance: supports
          locator: CBDB:341555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_1UocxkNBvtHVQ3jqZbNzAh
            source_type: api_record
            title: 中国历代人物传记资料库：王應瑜（CBDB 341555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341555&o=json
            external_identifier: CBDB:341555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Mk7DL3HKJsPKMp9n7CY5m
        subject_person_id: p_MeL4Zz5JgqsPqBgfGWaL7k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UrQJNiUWW8p2LH4qye6tyC
          claim_id: c_4Mk7DL3HKJsPKMp9n7CY5m
          source_id: s_1UocxkNBvtHVQ3jqZbNzAh
          stance: supports
          locator: CBDB:341555
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_1UocxkNBvtHVQ3jqZbNzAh
            source_type: api_record
            title: 中国历代人物传记资料库：王應瑜（CBDB 341555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341555&o=json
            external_identifier: CBDB:341555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_e54OEEwl_9HObLbttdH8JB
        subject_person_id: p_Lag4sfewwEYeWDkfJpeQ26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MeL4Zz5JgqsPqBgfGWaL7k
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1SuDBwwYqowQHlGl2dr_Rx
          claim_id: c_e54OEEwl_9HObLbttdH8JB
          source_id: s_m4J6mUCHHiniUJRgqG5mS4
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m4J6mUCHHiniUJRgqG5mS4
            source_type: api_record
            title: 中国历代人物传记资料库：王廷槐（CBDB 703784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703784&o=json
            external_identifier: CBDB:703784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Lag4sfewwEYeWDkfJpeQ26
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應瑜，清人物。中国历代人物传记资料库（CBDB）以人物编号 341555 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王應瑜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Lag4sfewwEYeWDkfJpeQ26 | 王廷槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷槐（CBDB 703784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703784&o=json)
- [中国历代人物传记资料库：王應瑜（CBDB 341555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341555&o=json)
