---
schema: wang-person/v1
id: p_Qd4pQzjh2LFQ4ay9QNu4po
status: active
merged_into: null
display_name: 王堯儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fn2xLdm35WGskNKgeAb781
        subject_person_id: p_Qd4pQzjh2LFQ4ay9QNu4po
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_orJNJrPPpj2kwoeJD45Xqf
          claim_id: c_Fn2xLdm35WGskNKgeAb781
          source_id: s_VTicCqJN3Vavv7XmiiT4KG
          stance: supports
          locator: CBDB:636753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636753）
          source: &a1
            id: s_VTicCqJN3Vavv7XmiiT4KG
            source_type: api_record
            title: 中国历代人物传记资料库：王堯儒（CBDB 636753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636753&o=json
            external_identifier: CBDB:636753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6AxsMHqC2SPWvxHF5UQxhe
        subject_person_id: p_Qd4pQzjh2LFQ4ay9QNu4po
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯儒，清人物。籍贯黃陂，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636753）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a5YP3ZAZ7CPgs_cS-H5o_P
          claim_id: c_6AxsMHqC2SPWvxHF5UQxhe
          source_id: s_VTicCqJN3Vavv7XmiiT4KG
          stance: supports
          locator: CBDB:636753
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

# 王堯儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯儒 | accepted |
| bio.summary | 王堯儒，清人物。籍贯黃陂，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯儒（CBDB 636753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636753&o=json)
