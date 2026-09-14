---
schema: wang-person/v1
id: p_Bs7k1aHtNXigNLWtfKwhKR
status: active
merged_into: null
display_name: 王世聞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3dLvgJGtKLyQ42JbTeM7ZM
        subject_person_id: p_Bs7k1aHtNXigNLWtfKwhKR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世聞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JvCMwfBE29YYEp2hPgUENb
          claim_id: c_3dLvgJGtKLyQ42JbTeM7ZM
          source_id: s_gUGXYyG7t1yyc4iDwjdqb6
          stance: supports
          locator: CBDB:309381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309381）
          source: &a1
            id: s_gUGXYyG7t1yyc4iDwjdqb6
            source_type: api_record
            title: 中国历代人物传记资料库：王世聞（CBDB 309381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309381&o=json
            external_identifier: CBDB:309381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NKYBGv6Dr2EYoDZTDMkqck
        subject_person_id: p_Bs7k1aHtNXigNLWtfKwhKR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世聞，明人物。嘉靖二十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 309381）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QDVVR6cdZk4VaBWbIR_AV_
          claim_id: c_NKYBGv6Dr2EYoDZTDMkqck
          source_id: s_gUGXYyG7t1yyc4iDwjdqb6
          stance: supports
          locator: CBDB:309381
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LhnrW3TrFo2vjIC2jQ-kuF
        subject_person_id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bs7k1aHtNXigNLWtfKwhKR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7D3-kmwWt6FguyUqjT-F8
          claim_id: c_LhnrW3TrFo2vjIC2jQ-kuF
          source_id: s_eCjCXLLRaXCbbMIrpIQA6g
          stance: supports
          locator: CBDB：兄弟 王士骐（34717）之父／母 王世贞
          quotation: null
          interpretation_note: 由兄弟关系推断：王世聞 与 王士骐 为同胞（CBDB 记「兄」），王士骐 之父／母即 王世聞 之父／母。
          source:
            id: s_eCjCXLLRaXCbbMIrpIQA6g
            source_type: api_record
            title: 中国历代人物传记资料库：王世聞（CBDB 309381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309381&o=json
            external_identifier: CBDB:309381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        status: active
        display_name: 王世贞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Z1k2-ZrfXE4BrszNKS4Ls6
        subject_person_id: p_Bs7k1aHtNXigNLWtfKwhKR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aKqG6GlnKAEn0vNZptdRAV
          claim_id: c_Z1k2-ZrfXE4BrszNKS4Ls6
          source_id: s_eCjCXLLRaXCbbMIrpIQA6g
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34717 王世貞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eCjCXLLRaXCbbMIrpIQA6g
            source_type: api_record
            title: 中国历代人物传记资料库：王世聞（CBDB 309381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309381&o=json
            external_identifier: CBDB:309381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Dh9CnuPaa166GMCnTFvEL4
        status: active
        display_name: 王士骐
        merged_into_person_id: null
---

# 王世聞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世聞 | accepted |
| bio.summary | 王世聞，明人物。嘉靖二十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 309381） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g5KSSBRpZ9iAzVfbXmLaWQ | 王世贞 | accepted |
| other | p_Dh9CnuPaa166GMCnTFvEL4 | 王士骐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世聞（CBDB 309381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309381&o=json)
