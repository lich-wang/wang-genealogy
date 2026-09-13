---
schema: wang-person/v1
id: p_xXXn6fAPMxYTRtG6zG3M9K
status: active
merged_into: null
display_name: 王仕榮
cbdb_id: 22194
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mw4XVwMsf9BSrgFv6B9g7B
        subject_person_id: p_xXXn6fAPMxYTRtG6zG3M9K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕榮，史料所见人物。本项目依据《中国历代人物传记资料库：王仕榮（CBDB 22194）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_uIdbACBGE-SsFW0MpirugW
          claim_id: c_mw4XVwMsf9BSrgFv6B9g7B
          source_id: s_VVvL7RML9nM8xK4UBmbnQD
          stance: supports
          locator: CBDB:22194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VVvL7RML9nM8xK4UBmbnQD
            source_type: api_record
            title: 中国历代人物传记资料库：王仕榮（CBDB 22194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22194&o=json
            external_identifier: CBDB:22194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HmV9gX6qsFqyt3uxhk9FB
        subject_person_id: p_xXXn6fAPMxYTRtG6zG3M9K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mqfwfjejABfjzqoJt6V4ty
          claim_id: c_4HmV9gX6qsFqyt3uxhk9FB
          source_id: s_VVvL7RML9nM8xK4UBmbnQD
          stance: supports
          locator: CBDB:22194
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Iiwriu0WCbdZZ5iznqFw4x
        subject_person_id: p_5NzUrA2mKFb4JcdEQ9g3nA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xXXn6fAPMxYTRtG6zG3M9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__B6QoqQXeZgewHiGqmLRcg
          claim_id: c_Iiwriu0WCbdZZ5iznqFw4x
          source_id: s_PiQ3FBVHFusPGJpKgSHkXs
          stance: supports
          locator: CBDB 双向互证（子 王仕榮 ⇄ 父 王重瞻）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_PiQ3FBVHFusPGJpKgSHkXs
            source_type: api_record
            title: 中国历代人物传记资料库：王重瞻（CBDB 22193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22193&o=json
            external_identifier: CBDB:22193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5NzUrA2mKFb4JcdEQ9g3nA
        status: active
        display_name: 王重瞻
        merged_into_person_id: null
  children:
    - claim:
        id: c_e9P1TaM1wAMue_JE8dH5hM
        subject_person_id: p_xXXn6fAPMxYTRtG6zG3M9K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_biGaLdBUf3ZqH93KQ7uZnx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0xOl1D7XcK98Z5EN3aNl43
          claim_id: c_e9P1TaM1wAMue_JE8dH5hM
          source_id: s_suZSwBcjvFPqw9MPCk4NV1
          stance: supports
          locator: CBDB 双向互证（父 王仕榮 ⇄ 子 王懷信）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_suZSwBcjvFPqw9MPCk4NV1
            source_type: api_record
            title: 中国历代人物传记资料库：王懷信（CBDB 22195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22195&o=json
            external_identifier: CBDB:22195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_biGaLdBUf3ZqH93KQ7uZnx
        status: active
        display_name: 王懷信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_8SF36si3-DvOCFZZod-NIb
        subject_person_id: p_xXXn6fAPMxYTRtG6zG3M9K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iShQMKUmWL7Kmc32ntQlhH
          claim_id: c_8SF36si3-DvOCFZZod-NIb
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: 宋人傳記資料索引(電子版)，873;876：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NU9snLL9YRryUoX5Cw8uxa
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 8156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8156&o=json
            external_identifier: CBDB:8156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4DFXvaJGjrMh1AZPiFN3k7
        status: active
        display_name: 王淵
        merged_into_person_id: null
  other: []
---

# 王仕榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仕榮，史料所见人物。本项目依据《中国历代人物传记资料库：王仕榮（CBDB 22194）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仕榮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5NzUrA2mKFb4JcdEQ9g3nA | 王重瞻 | accepted |
| children | p_biGaLdBUf3ZqH93KQ7uZnx | 王懷信 | accepted |
| descendants | p_4DFXvaJGjrMh1AZPiFN3k7 | 王淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷信（CBDB 22195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22195&o=json)
- [中国历代人物传记资料库：王仕榮（CBDB 22194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22194&o=json)
- [中国历代人物传记资料库：王淵（CBDB 8156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8156&o=json)
- [中国历代人物传记资料库：王重瞻（CBDB 22193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22193&o=json)
