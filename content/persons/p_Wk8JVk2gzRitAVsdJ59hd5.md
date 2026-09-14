---
schema: wang-person/v1
id: p_Wk8JVk2gzRitAVsdJ59hd5
status: active
merged_into: null
display_name: 王鉉
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kqE5HVLyeRbyp81Th7788D
        subject_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kbWEFSJJm9L55uSS3ifJQR
          claim_id: c_kqE5HVLyeRbyp81Th7788D
          source_id: s_hDj1mGbjf8Nv7yRGLkjzcc
          stance: supports
          locator: CBDB:198267
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198267）
          source: &a1
            id: s_hDj1mGbjf8Nv7yRGLkjzcc
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 198267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198267&o=json
            external_identifier: CBDB:198267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6MQ1cANAKvYnkNacSNMC55
        subject_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2qeWvBUX1XHHXJnCh5WDaG
          claim_id: c_6MQ1cANAKvYnkNacSNMC55
          source_id: s_hDj1mGbjf8Nv7yRGLkjzcc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2RwrZWMvkaio6Xw487BRdA
        subject_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉（生于1420年），明人物。明清進士進士，籍贯臨安，入仕進士。（中国历代人物传记资料库 CBDB 198267）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i1jY1Tf4wLWZQFJRqJAvaK
          claim_id: c_2RwrZWMvkaio6Xw487BRdA
          source_id: s_hDj1mGbjf8Nv7yRGLkjzcc
          stance: supports
          locator: CBDB:198267
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_DE5MixoNSLiG1c6ccSaisR
        status: active
        display_name: 王瑾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DLOXxklgJg0mmn4svtXPT8
        subject_person_id: p_15BkHSFf25QSrVM7giDU5m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BBL7XRc18RX-giHTRQkZz
          claim_id: c_DLOXxklgJg0mmn4svtXPT8
          source_id: s_P5Vpy2qjv8uzitA4FGH7RC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七名：曾孫；重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P5Vpy2qjv8uzitA4FGH7RC
            source_type: api_record
            title: 中国历代人物传记资料库：王思善（CBDB 248754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248754&o=json
            external_identifier: CBDB:248754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_15BkHSFf25QSrVM7giDU5m
        status: active
        display_name: 王思善
        merged_into_person_id: null
    - claim:
        id: c_huIHisXVNkCtLAEjNplaFe
        subject_person_id: p_NT7ZAEhJcb46xtS7i3E6AK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fZfc2ShD5bCKJncYNrB2rp
          claim_id: c_huIHisXVNkCtLAEjNplaFe
          source_id: s_oY6w2nxnt1rAqjx7K4afHC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oY6w2nxnt1rAqjx7K4afHC
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 248765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248765&o=json
            external_identifier: CBDB:248765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NT7ZAEhJcb46xtS7i3E6AK
        status: active
        display_name: 王銓
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_yZm_zvNQVAbvLcjVcyfzDb
        subject_person_id: p_2nAifZeXAA4AbbHwN98Ki7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WcVovhMEVdLeQDv7zZm0-3
          claim_id: c_yZm_zvNQVAbvLcjVcyfzDb
          source_id: s_lnH-3-dJVWRr96_fupm2E3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198267 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_fxIdt1M3YoOmKyv4NzFFUQ
        subject_person_id: p_T2Et1QZGtdNsbCD7J1w6gQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oqpQ8h3h1OaQxIABWQSsHp
          claim_id: c_fxIdt1M3YoOmKyv4NzFFUQ
          source_id: s_c4VQYpNOrlkvJAHBwf4jxL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198267 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_qAdjWMhpUqYtTrvXQW_mjt
        subject_person_id: p_U4NkaLinQjjUMK8CTaoS1g
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2opD6TzuaCdMzOgHWweSJ3
          claim_id: c_qAdjWMhpUqYtTrvXQW_mjt
          source_id: s_AbjyCGOIKj0sOgCcfx3DVE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198267 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_1xG0oe2AKNyNEdJ_A79WtP
        subject_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_caCSjtcSJrVzkjL52dma5V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3feJ3Yzx-_KoXEczH2x0k
          claim_id: c_1xG0oe2AKNyNEdJ_A79WtP
          source_id: s_E6uQzhOeQQRn8glQCtehav
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198267 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ZUm7nFiIln7wYIyRzNwrxP
        subject_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n6JXM3ChEfHP1varCpRpzV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r7T5JLJQx4IMBawD8RC5am
          claim_id: c_ZUm7nFiIln7wYIyRzNwrxP
          source_id: s_SKYsy15jVZq9r6CT-RqyrE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198267 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| birth.date | 1420年 | accepted |
| bio.summary | 王鉉（生于1420年），明人物。明清進士進士，籍贯臨安，入仕進士。（中国历代人物传记资料库 CBDB 198267） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DE5MixoNSLiG1c6ccSaisR | 王瑾 | accepted |
| ancestors | p_15BkHSFf25QSrVM7giDU5m | 王思善 | accepted |
| ancestors | p_NT7ZAEhJcb46xtS7i3E6AK | 王銓 | accepted |
| other | p_2nAifZeXAA4AbbHwN98Ki7 | 王鑫 | accepted |
| other | p_T2Et1QZGtdNsbCD7J1w6gQ | 王鑑 | accepted |
| other | p_U4NkaLinQjjUMK8CTaoS1g | 王鏸 | accepted |
| other | p_caCSjtcSJrVzkjL52dma5V | 王鎮 | accepted |
| other | p_n6JXM3ChEfHP1varCpRpzV | 王鑌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑌（CBDB 248854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248854&o=json)
- [中国历代人物传记资料库：王鏸（CBDB 248842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248842&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 248831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248831&o=json)
- [中国历代人物传记资料库：王瑾（CBDB 248776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248776&o=json)
- [中国历代人物传记资料库：王銓（CBDB 248765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248765&o=json)
- [中国历代人物传记资料库：王思善（CBDB 248754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248754&o=json)
- [中国历代人物传记资料库：王鑫（CBDB 248820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248820&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 198267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198267&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 248809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248809&o=json)
