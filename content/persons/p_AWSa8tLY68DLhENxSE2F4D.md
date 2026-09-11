---
schema: wang-person/v1
id: p_AWSa8tLY68DLhENxSE2F4D
status: active
merged_into: null
display_name: 王學易
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HXdeicasJHKEsegpRgfg4
        subject_person_id: p_AWSa8tLY68DLhENxSE2F4D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學易
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1pD24ahV8FsA8hR6jTgjER
          claim_id: c_4HXdeicasJHKEsegpRgfg4
          source_id: s_MKAovEq46VTiuhFjHLohho
          stance: supports
          locator: CBDB:211989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211989）
          source: &a1
            id: s_MKAovEq46VTiuhFjHLohho
            source_type: api_record
            title: 中国历代人物传记资料库：王學易（CBDB 211989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211989&o=json
            external_identifier: CBDB:211989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UgxDo9CpLP7Ls3M8WFQkDr
        subject_person_id: p_AWSa8tLY68DLhENxSE2F4D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學易，明人物。隆慶五年進士，籍贯濱州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 211989）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-1uz4c2gbzAOrzgtLRV78Y
          claim_id: c_UgxDo9CpLP7Ls3M8WFQkDr
          source_id: s_MKAovEq46VTiuhFjHLohho
          stance: supports
          locator: CBDB:211989
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

# 王學易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學易 | accepted |
| bio.summary | 王學易，明人物。隆慶五年進士，籍贯濱州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 211989） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學易（CBDB 211989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211989&o=json)
