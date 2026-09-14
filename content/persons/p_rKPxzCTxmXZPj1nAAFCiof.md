---
schema: wang-person/v1
id: p_rKPxzCTxmXZPj1nAAFCiof
status: active
merged_into: null
display_name: 王章
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jiW49hfACW2wwEBeFaHLGJ
        subject_person_id: p_rKPxzCTxmXZPj1nAAFCiof
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r2MdQy1BDfF3MHqg3vU1ZN
          claim_id: c_jiW49hfACW2wwEBeFaHLGJ
          source_id: s_18pN9ZupEac43bysHaEGyy
          stance: supports
          locator: CBDB:306004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306004）
          source: &a1
            id: s_18pN9ZupEac43bysHaEGyy
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 306004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306004&o=json
            external_identifier: CBDB:306004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z2r4DYfFAhPNRFjzVXNENP
        subject_person_id: p_rKPxzCTxmXZPj1nAAFCiof
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章，明人物。嘉靖二十三年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 306004）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PDvnV2BILHKEed0uDLztZt
          claim_id: c_Z2r4DYfFAhPNRFjzVXNENP
          source_id: s_18pN9ZupEac43bysHaEGyy
          stance: supports
          locator: CBDB:306004
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8KDfcgw73gT3qB_pkBGpE1
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rKPxzCTxmXZPj1nAAFCiof
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x_Gavkwe6iDjBIiqRy_UlN
          claim_id: c_8KDfcgw73gT3qB_pkBGpE1
          source_id: s_0Kal-NfveXtowD0MdoknJQ
          stance: supports
          locator: CBDB：兄弟 王會（126770）之父／母 王良玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王章 与 王會 为同胞（CBDB 记「弟」），王會 之父／母即 王章 之父／母。
          source:
            id: s_0Kal-NfveXtowD0MdoknJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 306004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306004&o=json
            external_identifier: CBDB:306004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_26uVgWbWAkUDcgWw8N6zSa
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nIqlel0FKhSv8sQTXBJUT1
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rKPxzCTxmXZPj1nAAFCiof
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TBLXajRowCvReJENKEnX9Q
          claim_id: c_nIqlel0FKhSv8sQTXBJUT1
          source_id: s_0Kal-NfveXtowD0MdoknJQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126770 王會）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0Kal-NfveXtowD0MdoknJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 306004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306004&o=json
            external_identifier: CBDB:306004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Znen7jNez4DsQZ8W2U88iW
        status: active
        display_name: 王會
        merged_into_person_id: null
---

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | 王章，明人物。嘉靖二十三年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 306004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_26uVgWbWAkUDcgWw8N6zSa | 王良玉 | accepted |
| other | p_Znen7jNez4DsQZ8W2U88iW | 王會 | accepted |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 306004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306004&o=json)
