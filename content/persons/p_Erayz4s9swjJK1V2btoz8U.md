---
schema: wang-person/v1
id: p_Erayz4s9swjJK1V2btoz8U
status: active
merged_into: null
display_name: 王克敦
cbdb_id: 17765
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NcUH2HkNVra5Bx9q47cvEj
        subject_person_id: p_Erayz4s9swjJK1V2btoz8U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克敦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dA6QGo3fYN4YztsbDfdMxx
          claim_id: c_NcUH2HkNVra5Bx9q47cvEj
          source_id: s_VD3Dhwa3XC7VZuFE3CSmcc
          stance: supports
          locator: Q45387155
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_VD3Dhwa3XC7VZuFE3CSmcc
            source_type: api_record
            title: 维基数据：王克敦（Q45387155）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387155
            external_identifier: Q45387155
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_JmTCi6neZ9y7RLP31LKWro
          claim_id: c_NcUH2HkNVra5Bx9q47cvEj
          source_id: s_YuLRvL17PPt15VhJQX2iyM
          stance: supports
          locator: CBDB:17765
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_YuLRvL17PPt15VhJQX2iyM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王克敦（17765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17765&o=json
            external_identifier: CBDB:17765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7MwNyGYCKC3WwcF1bf1Ef5
        subject_person_id: p_Erayz4s9swjJK1V2btoz8U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person (CBDB = 17765)
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S7myzT8JKHVPQiDTWRz5gy
          claim_id: c_7MwNyGYCKC3WwcF1bf1Ef5
          source_id: s_VD3Dhwa3XC7VZuFE3CSmcc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1UA4a1UB2fUdTEHwdvKiHC
        subject_person_id: p_rb8tznEkJuEZhnFRpwU8px
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Erayz4s9swjJK1V2btoz8U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8jAMeXFwdfBViTj7UHxLDf
          claim_id: c_1UA4a1UB2fUdTEHwdvKiHC
          source_id: s_VD3Dhwa3XC7VZuFE3CSmcc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_fgPMWXASdvte2SJNa4XaCN
          claim_id: c_1UA4a1UB2fUdTEHwdvKiHC
          source_id: s_BRwNt2rL1nH38BZfJQECmg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BRwNt2rL1nH38BZfJQECmg
            source_type: api_record
            title: 维基数据：王世范（Q45387151）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387151
            external_identifier: Q45387151
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_NWvvbrP5n6NWqr6gSLXEe1
          claim_id: c_1UA4a1UB2fUdTEHwdvKiHC
          source_id: s_L7kDY6PmxnJSsYVJJs546H
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_L7kDY6PmxnJSsYVJJs546H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世範（17764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17764&o=json
            external_identifier: CBDB:17764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:16.368Z
            metadata_json: null
      object_person:
        id: p_rb8tznEkJuEZhnFRpwU8px
        status: active
        display_name: 王世范
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克敦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克敦 | accepted |
| bio.summary | Song dynasty person (CBDB = 17765) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rb8tznEkJuEZhnFRpwU8px | 王世范 | accepted |

## 外部来源

- [维基数据：王克敦（Q45387155）](https://www.wikidata.org/wiki/Q45387155)
- [维基数据：王世范（Q45387151）](https://www.wikidata.org/wiki/Q45387151)
- [CBDB 中国历代人物传记资料库：王克敦（17765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17765&o=json)
- [CBDB 中国历代人物传记资料库：王世範（17764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17764&o=json)
