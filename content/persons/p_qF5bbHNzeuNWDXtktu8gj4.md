---
schema: wang-person/v1
id: p_qF5bbHNzeuNWDXtktu8gj4
status: active
merged_into: null
display_name: 王仲景
cbdb_id: 121863
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sCv2Z6w5qAAuaFt9C5X5HM
        subject_person_id: p_qF5bbHNzeuNWDXtktu8gj4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲景，史料所见人物。本项目依据《中国历代人物传记资料库：王仲景（CBDB 121863）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_dRynu9EptXDIccR0fcYF1B
          claim_id: c_sCv2Z6w5qAAuaFt9C5X5HM
          source_id: s_nyKUWVbdRwnKXjKb7QCda8
          stance: supports
          locator: CBDB:121863
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nyKUWVbdRwnKXjKb7QCda8
            source_type: api_record
            title: 中国历代人物传记资料库：王仲景（CBDB 121863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121863&o=json
            external_identifier: CBDB:121863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wKRDydsKhQNY2UQ3comQP9
        subject_person_id: p_qF5bbHNzeuNWDXtktu8gj4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_grJ8ysKPPURn39f72bHB4F
          claim_id: c_wKRDydsKhQNY2UQ3comQP9
          source_id: s_nyKUWVbdRwnKXjKb7QCda8
          stance: supports
          locator: CBDB:121863
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TCBFELLkRf741pUQ7eOYS-
        subject_person_id: p_qF5bbHNzeuNWDXtktu8gj4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zFW1do9QTZ8vsPwC4vN1Vq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eWzvM4W8cbQWWRvMIqexSx
          claim_id: c_TCBFELLkRf741pUQ7eOYS-
          source_id: s_FyrElbkf5hwNXEHOyHHoH_
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4332：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FyrElbkf5hwNXEHOyHHoH_
            source_type: api_record
            title: 中国历代人物传记资料库：陳慧貞（CBDB 121861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121861&o=json
            external_identifier: CBDB:121861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zFW1do9QTZ8vsPwC4vN1Vq
        status: active
        display_name: 陳慧貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王仲景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲景，史料所见人物。本项目依据《中国历代人物传记资料库：王仲景（CBDB 121863）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仲景 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_zFW1do9QTZ8vsPwC4vN1Vq | 陳慧貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳慧貞（CBDB 121861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121861&o=json)
- [中国历代人物传记资料库：王仲景（CBDB 121863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121863&o=json)
