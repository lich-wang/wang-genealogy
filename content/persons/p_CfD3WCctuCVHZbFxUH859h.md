---
schema: wang-person/v1
id: p_CfD3WCctuCVHZbFxUH859h
status: active
merged_into: null
display_name: 王廷贊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ps4vf1MYmkAj2NB7r4LSL4
        subject_person_id: p_CfD3WCctuCVHZbFxUH859h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷贊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2xiMM9jEEmw25TMcEXm6dz
          claim_id: c_Ps4vf1MYmkAj2NB7r4LSL4
          source_id: s_9v5WbkFuRf9v4Eu32tA1rj
          stance: supports
          locator: CBDB:61501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61501）
          source: &a1
            id: s_9v5WbkFuRf9v4Eu32tA1rj
            source_type: api_record
            title: 中国历代人物传记资料库：王廷贊（CBDB 61501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61501&o=json
            external_identifier: CBDB:61501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WRnxatnkSPfQ9Ea8K5FjNV
        subject_person_id: p_CfD3WCctuCVHZbFxUH859h
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1722年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f4S199qfUgmrppjDkjYYKg
          claim_id: c_WRnxatnkSPfQ9Ea8K5FjNV
          source_id: s_9v5WbkFuRf9v4Eu32tA1rj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Zw8usMqmKHXmvE5aFDAP3s
        subject_person_id: p_CfD3WCctuCVHZbFxUH859h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UH2U9NuDs2FC6mEYXrXQfH
          claim_id: c_Zw8usMqmKHXmvE5aFDAP3s
          source_id: s_9v5WbkFuRf9v4Eu32tA1rj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8EbPVwFAHmhUgGJhem7Huw
        subject_person_id: p_CfD3WCctuCVHZbFxUH859h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷贊（1722年—1781年），清人物。籍贯奉天府，曾任知州。（中国历代人物传记资料库 CBDB 61501）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cLCUpdCa6-v6hrK0ZBqJXI
          claim_id: c_8EbPVwFAHmhUgGJhem7Huw
          source_id: s_9v5WbkFuRf9v4Eu32tA1rj
          stance: supports
          locator: CBDB:61501
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Rosb9WAdw4RLupx4WAoZ5E
        subject_person_id: p_CfD3WCctuCVHZbFxUH859h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2WSCdoV1y2t3YvB6CF17p4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8j_E7jGx5poS0QhZB3FbZ
          claim_id: c_Rosb9WAdw4RLupx4WAoZ5E
          source_id: s_NjDwUxFGZ3DwAh3JPm2dLB
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），4839：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NjDwUxFGZ3DwAh3JPm2dLB
            source_type: api_record
            title: 中国历代人物传记资料库：王七（CBDB 520210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520210&o=json
            external_identifier: CBDB:520210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2WSCdoV1y2t3YvB6CF17p4
        status: active
        display_name: 王七
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷贊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷贊 | accepted |
| birth.date | 1722年 | accepted |
| death.date | 1781年 | accepted |
| bio.summary | 王廷贊（1722年—1781年），清人物。籍贯奉天府，曾任知州。（中国历代人物传记资料库 CBDB 61501） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2WSCdoV1y2t3YvB6CF17p4 | 王七 | accepted |

## 外部来源

- [中国历代人物传记资料库：王七（CBDB 520210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520210&o=json)
- [中国历代人物传记资料库：王廷贊（CBDB 61501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61501&o=json)
