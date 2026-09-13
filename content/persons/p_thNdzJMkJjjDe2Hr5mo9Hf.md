---
schema: wang-person/v1
id: p_thNdzJMkJjjDe2Hr5mo9Hf
status: active
merged_into: null
display_name: 王庶叔
cbdb_id: 238050
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xbVDtQ45jEZGs3fzbXn3if
        subject_person_id: p_thNdzJMkJjjDe2Hr5mo9Hf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庶叔，史料所见人物。本项目依据《中国历代人物传记资料库：王庶叔（CBDB 238050）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_jucF1T7ef1d1U-LGf5q-8j
          claim_id: c_xbVDtQ45jEZGs3fzbXn3if
          source_id: s_1Ppvvf1aKJaL7kythMkqNR
          stance: supports
          locator: CBDB:238050
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1Ppvvf1aKJaL7kythMkqNR
            source_type: api_record
            title: 中国历代人物传记资料库：王庶叔（CBDB 238050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238050&o=json
            external_identifier: CBDB:238050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3vpkrwKBUC5C5pwNpq7oXq
        subject_person_id: p_thNdzJMkJjjDe2Hr5mo9Hf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庶叔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LE6PT3eWpLNX2qkJky8Urj
          claim_id: c_3vpkrwKBUC5C5pwNpq7oXq
          source_id: s_1Ppvvf1aKJaL7kythMkqNR
          stance: supports
          locator: CBDB:238050
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
        id: c_yWCuPGOZbzaYemjnxj9u3c
        subject_person_id: p_thNdzJMkJjjDe2Hr5mo9Hf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVovzc0hVshq8sfNb5XsZJ
          claim_id: c_yWCuPGOZbzaYemjnxj9u3c
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p1CXfyPv5LXzNzgR3qcWyx
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json
            external_identifier: CBDB:67953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Sfy82F6BmihArAucn9Vuw
        status: active
        display_name: 王詔
        merged_into_person_id: null
  other: []
---

# 王庶叔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庶叔，史料所见人物。本项目依据《中国历代人物传记资料库：王庶叔（CBDB 238050）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王庶叔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_8Sfy82F6BmihArAucn9Vuw | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庶叔（CBDB 238050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238050&o=json)
- [中国历代人物传记资料库：王詔（CBDB 67953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json)
