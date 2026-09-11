---
schema: wang-person/v1
id: p_okCNcSbsnw3xMM97gGiEC7
status: active
merged_into: null
display_name: 王希曾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xsjsby9KK47SaGsXSguEVa
        subject_person_id: p_okCNcSbsnw3xMM97gGiEC7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_511BdTpQj6zQAwur3a2cve
          claim_id: c_Xsjsby9KK47SaGsXSguEVa
          source_id: s_82K4ZSB1wSsQcqNAT4ARZB
          stance: supports
          locator: CBDB:126285
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126285）
          source: &a1
            id: s_82K4ZSB1wSsQcqNAT4ARZB
            source_type: api_record
            title: 中国历代人物传记资料库：王希曾（CBDB 126285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126285&o=json
            external_identifier: CBDB:126285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FkMCRfXcXLTTq5K2ApLsQp
        subject_person_id: p_okCNcSbsnw3xMM97gGiEC7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ttr7BiJiDj7PvidnK521sM
          claim_id: c_FkMCRfXcXLTTq5K2ApLsQp
          source_id: s_82K4ZSB1wSsQcqNAT4ARZB
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
        id: c_RfnyZgWAC88BmuRgVXihaO
        subject_person_id: p_okCNcSbsnw3xMM97gGiEC7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o5iCKboKod63KLGnA3UGdF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cM1SvuDYyndbWdX2FK4g0d
          claim_id: c_RfnyZgWAC88BmuRgVXihaO
          source_id: s_FMHjch1AxZimYXE1NLHFCo
          stance: supports
          locator: 宋濂全集，423-425：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FMHjch1AxZimYXE1NLHFCo
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 100989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100989&o=json
            external_identifier: CBDB:100989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o5iCKboKod63KLGnA3UGdF
        status: active
        display_name: 王璵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希曾 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_o5iCKboKod63KLGnA3UGdF | 王璵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希曾（CBDB 126285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126285&o=json)
- [中国历代人物传记资料库：王璵（CBDB 100989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100989&o=json)
