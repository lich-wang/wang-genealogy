---
schema: wang-person/v1
id: p_rvtta4V9ZLabcYmSvzAavT
status: active
merged_into: null
display_name: 王昌壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UjVny6w5GZxXSED13AcZDS
        subject_person_id: p_rvtta4V9ZLabcYmSvzAavT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TdYmRS1KFgaFQCW2XQHWm9
          claim_id: c_UjVny6w5GZxXSED13AcZDS
          source_id: s_x5oM933q8MsQ3mKQSofJ7j
          stance: supports
          locator: CBDB:638368
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638368）
          source: &a1
            id: s_x5oM933q8MsQ3mKQSofJ7j
            source_type: api_record
            title: 中国历代人物传记资料库：王昌壽（CBDB 638368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638368&o=json
            external_identifier: CBDB:638368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U9hxj9qB1C5CFwt666T9uT
        subject_person_id: p_rvtta4V9ZLabcYmSvzAavT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王昌壽，清人物。籍贯郴州直隸州直轄地方，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 638368）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pzhh1sSxFo88SLHMX2H6tU
          claim_id: c_U9hxj9qB1C5CFwt666T9uT
          source_id: s_x5oM933q8MsQ3mKQSofJ7j
          stance: supports
          locator: CBDB:638368
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

# 王昌壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌壽 | accepted |
| bio.summary | 王昌壽，清人物。籍贯郴州直隸州直轄地方，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 638368） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌壽（CBDB 638368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638368&o=json)
