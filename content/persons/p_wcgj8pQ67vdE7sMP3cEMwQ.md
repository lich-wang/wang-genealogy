---
schema: wang-person/v1
id: p_wcgj8pQ67vdE7sMP3cEMwQ
status: active
merged_into: null
display_name: 王科
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EADu8hg5gHxeCeCeobhg4A
        subject_person_id: p_wcgj8pQ67vdE7sMP3cEMwQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_diQCTePy2S52nHc15PPMB4
          claim_id: c_EADu8hg5gHxeCeCeobhg4A
          source_id: s_r5c7CfdvQD4DM6zS5GAvi1
          stance: supports
          locator: CBDB:38067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38067）
          source: &a1
            id: s_r5c7CfdvQD4DM6zS5GAvi1
            source_type: api_record
            title: 中国历代人物传记资料库：王科（CBDB 38067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38067&o=json
            external_identifier: CBDB:38067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_grqcuKzf9CPqxo9kfe1g6J
        subject_person_id: p_wcgj8pQ67vdE7sMP3cEMwQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科，元人物。籍贯樂安，身份为學者，曾任國子監生。（中国历代人物传记资料库 CBDB 38067）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ERBYEi6711T2234vqd3mgF
          claim_id: c_grqcuKzf9CPqxo9kfe1g6J
          source_id: s_r5c7CfdvQD4DM6zS5GAvi1
          stance: supports
          locator: CBDB:38067
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

# 王科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王科 | accepted |
| bio.summary | 王科，元人物。籍贯樂安，身份为學者，曾任國子監生。（中国历代人物传记资料库 CBDB 38067） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王科（CBDB 38067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38067&o=json)
