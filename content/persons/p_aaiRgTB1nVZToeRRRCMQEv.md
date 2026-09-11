---
schema: wang-person/v1
id: p_aaiRgTB1nVZToeRRRCMQEv
status: active
merged_into: null
display_name: 王恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MvC1s1EM3Ho7LLr2yXMXbt
        subject_person_id: p_aaiRgTB1nVZToeRRRCMQEv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9FsSGKepENaz4THHTHoLUq
          claim_id: c_MvC1s1EM3Ho7LLr2yXMXbt
          source_id: s_r8oxLEj9Zp7aUtF3MeZ1H5
          stance: supports
          locator: CBDB:637872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637872）
          source: &a1
            id: s_r8oxLEj9Zp7aUtF3MeZ1H5
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 637872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637872&o=json
            external_identifier: CBDB:637872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LRVihzNKETGrWCapVWB3q2
        subject_person_id: p_aaiRgTB1nVZToeRRRCMQEv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭，清人物。籍贯宛平，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637872）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YP94zXn2SFdN5pzj73h7KP
          claim_id: c_LRVihzNKETGrWCapVWB3q2
          source_id: s_r8oxLEj9Zp7aUtF3MeZ1H5
          stance: supports
          locator: CBDB:637872
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

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| bio.summary | 王恭，清人物。籍贯宛平，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637872） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 637872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637872&o=json)
