---
schema: wang-person/v1
id: p_D74tAURrgBcVNt21F9se1p
status: active
merged_into: null
display_name: 王珫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3fYf2DbZzLnHSov2pjrMyJ
        subject_person_id: p_D74tAURrgBcVNt21F9se1p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2eVaiTdcCqoh4K56SuraqZ
          claim_id: c_3fYf2DbZzLnHSov2pjrMyJ
          source_id: s_u9uzTTC8BsRyKt1GNipn2y
          stance: supports
          locator: CBDB:19734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19734）
          source: &a1
            id: s_u9uzTTC8BsRyKt1GNipn2y
            source_type: api_record
            title: 中国历代人物传记资料库：王珫（CBDB 19734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19734&o=json
            external_identifier: CBDB:19734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.736Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3CNtqMNsNinReRbsppLzj3
        subject_person_id: p_D74tAURrgBcVNt21F9se1p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珫，宋人物。籍贯東明，身份为入元祐黨籍者，入仕進士，曾任判登聞鼓院事、尚書省刑部都官司郎中、尚書省工部屯田司郎中。（中国历代人物传记资料库 CBDB 19734）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HtZP_oQb6RkeCrzp21-uXb
          claim_id: c_3CNtqMNsNinReRbsppLzj3
          source_id: s_u9uzTTC8BsRyKt1GNipn2y
          stance: supports
          locator: CBDB:19734
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

# 王珫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珫 | accepted |
| bio.summary | 王珫，宋人物。籍贯東明，身份为入元祐黨籍者，入仕進士，曾任判登聞鼓院事、尚書省刑部都官司郎中、尚書省工部屯田司郎中。（中国历代人物传记资料库 CBDB 19734） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珫（CBDB 19734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19734&o=json)
