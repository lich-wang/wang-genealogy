---
schema: wang-person/v1
id: p_DEv3ohYtiLoCf7yFP5svrc
status: active
merged_into: null
display_name: 王鐩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QKrKe1nWbcECu9mbDYe6J6
        subject_person_id: p_DEv3ohYtiLoCf7yFP5svrc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R5dxvasvkm3eNcr8U7ArrL
          claim_id: c_QKrKe1nWbcECu9mbDYe6J6
          source_id: s_BWkKM4NQt1kfmZTa2W6SsR
          stance: supports
          locator: CBDB:259321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259321）
          source: &a1
            id: s_BWkKM4NQt1kfmZTa2W6SsR
            source_type: api_record
            title: 中国历代人物传记资料库：王鐩（CBDB 259321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259321&o=json
            external_identifier: CBDB:259321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vsTFaCjP8xsThSL7bfZUzD
        subject_person_id: p_DEv3ohYtiLoCf7yFP5svrc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐩，明人物。成化二十三年進士，籍贯保安。（中国历代人物传记资料库 CBDB 259321）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RE_Em9uLDi8iVfzcRGbv3h
          claim_id: c_vsTFaCjP8xsThSL7bfZUzD
          source_id: s_BWkKM4NQt1kfmZTa2W6SsR
          stance: supports
          locator: CBDB:259321
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PYmvCJfE4V_a76ywZy5gzt
        subject_person_id: p_PFnZLXWBaZSZreaimdGwAe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DEv3ohYtiLoCf7yFP5svrc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OlGRztP1s5s2dXS7-q13xv
          claim_id: c_PYmvCJfE4V_a76ywZy5gzt
          source_id: s_oJhGQ-ydZ-PMHUbme6ff9M
          stance: supports
          locator: CBDB：兄弟 王鐸（200528）之父／母 王瑀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐩 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王鐩 之父／母。
          source:
            id: s_oJhGQ-ydZ-PMHUbme6ff9M
            source_type: api_record
            title: 中国历代人物传记资料库：王鐩（CBDB 259321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259321&o=json
            external_identifier: CBDB:259321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PFnZLXWBaZSZreaimdGwAe
        status: active
        display_name: 王瑀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__2wgHxwhSqdTEdd_cp2zu6
        subject_person_id: p_DEv3ohYtiLoCf7yFP5svrc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LG7z9nE3SbHJEkwafJSkBi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3MSiv0mn10FErq721t2DAJ
          claim_id: c__2wgHxwhSqdTEdd_cp2zu6
          source_id: s_oJhGQ-ydZ-PMHUbme6ff9M
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200528 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oJhGQ-ydZ-PMHUbme6ff9M
            source_type: api_record
            title: 中国历代人物传记资料库：王鐩（CBDB 259321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259321&o=json
            external_identifier: CBDB:259321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LG7z9nE3SbHJEkwafJSkBi
        status: active
        display_name: 王鐸
        merged_into_person_id: null
---

# 王鐩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐩 | accepted |
| bio.summary | 王鐩，明人物。成化二十三年進士，籍贯保安。（中国历代人物传记资料库 CBDB 259321） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PFnZLXWBaZSZreaimdGwAe | 王瑀 | accepted |
| other | p_LG7z9nE3SbHJEkwafJSkBi | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐩（CBDB 259321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259321&o=json)
