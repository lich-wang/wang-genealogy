---
schema: wang-person/v1
id: p_2BUKVfjLttuBq79dFrNbRz
status: active
merged_into: null
display_name: 王崇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATb9331iqvtY8A5mNdMxMT
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BoGqtPwtLoKnvrjfdaLLer
          claim_id: c_ATb9331iqvtY8A5mNdMxMT
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: CBDB:202833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202833）
          source: &a1
            id: s_rSpqfo8s5BJMrtNFtFPgJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 202833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json
            external_identifier: CBDB:202833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jsnHKDDZ9FDFpBajVnKKZB
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1504年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PeekuetNqzz6szhAzdv8o
          claim_id: c_jsnHKDDZ9FDFpBajVnKKZB
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7nN2p4A1vuPjnhLJAV96RB
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qY6mdDLfBZESBcZd7fcfcA
          claim_id: c_7nN2p4A1vuPjnhLJAV96RB
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5PrwlHKYhV1mFA-aDI31WI
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_576BAbjIh_DBMcs88UNJdp
          claim_id: c_5PrwlHKYhV1mFA-aDI31WI
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FqMa4M2DAduvq9gtDKyST2
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QT0gnU3P_hVEwFdFLn1sT7
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dzQWcKffGVTMEta4AQwW5C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a2MvL92xPasIcUeG8n-BLE
          claim_id: c_QT0gnU3P_hVEwFdFLn1sT7
          source_id: s_P4bjF6pEL0D9laOyXS0o5e
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P4bjF6pEL0D9laOyXS0o5e
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王崇妻)（CBDB 295382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295382&o=json
            external_identifier: CBDB:295382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dzQWcKffGVTMEta4AQwW5C
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_mJ3kCV6SCgKgVcQR8RVGjn
        subject_person_id: p_5e6yS78g9Sg7aej9VVLMfV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ivscx0KkRqsoWrd0YcjHzA
          claim_id: c_mJ3kCV6SCgKgVcQR8RVGjn
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5e6yS78g9Sg7aej9VVLMfV
        status: active
        display_name: 王衍
        merged_into_person_id: null
    - claim:
        id: c_vneQp7CXqeYFAKQY7pvwKn
        subject_person_id: p_xA3rRB9F532Jc29D6Y6JTF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXigNkKO_IZVmBTk1CeVJM
          claim_id: c_vneQp7CXqeYFAKQY7pvwKn
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xA3rRB9F532Jc29D6Y6JTF
        status: active
        display_name: 王英
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| birth.date | 1504年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FqMa4M2DAduvq9gtDKyST2 | 王釗 | accepted |
| spouses | p_dzQWcKffGVTMEta4AQwW5C | 劉氏 | accepted |
| ancestors | p_5e6yS78g9Sg7aej9VVLMfV | 王衍 | accepted |
| ancestors | p_xA3rRB9F532Jc29D6Y6JTF | 王英 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王崇妻)（CBDB 295382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295382&o=json)
- [中国历代人物传记资料库：王崇（CBDB 202833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json)
