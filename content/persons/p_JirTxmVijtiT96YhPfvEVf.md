---
schema: wang-person/v1
id: p_JirTxmVijtiT96YhPfvEVf
status: active
merged_into: null
display_name: 王宗恆
cbdb_id: 202460
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x721uqbbfL2JRFN2Je7xZJ
        subject_person_id: p_JirTxmVijtiT96YhPfvEVf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗恆（生于1499年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202460 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_785BiIrfFP5i1gN8gnxP-Y
          claim_id: c_x721uqbbfL2JRFN2Je7xZJ
          source_id: s_6rrWGrqxVRH3yWF643SvzL
          stance: supports
          locator: CBDB:202460
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_6rrWGrqxVRH3yWF643SvzL
            source_type: api_record
            title: 中国历代人物传记资料库：王宗恆（CBDB 202460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202460&o=json
            external_identifier: CBDB:202460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YVRgAZJDb1wxwHmavEtyyx
        subject_person_id: p_JirTxmVijtiT96YhPfvEVf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1499年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1499-01-01
            latest: 1499-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MRyFiTLzakcs1NEoxLMme5
          claim_id: c_YVRgAZJDb1wxwHmavEtyyx
          source_id: s_6rrWGrqxVRH3yWF643SvzL
          stance: supports
          locator: CBDB:202460
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1499
          source:
            id: s_6rrWGrqxVRH3yWF643SvzL
            source_type: api_record
            title: 中国历代人物传记资料库：王宗恆（CBDB 202460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202460&o=json
            external_identifier: CBDB:202460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J5MjF3DgFQZsL923njcMKe
        subject_person_id: p_JirTxmVijtiT96YhPfvEVf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eFJd7XStVBUMTDdrisejxF
          claim_id: c_J5MjF3DgFQZsL923njcMKe
          source_id: s_6rrWGrqxVRH3yWF643SvzL
          stance: supports
          locator: CBDB:202460
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1499
          source:
            id: s_6rrWGrqxVRH3yWF643SvzL
            source_type: api_record
            title: 中国历代人物传记资料库：王宗恆（CBDB 202460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202460&o=json
            external_identifier: CBDB:202460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_n30UIh46FYvzlvE88kEzft
        subject_person_id: p_ADb1WnrvjDNFbmCmqiRMmL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JirTxmVijtiT96YhPfvEVf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRNVr8k1DC6rbj8cdwEJj3
          claim_id: c_n30UIh46FYvzlvE88kEzft
          source_id: s_LMVSwWt752xYHrDjeoHf6D
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LMVSwWt752xYHrDjeoHf6D
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 288558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288558&o=json
            external_identifier: CBDB:288558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ADb1WnrvjDNFbmCmqiRMmL
        status: active
        display_name: 王旭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宗恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗恆（生于1499年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202460 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1499年 | accepted |
| name.primary | 王宗恆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ADb1WnrvjDNFbmCmqiRMmL | 王旭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旭（CBDB 288558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288558&o=json)
- [中国历代人物传记资料库：王宗恆（CBDB 202460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202460&o=json)
