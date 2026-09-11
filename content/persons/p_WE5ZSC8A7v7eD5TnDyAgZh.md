---
schema: wang-person/v1
id: p_WE5ZSC8A7v7eD5TnDyAgZh
status: active
merged_into: null
display_name: 王瑞雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KxfUPz89F34B23NYDPFCgC
        subject_person_id: p_WE5ZSC8A7v7eD5TnDyAgZh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uZSgWJqcEtKUvvsJH2ZJoP
          claim_id: c_KxfUPz89F34B23NYDPFCgC
          source_id: s_xQ3cCdQ6VM7PUZi2LustLV
          stance: supports
          locator: CBDB:639439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639439）
          source: &a1
            id: s_xQ3cCdQ6VM7PUZi2LustLV
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞雲（CBDB 639439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639439&o=json
            external_identifier: CBDB:639439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_52nkKQmYTXR4PipxVPWMdE
        subject_person_id: p_WE5ZSC8A7v7eD5TnDyAgZh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞雲，清人物。籍贯廣西直隸州，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639439）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hP953BCOcw8PBATrDA76kG
          claim_id: c_52nkKQmYTXR4PipxVPWMdE
          source_id: s_xQ3cCdQ6VM7PUZi2LustLV
          stance: supports
          locator: CBDB:639439
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

# 王瑞雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞雲 | accepted |
| bio.summary | 王瑞雲，清人物。籍贯廣西直隸州，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞雲（CBDB 639439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639439&o=json)
