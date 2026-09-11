---
schema: wang-person/v1
id: p_EbzmoxSdoRXKKbPQATGcn8
status: active
merged_into: null
display_name: 王嬙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YdfV6f5on2Bjxb1N9hWijV
        subject_person_id: p_EbzmoxSdoRXKKbPQATGcn8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嬙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5BNm1Jm5hgRGQQtSQj95VU
          claim_id: c_YdfV6f5on2Bjxb1N9hWijV
          source_id: s_QexD522Erg5damFL5RVKL3
          stance: supports
          locator: CBDB:135318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135318）
          source: &a1
            id: s_QexD522Erg5damFL5RVKL3
            source_type: api_record
            title: 中国历代人物传记资料库：王嬙（CBDB 135318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135318&o=json
            external_identifier: CBDB:135318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.185Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8hUPkWMguYkjn9D7Bq9KMS
        subject_person_id: p_EbzmoxSdoRXKKbPQATGcn8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西漢人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AiVk25kxCCraDBdHes1Aw7
          claim_id: c_8hUPkWMguYkjn9D7Bq9KMS
          source_id: s_QexD522Erg5damFL5RVKL3
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
  spouses:
    - claim:
        id: c_6HDZsotTSycryWOHW2adug
        subject_person_id: p_EbzmoxSdoRXKKbPQATGcn8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iKtnQwHk19L953BUFn9ANP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OWB4k_BOnxYrLPDiuifn-C
          claim_id: c_6HDZsotTSycryWOHW2adug
          source_id: s_QexD522Erg5damFL5RVKL3
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1988：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iKtnQwHk19L953BUFn9ANP
        status: active
        display_name: 呼韩邪
        merged_into_person_id: null
    - claim:
        id: c_JQhuzJo_kE5XpTWLfORNXq
        subject_person_id: p_iKtnQwHk19L953BUFn9ANP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EbzmoxSdoRXKKbPQATGcn8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O1Aflt7kakn2nrFu6jLTTQ
          claim_id: c_JQhuzJo_kE5XpTWLfORNXq
          source_id: s_JwMtY89YFL5MF2cHv8vDAo
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1988：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JwMtY89YFL5MF2cHv8vDAo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：呼韩邪（135319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135319&o=json
            external_identifier: CBDB:135319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:07.024Z
            metadata_json: null
      object_person:
        id: p_iKtnQwHk19L953BUFn9ANP
        status: active
        display_name: 呼韩邪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王嬙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嬙 | accepted |
| bio.summary | CBDB 记载为西漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_iKtnQwHk19L953BUFn9ANP | 呼韩邪 | accepted |
| spouses | p_iKtnQwHk19L953BUFn9ANP | 呼韩邪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嬙（CBDB 135318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135318&o=json)
- [CBDB 中国历代人物传记资料库：呼韩邪（135319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135319&o=json)
