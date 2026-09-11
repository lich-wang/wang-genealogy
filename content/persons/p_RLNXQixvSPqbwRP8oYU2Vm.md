---
schema: wang-person/v1
id: p_RLNXQixvSPqbwRP8oYU2Vm
status: active
merged_into: null
display_name: 王佃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6BRGWtGK1mv8GhcwKMw8yM
        subject_person_id: p_RLNXQixvSPqbwRP8oYU2Vm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tRQR799fnVQLD1P31ejfMX
          claim_id: c_6BRGWtGK1mv8GhcwKMw8yM
          source_id: s_2qdtiKzRaUx7gTPw7eYsYy
          stance: supports
          locator: CBDB:22030
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22030）
          source: &a1
            id: s_2qdtiKzRaUx7gTPw7eYsYy
            source_type: api_record
            title: 中国历代人物传记资料库：王佃（CBDB 22030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22030&o=json
            external_identifier: CBDB:22030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F5pF4fFZ61euqZ8w99DUcP
        subject_person_id: p_RLNXQixvSPqbwRP8oYU2Vm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佃，宋人物。籍贯瑞安，入仕封贈。（中国历代人物传记资料库 CBDB 22030）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y7hLuDYJBrPsFCD2beafbK
          claim_id: c_F5pF4fFZ61euqZ8w99DUcP
          source_id: s_2qdtiKzRaUx7gTPw7eYsYy
          stance: supports
          locator: CBDB:22030
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NZ4-gZqdOGrouTjXruAQwl
        subject_person_id: p_iq4QDMRpKcuqHeVKQqf7py
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RLNXQixvSPqbwRP8oYU2Vm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_05voUmEdBAg_yVc4CWcJGb
          claim_id: c_NZ4-gZqdOGrouTjXruAQwl
          source_id: s_F3tMhYECPoks3dMcS791Fu
          stance: supports
          locator: CBDB 双向互证（子 王佃 ⇄ 父 王霈）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_F3tMhYECPoks3dMcS791Fu
            source_type: api_record
            title: 中国历代人物传记资料库：王霈（CBDB 22029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22029&o=json
            external_identifier: CBDB:22029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iq4QDMRpKcuqHeVKQqf7py
        status: active
        display_name: 王霈
        merged_into_person_id: null
  children:
    - claim:
        id: c_V1Iisnz-E4eF0OzEGUW3kS
        subject_person_id: p_RLNXQixvSPqbwRP8oYU2Vm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FLRNr2s2S3aw1HjTCWwohF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKdTuDCbWmkR9nW5SGtCXP
          claim_id: c_V1Iisnz-E4eF0OzEGUW3kS
          source_id: s_WTf5GzdZzkK4wSb2kYEujP
          stance: supports
          locator: CBDB 双向互证（父 王佃 ⇄ 子 王回）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_WTf5GzdZzkK4wSb2kYEujP
            source_type: api_record
            title: 中国历代人物传记资料库：王回（CBDB 22031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22031&o=json
            external_identifier: CBDB:22031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FLRNr2s2S3aw1HjTCWwohF
        status: active
        display_name: 王回
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佃 | accepted |
| bio.summary | 王佃，宋人物。籍贯瑞安，入仕封贈。（中国历代人物传记资料库 CBDB 22030） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iq4QDMRpKcuqHeVKQqf7py | 王霈 | accepted |
| children | p_FLRNr2s2S3aw1HjTCWwohF | 王回 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佃（CBDB 22030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22030&o=json)
- [中国历代人物传记资料库：王回（CBDB 22031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22031&o=json)
- [中国历代人物传记资料库：王霈（CBDB 22029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22029&o=json)
