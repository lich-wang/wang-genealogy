---
schema: wang-person/v1
id: p_nEzuZeoPv13Jh9vth8cKco
status: active
merged_into: null
display_name: 王伍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xpQrT3oRL38RcUo4h1Ep23
        subject_person_id: p_nEzuZeoPv13Jh9vth8cKco
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DYXMWwU7ZMJzJiAYmMQAXB
          claim_id: c_xpQrT3oRL38RcUo4h1Ep23
          source_id: s_eBKt3iCDKLJUUUuNVATR5Q
          stance: supports
          locator: CBDB:280415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280415）
          source: &a1
            id: s_eBKt3iCDKLJUUUuNVATR5Q
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 280415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280415&o=json
            external_identifier: CBDB:280415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N5xjB6iVhcaeMwGwZwUVBc
        subject_person_id: p_nEzuZeoPv13Jh9vth8cKco
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gxocz4q9T0wIuYqTfXP_eT
          claim_id: c_N5xjB6iVhcaeMwGwZwUVBc
          source_id: s_eBKt3iCDKLJUUUuNVATR5Q
          stance: supports
          locator: CBDB:280415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v33Ibt262W_OlEHmyepwxK
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nEzuZeoPv13Jh9vth8cKco
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9DHEQ5TbUgBitoiIqh_COc
          claim_id: c_v33Ibt262W_OlEHmyepwxK
          source_id: s_xCOHNmLYTKPAxRieOfTNb_
          stance: supports
          locator: CBDB：兄弟 王鳳靈（126795）之父／母 王玉和
          quotation: null
          interpretation_note: 由兄弟关系推断：王伍 与 王鳳靈 为同胞（CBDB 记「弟」），王鳳靈 之父／母即 王伍 之父／母。
          source:
            id: s_xCOHNmLYTKPAxRieOfTNb_
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 280415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280415&o=json
            external_identifier: CBDB:280415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDjC7pvEU5iRp3K4Ac1DMb
        status: active
        display_name: 王玉和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FzorjGETCiRwCiSE0A9shN
        subject_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nEzuZeoPv13Jh9vth8cKco
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Q_AJffsd1eQsrx9acQEhO
          claim_id: c_FzorjGETCiRwCiSE0A9shN
          source_id: s_xCOHNmLYTKPAxRieOfTNb_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126795 王鳳靈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xCOHNmLYTKPAxRieOfTNb_
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 280415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280415&o=json
            external_identifier: CBDB:280415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        status: active
        display_name: 王鳳靈
        merged_into_person_id: null
---

# 王伍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伍 | accepted |
| bio.summary | 王伍，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GDjC7pvEU5iRp3K4Ac1DMb | 王玉和 | accepted |
| other | p_ZyrbUQzJSc8r8t3Ud7TNAC | 王鳳靈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伍（CBDB 280415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280415&o=json)
