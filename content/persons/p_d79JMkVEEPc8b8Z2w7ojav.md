---
schema: wang-person/v1
id: p_d79JMkVEEPc8b8Z2w7ojav
status: active
merged_into: null
display_name: 王慶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5ykLsHH83HqPo87h3RX2yn
        subject_person_id: p_d79JMkVEEPc8b8Z2w7ojav
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kXMpPTf8uSU1hufBvYbFGe
          claim_id: c_5ykLsHH83HqPo87h3RX2yn
          source_id: s_p9sx3B4iaMFjwbP9GsxtF4
          stance: supports
          locator: CBDB:19225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19225）
          source: &a1
            id: s_p9sx3B4iaMFjwbP9GsxtF4
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 19225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19225&o=json
            external_identifier: CBDB:19225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vsr2cMukRF3UK2BuUrFmFP
        subject_person_id: p_d79JMkVEEPc8b8Z2w7ojav
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
        - id: cs_mwN6bCbjBgoyv16Hrpdhav
          claim_id: c_Vsr2cMukRF3UK2BuUrFmFP
          source_id: s_p9sx3B4iaMFjwbP9GsxtF4
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
        id: c_UpWFU95iAb5cA6rUzSEbhf
        subject_person_id: p_MeFZQEb7d1NDXAkETnNC7B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_d79JMkVEEPc8b8Z2w7ojav
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S71oK2t2gEkXco4hY1tGkd
          claim_id: c_UpWFU95iAb5cA6rUzSEbhf
          source_id: s_p9sx3B4iaMFjwbP9GsxtF4
          stance: supports
          locator: CBDB 双向互证（祖父 王東美 ⇄ 孫 王慶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_MeFZQEb7d1NDXAkETnNC7B
        status: active
        display_name: 王東美
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_MeFZQEb7d1NDXAkETnNC7B | 王東美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 19225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19225&o=json)
