---
schema: wang-person/v1
id: p_6zZ5PdgiGkg5xtyU4aCxzj
status: active
merged_into: null
display_name: 王于獻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDKbkhbKw3vP3JV982NXEn
        subject_person_id: p_6zZ5PdgiGkg5xtyU4aCxzj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王于獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2GgY63kBc3AKYVn58RRcvy
          claim_id: c_uDKbkhbKw3vP3JV982NXEn
          source_id: s_ZZURKEHTfXTEDC2PWytLib
          stance: supports
          locator: CBDB:635844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635844）
          source: &a1
            id: s_ZZURKEHTfXTEDC2PWytLib
            source_type: api_record
            title: 中国历代人物传记资料库：王于獻（CBDB 635844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635844&o=json
            external_identifier: CBDB:635844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tpCrKWuk44gyAKHG7RYJQK
        subject_person_id: p_6zZ5PdgiGkg5xtyU4aCxzj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王于獻，清人物。籍贯涼州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 635844）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mP2EKNXC6yFv5ea2AyC93T
          claim_id: c_tpCrKWuk44gyAKHG7RYJQK
          source_id: s_ZZURKEHTfXTEDC2PWytLib
          stance: supports
          locator: CBDB:635844
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

# 王于獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王于獻 | accepted |
| bio.summary | 王于獻，清人物。籍贯涼州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 635844） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王于獻（CBDB 635844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635844&o=json)
