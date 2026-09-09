---
schema: wang-person/v1
id: p_w7ubQJr5xVrk5fuZGy634G
status: active
merged_into: null
display_name: 王式言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sDYQpLAK7PcpX6TcAtc1H3
        subject_person_id: p_w7ubQJr5xVrk5fuZGy634G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C9W4ZHqMm7ESkNMpLGFFu4
          claim_id: c_sDYQpLAK7PcpX6TcAtc1H3
          source_id: s_MrAw89ETFz3KWNBQRavww1
          stance: supports
          locator: CBDB:637606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637606）
          source: &a1
            id: s_MrAw89ETFz3KWNBQRavww1
            source_type: api_record
            title: 中国历代人物传记资料库：王式言（CBDB 637606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637606&o=json
            external_identifier: CBDB:637606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FKG3d7QWiyw8AstZLheK46
        subject_person_id: p_w7ubQJr5xVrk5fuZGy634G
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
        - id: cs_cgSEvW29D5Y93K1dvvnK7M
          claim_id: c_FKG3d7QWiyw8AstZLheK46
          source_id: s_MrAw89ETFz3KWNBQRavww1
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

# 王式言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式言 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式言（CBDB 637606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637606&o=json)
