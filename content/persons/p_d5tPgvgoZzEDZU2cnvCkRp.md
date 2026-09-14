---
schema: wang-person/v1
id: p_d5tPgvgoZzEDZU2cnvCkRp
status: active
merged_into: null
display_name: 王維藩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GJdwVo88VFCfzDeUcavKbL
        subject_person_id: p_d5tPgvgoZzEDZU2cnvCkRp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3mtB8KhhUgjH4S88qj6cLK
          claim_id: c_GJdwVo88VFCfzDeUcavKbL
          source_id: s_6TNKpb1x2SA2xWvHfBhpeJ
          stance: supports
          locator: CBDB:297166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297166）
          source: &a1
            id: s_6TNKpb1x2SA2xWvHfBhpeJ
            source_type: api_record
            title: 中国历代人物传记资料库：王維藩（CBDB 297166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297166&o=json
            external_identifier: CBDB:297166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mQR1de2A9WBP3BjrgeGH77
        subject_person_id: p_d5tPgvgoZzEDZU2cnvCkRp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維藩，明人物。嘉靖十四年進士，籍贯華州，曾任訓導、主簿。（中国历代人物传记资料库 CBDB 297166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8h-XBMHyZrm6EtTgmzftGB
          claim_id: c_mQR1de2A9WBP3BjrgeGH77
          source_id: s_6TNKpb1x2SA2xWvHfBhpeJ
          stance: supports
          locator: CBDB:297166
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aW4hcI4dCYdimch7Qv9Kyz
        subject_person_id: p_HxkU2fnETNPPrHRLTi3TtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d5tPgvgoZzEDZU2cnvCkRp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KTd9RwsppSwr7rdf7O67TZ
          claim_id: c_aW4hcI4dCYdimch7Qv9Kyz
          source_id: s_iyJropfbwm-f_w6KY2lfaO
          stance: supports
          locator: CBDB：兄弟 王維楨（126791）之父／母 王載
          quotation: null
          interpretation_note: 由兄弟关系推断：王維藩 与 王維楨 为同胞（CBDB 记「弟」），王維楨 之父／母即 王維藩 之父／母。
          source:
            id: s_iyJropfbwm-f_w6KY2lfaO
            source_type: api_record
            title: 中国历代人物传记资料库：王維藩（CBDB 297166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297166&o=json
            external_identifier: CBDB:297166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxkU2fnETNPPrHRLTi3TtQ
        status: active
        display_name: 王載
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EAZG6VkmPw9qVMaZ2FcpMb
        subject_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_d5tPgvgoZzEDZU2cnvCkRp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Cc9cHoj5Cy_TefLe3Sop6
          claim_id: c_EAZG6VkmPw9qVMaZ2FcpMb
          source_id: s_iyJropfbwm-f_w6KY2lfaO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126791 王維楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iyJropfbwm-f_w6KY2lfaO
            source_type: api_record
            title: 中国历代人物传记资料库：王維藩（CBDB 297166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297166&o=json
            external_identifier: CBDB:297166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LrwY5tXkYCUNXA8ZrdXwSb
        status: active
        display_name: 王維楨
        merged_into_person_id: null
---

# 王維藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維藩 | accepted |
| bio.summary | 王維藩，明人物。嘉靖十四年進士，籍贯華州，曾任訓導、主簿。（中国历代人物传记资料库 CBDB 297166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxkU2fnETNPPrHRLTi3TtQ | 王載 | accepted |
| other | p_LrwY5tXkYCUNXA8ZrdXwSb | 王維楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維藩（CBDB 297166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297166&o=json)
