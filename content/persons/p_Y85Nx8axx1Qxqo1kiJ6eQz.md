---
schema: wang-person/v1
id: p_Y85Nx8axx1Qxqo1kiJ6eQz
status: active
merged_into: null
display_name: 王惠清
cbdb_id: 166178
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uBaME4Y85E8KY58MhrwUAS
        subject_person_id: p_Y85Nx8axx1Qxqo1kiJ6eQz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠清，史料所见人物。本项目依据《中国历代人物传记资料库：王惠清（CBDB 166178）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_UZOJ9xb31jgWnxf_7eDiQ4
          claim_id: c_uBaME4Y85E8KY58MhrwUAS
          source_id: s_Q1Y69gfDdQcL9z2xhbGgGH
          stance: supports
          locator: CBDB:166178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Q1Y69gfDdQcL9z2xhbGgGH
            source_type: api_record
            title: 中国历代人物传记资料库：王惠清（CBDB 166178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166178&o=json
            external_identifier: CBDB:166178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UVF5pbhEL4mwEw88gLSNF6
        subject_person_id: p_Y85Nx8axx1Qxqo1kiJ6eQz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pvZ24SGRdYXNsyu8wRcoV2
          claim_id: c_UVF5pbhEL4mwEw88gLSNF6
          source_id: s_Q1Y69gfDdQcL9z2xhbGgGH
          stance: supports
          locator: CBDB:166178
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
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
  descendants: []
  other:
    - claim:
        id: c_WyGxa5MFqapiWBKNs8gND5
        subject_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y85Nx8axx1Qxqo1kiJ6eQz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ueVoFDVVqqYQTTInvorJCC
          claim_id: c_WyGxa5MFqapiWBKNs8gND5
          source_id: s_KfYlAIxMzomWQ-eSO5K5eZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 143282 王叔寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KfYlAIxMzomWQ-eSO5K5eZ
            source_type: api_record
            title: 中国历代人物传记资料库：王惠清（CBDB 166178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166178&o=json
            external_identifier: CBDB:166178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M8Qroy5aQXLqDgMFtrbejw
        status: active
        display_name: 王叔寧
        merged_into_person_id: null
---

# 王惠清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惠清，史料所见人物。本项目依据《中国历代人物传记资料库：王惠清（CBDB 166178）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王惠清 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_M8Qroy5aQXLqDgMFtrbejw | 王叔寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠清（CBDB 166178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166178&o=json)
