---
schema: wang-person/v1
id: p_nDDaZpF9qvDxoedjU9EcGY
status: active
merged_into: null
display_name: 王林
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H1X8Uc5ApFWxJNZiEP49XV
        subject_person_id: p_nDDaZpF9qvDxoedjU9EcGY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_djxw5LYKdBe9D8ciBEHNLp
          claim_id: c_H1X8Uc5ApFWxJNZiEP49XV
          source_id: s_qbkVepWD94BUvMn9Z1VGK8
          stance: supports
          locator: CBDB:158830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158830）
          source: &a1
            id: s_qbkVepWD94BUvMn9Z1VGK8
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 158830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158830&o=json
            external_identifier: CBDB:158830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FE3XdnnnzaP8b6SP7GWGTi
        subject_person_id: p_nDDaZpF9qvDxoedjU9EcGY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1KGRTsPJ4a8dPud5xRBA5V
          claim_id: c_FE3XdnnnzaP8b6SP7GWGTi
          source_id: s_qbkVepWD94BUvMn9Z1VGK8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EVzv9mp5wBXlnwgdJZMKdg
        subject_person_id: p_nDDaZpF9qvDxoedjU9EcGY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WunH5HV9G7Nca9nPhRvgNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zCKc0emLQWvQM6LvBMNLrL
          claim_id: c_EVzv9mp5wBXlnwgdJZMKdg
          source_id: s_qbkVepWD94BUvMn9Z1VGK8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WunH5HV9G7Nca9nPhRvgNi
        status: active
        display_name: 王公廉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_d1b5BJvk8FSqxWHZ12iUuT
        subject_person_id: p_nDDaZpF9qvDxoedjU9EcGY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZDQVFonBw6ewr3KaQNch4p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tAdtWkB60fWPCl0YbVCoZF
          claim_id: c_d1b5BJvk8FSqxWHZ12iUuT
          source_id: s_TDvJlzQudwGJw7vqY2-kwl
          stance: supports
          locator: CBDB 双向互证（妻子 陸氏(王林妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TDvJlzQudwGJw7vqY2-kwl
            source_type: api_record
            title: 中国历代人物传记资料库：陸氏(王林妻)（CBDB 158831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158831&o=json
            external_identifier: CBDB:158831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZDQVFonBw6ewr3KaQNch4p
        status: active
        display_name: 陸氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WunH5HV9G7Nca9nPhRvgNi | 王公廉 | accepted |
| spouses | p_ZDQVFonBw6ewr3KaQNch4p | 陸氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陸氏(王林妻)（CBDB 158831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158831&o=json)
- [中国历代人物传记资料库：王林（CBDB 158830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158830&o=json)
