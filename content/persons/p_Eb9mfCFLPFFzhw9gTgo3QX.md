---
schema: wang-person/v1
id: p_Eb9mfCFLPFFzhw9gTgo3QX
status: active
merged_into: null
display_name: 王仙媛
cbdb_id: 119185
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g4FhQUJyCYGuJ7pHisFatz
        subject_person_id: p_Eb9mfCFLPFFzhw9gTgo3QX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙媛，清人物。中国历代人物传记资料库（CBDB）以人物编号 119185 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_DM2rJ5fp1br9b9juPvo5RG
          claim_id: c_g4FhQUJyCYGuJ7pHisFatz
          source_id: s_swF21nSbL41NpUGgxcABPC
          stance: supports
          locator: CBDB:119185
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_swF21nSbL41NpUGgxcABPC
            source_type: api_record
            title: 中国历代人物传记资料库：王仙媛（CBDB 119185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119185&o=json
            external_identifier: CBDB:119185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KNuJt1Sz391odg2EYVEGzw
        subject_person_id: p_Eb9mfCFLPFFzhw9gTgo3QX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙媛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ESmf5nUsHHPa9yGQ9r7QX5
          claim_id: c_KNuJt1Sz391odg2EYVEGzw
          source_id: s_swF21nSbL41NpUGgxcABPC
          stance: supports
          locator: CBDB:119185
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_swF21nSbL41NpUGgxcABPC
            source_type: api_record
            title: 中国历代人物传记资料库：王仙媛（CBDB 119185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119185&o=json
            external_identifier: CBDB:119185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UL0sr2tkfubel7fqgdGdrz
        subject_person_id: p_Eb9mfCFLPFFzhw9gTgo3QX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iPXqrYEuHo36h64SFwmGYz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZK8B4zzqomgoIg3T1kGkTY
          claim_id: c_UL0sr2tkfubel7fqgdGdrz
          source_id: s_M7OlfMuZthrJG2OOUfpcLS
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3312：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M7OlfMuZthrJG2OOUfpcLS
            source_type: api_record
            title: 中国历代人物传记资料库：韓充（CBDB 119186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119186&o=json
            external_identifier: CBDB:119186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iPXqrYEuHo36h64SFwmGYz
        status: active
        display_name: 韓充
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王仙媛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仙媛，清人物。中国历代人物传记资料库（CBDB）以人物编号 119185 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仙媛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_iPXqrYEuHo36h64SFwmGYz | 韓充 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓充（CBDB 119186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119186&o=json)
- [中国历代人物传记资料库：王仙媛（CBDB 119185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119185&o=json)
