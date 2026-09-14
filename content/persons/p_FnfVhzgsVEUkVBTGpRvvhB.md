---
schema: wang-person/v1
id: p_FnfVhzgsVEUkVBTGpRvvhB
status: active
merged_into: null
display_name: 王良駿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ptdNVWVAiGfNFuDW6DyzFF
        subject_person_id: p_FnfVhzgsVEUkVBTGpRvvhB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良駿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kn36KmBCcVwnFtMaBvHHNu
          claim_id: c_ptdNVWVAiGfNFuDW6DyzFF
          source_id: s_CRJYKqQVcPjCT36PaJtMw5
          stance: supports
          locator: CBDB:210734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210734）
          source: &a1
            id: s_CRJYKqQVcPjCT36PaJtMw5
            source_type: api_record
            title: 中国历代人物传记资料库：王良駿（CBDB 210734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210734&o=json
            external_identifier: CBDB:210734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FNVgWFcY4WvBq9py6QEdDW
        subject_person_id: p_FnfVhzgsVEUkVBTGpRvvhB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良駿，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210734）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dc8kCly3cx2DM_yQeErdE_
          claim_id: c_FNVgWFcY4WvBq9py6QEdDW
          source_id: s_CRJYKqQVcPjCT36PaJtMw5
          stance: supports
          locator: CBDB:210734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5Ft-957t4I3ROzbHDU0lVS
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FnfVhzgsVEUkVBTGpRvvhB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OuB-vPmvgs-S7AsnZo9LiD
          claim_id: c_5Ft-957t4I3ROzbHDU0lVS
          source_id: s_Wcbn0Ci50p3Q9YIgCaV0v6
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良駿 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王良駿 之父／母。
          source:
            id: s_Wcbn0Ci50p3Q9YIgCaV0v6
            source_type: api_record
            title: 中国历代人物传记资料库：王良駿（CBDB 210734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210734&o=json
            external_identifier: CBDB:210734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FqbSdJnp_d6DDWXTMjrUxw
        subject_person_id: p_FnfVhzgsVEUkVBTGpRvvhB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pucg6lKqW58gtgYO5AwPyY
          claim_id: c_FqbSdJnp_d6DDWXTMjrUxw
          source_id: s_Wcbn0Ci50p3Q9YIgCaV0v6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wcbn0Ci50p3Q9YIgCaV0v6
            source_type: api_record
            title: 中国历代人物传记资料库：王良駿（CBDB 210734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210734&o=json
            external_identifier: CBDB:210734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
---

# 王良駿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良駿 | accepted |
| bio.summary | 王良駿，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210734） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| other | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良駿（CBDB 210734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210734&o=json)
