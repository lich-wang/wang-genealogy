---
schema: wang-person/v1
id: p_5vNiHu3G4ma4pw4PWMpTnv
status: active
merged_into: null
display_name: 王廣業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NAJSK5npGWEThH5kcxCZGD
        subject_person_id: p_5vNiHu3G4ma4pw4PWMpTnv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KAmofa6Jik9okzc3Vea4T3
          claim_id: c_NAJSK5npGWEThH5kcxCZGD
          source_id: s_jhnAYBd4hBZTSFsJp5j5u9
          stance: supports
          locator: CBDB:155127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155127）
          source: &a1
            id: s_jhnAYBd4hBZTSFsJp5j5u9
            source_type: api_record
            title: 中国历代人物传记资料库：王廣業（CBDB 155127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155127&o=json
            external_identifier: CBDB:155127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q3XybzmMkRREA6Td89A5c7
        subject_person_id: p_5vNiHu3G4ma4pw4PWMpTnv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7EvLLRYDzkLdcwkywJxsYn
          claim_id: c_q3XybzmMkRREA6Td89A5c7
          source_id: s_jhnAYBd4hBZTSFsJp5j5u9
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

# 王廣業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣業 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣業（CBDB 155127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155127&o=json)
