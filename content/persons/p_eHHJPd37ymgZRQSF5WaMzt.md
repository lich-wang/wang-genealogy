---
schema: wang-person/v1
id: p_eHHJPd37ymgZRQSF5WaMzt
status: active
merged_into: null
display_name: 王延禧
cbdb_id: 17916
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zRw9N5cR1xkQzDBVPE6y9Z
        subject_person_id: p_eHHJPd37ymgZRQSF5WaMzt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延禧，宋人物。籍贯鉅野。（中国历代人物传记资料库 CBDB 17916）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DHXE4UH5v0DZgkmfcWWx90
          claim_id: c_zRw9N5cR1xkQzDBVPE6y9Z
          source_id: s_5fgk9p9GvkFSq66KLWrARt
          stance: supports
          locator: CBDB:17916
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5fgk9p9GvkFSq66KLWrARt
            source_type: api_record
            title: 中国历代人物传记资料库：王延禧（CBDB 17916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17916&o=json
            external_identifier: CBDB:17916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UHByV4XP6VTTrKQUAFF6Gb
        subject_person_id: p_eHHJPd37ymgZRQSF5WaMzt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dUSVHxmD7Q1z5WP7EwGhcG
          claim_id: c_UHByV4XP6VTTrKQUAFF6Gb
          source_id: s_5fgk9p9GvkFSq66KLWrARt
          stance: supports
          locator: CBDB:17916
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VF13ZaciZhaxBu5X9cKvz2
        subject_person_id: p_c7XAtRSHX73zJpPM32w4N2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eHHJPd37ymgZRQSF5WaMzt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YKlOQkJ54Eb9JMKRL53XFS
          claim_id: c_VF13ZaciZhaxBu5X9cKvz2
          source_id: s_WxxzuOvn5PN0cNJxFR2hF8
          stance: supports
          locator: CBDB 亲属：父（KinPerson 17915）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_WxxzuOvn5PN0cNJxFR2hF8
            source_type: api_record
            title: 中国历代人物传记资料库：王延禧（CBDB 17916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17916&o=json
            external_identifier: CBDB:17916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c7XAtRSHX73zJpPM32w4N2
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延禧，宋人物。籍贯鉅野。（中国历代人物传记资料库 CBDB 17916） | accepted |
| name.primary | 王延禧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c7XAtRSHX73zJpPM32w4N2 | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延禧（CBDB 17916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17916&o=json)
