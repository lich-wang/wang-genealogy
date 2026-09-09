---
schema: wang-person/v1
id: p_TzB4CpbcBppDTrSY6rC2P3
status: active
merged_into: null
display_name: 王潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WzG4MNjnGaE5FtXNy3dPpV
        subject_person_id: p_TzB4CpbcBppDTrSY6rC2P3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ZQrWWRDfEqyX83GGj72e2
          claim_id: c_WzG4MNjnGaE5FtXNy3dPpV
          source_id: s_6jv14KJE8cQNvpt2hvz242
          stance: supports
          locator: CBDB:445573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445573）
          source: &a1
            id: s_6jv14KJE8cQNvpt2hvz242
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 445573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445573&o=json
            external_identifier: CBDB:445573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LdJ3bRkAXLG4QHzBzpX68N
        subject_person_id: p_TzB4CpbcBppDTrSY6rC2P3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E1869Dx4S9W8MTUpuFjDLZ
          claim_id: c_LdJ3bRkAXLG4QHzBzpX68N
          source_id: s_6jv14KJE8cQNvpt2hvz242
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

# 王潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 445573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445573&o=json)
