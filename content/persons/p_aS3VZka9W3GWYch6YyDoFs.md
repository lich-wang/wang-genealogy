---
schema: wang-person/v1
id: p_aS3VZka9W3GWYch6YyDoFs
status: active
merged_into: null
display_name: 王致平
cbdb_id: 386851
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XXA626gaJJoC1DQHEZptZ2
        subject_person_id: p_aS3VZka9W3GWYch6YyDoFs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致平，史料所见人物。本项目依据《中国历代人物传记资料库：王致平（CBDB 386851）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_-FIlctHeA3yDD3Z7qg5Y6r
          claim_id: c_XXA626gaJJoC1DQHEZptZ2
          source_id: s_nNPLxtdNgAZwecpaLd1tEz
          stance: supports
          locator: CBDB:386851
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nNPLxtdNgAZwecpaLd1tEz
            source_type: api_record
            title: 中国历代人物传记资料库：王致平（CBDB 386851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386851&o=json
            external_identifier: CBDB:386851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xSwnjLLTVfu6TCkAXp1ouk
        subject_person_id: p_aS3VZka9W3GWYch6YyDoFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yPHXEhn2bas9rwWvYjwR5q
          claim_id: c_xSwnjLLTVfu6TCkAXp1ouk
          source_id: s_nNPLxtdNgAZwecpaLd1tEz
          stance: supports
          locator: CBDB:386851
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 明
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
        id: c_iSoM3tB6jfhBVotMjDZ8YE
        subject_person_id: p_aS3VZka9W3GWYch6YyDoFs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Wio2Qi9A81uGwRv1zKHEox
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTOmZedaIijxsGc9brB3dm
          claim_id: c_iSoM3tB6jfhBVotMjDZ8YE
          source_id: s_8RYzNBANqRnDTrwO0W1eq2
          stance: supports
          locator: CBDB 双向互证（妻子 俞氏(王致平妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8RYzNBANqRnDTrwO0W1eq2
            source_type: api_record
            title: 中国历代人物传记资料库：俞氏(王致平妻)（CBDB 386850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386850&o=json
            external_identifier: CBDB:386850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Wio2Qi9A81uGwRv1zKHEox
        status: active
        display_name: 俞氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王致平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王致平，史料所见人物。本项目依据《中国历代人物传记资料库：王致平（CBDB 386851）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王致平 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Wio2Qi9A81uGwRv1zKHEox | 俞氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王致平（CBDB 386851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386851&o=json)
- [中国历代人物传记资料库：俞氏(王致平妻)（CBDB 386850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386850&o=json)
