---
schema: wang-person/v1
id: p_wfaxHP5LJwbenZEB2jvmAJ
status: active
merged_into: null
display_name: 王蓮光
cbdb_id: 100067
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n9ZLKLaWxRus9h4zCATd4M
        subject_person_id: p_wfaxHP5LJwbenZEB2jvmAJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓮光，史料所见人物。本项目依据《中国历代人物传记资料库：王蓮光（CBDB 100067）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_tYMp4Ygg4WG07_ayuSvAzu
          claim_id: c_n9ZLKLaWxRus9h4zCATd4M
          source_id: s_nZEMJo6qV22j6Gn7CYpPu3
          stance: supports
          locator: CBDB:100067
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nZEMJo6qV22j6Gn7CYpPu3
            source_type: api_record
            title: 中国历代人物传记资料库：王蓮光（CBDB 100067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100067&o=json
            external_identifier: CBDB:100067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bMF5WbNUqKPKeR8D6sPTFA
        subject_person_id: p_wfaxHP5LJwbenZEB2jvmAJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓮光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C3SbimRpjBQz5TsPEjiKDY
          claim_id: c_bMF5WbNUqKPKeR8D6sPTFA
          source_id: s_nZEMJo6qV22j6Gn7CYpPu3
          stance: supports
          locator: CBDB:100067
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 清
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
        id: c_l42TUUxaczdE4INwg_ZGIs
        subject_person_id: p_wfaxHP5LJwbenZEB2jvmAJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_D4VMCiG3aEhFFp6L5L4vEf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0-DKFHMWUiRAmN89n4u3GX
          claim_id: c_l42TUUxaczdE4INwg_ZGIs
          source_id: s_pMblQPYvEI_qXHtcuZD0Qt
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1784, HuWenKai #254：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pMblQPYvEI_qXHtcuZD0Qt
            source_type: api_record
            title: 中国历代人物传记资料库：高雲（CBDB 87236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=87236&o=json
            external_identifier: CBDB:87236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D4VMCiG3aEhFFp6L5L4vEf
        status: active
        display_name: 高雲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王蓮光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蓮光，史料所见人物。本项目依据《中国历代人物传记资料库：王蓮光（CBDB 100067）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王蓮光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_D4VMCiG3aEhFFp6L5L4vEf | 高雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：高雲（CBDB 87236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=87236&o=json)
- [中国历代人物传记资料库：王蓮光（CBDB 100067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100067&o=json)
