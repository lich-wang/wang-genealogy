---
schema: wang-person/v1
id: p_tgsYcGLBHirWiZHRoYiDdX
status: active
merged_into: null
display_name: 王庠皇
cbdb_id: 437536
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gHLStkMFP2TkexuS3faMxf
        subject_person_id: p_tgsYcGLBHirWiZHRoYiDdX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庠皇，史料所见人物。本项目依据《中国历代人物传记资料库：王庠皇（CBDB 437536）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_mPP69j1jv6wWZfx4BBW55W
          claim_id: c_gHLStkMFP2TkexuS3faMxf
          source_id: s_dFCAbfK4gxKkU7ueG49m8x
          stance: supports
          locator: CBDB:437536
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_dFCAbfK4gxKkU7ueG49m8x
            source_type: api_record
            title: 中国历代人物传记资料库：王庠皇（CBDB 437536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437536&o=json
            external_identifier: CBDB:437536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dCPudzdBAq6BGM9ifFNBkb
        subject_person_id: p_tgsYcGLBHirWiZHRoYiDdX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庠皇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KqAWF2EGJL14wtswk2gGRP
          claim_id: c_dCPudzdBAq6BGM9ifFNBkb
          source_id: s_dFCAbfK4gxKkU7ueG49m8x
          stance: supports
          locator: CBDB:437536
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6501-6600）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_j_pvMlxo6aoBo3pyi0Gt49
        subject_person_id: p_tgsYcGLBHirWiZHRoYiDdX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ePUgH55QWsG6Hauqd4raHD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CSetPUQo2Yu1nYgmlf5ITX
          claim_id: c_j_pvMlxo6aoBo3pyi0Gt49
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（父 王庠皇 ⇄ 子 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_g4VKr2D6htM499vC6zENon
            source_type: api_record
            title: 中国历代人物传记资料库：王文彪（CBDB 101100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json
            external_identifier: CBDB:101100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ePUgH55QWsG6Hauqd4raHD
        status: active
        display_name: 王文彪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jlowqyOxZ307q1wWDg2Z4C
        subject_person_id: p_tgsYcGLBHirWiZHRoYiDdX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YCnDNNFRmYW6388U63sECt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1ktavKul3H9P8mdr0Bm8u
          claim_id: c_jlowqyOxZ307q1wWDg2Z4C
          source_id: s_zW8mettDwHY8JyYp_I47jL
          stance: supports
          locator: CBDB 双向互证（妻子 郭氏(王庠皇妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zW8mettDwHY8JyYp_I47jL
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王庠皇妻)（CBDB 437537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437537&o=json
            external_identifier: CBDB:437537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YCnDNNFRmYW6388U63sECt
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王庠皇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庠皇，史料所见人物。本项目依据《中国历代人物传记资料库：王庠皇（CBDB 437536）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王庠皇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ePUgH55QWsG6Hauqd4raHD | 王文彪 | accepted |
| spouses | p_YCnDNNFRmYW6388U63sECt | 郭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王庠皇妻)（CBDB 437537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437537&o=json)
- [中国历代人物传记资料库：王文彪（CBDB 101100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json)
- [中国历代人物传记资料库：王庠皇（CBDB 437536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437536&o=json)
