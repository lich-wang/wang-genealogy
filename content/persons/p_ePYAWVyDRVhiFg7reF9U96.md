---
schema: wang-person/v1
id: p_ePYAWVyDRVhiFg7reF9U96
status: active
merged_into: null
display_name: 王深
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Cd5YFVvKZoryyrRC5vuVe
        subject_person_id: p_ePYAWVyDRVhiFg7reF9U96
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QKRGipEi5cQwz96FKF1SsW
          claim_id: c_4Cd5YFVvKZoryyrRC5vuVe
          source_id: s_BgkZJKarPygMgeqkejF4SG
          stance: supports
          locator: CBDB:639126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639126）
          source: &a1
            id: s_BgkZJKarPygMgeqkejF4SG
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 639126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639126&o=json
            external_identifier: CBDB:639126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_neRwQLEhDk8RXn3p3HsRgS
        subject_person_id: p_ePYAWVyDRVhiFg7reF9U96
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
        - id: cs_3qeWoBCmLphyKBRvfZf373
          claim_id: c_neRwQLEhDk8RXn3p3HsRgS
          source_id: s_BgkZJKarPygMgeqkejF4SG
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

# 王深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王深 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王深（CBDB 639126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639126&o=json)
