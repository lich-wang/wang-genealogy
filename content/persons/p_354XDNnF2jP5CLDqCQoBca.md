---
schema: wang-person/v1
id: p_354XDNnF2jP5CLDqCQoBca
status: active
merged_into: null
display_name: 王瑀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QK9hPyaMV9K5KqEREA7HkG
        subject_person_id: p_354XDNnF2jP5CLDqCQoBca
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GxbQ57g8xTjKk2biE329RA
          claim_id: c_QK9hPyaMV9K5KqEREA7HkG
          source_id: s_os4pAm8sVHo6U37PBhx5up
          stance: supports
          locator: CBDB:260247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260247）
          source: &a1
            id: s_os4pAm8sVHo6U37PBhx5up
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 260247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json
            external_identifier: CBDB:260247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RiHNsV3P25UoADwZ1MKSh4
        subject_person_id: p_354XDNnF2jP5CLDqCQoBca
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sVimukd2dxCYctI8xxt22c
          claim_id: c_RiHNsV3P25UoADwZ1MKSh4
          source_id: s_os4pAm8sVHo6U37PBhx5up
          stance: supports
          locator: CBDB:260247
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
  descendants: []
  other: []
---

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | 王瑀，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260247） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑀（CBDB 260247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json)
