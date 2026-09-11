---
schema: wang-person/v1
id: p_17a7h6QnbHXFMMvBUxCLbB
status: active
merged_into: null
display_name: 王子韶
cbdb_id: 7383
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mWMnc1LjHat6tNTGJEA8Sq
        subject_person_id: p_17a7h6QnbHXFMMvBUxCLbB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子韶，宋人物。中国历代人物传记资料库（CBDB）以人物编号 7383 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_9eRhKEjLIbWavjyBVMwi_Q
          claim_id: c_mWMnc1LjHat6tNTGJEA8Sq
          source_id: s_XViBeMrtnicTmPiD137BKi
          stance: supports
          locator: CBDB:7383
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_XViBeMrtnicTmPiD137BKi
            source_type: api_record
            title: 中国历代人物传记资料库：王子韶（CBDB 7383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7383&o=json
            external_identifier: CBDB:7383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1zy955H3tt4UrZguNfBH7i
        subject_person_id: p_17a7h6QnbHXFMMvBUxCLbB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GEMeLassUDRYowtGKKyZ7m
          claim_id: c_1zy955H3tt4UrZguNfBH7i
          source_id: s_XViBeMrtnicTmPiD137BKi
          stance: supports
          locator: CBDB:7383
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_XViBeMrtnicTmPiD137BKi
            source_type: api_record
            title: 中国历代人物传记资料库：王子韶（CBDB 7383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7383&o=json
            external_identifier: CBDB:7383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Prc3xRA0_hoqDHp3E_tY3M
        subject_person_id: p_17a7h6QnbHXFMMvBUxCLbB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CqWcVYSg6WmAq3fUD5F7RT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gJ0vGH23growquyHrrX33g
          claim_id: c_Prc3xRA0_hoqDHp3E_tY3M
          source_id: s_Vk1EZ2Sn4WSAXWmtzGB526
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vk1EZ2Sn4WSAXWmtzGB526
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 119723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119723&o=json
            external_identifier: CBDB:119723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CqWcVYSg6WmAq3fUD5F7RT
        status: active
        display_name: 王相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子韶，宋人物。中国历代人物传记资料库（CBDB）以人物编号 7383 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子韶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CqWcVYSg6WmAq3fUD5F7RT | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 119723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119723&o=json)
- [中国历代人物传记资料库：王子韶（CBDB 7383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7383&o=json)
