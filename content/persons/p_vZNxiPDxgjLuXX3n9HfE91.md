---
schema: wang-person/v1
id: p_vZNxiPDxgjLuXX3n9HfE91
status: active
merged_into: null
display_name: 王祿
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7fLpwviHh9S1y7FVqwL6NT
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PcCUwLXsNVSci7VSMFj6g4
          claim_id: c_7fLpwviHh9S1y7FVqwL6NT
          source_id: s_6c4vEM77ZyfmuYL6J4jzQg
          stance: supports
          locator: CBDB:313041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313041）
          source: &a1
            id: s_6c4vEM77ZyfmuYL6J4jzQg
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 313041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313041&o=json
            external_identifier: CBDB:313041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yEekBhKdQYvsrhJraAeogH
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿，明人物。嘉靖二十九年進士，籍贯聊城，曾任嘉議大夫、運使。（中国历代人物传记资料库 CBDB 313041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_35W0EuVSSeRCoXM-ur87F9
          claim_id: c_yEekBhKdQYvsrhJraAeogH
          source_id: s_6c4vEM77ZyfmuYL6J4jzQg
          stance: supports
          locator: CBDB:313041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2cnXpx5H-n3g8WWM-TK3Jb
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JKkS2K07VsQE7F_Vk2DiC0
          claim_id: c_2cnXpx5H-n3g8WWM-TK3Jb
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QAN5QDh2Pfie4nG4gBfdF4
            source_type: api_record
            title: 中国历代人物传记资料库：王應璧（CBDB 203997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203997&o=json
            external_identifier: CBDB:203997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        status: active
        display_name: 王應璧
        merged_into_person_id: null
    - claim:
        id: c_E0y3rIo_zUucunh9mXQwxg
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1uTPawXLyRPKzNbKDcQz5i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tlUczImNscLOGf1hpoYfJB
          claim_id: c_E0y3rIo_zUucunh9mXQwxg
          source_id: s_2e3zpE522JInUfjMo4nyRV
          stance: supports
          locator: CBDB：兄弟 王應璧（203997）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王應麟 与 王應璧 为同胞（CBDB 记「兄」），王應璧 之父／母即 王應麟 之父／母。
          source:
            id: s_2e3zpE522JInUfjMo4nyRV
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 313052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313052&o=json
            external_identifier: CBDB:313052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1uTPawXLyRPKzNbKDcQz5i
        status: active
        display_name: 王應麟
        merged_into_person_id: null
    - claim:
        id: c_gATZ5v7IxNKqrR7xLVcV9i
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6AEhsWW3wUbv8nmJYGazPH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mOZPtkQ2Lc8CGGn21glte
          claim_id: c_gATZ5v7IxNKqrR7xLVcV9i
          source_id: s_dr_LdH3nREb1AdLW00eU_u
          stance: supports
          locator: CBDB：兄弟 王應璧（203997）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王應參 与 王應璧 为同胞（CBDB 记「兄」），王應璧 之父／母即 王應參 之父／母。
          source:
            id: s_dr_LdH3nREb1AdLW00eU_u
            source_type: api_record
            title: 中国历代人物传记资料库：王應參（CBDB 313050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313050&o=json
            external_identifier: CBDB:313050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6AEhsWW3wUbv8nmJYGazPH
        status: active
        display_name: 王應參
        merged_into_person_id: null
    - claim:
        id: c_ncPtpW0wU3GqWcAI943vnc
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GEavrdLjiFdZNp8BnrXwrs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3i2VwvvXiuiCpGxTcLUll5
          claim_id: c_ncPtpW0wU3GqWcAI943vnc
          source_id: s_HVlCN3I-friDArRDHQq6iA
          stance: supports
          locator: CBDB：兄弟 王應璧（203997）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王應麒 与 王應璧 为同胞（CBDB 记「弟」），王應璧 之父／母即 王應麒 之父／母。
          source:
            id: s_HVlCN3I-friDArRDHQq6iA
            source_type: api_record
            title: 中国历代人物传记资料库：王應麒（CBDB 313048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313048&o=json
            external_identifier: CBDB:313048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GEavrdLjiFdZNp8BnrXwrs
        status: active
        display_name: 王應麒
        merged_into_person_id: null
    - claim:
        id: c_M18UN5kfizvHv1uz3iweJm
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GpqU5i8K9hgEkHc4PsusJW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u_u5bGtuY23CSgUqHwLI2I
          claim_id: c_M18UN5kfizvHv1uz3iweJm
          source_id: s_VUsiir_Va7bhE2Eb3awfBT
          stance: supports
          locator: CBDB：兄弟 王應璧（203997）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王應元 与 王應璧 为同胞（CBDB 记「弟」），王應璧 之父／母即 王應元 之父／母。
          source:
            id: s_VUsiir_Va7bhE2Eb3awfBT
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 313047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313047&o=json
            external_identifier: CBDB:313047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GpqU5i8K9hgEkHc4PsusJW
        status: active
        display_name: 王應元
        merged_into_person_id: null
    - claim:
        id: c_fYZ-4pT-Z1lxCrtW4HfKsR
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cKYaDFXTiBFX19B92FrXF3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OR7Tn4DptpiAXE-jqvb_Ou
          claim_id: c_fYZ-4pT-Z1lxCrtW4HfKsR
          source_id: s_frwIJvo0nbBfjJ7yYmcXER
          stance: supports
          locator: CBDB：兄弟 王應璧（203997）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王應祥 与 王應璧 为同胞（CBDB 记「弟」），王應璧 之父／母即 王應祥 之父／母。
          source:
            id: s_frwIJvo0nbBfjJ7yYmcXER
            source_type: api_record
            title: 中国历代人物传记资料库：王應祥（CBDB 313049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313049&o=json
            external_identifier: CBDB:313049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cKYaDFXTiBFX19B92FrXF3
        status: active
        display_name: 王應祥
        merged_into_person_id: null
    - claim:
        id: c_yE5CpJEw3z8iuNnhoBh36l
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iftPinCxVdcHjHuC1HMM4z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kaiaVGQbW5WjESPn9u4D7O
          claim_id: c_yE5CpJEw3z8iuNnhoBh36l
          source_id: s_gG_-9RQnbWLgD9xrXxpDkg
          stance: supports
          locator: CBDB：兄弟 王應璧（203997）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王應鳳 与 王應璧 为同胞（CBDB 记「兄」），王應璧 之父／母即 王應鳳 之父／母。
          source:
            id: s_gG_-9RQnbWLgD9xrXxpDkg
            source_type: api_record
            title: 中国历代人物传记资料库：王應鳳（CBDB 313053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313053&o=json
            external_identifier: CBDB:313053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iftPinCxVdcHjHuC1HMM4z
        status: active
        display_name: 王應鳳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿 | accepted |
