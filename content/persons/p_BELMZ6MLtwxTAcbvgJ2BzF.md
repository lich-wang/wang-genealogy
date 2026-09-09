---
schema: wang-person/v1
id: p_BELMZ6MLtwxTAcbvgJ2BzF
status: active
merged_into: null
display_name: 王宰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N7H3Kc3kjCQw1cA8Qy1trN
        subject_person_id: p_BELMZ6MLtwxTAcbvgJ2BzF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7jtWr441m3a77EEzpuHatb
          claim_id: c_N7H3Kc3kjCQw1cA8Qy1trN
          source_id: s_rZbuwH4iZnH4Sj9LAiU43E
          stance: supports
          locator: CBDB:637160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637160）
          source: &a1
            id: s_rZbuwH4iZnH4Sj9LAiU43E
            source_type: api_record
            title: 中国历代人物传记资料库：王宰（CBDB 637160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637160&o=json
            external_identifier: CBDB:637160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BvPrY1SX2uvao9E4YN4skn
        subject_person_id: p_BELMZ6MLtwxTAcbvgJ2BzF
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
        - id: cs_qM4n4vkUFz3faNhQ4xdpPL
          claim_id: c_BvPrY1SX2uvao9E4YN4skn
          source_id: s_rZbuwH4iZnH4Sj9LAiU43E
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

# 王宰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宰（CBDB 637160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637160&o=json)
