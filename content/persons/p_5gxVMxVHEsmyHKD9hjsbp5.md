---
schema: wang-person/v1
id: p_5gxVMxVHEsmyHKD9hjsbp5
status: active
merged_into: null
display_name: 王晉和
cbdb_id: 335475
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qG4aA5CrGbu1xtsdwxFxtF
        subject_person_id: p_5gxVMxVHEsmyHKD9hjsbp5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉和，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 335475）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3CX8vd-L6bHAg460ORI89V
          claim_id: c_qG4aA5CrGbu1xtsdwxFxtF
          source_id: s_dLENbaLCZ1adAPHdiFk5xy
          stance: supports
          locator: CBDB:335475
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dLENbaLCZ1adAPHdiFk5xy
            source_type: api_record
            title: 中国历代人物传记资料库：王晉和（CBDB 335475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335475&o=json
            external_identifier: CBDB:335475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vd1pHBnHr9dauG74EfS4Xt
        subject_person_id: p_5gxVMxVHEsmyHKD9hjsbp5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PaPppLCGRqphzgdGPibasZ
          claim_id: c_Vd1pHBnHr9dauG74EfS4Xt
          source_id: s_dLENbaLCZ1adAPHdiFk5xy
          stance: supports
          locator: CBDB:335475
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_olIyo3YMos-CfvRJOHKjiI
        subject_person_id: p_5gxVMxVHEsmyHKD9hjsbp5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WprvJwzSOPmCKVwcxxIoew
          claim_id: c_olIyo3YMos-CfvRJOHKjiI
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G5Q12QpxwABQ4p3YD5nNDm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汲（CBDB 126494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json
            external_identifier: CBDB:126494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BzK6A2uXvZyrjjgruuh1Qh
        status: active
        display_name: 王用汲
        merged_into_person_id: null
  other: []
---

# 王晉和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晉和，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 335475） | accepted |
| name.primary | 王晉和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BzK6A2uXvZyrjjgruuh1Qh | 王用汲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晉和（CBDB 335475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335475&o=json)
- [中国历代人物传记资料库：王用汲（CBDB 126494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json)
