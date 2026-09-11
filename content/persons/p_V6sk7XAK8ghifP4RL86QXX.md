---
schema: wang-person/v1
id: p_V6sk7XAK8ghifP4RL86QXX
status: active
merged_into: null
display_name: 王德全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5VcYQ9u34umD87oBxmTj6T
        subject_person_id: p_V6sk7XAK8ghifP4RL86QXX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S9M11usfoCLDiCFe5bXJkZ
          claim_id: c_5VcYQ9u34umD87oBxmTj6T
          source_id: s_8jCBJY8zLxjXbHpLsDpmGg
          stance: supports
          locator: CBDB:637669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637669）
          source: &a1
            id: s_8jCBJY8zLxjXbHpLsDpmGg
            source_type: api_record
            title: 中国历代人物传记资料库：王德全（CBDB 637669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637669&o=json
            external_identifier: CBDB:637669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cm8jWiiwvN9kKUFLct58ju
        subject_person_id: p_V6sk7XAK8ghifP4RL86QXX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德全，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 637669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h-Gfhd5nRaebQ4rlIPgwC9
          claim_id: c_cm8jWiiwvN9kKUFLct58ju
          source_id: s_8jCBJY8zLxjXbHpLsDpmGg
          stance: supports
          locator: CBDB:637669
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

# 王德全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德全 | accepted |
| bio.summary | 王德全，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 637669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德全（CBDB 637669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637669&o=json)
