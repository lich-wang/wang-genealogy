---
schema: wang-person/v1
id: p_dqbea7KC6b34QnganHGig3
status: active
merged_into: null
display_name: 王允茂
cbdb_id: 525514
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ynThMD7eAiGuS9syqT1cXD
        subject_person_id: p_dqbea7KC6b34QnganHGig3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允茂，史料所见人物。本项目依据《中国历代人物传记资料库：王允茂（CBDB 525514）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_YGN9-nAkjXGy20GIqrNnTD
          claim_id: c_ynThMD7eAiGuS9syqT1cXD
          source_id: s_VaUh56VhFazURcjGSEo3na
          stance: supports
          locator: CBDB:525514
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VaUh56VhFazURcjGSEo3na
            source_type: api_record
            title: 中国历代人物传记资料库：王允茂（CBDB 525514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525514&o=json
            external_identifier: CBDB:525514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2cTQgGPzXcKBifKfzBzVdC
        subject_person_id: p_dqbea7KC6b34QnganHGig3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允茂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5L9S66upAzJet6N1wDvWKi
          claim_id: c_2cTQgGPzXcKBifKfzBzVdC
          source_id: s_VaUh56VhFazURcjGSEo3na
          stance: supports
          locator: CBDB:525514
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_v2DHA0-2qJdm-E-2_Oksng
        subject_person_id: p_dqbea7KC6b34QnganHGig3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iC2LMm2r1PH816QULpx83x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gPDnjr-6CZg-HjReYRc97c
          claim_id: c_v2DHA0-2qJdm-E-2_Oksng
          source_id: s_dAZshWLSiskxDPuLNoEjvp
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11449：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dAZshWLSiskxDPuLNoEjvp
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 67812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67812&o=json
            external_identifier: CBDB:67812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iC2LMm2r1PH816QULpx83x
        status: active
        display_name: 王愷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王允茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王允茂，史料所见人物。本项目依据《中国历代人物传记资料库：王允茂（CBDB 525514）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王允茂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_iC2LMm2r1PH816QULpx83x | 王愷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愷（CBDB 67812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67812&o=json)
- [中国历代人物传记资料库：王允茂（CBDB 525514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525514&o=json)
