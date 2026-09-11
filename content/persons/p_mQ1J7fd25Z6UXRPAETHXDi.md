---
schema: wang-person/v1
id: p_mQ1J7fd25Z6UXRPAETHXDi
status: active
merged_into: null
display_name: 王純
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3E4NwaqmLZhpVUqmWU9UcA
        subject_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A3mwyBQo55ijJC6pUaq71r
          claim_id: c_3E4NwaqmLZhpVUqmWU9UcA
          source_id: s_ExaLzyQchNF44SEq4qpiZe
          stance: supports
          locator: CBDB:126657
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126657）
          source: &a1
            id: s_ExaLzyQchNF44SEq4qpiZe
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 126657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126657&o=json
            external_identifier: CBDB:126657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Wf784CA6Kio7u82LH1mW13
        subject_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1434年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMBZDH69EbPupELgsNNyzL
          claim_id: c_Wf784CA6Kio7u82LH1mW13
          source_id: s_ExaLzyQchNF44SEq4qpiZe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EoPhmGA5SnmCSKL8xfDjGf
        subject_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D41mT4ntPBvNjwAWjzDypW
          claim_id: c_EoPhmGA5SnmCSKL8xfDjGf
          source_id: s_ExaLzyQchNF44SEq4qpiZe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h1dMeCXAK33bk2R2wRiGgG
        subject_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純（1434年—1495年），明人物。籍贯仙居，入仕進士，曾任府推官、工部主事、提學僉事。（中国历代人物传记资料库 CBDB 126657）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_42Go76Ws2Ls3iNNA1iC09r
          claim_id: c_h1dMeCXAK33bk2R2wRiGgG
          source_id: s_ExaLzyQchNF44SEq4qpiZe
          stance: supports
          locator: CBDB:126657
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PNWl8M9mDR9aYnKfXSP0IR
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nrlhJjcvg1r-dWe4zrrWCk
          claim_id: c_PNWl8M9mDR9aYnKfXSP0IR
          source_id: s_ExaLzyQchNF44SEq4qpiZe
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JRSMPB6yVrvoB4Rsfsm44J
        status: active
        display_name: 王懷廣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wsZdkPcDC38txZ_xF1RQ4t
        subject_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jBhHK9ZvdStwR6we27kdf6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJ1r_vSt6TbArcIRQ9mnoD
          claim_id: c_wsZdkPcDC38txZ_xF1RQ4t
          source_id: s_gNnzVJrR76PQgS83M-cDIH
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gNnzVJrR76PQgS83M-cDIH
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王純妻)（CBDB 257395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257395&o=json
            external_identifier: CBDB:257395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jBhHK9ZvdStwR6we27kdf6
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Hc_N_-WDif9J7KrgOyICSl
        subject_person_id: p_uNt9MKU5sxjzvcF5HvENJs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tP0RrK2LsWiy3tw8okAqm2
          claim_id: c_Hc_N_-WDif9J7KrgOyICSl
          source_id: s_ExaLzyQchNF44SEq4qpiZe
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uNt9MKU5sxjzvcF5HvENJs
        status: active
        display_name: 王嗣宗
        merged_into_person_id: null
    - claim:
        id: c_RfLqI3t-ETD9zPDoj08dZ_
        subject_person_id: p_ExnSXbEBng6rEeQSBJdPNS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yYTfcbyKFX9qwxu1D-wYm2
          claim_id: c_RfLqI3t-ETD9zPDoj08dZ_
          source_id: s_ExaLzyQchNF44SEq4qpiZe
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ExnSXbEBng6rEeQSBJdPNS
        status: active
        display_name: 王原行
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| birth.date | 1434年 | accepted |
| death.date | 1495年 | accepted |
| bio.summary | 王純（1434年—1495年），明人物。籍贯仙居，入仕進士，曾任府推官、工部主事、提學僉事。（中国历代人物传记资料库 CBDB 126657） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JRSMPB6yVrvoB4Rsfsm44J | 王懷廣 | accepted |
| spouses | p_jBhHK9ZvdStwR6we27kdf6 | 張氏 | accepted |
| ancestors | p_uNt9MKU5sxjzvcF5HvENJs | 王嗣宗 | accepted |
| ancestors | p_ExnSXbEBng6rEeQSBJdPNS | 王原行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 126657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126657&o=json)
- [中国历代人物传记资料库：張氏(王純妻)（CBDB 257395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257395&o=json)
