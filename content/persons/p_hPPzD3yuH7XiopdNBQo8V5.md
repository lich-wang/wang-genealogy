---
schema: wang-person/v1
id: p_hPPzD3yuH7XiopdNBQo8V5
status: active
merged_into: null
display_name: 王廷錫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tkYwEKnN2BNL3aKA6FfWQ5
        subject_person_id: p_hPPzD3yuH7XiopdNBQo8V5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o6SM85Z73tirdRL9EnZzQi
          claim_id: c_tkYwEKnN2BNL3aKA6FfWQ5
          source_id: s_4tG1tDmjYKqw5PABAQcoNN
          stance: supports
          locator: CBDB:288288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288288）
          source: &a1
            id: s_4tG1tDmjYKqw5PABAQcoNN
            source_type: api_record
            title: 中国历代人物传记资料库：王廷錫（CBDB 288288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288288&o=json
            external_identifier: CBDB:288288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.289Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wUuGyqCLWdnhRex8FoNRZG
        subject_person_id: p_hPPzD3yuH7XiopdNBQo8V5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錫，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p88qRFgUH14H2iKo_9IwYj
          claim_id: c_wUuGyqCLWdnhRex8FoNRZG
          source_id: s_4tG1tDmjYKqw5PABAQcoNN
          stance: supports
          locator: CBDB:288288
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_aHqbQUrUSxM402O4Qc3eln
        subject_person_id: p_hPPzD3yuH7XiopdNBQo8V5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sn9KZzCF4Seq4v2EsCEM8N
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OeCk-5UkMNaaH5W0d3QaEy
          claim_id: c_aHqbQUrUSxM402O4Qc3eln
          source_id: s_4tG1tDmjYKqw5PABAQcoNN
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sn9KZzCF4Seq4v2EsCEM8N
        status: active
        display_name: 王䋊
        merged_into_person_id: null
  other: []
---

# 王廷錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷錫 | accepted |
| bio.summary | 王廷錫，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sn9KZzCF4Seq4v2EsCEM8N | 王䋊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷錫（CBDB 288288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288288&o=json)
