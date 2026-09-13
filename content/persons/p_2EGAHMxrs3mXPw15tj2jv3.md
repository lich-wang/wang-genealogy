---
schema: wang-person/v1
id: p_2EGAHMxrs3mXPw15tj2jv3
status: active
merged_into: null
display_name: 王仁諒
cbdb_id: 22087
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_skatL8KhFtjbGRdFHotEXa
        subject_person_id: p_2EGAHMxrs3mXPw15tj2jv3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁諒，宋人物。籍贯無錫。（中国历代人物传记资料库 CBDB 22087）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Ay0ALl0J9EYgmWT7FaWu2J
          claim_id: c_skatL8KhFtjbGRdFHotEXa
          source_id: s_ckQowmoE91AwxY7DjwfQdY
          stance: supports
          locator: CBDB:22087
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ckQowmoE91AwxY7DjwfQdY
            source_type: api_record
            title: 中国历代人物传记资料库：王仁諒（CBDB 22087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22087&o=json
            external_identifier: CBDB:22087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pds4i2NsUTx8ZaLcNHww5g
        subject_person_id: p_2EGAHMxrs3mXPw15tj2jv3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WnWQUxnEH4fh5WPfbqMM8x
          claim_id: c_pds4i2NsUTx8ZaLcNHww5g
          source_id: s_ckQowmoE91AwxY7DjwfQdY
          stance: supports
          locator: CBDB:22087
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kNPSDnkEDm_2zKOazt7nVJ
        subject_person_id: p_dAbN991MzyFE7PH5ibfiRk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2EGAHMxrs3mXPw15tj2jv3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3eeG8vO1t6bW0XB1MbFPJ
          claim_id: c_kNPSDnkEDm_2zKOazt7nVJ
          source_id: s_7h8j8hvisQbD5UrTsP19dD
          stance: supports
          locator: CBDB 双向互证（子 王仁諒 ⇄ 父 王璡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7h8j8hvisQbD5UrTsP19dD
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 22086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22086&o=json
            external_identifier: CBDB:22086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dAbN991MzyFE7PH5ibfiRk
        status: active
        display_name: 王璡
        merged_into_person_id: null
  children:
    - claim:
        id: c_lzO50q4H1-tAWtOZplQ7pw
        subject_person_id: p_2EGAHMxrs3mXPw15tj2jv3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sHFJ2ZsHcQtaAPhRiY7kgq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2r-CZPKuDp7OsgdMEwtekQ
          claim_id: c_lzO50q4H1-tAWtOZplQ7pw
          source_id: s_9CCC3H723xJKDs42i1sZ2s
          stance: supports
          locator: CBDB 双向互证（父 王仁諒 ⇄ 子 王軾）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_9CCC3H723xJKDs42i1sZ2s
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 22088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22088&o=json
            external_identifier: CBDB:22088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sHFJ2ZsHcQtaAPhRiY7kgq
        status: active
        display_name: 王軾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁諒，宋人物。籍贯無錫。（中国历代人物传记资料库 CBDB 22087） | accepted |
| name.primary | 王仁諒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dAbN991MzyFE7PH5ibfiRk | 王璡 | accepted |
| children | p_sHFJ2ZsHcQtaAPhRiY7kgq | 王軾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璡（CBDB 22086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22086&o=json)
- [中国历代人物传记资料库：王仁諒（CBDB 22087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22087&o=json)
- [中国历代人物传记资料库：王軾（CBDB 22088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22088&o=json)
