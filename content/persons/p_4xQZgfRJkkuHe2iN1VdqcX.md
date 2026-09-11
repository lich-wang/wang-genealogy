---
schema: wang-person/v1
id: p_4xQZgfRJkkuHe2iN1VdqcX
status: active
merged_into: null
display_name: 王時敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FFs3e2293nKHMGSUTU32iq
        subject_person_id: p_4xQZgfRJkkuHe2iN1VdqcX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vpM75PxLCdCzfxVEa11SGz
          claim_id: c_FFs3e2293nKHMGSUTU32iq
          source_id: s_x41rjDJM8e5rKV7MmDCzFw
          stance: supports
          locator: CBDB:343525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343525）
          source: &a1
            id: s_x41rjDJM8e5rKV7MmDCzFw
            source_type: api_record
            title: 中国历代人物传记资料库：王時敏（CBDB 343525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343525&o=json
            external_identifier: CBDB:343525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pMPTfZjqf6AZ2mzBhVdPFK
        subject_person_id: p_4xQZgfRJkkuHe2iN1VdqcX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時敏，明人物。明清進士進士，籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 343525）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L0wSjix0fRdNDtss6KGkOZ
          claim_id: c_pMPTfZjqf6AZ2mzBhVdPFK
          source_id: s_x41rjDJM8e5rKV7MmDCzFw
          stance: supports
          locator: CBDB:343525
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

# 王時敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時敏 | accepted |
| bio.summary | 王時敏，明人物。明清進士進士，籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 343525） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時敏（CBDB 343525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343525&o=json)
