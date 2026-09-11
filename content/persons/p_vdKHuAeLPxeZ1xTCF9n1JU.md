---
schema: wang-person/v1
id: p_vdKHuAeLPxeZ1xTCF9n1JU
status: active
merged_into: null
display_name: 王化亭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YJtrXT8rA2KBG3dw6GwgXR
        subject_person_id: p_vdKHuAeLPxeZ1xTCF9n1JU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化亭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iKthU5RxHR3GrzrEAiq82C
          claim_id: c_YJtrXT8rA2KBG3dw6GwgXR
          source_id: s_bzaqGowen9MoNMJVD5KfDT
          stance: supports
          locator: CBDB:636393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636393）
          source: &a1
            id: s_bzaqGowen9MoNMJVD5KfDT
            source_type: api_record
            title: 中国历代人物传记资料库：王化亭（CBDB 636393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636393&o=json
            external_identifier: CBDB:636393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3c3PVN4jXGmMmRoE3w1SPy
        subject_person_id: p_vdKHuAeLPxeZ1xTCF9n1JU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化亭，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 636393）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_In8ctQj9WfU2rSLm2r6wNi
          claim_id: c_3c3PVN4jXGmMmRoE3w1SPy
          source_id: s_bzaqGowen9MoNMJVD5KfDT
          stance: supports
          locator: CBDB:636393
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

# 王化亭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化亭 | accepted |
| bio.summary | 王化亭，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 636393） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化亭（CBDB 636393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636393&o=json)
