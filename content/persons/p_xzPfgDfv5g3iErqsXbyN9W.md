---
schema: wang-person/v1
id: p_xzPfgDfv5g3iErqsXbyN9W
status: active
merged_into: null
display_name: 王延
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FzVqnHg6Fqrd2FzVh8xt9k
        subject_person_id: p_xzPfgDfv5g3iErqsXbyN9W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F3FBqQG8j6RoqkAwnePBf1
          claim_id: c_FzVqnHg6Fqrd2FzVh8xt9k
          source_id: s_GQRcs7aY8txX1NPMpBCzpi
          stance: supports
          locator: CBDB:27383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27383）
          source: &a1
            id: s_GQRcs7aY8txX1NPMpBCzpi
            source_type: api_record
            title: 中国历代人物传记资料库：王延（CBDB 27383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27383&o=json
            external_identifier: CBDB:27383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ay529eYMn4AXtKTNGvjS6
        subject_person_id: p_xzPfgDfv5g3iErqsXbyN9W
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
        - id: cs_tQyFc36Bv8yuUUFsdoS3E8
          claim_id: c_8ay529eYMn4AXtKTNGvjS6
          source_id: s_GQRcs7aY8txX1NPMpBCzpi
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
        id: c_XKOEWu8ruV_Mojm9GqjBTa
        subject_person_id: p_xzPfgDfv5g3iErqsXbyN9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WMxjKEeR4jNc6Hurs5htmQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bfGAW71aMDotgaPpApAFxj
          claim_id: c_XKOEWu8ruV_Mojm9GqjBTa
          source_id: s_JjTNW9ngBNw21W8aLCQf2b
          stance: supports
          locator: CBDB 双向互证（父 王延 ⇄ 子 王輔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_JjTNW9ngBNw21W8aLCQf2b
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 27384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27384&o=json
            external_identifier: CBDB:27384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WMxjKEeR4jNc6Hurs5htmQ
        status: active
        display_name: 王輔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WMxjKEeR4jNc6Hurs5htmQ | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 27384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27384&o=json)
- [中国历代人物传记资料库：王延（CBDB 27383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27383&o=json)
