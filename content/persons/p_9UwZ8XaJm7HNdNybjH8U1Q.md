---
schema: wang-person/v1
id: p_9UwZ8XaJm7HNdNybjH8U1Q
status: active
merged_into: null
display_name: 王白
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y1B9FfMTzMsYyBZLpgZW6R
        subject_person_id: p_9UwZ8XaJm7HNdNybjH8U1Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王白
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HdnKUJaFf2WEDW1XEmgFiT
          claim_id: c_Y1B9FfMTzMsYyBZLpgZW6R
          source_id: s_AH9DCS6BMyfa3rCdzfPEsA
          stance: supports
          locator: CBDB:547285
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547285）
          source: &a1
            id: s_AH9DCS6BMyfa3rCdzfPEsA
            source_type: api_record
            title: 中国历代人物传记资料库：王白（CBDB 547285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547285&o=json
            external_identifier: CBDB:547285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9i6TqbWsXY6VwbBhPHnzAt
        subject_person_id: p_9UwZ8XaJm7HNdNybjH8U1Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王白，宋人物。籍贯龍溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 547285）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HBoeicmAPIg-c0QbC6iF3t
          claim_id: c_9i6TqbWsXY6VwbBhPHnzAt
          source_id: s_AH9DCS6BMyfa3rCdzfPEsA
          stance: supports
          locator: CBDB:547285
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

# 王白

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王白 | accepted |
| bio.summary | 王白，宋人物。籍贯龍溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 547285） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王白（CBDB 547285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547285&o=json)
