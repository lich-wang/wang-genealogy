---
schema: wang-person/v1
id: p_Vn5jM541fLMJCvJVsBVYuC
status: active
merged_into: null
display_name: 王公輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ABDAsXFvKAoJodumfyJV5w
        subject_person_id: p_Vn5jM541fLMJCvJVsBVYuC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EzRwFmhtMeSgh92MJoaKq6
          claim_id: c_ABDAsXFvKAoJodumfyJV5w
          source_id: s_J3EPdGcromA81rzHE2c1J4
          stance: supports
          locator: CBDB:688479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688479）
          source: &a1
            id: s_J3EPdGcromA81rzHE2c1J4
            source_type: api_record
            title: 中国历代人物传记资料库：王公輔（CBDB 688479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688479&o=json
            external_identifier: CBDB:688479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NsYq1K3LtuuDN4RUAgwxHM
        subject_person_id: p_Vn5jM541fLMJCvJVsBVYuC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公輔，宋人物。籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 688479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J3oB0bX7Gz9FFX3-TzauYy
          claim_id: c_NsYq1K3LtuuDN4RUAgwxHM
          source_id: s_J3EPdGcromA81rzHE2c1J4
          stance: supports
          locator: CBDB:688479
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

# 王公輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公輔 | accepted |
| bio.summary | 王公輔，宋人物。籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 688479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公輔（CBDB 688479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688479&o=json)
