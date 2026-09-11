---
schema: wang-person/v1
id: p_H3nYPzPtFcmw5YUiGcy29G
status: active
merged_into: null
display_name: 王月
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D9sT1u135ahs4DMDbcYisi
        subject_person_id: p_H3nYPzPtFcmw5YUiGcy29G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王月
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AFwdcNypiGVDopq761Wvn2
          claim_id: c_D9sT1u135ahs4DMDbcYisi
          source_id: s_uc4EHpVuR9NzKiPCPN42xo
          stance: supports
          locator: CBDB:122371
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122371）
          source: &a1
            id: s_uc4EHpVuR9NzKiPCPN42xo
            source_type: api_record
            title: 中国历代人物传记资料库：王月（CBDB 122371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122371&o=json
            external_identifier: CBDB:122371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R1AGJqkPAZaRs2tTn9KJUi
        subject_person_id: p_H3nYPzPtFcmw5YUiGcy29G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王月，史料所见人物。本项目依据《中国历代人物传记资料库：王月（CBDB 122371）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bWJkptX26D8C6Mk0n0Ds2x
          claim_id: c_R1AGJqkPAZaRs2tTn9KJUi
          source_id: s_uc4EHpVuR9NzKiPCPN42xo
          stance: supports
          locator: CBDB:122371
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_2tiFKwmXkUsIf94VnwfhnW
        subject_person_id: p_H3nYPzPtFcmw5YUiGcy29G
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TfkZwBJbK1DQXQmhhMQHNe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tOercxIisOiOSW6rH8KsTU
          claim_id: c_2tiFKwmXkUsIf94VnwfhnW
          source_id: s_qGjAlLdWxou6g1j6xFVQzX
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4960：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qGjAlLdWxou6g1j6xFVQzX
            source_type: api_record
            title: 中国历代人物传记资料库：蔡香君（CBDB 122375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122375&o=json
            external_identifier: CBDB:122375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TfkZwBJbK1DQXQmhhMQHNe
        status: active
        display_name: 蔡香君
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王月 | accepted |
| bio.summary | 王月，史料所见人物。本项目依据《中国历代人物传记资料库：王月（CBDB 122371）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_TfkZwBJbK1DQXQmhhMQHNe | 蔡香君 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡香君（CBDB 122375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122375&o=json)
- [中国历代人物传记资料库：王月（CBDB 122371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122371&o=json)
