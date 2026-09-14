---
schema: wang-person/v1
id: p_TwBXLD75rmtdk6GedpWfg3
status: active
merged_into: null
display_name: 王經
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2sC3ot5mzMX6APC5SdPZaF
        subject_person_id: p_TwBXLD75rmtdk6GedpWfg3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XzHtWh2v6HxJVbAi4P4MKu
          claim_id: c_2sC3ot5mzMX6APC5SdPZaF
          source_id: s_AdopF1dya9hMGSx34E5CfH
          stance: supports
          locator: CBDB:269708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269708）
          source: &a1
            id: s_AdopF1dya9hMGSx34E5CfH
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 269708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269708&o=json
            external_identifier: CBDB:269708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pzHyJ1Kaby94KnGSQ24zjJ
        subject_person_id: p_TwBXLD75rmtdk6GedpWfg3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。弘治九年進士，籍贯咸寧，入仕監生。（中国历代人物传记资料库 CBDB 269708）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FEI50srQhe5iTwYCvnVK1Q
          claim_id: c_pzHyJ1Kaby94KnGSQ24zjJ
          source_id: s_AdopF1dya9hMGSx34E5CfH
          stance: supports
          locator: CBDB:269708
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xk8oxyvBEXBTB2GbrzqacT
        subject_person_id: p_wxFwiJdpNsMZSoX1se45fE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TwBXLD75rmtdk6GedpWfg3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S-EuQ774njltuADXTETTJU
          claim_id: c_Xk8oxyvBEXBTB2GbrzqacT
          source_id: s_q_F3TLd-k0QVRpP1hWWGTk
          stance: supports
          locator: CBDB：兄弟 王綸（201264）之父／母 王福
          quotation: null
          interpretation_note: 由兄弟关系推断：王經 与 王綸 为同胞（CBDB 记「弟」），王綸 之父／母即 王經 之父／母。
          source:
            id: s_q_F3TLd-k0QVRpP1hWWGTk
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 269708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269708&o=json
            external_identifier: CBDB:269708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wxFwiJdpNsMZSoX1se45fE
        status: active
        display_name: 王福
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sDNE8ShH7PMYTsrHmXuZAQ
        subject_person_id: p_TwBXLD75rmtdk6GedpWfg3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kET5KeLjgEQ8jqCSugxSSk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J6FfrdmHyqCYHZFceIIeZS
          claim_id: c_sDNE8ShH7PMYTsrHmXuZAQ
          source_id: s_q_F3TLd-k0QVRpP1hWWGTk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201264 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q_F3TLd-k0QVRpP1hWWGTk
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 269708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269708&o=json
            external_identifier: CBDB:269708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kET5KeLjgEQ8jqCSugxSSk
        status: active
        display_name: 王綸
        merged_into_person_id: null
---

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。弘治九年進士，籍贯咸寧，入仕監生。（中国历代人物传记资料库 CBDB 269708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wxFwiJdpNsMZSoX1se45fE | 王福 | accepted |
| other | p_kET5KeLjgEQ8jqCSugxSSk | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 269708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269708&o=json)
