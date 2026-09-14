---
schema: wang-person/v1
id: p_wKBGi2Z4dvP6wpgn4ZpyJS
status: active
merged_into: null
display_name: 王端
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YvFXLk54KEgPQfmoDwknFc
        subject_person_id: p_wKBGi2Z4dvP6wpgn4ZpyJS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_baQBYydoCBrcL1sJgq4RAN
          claim_id: c_YvFXLk54KEgPQfmoDwknFc
          source_id: s_MHLL6r9p6K2KKjJTxULmbm
          stance: supports
          locator: CBDB:240943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240943）
          source: &a1
            id: s_MHLL6r9p6K2KKjJTxULmbm
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 240943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240943&o=json
            external_identifier: CBDB:240943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aBDxxa56pk2a5k3DFr7m73
        subject_person_id: p_wKBGi2Z4dvP6wpgn4ZpyJS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端，明人物。正統十三年進士，籍贯武進。（中国历代人物传记资料库 CBDB 240943）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1yLYf5Y38dsU65X2t0pCBc
          claim_id: c_aBDxxa56pk2a5k3DFr7m73
          source_id: s_MHLL6r9p6K2KKjJTxULmbm
          stance: supports
          locator: CBDB:240943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-PjFNyisNE3u57WnDdIjvA
        subject_person_id: p_ANoeF7AFRpyFDzxqPKjJwq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wKBGi2Z4dvP6wpgn4ZpyJS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m9lhDnup4edLEFYHJ14XCA
          claim_id: c_-PjFNyisNE3u57WnDdIjvA
          source_id: s_VmPY2mG4vO7l3NFMSocqrC
          stance: supports
          locator: CBDB：兄弟 王讓（126897）之父／母 王肅
          quotation: null
          interpretation_note: 由兄弟关系推断：王端 与 王讓 为同胞（CBDB 记「兄」），王讓 之父／母即 王端 之父／母。
          source:
            id: s_VmPY2mG4vO7l3NFMSocqrC
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 240943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240943&o=json
            external_identifier: CBDB:240943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ANoeF7AFRpyFDzxqPKjJwq
        status: active
        display_name: 王肅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sUBQ3NwQLMtQPLI9rUElQr
        subject_person_id: p_Z5S5a3vTHgwZid8XEKrJG6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wKBGi2Z4dvP6wpgn4ZpyJS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E5sCQxIYhGj14JOAfbL1Ta
          claim_id: c_sUBQ3NwQLMtQPLI9rUElQr
          source_id: s_VmPY2mG4vO7l3NFMSocqrC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126897 王讓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VmPY2mG4vO7l3NFMSocqrC
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 240943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240943&o=json
            external_identifier: CBDB:240943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z5S5a3vTHgwZid8XEKrJG6
        status: active
        display_name: 王讓
        merged_into_person_id: null
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | 王端，明人物。正統十三年進士，籍贯武進。（中国历代人物传记资料库 CBDB 240943） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ANoeF7AFRpyFDzxqPKjJwq | 王肅 | accepted |
| other | p_Z5S5a3vTHgwZid8XEKrJG6 | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 240943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240943&o=json)
