---
schema: wang-person/v1
id: p_MJhP1yFLnhK4DCVH2JD1UB
status: active
merged_into: null
display_name: 王質安
cbdb_id: 221571
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HhZFWaJob7kRXczKi6MTXP
        subject_person_id: p_MJhP1yFLnhK4DCVH2JD1UB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質安，史料所见人物。本项目依据《中国历代人物传记资料库：王質安（CBDB 221571）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_HIdqtlt26tQwm5xTyvaXRJ
          claim_id: c_HhZFWaJob7kRXczKi6MTXP
          source_id: s_KtWFxnF3xSJEr6ykrLSCQj
          stance: supports
          locator: CBDB:221571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KtWFxnF3xSJEr6ykrLSCQj
            source_type: api_record
            title: 中国历代人物传记资料库：王質安（CBDB 221571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221571&o=json
            external_identifier: CBDB:221571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HaT9n1X1Uub8a2Rx4u5Zr
        subject_person_id: p_MJhP1yFLnhK4DCVH2JD1UB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_m4z6QVENyFee23EuNWVHBu
          claim_id: c_4HaT9n1X1Uub8a2Rx4u5Zr
          source_id: s_KtWFxnF3xSJEr6ykrLSCQj
          stance: supports
          locator: CBDB:221571
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_gAo8JGuj8ePqF8ZtfZt0K8
        subject_person_id: p_MJhP1yFLnhK4DCVH2JD1UB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AWfoQNeEqcpKxq-6XhaWl6
          claim_id: c_gAo8JGuj8ePqF8ZtfZt0K8
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_USNXCoUtmKiaD7MqB2q9Qs
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 126851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json
            external_identifier: CBDB:126851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hnvFbFQMD3qoDJL59kCJv1
        status: active
        display_name: 王應麟
        merged_into_person_id: null
  other: []
---

# 王質安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王質安，史料所见人物。本项目依据《中国历代人物传记资料库：王質安（CBDB 221571）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王質安 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hnvFbFQMD3qoDJL59kCJv1 | 王應麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應麟（CBDB 126851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json)
- [中国历代人物传记资料库：王質安（CBDB 221571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221571&o=json)
