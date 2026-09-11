---
schema: wang-person/v1
id: p_2SXoBntopTQY6kt4WY36cu
status: active
merged_into: null
display_name: 王序端
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ajb5Eo76cGe7HooygLQK8r
        subject_person_id: p_2SXoBntopTQY6kt4WY36cu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iSp6554VBmVSyjU8Zi8WBe
          claim_id: c_Ajb5Eo76cGe7HooygLQK8r
          source_id: s_cgaLFLP8b6cUTVimiXfiAM
          stance: supports
          locator: CBDB:691500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691500）
          source: &a1
            id: s_cgaLFLP8b6cUTVimiXfiAM
            source_type: api_record
            title: 中国历代人物传记资料库：王序端（CBDB 691500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691500&o=json
            external_identifier: CBDB:691500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XCUN23j32k1skrGGP1UcLK
        subject_person_id: p_2SXoBntopTQY6kt4WY36cu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序端，清人物。籍贯漢軍正紅旗，身份为書法家，入仕鄉貢舉人，曾任場大使、知縣。（中国历代人物传记资料库 CBDB 691500）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zxXzlJWWdqRN8RWqLmBjFB
          claim_id: c_XCUN23j32k1skrGGP1UcLK
          source_id: s_cgaLFLP8b6cUTVimiXfiAM
          stance: supports
          locator: CBDB:691500
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

# 王序端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王序端 | accepted |
| bio.summary | 王序端，清人物。籍贯漢軍正紅旗，身份为書法家，入仕鄉貢舉人，曾任場大使、知縣。（中国历代人物传记资料库 CBDB 691500） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王序端（CBDB 691500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691500&o=json)
