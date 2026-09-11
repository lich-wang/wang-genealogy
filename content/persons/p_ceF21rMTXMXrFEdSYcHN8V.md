---
schema: wang-person/v1
id: p_ceF21rMTXMXrFEdSYcHN8V
status: active
merged_into: null
display_name: 王聖林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aPiZe3XdkxiqnJC6jiEc7q
        subject_person_id: p_ceF21rMTXMXrFEdSYcHN8V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聖林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HDzrmotZE8NS8J21qgC5GP
          claim_id: c_aPiZe3XdkxiqnJC6jiEc7q
          source_id: s_y3GdsiE6oA9uCXHQKMGRj9
          stance: supports
          locator: CBDB:639939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639939）
          source: &a1
            id: s_y3GdsiE6oA9uCXHQKMGRj9
            source_type: api_record
            title: 中国历代人物传记资料库：王聖林（CBDB 639939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639939&o=json
            external_identifier: CBDB:639939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hLzdcY9u7DpjSEUVDyYFRn
        subject_person_id: p_ceF21rMTXMXrFEdSYcHN8V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聖林，清人物。籍贯荊州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639939）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HAt5rqqb3dxSUAqPCuy5c1
          claim_id: c_hLzdcY9u7DpjSEUVDyYFRn
          source_id: s_y3GdsiE6oA9uCXHQKMGRj9
          stance: supports
          locator: CBDB:639939
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

# 王聖林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聖林 | accepted |
| bio.summary | 王聖林，清人物。籍贯荊州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聖林（CBDB 639939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639939&o=json)
