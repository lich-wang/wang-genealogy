---
schema: wang-person/v1
id: p_fx5uiteSUr9e6mMa8PxR5B
status: active
merged_into: null
display_name: 王人樹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9aJHirZLzjK2BwcvNZF3s
        subject_person_id: p_fx5uiteSUr9e6mMa8PxR5B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人樹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_in1S6XzoGf8CQMNbqB6J7X
          claim_id: c_J9aJHirZLzjK2BwcvNZF3s
          source_id: s_jS77fan1zYJSLu4hfBxRrq
          stance: supports
          locator: CBDB:527009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527009）
          source: &a1
            id: s_jS77fan1zYJSLu4hfBxRrq
            source_type: api_record
            title: 中国历代人物传记资料库：王人樹（CBDB 527009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527009&o=json
            external_identifier: CBDB:527009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ra1u44v8oh3LTfzDA1uySb
        subject_person_id: p_fx5uiteSUr9e6mMa8PxR5B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P5dQKPwycMK7t2Ced8pQfh
          claim_id: c_Ra1u44v8oh3LTfzDA1uySb
          source_id: s_jS77fan1zYJSLu4hfBxRrq
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
        id: c_BGw-gxNReCDZqNNp3V3gzu
        subject_person_id: p_ncMzy2PByV6MKE3P1SGDzD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fx5uiteSUr9e6mMa8PxR5B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GzAr3kNozyLldSRW1n7o1u
          claim_id: c_BGw-gxNReCDZqNNp3V3gzu
          source_id: s_jS77fan1zYJSLu4hfBxRrq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13176：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ncMzy2PByV6MKE3P1SGDzD
        status: active
        display_name: 王曇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王人樹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王人樹 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ncMzy2PByV6MKE3P1SGDzD | 王曇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王人樹（CBDB 527009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527009&o=json)
