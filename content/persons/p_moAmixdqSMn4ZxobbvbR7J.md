---
schema: wang-person/v1
id: p_moAmixdqSMn4ZxobbvbR7J
status: active
merged_into: null
display_name: 王堯善
cbdb_id: 26316
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5CyfzWctTrEKK27TNvxC8E
        subject_person_id: p_moAmixdqSMn4ZxobbvbR7J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯善，宋人物。中国历代人物传记资料库（CBDB）以人物编号 26316 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_N2jdHfBobcZSx5SpO5rYpS
          claim_id: c_5CyfzWctTrEKK27TNvxC8E
          source_id: s_bi6CU1MmHYNe84MMW1cxfQ
          stance: supports
          locator: CBDB:26316
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_bi6CU1MmHYNe84MMW1cxfQ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯善（CBDB 26316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26316&o=json
            external_identifier: CBDB:26316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFAJKrmquMx3nQ24xnmkt5
        subject_person_id: p_moAmixdqSMn4ZxobbvbR7J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VifRms7W9n8vLTjUX9bieZ
          claim_id: c_JFAJKrmquMx3nQ24xnmkt5
          source_id: s_bi6CU1MmHYNe84MMW1cxfQ
          stance: supports
          locator: CBDB:26316
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_bi6CU1MmHYNe84MMW1cxfQ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯善（CBDB 26316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26316&o=json
            external_identifier: CBDB:26316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
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
        id: c_ZCbG1_8OaefhEx_pQOaMM1
        subject_person_id: p_moAmixdqSMn4ZxobbvbR7J
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jWx75rapLkYprHwP2iDeee
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T6AFgu2u2qqaZ5U9RmRWBV
          claim_id: c_ZCbG1_8OaefhEx_pQOaMM1
          source_id: s_QepNa7Pgrlkvsj2TANAf6f
          stance: supports
          locator: CBDB 双向互证（妻子 張太君）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QepNa7Pgrlkvsj2TANAf6f
            source_type: api_record
            title: 中国历代人物传记资料库：張太君（CBDB 34086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34086&o=json
            external_identifier: CBDB:34086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jWx75rapLkYprHwP2iDeee
        status: active
        display_name: 張太君
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_q9pgx1xIxfuHffYIYHWmR8
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_moAmixdqSMn4ZxobbvbR7J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EK9ew71TfJI_E8I_V54A-C
          claim_id: c_q9pgx1xIxfuHffYIYHWmR8
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王堯善 ⇄ 曾祖 王審琦）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_kXDqY3oX1V5PnHzqot3UVv
            source_type: api_record
            title: 中国历代人物传记资料库：王審琦（CBDB 3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3FwfmVLuawARCoZyhyo5mg
        status: active
        display_name: 王審琦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王堯善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堯善，宋人物。中国历代人物传记资料库（CBDB）以人物编号 26316 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王堯善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jWx75rapLkYprHwP2iDeee | 張太君 | accepted |
| ancestors | p_3FwfmVLuawARCoZyhyo5mg | 王審琦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王審琦（CBDB 3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
- [中国历代人物传记资料库：王堯善（CBDB 26316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26316&o=json)
- [中国历代人物传记资料库：張太君（CBDB 34086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34086&o=json)
