---
schema: wang-person/v1
id: p_xkQQ6LhKV3VL7Q558EBymV
status: active
merged_into: null
display_name: 王宜生
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AwSH4ipa447QK9XWrBYdJz
        subject_person_id: p_xkQQ6LhKV3VL7Q558EBymV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iBrmyq5bSnDE793qpvrGqH
          claim_id: c_AwSH4ipa447QK9XWrBYdJz
          source_id: s_k5oLJFfnrDbYMsmmYYqo92
          stance: supports
          locator: CBDB:573322
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573322）
          source: &a1
            id: s_k5oLJFfnrDbYMsmmYYqo92
            source_type: api_record
            title: 中国历代人物传记资料库：王宜生（CBDB 573322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573322&o=json
            external_identifier: CBDB:573322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j5RsYYTKXBdL4UcFuKgwQ8
        subject_person_id: p_xkQQ6LhKV3VL7Q558EBymV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜生，史料所见人物。本项目依据《中国历代人物传记资料库：王宜生（CBDB 573322）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4tD80vM7XzzvMAmypVIRbj
          claim_id: c_j5RsYYTKXBdL4UcFuKgwQ8
          source_id: s_k5oLJFfnrDbYMsmmYYqo92
          stance: supports
          locator: CBDB:573322
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
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
        id: c_nmTDyKgLYf9JbB0Z6zH8Yf
        subject_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xkQQ6LhKV3VL7Q558EBymV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uil0zuG9R9_OvEgLaCHe_E
          claim_id: c_nmTDyKgLYf9JbB0Z6zH8Yf
          source_id: s_k5oLJFfnrDbYMsmmYYqo92
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oBg2fph2HQeUi63Z2hsgrx
        status: active
        display_name: 王壽卿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宜生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜生 | accepted |
| bio.summary | 王宜生，史料所见人物。本项目依据《中国历代人物传记资料库：王宜生（CBDB 573322）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_oBg2fph2HQeUi63Z2hsgrx | 王壽卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宜生（CBDB 573322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573322&o=json)