| bio.summary | 王祿，明人物。嘉靖二十九年進士，籍贯聊城，曾任嘉議大夫、運使。（中国历代人物传记资料库 CBDB 313041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1ZWbH3Q2UJJJLSJ9mDZ9cG | 王應璧 | accepted |
| children | p_1uTPawXLyRPKzNbKDcQz5i | 王應麟 | accepted |
| children | p_6AEhsWW3wUbv8nmJYGazPH | 王應參 | accepted |
| children | p_GEavrdLjiFdZNp8BnrXwrs | 王應麒 | accepted |
| children | p_GpqU5i8K9hgEkHc4PsusJW | 王應元 | accepted |
| children | p_cKYaDFXTiBFX19B92FrXF3 | 王應祥 | accepted |
| children | p_iftPinCxVdcHjHuC1HMM4z | 王應鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 313041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313041&o=json)
- [中国历代人物传记资料库：王應璧（CBDB 203997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203997&o=json)
- [中国历代人物传记资料库：王應參（CBDB 313050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313050&o=json)
- [中国历代人物传记资料库：王應鳳（CBDB 313053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313053&o=json)
- [中国历代人物传记资料库：王應麟（CBDB 313052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313052&o=json)
- [中国历代人物传记资料库：王應麒（CBDB 313048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313048&o=json)
- [中国历代人物传记资料库：王應祥（CBDB 313049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313049&o=json)
- [中国历代人物传记资料库：王應元（CBDB 313047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313047&o=json)
