---
schema: wang-person/v1
id: p_jmJMKk4hxjP633ncw7da1H
status: active
merged_into: null
display_name: 王鐸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RNj4JdpPUijAuztHMsGugU
        subject_person_id: p_jmJMKk4hxjP633ncw7da1H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q32mrKEo7u8sc6wwdybhVU
          claim_id: c_RNj4JdpPUijAuztHMsGugU
          source_id: s_X1epEuKrm64YG7f8hA4ncT
          stance: supports
          locator: CBDB:214279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214279）
          source: &a1
            id: s_X1epEuKrm64YG7f8hA4ncT
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 214279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214279&o=json
            external_identifier: CBDB:214279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RPVgydNbSJ5owvbK5Jobo6
        subject_person_id: p_jmJMKk4hxjP633ncw7da1H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。萬曆二年進士，曾任州同知。（中国历代人物传记资料库 CBDB 214279）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3pB3Tbry_c4ap4iQnGRSOj
          claim_id: c_RPVgydNbSJ5owvbK5Jobo6
          source_id: s_X1epEuKrm64YG7f8hA4ncT
          stance: supports
          locator: CBDB:214279
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_a_sz1-KMpPd_9goq_45QPR
        subject_person_id: p_jmJMKk4hxjP633ncw7da1H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JfOAaM8XVey_RIbQAYCymm
          claim_id: c_a_sz1-KMpPd_9goq_45QPR
          source_id: s_X1epEuKrm64YG7f8hA4ncT
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百一十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nZ6oVMjM9PndsMQA7hdBnN
        status: active
        display_name: 王致中
        merged_into_person_id: null
  other: []
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。萬曆二年進士，曾任州同知。（中国历代人物传记资料库 CBDB 214279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nZ6oVMjM9PndsMQA7hdBnN | 王致中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 214279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214279&o=json)
