---
schema: wang-person/v1
id: p_nVeRPzH9zM6X3E5H4rwVq1
status: active
merged_into: null
display_name: 李氏
cbdb_id: 217734
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQ2wpZ_t6dNsCkfjC6eBci
        subject_person_id: p_nVeRPzH9zM6X3E5H4rwVq1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217734）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_HhtR0jSWb2cyFgXv6yabhV
          claim_id: c_EQ2wpZ_t6dNsCkfjC6eBci
          source_id: s_jYgfVpA5NdEbCanRKQ1W2x
          stance: supports
          locator: CBDB:217734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jYgfVpA5NdEbCanRKQ1W2x
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（217734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217734&o=json
            external_identifier: CBDB:217734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:06.884Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rACTMDGgSZFUKT8t7CCa11
        subject_person_id: p_nVeRPzH9zM6X3E5H4rwVq1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8piL2ZMHArqTMixpaS43eZ
          claim_id: c_rACTMDGgSZFUKT8t7CCa11
          source_id: s_jYgfVpA5NdEbCanRKQ1W2x
          stance: supports
          locator: Q65820432
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_EyF5idGHrF11BxETWjcTmu
          claim_id: c_rACTMDGgSZFUKT8t7CCa11
          source_id: s_FmCaExmBx5NXeFkAjLnQYm
          stance: supports
          locator: Q65820432
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_FmCaExmBx5NXeFkAjLnQYm
            source_type: api_record
            title: 维基数据：李氏（Q65820432）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65820432
            external_identifier: Q65820432
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:06.712Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EjtQ2j2buhUHVqpPMtMnnp
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nVeRPzH9zM6X3E5H4rwVq1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9nR5ogHo1vdqwmYPWcuYY
          claim_id: c_EjtQ2j2buhUHVqpPMtMnnp
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4omftLuK67wUsCAnVU8byp
            source_type: api_record
            title: 维基数据：王之猷（Q16075308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075308
            external_identifier: Q16075308
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
        - id: cs_qBKMtk9DcQ11Qzoap33at6
          claim_id: c_EjtQ2j2buhUHVqpPMtMnnp
          source_id: s_FmCaExmBx5NXeFkAjLnQYm
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_KXaKdcDyBSt4b6M8g2MnTj
          claim_id: c_EjtQ2j2buhUHVqpPMtMnnp
          source_id: s_fTSBwdBbGaM2F5XBW7sb2z
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆五年進士登科錄:一卷
          source:
            id: s_fTSBwdBbGaM2F5XBW7sb2z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之猷（126467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126467&o=json
            external_identifier: CBDB:126467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:58.678Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
    - claim:
        id: c_0_T-5DtRdhmzoLRcff_Mz7
        subject_person_id: p_nVeRPzH9zM6X3E5H4rwVq1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jtRDDvEfGebG1Nxz1gcS1h
          claim_id: c_0_T-5DtRdhmzoLRcff_Mz7
          source_id: s_jYgfVpA5NdEbCanRKQ1W2x
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百五十七名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217734） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| spouses | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |

## 外部来源

- [维基数据：李氏（Q65820432）](https://www.wikidata.org/wiki/Q65820432)
- [维基数据：王之猷（Q16075308）](https://www.wikidata.org/wiki/Q16075308)
- [CBDB 中国历代人物传记资料库：李氏（217734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217734&o=json)
- [CBDB 中国历代人物传记资料库：王之猷（126467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126467&o=json)
