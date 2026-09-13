---
schema: wang-person/v1
id: p_CCMccR4P954q1f51XxRvrB
status: active
merged_into: null
display_name: 王仕昂
cbdb_id: 233967
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KLgb39Kq5WNUJC7SVCHHVM
        subject_person_id: p_CCMccR4P954q1f51XxRvrB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕昂，史料所见人物。本项目依据《中国历代人物传记资料库：王仕昂（CBDB 233967）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QUG0lI1pWRXf1PBBCJaXuV
          claim_id: c_KLgb39Kq5WNUJC7SVCHHVM
          source_id: s_cV45fMwS4excYgkeT5Ei1i
          stance: supports
          locator: CBDB:233967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_cV45fMwS4excYgkeT5Ei1i
            source_type: api_record
            title: 中国历代人物传记资料库：王仕昂（CBDB 233967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233967&o=json
            external_identifier: CBDB:233967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xJvNGSv4x98L5FerresV85
        subject_person_id: p_CCMccR4P954q1f51XxRvrB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕昂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hxmDxmYAAvYTUEtX24TQcY
          claim_id: c_xJvNGSv4x98L5FerresV85
          source_id: s_cV45fMwS4excYgkeT5Ei1i
          stance: supports
          locator: CBDB:233967
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
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
        id: c_1ozKslg5NrVYAj6-jtnLu8
        subject_person_id: p_CCMccR4P954q1f51XxRvrB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vV52H1GLe4mb587k9pj5Z2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y_fCOmO3U5pflBqpvGi3LC
          claim_id: c_1ozKslg5NrVYAj6-jtnLu8
          source_id: s_cV45fMwS4excYgkeT5Ei1i
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cV45fMwS4excYgkeT5Ei1i
            source_type: api_record
            title: 中国历代人物传记资料库：王仕昂（CBDB 233967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233967&o=json
            external_identifier: CBDB:233967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vV52H1GLe4mb587k9pj5Z2
        status: active
        display_name: 王聘
        merged_into_person_id: null
  other: []
---

# 王仕昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仕昂，史料所见人物。本项目依据《中国历代人物传记资料库：王仕昂（CBDB 233967）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仕昂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vV52H1GLe4mb587k9pj5Z2 | 王聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仕昂（CBDB 233967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233967&o=json)
