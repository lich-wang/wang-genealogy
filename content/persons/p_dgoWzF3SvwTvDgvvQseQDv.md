---
schema: wang-person/v1
id: p_dgoWzF3SvwTvDgvvQseQDv
status: active
merged_into: null
display_name: 王錦林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QSpzaA8sSnDV9g8r1S566z
        subject_person_id: p_dgoWzF3SvwTvDgvvQseQDv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3sySaqS84dPUxFuymi4RBT
          claim_id: c_QSpzaA8sSnDV9g8r1S566z
          source_id: s_GdPJufANviBraLSw8o5dD6
          stance: supports
          locator: CBDB:640581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640581）
          source: &a1
            id: s_GdPJufANviBraLSw8o5dD6
            source_type: api_record
            title: 中国历代人物传记资料库：王錦林（CBDB 640581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640581&o=json
            external_identifier: CBDB:640581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8owi59aMe9REnL3EC6jyKZ
        subject_person_id: p_dgoWzF3SvwTvDgvvQseQDv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦林，清人物。籍贯蕭山，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640581）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yZ3tzhHCJyfYscIFJB_EZO
          claim_id: c_8owi59aMe9REnL3EC6jyKZ
          source_id: s_GdPJufANviBraLSw8o5dD6
          stance: supports
          locator: CBDB:640581
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

# 王錦林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦林 | accepted |
| bio.summary | 王錦林，清人物。籍贯蕭山，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640581） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錦林（CBDB 640581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640581&o=json)
