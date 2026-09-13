---
schema: wang-person/v1
id: p_E2rBbuizHNK8QeP8wk5K9a
status: active
merged_into: null
display_name: 王彥全
cbdb_id: 268918
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_za4f5E2PMhV2Xrv9TvwqPE
        subject_person_id: p_E2rBbuizHNK8QeP8wk5K9a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥全，史料所见人物。本项目依据《中国历代人物传记资料库：王彥全（CBDB 268918）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_goltTmeneS1ZzBAjV3TMA1
          claim_id: c_za4f5E2PMhV2Xrv9TvwqPE
          source_id: s_wpMUftCTU36QYwkKBUyc4v
          stance: supports
          locator: CBDB:268918
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wpMUftCTU36QYwkKBUyc4v
            source_type: api_record
            title: 中国历代人物传记资料库：王彥全（CBDB 268918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268918&o=json
            external_identifier: CBDB:268918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F7VgU6t1u9Jc4UqDZvK2F2
        subject_person_id: p_E2rBbuizHNK8QeP8wk5K9a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DeSE1hwbFVPAeou9u5keJM
          claim_id: c_F7VgU6t1u9Jc4UqDZvK2F2
          source_id: s_wpMUftCTU36QYwkKBUyc4v
          stance: supports
          locator: CBDB:268918
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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
        id: c_JWoKvLJovsLt3EyHsaNgyN
        subject_person_id: p_E2rBbuizHNK8QeP8wk5K9a
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qFRgEplOMwe9d1Oi8FZwYR
          claim_id: c_JWoKvLJovsLt3EyHsaNgyN
          source_id: s_LGyeE5TDnWyhmnVTgaqgAC
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LGyeE5TDnWyhmnVTgaqgAC
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 201213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201213&o=json
            external_identifier: CBDB:201213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BNDHcwrQU46tvDsz7UJKUr
        status: active
        display_name: 王璽
        merged_into_person_id: null
  other: []
---

# 王彥全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥全，史料所见人物。本项目依据《中国历代人物传记资料库：王彥全（CBDB 268918）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王彥全 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BNDHcwrQU46tvDsz7UJKUr | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 201213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201213&o=json)
- [中国历代人物传记资料库：王彥全（CBDB 268918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268918&o=json)
