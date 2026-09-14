---
schema: wang-person/v1
id: p_ng9K4jw8g811gdEchkHsHp
status: active
merged_into: null
display_name: 王鉞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7231CSHgHL5B7H39PxG3s5
        subject_person_id: p_ng9K4jw8g811gdEchkHsHp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m7G9zWWg26zjJc8UwDHzZy
          claim_id: c_7231CSHgHL5B7H39PxG3s5
          source_id: s_9JPNYCSpJcpghCjdRHaa1F
          stance: supports
          locator: CBDB:267897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267897）
          source: &a1
            id: s_9JPNYCSpJcpghCjdRHaa1F
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 267897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267897&o=json
            external_identifier: CBDB:267897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_suA5Jf6q6KVGhrSHo6UgH9
        subject_person_id: p_ng9K4jw8g811gdEchkHsHp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P3r5ktvgYFUKn2AcullIEE
          claim_id: c_suA5Jf6q6KVGhrSHo6UgH9
          source_id: s_9JPNYCSpJcpghCjdRHaa1F
          stance: supports
          locator: CBDB:267897
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h6U-L8-kY9FosaNY382BL3
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ng9K4jw8g811gdEchkHsHp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vm7nnbIPK_9cRWIvDsiCxg
          claim_id: c_h6U-L8-kY9FosaNY382BL3
          source_id: s_xSxnaICOEJAfcDFZ2N9TbL
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉞 与 王鍭 为同胞（CBDB 记「兄」），王鍭 之父／母即 王鉞 之父／母。
          source:
            id: s_xSxnaICOEJAfcDFZ2N9TbL
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 267897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267897&o=json
            external_identifier: CBDB:267897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q9zuFMKzedcz4UHwq7tKH2
        status: active
        display_name: 王啟宏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_93mNaGuyBECHXBYn_nXKUw
        subject_person_id: p_ng9K4jw8g811gdEchkHsHp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UW6AMSC8qhE_Nd6i-oMLKI
          claim_id: c_93mNaGuyBECHXBYn_nXKUw
          source_id: s_xSxnaICOEJAfcDFZ2N9TbL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xSxnaICOEJAfcDFZ2N9TbL
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 267897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267897&o=json
            external_identifier: CBDB:267897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oJbh5LgRt8jeK3L7dfcGm6
        status: active
        display_name: 王鍭
        merged_into_person_id: null
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | 王鉞，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q9zuFMKzedcz4UHwq7tKH2 | 王啟宏 | accepted |
| other | p_oJbh5LgRt8jeK3L7dfcGm6 | 王鍭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉞（CBDB 267897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267897&o=json)
