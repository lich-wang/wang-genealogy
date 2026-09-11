---
schema: wang-person/v1
id: p_CZR4ogiV8pAsXgKd2D4Q6F
status: active
merged_into: null
display_name: 王泰徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j7GNFRACvckaVeYgqvVUjk
        subject_person_id: p_CZR4ogiV8pAsXgKd2D4Q6F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NVj8K6UgApQ7JUk35Z5L4T
          claim_id: c_j7GNFRACvckaVeYgqvVUjk
          source_id: s_V9LKEr1ez7wkH6ujHQXY2W
          stance: supports
          locator: CBDB:639075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639075）
          source: &a1
            id: s_V9LKEr1ez7wkH6ujHQXY2W
            source_type: api_record
            title: 中国历代人物传记资料库：王泰徵（CBDB 639075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639075&o=json
            external_identifier: CBDB:639075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cy3Z7uKZs7MyGV6kygTt1o
        subject_person_id: p_CZR4ogiV8pAsXgKd2D4Q6F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰徵，清人物。籍贯濟寧直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EkrxkGWT_zLc7MsAag0fdt
          claim_id: c_cy3Z7uKZs7MyGV6kygTt1o
          source_id: s_V9LKEr1ez7wkH6ujHQXY2W
          stance: supports
          locator: CBDB:639075
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

# 王泰徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰徵 | accepted |
| bio.summary | 王泰徵，清人物。籍贯濟寧直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰徵（CBDB 639075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639075&o=json)
