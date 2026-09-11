---
schema: wang-person/v1
id: p_qVhTrXQeAWVk95gAqDhjHg
status: active
merged_into: null
display_name: 王餘菖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ug5GCv3kevNkt2xa2axpbq
        subject_person_id: p_qVhTrXQeAWVk95gAqDhjHg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘菖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GYrEtAvijkQ7xza1fHy4SK
          claim_id: c_ug5GCv3kevNkt2xa2axpbq
          source_id: s_A2biBD6F6xAZ373NZc6LUK
          stance: supports
          locator: CBDB:576158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576158）
          source: &a1
            id: s_A2biBD6F6xAZ373NZc6LUK
            source_type: api_record
            title: 中国历代人物传记资料库：王餘菖（CBDB 576158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576158&o=json
            external_identifier: CBDB:576158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PzBvx3QH81mK1A3cS7TDAv
        subject_person_id: p_qVhTrXQeAWVk95gAqDhjHg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘菖，清人物。籍贯福山，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UJNvHMV7YQ0MAzZzMmqsgl
          claim_id: c_PzBvx3QH81mK1A3cS7TDAv
          source_id: s_A2biBD6F6xAZ373NZc6LUK
          stance: supports
          locator: CBDB:576158
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

# 王餘菖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王餘菖 | accepted |
| bio.summary | 王餘菖，清人物。籍贯福山，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王餘菖（CBDB 576158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576158&o=json)
