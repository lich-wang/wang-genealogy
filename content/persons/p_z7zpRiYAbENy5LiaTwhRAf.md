---
schema: wang-person/v1
id: p_z7zpRiYAbENy5LiaTwhRAf
status: active
merged_into: null
display_name: 王鈺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jEB9M76UuwuxPESGN12DMn
        subject_person_id: p_z7zpRiYAbENy5LiaTwhRAf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wCp9M5LozAprxX8bJDQbX3
          claim_id: c_jEB9M76UuwuxPESGN12DMn
          source_id: s_VQRXRNcm2KHHEBp6aL95C4
          stance: supports
          locator: CBDB:212333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212333）
          source: &a1
            id: s_VQRXRNcm2KHHEBp6aL95C4
            source_type: api_record
            title: 中国历代人物传记资料库：王鈺（CBDB 212333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212333&o=json
            external_identifier: CBDB:212333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GJGt8ewSKQSNcxtsLHp43g
        subject_person_id: p_z7zpRiYAbENy5LiaTwhRAf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鈺，明人物。萬曆二年進士，籍贯山陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 212333）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tlpVqW8Fk3YO9--5AkDJzH
          claim_id: c_GJGt8ewSKQSNcxtsLHp43g
          source_id: s_VQRXRNcm2KHHEBp6aL95C4
          stance: supports
          locator: CBDB:212333
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DuGZ4glA4MtSx5ohqFMoZZ
        subject_person_id: p_z7zpRiYAbENy5LiaTwhRAf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bGr6oW3hdV82DMLPiZb28N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ELIp4ZtyXDeSldRe6-nEas
          claim_id: c_DuGZ4glA4MtSx5ohqFMoZZ
          source_id: s_VQRXRNcm2KHHEBp6aL95C4
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bGr6oW3hdV82DMLPiZb28N
        status: active
        display_name: 王泮
        merged_into_person_id: null
    - claim:
        id: c_m_iDXKldfjJyfgd65tvpTm
        subject_person_id: p_z7zpRiYAbENy5LiaTwhRAf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hwzFAo7QZH1KXSNzLqx1YA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qzk-3iXH4l7EeqJ5mYCv8D
          claim_id: c_m_iDXKldfjJyfgd65tvpTm
          source_id: s_wO3kaUHy1JvvMie4RvnmFU
          stance: supports
          locator: CBDB：兄弟 王泮（126558）之父／母 王鈺
          quotation: null
          interpretation_note: 由兄弟关系推断：王濂 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王濂 之父／母。
          source:
            id: s_wO3kaUHy1JvvMie4RvnmFU
            source_type: api_record
            title: 中国历代人物传记资料库：王濂（CBDB 212336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212336&o=json
            external_identifier: CBDB:212336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hwzFAo7QZH1KXSNzLqx1YA
        status: active
        display_name: 王濂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鈺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈺 | accepted |
| bio.summary | 王鈺，明人物。萬曆二年進士，籍贯山陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 212333） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bGr6oW3hdV82DMLPiZb28N | 王泮 | accepted |
| children | p_hwzFAo7QZH1KXSNzLqx1YA | 王濂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濂（CBDB 212336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212336&o=json)
- [中国历代人物传记资料库：王鈺（CBDB 212333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212333&o=json)
