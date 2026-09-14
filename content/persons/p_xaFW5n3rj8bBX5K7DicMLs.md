---
schema: wang-person/v1
id: p_xaFW5n3rj8bBX5K7DicMLs
status: active
merged_into: null
display_name: 王三成
cbdb_id: 336834
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NgCTXTiYqnByYHpXWyJBMi
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三成，明人物。隆慶二年進士，籍贯威遠。（中国历代人物传记资料库 CBDB 336834）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_C8-5CWY7E-t3il0X_3nI3U
          claim_id: c_NgCTXTiYqnByYHpXWyJBMi
          source_id: s_yXiGeD28dK5Gye8tmF3U4w
          stance: supports
          locator: CBDB:336834
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yXiGeD28dK5Gye8tmF3U4w
            source_type: api_record
            title: 中国历代人物传记资料库：王三成（CBDB 336834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336834&o=json
            external_identifier: CBDB:336834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DRwSDH4LePeqdZrMGkHfnc
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2n68UTd56jKBLdKPBA8jAJ
          claim_id: c_DRwSDH4LePeqdZrMGkHfnc
          source_id: s_yXiGeD28dK5Gye8tmF3U4w
          stance: supports
          locator: CBDB:336834
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OCDjAB-aidEk6RHxlWc8yd
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6m28Zbg3SGKoaGU2ybAsIu
          claim_id: c_OCDjAB-aidEk6RHxlWc8yd
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xSNFJ3uVoBPhNYenKBXfEa
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 126890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json
            external_identifier: CBDB:126890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5eqa2npzGNMyLY9apLyg93
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_jFA4FK7qjjwEsrIDdqNQT5
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Yo2nzrqQ3N54kfTVyv48e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kPTJ4UO0mpeK_RQwXaUc1X
          claim_id: c_jFA4FK7qjjwEsrIDdqNQT5
          source_id: s_QDmNtAj7uARtQpldfUER4Y
          stance: supports
          locator: CBDB：兄弟 王儼（126890）之父／母 王三成
          quotation: null
          interpretation_note: 由兄弟关系推断：王偉 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王偉 之父／母。
          source:
            id: s_QDmNtAj7uARtQpldfUER4Y
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 336840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336840&o=json
            external_identifier: CBDB:336840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Yo2nzrqQ3N54kfTVyv48e
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c__bV7BfNhZfNeFuuICATpBx
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_883HuZzfrY39nQAkGjHotG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AitvxFrBswsKYm_ao-WiIR
          claim_id: c__bV7BfNhZfNeFuuICATpBx
          source_id: s_HczFL3GdmdLYvm3J52Osmm
          stance: supports
          locator: CBDB：兄弟 王儼（126890）之父／母 王三成
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王俊 之父／母。
          source:
            id: s_HczFL3GdmdLYvm3J52Osmm
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 336841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336841&o=json
            external_identifier: CBDB:336841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_883HuZzfrY39nQAkGjHotG
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_DAaGEpqTgUAJCZW09aC4lY
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9f7LwUCdiNQAQe2eHYVGCE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3OD-dD3YX2wgkVUM42_hcq
          claim_id: c_DAaGEpqTgUAJCZW09aC4lY
          source_id: s_T-fyAVt6zYKdjAfw_5r7bA
          stance: supports
          locator: CBDB：兄弟 王儼（126890）之父／母 王三成
          quotation: null
          interpretation_note: 由兄弟关系推断：王脩 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王脩 之父／母。
          source:
            id: s_T-fyAVt6zYKdjAfw_5r7bA
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 336837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336837&o=json
            external_identifier: CBDB:336837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9f7LwUCdiNQAQe2eHYVGCE
        status: active
        display_name: 王脩
        merged_into_person_id: null
    - claim:
        id: c_8n3q-T1kHbVqPXPc-yai-m
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iKkGwo1BEgZB8jBJaojSa4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H3AYId_Ns7BRwOenP97tAj
          claim_id: c_8n3q-T1kHbVqPXPc-yai-m
          source_id: s_sWQYa4v0ZpajJPwxNlTwMG
          stance: supports
          locator: CBDB：兄弟 王儼（126890）之父／母 王三成
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王倫 之父／母。
          source:
            id: s_sWQYa4v0ZpajJPwxNlTwMG
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 336839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336839&o=json
            external_identifier: CBDB:336839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iKkGwo1BEgZB8jBJaojSa4
        status: active
        display_name: 王倫
        merged_into_person_id: null
    - claim:
        id: c_3BCbEb-N1Ivh8XGEGxqeej
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yYvkPN2uXCs332sp1CZGEJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3E40H5Y3tBH-1ZW_FbaDqx
          claim_id: c_3BCbEb-N1Ivh8XGEGxqeej
          source_id: s_4qrs2EiYIZzR5KkZdJnCwz
          stance: supports
          locator: CBDB：兄弟 王儼（126890）之父／母 王三成
          quotation: null
          interpretation_note: 由兄弟关系推断：王伊 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王伊 之父／母。
          source:
            id: s_4qrs2EiYIZzR5KkZdJnCwz
            source_type: api_record
            title: 中国历代人物传记资料库：王伊（CBDB 336838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336838&o=json
            external_identifier: CBDB:336838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yYvkPN2uXCs332sp1CZGEJ
        status: active
        display_name: 王伊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三成，明人物。隆慶二年進士，籍贯威遠。（中国历代人物传记资料库 CBDB 336834） | accepted |
| name.primary | 王三成 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5eqa2npzGNMyLY9apLyg93 | 王儼 | accepted |
| children | p_1Yo2nzrqQ3N54kfTVyv48e | 王偉 | accepted |
| children | p_883HuZzfrY39nQAkGjHotG | 王俊 | accepted |
| children | p_9f7LwUCdiNQAQe2eHYVGCE | 王脩 | accepted |
| children | p_iKkGwo1BEgZB8jBJaojSa4 | 王倫 | accepted |
| children | p_yYvkPN2uXCs332sp1CZGEJ | 王伊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 336841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336841&o=json)
- [中国历代人物传记资料库：王倫（CBDB 336839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336839&o=json)
- [中国历代人物传记资料库：王三成（CBDB 336834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336834&o=json)
- [中国历代人物传记资料库：王偉（CBDB 336840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336840&o=json)
- [中国历代人物传记资料库：王脩（CBDB 336837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336837&o=json)
- [中国历代人物传记资料库：王儼（CBDB 126890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json)
- [中国历代人物传记资料库：王伊（CBDB 336838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336838&o=json)
