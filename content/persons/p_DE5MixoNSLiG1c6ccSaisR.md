---
schema: wang-person/v1
id: p_DE5MixoNSLiG1c6ccSaisR
status: active
merged_into: null
display_name: 王瑾
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HpeSGTqnwSGKZKzoDe5Fqc
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6gJVjzPSyN5dpabWRnJuh6
          claim_id: c_HpeSGTqnwSGKZKzoDe5Fqc
          source_id: s_Uh2Da2naAJjqhQY25yNzkD
          stance: supports
          locator: CBDB:248776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248776）
          source: &a1
            id: s_Uh2Da2naAJjqhQY25yNzkD
            source_type: api_record
            title: 中国历代人物传记资料库：王瑾（CBDB 248776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248776&o=json
            external_identifier: CBDB:248776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.161Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9GwcTYvcNYUi7w2Db3B6D
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248776）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F1FTbb0IpMAjF84iuqrpA_
          claim_id: c_E9GwcTYvcNYUi7w2Db3B6D
          source_id: s_Uh2Da2naAJjqhQY25yNzkD
          stance: supports
          locator: CBDB:248776
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OEeXrfJE9ImIFj--UDa8H3
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSxnkKhBHHDJPjZTaezHvW
          claim_id: c_OEeXrfJE9ImIFj--UDa8H3
          source_id: s_Uh2Da2naAJjqhQY25yNzkD
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wk8JVk2gzRitAVsdJ59hd5
        status: active
        display_name: 王鉉
        merged_into_person_id: null
    - claim:
        id: c_R4aleTYpsenOuRGsZPf88N
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2nAifZeXAA4AbbHwN98Ki7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kG8PihGPqEWbY8m8HqCg7n
          claim_id: c_R4aleTYpsenOuRGsZPf88N
          source_id: s_lnH-3-dJVWRr96_fupm2E3
          stance: supports
          locator: CBDB：兄弟 王鉉（198267）之父／母 王瑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑫 与 王鉉 为同胞（CBDB 记「兄」），王鉉 之父／母即 王鑫 之父／母。
          source:
            id: s_lnH-3-dJVWRr96_fupm2E3
            source_type: api_record
            title: 中国历代人物传记资料库：王鑫（CBDB 248820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248820&o=json
            external_identifier: CBDB:248820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2nAifZeXAA4AbbHwN98Ki7
        status: active
        display_name: 王鑫
        merged_into_person_id: null
    - claim:
        id: c_nJQ5yZ-3Dnvm4XsoDH9a_O
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T2Et1QZGtdNsbCD7J1w6gQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hFJB7iZlbAOPo_SXnhZrNG
          claim_id: c_nJQ5yZ-3Dnvm4XsoDH9a_O
          source_id: s_c4VQYpNOrlkvJAHBwf4jxL
          stance: supports
          locator: CBDB：兄弟 王鉉（198267）之父／母 王瑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王鉉 为同胞（CBDB 记「兄」），王鉉 之父／母即 王鑑 之父／母。
          source:
            id: s_c4VQYpNOrlkvJAHBwf4jxL
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 248831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248831&o=json
            external_identifier: CBDB:248831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T2Et1QZGtdNsbCD7J1w6gQ
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_gkSHG1cmy0Wr5OCcYtKZ5_
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U4NkaLinQjjUMK8CTaoS1g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89IEtYlXgdNO0vACRInOvf
          claim_id: c_gkSHG1cmy0Wr5OCcYtKZ5_
          source_id: s_AbjyCGOIKj0sOgCcfx3DVE
          stance: supports
          locator: CBDB：兄弟 王鉉（198267）之父／母 王瑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏸 与 王鉉 为同胞（CBDB 记「兄」），王鉉 之父／母即 王鏸 之父／母。
          source:
            id: s_AbjyCGOIKj0sOgCcfx3DVE
            source_type: api_record
            title: 中国历代人物传记资料库：王鏸（CBDB 248842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248842&o=json
            external_identifier: CBDB:248842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U4NkaLinQjjUMK8CTaoS1g
        status: active
        display_name: 王鏸
        merged_into_person_id: null
    - claim:
        id: c_Pu5aS0lLkcL32lDC8Pa2px
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_caCSjtcSJrVzkjL52dma5V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SD4b-tPxuXodCpqDurqQWq
          claim_id: c_Pu5aS0lLkcL32lDC8Pa2px
          source_id: s_E6uQzhOeQQRn8glQCtehav
          stance: supports
          locator: CBDB：兄弟 王鉉（198267）之父／母 王瑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎮 与 王鉉 为同胞（CBDB 记「弟」），王鉉 之父／母即 王鎮 之父／母。
          source:
            id: s_E6uQzhOeQQRn8glQCtehav
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 248809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248809&o=json
            external_identifier: CBDB:248809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_caCSjtcSJrVzkjL52dma5V
        status: active
        display_name: 王鎮
        merged_into_person_id: null
    - claim:
        id: c_Vg8RuDFhdx5_8ZsMIb_Xp4
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n6JXM3ChEfHP1varCpRpzV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V8GXoghNtKatfjUiCqaihI
          claim_id: c_Vg8RuDFhdx5_8ZsMIb_Xp4
          source_id: s_SKYsy15jVZq9r6CT-RqyrE
          stance: supports
          locator: CBDB：兄弟 王鉉（198267）之父／母 王瑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑌 与 王鉉 为同胞（CBDB 记「兄」），王鉉 之父／母即 王鑌 之父／母。
          source:
            id: s_SKYsy15jVZq9r6CT-RqyrE
            source_type: api_record
            title: 中国历代人物传记资料库：王鑌（CBDB 248854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248854&o=json
            external_identifier: CBDB:248854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n6JXM3ChEfHP1varCpRpzV
        status: active
        display_name: 王鑌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑾 | accepted |
| bio.summary | 王瑾，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248776） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Wk8JVk2gzRitAVsdJ59hd5 | 王鉉 | accepted |
| children | p_2nAifZeXAA4AbbHwN98Ki7 | 王鑫 | accepted |
| children | p_T2Et1QZGtdNsbCD7J1w6gQ | 王鑑 | accepted |
| children | p_U4NkaLinQjjUMK8CTaoS1g | 王鏸 | accepted |
| children | p_caCSjtcSJrVzkjL52dma5V | 王鎮 | accepted |
| children | p_n6JXM3ChEfHP1varCpRpzV | 王鑌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑌（CBDB 248854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248854&o=json)
- [中国历代人物传记资料库：王鏸（CBDB 248842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248842&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 248831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248831&o=json)
- [中国历代人物传记资料库：王瑾（CBDB 248776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248776&o=json)
- [中国历代人物传记资料库：王鑫（CBDB 248820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248820&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 248809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248809&o=json)
