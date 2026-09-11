---
schema: wang-person/v1
id: p_nN9WKKMeX1poVrzPB2Jdqz
status: active
merged_into: null
display_name: 王元珪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wj599EFMYMMrAFARrvrT6P
        subject_person_id: p_nN9WKKMeX1poVrzPB2Jdqz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rotWrwwNgWxBPKto5Gy4vP
          claim_id: c_Wj599EFMYMMrAFARrvrT6P
          source_id: s_QiL4iEGCYmVG342LpSKCZP
          stance: supports
          locator: CBDB:164193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（164193）
          source: &a1
            id: s_QiL4iEGCYmVG342LpSKCZP
            source_type: api_record
            title: 中国历代人物传记资料库：王元珪（CBDB 164193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164193&o=json
            external_identifier: CBDB:164193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKNhpc1e81wPLKVvzuucyU
        subject_person_id: p_nN9WKKMeX1poVrzPB2Jdqz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元珪，史料所见人物。本项目依据《中国历代人物传记资料库：王元珪（CBDB 164193）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Q6SLBIKXGQMCWlea6P44p
          claim_id: c_EKNhpc1e81wPLKVvzuucyU
          source_id: s_QiL4iEGCYmVG342LpSKCZP
          stance: supports
          locator: CBDB:164193
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U2ND0xTUUVTA2D8nfRKoyy
        subject_person_id: p_mZq4zdR7q1GNcMA8vQFJ78
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nN9WKKMeX1poVrzPB2Jdqz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BYKahjdcnWdLAyPuHK1OZm
          claim_id: c_U2ND0xTUUVTA2D8nfRKoyy
          source_id: s_QiL4iEGCYmVG342LpSKCZP
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan120：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mZq4zdR7q1GNcMA8vQFJ78
        status: active
        display_name: 王祖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元珪 | accepted |
| bio.summary | 王元珪，史料所见人物。本项目依据《中国历代人物传记资料库：王元珪（CBDB 164193）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mZq4zdR7q1GNcMA8vQFJ78 | 王祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元珪（CBDB 164193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164193&o=json)
