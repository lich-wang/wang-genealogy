---
schema: wang-person/v1
id: p_86febAz6iqfVBvQLVBFymx
status: active
merged_into: null
display_name: 王珍業
cbdb_id: 146550
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xwkUmZ9xwuBRE8SDLadUG3
        subject_person_id: p_86febAz6iqfVBvQLVBFymx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍業，南北朝人物。籍贯芒山，曾任襲爵、縣開國公。（中国历代人物传记资料库 CBDB 146550）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qyMmAphKDzHrOmtnU0gYI7
          claim_id: c_xwkUmZ9xwuBRE8SDLadUG3
          source_id: s_1JZDY4CnVdW3Q9zHuJY3au
          stance: supports
          locator: CBDB:146550
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1JZDY4CnVdW3Q9zHuJY3au
            source_type: api_record
            title: 中国历代人物传记资料库：王珍業（CBDB 146550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146550&o=json
            external_identifier: CBDB:146550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yvu63V6M2wnbcj6rAqNpYS
        subject_person_id: p_86febAz6iqfVBvQLVBFymx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M2GixYT94jPVRAGBAnvD4z
          claim_id: c_Yvu63V6M2wnbcj6rAqNpYS
          source_id: s_1JZDY4CnVdW3Q9zHuJY3au
          stance: supports
          locator: CBDB:146550
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 南北朝
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5MoGP_I2Z044MV1d0Bkfoe
        subject_person_id: p_86febAz6iqfVBvQLVBFymx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6yKTewNViSQGLc37XFPx1S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tLfaTSPgK_wDH5DBxkADVG
          claim_id: c_5MoGP_I2Z044MV1d0Bkfoe
          source_id: s_x2kjJ8ZoRTFBVdJLVmsDVh
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x2kjJ8ZoRTFBVdJLVmsDVh
            source_type: api_record
            title: 中国历代人物传记资料库：王護（CBDB 138771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138771&o=json
            external_identifier: CBDB:138771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6yKTewNViSQGLc37XFPx1S
        status: active
        display_name: 王護
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珍業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珍業，南北朝人物。籍贯芒山，曾任襲爵、縣開國公。（中国历代人物传记资料库 CBDB 146550） | accepted |
| name.primary | 王珍業 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6yKTewNViSQGLc37XFPx1S | 王護 | accepted |

## 外部来源

- [中国历代人物传记资料库：王護（CBDB 138771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138771&o=json)
- [中国历代人物传记资料库：王珍業（CBDB 146550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146550&o=json)
