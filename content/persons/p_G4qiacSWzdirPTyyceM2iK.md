---
schema: wang-person/v1
id: p_G4qiacSWzdirPTyyceM2iK
status: active
merged_into: null
display_name: 王紫誥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQ58E9Ey6DUV2vwT3uAPJA
        subject_person_id: p_G4qiacSWzdirPTyyceM2iK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紫誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y8pJfMJUzD32KhdcSgFf8S
          claim_id: c_EQ58E9Ey6DUV2vwT3uAPJA
          source_id: s_AkWSSf7p5kMoFeTDfBVEwk
          stance: supports
          locator: CBDB:639739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639739）
          source: &a1
            id: s_AkWSSf7p5kMoFeTDfBVEwk
            source_type: api_record
            title: 中国历代人物传记资料库：王紫誥（CBDB 639739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639739&o=json
            external_identifier: CBDB:639739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vxTtcMDM4n544vb8SDs659
        subject_person_id: p_G4qiacSWzdirPTyyceM2iK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紫誥，清人物。籍贯臨安，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639739）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FtHxfvI59bzwl1SW8fQ8DH
          claim_id: c_vxTtcMDM4n544vb8SDs659
          source_id: s_AkWSSf7p5kMoFeTDfBVEwk
          stance: supports
          locator: CBDB:639739
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

# 王紫誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紫誥 | accepted |
| bio.summary | 王紫誥，清人物。籍贯臨安，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紫誥（CBDB 639739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639739&o=json)
