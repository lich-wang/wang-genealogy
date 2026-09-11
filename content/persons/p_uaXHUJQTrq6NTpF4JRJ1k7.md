---
schema: wang-person/v1
id: p_uaXHUJQTrq6NTpF4JRJ1k7
status: active
merged_into: null
display_name: 王福延
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vqAH5DzHKwzyq8E2jeuHir
        subject_person_id: p_uaXHUJQTrq6NTpF4JRJ1k7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福延
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uh2DYiLjYmqxmPoWZSGASu
          claim_id: c_vqAH5DzHKwzyq8E2jeuHir
          source_id: s_NqTm3ZLq2qRPyr8tK9gHHE
          stance: supports
          locator: CBDB:701299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701299）
          source: &a1
            id: s_NqTm3ZLq2qRPyr8tK9gHHE
            source_type: api_record
            title: 中国历代人物传记资料库：王福延（CBDB 701299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701299&o=json
            external_identifier: CBDB:701299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9D36UWZEhv4MAj2Ss9sVM4
        subject_person_id: p_uaXHUJQTrq6NTpF4JRJ1k7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TTQ5PNRiJ1xWxrEDgTCZK6
          claim_id: c_9D36UWZEhv4MAj2Ss9sVM4
          source_id: s_NqTm3ZLq2qRPyr8tK9gHHE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
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
        id: c_9uUYlLo2nZPN7-VV7k7LsU
        subject_person_id: p_DK5AcYsHo4a4UEPGMYMHvX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uaXHUJQTrq6NTpF4JRJ1k7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fnY3spymtRSd0nBSDpPvoJ
          claim_id: c_9uUYlLo2nZPN7-VV7k7LsU
          source_id: s_5fPwfQAT6j2J8AAcSmb3aZ
          stance: supports
          locator: 平陰縣志，lgid=630836：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5fPwfQAT6j2J8AAcSmb3aZ
            source_type: api_record
            title: 中国历代人物传记资料库：王伯亮（CBDB 701300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701300&o=json
            external_identifier: CBDB:701300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DK5AcYsHo4a4UEPGMYMHvX
        status: active
        display_name: 王伯亮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王福延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福延 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_DK5AcYsHo4a4UEPGMYMHvX | 王伯亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯亮（CBDB 701300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701300&o=json)
- [中国历代人物传记资料库：王福延（CBDB 701299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701299&o=json)
