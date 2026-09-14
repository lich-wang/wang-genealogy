---
schema: wang-person/v1
id: p_GxB4u6sQCt6jzEUcjwwKLA
status: active
merged_into: null
display_name: 王克厚
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LeY4mSSFtEDDB9L8WNTJm2
        subject_person_id: p_GxB4u6sQCt6jzEUcjwwKLA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eGLc64aMbzR4mggW8GHKCM
          claim_id: c_LeY4mSSFtEDDB9L8WNTJm2
          source_id: s_NGeBdjBS3EYXZR4PnTYohA
          stance: supports
          locator: CBDB:262669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262669）
          source: &a1
            id: s_NGeBdjBS3EYXZR4PnTYohA
            source_type: api_record
            title: 中国历代人物传记资料库：王克厚（CBDB 262669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262669&o=json
            external_identifier: CBDB:262669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EU935QMT4boVemHMghTKct
        subject_person_id: p_GxB4u6sQCt6jzEUcjwwKLA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克厚，明人物。弘治三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 262669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9T9P_hb4xBp3gnd2MMUT-x
          claim_id: c_EU935QMT4boVemHMghTKct
          source_id: s_NGeBdjBS3EYXZR4PnTYohA
          stance: supports
          locator: CBDB:262669
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0-lb2Xkphz7qPweGBaY6Vi
        subject_person_id: p_GxB4u6sQCt6jzEUcjwwKLA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sCt13UNRrBt2qKTE8fxxQi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mHqFIyfDXEUKZ0U6E1wsGM
          claim_id: c_0-lb2Xkphz7qPweGBaY6Vi
          source_id: s_NGeBdjBS3EYXZR4PnTYohA
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sCt13UNRrBt2qKTE8fxxQi
        status: active
        display_name: 王鉞
        merged_into_person_id: null
    - claim:
        id: c_YFfkQDfxc9Vx4Auu8v8sWF
        subject_person_id: p_GxB4u6sQCt6jzEUcjwwKLA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_19yi77kuN8w8f2UW7vbua8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lzxooWOgz7A6WQHCvQ9DeR
          claim_id: c_YFfkQDfxc9Vx4Auu8v8sWF
          source_id: s_z-QN12TOHWbyMVTvQoIUOx
          stance: supports
          locator: CBDB：兄弟 王鉞（200774）之父／母 王克厚
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎋 与 王鉞 为同胞（CBDB 记「弟」），王鉞 之父／母即 王鎋 之父／母。
          source:
            id: s_z-QN12TOHWbyMVTvQoIUOx
            source_type: api_record
            title: 中国历代人物传记资料库：王鎋（CBDB 262675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262675&o=json
            external_identifier: CBDB:262675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_19yi77kuN8w8f2UW7vbua8
        status: active
        display_name: 王鎋
        merged_into_person_id: null
    - claim:
        id: c_h7GV2UQ22pMi7NG0Q6pMIC
        subject_person_id: p_GxB4u6sQCt6jzEUcjwwKLA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KZd6qcDybaQzJ6GHqUMa4k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1iz2vFG-WXVssH63pDs5Fm
          claim_id: c_h7GV2UQ22pMi7NG0Q6pMIC
          source_id: s_AHgTuVsQHbrrfUiQ9aJiXF
          stance: supports
          locator: CBDB：兄弟 王鉞（200774）之父／母 王克厚
          quotation: null
          interpretation_note: 由兄弟关系推断：王錧 与 王鉞 为同胞（CBDB 记「弟」），王鉞 之父／母即 王錧 之父／母。
          source:
            id: s_AHgTuVsQHbrrfUiQ9aJiXF
            source_type: api_record
            title: 中国历代人物传记资料库：王錧（CBDB 262674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262674&o=json
            external_identifier: CBDB:262674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KZd6qcDybaQzJ6GHqUMa4k
        status: active
        display_name: 王錧
        merged_into_person_id: null
    - claim:
        id: c_zdtYN_S7u4_KnXbD6-RMNs
        subject_person_id: p_GxB4u6sQCt6jzEUcjwwKLA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UFFrjGqXYXhuMcfPVqZdkL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oV7zf_d4L586bfwbsz5VVd
          claim_id: c_zdtYN_S7u4_KnXbD6-RMNs
          source_id: s_pTbTBiYBPqRA8Gukt1jE7W
          stance: supports
          locator: CBDB：兄弟 王鉞（200774）之父／母 王克厚
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈇 与 王鉞 为同胞（CBDB 记「弟」），王鉞 之父／母即 王鈇 之父／母。
          source:
            id: s_pTbTBiYBPqRA8Gukt1jE7W
            source_type: api_record
            title: 中国历代人物传记资料库：王鈇（CBDB 262677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262677&o=json
            external_identifier: CBDB:262677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UFFrjGqXYXhuMcfPVqZdkL
        status: active
        display_name: 王鈇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克厚 | accepted |
| bio.summary | 王克厚，明人物。弘治三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 262669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sCt13UNRrBt2qKTE8fxxQi | 王鉞 | accepted |
| children | p_19yi77kuN8w8f2UW7vbua8 | 王鎋 | accepted |
| children | p_KZd6qcDybaQzJ6GHqUMa4k | 王錧 | accepted |
| children | p_UFFrjGqXYXhuMcfPVqZdkL | 王鈇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈇（CBDB 262677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262677&o=json)
- [中国历代人物传记资料库：王錧（CBDB 262674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262674&o=json)
- [中国历代人物传记资料库：王克厚（CBDB 262669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262669&o=json)
- [中国历代人物传记资料库：王鎋（CBDB 262675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262675&o=json)
