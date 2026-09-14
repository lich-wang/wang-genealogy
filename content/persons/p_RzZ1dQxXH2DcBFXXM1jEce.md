---
schema: wang-person/v1
id: p_RzZ1dQxXH2DcBFXXM1jEce
status: active
merged_into: null
display_name: 王朝嶽
cbdb_id: 333152
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aaoK88uzwXbiHvjAU91qfT
        subject_person_id: p_RzZ1dQxXH2DcBFXXM1jEce
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝嶽，明人物。嘉靖四十四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 333152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Ii4bElu38Y-eq0g_xt7eCx
          claim_id: c_aaoK88uzwXbiHvjAU91qfT
          source_id: s_Y23frPnSotTJDZTmC6hvMM
          stance: supports
          locator: CBDB:333152
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Y23frPnSotTJDZTmC6hvMM
            source_type: api_record
            title: 中国历代人物传记资料库：王朝嶽（CBDB 333152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333152&o=json
            external_identifier: CBDB:333152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Bt6Gf6Ukii8WfgAP8Xuok
        subject_person_id: p_RzZ1dQxXH2DcBFXXM1jEce
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝嶽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8LbVaTypDzv4HAc9D9N3Kr
          claim_id: c_4Bt6Gf6Ukii8WfgAP8Xuok
          source_id: s_Y23frPnSotTJDZTmC6hvMM
          stance: supports
          locator: CBDB:333152
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V6iZygJ-qnaZN6RVvB1YCI
        subject_person_id: p_kkzsSnYMmMHCoMPoCC45w5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RzZ1dQxXH2DcBFXXM1jEce
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bL70YwvLMnoGT9j1Dd3JX2
          claim_id: c_V6iZygJ-qnaZN6RVvB1YCI
          source_id: s_yyIN3VWriCHxG2bhY-Qnrq
          stance: supports
          locator: CBDB：兄弟 王朝陽（205436）之父／母 王愷
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝嶽 与 王朝陽 为同胞（CBDB 记「兄」），王朝陽 之父／母即 王朝嶽 之父／母。
          source:
            id: s_yyIN3VWriCHxG2bhY-Qnrq
            source_type: api_record
            title: 中国历代人物传记资料库：王朝嶽（CBDB 333152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333152&o=json
            external_identifier: CBDB:333152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kkzsSnYMmMHCoMPoCC45w5
        status: active
        display_name: 王愷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B9XcTrstT-wcKA1mFmYkR9
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RzZ1dQxXH2DcBFXXM1jEce
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76IUEOfxtpDlmhqKsvdnRm
          claim_id: c_B9XcTrstT-wcKA1mFmYkR9
          source_id: s_yyIN3VWriCHxG2bhY-Qnrq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205436 王朝陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yyIN3VWriCHxG2bhY-Qnrq
            source_type: api_record
            title: 中国历代人物传记资料库：王朝嶽（CBDB 333152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333152&o=json
            external_identifier: CBDB:333152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_42V1mjqbCc9WXuvE75bXCj
        status: active
        display_name: 王朝陽
        merged_into_person_id: null
---

# 王朝嶽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝嶽，明人物。嘉靖四十四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 333152） | accepted |
| name.primary | 王朝嶽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kkzsSnYMmMHCoMPoCC45w5 | 王愷 | accepted |
| other | p_42V1mjqbCc9WXuvE75bXCj | 王朝陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝嶽（CBDB 333152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333152&o=json)
