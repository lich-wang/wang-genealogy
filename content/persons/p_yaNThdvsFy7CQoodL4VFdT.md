---
schema: wang-person/v1
id: p_yaNThdvsFy7CQoodL4VFdT
status: active
merged_into: null
display_name: 王永寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2oMqGoTM6C5QNotKPcTRGS
        subject_person_id: p_yaNThdvsFy7CQoodL4VFdT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T4UtDHfVR7AmRoPjwbxUyZ
          claim_id: c_2oMqGoTM6C5QNotKPcTRGS
          source_id: s_Kv6AmriPNNh4HxY1ATXsPZ
          stance: supports
          locator: CBDB:638976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638976）
          source: &a1
            id: s_Kv6AmriPNNh4HxY1ATXsPZ
            source_type: api_record
            title: 中国历代人物传记资料库：王永寬（CBDB 638976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638976&o=json
            external_identifier: CBDB:638976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ptf3nrG4qD9UPrk7zXx6TS
        subject_person_id: p_yaNThdvsFy7CQoodL4VFdT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永寬，清人物。籍贯黃巖，曾任主事。（中国历代人物传记资料库 CBDB 638976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q14M-jWi9xWD_yiepJccv1
          claim_id: c_Ptf3nrG4qD9UPrk7zXx6TS
          source_id: s_Kv6AmriPNNh4HxY1ATXsPZ
          stance: supports
          locator: CBDB:638976
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

# 王永寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永寬 | accepted |
| bio.summary | 王永寬，清人物。籍贯黃巖，曾任主事。（中国历代人物传记资料库 CBDB 638976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永寬（CBDB 638976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638976&o=json)
