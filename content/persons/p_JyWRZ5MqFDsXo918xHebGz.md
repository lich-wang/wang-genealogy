---
schema: wang-person/v1
id: p_JyWRZ5MqFDsXo918xHebGz
status: active
merged_into: null
display_name: 王承顏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ePHPUKh41m4EoNg87XoQg
        subject_person_id: p_JyWRZ5MqFDsXo918xHebGz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nBFcQJ92wU42D4bFWekF8n
          claim_id: c_7ePHPUKh41m4EoNg87XoQg
          source_id: s_o4AVbCmdtBC2EfE6fVdrkb
          stance: supports
          locator: CBDB:378103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378103）
          source: &a1
            id: s_o4AVbCmdtBC2EfE6fVdrkb
            source_type: api_record
            title: 中国历代人物传记资料库：王承顏（CBDB 378103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378103&o=json
            external_identifier: CBDB:378103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X4NQZJkdNRX1sPchxBYHMr
        subject_person_id: p_JyWRZ5MqFDsXo918xHebGz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承顏，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378103）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PWMaNkuaajheY6n9vPuy_h
          claim_id: c_X4NQZJkdNRX1sPchxBYHMr
          source_id: s_o4AVbCmdtBC2EfE6fVdrkb
          stance: supports
          locator: CBDB:378103
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
  descendants: []
  other: []
---

# 王承顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承顏 | accepted |
| bio.summary | 王承顏，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378103） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承顏（CBDB 378103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378103&o=json)
