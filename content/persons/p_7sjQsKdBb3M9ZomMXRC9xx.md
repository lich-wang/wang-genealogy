---
schema: wang-person/v1
id: p_7sjQsKdBb3M9ZomMXRC9xx
status: active
merged_into: null
display_name: 王聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZCquQTEUGJBf97g6HSEaLt
        subject_person_id: p_7sjQsKdBb3M9ZomMXRC9xx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j93KkAu8VQJP2Wp2PPE8gX
          claim_id: c_ZCquQTEUGJBf97g6HSEaLt
          source_id: s_o2wwSEHNbeyz2pt5UwqU9D
          stance: supports
          locator: CBDB:319574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（319574）
          source: &a1
            id: s_o2wwSEHNbeyz2pt5UwqU9D
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 319574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319574&o=json
            external_identifier: CBDB:319574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6P5zwLpd1L7UExA8ZouHpP
        subject_person_id: p_7sjQsKdBb3M9ZomMXRC9xx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰，明人物。天順四年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 319574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WhR7E_jmLhHSWoWCqGEf-n
          claim_id: c_6P5zwLpd1L7UExA8ZouHpP
          source_id: s_o2wwSEHNbeyz2pt5UwqU9D
          stance: supports
          locator: CBDB:319574
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

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | 王聰，明人物。天順四年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 319574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 319574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319574&o=json)
