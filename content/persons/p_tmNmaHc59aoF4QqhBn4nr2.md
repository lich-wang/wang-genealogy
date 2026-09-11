---
schema: wang-person/v1
id: p_tmNmaHc59aoF4QqhBn4nr2
status: active
merged_into: null
display_name: 王萬侯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MRAKqTPkZCr4NjVGAuyeM1
        subject_person_id: p_tmNmaHc59aoF4QqhBn4nr2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬侯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QUimTFwZssPcCAMYMLx5vz
          claim_id: c_MRAKqTPkZCr4NjVGAuyeM1
          source_id: s_hN7tQUa8tbasyxfGNaaG45
          stance: supports
          locator: CBDB:546349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546349）
          source: &a1
            id: s_hN7tQUa8tbasyxfGNaaG45
            source_type: api_record
            title: 中国历代人物传记资料库：王萬侯（CBDB 546349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546349&o=json
            external_identifier: CBDB:546349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jo1xDHaJKGiA7VBcaNh7ex
        subject_person_id: p_tmNmaHc59aoF4QqhBn4nr2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬侯，宋人物。籍贯長溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 546349）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8cXO8jII3uU0ut_NX0mV4Y
          claim_id: c_Jo1xDHaJKGiA7VBcaNh7ex
          source_id: s_hN7tQUa8tbasyxfGNaaG45
          stance: supports
          locator: CBDB:546349
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

# 王萬侯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬侯 | accepted |
| bio.summary | 王萬侯，宋人物。籍贯長溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 546349） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬侯（CBDB 546349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546349&o=json)
