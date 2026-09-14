---
schema: wang-person/v1
id: p_89NdiNnYLVbveTmjL24u63
status: active
merged_into: null
display_name: 王圍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ahNryDVr95J2A3L7FBakXq
        subject_person_id: p_89NdiNnYLVbveTmjL24u63
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JsjR9zXPRkUnVbeW2w174J
          claim_id: c_ahNryDVr95J2A3L7FBakXq
          source_id: s_AB2ToQc9J3yafJqSUZa5nA
          stance: supports
          locator: CBDB:295395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295395）
          source: &a1
            id: s_AB2ToQc9J3yafJqSUZa5nA
            source_type: api_record
            title: 中国历代人物传记资料库：王圍（CBDB 295395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295395&o=json
            external_identifier: CBDB:295395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L1WEtG5dAunG1g82pmy5Hs
        subject_person_id: p_89NdiNnYLVbveTmjL24u63
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圍，明人物。嘉靖十四年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 295395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xMU_LfR6a3vq4PvVBX4BMY
          claim_id: c_L1WEtG5dAunG1g82pmy5Hs
          source_id: s_AB2ToQc9J3yafJqSUZa5nA
          stance: supports
          locator: CBDB:295395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lXJNiXGclCijEaspUsGsgq
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_89NdiNnYLVbveTmjL24u63
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMKX99zFLNpk0wAvQDn3uE
          claim_id: c_lXJNiXGclCijEaspUsGsgq
          source_id: s_pCOGS-7iAtmWrAcIM5-WUQ
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王圍 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王圍 之父／母。
          source:
            id: s_pCOGS-7iAtmWrAcIM5-WUQ
            source_type: api_record
            title: 中国历代人物传记资料库：王圍（CBDB 295395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295395&o=json
            external_identifier: CBDB:295395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FqMa4M2DAduvq9gtDKyST2
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_G-ValmgMy7b8aC9Ra-BMQF
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_89NdiNnYLVbveTmjL24u63
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eqr4KrLY82aR4KORwmhH9c
          claim_id: c_G-ValmgMy7b8aC9Ra-BMQF
          source_id: s_pCOGS-7iAtmWrAcIM5-WUQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pCOGS-7iAtmWrAcIM5-WUQ
            source_type: api_record
            title: 中国历代人物传记资料库：王圍（CBDB 295395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295395&o=json
            external_identifier: CBDB:295395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2BUKVfjLttuBq79dFrNbRz
        status: active
        display_name: 王崇
        merged_into_person_id: null
---

# 王圍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圍 | accepted |
| bio.summary | 王圍，明人物。嘉靖十四年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 295395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FqMa4M2DAduvq9gtDKyST2 | 王釗 | accepted |
| other | p_2BUKVfjLttuBq79dFrNbRz | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王圍（CBDB 295395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295395&o=json)
