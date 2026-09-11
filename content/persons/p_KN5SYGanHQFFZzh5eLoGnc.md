---
schema: wang-person/v1
id: p_KN5SYGanHQFFZzh5eLoGnc
status: active
merged_into: null
display_name: 王安仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AF3Gx9i9A2A9jp2qBKTjUf
        subject_person_id: p_KN5SYGanHQFFZzh5eLoGnc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PFggyZxrPQ6rLBNJTpv8TN
          claim_id: c_AF3Gx9i9A2A9jp2qBKTjUf
          source_id: s_kWfq1pPoToCdD6Q2PgoGPG
          stance: supports
          locator: CBDB:101170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101170）
          source: &a1
            id: s_kWfq1pPoToCdD6Q2PgoGPG
            source_type: api_record
            title: 中国历代人物传记资料库：王安仁（CBDB 101170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101170&o=json
            external_identifier: CBDB:101170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hUJ3Nfjvpt7MwPK2j4NBbp
        subject_person_id: p_KN5SYGanHQFFZzh5eLoGnc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安仁，元人物。曾任諸路總管府儒學教授。（中国历代人物传记资料库 CBDB 101170）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3req_C0EFrsWVNX0qR5YGL
          claim_id: c_hUJ3Nfjvpt7MwPK2j4NBbp
          source_id: s_kWfq1pPoToCdD6Q2PgoGPG
          stance: supports
          locator: CBDB:101170
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

# 王安仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安仁 | accepted |
| bio.summary | 王安仁，元人物。曾任諸路總管府儒學教授。（中国历代人物传记资料库 CBDB 101170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安仁（CBDB 101170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101170&o=json)
