---
schema: wang-person/v1
id: p_DbR6AZz63ppJQ3UojmKdb4
status: active
merged_into: null
display_name: 王彥禮
cbdb_id: 239746
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hiWji6Zpnka5deLa4K5K5p
        subject_person_id: p_DbR6AZz63ppJQ3UojmKdb4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥禮，史料所见人物。本项目依据《中国历代人物传记资料库：王彥禮（CBDB 239746）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_5JkRVNKfV-9LXAYDQ9tqAo
          claim_id: c_hiWji6Zpnka5deLa4K5K5p
          source_id: s_3HL7UJVwfmukJ4oKHjVSXd
          stance: supports
          locator: CBDB:239746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_3HL7UJVwfmukJ4oKHjVSXd
            source_type: api_record
            title: 中国历代人物传记资料库：王彥禮（CBDB 239746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239746&o=json
            external_identifier: CBDB:239746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K7KsVoCUNzntGt8USyC1Sy
        subject_person_id: p_DbR6AZz63ppJQ3UojmKdb4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N89ELuTEopThQsJKJec2m1
          claim_id: c_K7KsVoCUNzntGt8USyC1Sy
          source_id: s_3HL7UJVwfmukJ4oKHjVSXd
          stance: supports
          locator: CBDB:239746
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
        id: c_981SOWJjgrFhYGpxNjzbcz
        subject_person_id: p_DbR6AZz63ppJQ3UojmKdb4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u1bXxwJocX0Xs7fo4ZsrDd
          claim_id: c_981SOWJjgrFhYGpxNjzbcz
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aqtLHn9baQNrzeFNcSJGxm
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 208052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208052&o=json
            external_identifier: CBDB:208052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kFVLZcH5HhGCPzncqbfvAU
        status: active
        display_name: 王紹
        merged_into_person_id: null
  other: []
---

# 王彥禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥禮，史料所见人物。本项目依据《中国历代人物传记资料库：王彥禮（CBDB 239746）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王彥禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kFVLZcH5HhGCPzncqbfvAU | 王紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹（CBDB 208052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208052&o=json)
- [中国历代人物传记资料库：王彥禮（CBDB 239746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239746&o=json)
