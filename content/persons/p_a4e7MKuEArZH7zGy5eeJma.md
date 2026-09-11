---
schema: wang-person/v1
id: p_a4e7MKuEArZH7zGy5eeJma
status: active
merged_into: null
display_name: 王載
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LQA8WpQ6npRt91ahaMC2ZH
        subject_person_id: p_a4e7MKuEArZH7zGy5eeJma
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZHRszYg9bqGsDqSX6zxQrw
          claim_id: c_LQA8WpQ6npRt91ahaMC2ZH
          source_id: s_PY4dXJJZsw1aMJVRPoqKDQ
          stance: supports
          locator: CBDB:29205
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29205）
          source: &a1
            id: s_PY4dXJJZsw1aMJVRPoqKDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 29205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29205&o=json
            external_identifier: CBDB:29205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d9mEdtdsxwx2c8AcnbFEXD
        subject_person_id: p_a4e7MKuEArZH7zGy5eeJma
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eWg9D3BkXLqtiSQECSZXX8
          claim_id: c_d9mEdtdsxwx2c8AcnbFEXD
          source_id: s_PY4dXJJZsw1aMJVRPoqKDQ
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
        id: c_GG29-fjPWs_QPKr10-wKax
        subject_person_id: p_a4e7MKuEArZH7zGy5eeJma
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UxMMKFnipueTNhy6nquddw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HtZ82M6RuAUSWLcpLm1OeB
          claim_id: c_GG29-fjPWs_QPKr10-wKax
          source_id: s_PY4dXJJZsw1aMJVRPoqKDQ
          stance: supports
          locator: CBDB 双向互证（子 王清 ⇄ 父 王載）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UxMMKFnipueTNhy6nquddw
        status: active
        display_name: 王清
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王載 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UxMMKFnipueTNhy6nquddw | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王載（CBDB 29205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29205&o=json)
