---
schema: wang-person/v1
id: p_D3a6ys1WW9Fr6DZXPLMYia
status: active
merged_into: null
display_name: 王御
cbdb_id: 54316
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U3zZZy986Lx7LeJEbM9kqa
        subject_person_id: p_D3a6ys1WW9Fr6DZXPLMYia
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王御，清人物。中国历代人物传记资料库（CBDB）以人物编号 54316 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_uuvYGN9KoGH_aRPSphlR99
          claim_id: c_U3zZZy986Lx7LeJEbM9kqa
          source_id: s_KpLgtt1NzJPBtAc719eVZL
          stance: supports
          locator: CBDB:54316
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_KpLgtt1NzJPBtAc719eVZL
            source_type: api_record
            title: 中国历代人物传记资料库：王御（CBDB 54316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54316&o=json
            external_identifier: CBDB:54316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4vSb2sBfmuWHAU9S4WSfU9
        subject_person_id: p_D3a6ys1WW9Fr6DZXPLMYia
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王御
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aK7QycJTVFA85SSUm47cyN
          claim_id: c_4vSb2sBfmuWHAU9S4WSfU9
          source_id: s_KpLgtt1NzJPBtAc719eVZL
          stance: supports
          locator: CBDB:54316
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_KpLgtt1NzJPBtAc719eVZL
            source_type: api_record
            title: 中国历代人物传记资料库：王御（CBDB 54316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54316&o=json
            external_identifier: CBDB:54316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
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
        id: c_-PniC8bS24gaL-tQCjUmsr
        subject_person_id: p_D3a6ys1WW9Fr6DZXPLMYia
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ErxZwV2BfCn4t752YkW9gq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gOCB28C5GiWNOMLzVbSJF
          claim_id: c_-PniC8bS24gaL-tQCjUmsr
          source_id: s_a0xiPiM-vOeCnZ9CMciusn
          stance: supports
          locator: CBDB 双向互证（妻子 汪紉）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a0xiPiM-vOeCnZ9CMciusn
            source_type: api_record
            title: 中国历代人物传记资料库：汪紉（CBDB 54312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54312&o=json
            external_identifier: CBDB:54312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ErxZwV2BfCn4t752YkW9gq
        status: active
        display_name: 汪紉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王御

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王御，清人物。中国历代人物传记资料库（CBDB）以人物编号 54316 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王御 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ErxZwV2BfCn4t752YkW9gq | 汪紉 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪紉（CBDB 54312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54312&o=json)
- [中国历代人物传记资料库：王御（CBDB 54316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54316&o=json)
