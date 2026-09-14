---
schema: wang-person/v1
id: p_ecY15EteF6GJJeUbJBkwmA
status: active
merged_into: null
display_name: 王珩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XKSL8AJEr23Dv4WN5KTNNn
        subject_person_id: p_ecY15EteF6GJJeUbJBkwmA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_773wighYMPi18uYq4hJirP
          claim_id: c_XKSL8AJEr23Dv4WN5KTNNn
          source_id: s_5wjLqZdGKYc72LuZzb2fDG
          stance: supports
          locator: CBDB:335654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335654）
          source: &a1
            id: s_5wjLqZdGKYc72LuZzb2fDG
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 335654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335654&o=json
            external_identifier: CBDB:335654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FX1KHPMuxxLDcRs2pcsXXR
        subject_person_id: p_ecY15EteF6GJJeUbJBkwmA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩，明人物。天順八年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 335654）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YxW6XkbDFKDYqV8P0z-_9Y
          claim_id: c_FX1KHPMuxxLDcRs2pcsXXR
          source_id: s_5wjLqZdGKYc72LuZzb2fDG
          stance: supports
          locator: CBDB:335654
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cXF6EKh-CAPtMGUBmCKweU
        subject_person_id: p_B13sM8QvvGK2XSdKQc64eH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ecY15EteF6GJJeUbJBkwmA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VmeElqbGeVIRVx6ElGDjVk
          claim_id: c_cXF6EKh-CAPtMGUBmCKweU
          source_id: s_YkYk8HAADQaZlXSlApOcJP
          stance: supports
          locator: CBDB：兄弟 王琮（198919）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王珩 与 王琮 为同胞（CBDB 记「兄」），王琮 之父／母即 王珩 之父／母。
          source:
            id: s_YkYk8HAADQaZlXSlApOcJP
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 335654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335654&o=json
            external_identifier: CBDB:335654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B13sM8QvvGK2XSdKQc64eH
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8CH-StrYjqk--TgjpC-gUQ
        subject_person_id: p_RPTGuNk7UCyXG66UZ8YB1y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ecY15EteF6GJJeUbJBkwmA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xQ4ilkbARhe9YkU5QN6ZTm
          claim_id: c_8CH-StrYjqk--TgjpC-gUQ
          source_id: s_YkYk8HAADQaZlXSlApOcJP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198919 王琮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YkYk8HAADQaZlXSlApOcJP
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 335654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335654&o=json
            external_identifier: CBDB:335654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RPTGuNk7UCyXG66UZ8YB1y
        status: active
        display_name: 王琮
        merged_into_person_id: null
---

# 王珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珩 | accepted |
| bio.summary | 王珩，明人物。天順八年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 335654） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B13sM8QvvGK2XSdKQc64eH | 王敬 | accepted |
| other | p_RPTGuNk7UCyXG66UZ8YB1y | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珩（CBDB 335654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335654&o=json)
