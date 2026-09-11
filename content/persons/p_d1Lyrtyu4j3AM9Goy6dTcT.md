---
schema: wang-person/v1
id: p_d1Lyrtyu4j3AM9Goy6dTcT
status: active
merged_into: null
display_name: 王祺
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7dT3AVWo2HvpVUAxkA47nq
        subject_person_id: p_d1Lyrtyu4j3AM9Goy6dTcT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TwfcFCX5edgVUNpew8Yuan
          claim_id: c_7dT3AVWo2HvpVUAxkA47nq
          source_id: s_R3uro5zQCDofqK8ozEYEYL
          stance: supports
          locator: CBDB:231880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231880）
          source: &a1
            id: s_R3uro5zQCDofqK8ozEYEYL
            source_type: api_record
            title: 中国历代人物传记资料库：王祺（CBDB 231880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231880&o=json
            external_identifier: CBDB:231880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FUxPzRA5nRXceqyanjCCPt
        subject_person_id: p_d1Lyrtyu4j3AM9Goy6dTcT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祺，史料所见人物。本项目依据《中国历代人物传记资料库：王祺（CBDB 231880）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ujnnnGkSdExK2orfm7IasZ
          claim_id: c_FUxPzRA5nRXceqyanjCCPt
          source_id: s_R3uro5zQCDofqK8ozEYEYL
          stance: supports
          locator: CBDB:231880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_qrtohWFOxoX7rJK676G6yT
        subject_person_id: p_d1Lyrtyu4j3AM9Goy6dTcT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZWV6gL7TRNqz-LlUMHgHWF
          claim_id: c_qrtohWFOxoX7rJK676G6yT
          source_id: s_R3uro5zQCDofqK8ozEYEYL
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        status: active
        display_name: 王在晉
        merged_into_person_id: null
  other: []
---

# 王祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祺 | accepted |
| bio.summary | 王祺，史料所见人物。本项目依据《中国历代人物传记资料库：王祺（CBDB 231880）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AFdJ7pAjfwQ6cMiK8RCDT2 | 王在晉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祺（CBDB 231880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231880&o=json)
