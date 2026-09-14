---
schema: wang-person/v1
id: p_ddM5Qh65sCgaYKcg1zCuPt
status: active
merged_into: null
display_name: 王希孟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JLfXB9Nz1Tjgs9n8DnEDPm
        subject_person_id: p_ddM5Qh65sCgaYKcg1zCuPt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希孟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ubaCQpGZpY3pUJ1Vf68ZzX
          claim_id: c_JLfXB9Nz1Tjgs9n8DnEDPm
          source_id: s_ekrd11fY4v9GNpAW5Cj4y6
          stance: supports
          locator: CBDB:287990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287990）
          source: &a1
            id: s_ekrd11fY4v9GNpAW5Cj4y6
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 287990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287990&o=json
            external_identifier: CBDB:287990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fXtTywquvjxyG78QD29sfF
        subject_person_id: p_ddM5Qh65sCgaYKcg1zCuPt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希孟，明人物。嘉靖八年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 287990）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LYtiZbB4s28c7PELfD6Dyl
          claim_id: c_fXtTywquvjxyG78QD29sfF
          source_id: s_ekrd11fY4v9GNpAW5Cj4y6
          stance: supports
          locator: CBDB:287990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N_f7UNgnC0HIj2oT3qAq6Z
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ddM5Qh65sCgaYKcg1zCuPt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xlN1pEhw5cNvTwUUUgNmO1
          claim_id: c_N_f7UNgnC0HIj2oT3qAq6Z
          source_id: s_2oEV-5Gw-aRdsytt1tZR4X
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王希孟 与 王希文 为同胞（CBDB 记「兄」），王希文 之父／母即 王希孟 之父／母。
          source:
            id: s_2oEV-5Gw-aRdsytt1tZR4X
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 287990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287990&o=json
            external_identifier: CBDB:287990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4jND336KsTQjFJcBTReoib
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Le9o6nVzM40GMlypBx3A-S
        subject_person_id: p_ddM5Qh65sCgaYKcg1zCuPt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UWrY2n0cWB5I4ZSe_leUxP
          claim_id: c_Le9o6nVzM40GMlypBx3A-S
          source_id: s_2oEV-5Gw-aRdsytt1tZR4X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2oEV-5Gw-aRdsytt1tZR4X
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 287990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287990&o=json
            external_identifier: CBDB:287990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tz8uWFvWRBpp9FN5sbMR5o
        status: active
        display_name: 王希文
        merged_into_person_id: null
---

# 王希孟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希孟 | accepted |
| bio.summary | 王希孟，明人物。嘉靖八年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 287990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4jND336KsTQjFJcBTReoib | 王瑄 | accepted |
| other | p_tz8uWFvWRBpp9FN5sbMR5o | 王希文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希孟（CBDB 287990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287990&o=json)
