---
schema: wang-person/v1
id: p_xcrGmijNB771TkwNLsnXeF
status: active
merged_into: null
display_name: 王廷珤
cbdb_id: 341914
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MGPaGBuxYaYvGZzXwmseTW
        subject_person_id: p_xcrGmijNB771TkwNLsnXeF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷珤，史料所见人物。本项目依据《中国历代人物传记资料库：王廷珤（CBDB 341914）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ZexX5jOWMM03AgJGM2KV7R
          claim_id: c_MGPaGBuxYaYvGZzXwmseTW
          source_id: s_V3RrE2tM1VxsNST2zzkYCa
          stance: supports
          locator: CBDB:341914
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_V3RrE2tM1VxsNST2zzkYCa
            source_type: api_record
            title: 中国历代人物传记资料库：王廷珤（CBDB 341914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341914&o=json
            external_identifier: CBDB:341914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:09.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_n2VJpgwZ6JQCyBX9W8bhGM
        subject_person_id: p_xcrGmijNB771TkwNLsnXeF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷珤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T7hCg6bL2rCHcsynQXY252
          claim_id: c_n2VJpgwZ6JQCyBX9W8bhGM
          source_id: s_V3RrE2tM1VxsNST2zzkYCa
          stance: supports
          locator: CBDB:341914
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4101-4200）｜历史性依据：CBDB 朝代 = 明
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
  other: []
---

# 王廷珤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷珤，史料所见人物。本项目依据《中国历代人物传记资料库：王廷珤（CBDB 341914）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王廷珤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷珤（CBDB 341914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341914&o=json)
