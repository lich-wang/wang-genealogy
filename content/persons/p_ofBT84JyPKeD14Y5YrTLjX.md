---
schema: wang-person/v1
id: p_ofBT84JyPKeD14Y5YrTLjX
status: active
merged_into: null
display_name: 王嶢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4gSZ4Xa747VVwjm1W3RPUB
        subject_person_id: p_ofBT84JyPKeD14Y5YrTLjX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_94qACyPZmJC8c2NWnLi8qm
          claim_id: c_4gSZ4Xa747VVwjm1W3RPUB
          source_id: s_VZDA2HFKRXC3sZGt3Wwk2W
          stance: supports
          locator: CBDB:637340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637340）
          source: &a1
            id: s_VZDA2HFKRXC3sZGt3Wwk2W
            source_type: api_record
            title: 中国历代人物传记资料库：王嶢（CBDB 637340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637340&o=json
            external_identifier: CBDB:637340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vdg8iAmQrVdAByfCNMFKZs
        subject_person_id: p_ofBT84JyPKeD14Y5YrTLjX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H3QJcP8eLmAT1ZtEfgJHig
          claim_id: c_vdg8iAmQrVdAByfCNMFKZs
          source_id: s_VZDA2HFKRXC3sZGt3Wwk2W
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王嶢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶢（CBDB 637340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637340&o=json)
