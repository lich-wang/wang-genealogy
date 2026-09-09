---
schema: wang-person/v1
id: p_d1Lyrtyu4j3AM9Goy6dTcT
status: active
merged_into: null
display_name: 王祺
revision: 1
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w9Rk9Er8gV4G3n3z9pg8h9
          claim_id: c_FUxPzRA5nRXceqyanjCCPt
          source_id: s_R3uro5zQCDofqK8ozEYEYL
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
  ancestors: []
  descendants: []
  other: []
---

# 王祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祺 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祺（CBDB 231880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231880&o=json)
