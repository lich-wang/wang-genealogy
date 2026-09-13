---
schema: wang-person/v1
id: p_ALnGH7uowije6trJgmryLj
status: active
merged_into: null
display_name: 王友德
cbdb_id: 236841
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dCJ7DJwVhS4fSYQPE4t9D2
        subject_person_id: p_ALnGH7uowije6trJgmryLj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友德，史料所见人物。本项目依据《中国历代人物传记资料库：王友德（CBDB 236841）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_XXQGcRkH1cyo7nDnwEJGHC
          claim_id: c_dCJ7DJwVhS4fSYQPE4t9D2
          source_id: s_boEZvxEi9Q39r6tYNJMbXp
          stance: supports
          locator: CBDB:236841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_boEZvxEi9Q39r6tYNJMbXp
            source_type: api_record
            title: 中国历代人物传记资料库：王友德（CBDB 236841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236841&o=json
            external_identifier: CBDB:236841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7GCv4pFCuoJM8ax5rgNxWV
        subject_person_id: p_ALnGH7uowije6trJgmryLj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5dBBqucb8cajMLELhACd8B
          claim_id: c_7GCv4pFCuoJM8ax5rgNxWV
          source_id: s_boEZvxEi9Q39r6tYNJMbXp
          stance: supports
          locator: CBDB:236841
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
        id: c_62c2nEOxXXMOm-BpPKARNl
        subject_person_id: p_ALnGH7uowije6trJgmryLj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b--pm6-VqfMxRWx-MCRTfI
          claim_id: c_62c2nEOxXXMOm-BpPKARNl
          source_id: s_2D4p66LisW9zuWaUxemQ21
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2D4p66LisW9zuWaUxemQ21
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 66976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json
            external_identifier: CBDB:66976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfDGGh6h4aUB2seMFJ2w8R
        status: active
        display_name: 王宇
        merged_into_person_id: null
  other: []
---

# 王友德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王友德，史料所见人物。本项目依据《中国历代人物传记资料库：王友德（CBDB 236841）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王友德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AfDGGh6h4aUB2seMFJ2w8R | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友德（CBDB 236841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236841&o=json)
- [中国历代人物传记资料库：王宇（CBDB 66976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json)
