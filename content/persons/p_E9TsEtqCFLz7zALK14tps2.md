---
schema: wang-person/v1
id: p_E9TsEtqCFLz7zALK14tps2
status: active
merged_into: null
display_name: 王仲銘
cbdb_id: 254105
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kKeFZmhPm2utQXJpsqVEPp
        subject_person_id: p_E9TsEtqCFLz7zALK14tps2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲銘，史料所见人物。本项目依据《中国历代人物传记资料库：王仲銘（CBDB 254105）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_06fRzR8e3DfsfKdu7ffeVS
          claim_id: c_kKeFZmhPm2utQXJpsqVEPp
          source_id: s_KbbyYNwJUhYctPD7Y5j6TG
          stance: supports
          locator: CBDB:254105
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KbbyYNwJUhYctPD7Y5j6TG
            source_type: api_record
            title: 中国历代人物传记资料库：王仲銘（CBDB 254105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254105&o=json
            external_identifier: CBDB:254105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ixLRhvDBdPDwRcNMPMNp15
        subject_person_id: p_E9TsEtqCFLz7zALK14tps2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aAZ6ppHaqS2u3kizDHoH1k
          claim_id: c_ixLRhvDBdPDwRcNMPMNp15
          source_id: s_KbbyYNwJUhYctPD7Y5j6TG
          stance: supports
          locator: CBDB:254105
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_j4vOxvdMCG-E4Elcc0RLGX
        subject_person_id: p_E9TsEtqCFLz7zALK14tps2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wsq8Np6cTO_mnUIpnOus5r
          claim_id: c_j4vOxvdMCG-E4Elcc0RLGX
          source_id: s_QPr5EUKVLbTNH9qryNyKZR
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第二甲第二十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QPr5EUKVLbTNH9qryNyKZR
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 126625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126625&o=json
            external_identifier: CBDB:126625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AUQVWk8JE4APmBfj8pSMKj
        status: active
        display_name: 王高
        merged_into_person_id: null
  other: []
---

# 王仲銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲銘，史料所见人物。本项目依据《中国历代人物传记资料库：王仲銘（CBDB 254105）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仲銘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AUQVWk8JE4APmBfj8pSMKj | 王高 | accepted |

## 外部来源

- [中国历代人物传记资料库：王高（CBDB 126625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126625&o=json)
- [中国历代人物传记资料库：王仲銘（CBDB 254105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254105&o=json)
