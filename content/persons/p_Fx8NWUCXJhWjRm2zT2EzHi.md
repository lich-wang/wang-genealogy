---
schema: wang-person/v1
id: p_Fx8NWUCXJhWjRm2zT2EzHi
status: active
merged_into: null
display_name: 王觀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hEbPG7c7xFkCwFa9mLWcUA
        subject_person_id: p_Fx8NWUCXJhWjRm2zT2EzHi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZHYe5BJtQYxp1Ksgt8AbJU
          claim_id: c_hEbPG7c7xFkCwFa9mLWcUA
          source_id: s_43Q7ThxfT1VKKB159cExkc
          stance: supports
          locator: CBDB:550871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550871）
          source: &a1
            id: s_43Q7ThxfT1VKKB159cExkc
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 550871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550871&o=json
            external_identifier: CBDB:550871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_28CmsPmyifT2g6D7dU7XKe
        subject_person_id: p_Fx8NWUCXJhWjRm2zT2EzHi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王觀，清人物。籍贯蘇州府，入仕學校: 生員(庠生)，曾任司巡檢。（中国历代人物传记资料库 CBDB 550871）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VgrkcEX1yucJnKQIEUdYpb
          claim_id: c_28CmsPmyifT2g6D7dU7XKe
          source_id: s_43Q7ThxfT1VKKB159cExkc
          stance: supports
          locator: CBDB:550871
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uB8TRgx2pNI3QixcQfQY0Q
        subject_person_id: p_UQEEqtuYzcUvSGyTq4Y74D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fx8NWUCXJhWjRm2zT2EzHi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mmH1Sb3m2QlTujuEZwr0ky
          claim_id: c_uB8TRgx2pNI3QixcQfQY0Q
          source_id: s_NCOvo8jGTmwdLig4vyuVSV
          stance: supports
          locator: CBDB：兄弟 王鼎（550870）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王觀 与 王鼎 为同胞（CBDB 记「兄弟」），王鼎 之父／母即 王觀 之父／母。
          source:
            id: s_NCOvo8jGTmwdLig4vyuVSV
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 550871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550871&o=json
            external_identifier: CBDB:550871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UQEEqtuYzcUvSGyTq4Y74D
        status: active
        display_name: 王宗源
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xem3c3v-UjU7R9525VlytZ
        subject_person_id: p_Fx8NWUCXJhWjRm2zT2EzHi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MYfB6EjPV6suNsFDBxvTEo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xr7YwX4jg95Q39f9wY_rBb
          claim_id: c_xem3c3v-UjU7R9525VlytZ
          source_id: s_NCOvo8jGTmwdLig4vyuVSV
          stance: supports
          locator: CBDB 亲属：兄弟（KinPerson 550870 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NCOvo8jGTmwdLig4vyuVSV
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 550871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550871&o=json
            external_identifier: CBDB:550871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MYfB6EjPV6suNsFDBxvTEo
        status: active
        display_name: 王鼎
        merged_into_person_id: null
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | 王觀，清人物。籍贯蘇州府，入仕學校: 生員(庠生)，曾任司巡檢。（中国历代人物传记资料库 CBDB 550871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UQEEqtuYzcUvSGyTq4Y74D | 王宗源 | accepted |
| other | p_MYfB6EjPV6suNsFDBxvTEo | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 550871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550871&o=json)
