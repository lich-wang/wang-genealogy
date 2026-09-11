---
schema: wang-person/v1
id: p_7X9AD7BmdgPzHei35pEepy
status: active
merged_into: null
display_name: 王昞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hfCFAmHYiPM1BaJiAEJhZE
        subject_person_id: p_7X9AD7BmdgPzHei35pEepy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3yUxfrkBca3D4MXkYXzbKJ
          claim_id: c_hfCFAmHYiPM1BaJiAEJhZE
          source_id: s_AuL8jjhVpgkiuUXR655ABB
          stance: supports
          locator: CBDB:22131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22131）
          source: &a1
            id: s_AuL8jjhVpgkiuUXR655ABB
            source_type: api_record
            title: 中国历代人物传记资料库：王昞（CBDB 22131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22131&o=json
            external_identifier: CBDB:22131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wJn4CTPTkXwf8NVAzwUgGg
        subject_person_id: p_7X9AD7BmdgPzHei35pEepy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2xaGxJcSL8VtnBBQau9k7p
          claim_id: c_wJn4CTPTkXwf8NVAzwUgGg
          source_id: s_AuL8jjhVpgkiuUXR655ABB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SLqf07ApXWQmZY_H36xGdl
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7X9AD7BmdgPzHei35pEepy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bm2sLf4iMrd_O8PQoyuWVm
          claim_id: c_SLqf07ApXWQmZY_H36xGdl
          source_id: s_AuL8jjhVpgkiuUXR655ABB
          stance: supports
          locator: CBDB 双向互证（父 王仲山 ⇄ 子 王昞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_V7ycLeFaKcwDLu6Nqpp4GD
        status: active
        display_name: 王仲山
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昞 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V7ycLeFaKcwDLu6Nqpp4GD | 王仲山 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昞（CBDB 22131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22131&o=json)
