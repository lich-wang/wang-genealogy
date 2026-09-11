---
schema: wang-person/v1
id: p_K5uj2KJeC1BhKj3b3j1RAt
status: active
merged_into: null
display_name: 王樟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZSQi8UJ5LCWfTeavxbkJ1W
        subject_person_id: p_K5uj2KJeC1BhKj3b3j1RAt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hRbu8CcFx537LgMRx6Minz
          claim_id: c_ZSQi8UJ5LCWfTeavxbkJ1W
          source_id: s_epSCzi5j7NPGnfPsgwNeuB
          stance: supports
          locator: CBDB:638834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638834）
          source: &a1
            id: s_epSCzi5j7NPGnfPsgwNeuB
            source_type: api_record
            title: 中国历代人物传记资料库：王樟（CBDB 638834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638834&o=json
            external_identifier: CBDB:638834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_APHNdwcSUfr4NhJHU7wc7M
        subject_person_id: p_K5uj2KJeC1BhKj3b3j1RAt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樟，清人物。籍贯長安，入仕鄉貢舉人，曾任教授。（中国历代人物传记资料库 CBDB 638834）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dH5W3zvFy0dWP-zTWnWW4T
          claim_id: c_APHNdwcSUfr4NhJHU7wc7M
          source_id: s_epSCzi5j7NPGnfPsgwNeuB
          stance: supports
          locator: CBDB:638834
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

# 王樟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樟 | accepted |
| bio.summary | 王樟，清人物。籍贯長安，入仕鄉貢舉人，曾任教授。（中国历代人物传记资料库 CBDB 638834） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樟（CBDB 638834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638834&o=json)
