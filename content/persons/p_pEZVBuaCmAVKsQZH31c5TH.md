---
schema: wang-person/v1
id: p_pEZVBuaCmAVKsQZH31c5TH
status: active
merged_into: null
display_name: 王義訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HuJhmLmn6P1SQQPwcKhVzt
        subject_person_id: p_pEZVBuaCmAVKsQZH31c5TH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UipnHSd21FxL6EgeADAk1D
          claim_id: c_HuJhmLmn6P1SQQPwcKhVzt
          source_id: s_JF8LJ1cL5C4k5Eh6DGwSdH
          stance: supports
          locator: CBDB:639890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639890）
          source: &a1
            id: s_JF8LJ1cL5C4k5Eh6DGwSdH
            source_type: api_record
            title: 中国历代人物传记资料库：王義訓（CBDB 639890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639890&o=json
            external_identifier: CBDB:639890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YSydjcJiVWi7A2EX3dmCbe
        subject_person_id: p_pEZVBuaCmAVKsQZH31c5TH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王義訓，清人物。籍贯武定直隸州，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 639890）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6dbEIvlG4VQBKTbLgZjxfj
          claim_id: c_YSydjcJiVWi7A2EX3dmCbe
          source_id: s_JF8LJ1cL5C4k5Eh6DGwSdH
          stance: supports
          locator: CBDB:639890
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

# 王義訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義訓 | accepted |
| bio.summary | 王義訓，清人物。籍贯武定直隸州，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 639890） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王義訓（CBDB 639890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639890&o=json)
