---
schema: wang-person/v1
id: p_dAbN991MzyFE7PH5ibfiRk
status: active
merged_into: null
display_name: 王璡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qU8qBEGg1wSMJY4MD8RD79
        subject_person_id: p_dAbN991MzyFE7PH5ibfiRk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uRpt6JUvT7xoL121Z9ip56
          claim_id: c_qU8qBEGg1wSMJY4MD8RD79
          source_id: s_7h8j8hvisQbD5UrTsP19dD
          stance: supports
          locator: CBDB:22086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22086）
          source: &a1
            id: s_7h8j8hvisQbD5UrTsP19dD
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 22086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22086&o=json
            external_identifier: CBDB:22086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bRuufi46yRcq72iik1Sndg
        subject_person_id: p_dAbN991MzyFE7PH5ibfiRk
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
        - id: cs_7v4pZxWzBAat2yaDHFYQfS
          claim_id: c_bRuufi46yRcq72iik1Sndg
          source_id: s_7h8j8hvisQbD5UrTsP19dD
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
        id: c_kNPSDnkEDm_2zKOazt7nVJ
        subject_person_id: p_dAbN991MzyFE7PH5ibfiRk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2EGAHMxrs3mXPw15tj2jv3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3eeG8vO1t6bW0XB1MbFPJ
          claim_id: c_kNPSDnkEDm_2zKOazt7nVJ
          source_id: s_7h8j8hvisQbD5UrTsP19dD
          stance: supports
          locator: CBDB 双向互证（子 王仁諒 ⇄ 父 王璡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_2EGAHMxrs3mXPw15tj2jv3
        status: active
        display_name: 王仁諒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璡 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2EGAHMxrs3mXPw15tj2jv3 | 王仁諒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璡（CBDB 22086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22086&o=json)
