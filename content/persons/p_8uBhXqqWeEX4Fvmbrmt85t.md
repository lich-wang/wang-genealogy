---
schema: wang-person/v1
id: p_8uBhXqqWeEX4Fvmbrmt85t
status: active
merged_into: null
display_name: 王敬敘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbBe297kJvr2LCQrqQ461e
        subject_person_id: p_8uBhXqqWeEX4Fvmbrmt85t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QTqGr7HiTpBhFoT8qBKnwP
          claim_id: c_cbBe297kJvr2LCQrqQ461e
          source_id: s_piKhC5fAwWSu3GQaQjCDkN
          stance: supports
          locator: CBDB:638195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638195）
          source: &a1
            id: s_piKhC5fAwWSu3GQaQjCDkN
            source_type: api_record
            title: 中国历代人物传记资料库：王敬敘（CBDB 638195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638195&o=json
            external_identifier: CBDB:638195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BvtAA43ELc41HKsZvdxEXR
        subject_person_id: p_8uBhXqqWeEX4Fvmbrmt85t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王敬敘，清人物。籍贯袁州府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 638195）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qjtp9tNXv-YoW8HbIJ50vo
          claim_id: c_BvtAA43ELc41HKsZvdxEXR
          source_id: s_piKhC5fAwWSu3GQaQjCDkN
          stance: supports
          locator: CBDB:638195
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

# 王敬敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬敘 | accepted |
| bio.summary | 王敬敘，清人物。籍贯袁州府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 638195） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬敘（CBDB 638195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638195&o=json)
