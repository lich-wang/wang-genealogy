---
schema: wang-person/v1
id: p_MF5U5LJaBHv2KKGRLT1YJK
status: active
merged_into: null
display_name: 王宗燦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2dxAdb6TNUMPJrL9LKJ1d1
        subject_person_id: p_MF5U5LJaBHv2KKGRLT1YJK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ngVMJmc1HMMYHFbVad59gL
          claim_id: c_2dxAdb6TNUMPJrL9LKJ1d1
          source_id: s_L6Lu9BrsUzHZANhN5UQdYG
          stance: supports
          locator: CBDB:342639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342639）
          source: &a1
            id: s_L6Lu9BrsUzHZANhN5UQdYG
            source_type: api_record
            title: 中国历代人物传记资料库：王宗燦（CBDB 342639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342639&o=json
            external_identifier: CBDB:342639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hpz1yCuH5vB77kc29z2pQn
        subject_person_id: p_MF5U5LJaBHv2KKGRLT1YJK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗燦，清人物。明清進士進士，籍贯漢軍正黃旗，入仕進士，曾任編修、鄉試考官。（中国历代人物传记资料库 CBDB 342639）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zoa3DTkx9d6aN8ZR9aiVkK
          claim_id: c_Hpz1yCuH5vB77kc29z2pQn
          source_id: s_L6Lu9BrsUzHZANhN5UQdYG
          stance: supports
          locator: CBDB:342639
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

# 王宗燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗燦 | accepted |
| bio.summary | 王宗燦，清人物。明清進士進士，籍贯漢軍正黃旗，入仕進士，曾任編修、鄉試考官。（中国历代人物传记资料库 CBDB 342639） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗燦（CBDB 342639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342639&o=json)
