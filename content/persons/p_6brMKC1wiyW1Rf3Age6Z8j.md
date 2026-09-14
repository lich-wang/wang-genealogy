---
schema: wang-person/v1
id: p_6brMKC1wiyW1Rf3Age6Z8j
status: active
merged_into: null
display_name: 王闕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4N39wsEFFr8FHUtButhbWp
        subject_person_id: p_6brMKC1wiyW1Rf3Age6Z8j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SL3Xb2q1CtmGPVW2S7QdgD
          claim_id: c_4N39wsEFFr8FHUtButhbWp
          source_id: s_UpbN5iLBLtr3pgjYH1izkh
          stance: supports
          locator: CBDB:213945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213945）
          source: &a1
            id: s_UpbN5iLBLtr3pgjYH1izkh
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 213945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213945&o=json
            external_identifier: CBDB:213945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GkW9nUvWx6T79JwqMaGVT4
        subject_person_id: p_6brMKC1wiyW1Rf3Age6Z8j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闕，明人物。萬曆二年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 213945）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__xdgZm8HObX83NvnxFk8eS
          claim_id: c_GkW9nUvWx6T79JwqMaGVT4
          source_id: s_UpbN5iLBLtr3pgjYH1izkh
          stance: supports
          locator: CBDB:213945
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Y8d06Pw612FhjDiL5G1CKf
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6brMKC1wiyW1Rf3Age6Z8j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QkBBEgi-5AQP2b81_EJ3Fq
          claim_id: c_Y8d06Pw612FhjDiL5G1CKf
          source_id: s_SrwN4ELMcnuo8p2JuNiNRc
          stance: supports
          locator: CBDB：兄弟 王開（206147）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闕 与 王開 为同胞（CBDB 记「兄」），王開 之父／母即 王闕 之父／母。
          source:
            id: s_SrwN4ELMcnuo8p2JuNiNRc
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 213945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213945&o=json
            external_identifier: CBDB:213945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NaFFWeby89s7T6a15SkTWd
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zU8cI5GG9xTy97m9tZ4YVq
        subject_person_id: p_6brMKC1wiyW1Rf3Age6Z8j
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qiUz9heyUNcnPfoPa6OThw
          claim_id: c_zU8cI5GG9xTy97m9tZ4YVq
          source_id: s_SrwN4ELMcnuo8p2JuNiNRc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206147 王開）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SrwN4ELMcnuo8p2JuNiNRc
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 213945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213945&o=json
            external_identifier: CBDB:213945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDsYhHNBBkDcpWQEYco8Kg
        status: active
        display_name: 王開
        merged_into_person_id: null
---

# 王闕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闕 | accepted |
| bio.summary | 王闕，明人物。萬曆二年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 213945） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NaFFWeby89s7T6a15SkTWd | 王德純 | accepted |
| other | p_GDsYhHNBBkDcpWQEYco8Kg | 王開 | accepted |

## 外部来源

- [中国历代人物传记资料库：王闕（CBDB 213945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213945&o=json)
