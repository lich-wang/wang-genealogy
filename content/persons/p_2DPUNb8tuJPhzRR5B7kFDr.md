---
schema: wang-person/v1
id: p_2DPUNb8tuJPhzRR5B7kFDr
status: active
merged_into: null
display_name: 王斗南
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LE9Yx6ZaGTvFhJC2ZnnjZy
        subject_person_id: p_2DPUNb8tuJPhzRR5B7kFDr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗南
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nn36U9QSJrjrBuD6dNG7Xy
          claim_id: c_LE9Yx6ZaGTvFhJC2ZnnjZy
          source_id: s_4DHYa6AGrrKk1fLnUEHWBR
          stance: supports
          locator: CBDB:245292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245292）
          source: &a1
            id: s_4DHYa6AGrrKk1fLnUEHWBR
            source_type: api_record
            title: 中国历代人物传记资料库：王斗南（CBDB 245292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245292&o=json
            external_identifier: CBDB:245292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XM3kpkQjbzPhZ7rw5FxsRC
        subject_person_id: p_2DPUNb8tuJPhzRR5B7kFDr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗南，明人物。成化八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 245292）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aDBKXrPR65C4bQb_AtPzyo
          claim_id: c_XM3kpkQjbzPhZ7rw5FxsRC
          source_id: s_4DHYa6AGrrKk1fLnUEHWBR
          stance: supports
          locator: CBDB:245292
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HZA3H-LGDw4H8POWNQumKs
        subject_person_id: p_AUM2HxD245JgNTZGYMevph
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2DPUNb8tuJPhzRR5B7kFDr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hW5Ixps3VFv8OsW-7diuV0
          claim_id: c_HZA3H-LGDw4H8POWNQumKs
          source_id: s_6-zu7QlVrly12GaCeHMz11
          stance: supports
          locator: CBDB：兄弟 王參（199457）之父／母 王鐸
          quotation: null
          interpretation_note: 由兄弟关系推断：王斗南 与 王參 为同胞（CBDB 记「弟」），王參 之父／母即 王斗南 之父／母。
          source:
            id: s_6-zu7QlVrly12GaCeHMz11
            source_type: api_record
            title: 中国历代人物传记资料库：王斗南（CBDB 245292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245292&o=json
            external_identifier: CBDB:245292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUM2HxD245JgNTZGYMevph
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T9lSzdcn11eMi1vgFj17gq
        subject_person_id: p_2DPUNb8tuJPhzRR5B7kFDr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFHmSzB7YuxMSBWSHNT2-t
          claim_id: c_T9lSzdcn11eMi1vgFj17gq
          source_id: s_6-zu7QlVrly12GaCeHMz11
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199457 王參）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6-zu7QlVrly12GaCeHMz11
            source_type: api_record
            title: 中国历代人物传记资料库：王斗南（CBDB 245292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245292&o=json
            external_identifier: CBDB:245292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nMp3bRUZX5b7h1zfUaXGei
        status: active
        display_name: 王參
        merged_into_person_id: null
---

# 王斗南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斗南 | accepted |
| bio.summary | 王斗南，明人物。成化八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 245292） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AUM2HxD245JgNTZGYMevph | 王鐸 | accepted |
| other | p_nMp3bRUZX5b7h1zfUaXGei | 王參 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斗南（CBDB 245292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245292&o=json)
