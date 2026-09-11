---
schema: wang-person/v1
id: p_9HwAdJGnojFgrqfjKCEfL9
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kXRmuhGLrAKHAyvuR3egnt
        subject_person_id: p_9HwAdJGnojFgrqfjKCEfL9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DqyYnc7Jw6VV6ZvL9kJEUH
          claim_id: c_kXRmuhGLrAKHAyvuR3egnt
          source_id: s_1UDUD3D6FdAJiq4hTESMsb
          stance: supports
          locator: CBDB:279546
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279546）
          source: &a1
            id: s_1UDUD3D6FdAJiq4hTESMsb
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 279546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279546&o=json
            external_identifier: CBDB:279546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7rRa8vYRg6vgkEdsJCLA1H
        subject_person_id: p_9HwAdJGnojFgrqfjKCEfL9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。正德十二年進士，曾任義官。（中国历代人物传记资料库 CBDB 279546）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TDSEbPx3JfP4DIgQryu3hz
          claim_id: c_7rRa8vYRg6vgkEdsJCLA1H
          source_id: s_1UDUD3D6FdAJiq4hTESMsb
          stance: supports
          locator: CBDB:279546
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_5HJBqXucsLfejpoY2rSa2h
        subject_person_id: p_9HwAdJGnojFgrqfjKCEfL9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tbgtgIDRjNCcTM_kT6Yobq
          claim_id: c_5HJBqXucsLfejpoY2rSa2h
          source_id: s_1UDUD3D6FdAJiq4hTESMsb
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。正德十二年進士，曾任義官。（中国历代人物传记资料库 CBDB 279546） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 279546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279546&o=json)
