---
schema: wang-person/v1
id: p_QzMBc83w2owUzhTyUfTM6g
status: active
merged_into: null
display_name: 王騰蛟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_idbWA5mYcu4ZpwGcx4AqAk
        subject_person_id: p_QzMBc83w2owUzhTyUfTM6g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騰蛟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BPLkzCBX9RBS9R5H5QkiUF
          claim_id: c_idbWA5mYcu4ZpwGcx4AqAk
          source_id: s_44tBwmbBX7k94z1E5gGukc
          stance: supports
          locator: CBDB:640899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640899）
          source: &a1
            id: s_44tBwmbBX7k94z1E5gGukc
            source_type: api_record
            title: 中国历代人物传记资料库：王騰蛟（CBDB 640899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640899&o=json
            external_identifier: CBDB:640899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZhqXyoNUED1H8z54KUPpVf
        subject_person_id: p_QzMBc83w2owUzhTyUfTM6g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王騰蛟，清人物。籍贯保定，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640899）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f4ixXfuWDMec9fYzBVS06E
          claim_id: c_ZhqXyoNUED1H8z54KUPpVf
          source_id: s_44tBwmbBX7k94z1E5gGukc
          stance: supports
          locator: CBDB:640899
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

# 王騰蛟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騰蛟 | accepted |
| bio.summary | 王騰蛟，清人物。籍贯保定，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王騰蛟（CBDB 640899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640899&o=json)
